const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");
const replace_card = require(`${__dirname}/resources/replace_card`);
const replace_faculty_details = require(`${__dirname}/faculty/replace_faculty_details`);

//========================================= OVERVIEW =============================================================//

const overview_html = fs.readFileSync(`${__dirname}/index.html`, "utf-8");
const overview_css = fs.readFileSync(`${__dirname}/style.css`, "utf-8");
const overview_js = fs.readFileSync(`${__dirname}/script.js`, "utf-8");
const scroll_animation_js = fs.readFileSync(`${__dirname}/scroll.js`, "utf-8");

// ============================================== CREATE SERVER ======================================================= //
const server = http.createServer((req, res) => {
  // ===================================== ABOUT ===================================================================//

  const about_html = fs.readFileSync(`${__dirname}/about/about.html`, "utf-8");
  const about_css = fs.readFileSync(`${__dirname}/about/about.css`, "utf-8");
  const about_js = fs.readFileSync(`${__dirname}/about/about.js`, "utf-8");

  // ===================================== RESOURCES ===============================================================//

  let resources_html = fs.readFileSync(
    `${__dirname}/resources/templates/resources_overview.html`,
    "utf-8"
  );

  const resources_card = fs.readFileSync(
    `${__dirname}/resources/templates/resources_card.html`,
    "utf-8"
  );
  let resources_incard = fs.readFileSync(
    `${__dirname}/resources/templates/resources_incard.html`,
    "utf-8"
  );

  const resources_subdomains_card = fs.readFileSync(
    `${__dirname}/resources/templates/resources_subdomains_card.html`,
    "utf-8"
  );

  let resources_in_sub_domains_card = fs.readFileSync(
    `${__dirname}/resources/templates/resources_in_sub_domains_card.html`,
    "utf-8"
  );

  const resources_links_card = fs.readFileSync(
    `${__dirname}/resources/templates/resources_links_card.html`,
    "utf-8"
  );

  const resources_topics_card = fs.readFileSync(
    `${__dirname}/resources/templates/resources_topics_card.html`,
    "utf-8"
  );

  let resources_topics_in_sub_domains_card = fs.readFileSync(
    `${__dirname}/resources/templates/resources_topics_in_sub_domains_card.html`,
    "utf-8"
  );

  const resources_css = fs.readFileSync(
    `${__dirname}/resources/resources.css`,
    "utf-8"
  );

  const resources_json = fs.readFileSync(
    `${__dirname}/resources/temp.json`,
    "utf-8"
  );
  const resourcesObj = JSON.parse(resources_json);

  // =========================================== PLACEMENTS ======================================================= //
  let placements_page = fs.readFileSync(
    `${__dirname}/placements/templates/placements_page.html`,
    "utf-8"
  );

  const company_card = fs.readFileSync(
    `${__dirname}/placements/templates/company_card.html`,
    "utf-8"
  );
  const placements_css = fs.readFileSync(
    `${__dirname}/placements/placements.css`,
    "utf-8"
  );
  const placements_js = fs.readFileSync(
    `${__dirname}/placements/placements.js`,
    "utf-8"
  );

  const placements_json = fs.readFileSync(
    `${__dirname}/placements/placement_companies.json`,
    "utf-8"
  );

  const placementsObj = JSON.parse(placements_json);
  // ========================================= HIGHER STUDIES ===================================================== //
  let higher_studies_page = fs.readFileSync(
    `${__dirname}/higher_studies/templates/higher_studies_page.html`,
    "utf-8"
  );
  const exam_card = fs.readFileSync(
    `${__dirname}/higher_studies/templates/exam_card.html`,
    "utf-8"
  );
  const higher_studies_css = fs.readFileSync(
    `${__dirname}/higher_studies/higher_studies.css`,
    "utf-8"
  );
  const higher_studies_js = fs.readFileSync(
    `${__dirname}/higher_studies/higher_studies.js`,
    "utf-8"
  );

  const exam_details_json = fs.readFileSync(
    `${__dirname}/higher_studies/exam_details.json`,
    "utf-8"
  );

  const examDetailsObj = JSON.parse(exam_details_json);
  // ============================================== FACULTY ======================================================= //
  let faculty_schools_page = fs.readFileSync(
    `${__dirname}/faculty/templates/faculty_schools_page.html`,
    "utf-8"
  );

  const faculty_schools_card = fs.readFileSync(
    `${__dirname}/faculty/templates/faculty_schools_card.html`,
    "utf-8"
  );

  let faculty_departments_page = fs.readFileSync(
    `${__dirname}/faculty/templates/faculty_departments_page.html`,
    "utf-8"
  );

  const faculty_details_card = fs.readFileSync(
    `${__dirname}/faculty/templates/faculty_details_card.html`,
    "utf-8"
  );

  const faculty_department_cards = fs.readFileSync(
    `${__dirname}/faculty/templates/faculty_department_cards.html`,
    "utf-8"
  );

  let faculty_details_page = fs.readFileSync(
    `${__dirname}/faculty/templates/faculty_details_page.html`,
    "utf-8"
  );

  const faculty_links = fs.readFileSync(
    `${__dirname}/faculty/faculty_links.json`,
    "utf-8"
  );

  const facultyObj = JSON.parse(faculty_links);
  // console.log(facultyObj);

  const faculty_css = fs.readFileSync(
    `${__dirname}/faculty/faculty.css`,
    "utf-8"
  );
  const faculty_js = fs.readFileSync(
    `${__dirname}/faculty/faculty.js`,
    "utf-8"
  );

  // =============================================================== CHATBOT =============================================================//
  let chatbot_html = fs.readFileSync(
    `${__dirname}/chatbot/chatbot.html`,
    "utf-8"
  );

  const chatbot_css = fs.readFileSync(
    `${__dirname}/chatbot/chatbot.css`,
    "utf-8"
  );

  const chatbot_js = fs.readFileSync(
    `${__dirname}/chatbot/chatbot.js`,
    "utf-8"
  );

  const chatbot_toggler_js = fs.readFileSync(
    `${__dirname}/chatbot/chatbot_toggler.js`,
    "utf-8"
  );

  // ============================================================== EVENTS ============================================================ //

  // const events_html = fs.readFileSync(
  //   `${__dirname}/events/events.html`,
  //   "utf-8"
  // );
  // const events_css = fs.readFileSync(`${__dirname}/events/events.css`, "utf-8");
  // const events_js = fs.readFileSync(`${__dirname}//events/events.js`, "utf-8");

  // ============================================ IMAGES HOME PAGE==============================================================//
  const campus_life_image = fs.readFileSync(
    `${__dirname}/images/campus-life_01.png`
  );
  const about_image = fs.readFileSync(`${__dirname}/images/about-1.png`);
  const absyz_logo = fs.readFileSync(`${__dirname}/images/absyz.png`);
  const accenture_logo = fs.readFileSync(`${__dirname}/images/accenture.png`);
  const tejas_logo = fs.readFileSync(`${__dirname}/images/tejas.png`);
  const alstom_logo = fs.readFileSync(`${__dirname}/images/alstom.png`);
  const deloitte_logo = fs.readFileSync(`${__dirname}/images/deloitte.jpeg`);
  const micron_logo = fs.readFileSync(`${__dirname}/images/micron.png`);
  const chatbot_image = fs.readFileSync(`${__dirname}/images/chatbot.png`);
  const search_image = fs.readFileSync(`${__dirname}/images/search.png`);
  const arrow_image = fs.readFileSync(`${__dirname}/images/arrow.png`);
  const close_image = fs.readFileSync(`${__dirname}/images/close.png`);
  const loading_gif = fs.readFileSync(`${__dirname}/images/loading.gif`);
  const resources_image = fs.readFileSync(`${__dirname}/images/resources.jpg`);
  const placements_image = fs.readFileSync(
    `${__dirname}/images/placements.jpg`
  );
  const higher_studies_image = fs.readFileSync(
    `${__dirname}/images/higher_studies.jpg`
  );
  const school_image = fs.readFileSync(`${__dirname}/images/school.jpg`);

  // console.log(`${__dirname}/images/search.png`);

  // ============================= IMAGES ABOUT PAGE ========================================//

  const dropdown_image = fs.readFileSync(
    `${__dirname}/images/about/dropdown-menu.png`
  );
  const faqs_image = fs.readFileSync(`${__dirname}/images/about/faqs.png`);
  const introduction_image = fs.readFileSync(
    `${__dirname}/images/about/introduction_image.jpg`
  );
  const mission_statement_image_2 = fs.readFileSync(
    `${__dirname}/images/about/mission_statement_image_2.jpg`
  );
  // ============================================ DESTRUCTURING THE QUERY =================================================== //

  const { query, pathname } = url.parse(req.url, true);

  // ========================================== HOME PAGE ======================================================= //

  if (pathname === "/" || pathname === "/index.html") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(overview_html);
  } else if (pathname === "/style.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(overview_css);
  } else if (pathname === "/script.js") {
    res.writeHead(200, { "Content-type": "application/javascript" });
    res.end(overview_js);
  } else if (pathname === "/scroll.js") {
    res.writeHead(200, { "Content-type": "application/javascript" });
    res.end(scroll_animation_js);
  }
  // ================================== SENDING IMAGES (HOME PAGE)============================ //
  else if (pathname === "/images/search.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(search_image);
  } else if (pathname === "/images/campus-life_01.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(campus_life_image);
  } else if (pathname === "/images/about-1.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(about_image);
  } else if (pathname === "/images/absyz.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(absyz_logo);
  } else if (pathname === "/images/accenture.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(accenture_logo);
  } else if (pathname === "/images/tejas.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(tejas_logo);
  } else if (pathname === "/images/alstom.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(alstom_logo);
  } else if (pathname === "/images/deloitte.jpeg") {
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.end(deloitte_logo);
  } else if (pathname === "/images/micron.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(micron_logo);
  } else if (pathname === "/images/chatbot.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(chatbot_image);
  } else if (pathname === "/images/arrow.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(arrow_image);
  } else if (pathname === "/images/placements.jpg") {
    res.writeHead(200, { "Content-type": "image/jpg" });
    res.end(placements_image);
  } else if (pathname === "/images/higher_studies.jpg") {
    res.writeHead(200, { "Content-type": "image/jpg" });
    res.end(higher_studies_image);
  } else if (pathname === "/images/resources.jpg") {
    res.writeHead(200, { "Content-type": "image/jpg" });
    res.end(resources_image);
  } else if (pathname === "/images/school.jpg") {
    res.writeHead(200, { "Content-type": "image/jpg" });
    res.end(school_image);
  } else if (pathname === "/images/close.png") {
    res.writeHead(200, { "Content-type": "image/png" });
    res.end(close_image);
  } else if (pathname === "/images/loading.gif") {
    res.writeHead(200, { "Content-type": "image/gif" });
    res.end(loading_gif);
  }

  //============================================ ABOUT PAGE ======================================================//
  else if (pathname === "/about") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(about_html);
  } else if (pathname === "/about.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(about_css);
  } else if (pathname === "/about.js") {
    res.writeHead(200, { "Content-type": "application/javascript" });
    res.end(about_js);
  }

  // =============================== SENDING IMAGES ABOUT PAGE =============================== //
  else if (pathname === "/images/about/dropdown-menu.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(dropdown_image);
  } else if (pathname === "/images/about/introduction_image.jpg") {
    res.writeHead(200, { "Content-Type": "image/jpg" });
    res.end(introduction_image);
  } else if (pathname === "/images/about/mission_statement_image_2.jpg") {
    res.writeHead(200, { "Content-Type": "image/jpg" });
    res.end(mission_statement_image_2);
  } else if (pathname === "/images/about/faqs.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(faqs_image);
  }
  //======================================== RESOURCES PAGE=======================================================//
  else if (pathname === "/resources") {
    // ======================================READING  JSON FILE ================================================= //

    // const data = fs.readFileSync(
    //   `${__dirname}/resources/resource_links.json`,
    //   "utf-8"
    // );
    // const dataObj = JSON.parse(data);

    // const cardsHTML = dataObj
    //   .map((el) => replace_card(resources_card, el))
    //   .join("");
    let cardsHTML = "";

    for (resource in resourcesObj) {
      // console.log(resourcesObj[resource]);
      let output = replace_card(resources_card, resourcesObj[resource]);
      // console.log(output);
      // console.log(
      //   "///////////////////////////////////////////////////////////"
      // );
      cardsHTML += output;
    }
    console.log(cardsHTML);
    resources_html = resources_html.replace(/{%RESOURCES_CARDS%}/g, cardsHTML);

    res.writeHead(200, { "Content-type": "text/html" });

    // ========================================== DOMAINS ========================================================//

    if (Object.keys(query).length === 0) {
      console.log("I am at length 0");
      res.end(resources_html);
    }

    // ======================================== SUB DOMAINS ======================================================//
    else if (Object.keys(query).length === 1) {
      // ================================== SUB DOMAINS OBJECT ARRAY =============================================//

      const subdomainObjectsArray =
        resourcesObj[query.domain_id]["sub_domains"];
      // ============================ ADDING THE DATA TO THE CARD CREATED ======================================= //

      const subdomainCardsHTML = subdomainObjectsArray
        .map((sd) => {
          let output = resources_subdomains_card.replace(
            /{%SUB_DOMAIN_NAME%}/g,
            sd.sub_domain_name
          );

          // ======================== REPLACING THE DOMAIN ID AND THE SUB DOMAIN ID ============================= //

          output = output.replace(/{%SUB_DOMAIN_ID%}/g, sd.sub_domain_id);
          output = output.replace(
            /{%DOMAIN_ID%}/g,
            resourcesObj[query.domain_id]["domain_id"]
          );
          return output;
        })
        .join("");
      console.log(
        "/////////////////////////////// THE CARD //////////////////////////////////////////////////////"
      );
      console.log(subdomainCardsHTML);

      // ================== REPLACING THE SUB_DOMAINS_CARDS WITH THE CREATED CARD (DATA ADDED) ================== //

      resources_incard = resources_incard.replace(
        /{%SUB_DOMAIN_CARDS%}/g,
        subdomainCardsHTML
      );
      // console.log(
      //   "////////////////////////////////// RESOURCES IN CARD FILE /////////////////////////////////////////////////"
      // );
      // console.log(resources_incard);

      // ================================== REPLACING THE DOMAIN_NAME =========================================== //

      resources_incard = resources_incard.replace(
        /{%DOMAIN_NAME%}/g,
        resourcesObj[query.domain_id]["domain_name"]
      );

      console.log(resourcesObj[query.domain_id]);

      console.log("I am at length 1");
      res.end(resources_incard);
    }
    // ============================================ TOPICS AND LINKS =========================================== //
    else if (Object.keys(query).length === 2) {
      // sub domain objects array
      const subdomainObjectsArray =
        resourcesObj[query.domain_id]["sub_domains"];
      const subdomainObj = subdomainObjectsArray.find(
        (obj) =>
          obj.sub_domain_id.toLowerCase() === query.sub_domain_id.toLowerCase()
      );

      // ======================================= TOPICS ========================================================= //
      if (subdomainObj.hasOwnProperty("topics")) {
        console.log("topics");

        // ================================ TOPICS FROM SUB DOMAINS ============================================= //
        const topicsArray = subdomainObj.topics;
        console.log(topicsArray);
        const topicCardsHTML = topicsArray
          .map((topic) => {
            // replacing the topic name
            let output = resources_topics_card.replace(
              /{%TOPIC_NAME%}/g,
              topic.topic_name
            );

            // replacing the domain id in the link

            output = output.replace(
              /{%DOMAIN_ID%}/g,
              resourcesObj[query.domain_id]["domain_id"]
            );
            // replacing the sub domain id in the link
            output = output.replace(
              /{%SUB_DOMAIN_ID%}/g,
              subdomainObj.sub_domain_id
            );
            // replacing the topic id in the link
            output = output.replace(/{%TOPIC_ID%}/g, topic.topic_id);

            // console.log(output);
            return output;
          })
          .join("");

        // =================== REPLACING THE PLACEHOLDER WITH ACTUAL TOPIC CARDS ================================ //
        resources_topics_in_sub_domains_card =
          resources_topics_in_sub_domains_card.replace(
            /{%TOPICS_CARD%}/g,
            topicCardsHTML
          );

        // =================== REPLACING THE SUB DOMAIN NAME ====================================================//
        console.log(subdomainObj.sub_domain_name);
        resources_topics_in_sub_domains_card =
          resources_topics_in_sub_domains_card.replace(
            /{%SUB_DOMAIN_NAME%}/g,
            subdomainObj.sub_domain_name
          );

        // ================================== SENDING THE DATA BACK ========================================== //
        res.writeHead(200, { "Content-type": "text/html" });
        console.log("I am at length 2");
        res.end(resources_topics_in_sub_domains_card);
      }

      // ========================================== LINKS ======================================================= //
      else {
        console.log("links");
        // ================================= LINKS ARRAY FROM SUB DOMAINS ======================================= //
        const linksArray = subdomainObj.links;
        // ============================== REPLACING THE DATA IN LINK CARD ================================= //

        const linkCardsHTML = linksArray
          .map((link) => {
            // replacing the link name
            let output = resources_links_card.replace(
              /{%LINK_NAME%}/g,
              link.link_name
            );

            // replacing the link placeholder
            output = output.replace(/{%LINK%}/g, link.link);

            // replacing the sub domain id
            output = output.replace(
              /{%SUB_DOMAIN_ID%}/g,
              subdomainObj.sub_domain_id
            );

            // replacing the domain id
            output = output.replace(
              /{%DOMAIN_ID%}/g,
              resourcesObj[query.domain_id]["domain_id"]
            );
            // console.log(output);
            return output;
          })
          .join("");

        // ========================== REPLACING THE PLACEHOLDER WITH ACTUAL LINKS CARD ========================== //

        resources_in_sub_domains_card = resources_in_sub_domains_card.replace(
          /{%LINK_CARDS%}/g,
          linkCardsHTML
        );

        // ========================== REPLACING THE PLACEHOLDER WITH SUB DOMAIN NAME ============================ //

        resources_in_sub_domains_card = resources_in_sub_domains_card.replace(
          /{%SUB_DOMAIN_NAME%}/g,
          subdomainObj.sub_domain_name
        );
        res.writeHead(200, { "Content-type": "text/html" });
        console.log("I am at length 2");
        res.end(resources_in_sub_domains_card);
      }
    }

    // ====================================== LINKS INSIDE THE TOPICS =========================================== //
    else if (Object.keys(query).length === 3) {
      console.log("I am at length 3");
      const subdomainObjectsArray =
        resourcesObj[query.domain_id]["sub_domains"];
      const subdomainObj = subdomainObjectsArray.find(
        (obj) =>
          obj.sub_domain_id.toLowerCase() === query.sub_domain_id.toLowerCase()
      );

      // ====================== TOPICS ARRAY ======================= //
      // console.log("topics");
      const topicsArray = subdomainObj.topics;
      // console.log(topicsArray);

      // getting particular topic based upon the topic_id
      const topicsObj = topicsArray.find(
        (obj) => obj.topic_id.toLowerCase() === query.topic_id.toLowerCase()
      );
      // getting the links array from the topicsObj

      const topicsLinksArray = topicsObj["links"];

      // console.log(topicsObj.topic_name);

      // ================================ REPLACING THE DATA IN THE LINKS(FROM TOPICS) CARD =============================== //
      const topicLinksCardsHTML = topicsLinksArray
        .map((link) => {
          let output = resources_links_card.replace(
            /{%LINK_NAME%}/g,
            link.link_name
          );

          // replacing the link placeholder
          output = output.replace(/{%LINK%}/g, link.link);

          // replacing the sub domain id
          output = output.replace(
            /{SUB_DOMAIN_ID}/g,
            subdomainObj.sub_domain_id
          );

          // replacing the domain id
          output = output.replace(
            /{%DOMAIN_ID%}/g,
            resourcesObj[query.domain_id]["domain_id"]
          );

          // console.log(output);
          return output;
        })
        .join("");

      // ============================== REPLACING THE PLACEHOLDER WITH ACTUAL LINKS CARD =================================//

      resources_in_sub_domains_card = resources_in_sub_domains_card.replace(
        /{%LINK_CARDS%}/g,
        topicLinksCardsHTML
      );

      // =================================== REPLACING THE PLACEHOLDER WITH THE SUB DOMAIN NAME ==================================== //
      resources_in_sub_domains_card = resources_in_sub_domains_card.replace(
        /{%SUB_DOMAIN_NAME%}/g,
        topicsObj.topic_name
      );

      res.writeHead(200, { "Content-type": "text/html" });
      res.end(resources_in_sub_domains_card);
    }
  }

  // =============================== SENDING THE RESOURCES.CSS FILE ============================================= //
  else if (pathname === "/resources.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(resources_css);
  }

  //================================================== PLACEMENTS PAGE ======================================================//
  else if (pathname === "/placements") {
    console.log("requested for the placements page");
    // console.log(placementsObj);
    let companyCardHTML = "";
    for (company in placementsObj) {
      const companyObj = placementsObj[company];
      console.log(`I am the ${companyObj.company_name}'s Object :)`);
      // console.log(companyObj);
      // logo_link, company_name, company_id, description, link

      // replacing the logo in the company_card
      let output = company_card.replace(/{%LOGO_LINK%}/g, companyObj.logo_link);

      // replacing the company_name in the company_card
      output = output.replace(/{%COMPANY_NAME%}/g, companyObj.company_name);

      // replacing the description in the company_card
      output = output.replace(/{%DESCRIPTION%}/g, companyObj.description);

      // replacing the link to the website in the company_card
      output = output.replace(/{%LINK%}/g, companyObj.link);

      companyCardHTML += output;
    }

    placements_page = placements_page.replace(
      /{%COMPANY_CARDS%}/g,
      companyCardHTML
    );

    // console.log(companyCardHTML);
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(placements_page);
  } else if (pathname === "/placements.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(placements_css);
  } else if (pathname === "/placements.js") {
    res.writeHead(200, { "Content-type": "application/javascript" });
    res.end(placements_js);
  }

  //=================================================== HIGHER STUDIES ========================================================//
  else if (pathname === "/higher_studies") {
    console.log("requested for the higher studies page");
    // console.log(examDetailsObj);
    let examCardHTML = "";
    for (exam in examDetailsObj) {
      const examObj = examDetailsObj[exam];
      // console.log(`I am ${examObj.name_of_the_exam}'s Object :)`);
      // console.log(exam);
      // name_of_the_exam, link, description, syllabus

      //{%NAME_OF_THE_EXAM%}, {%DESCRIPTION%}, {%SYLLABUS%},{%LINK%}
      // replacing the name_of_the_exam in the exam_card

      let output = exam_card.replace(
        /{%NAME_OF_THE_EXAM%}/g,
        examObj.name_of_the_exam
      );

      output = output.replace(/{%SHORT%}/g, exam);
      // replacing the link in the exam_card
      output = output.replace(/{%LINK%}/g, examObj.link);

      // replacing the description in the exam_card
      output = output.replace(/{%DESCRIPTION%}/g, examObj.description);

      // replacing the syllabus in the exam_card
      output = output.replace(/{%SYLLABUS%}/g, examObj.syllabus);

      examCardHTML += output;
    }

    // console.log(examCardHTML);
    // console.log("I am higher studies page ");
    // console.log(higher_studies_page);

    higher_studies_page = higher_studies_page.replace(
      /{%EXAMS_CARDS%}/g,
      examCardHTML
    );
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(higher_studies_page);
  } else if (pathname === "/higher_studies.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(higher_studies_css);
  } else if (pathname === "/higher_studies.js") {
    res.writeHead(200, { "Content-type": "application/javascript" });
    res.end(higher_studies_js);
  }

  //======================================================= FACULTY PAGE ===========================================================//
  else if (pathname === "/faculty") {
    // replacing the data in the school_card with data in json file
    let schoolCardsHTML = "";
    for (school in facultyObj) {
      // console.log(facultyObj[school].school_name);
      let output = faculty_schools_card.replace(
        /{%SCHOOL_NAME%}/g,
        facultyObj[school].school_name
      );
      // console.log(facultyObj[school].school_id);
      output = output.replace(/{%SCHOOL_ID%}/g, facultyObj[school].school_id);
      schoolCardsHTML += output;
    }
    // replacing SCHOOLS_CARDS placeholder with schoolCardsHTML
    faculty_schools_page = faculty_schools_page.replace(
      /{%SCHOOLS_CARDS%}/g,
      schoolCardsHTML
    );

    if (Object.keys(query).length === 0) {
      console.log("I am at length 0");
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(faculty_schools_page);
    }

    // ===================== QUERY LENGTH = 1 ==================== //
    else if (Object.keys(query).length === 1) {
      console.log("I am at length 1");
      let headOfTheSchoolCardHTML = "";
      for (school in facultyObj) {
        if (
          query.school_id.toLowerCase() ===
          facultyObj[school].school_id.toLowerCase()
        ) {
          if (facultyObj[school].hasOwnProperty("head_of_the_school")) {
            const hosObj = facultyObj[school].head_of_the_school;
            // console.log(hosObj);
            // replacing the name of the head
            let output = faculty_details_card.replace(
              /{%NAME_OF_THE_FACULTY%}/g,
              hosObj.name
            );
            // replacing the mail id
            output = output.replace(/{%EMAIL_ID%}/g, hosObj.email_id);
            output = output.replace(/{%LINK%}/g, hosObj.link);
            // replacing the name of the school
            output = output.replace(
              /{%SCHOOL_NAME%}/g,
              facultyObj[school].school_name
            );

            // REPLACING THE HEAD OF THE SCHOOL CARD IN THE DEPARTMENTS PAGE
            faculty_departments_page = faculty_departments_page.replace(
              /{%HEAD_OF_THE_SCHOOL%}/g,
              output
            );
            faculty_departments_page = faculty_departments_page.replace(
              /{%HEAD_OF_THE_SCHOOL_STRING%}/g,
              "HEAD OF THE SCHOOL"
            );
            faculty_departments_page = faculty_departments_page.replace(
              /{%DEPARTMENTS%}/g,
              "DEPARTMENTS"
            );

            // REPLACING THE DEPARTMENTS CARDS IN THE DEPARTMENTS PAGE
            const departmentsArray = facultyObj[school].departments;
            // console.log(departmentsArray);
            const departmentCardsHTML = departmentsArray
              .map((department) => {
                // console.log(department.department_name);
                // replacing the department name
                let output = faculty_department_cards.replace(
                  /{%DEPARTMENT_NAME%}/g,
                  department.department_name
                );
                // replacing the department id in the link
                output = output.replace(
                  /{%DEPARTMENT_ID%}/g,
                  department.department_id
                );
                // replacing the school_id
                output = output.replace(
                  /{%SCHOOL_ID%}/g,
                  facultyObj[school].school_id
                );

                return output;
              })
              .join("");
            // replacing the name of the school
            faculty_departments_page = faculty_departments_page.replace(
              /{%NAME_OF_THE_SCHOOL%}/g,
              facultyObj[school].school_name
            );
            faculty_departments_page = faculty_departments_page.replace(
              /{%DEPARTMENT_CARDS%}/g,
              departmentCardsHTML
            );
            headOfTheSchoolCardHTML += output;
            res.writeHead(200, { "Content-type": "text/html" });
            res.end(faculty_departments_page);
          }

          // IF THE LENGTH OF THE QUERY IS 1 AND BUT THERE IS ONLY ONE DEPARTMENT IN THAT SCHOOL SO WE DISPLAY THE HOD, PROFESSORS AND OTHER CARDS DIRECTLY
          else {
            console.log("no head_of_the_school property");
            faculty_details_page = replace_faculty_details(
              facultyObj,
              faculty_details_card,
              faculty_details_page,
              null
            );
            // this is faculty_details_page
            console.log("this is faculty_details_page");
            // console.log(faculty_details_page);
            res.writeHead(200, { "Content-type": "text/html" });
            res.end(faculty_details_page);
          }
        }
      }
      // res.writeHead(200, { "Content-type": "text/html" });
      // res.end(faculty_departments_page);
    } else if (Object.keys(query).length === 2) {
      console.log("I am at length 2");
      for (school in facultyObj) {
        if (
          query.school_id.toLowerCase() ===
          facultyObj[school].school_id.toLowerCase()
        ) {
          const departmentsArray = facultyObj[school].departments;
          // console.log(departmentsArray);
          const departmentObj = departmentsArray.find(
            (obj) =>
              obj.department_id.toLowerCase() ===
              query.department_id.toLowerCase()
          );

          // console.log("this is the object");
          // console.log(departmentObj);
          faculty_details_page = replace_faculty_details(
            facultyObj,
            faculty_details_card,
            faculty_details_page,
            departmentObj
          );
        }
      }

      // this is faculty_details_page
      // console.log("this is faculty_details_page");
      // console.log(faculty_details_page);
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(faculty_details_page);
    }
  } else if (pathname === "/faculty.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(faculty_css);
  } else if (pathname === "/faculty.js") {
    res.writeHead(200, { "Content-type": "application/javascript" });
    res.end(faculty_js);
  }

  // ============================================= CHATBOT =============================================//
  else if (pathname === "/chatbot") {
    console.log("chatbot_html sent");
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(chatbot_html);
  } else if (pathname === "/chatbot.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(chatbot_css);
  } else if (pathname === "/chatbot.js") {
    res.writeHead(200, { "Content-type": "application/javascript" });
    res.end(chatbot_js);
  } else if (pathname === "/chatbot_toggler.js") {
    res.writeHead(200, { "Content-type": "application/javascript" });
    res.end(chatbot_toggler_js);
  }

  //===========================================================================================//
  // // for events page
  // else if (pathname === "/events/events.html") {
  //   console.log("requested for the events page");
  //   res.writeHead(200, { "Content-type": "text/html" });
  //   res.end(events_html);
  // } else if (pathname === "/events/events.css") {
  //   res.writeHead(200, { "Content-type": "text/css" });
  //   res.end(events_css);
  // } else if (pathname === "/events/events.js") {
  //   res.writeHead(200, { "Content-type": "application/javascript" });
  //   res.end(events_js);
  // }

  //==========================================================================================//
  // not found
  else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello world",
    });
    console.log(pathname);
    res.end("<h1>page not found</h1>");
  }
});

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening to the requests on port 8000");
// });
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Listening to the requests on port ${PORT}`);
});
