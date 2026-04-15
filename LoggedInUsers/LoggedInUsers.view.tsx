

// import React from 'react';
// import { IAuthModal } from '../../../Utils/interfaces';
// // import Button, { ButtonClass, ButtonSize, Title } from "../../../../components/FormComponents/AddButton";
// import Button ,{ ButtonClass, ButtonSize, Title }from '../../../components/FormComponents/AddButton';
// interface ILoggedInUsersViewProps {
//   loggedInUsers: IAuthModal[];
//   errorMessage: string | null;
//   handleLogout: (loginUserId: number) => Promise<void>;
// }

// const LoggedInUsersView: React.FC<ILoggedInUsersViewProps> = ({
//   loggedInUsers,
//   errorMessage,
//   handleLogout,
// }) => {
//   if (errorMessage) {
//     return <p className="error">{errorMessage}</p>;
//   }

//   // Calculate the midpoint to split the users into two halves
//   const midpoint = Math.ceil(loggedInUsers.length / 2);
//   const firstHalf = loggedInUsers.slice(0, midpoint);
//   const secondHalf = loggedInUsers.slice(midpoint);

//   return (
//     <div className="col-lg-12 col-md-12">
//       <section id="LoggedInUsersInfo">
//         <div className="col-lg-12 col-md-12">
//           <div className="box box-info">
//             <div className="box-header with-border">
//               <h3 className="box-title">Logged In Users</h3>
//               <div className="box-tools pull-right">
//                 <button type="button" className="btn btn-box-tool" data-widget="collapse">
//                   <i className="fa fa-minus"></i>
//                 </button>
//               </div>
//             </div>
//             <div className="box-body">
//               <div className="row">
//                 {/* First Half of Users */}
//                 <div className="col-md-6">
//                   {/* <h4>Active Users (Part 1)</h4> */}
//                   {firstHalf.length > 0 ? (
//                     <table className="table table-bordered table-striped table-hover table-sm">
//                       <thead className="bg-light">
//                         <tr>
//                          <th>Login User ID</th>
//                           <th>User Name</th>
//                           <th>Action</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {firstHalf.map((user) => (
//                           <tr key={user.login_user_id}>
//                             <td>{user.login_user_id}</td>
//                             <td>{user.user_name}</td>
//                             {/* <td>{user.branch_name}</td> */}
//                             <td>
//                               {/* <button
//                                 className="btn btn-danger btn-sm"
//                                 onClick={() => handleLogout(user.login_user_id)}
//                               >
//                                 Log Out
//                               </button> */}

                              
// <Button
//                                         buttonClass={ButtonClass.Primary}
//                                         buttonLabel={"LogOut"}
//                                         size={ButtonSize.Small}

//                                         onClick={() => handleLogout(user.login_user_id)} title={Title.Export}

//                         // isDisabled={!hasChange}
//                     />
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   ) : (
//                     <p>No users are currently logged in.</p>
//                   )}
//                 </div>

//                 {/* Second Half of Users */}
//                 <div className="col-md-6">
//                   {/* <h4>Active Users (Part 2)</h4> */}
//                   {secondHalf.length > 0 ? (
//                     <table className="table table-bordered table-striped table-hover table-sm">
//                       <thead className="bg-light">
//                         <tr>
//                         <th>Login User ID</th>
//                           <th>User Name</th>
//                           {/* <th>Branch Name</th> */}
//                           <th>Action</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {secondHalf.map((user) => (
//                           <tr key={user.login_user_id}>
//                               <td>{user.login_user_id}</td>
//                             <td>{user.user_name}</td>
//                             {/* <td>{user.branch_name}</td> */}
//                             <td>
//                               {/* <button
//                                 className="btn btn-danger btn-sm"
//                                 onClick={() => handleLogout(user.login_user_id)}
//                               >
//                                 Log Out
//                               </button> */}




//                                <Button
//                                         buttonClass={ButtonClass.Primary}
//                                         buttonLabel={"LogOut"}
//                                         size={ButtonSize.Small}

//                                         onClick={() => handleLogout(user.login_user_id)} title={Title.Export}

//                         // isDisabled={!hasChange}
//                     />
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   ) : (
//                     <p>No users are currently logged in.</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LoggedInUsersView;





import React, { useState } from 'react';
import { IAuthModal } from '../../../Utils/interfaces';
import Button, { ButtonClass, ButtonSize, Title } from '../../../components/FormComponents/AddButton';
import Pagination from '../../Masters/pagination';


interface ILoggedInUsersViewProps {
  loggedInUsers: IAuthModal[];
  errorMessage: string | null;
  handleLogout: (loginUserId: number) => Promise<void>;
}

const LoggedInUsersView: React.FC<ILoggedInUsersViewProps> = ({
  loggedInUsers,
  errorMessage,
  handleLogout,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Early return for error message
  if (errorMessage) {
    return <p className="error">{errorMessage}</p>;
  }

  // Calculate total pages
  const totalPages = Math.ceil(loggedInUsers.length / itemsPerPage);

  // Calculate the index range for the current page
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;

  // Get the current users based on pagination
  const currentUsers = loggedInUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Split users into two halves
  const midpoint = Math.ceil(currentUsers.length / 2);
  const firstHalf = currentUsers.slice(0, midpoint);
  const secondHalf = currentUsers.slice(midpoint);

  return (
    <div className="col-lg-12 col-md-12">
      <section id="LoggedInUsersInfo">
        <div className="col-lg-12 col-md-12">
          <div className="box box-info">
            <div className="box-header with-border">
              <h3 className="box-title">Logged In Users</h3>
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse">
                  <i className="fa fa-minus"></i>
                </button>
              </div>
            </div>
            <div className="box-body">
              <div className="row">
                {/* First Half of Users */}
                <div className="col-md-6">
                  {firstHalf.length > 0 ? (
                    <table className="table table-bordered table-striped table-hover table-sm">
                      <thead className="bg-light">
                        <tr>
                          <th>Login User ID</th>
                          <th>User Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {firstHalf.map((user) => (
                          <tr key={user.login_user_id}>
                            <td>{user.login_user_id}</td>
                            <td>{user.user_name}</td>
                            <td>
                              <Button
                                buttonClass={ButtonClass.Primary}
                                buttonLabel={"Log Out"}
                                size={ButtonSize.Small}
                                onClick={() => handleLogout(user.login_user_id)}
                                title={Title.Export}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p>No users are currently logged in.</p>
                  )}
                </div>

                {/* Second Half of Users */}
                <div className="col-md-6">
                  {secondHalf.length > 0 ? (
                    <table className="table table-bordered table-striped table-hover table-sm">
                      <thead className="bg-light">
                        <tr>
                          <th>Login User ID</th>
                          <th>User Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {secondHalf.map((user) => (
                          <tr key={user.login_user_id}>
                            <td>{user.login_user_id}</td>
                            <td>{user.user_name}</td>
                            <td>
                              <Button
                                buttonClass={ButtonClass.Primary}
                                buttonLabel={"Log Out"}
                                size={ButtonSize.Small}
                                onClick={() => handleLogout(user.login_user_id)}
                                title={Title.Export}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p>No users are currently logged in.</p>
                  )}
                </div>
              </div>
              {/* Pagination Controls */}
              <Pagination 
                totalPages={totalPages} 
                currentPage={currentPage} 
                onPageChange={setCurrentPage} 
                visiblePages={3} // You can adjust this as needed
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoggedInUsersView;
