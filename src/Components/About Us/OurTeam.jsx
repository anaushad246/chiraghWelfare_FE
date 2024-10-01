import React from "react";

function OurTeam() {
  return (
    <section
      id="OurTeam"
      className="flex flex-col items-center text-center pt-4 px-4"
    >
      <h2 className="text-2xl font-bold ">Our Team</h2>
      <div className="bg-[#2596be] shadow-md  pt-4 h-64 overflow-scroll ">
        <table className=" shadow-lg rounded-lg border border-gray-200">
          <thead className="">
            <tr>
              <th className="py-3 px-4 border-b border-gray-200 text-left">
                Name
              </th>
              <th className="py-3 px-4 border-b border-gray-200 text-left">
                Designation
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "MOHD WAJHUL QAMAR", designation: "President" },
              { name: "MD BADIUZZAMAN", designation: "Vice President" },
              { name: "SANAULLAH SIDDIQUI", designation: "BIHAR CO-CONVENER" },
              // { name: 'QUAMAR HUSNAIN', designation: 'Joint Secretary' },
              { name: "MD JAMAL SARIF", designation: "Member" },
              { name: "SHAHNAWAZ AHMAD", designation: "Co-Treasurer" },
              { name: "ABDUSSAMAD", designation: "Bihar Convener" },
              { name: "MD BELALUDDIN", designation: "Delhi Convener" },
              // { name: 'AFTAB ALAM', designation: 'Foreign Convener' },
              // { name: 'IQBAL HAIDER', designation: 'Mumbai Convener' },
              // { name: 'MD DANISH', designation: 'Director of Fund Raising' },
              // { name: 'ZULFEQAR AHMAD', designation: 'Advert. & Tech. Manager' },
              // { name: 'SHAMSHAD ALI', designation: 'Co-Convener' },
              { name: "INTEKHAB ALAM", designation: "Co-Convener" },
              // { name: 'MD ATHAR ALI', designation: 'Co-Convener' },
            ].map((member, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b border-gray-200">
                  {member.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {member.designation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default OurTeam;
