function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberList = document.getElementById("memberList");
    var skillsList = document.getElementById("skillsList");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");
    var memberBtnText = document.getElementById("memberBtnText");
    var skillsBtnText = document.getElementById("skillsBtnText");

    member.style.display = "block";
    skills.style.display = "none";
    memberList.style.display = "block";
    skillsList.style.display = "none";
    memberBtn.style.backgroundColor = "#fff";
    skillsBtn.style.backgroundColor = "#f2f2f2";
    memberBtnText.style.color = "#000";
    skillsBtnText.style.color = "#999";
}