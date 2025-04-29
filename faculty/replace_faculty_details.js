module.exports = (
  facultyObj,
  faculty_details_card,
  faculty_details_page,
  departmentObj
) => {
  //   const departmentsArray = facultyObj[school].departments;
  const departmentsArray = departmentObj
    ? [departmentObj]
    : facultyObj[school].departments;
  // console.log(departmentsArray);

  // ============== FILLING IN THE FACULTY DETAILS OF THE SCHOOL ======================= //
  const departmentCardsHTML = departmentsArray
    .map((department) => {
      // =============replacing the data in the hod card ============ //
      // console.log(department.head_of_the_department);
      const hodObj = department.head_of_the_department[0];
      // console.log(hodObj);
      let hodCardHTML = faculty_details_card.replace(
        /{%NAME_OF_THE_FACULTY%}/g,
        hodObj.name
      );
      hodCardHTML = hodCardHTML.replace(/{%LINK%}/g, hodObj.link);
      hodCardHTML = hodCardHTML.replace(/{%EMAIL_ID%}/g, hodObj.email_id);
      hodCardHTML = hodCardHTML.replace(
        /{%SCHOOL_NAME%}/g,
        facultyObj[school].school_name
      );

      // ================== replacing the data in professors card ========================== //
      const professorsArray = department.professors;
      // console.log(professorsArray);

      const professorCardHTML = professorsArray
        .map((professor) => {
          // console.log(professor);
          let output = faculty_details_card.replace(
            /{%NAME_OF_THE_FACULTY%}/g,
            professor.name
          );
          output = output.replace(/{%EMAIL_ID%}/g, professor.email_id);
          output = output.replace(/{%LINK%}/g, professor.link);

          if (professor.name === "") {
            output = output.replace(/{%SCHOOL_NAME%}/g, professor.school_name);
            faculty_details_page = faculty_details_page.replace(
              /{%PROFESSOR_STRING%}/g,
              ""
            );
          } else {
            output = output.replace(
              /{%SCHOOL_NAME%}/g,
              facultyObj[school].school_name
            );
            faculty_details_page = faculty_details_page.replace(
              /{%PROFESSOR_STRING%}/g,
              "PROFESSORS"
            );
          }
          return output;
        })
        .join("");
      faculty_details_page = faculty_details_page.replace(
        /{%PROFESSOR_CARDS%}/g,
        professorCardHTML
      );

      // ==================== replacing the data in the associate professors cards ================= //

      const associatesArray = department.associate_professors;
      // console.log(associatesArray);
      // console.log(department.professors);
      const associateCardsHTML = associatesArray
        .map((associate) => {
          //   console.log(associate);
          let output = faculty_details_card.replace(
            /{%NAME_OF_THE_FACULTY%}/g,
            associate.name
          );
          output = output.replace(/{%EMAIL_ID%}/g, associate.email_id);
          output = output.replace(
            /{%SCHOOL_NAME%}/g,
            facultyObj[school].school_name
          );
          output = output.replace(/{%LINK%}/g, associate.link);

          return output;
        })
        .join("");
      //   console.log("this is associate card");
      //   console.log(associatesArray);

      // replacing the placehoLder in the faculty_details_page
      faculty_details_page = faculty_details_page.replace(
        /{%ASSOCIATE_CARDS%}/g,
        associateCardsHTML
      );

      // ========================= replacing the data in the assistant professors card ================ //

      const assistantsArray = department.assistant_professors;
      // console.log(assistantsArray);
      // console.log(department.professors);
      const assistantCardsHTML = assistantsArray
        .map((assistant) => {
          //   console.log(assistant);
          let output = faculty_details_card.replace(
            /{%NAME_OF_THE_FACULTY%}/g,
            assistant.name
          );
          output = output.replace(/{%EMAIL_ID%}/g, assistant.email_id);
          output = output.replace(
            /{%SCHOOL_NAME%}/g,
            facultyObj[school].school_name
          );
          output = output.replace(/{%LINK%}/g, assistant.link);

          return output;
        })
        .join("");
      //   console.log("this is assistants card");
      //   console.log(assistantsArray);
      faculty_details_page = faculty_details_page.replace(
        /{%ASSISTANT_CARDS%}/g,
        assistantCardsHTML
      );
      // =================== replacing the HOD_CARD placeholder ======================================= //
      faculty_details_page = faculty_details_page.replace(
        /{%HOD_CARD%}/g,
        hodCardHTML
      );
      faculty_details_page = faculty_details_page.replace(
        /{%NAME_OF_THE_DEPARTMENT%}/g,
        department.department_name
      );
      return faculty_details_page;
      // console.log(hodCardHTML);
    })
    .join("");
  //   console.log(departmentCardsHTML);
  return departmentCardsHTML;
};
