  
import React, { useState, useEffect, useRef } from 'react';
import { IAuthModal } from '../../../Utils/interfaces';
import LoggedInUsersView from './LoggedInUsers.view';


const LoggedInUsersLogic: React.FC = () => {
  const [loggedInUsers, setLoggedInUsers] = useState<IAuthModal[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const authData = localStorage.getItem('authData');
  const currentUser: IAuthModal | null = authData ? JSON.parse(authData) : null;
  const loadingRef = useRef(false);

  const fetchLoggedInUsers = async () => {
    if (!currentUser || currentUser.roleid !== 1) {
      setErrorMessage('Access denied. Only admin can view this page.');
      return;
    }

    if (loadingRef.current) return; 

    loadingRef.current = true; 

    try {
      const response = await fetch(`http://localhost:8080/loggedInUsers/${currentUser.roleid}`);
      if (!response.ok) throw new Error('Failed to fetch logged-in users');
      const data: IAuthModal[] = await response.json();
      setLoggedInUsers(data);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unknown error occurred');
      }
    } finally {
      loadingRef.current = false; // Reset loading state when fetch is done
    }
  };

  useEffect(() => {
    fetchLoggedInUsers(); // Call the function here
  }, [currentUser?.roleid]); // Only rerun if currentUser.roleid changes



 



  const handleLogout = async (loginUserId: number) => {
    if (!currentUser) {
        setErrorMessage('You must be logged in to log out users.');
        return;
    }

    try {
        const response = await fetch(`http://localhost:8080/logoutUser/${currentUser.roleid}/${loginUserId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specify that the request body is JSON
                'Accept': 'application/json' // Specify that the response should be JSON
            }
        });

        // Check if the response is not ok
        if (!response.ok) throw new Error('Failed to log out user');

        // Check if the current user is the one being logged out
        if (loginUserId === currentUser.login_user_id) {
            // Remove current user's session or token
            localStorage.removeItem('authData');
            alert('You have been logged out.');
            window.location.href = '/'; // Redirect to login page
        } else {
            // Show alert for successful logout of another user
            alert('User logged out successfully.');
        }

        // Re-fetch the logged-in users to update the list
        await fetchLoggedInUsers();
    } catch (error) {
        // Handle errors and set the error message
        if (error instanceof Error) {
            setErrorMessage(error.message);
        } else {
            setErrorMessage('An unknown error occurred');
        }
    }
};


 




  return (
    <LoggedInUsersView
      loggedInUsers={loggedInUsers}
      errorMessage={errorMessage}
      handleLogout={handleLogout}
    />
  );
};

export default LoggedInUsersLogic;

