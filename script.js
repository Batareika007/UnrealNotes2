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
    { id: "Blueprint/bpclasses", title: "Classes"},
    { id: "Blueprint/collision", title: "Collison"},
    { id: "Blueprint/comment", title: "comments"},
    { id: "Blueprint/CreateFirstPersonCharacter", title: "Create First-Person Character"},
    { id: "Blueprint/DamageCollision", title: "Damage Collision"},
    { id: "Blueprint/Enumerators", title: "Enumerators"},
    { id: "Blueprint/eventDispatchers", title: "Event Dispatchers"},
    { id: "Blueprint/footsteps1stPerson", title: "footsteps1stPerson"},
    { id: "Blueprint/functionsEventsMacros", title: "Functions Events Macros"},
    { id: "Blueprint/gameMode", title: "GameMode"},
    { id: "Blueprint/hud", title: "HUD"},
    { id: "Blueprint/interact", title: "Interact"},
    { id: "Blueprint/localization", title: "Localization"},
    { id: "Blueprint/Materialandcolor", title: "Material and color"},
    { id: "Blueprint/nodes", title: "Nodes"},
    { id: "Blueprint/spherecast", title: "Sphere cast"},
    { id: "Blueprint/structure", title: "Structure"},
    { id: "Blueprint/timeControl", title: "Time Control"},
    { id: "Blueprint/trigger", title: "Trigger"},
    { id: "Blueprint/moveActore", title: "двигать акторы"},
    { id: "Blueprint/uxui", title: "UX UI"},

    { id: "Blueprint/vectors", title: "Vectors"},
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
/* Генерация меню */
/* Генерация основного меню */
window.onload = () => {
  const mainNav = document.getElementById("main-nav");

  Object.keys(subTopics).forEach(topic => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = topic;
    link.onclick = () => showSubMenu(topic);
    mainNav.appendChild(link);
  });
};

/* Показ подменю */
function showSubMenu(topic) {
  const subNav = document.getElementById("sub-nav");
  subNav.innerHTML = "";

  // Подсветка активного раздела
  document.querySelectorAll("#main-nav a").forEach(a => a.classList.remove("active"));
  event.target.classList.add("active");


  subTopics[topic].forEach(sub => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = sub.title;
    link.onclick = () => loadPage(sub.id);
    subNav.appendChild(link);
  });
}

/* Загрузка страниц */
function loadPage(page) {
const content = document.getElementById("content");

  // Подсветка активного пункта
  document.querySelectorAll("#sub-nav a").forEach(a => a.classList.remove("active"));
  event.target.classList.add("active");

  // 1. Плавно скрываем старый контент
  content.classList.add("fade");

  // 2. Ждём 300 мс (пока исчезает)
  setTimeout(() => {
    fetch(page + ".html")
      .then(res => res.text())
      .then(html => {

        // 3. Меняем HTML, пока он невидим
        content.innerHTML = html;

        // 4. Принудительный reflow (важно!)
        void content.offsetHeight;

        // 5. Плавно показываем новый контент
        content.classList.remove("fade");
      });
  }, 300); // ← длительность fade-out

}

