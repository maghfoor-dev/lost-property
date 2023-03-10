import { PostLostItemType } from "../preload";
import { db } from "./dbConnection";

// getting all lost items reported from lost_items table
export function getLostItemsReported() {
  const qry = "SELECT * FROM lost_items;";
  return new Promise((resolve, reject) => {
    let statement = db.prepare(qry);
    statement.all((err, rows) => {
      if (err) {
        console.error(err.message);
        reject(err);
      } else {
        const formattedData = rows.map((item) => {
          if (item.ItemFound === 0) {
            return { ...item, ItemFound: "No" };
          } else {
            return { ...item, ItemFound: "Yes" };
          }
        });
        resolve(formattedData);
      }
      statement.finalize();
    });
  });
}

//getting items from found_items table
export function getFoundItemsReported() {
  const qry = "SELECT * FROM found_items;";
  return new Promise((resolve, reject) => {
    let statement = db.prepare(qry);
    statement.all((err, rows) => {
      if (err) {
        console.error(err.message);
        reject(err);
      } else {
        const formattedData = rows.map((item) => {
          if (item.Returned === 0) {
            return { ...item, Returned: "No" };
          } else {
            return { ...item, Returned: "Yes" };
          }
        });
        resolve(formattedData);
      }
      statement.finalize();
    });
  });
}

export function postLostItem(data: PostLostItemType) {
  const { PersonName, ItemName, AimsID, Details, LostArea, PhoneNumber } = data;

  const query = `INSERT INTO lost_items (ItemName, Details, LostArea, PersonName, AimsID, PhoneNumber) VALUES ('${ItemName}', '${Details}', '${LostArea}', '${PersonName}', '${AimsID}', '${PhoneNumber}');
  `;
  return new Promise((resolve, reject) => {
    let statement = db.prepare(query);
    statement.all((err, rows) => {
      if (err) {
        console.error(err.message);
        reject(err.message);
      } else {
        resolve(rows);
      }
      statement.finalize();
    });
  });
}

//deleting a posted item
export function deleteLostItem(id: number) {
  const query = `DELETE FROM lost_items WHERE ID = ${id}`;
  return new Promise((resolve, reject) => {
    let statement = db.prepare(query);
    statement.all((err, rows) => {
      if (err) {
        console.error(err.message);
        reject(err.message);
      } else {
        resolve(rows);
      }
      statement.finalize();
    });
  });
}

//Found a lost reported item
export function updateFoundColumn(id: number) {
  const query = `UPDATE lost_items SET ItemFound = 1 WHERE ID = ${id}`;
  return new Promise((resolve, reject) => {
    let statement = db.prepare(query);
    statement.all((err, rows) => {
      if (err) {
        console.error(err.message);
        reject(err.message);
      } else {
        resolve(rows);
      }
      statement.finalize();
    });
  });
}
