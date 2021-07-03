 /*  const date= new Date();

const renderCalender = () => {
date.setDate(1);
//console.log(date.getDay());
const month = date.getMonth();
//console.log(month)

 const monthDays= document.querySelector(".days");
 
 const lastDay=new Date(date.getFullYear(), date.getMonth()+1,0).getDate();
  //console.log(lastDay)
  
 const prevLastDay =new Date(date.getFullYear(), date.getMonth(),0).getDate();
 //console.log(prevLastDay)
 const firstDayIndex =date.getDay();
 //console.log(firstDayIndex)

 const lastDayIndex=new Date(date.getFullYear(), date.getMonth()+1,0).getDay(); 
 // console.log(lastDayIndex)
 
 const nextDays = 7- lastDayIndex;
  //console.log(nextDays)
 const months = [
 "January",
 "Febrary",
 "March",
 "April",
 "May",
 "June",
 "July",
 "August",
 "September",
 "October",
 "November",
 "December"
 ];
  //display month
  document.querySelector(".date h1").innerHTML=months[date.getMonth()]; 
  //display date
  document.querySelector(".date p").innerHTML=date.toDateString();

   let days ="";

   for(let x=firstDayIndex ;x>0;x--)
   {
    days+=`<div class="prev-date">${prevLastDay-x+1}</div>`;
   // monthDays.innerHTML=days;
   }

   for(let i=1;i<=lastDay;i++)
   {
    if(i=== new Date().getDate() && date.getMonth() === new Date().getMonth())
    {
        days+=`<div class="today">${i}</div>`
    }
    else{
    days+=`<div>${i}</div>`;
   //   monthDays.innerHTML=days;
   }
}
  
  for(let j=1; j<=nextDays;j++)
   {
    days +=`<div class="next-date">${j}</div>`;
    monthDays.innerHTML=days;
   }
}



document.querySelector('.prev').
addEventListener("click",()=>{
date.setMonth(){date.getMonth()-1};
renderCalender();
});

document.querySelector('.next').
addEventListener('click',()=>{
date.setMonth(){date.getMonth()+1};
 renderCalender();
});

renderCalender();  */
const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();