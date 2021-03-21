function sunsign() {
   document.form1.date.selectedIndex;
   document.form1.month.selectedIndex;
   document.form1.sign.value;
   if (document.form1.month.selectedIndex == 1 && document.form1.date.selectedIndex <=19) {document.form1.sign.value = "Capricorn";}
   if (document.form1.month.selectedIndex == 1 && document.form1.date.selectedIndex >=20) {document.form1.sign.value = "Aquarius";}
   if (document.form1.month.selectedIndex == 2 && document.form1.date.selectedIndex <=18) {document.form1.sign.value = "Aquarius";}
   if (document.form1.month.selectedIndex == 2 && document.form1.date.selectedIndex >=19) {document.form1.sign.value = "Pisces";}
   if (document.form1.month.selectedIndex == 3 && document.form1.date.selectedIndex <=20) {document.form1.sign.value = "Pisces";}
   if (document.form1.month.selectedIndex == 3 && document.form1.date.selectedIndex >=21) {document.form1.sign.value = "Aries";}
   if (document.form1.month.selectedIndex == 4 && document.form1.date.selectedIndex <=20) {document.form1.sign.value = "Aries";}
   if (document.form1.month.selectedIndex == 4 && document.form1.date.selectedIndex >=21) {document.form1.sign.value = "Taurus";}
   if (document.form1.month.selectedIndex == 5 && document.form1.date.selectedIndex <=20) {document.form1.sign.value = "Taurus";}
   if (document.form1.month.selectedIndex == 5 && document.form1.date.selectedIndex >=21) {document.form1.sign.value = "Gemini";}
   if (document.form1.month.selectedIndex == 6 && document.form1.date.selectedIndex <=20) {document.form1.sign.value = "Gemini";}
   if (document.form1.month.selectedIndex == 6 && document.form1.date.selectedIndex >=21) {document.form1.sign.value = "Cancer";}
   if (document.form1.month.selectedIndex == 7 && document.form1.date.selectedIndex <=21) {document.form1.sign.value = "Cancer";}
   if (document.form1.month.selectedIndex == 7 && document.form1.date.selectedIndex >=22) {document.form1.sign.value = "Leo";}
   if (document.form1.month.selectedIndex == 8 && document.form1.date.selectedIndex <=21) {document.form1.sign.value = "Leo";}
   if (document.form1.month.selectedIndex == 8 && document.form1.date.selectedIndex >=22) {document.form1.sign.value = "Virgo";}
   if (document.form1.month.selectedIndex == 9 && document.form1.date.selectedIndex <=21) {document.form1.sign.value = "Virgo";}
   if (document.form1.month.selectedIndex == 9 && document.form1.date.selectedIndex >=22) {document.form1.sign.value = "Libra";}
   if (document.form1.month.selectedIndex == 10 && document.form1.date.selectedIndex <=21) {document.form1.sign.value = "Libra";}
   if (document.form1.month.selectedIndex == 10 && document.form1.date.selectedIndex >=22) {document.form1.sign.value = "Scorpio";}
   if (document.form1.month.selectedIndex == 11 && document.form1.date.selectedIndex <=21) {document.form1.sign.value = "Scorpio";}
   if (document.form1.month.selectedIndex == 11 && document.form1.date.selectedIndex >=22) {document.form1.sign.value = "Sagittarius";}
   if (document.form1.month.selectedIndex == 12 && document.form1.date.selectedIndex <=20) {document.form1.sign.value = "Sagittarius";}
   if (document.form1.month.selectedIndex == 12 && document.form1.date.selectedIndex >=21) {document.form1.sign.value = "Capricorn";}

   if (document.form1.month.selectedIndex == "x" || document.form1.date.selectedIndex == "y") return;
 }

function validate() {
   if (document.form1.month.selectedIndex == 2 && document.form1.date.selectedIndex > 29) {alert("There are only a maximum of 29 days in February."); return false;}
   if (document.form1.month.selectedIndex == 4 && document.form1.date.selectedIndex == 31) {alert("There are only 30 days in April."); return false;}
   if (document.form1.month.selectedIndex == 6 && document.form1.date.selectedIndex == 31) {alert("There are only 30 days in June."); return false;}
   if (document.form1.month.selectedIndex == 9 && document.form1.date.selectedIndex == 31) {alert("There are only 30 days in September."); return false;}
   if (document.form1.month.selectedIndex == 11 && document.form1.date.selectedIndex == 31) {alert("There are only 30 days in November."); return false;}
else{
return true;
}
 }