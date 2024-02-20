//for removing extra added field from cv
function remove(t) {
  t.parentNode.parentNode.remove();
}
//for removing the complete field from cv
function removeField(t) {
  let w = t.parentNode.parentNode.className;
  if (t.checked == true) {
    $($(`.${w}`)[1]).css("display", "none");
  } else $($(`.${w}`)[1]).css("display", "");
}

$(document).ready(function () {
  //adding classes for label tag
  $("label").addClass("form-label mt-2");

  //adding class for input tag
  $("input").addClass("form-control");

  //adding class for textarea tag
  $("textarea").addClass("form-control");

  //adding class for hr tag
  $("#cv hr").addClass("mt-0");

  //adding more Social Media field
  $("#moreSocialMedia").click(function () {
    $(
      `<div class="socialMedia card p-2 sadow-sm mt-2">
        <div class="text-end">
        <a class="fa fa-trash" onclick="remove(this)"></a></div>
        <input type="text" class="socialMediaWeb form-control mt-2" placeholder="Enter Name Of Social Media Website">
        <input type="text" class="socialMediaLink form-control mt-2" placeholder="Enter Your Profile Link">
        </div>`
    ).appendTo("#addSocialMedia");
  });

  //adding more Work Experience field
  $("#moreWorkExperience").click(function () {
    $(`<div class="workExperience card p-2 shadow-sm mt-2">
      <div class="text-end">
        <a class="fa fa-trash" onclick="remove(this)"></a></div>
      <label for="jobTitle" class="form-label mt-2">Job Title</label>
      <input type="text" class="jobTitle form-control" placeholder="Enter Your Job Title" />
      <label for="organizationName" class="form-label mt-2">Organization Name</label>
      <input
        type="text"
        class="organizationName form-control"
        placeholder="Enter Your Organization Name"
      />
      <label for="jobDuration" class="form-label mt-2">Job Duration</label>
      <div class="input-group">
        <input
          type="text"
          class="jobDurationFrom form-control"
          placeholder="Enter Your Job Joining Year"
        /><span class="input-group-text">-</span
        ><input
          type="text"
          class="jobDurationTo form-control"
          placeholder="Enter Your Job Ending Year"
        />
      </div>
      <label for="jobDescription" class="form-label mt-2">Job Description</label>
      <textarea
        type="text"
        class="jobDescription form-control"
        placeholder="Enter Your Job Experience"
      ></textarea>
    </div>`).appendTo("#addWorkExperience");
  });

  //adding more Academic Qualificaion field
  $("#moreAcademicQualification").click(function () {
    $(`<div class="academicQualification card p-2 shadow-sm mt-2">
      <div class="text-end">
        <a class="fa fa-trash" onclick="remove(this)"></a></div>
      <label for="institueName" class="form-label mt-2">Institute Name</label>
      <input
        type="text"
        class="instituteName form-control"
        placeholder="Enter Your Institute Name"
      />
      <label for="instituteLocation"  class="form-label mt-2">Location</label>
      <input
        type="text"
        class="instituteLocation form-control"
        placeholder="Enter Your Institute Location"
      />
      <label for="degreeName" class="form-label mt-2">Degree Name</label>
      <input
        type="text"
        class="degreeName form-control"
        placeholder="Enter Your Degree Name"
      />
      <label for="academicCompletion" class="form-label mt-2">Completed On</label>
      <input
        type="text"
        class="academicCompletion form-control"
        placeholder="Enter Completion Year or Expected Completion Year"
      />
      <label for="academicResult" class="form-label mt-2">Result</label>
      <div class="input-group">
        <input
          type="text"
          class="academicResult form-control"
          placeholder="Result in GPA/CGPA/Percent"
        />
  
        <select class="grade" class="form-select">
          <option value="" disabled selected>Select One</option>
          <option value="GPA">GPA</option>
          <option value="CGPA">CGPA</option>
          <option value="%">%</option>
        </select>
      </div>
    </div>`).appendTo("#addAcademicQualification");
  });

  //adding more Project field
  $("#moreProject").click(function () {
    $(`<div class="project card p-2 shadow-sm mt-2">
      <div class="text-end">
        <a class="fa fa-trash" onclick="remove(this)"></a></div>
      <label for="projectName" class="form-label mt-2">Project Name</label>
      <input type="text" class="projectName form-control"  placeholder="Enter Your Project Name">
      <label for="projectYear" class="form-label mt-2">Project Year</label>
      <input type="text" class="projectYear form-control" placeholder="Enter Project Completion Year">
      <label for="projectDescription" class="form-label mt-2">Project Description</label>
      <textarea type="text" class="projectDescription form-control"  placeholder="Enter Project Description"></textarea>
      <label for="linkToProject" class="form-label mt-2">Link To The Project (Optional)</label>
      <input type="text" class="linkToProject form-control" placeholder="Enter Link To The Project">
      </div>`).appendTo("#addProject");
  });

  //adding more Achievement field
  $("#moreAchievement").click(function () {
    $(`<div class="achievement card p-2 shadow-sm mt-2">
      <div class="text-end">
        <a class="fa fa-trash" onclick="remove(this)"></a></div>
      <label for="achievementName" class="form-label mt-2">Achievement Name</label>
      <input type="text" class="achievementName form-control"  placeholder="Enter Your Achievement Name">
      <label for="achievementDescription" class="form-label mt-2">Achievement Description</label>
      <textarea type="text" class="achievementDescription form-control"  placeholder="Enter Achievement Description"></textarea>
      <label for="linkToAchievement" class="form-label mt-2">Link To The Achievement Certificate (Optional)</label>
      <input type="text" class="form-control linkToAchievement"  placeholder="Enter Link To The Achievement Certificate">
      </div>`).appendTo("#addAchievement");
  });

  //adding more Skill field
  $("#moreSkill").click(function () {
    $(
      `<div>
        <div class="input-group"><input type="text" class="skillName form-control mt-2"  placeholder="Enter Skill Name"><a class="fa fa-trash input-group-text mt-2 pt-2" onclick="remove(this)"></a> 
        </div></div>`
    ).appendTo("#addSkill");
  });

  //generate CV
  $("#generateCV").click(function () {
    //scroll To Top
    window.scrollTo(0, 0);

    //adding photo
    let file = document.getElementById("photo").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      document.getElementById("cvPhoto").setAttribute("src", reader.result);
    };

    //name
    $("#cvName").text($("#name").val());
    //$("#cvPhoto").attr("src", $("#photo").val());

    //address
    $("#cvAddress").text($("#address").val());

    //phone
    $("#cvPhone").text($("#phone").val());

    //dob
    $("#cvdob").text($("#dob").val());

    //email
    $("#cvEmail").text($("#email").val());

    //linkedin
    $("#cvLinkedin").text($("#linkedin").val());
    $("#cvLinkedin").attr("src", $("#linkedin").val());

    //socialLinks
    $("#cvSocial").empty();
    for (
      let i = 0;
      i < $(".socialMedia").length && $(".socialMedia").length > 0;
      i++
    ) {
      $("#cvSocial").append(`<div class="navbar-brand">${
        $(".socialMediaWeb")[i].value
      }</div>
            <div><a href="${$(".socialMediaLink")[i].value}">${
        $(".socialMediaLink")[i].value
      } </a></div>`);
    }

    //objective
    $("#cvObject").text($("#object").val());

    //education
    $("#cvEducation").empty();
    for (let i = 0; i < $(".academicQualification").length; i++) {
      $("#cvEducation").append(`<li><div><span class="navbar-brand">${
        $(".degreeName")[i].value
      }: </span>${$(".academicCompletion")[i].value} (${
        $(".instituteName")[i].value
      }, ${$(".instituteLocation")[i].value})</div>
              <div>Result: ${$(".academicResult")[i].value} ${
        $(".grade")[i].value
      }</div></li>`);
    }

    //workExperience
    $("#cvExperience").empty();
    for (let i = 0; i < $(".workExperience").length; i++) {
      $("#cvExperience").append(`<li><div><span class="navbar-brand">${
        $(".jobTitle")[i].value
      }: </span>${$(".jobDurationFrom")[i].value}-${
        $(".jobDurationTo")[i].value
      } (${$(".organizationName")[i].value})</div>
          <div>${$(".jobDescription")[i].value}</div></li>`);
    }

    //project
    $("#cvProject").empty();
    for (let i = 0; i < $(".project").length; i++) {
      if ($(".linkToProject")[i].value != "") {
        $("#cvProject").append(`<li><div><span class="navbar-brand">${
          $(".projectName")[i].value
        }:</span>${$(".projectYear")[i].value} (<a href="">${
          $(".linkToProject")[i].value
        }</a>)</div>
          <div>${$(".projectDescription")[i].value}</div></li>`);
      } else {
        $("#cvProject").append(`<li><div><span class="navbar-brand">${
          $(".projectName")[i].value
        }:</span>${$(".projectYear")[i].value}</div>
          <div>${$(".projectDescription")[i].value}</div></li>`);
      }
    }

    //achievement
    $("#cvAchievement").empty();
    for (let i = 0; i < $(".achievement").length; i++) {
      if ($(".linkToAchievement")[i].value != "") {
        $("#cvAchievement").append(`<li><div><span class="navbar-brand">${
          $(".achievementName")[i].value
        }</span> (<a href="${$(".linkToAchievement")[i].value}">${
          $(".linkToAchievement")[i].value
        }</a>)</div>
          <div>${$(".achievementDescription")[i].value}</div></li>`);
      } else {
        $("#cvAchievement").append(`<li><div><span class="navbar-brand">${
          $(".achievementName")[i].value
        }</div>
          <div>${$(".achievementDescription")[i].value}</div></li>`);
      }
    }

    //skill
    let skillValue = "";
    for (let e of $(".skillName")) {
      skillValue = skillValue + `<li>${e.value}</li>`;
    }
    $("#cvSkill").html(skillValue);

    //removing cvGenerator
    $("#cvGenerator").css("display", "none");

    //making cv display
    $("#cv").css("display", "");
  });

  //modify CV
  $("#modify").click(function () {
    window.scrollTo(0, 0);
    $("#cvGenerator").css("display", "");
    $("#cv").css("display", "none");
  });
  //print CV
  $("#print").click(function () {
    $("#modifyPrintButton").css("display", "none");
    window.print();
    $("#modifyPrintButton").css("display", "");
  });
});
