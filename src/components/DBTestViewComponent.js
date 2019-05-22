import React from "react";
import styled from "styled-components";
import SQLite from "react-native-sqlite-storage";

const Container = styled.View``;

const Name = styled.Text``;

class DBTestViewComponent extends React.Component {
  constructor(props) {
    super(props);
    const db = SQLite.openDatabase(
      {
        name: "TestDB.db",
        location: "default",
        createFromLocation: "~www/TestDB.db"
      },
      () => {},
      error => {
        console.log(error);
      }
    );

    this.state = {
      db,
      users: []
    };
  }

  componentDidMount = () => {
    const { db } = this.state;
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM sqlite_master WHERE type='table';`,
        [],
        (tx, results) => {
          const rows = results.rows;
          let users = [];

          for (let i = 0; i < rows.length; i++) {
            users.push({
              ...rows.item(i)
            });
          }
          console.log(users);

          this.setState({ users });
        }
      );
    });
  };

  componentWillUnmount = () => {
    const { db } = this.state;

    db.close();
  };

  render() {
    const { users } = this.state;
    console.log(users);
    return (
      <Container>
        <Name>hihi</Name>
      </Container>
    );
  }
}

export default DBTestViewComponent;
