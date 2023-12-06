import { useEffect, useState } from 'react';
import { fetchUserData, addUserData } from '../api/userApi';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleAddUser = async (e) => {

    e.preventDefault();
    
    // Validation
    if (!newUser.name || !newUser.email || !newUser.password) {
      toast.error("All fields are required !");
      return;
    }

    try {
      const addedUser = await addUserData(newUser);
      console.log('User added:', addedUser);
      toast.success("User registered successfully!");
      navigate('/login');

    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  // Update state when input fields change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserData();
        setUser(userData);
      } catch (error) {
        console.error('Fetch Data Error:', error);
      }
    };

    fetchData();

  }, []);

  console.log('user Data', user)
  console.log('new user Data', newUser)

  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form className="mx-1 mx-md-4" >

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" placeholder='Enter name'
                            className="form-control"
                            name="name"
                            value={newUser.name}
                            onChange={handleInputChange}
                          />

                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example3c"
                            placeholder='Enter email'
                            className="form-control"
                            name="email"
                            value={newUser.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4c"
                            placeholder='Enter password'
                            className="form-control"
                            name="password"
                            value={newUser.password}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" onClick={handleAddUser} className="btn btn-primary btn-lg">Register</button>
                      </div>

                    </form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid" alt="Sample image"></img>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;