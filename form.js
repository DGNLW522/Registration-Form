
function submitClick() {
    if (formValidation()) {
      alert("Thank you for your time! Your details have been submitted!");
      return true;
    } else {
      return false;
    }
  }

  function formValidation() {
    flag = true;

    if (document.myForm.fname.value == "") {
      alert("Please fill in your First Name!");
      flag = false;
    }

    // Validate letters only as Name
    if (!/^[a-zA-Z ]*$/g.test(document.myForm.fname.value)) {
      alert("Enter alphabetic characters as First Name!");
      flag = false;
    }
    if (document.myForm.lname.value == "") {
          alert("Please fill in your Last Name!");
          flag = false;
        }

        // Validate letters only as Name
        if (!/^[a-zA-Z ]*$/g.test(document.myForm.lname.value)) {
          alert("Enter alphabetic characters as Last Name!");
          flag = false;
        }

    // Validate emails
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)* (\.\w{2,3})+$/.test(myForm.email.value))
    //Regular expressions to validate email
    {
      //alert("Enter Valid Email Address!");
      //flag = false;
    }
    if (!/^[0-9a-zA-Z ,.]*$/g.test(myForm.address.value))
    //Regular expressions to validate address
        {
          alert("Enter Valid Address!");
          flag = false;
        }

    // Validate Phone number
    if (document.myForm.cnumber.value == "") {
      alert("Please fill in your Phone Number!");
      flag = false;
    }

    if (!/^[0-9]*$/g.test(myForm.cnumber.value)) {
      alert("Enter numeric values as Phone Number!");
      flag = false;
    }

    if ((document.myForm.typ[0].checked == false) && (document.myForm.typ[1].checked == false)&& (document.myForm.typ[2].checked == false)) {
      alert("Please select User Type!");
      flag = false;
    }

    if (document.myForm.payment.selectedIndex == 0) {
      alert("Please select User Type from the drop-down list!");
      flag = false;
    }



    return flag;
  }
