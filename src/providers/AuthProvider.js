import React, {useContext, useState} from "react";

const AuthContext = React.createContext();

const useAuth = () =>{
    return useContext(AuthContext);
}

const AuthProvider = (props) => {
  const [CurrentUser, setCurrentUser] = useState({});
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const[clickedpost,setclickedpost] = useState("");
  const[postbody,setpostbody] = useState("");
  const[postername,setpostername] = useState("");
  const[postname,setpostname] = useState("");
  const[like,setlike] = useState();


  const provideclickedpostid = () =>{
      return clickedpost;
  }
  return (
    <AuthContext.Provider
      value={{
        CurrentUser: CurrentUser,
        setCurrentUser: setCurrentUser,
        IsLoggedIn: IsLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        clickedpost:clickedpost,
        setclickedpost:setclickedpost,
        postbody:postbody,
        setpostbody:setpostbody,
        postername:postername,
        setpostername:setpostername,
        postname:postname,
        setpostname:setpostname,
        like:like,
        setlike:setlike,
          provideclickedpostid
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider,useAuth };
