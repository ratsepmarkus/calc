var vahe = 0
        document.getElementById("vahe").innerHTML = vahe
        function pluss() {
          var btn = document.createElement("li");
          btn.classList.add('positive')
          btn.innerHTML = document.getElementById("myText").value
          document.getElementById("tulud_values").appendChild(btn)
          var tulu = +document.getElementById("myText").value
          vahe = window.vahe + tulu
          document.getElementById("vahe").innerHTML = vahe
        }
        function miinus() {
          var btn = document.createElement("li");
          btn.classList.add('negative')
          btn.innerHTML = document.getElementById("myText").value
          document.getElementById("kulud_values").appendChild(btn)
          var tulu = document.getElementById("myText").value;
          vahe = window.vahe - tulu
          document.getElementById("vahe").innerHTML = vahe
        }
