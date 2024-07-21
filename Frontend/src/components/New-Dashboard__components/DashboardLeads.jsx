import React from "react";
import styles from "./DashboardProfile.module.css";

import { CgMenu } from "react-icons/cg";

const DashboardLeads = (props) => {

  return (
    <>
      <div className={styles["NewDashboard-Body__container"]}>
        <div className={styles["NewDashboard-header"]}>
          <CgMenu
            className={styles["menu-btn"]}
            onClick={() => props.menuDisplayHandler(true)}
          />
          <h1 className={styles["dashboard-heading"]}>View all Vendor Leads</h1>
        </div>
        <div className={styles["NewDashboard-booking__route"]}>
          <h5>Vendor Leads</h5>
        </div>
        {/* <div className={styles["NewDashboard-photoshootCard"]}>
          <ProfilePersonalDetails />
          <div className={styles["NewDashboard-photoshootCard__section2"]}>
            <UserAddress />
            <UserPassword />
          </div>
        </div> */}
        <div class="mt-5">
          <div class="rounded">
            <div class="table-responsive" style={{height: "550px", overflow: "scroll"}}>
              <table class="table">
                <thead className={styles["thead"]}>
                  <tr class="bg-red">
                    {/* <th class="text-center">S. No.</th> */}
                    <th>Name</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className={styles["table-body"]}>
                  <tr className={styles["cell-1"]}>
                    {/* <td class="text-center">1</td> */}
                    {/* <td>#SO-13487</td>
                    <td>Gasper Antunes</td>
                    <td>
                      <span class="badge badge-danger">Fullfilled</span>
                    </td>
                    <td>$2674.00</td>
                    <td>Today</td> */}
                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-danger">Pending</span>
                    </td>
                  </tr>
                  <tr
                    className={styles["cell-1"]}
                  >
                    {/* <td class="text-center">2</td> */}
                    {/* <td>#SO-13488</td>
                    <td>Tinder Steel</td>
                    <td>
                      <span class="badge badge-success">Fullfilled</span>
                    </td>
                    <td>$3664.00</td>
                    <td>Yesterday</td> */}

                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-success">Confirmed</span>
                    </td>
                  </tr>
                  <tr
                    className={styles["cell-1"]}
                  >
                    {/* <td class="text-center">3</td> */}
                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-danger">Pending</span>
                    </td>
                  </tr>
                  <tr
                    className={styles["cell-1"]}
                  >
                    {/* <td class="text-center">4</td> */}
                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-success">Confirmed</span>
                    </td>
                  </tr>
                  <tr className={styles["cell-1"]}>
                    {/* <td class="text-center">1</td> */}
                    {/* <td>#SO-13487</td>
                    <td>Gasper Antunes</td>
                    <td>
                      <span class="badge badge-danger">Fullfilled</span>
                    </td>
                    <td>$2674.00</td>
                    <td>Today</td> */}
                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-danger">Pending</span>
                    </td>
                  </tr>
                  <tr
                    className={styles["cell-1"]}
                  >
                    {/* <td class="text-center">2</td> */}
                    {/* <td>#SO-13488</td>
                    <td>Tinder Steel</td>
                    <td>
                      <span class="badge badge-success">Fullfilled</span>
                    </td>
                    <td>$3664.00</td>
                    <td>Yesterday</td> */}

                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-success">Confirmed</span>
                    </td>
                  </tr>
                  <tr
                    className={styles["cell-1"]}
                  >
                    {/* <td class="text-center">3</td> */}
                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-danger">Pending</span>
                    </td>
                  </tr>
                  <tr
                    className={styles["cell-1"]}
                  >
                    {/* <td class="text-center">4</td> */}
                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-success">Confirmed</span>
                    </td>
                  </tr>
                  <tr className={styles["cell-1"]}>
                    {/* <td class="text-center">1</td> */}
                    {/* <td>#SO-13487</td>
                    <td>Gasper Antunes</td>
                    <td>
                      <span class="badge badge-danger">Fullfilled</span>
                    </td>
                    <td>$2674.00</td>
                    <td>Today</td> */}
                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-danger">Pending</span>
                    </td>
                  </tr>
                  <tr
                    className={styles["cell-1"]}
                  >
                    {/* <td class="text-center">2</td> */}
                    {/* <td>#SO-13488</td>
                    <td>Tinder Steel</td>
                    <td>
                      <span class="badge badge-success">Fullfilled</span>
                    </td>
                    <td>$3664.00</td>
                    <td>Yesterday</td> */}

                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-success">Confirmed</span>
                    </td>
                  </tr>
                  <tr
                    className={styles["cell-1"]}
                  >
                    {/* <td class="text-center">3</td> */}
                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-danger">Pending</span>
                    </td>
                  </tr>
                  <tr
                    className={styles["cell-1"]}
                  >
                    {/* <td class="text-center">4</td> */}
                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-success">Confirmed</span>
                    </td>
                  </tr>
                  <tr className={styles["cell-1"]}>
                    {/* <td class="text-center">1</td> */}
                    {/* <td>#SO-13487</td>
                    <td>Gasper Antunes</td>
                    <td>
                      <span class="badge badge-danger">Fullfilled</span>
                    </td>
                    <td>$2674.00</td>
                    <td>Today</td> */}
                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-danger">Pending</span>
                    </td>
                  </tr>
                  <tr
                    className={styles["cell-1"]}
                  >
                    {/* <td class="text-center">2</td> */}
                    {/* <td>#SO-13488</td>
                    <td>Tinder Steel</td>
                    <td>
                      <span class="badge badge-success">Fullfilled</span>
                    </td>
                    <td>$3664.00</td>
                    <td>Yesterday</td> */}

                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-success">Confirmed</span>
                    </td>
                  </tr>
                  <tr
                    className={styles["cell-1"]}
                  >
                    {/* <td class="text-center">3</td> */}
                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-danger">Pending</span>
                    </td>
                  </tr>
                  <tr
                    className={styles["cell-1"]}
                  >
                    {/* <td class="text-center">4</td> */}
                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-success">Confirmed</span>
                    </td>
                  </tr>
                  <tr className={styles["cell-1"]}>
                    {/* <td class="text-center">1</td> */}
                    {/* <td>#SO-13487</td>
                    <td>Gasper Antunes</td>
                    <td>
                      <span class="badge badge-danger">Fullfilled</span>
                    </td>
                    <td>$2674.00</td>
                    <td>Today</td> */}
                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-danger">Pending</span>
                    </td>
                  </tr>
                  <tr
                    className={styles["cell-1"]}
                  >
                    {/* <td class="text-center">2</td> */}
                    {/* <td>#SO-13488</td>
                    <td>Tinder Steel</td>
                    <td>
                      <span class="badge badge-success">Fullfilled</span>
                    </td>
                    <td>$3664.00</td>
                    <td>Yesterday</td> */}

                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-success">Confirmed</span>
                    </td>
                  </tr>
                  <tr
                    className={styles["cell-1"]}
                  >
                    {/* <td class="text-center">3</td> */}
                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-danger">Pending</span>
                    </td>
                  </tr>
                  <tr
                    className={styles["cell-1"]}
                  >
                    {/* <td class="text-center">4</td> */}
                    <td>Virendra Maurya</td>
                    <td>9451525650</td>
                    <td>vkmaurya1191@gmail.com</td>
                    <td>pre-wedding_photo_shoot</td>
                    <td>13 aug 12000 18:35:21</td>
                    <td>
                      <span class="badge badge-success">Confirmed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLeads;
