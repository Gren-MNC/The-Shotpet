import React from 'react';
import SimpleReactFooter from "simple-react-footer";

function Footer() {
    const description = "Sinh viên thực hiện: Nguyễn Minh Cường-20110132, Phạm Văn Lương-20110520";
    const title = "Môn đồ án công nghệ thông tin";
    const columns = [
      {
          title: "Contact",
          resources: [
              {
                  name: "Cuong",
                  link: "https://www.facebook.com/GrenNMC4102"
              },
              {
                  name: "Luong",
                  link: "https://www.facebook.com/luongwind"
              }
          ]
      },
      {
          title: "Address",
          resources: [
              {
                  name: "HCMUTE, số 1, Võ Văn Ngân. P. LINH CHIỂU, TP. Thủ Đức, Tp. Hồ Chí Minh",
                  link: "https://hcmute.edu.vn/"
              }
          ]
      },
   ];
   return <SimpleReactFooter 
      description={description} 
      title={title}
      columns={columns}
      linkedin=""
      facebook=""
      twitter=""
      instagram=""
      youtube=""
      pinterest=""
      copyright="IT Project HCMUTE"
      iconColor="black"
      backgroundColor="white"
      fontColor="black"
      copyrightColor="darkgrey"
   />;
}
export default Footer
