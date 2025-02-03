import { createContext, useEffect, useState } from "react";
import { Account, Client, Databases, ID } from "appwrite";
const AppWriteClient = new Client();
AppWriteClient.setEndpoint(import.meta.env.VITE_APPWRITE_URL).setProject(
  import.meta.env.VITE_APPWRITE_PROJECTID
);
const account = new Account(AppWriteClient);
const database = new Databases(AppWriteClient);
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  // Authentication code start
  const checkUser = async () => {
    try {
      const userData = await account.get();
      setuser(userData);
    } catch (error) {
      console.error("Check user error:", error.message);
      setuser(null);
    }
    setloading(false);
  };

  useEffect(() => {
    checkUser();
  }, []);

  const login = async (email, password) => {
    try {
      await account.createEmailPasswordSession(email, password);
      const userData = await account.get();
      console.log("Logged-in user:", userData);
      setuser(userData);
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setuser(null);
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  const SignUp = async (name, email, password) => {
    try {
      await account.create(ID.unique(), email, password, name);
  
    } catch (error) {
      console.error("Sign Up Error:", error.message);
    }
  };
  // Authentication code end here

  // Datatbase code start here

 const AddTodo = async (title) => {
   try {
     const response = await database.createDocument(
       import.meta.env.VITE_APPWRITE_DATABASEID,
       import.meta.env.VITE_APPWRITE_COLLECTIONID,
       ID.unique(),
       { title: title }
     );
     return response;
   } catch (error) {
     console.log("Error from addtodo method:", error);
   }
 };
  const getTodos = async () => {
    try {
      const response = await database.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASEID,
        import.meta.env.VITE_APPWRITE_COLLECTIONID
      );
      console.log("Todos fetched:", response.documents);
      return response.documents;
    } catch (error) {
      console.log("Error from getTodos method:", error);
      return [];
    }
  };
  const deleteTodo = async (todoId) => {
    try {
      await database.deleteDocument(
        import.meta.env.VITE_APPWRITE_DATABASEID,
        import.meta.env.VITE_APPWRITE_COLLECTIONID,
        todoId
      );
      console.log("Todo deleted:", todoId);
    } catch (error) {
      console.log("Error from deleteTodo method:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        logout,
        AddTodo,
        getTodos,
        deleteTodo,
        login,
        SignUp,
        user,
        loading,
        setloading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
