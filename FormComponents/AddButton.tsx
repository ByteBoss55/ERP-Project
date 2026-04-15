import React from 'react';

export enum ButtonClass {
    Primary = "btn-primary",
    Secondary = "btn-secondary",
    Success = "btn-success",
    Danger = "btn-danger",
    Warning = "btn-warning"
}

export enum ButtonSize {
    Small = "btn-sm",
    Medium = "btn-md",
    Large = "btn-lg",
}

export enum IconClass {
    Add = "fa-plus",
    Minus = "fa-minus",
    Remove = "fa-trash",
    Edit = "fa-pencil-square-o",
    Search = "fa-search", // Add the Search icon here
    Download="fa-download",//add download
    Print= "fa-print",

}

export enum Title {
    Export = 'Excel Download',
    Add = 'Add Data',
    Print = 'Print',
    Update = 'Update',
    Delete = 'Delete',
    save = 'Save',
    Search = 'Search',
    Clear = 'Clear Form',
    Close = 'Close',
    Edit='Edit',
    Preview="Preview",
    Mail="send Mail"
}




interface IButtonProps {
    iconName?: IconClass;
    buttonClass: ButtonClass;
    buttonLabel: string;
    onClick?: () => void;
    size: ButtonSize;
    isDisabled?: boolean;
    title: Title;
}

const Button: React.FC<IButtonProps> = ({iconName, buttonClass, buttonLabel, onClick, size, isDisabled,title}) => {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
          
        <button className={`btn ${buttonClass} ${size}`}  onClick={handleClick} disabled={isDisabled} title={title}>
            {iconName && <><i className={`fa ${iconName}`}></i></>}
            {buttonLabel && <> {buttonLabel}</>}
        </button>
    )
}

export default Button;