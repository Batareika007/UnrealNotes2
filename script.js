const subTopics = {
  Home: [
    { id: "Home/cheatshet", title: "Шпаргалка" },
    { id: "Home/etc", title: "Разные полезности в анрил" },
    { id: "Home/git", title: "GIT" },
  ],
  Animation: [    
    { id: "Animation/animation", title: "Add animation to character and movement" },
    { id: "Animation/motionmatching", title: "Motion Matching animations" },
    { id: "Animation/animforotherchar", title: "Set animation on other chatacters" },  
  ],
  Audio: [
    { id: "Audio/audio", title: "Audio" },
  ],
  BasicMovementUE5: [
    { id: "BasicMovementUE5/movmentUE5", title: "Базовое движение" },
  ],
  Blueprints: [
    { id: "Blueprint/bpcommunication", title: "Blueprint Communications"},
    { id: "Blueprint/blueprint", title: "blueprint"},
    { id: "Blueprint/blueprint", title: "Classes"},
    { id: "Blueprint/blueprint", title: "Collison"},
    { id: "Blueprint/blueprint", title: "coments"},
    { id: "Blueprint/blueprint", title: "Create First-Person Character"},
    { id: "Blueprint/blueprint", title: "Damage Collision"},
    { id: "Blueprint/blueprint", title: "Enumerators"},
    { id: "Blueprint/blueprint", title: "Event Dispatchers"},
    { id: "Blueprint/blueprint", title: "footsteps1stPerson"},
    { id: "Blueprint/blueprint", title: "Functions Events Macros"},
    { id: "Blueprint/blueprint", title: "GameMode"},
    { id: "Blueprint/blueprint", title: "HUD"},
    { id: "Blueprint/blueprint", title: "Interact"},
    { id: "Blueprint/blueprint", title: "Localization"},
    { id: "Blueprint/blueprint", title: "Material and color"},
    { id: "Blueprint/blueprint", title: "Nodes"},
    { id: "Blueprint/blueprint", title: "Sphere cast"},
    { id: "Blueprint/blueprint", title: "Structure"},
    { id: "Blueprint/blueprint", title: "Time Control"},
    { id: "Blueprint/blueprint", title: "Trigger"},
    { id: "Blueprint/blueprint", title: "UX UI"},
    { id: "Blueprint/blueprint", title: "Vectors"},
    { id: "Blueprint/blueprint", title: "двигать акторы"},
  ],
  Cinematic: [
    { id: "Cinematic/camerarigs", title: "край и рельсы" },
    { id: "Cinematic/firststeps", title: "создание первого сиквенсера" },
    { id: "Cinematic/plugins", title: "плагины" },
  ],
  Debug: [
    { id: "Debug/debug", title: "Debug" },
  ],
  Landscape: [
    { id: "Landscape/landscape", title: "landscape" },
    { id: "Landscape/landscapesculpt", title: "sculpt" },
    { id: "Landscape/brushpaint", title: "brush and paint" },
    { id: "Landscape/foliage", title: "foliage" },
  ],
  Light: [
    { id: "Light/light", title: "свет и туман" },
  ],
  Physics: [
    { id: "Physics/physics", title: "физика материалов" },
  ],
  Plugins: [
    { id: "Plugins/pluginsfab", title: "плагины из фаба" },
    { id: "Plugins/mychose", title: "плагины" },
  ],
  Steam: [
    { id: "Steam/steam", title: "загрузить в стим" },
  ],
  Editor: [
    { id: "Editor/about", title: "какие-то данные про движок" },
    { id: "Editor/editorsetup", title: "Настройка редактора" },
    { id: "Editor/morememory", title: "Увеличение памяти для движка" },
    { id: "Editor/navigation", title: "Навигация" },
    { id: "Editor/packagecooking", title: "Запекаем создаем игру" },
    { id: "Editor/projectsetup", title: "Настройка проекта" },
    { id: "Editor/projectstructure", title: "Структура проекта" },
  ],
  Theory: [
    { id: "Theory/mechaniks", title: "Механики" },
    { id: "Theory/modepaint", title: "режим раскраски объектов " },
    { id: "Theory/modeplace", title: "размещение объектов разных классов" },
    { id: "Theory/naming", title: "Объекты" },
    { id: "Theory/proffesion", title: "Проффесии" },

  ],
};

let currentTopic = null;
let isAnimating = false;

function toggleSubNav(topic) {
  const subNav = document.getElementById("sub-nav");

  // если анимация уже идёт — игнорируем
  if (isAnimating) return;

  // если нажали на ту же тему — спрятать
  if (currentTopic === topic) {
    subNav.style.maxHeight = "0";
    currentTopic = null;
    return;
  }

  // если другая тема уже открыта — сначала спрятать
  if (currentTopic !== null) {
    isAnimating = true;
    subNav.style.maxHeight = "0";

    // ждём окончания анимации (0.4s как в CSS)
    setTimeout(() => {
      showNewSubNav(topic);
      isAnimating = false;
    }, 400);
  } else {
    // если ничего не открыто — сразу показать новую
    showNewSubNav(topic);
  }
}

function showNewSubNav(topic) {
  const subNav = document.getElementById("sub-nav");
  subNav.innerHTML = "";

  if (subTopics[topic]) {
    subTopics[topic].forEach(sub => {
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = sub.title;
      link.onclick = () => loadPage(sub.id);
      subNav.appendChild(link);
    });
  }

  // subNav.style.maxHeight = "60px"; // высота панели
  subNav.style.maxHeight = "100%"; // высота панели
  currentTopic = topic;
}

function loadPage(page) {
  fetch( page + ".html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("content").innerHTML = html;
    });
}