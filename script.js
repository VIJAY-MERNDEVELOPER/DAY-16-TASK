const viewPoint = document.getElementById("callback");

setTimeout(() => {
  viewPoint.innerHTML = "<h2>10</h2>";
  setTimeout(() => {
    viewPoint.innerHTML = "<h2>9</h2>";
    setTimeout(() => {
      viewPoint.innerHTML = "<h2>8</h2>";
      setTimeout(() => {
        viewPoint.innerHTML = "<h2>7</h2>";
        setTimeout(() => {
          viewPoint.innerHTML = "<h2>6</h2>";
          setTimeout(() => {
            viewPoint.innerHTML = "<h2>5</h2>";
            setTimeout(() => {
              viewPoint.innerHTML = "<h2>4</h2>";
              setTimeout(() => {
                viewPoint.innerHTML = "<h2>3</h2>";
                setTimeout(() => {
                  viewPoint.innerHTML = "<h2>2</h2>";
                  setTimeout(() => {
                    viewPoint.innerHTML = "<h2>1</h2>";
                    setTimeout(() => {
                      viewPoint.innerHTML = "<h2>HAPPY INDEPENDENCE DAY </h2>";
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
