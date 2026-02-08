const subTopics = {
  Home: [
    { id: "Home/cheatshet", title: "Шпаргалка" },
    { id: "Home/usefullStuff", title: "Разные полезности в анрил" },
    { id: "Home/git", title: "GIT" },
  ],
  Animation: [    
    { id: "Animation/intro", title: "вводные данные для анимаций" },
    { id: "Animation/soundtoanimations", title: "Добавить звук анимации" },
    { id: "Animation/animation", title: "Добавить анимации к персонажу" },
    { id: "Animation/motionmatching", title: "Motion Matching animations" },
    { id: "Animation/animforotherchar", title: "Назначать анимацию на других персонажей" },
    { id: "Animation/niagara", title: "Niagara Systems" },
  ],
  Audio: [
    { id: "Audio/audio", title: "Audio" },
    { id: "Audio/metasound", title: "MetaSound" },
    { id: "Audio/audioadvanced", title: "Audio Advanced" },
  ],
  Input: [
    { id: "Input/enhancedinput", title: "Enhanced Input — базовая настройка управления" },
    { id: "Input/inputAction", title: "Input — Action" },
    { id: "Input/inputMappingContext", title: "Input — Mapping" },
    { id: "Input/inputnodes", title: "Input — Node в EventGraph" },
    { id: "Input/gamepad", title: "Input — GamePad" },
  ],
  "Static Meshe": [
    { id: "StaticMesh/staticmesh", title: "Static Mesh" },
  ],
  'Вlueprint Basic':[
    { id: "Blueprint/blueprint", title: "blueprint"},
    { id: "Blueprint/bpclasses", title: "Classes"},
    { id: "Blueprint/nodes", title: "Nodes"},
    { id: "Blueprint/functionsEventsMacros", title: "Functions Events Macros"},
    { id: "Blueprint/variables", title: "Переменные / типы данных"},
    { id: "Blueprint/comment", title: "comments"},
    { id: "Blueprint/projectile", title: "снаряды"},
  ],
  'Вlueprint Nodes':[
    { id: "Blueprint/flowcontrol", title: "Flow Control"},
  ],
  "Вlueprint Communication":[
    { id: "Blueprint/directcommunication", title: "Прямая коммуникация"},
    { id: "Blueprint/casting", title: "Cast"},
    { id: "Blueprint/interface", title: "Interface"},
    { id: "Blueprint/eventDispatchers", title: "Event Dispatchers"},
    { id: "Blueprint/structure", title: "Structure"},
    { id: "Blueprint/enumerators", title: "Enumerators"},
  ],
  "Вlueprint Gameplay":[
    { id: "Blueprint/CreateFirstPersonCharacter", title: "Create First-Person Character"},
    { id: "Blueprint/collision", title: "Collison"},
    { id: "Blueprint/DamageCollision", title: "Event Hit — данные столкновений"},
    { id: "Blueprint/trigger", title: "Trigger"},
    { id: "Blueprint/interact", title: "Interact"},
    { id: "Blueprint/moveActore", title: "двигать акторы"},
    { id: "Blueprint/physicshandle", title: "Physics Handle"},
    { id: "Blueprint/timeControl", title: "Time Control"},
    { id: "Blueprint/footsteps1stPerson", title: "footsteps1stPerson"},
    { id: "Blueprint/gameMode", title: "GameMode"},
    { id: "Blueprint/camerarestrictions", title: "Ограничения угла камеры"},


  ],
  "Вlueprint UXUI":[
    { id: "Blueprint/hud", title: "HUD"},
    { id: "Blueprint/uxui", title: "UX UI"},
    { id: "Blueprint/widget", title: "Widget - теория"},
    { id: "Blueprint/widget2", title: "Widget настройка"},
    { id: "Blueprint/localization", title: "Localization"},
    { id: "Blueprint/visualeffects", title: "Визуальные Эфекты"},
    { id: "Blueprint/fonts", title: "Fonts"},

  ],
  "Вlueprint Visual":[
    { id: "Blueprint/materialandcolor", title: "Material and color"},

  ],
  "Вlueprint Math and Vectors":[
    { id: "Blueprint/vectors", title: "Vectors"},

  ],
  "Level Design & World Building": [
    { id: "LevelDesign/LevelInstancePackedLevelActor", title: "Level Instance / Packed Level Actor" },
  ],
  Cinematic: [
    { id: "Cinematic/camerarigs", title: "кран и рельсы" },
    { id: "Cinematic/firststeps", title: "создание первого сиквенсера" },
    { id: "Cinematic/plugins", title: "плагины" },
  ],
  Debug: [
    { id: "Debug/debug", title: "Debug" },
    { id: "Debug/debug2", title: "Debug 2" },
    { id: "Debug/debugconcole", title: "консольные команды" },
  ],
  Landscape: [
    { id: "Landscape/landscape_main", title: "Основы Landscape" },
    { id: "Landscape/landscape_sculpting", title: "Sculpting" },
    { id: "Landscape/landscape_painting", title: "Painting" },
    { id: "Landscape/landscape_foliage", title: "Foliage" },
    { id: "Landscape/landscape_advancedTools", title: "Advanced Landscape Tools" },
  ],
  Light: [
    { id: "Light/light", title: "свет и туман" },
  ],
  Physics: [
    { id: "Physics/physics", title: "Physical Materials" },
  ],
  Plugins: [
    { id: "Plugins/pluginsfab", title: "Плагины, которые стоит изучить" },
    { id: "Plugins/mychose", title: "Плагины, которые я использую  " },
  ],
  Editor: [
    { id: "Editor/about", title: "Базовые понятия Unreal Engine" },
    { id: "Editor/editorsetup", title: "Настройка редактора" },
    { id: "Editor/morememory", title: "Увеличение памяти для движка" },
    { id: "Editor/navigation", title: "Навигация" },
    { id: "Editor/packagecooking", title: "Запекаем создаем игру" },
    { id: "Editor/projectsetup", title: "Настройка проекта" },
    { id: "Editor/projectstructure", title: "Структура проекта" },
  ],
  Theory: [
    { id: "Theory/mechaniks", title: "Механики" },
    { id: "Theory/collisions", title: "Теория про коллизии" },
    { id: "Theory/modepaint", title: "Paint" },
    { id: "Theory/modeplace", title: "Place Actors" },
    { id: "Theory/naming", title: "Базовые элементы движка" },
    { id: "Theory/proffesion", title: "Проффесии" },
    
  ],
  Optimize:[
    { id: "Optimize/optimizegeometry", title: "Оптимизация Геометрии" },
  ],
  Steam: [
    { id: "Steam/steam", title: "Интеграция Steam в Unreal Engine" },
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
    link.onclick = (e) => showSubMenu(topic, e.target);
    mainNav.appendChild(link);
  });
  // === АВТОВЫБОР HOME ===
  const firstLink = document.querySelector("#main-nav a");
  firstLink.classList.add("active");

  showSubMenu("Home", firstLink);

  initActiveLine();

  loadPage(subTopics["Home"][0].id);
};

/* Показ подменю */
function showSubMenu(topic, element) {
  const subNav = document.getElementById("sub-nav");

  // Переключаем анимацию
  subNav.classList.remove("open");

  setTimeout(() => {
    subNav.innerHTML = "";

    subTopics[topic].forEach(sub => {
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = sub.title;
      link.onclick = (ev) => { ev.preventDefault(); loadPage(sub.id, ev.target); };
      subNav.appendChild(link);
    });

    // Запускаем раскрытие
    void subNav.offsetHeight;
    subNav.classList.add("open");
  }, 150);

  // Подсветка активного раздела
  document.querySelectorAll("#main-nav a").forEach(a => a.classList.remove("active")); 
  element.classList.add("active");

  moveActiveLine(element);

}

/* Загрузка страниц */
function loadPage(page, linkElement) {
  const content = document.getElementById("content");

  // Подсветка активного пункта
  document.querySelectorAll("#sub-nav a").forEach(a => a.classList.remove("active")); if (linkElement) linkElement.classList.add("active");

  // 1. Плавно скрываем старый контент
  content.classList.remove("loaded");

  // 2. Ждём fade-out
  setTimeout(() => {
    fetch(page + ".html")
      .then(res => res.text())
      .then(html => {

        // 3. Вставляем новый HTML
        content.innerHTML = html;

        // 4. Обрабатываем картинки (плавная загрузка)
        processImages();

        // 5. Включаем просмотр картинок (fullscreen)
        enableImageViewer();

        // 6. Принудительный reflow
        void content.offsetHeight;

        // 7. Плавно показываем новый контент
        content.classList.add("loaded");
      });
  }, 350);
}


// function processImages() {
//   const images = document.querySelectorAll("#content img");

//   images.forEach(img => {
//     // Если картинка уже загружена (кеш)
//     if (img.complete) {
//       img.classList.add("loaded");
//       return;
//     }

//     // Если загружается — ждём
//     img.addEventListener("load", () => {
//       img.classList.add("loaded");
//     });

//     // Если ошибка загрузки
//     img.addEventListener("error", () => {
//       img.classList.add("loaded");
//     });
//   });
// }


function processImages() {
  const images = document.querySelectorAll("#content img");

  images.forEach(img => {
    // Если картинка ещё не обёрнута
    if (!img.parentElement.classList.contains("image-block")) {
      const wrapper = document.createElement("div");
      wrapper.className = "image-block";

      img.parentNode.insertBefore(wrapper, img);
      wrapper.appendChild(img);
    }

    // Если картинка уже загружена (кеш)
    if (img.complete) {
      img.classList.add("loaded");
      return;
    }

    img.addEventListener("load", () => img.classList.add("loaded"));
    img.addEventListener("error", () => img.classList.add("loaded"));
  });
}



// Фуллскрин просмотр картинок
function enableImageViewer() {
  const viewer = document.getElementById("img-viewer");
  const viewerImg = document.getElementById("img-full");
  const closeBtn = document.getElementById("img-close");

  // Навешиваем обработчики на все картинки внутри контента
  document.querySelectorAll("#content img").forEach(img => {
    img.style.cursor = "zoom-in";

    img.addEventListener("click", () => {
      viewerImg.src = img.src;
      viewer.classList.add("active");
    });
  });

  // Закрытие по крестику
  closeBtn.addEventListener("click", () => {
    viewer.classList.remove("active");
  });

  // Закрытие по клику вне картинки
  viewer.addEventListener("click", (e) => {
    if (e.target === viewer) viewer.classList.remove("active");
  });

  // Закрытие по ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") viewer.classList.remove("active");
  });
}
document.querySelectorAll("#main-nav a").forEach(a => {
  a.addEventListener("click", () => moveActiveLine(a));
});

// линия которая бегает по всему меню
function moveActiveLine(el) {
  const line = document.getElementById("active-line");
  const rect = el.getBoundingClientRect();
  const navRect = document.getElementById("main-nav").getBoundingClientRect();

  line.style.top = (rect.top - navRect.top) + "px";
  line.style.height = rect.height + "px";
}

function initActiveLine() {
  const line = document.getElementById("active-line");
  const links = document.querySelectorAll("#main-nav a");

  if (!links.length) return;

  links.forEach(a => {
    a.addEventListener("click", () => {
      moveActiveLine(a);
    });
  });

  const active = document.querySelector("#main-nav a.active");
  if (active) {
    moveActiveLine(active);
  } else {
    const first = document.querySelector("#main-nav a");
    if (first) moveActiveLine(first);
  }
}


const toggleBtn = document.getElementById("toggle-sidebar");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-collapsed");

  // Меняем стрелку
  if (document.body.classList.contains("sidebar-collapsed")) {
    toggleBtn.textContent = "⮞"; // панель скрыта → стрелка вправо
  } else {
    toggleBtn.textContent = "⮜"; // панель открыта → стрелка влево
  }
});
