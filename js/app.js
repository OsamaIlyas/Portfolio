var name=document.getElementById("myName");
var occupation=document.getElementById("occupation");
var career=document.getElementById("career");
var about=document.getElementById("mySelf");
var qualification=document.getElementById("qualification");
var qualification1=document.getElementById("qualification1");
var qualification2=document.getElementById("qualification2");
var qualification3=document.getElementById("qualification3");
var info=document.getElementById("info");
var fname=document.getElementById("fname");
var bd=document.getElementById("bd");
var id=document.getElementById("id");
var nationality=document.getElementById("nationality");
var status=document.getElementById("status");
var religion=document.getElementById("religion");
var skills=document.getElementById("skills");
var interpersonalSkill=document.getElementById("interpersonalSkill");
var interpersonalSkill1=document.getElementById("interpersonalSkill1");
var interpersonalSkill2=document.getElementById("interpersonalSkill2");
var interpersonalSkill3=document.getElementById("interpersonalSkill3");
var technicalSkill=document.getElementById("technicalSkill");
var technicalSkill1=document.getElementById("technicalSkill1");
var technicalSkill2=document.getElementById("technicalSkill2");
var skillPercent=document.getElementById("skillPercent");
var language=document.getElementById("lang");
var contact=document.getElementById("contact");
var contactDetails=document.getElementById("contactDetails");
var address=document.getElementById("address");
var cell=document.getElementById("cell");
var email=document.getElementById("email");
var fcontact=document.getElementById("fcontact");
var fcontacts=document.getElementById("fcontacts");
var map=document.getElementById("map");

var object={
name:'Osama Ilyas',
occupation:'Web Developer',
careerObj:'Career objectives',
info:'I want to achieve my goals, targets and have a great wish to brighten my career to work hard punctually and regularlyto be honest and sincere for the development, prosperity and smooth functioning of the organization with entiresatisfaction and cooperation of the colleagues under the guidance of my superiors in a healthy environment.',
Qualification:{

qualification:'Academic Qualification',
qualification1:'BS in Computer Science from Karachi University (In Progress).',
qualification2:'Intermediate in Pre Engineering from Karachi Board.',
qualification3:'Matriculation (Science) from the Board of Secondary Education, Karachi.'
},
PersonalInfo:{

pInfo:'Personal Information',
fname:' &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;Father &#39;s Name &nbsp; &nbsp; &nbsp; &nbsp; Zafar Muhammad Ilyas',
Birthday:'Date Of Birth &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;12-02-1995',
CNIC:' &nbsp; &nbsp; CNIC No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;42101-4909060-1',
nationality:'Nationality &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp;&nbsp;   Pakistani',
status:'  Martial Status &nbsp; &nbsp; &nbsp; &nbsp;Single',
religion:'Religion: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Islam'},
Skills:{

skills:'Skills',
interpersonalSkill:'Interpersonal Skills',
interpersonalSkill1:'Good commmunication and presentation skills.',
interpersonalSkill2:'Able to handle stress and work in multi-tasking situations.',
interpersonalSkill3:'Good Interpersonal skills in team work.',
technicalSkill:'Technical Skills',
technicalSkill1:'Good concepts of Object Oriented Programming.',
technicalSkill2:'Familiar with the HTML5, CSS3, JAVA, C# and C.',
skillPercent:'Skills Overall Percentages'},

language:'HTML CSS JAVASCRIPT JAVA PHP',

Contact:{

contact:'Contact',
contactDetails:'Contact Details',
address:'Address: House#1-J 15/1 Nazimabad no.1',
cell:'Cell# 0334-3319280',
email:'Email:<a href="mailto:osamailyas256@gmail.com" target="blank" title="Go to Email">osamailyas256@gmail.com',
fcontact:'Further Contact',
fcontacts:'Also Availabe on,'},
map:'Map of my house : '
};

name.innerHTML=object.name;
occupation.innerHTML=object.occupation;
career.innerHTML=object.careerObj;
about.innerHTML=object.info;
qualification.innerHTML=object.Qualification.qualification;
qualification1.innerHTML=object.Qualification.qualification1;
qualification2.innerHTML=object.Qualification.qualification2;
qualification3.innerHTML=object.Qualification.qualification3;
info.innerHTML=object.PersonalInfo.pInfo;
fname.innerHTML=object.PersonalInfo.fname;
bd.innerHTML=object.PersonalInfo.Birthday;
id.innerHTML=object.PersonalInfo.CNIC;
nationality.innerHTML=object.PersonalInfo.nationality;
status.innerHTML=object.PersonalInfo.status;
religion.innerHTML=object.PersonalInfo.religion;
skills.innerHTML=object.Skills.skills;
interpersonalSkill.innerHTML=object.Skills.interpersonalSkill;
interpersonalSkill1.innerHTML=object.Skills.interpersonalSkill1;
interpersonalSkill2.innerHTML=object.Skills.interpersonalSkill2;
interpersonalSkill3.innerHTML=object.Skills.interpersonalSkill3;
technicalSkill.innerHTML=object.Skills.technicalSkill;
technicalSkill1.innerHTML=object.Skills.technicalSkill1;
technicalSkill2.innerHTML=object.Skills.technicalSkill2;
skillPercent.innerHTML=object.Skills.skillPercent;
language.innerHTML=object.language;
contact.innerHTML=object.Contact.contact;
contactDetails.innerHTML=object.Contact.contactDetails;
address.innerHTML=object.Contact.address;
cell.innerHTML=object.Contact.cell;
email.innerHTML=object.Contact.email;
fcontact.innerHTML=object.Contact.fcontact;
fcontacts.innerHTML=object.Contact.fcontacts;
map.innerHTML=object.map;