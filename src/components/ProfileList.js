import { Component } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Profile.css";
import TextField from "@mui/material/TextField";

class ProfileList extends Component {
  constructor() {
    super();
    this.state = {
      profileData: [],
    };
  }

  addDetails = (event) => {
    event.preventDefault();
    //console.log(event.target.taskTitle.value);
    const data = event.target,
      newTodo = {
        name: data.name.value,
        age: data.age.value,
        dob: data.dob.value,
        gender: data.gender.value,
      };
    //console.log(newTodo);

    this.state.profileData.push(newTodo);

    this.setState({
      profileData: this.state.profileData,
    });
  };

  deleteDetails = (event) => {
    this.state.profileData.splice(event.target.value, 1);
    this.setState({
      profileData: this.state.profileData,
    });
  };
  render() {
    console.log(this.state.profileData);
    return (
      <>
        <div className="form_list">
          <div className="card-item">
            <Form onSubmit={this.addDetails}>
              <Form.Group controlId="formBasicname">
                <TextField

                  id="outlined-required"
                  label="Name"
                  defaultValue=""
                  type="text"
                  placeholder="Name"
                  name="name"
                />
              </Form.Group>
              <Form.Group  controlId="formBasicage">
                <TextField
                  id="outlined-required"
                  label="Age"
                  defaultValue=""
                  type="number"
                  placeholder="Number"
                  name="age"
                />
              </Form.Group>
              <Form.Group controlId="formBasicdob">
                <TextField
                  id="outlined-required"
                  defaultValue=""
                  type="date"
                  placeholder="mm/dd/yyyy"
                  name="dob"
                />
              </Form.Group>
              <Form.Group controlId="formBasicgender">
                <Box sx={{ minWidth: 120 }}>
                  <FormControl style={{ color: "black" }} fullWidth>
                    <InputLabel
                      // style={{ color: "black" }}
                      id="demo-simple-select-label"
                    >
                      Gender
                    </InputLabel>
                    <Select id="item" name="gender">
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Form.Group>
              <Button type="submit" className="btn btn-success">
                Add+
              </Button>
            </Form>
          </div>

          <ListGroup>
            <div className="all_Item">
              <table className="data">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>DOB</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.profileData.map((item, index) => (
                    <tr key={index}>
                      <td style = {{color: 'black'}}>{item.name}</td>
                      <td style = {{color: 'black'}}>{item.age}</td>
                      <td style = {{color: 'black'}} >{item.dob}</td>
                      <td style = {{color: 'black'}}>{item.gender}</td>

                      <Button
                        type="button"
                        variant="danger"
                        onClick={this.deleteDetails}
                        value={index}
                      >
                        Delete
                      </Button>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ListGroup>
        </div>
      </>
    );
  }
}

export default ProfileList;
