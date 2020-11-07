import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Container from "@material-ui/core/Container";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CheckIcon from "@material-ui/icons/Check";
import Grid from "@material-ui/core/Grid";
import { Switch, Route } from "react-router-dom";
import AddUser from "./AddUser";
// import AddUserModal from "./AddUserModal";
const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },

//   appBarSpacer: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     height: "100vh",
//     overflow: "auto",
//   },
//   container: {
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     display: "flex",
//     overflow: "auto",
//     flexDirection: "column",
//   },
  fixedHeight: {
    height: 240,
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
}));

export default function MaterialTableDemo() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleModalOpen = () => {
    setOpen(true);
  };

  const [addNewUser, setAddNewUser] = React.useState({});

  const [columns, setColumns] = React.useState([
    { title: "PCN", field: "pcn" },
    { title: "Name", field: "name" },
    { title: "CNIC", field: "cnic" },
    { title: "DOB", field: "dob" },
    { title: "Age", field: "age" },
    { title: "Country", field: "country" },
    { title: "Area", field: "area" },
    { title: "City", field: "city" },
    { title: "Consultant", field: "consultant" },
    { title: "Phone", field: "phone" },

    // {
    //   title: "Birth Place",
    //   field: "birthCity",
    //   lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
    // },
  ]);
  const [userData, setUserData] = React.useState([]);
  useEffect(() => {
    (async function () {
      try {

        // Uncomment the FETCH USER BLOCK code once you integrate the FETCH USER API

        // START FETCH USER BLOCK

        // let jsonRes = await fetch(urls.FETCH_USERS);
        // let res = await jsonRes.json();
        
        // END FETCH USER BLOCK


        // Delete the below code once you integrate the frontend with the backend

        // START ALTERNATE FETCH USER BLOCK
        let data = [
          {
            pcn: "0300",
            name: "user1",
            cnic: "42101",
            dob: "2016-06-08",
            age: "4",
            country: "Pakistan",
            area: "NK",
            city: "karachi",
            consultant: "123",
            phone: "12356",
            husbands_name:"husbands_name",
            father_name:"father_name",
            mother_name:"mother_name",
            address:"address",
            marital_status:"Single",
            married_since:"Single",
            cousin_marriage:"Single",
            education:"BS",
            occupation:"Doctor",
            husbands_education:"BS",
            husbands_occupation:"Doctor",
            referred_by:"referred_by",
            cell:"cell",
            cell2:"cell2",
            husbands_cell:"husbands_cell",
            emergency_contact:"emergency_contact"
          },
          {
            pcn: "0300",
            name: "user2",
            cnic: "42102",
            dob: "2014-06-08",
            age: "6",
            country: "Pakistan",
            area: "NK",
            city: "karachi",
            consultant: "123",
            phone: "12356",
          },
          {
            pcn: "0300",
            name: "user3",
            cnic: "42103",
            dob: "",
            age: "",
            country: "Pakistan",
            area: "NK",
            city: "karachi",
            consultant: "123",
            phone: "12356",
          },
        ];
        let res = { body: data };

        // END ALTERNATE FETCH USER BLOCK

        setUserData(res.body)

      } catch (ex) {}
    })();
  }, []);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody style={{padding:"0px"}}>
          {/* <Container maxWidth="lg" className={classes.container}> */}
            <MaterialTable
              title={null}
              actions={[
                {
                  icon: (props) => {
                    return <EditIcon />;
                  },
                  tooltip: "Edit Data",
                  onClick: (event, rowData) => {
                    setAddNewUser({ ...rowData });
                    setOpen(true);
                  },
                },
              ]}
              icons={{
                Clear: (props) => <ClearIcon />,
                Search: (props) => <SearchIcon />,
                ResetSearch: (props) => <ClearIcon />,
                Add: (props) => null,
                Edit: (props) => {
                  return <EditIcon />;
                },
                SortArrow: (props) => null,
                Delete: (props) => <DeleteIcon />,
                FirstPage: (props) => <FirstPageIcon />,
                LastPage: (props) => <LastPageIcon />,
                PreviousPage: (props) => <NavigateBeforeIcon />,
                NextPage: (props) => <NavigateNextIcon />,
                Check: (props) => <CheckIcon />,
              }}
              columns={columns}
              data={userData}
            //   options={{headerStyle:{backgroundColor:"#ebebeb", color: "black", pointerEvents:"none"}}}
              editable={{
                onRowAdd: (newData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      // setState((prevState) => {
                      //   const data = [...prevState.data];
                      //   data.push(newData);
                      //   return { ...prevState, data };
                      // });
                    }, 600);
                  }),
                // onRowUpdate: (newData, oldData) =>
                //   new Promise((resolve) => {
                //     setTimeout(() => {
                //       resolve();
                //       if (oldData) {
                //         // setState((prevState) => {
                //         //   const data = [...prevState.data];
                //         //   data[data.indexOf(oldData)] = newData;
                //         //   return { ...prevState, data };
                //         // });
                //       }
                //     }, 600);
                //   }),
                onRowDelete: async (oldData) => {
                  return await (async function () {

                    // Uncomment the DELETE USER BLOCK code once you integrate the DELETE USER API

                    // START DELETE USER BLOCK
                    
                    // let currentDataJSON = await fetch(urls.DELETE_USER, {
                    //   method: "POST",
                    //   headers: {
                    //     Accept: "application/json",
                    //     "Content-Type": "application/json",
                    //   },
                    //   body: JSON.stringify({ ...oldData }),
                    // });
                    // let currentData = await currentDataJSON.json();

                    // END DELETE USER BLOCK


                    // START ALTERNATE DELETE USER BLOCK 

                    let data = [
                      {
                        pcn: "0300",
                        name: "user1",
                        cnic: "42101",
                        dob: "2016-06-08",
                        age: "4",
                        country: "Pakistan",
                        area: "NK",
                        city: "karachi",
                        consultant: "123",
                        phone: "12356",
                        husbands_name:"husbands_name",
                        father_name:"father_name",
                        mother_name:"mother_name",
                        address:"address",
                        marital_status:"Single",
                        married_since:"Single",
                        cousin_marriage:"Single",
                        education:"BS",
                        occupation:"Doctor",
                        husbands_education:"BS",
                        husbands_occupation:"Doctor",
                        referred_by:"referred_by",
                        cell:"cell",
                        cell2:"cell2",
                        husbands_cell:"husbands_cell",
                        emergency_contact:"emergency_contact"
                      },
                      {
                        pcn: "0300",
                        name: "user2",
                        cnic: "42102",
                        dob: "2014-06-08",
                        age: "6",
                        country: "Pakistan",
                        area: "NK",
                        city: "karachi",
                        consultant: "123",
                        phone: "12356",
                      },
                      {
                        pcn: "0300",
                        name: "user3",
                        cnic: "42103",
                        dob: "",
                        age: "",
                        country: "Pakistan",
                        area: "NK",
                        city: "karachi",
                        consultant: "123",
                        phone: "12356",
                      },
                    ];

                    data = data.filter((item) => item.cnic !== oldData.cnic);
                    let currentData = { body: data }

                    // END ALTERNATE DELETE USER BLOCK

                    setUserData(currentData.body);
                  })();

                  // return new Promise((resolve) => {
                  //   setTimeout(() => {
                  //     resolve();
                  //     // setState((prevState) => {
                  //     //   const data = [...prevState.data];
                  //     //   data.splice(data.indexOf(oldData), 1);
                  //     //   return { ...prevState, data };
                  //     // });
                  //   }, 600);
                  // })
                },
              }}
            />
        {/* <AddUserModal
          open={open}
          setOpen={setOpen}
          setAddNewUser={setAddNewUser}
          addNewUser={{ ...addNewUser }}
          setUserData={setUserData}
          editUser={true}
        /> */}
      {/* </Container> */}
     
          </CardBody>
        </Card>
      </GridItem>
      </GridContainer>

       
    </main>
  );
}
