import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const menuItem = [
        {
            path: "/resource",
            name: "Resource",
        },
        {
            path: "/project",
            name: "Project",
        },
        {
            path: "/process",
            name: "Process",
        },
        {
            path: "/task",
            name: "Task",
        },]
    return (
        <div className="container">
            <div className="sidebar bg-slate-800 w-[12%]">
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link">
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;