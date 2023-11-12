const viewPoint = document.getElementById("callback");

setTimeout(() => {
  viewPoint.innerText = "10";
  setTimeout(() => {
    viewPoint.innerText = "9";
    setTimeout(() => {
      viewPoint.innerText = "8";
      setTimeout(() => {
        viewPoint.innerText = "7";
        setTimeout(() => {
          viewPoint.innerText = "6";
          setTimeout(() => {
            viewPoint.innerText = "5";
            setTimeout(() => {
              viewPoint.innerText = "4";
              setTimeout(() => {
                viewPoint.innerText = "3";
                setTimeout(() => {
                  viewPoint.innerText = "2";
                  setTimeout(() => {
                    viewPoint.innerText = "1";
                    setTimeout(() => {
                      viewPoint.innerText = "0";
                      setTimeout(() => {
                        viewPoint.innerText = "Happy Independence Day";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

document.body.append(viewPoint);
