import CustomNavbar from "./CustomNavbar";

const Base=({title="welcome to website",children})=>{
    return(
        <div className="container-fluid">
            <CustomNavbar/>
            {children}
           

        </div>
    );
};
export default Base;