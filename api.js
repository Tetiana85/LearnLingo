import { getDatabase, ref, child, get } from 'firebase/database';

//========================= GET ALL TEACHERS FROM REAL-TIME DATABASE
export async function getAllTeachers(teachersPerPage) {
  try {
    const db = getDatabase();
    const dbRef = ref(db);
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const teachersData = Object.values(snapshot.val());
      return teachersData.slice(0, teachersPerPage);
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching teachers data:', error);
    return [];
  }
}

//========================= GET ALL TEACHERS BY LANGUAGES
export async function getTeachersByLanguage(language) {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, 'teachers'));
    const teachers = snapshot.val();
    const filteredTeachers = Object.values(teachers).filter((teacher) =>
      teacher.languages.includes(language)
    );
    return filteredTeachers;
  } catch (error) {
    console.error(error);
  }
}

//========================= GET ALL TEACHERS BY LEVELS
export async function getTeachersByLvl(lvl) {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, 'teachers'));
    const teachers = snapshot.val();
    const filteredTeachersByLvl = Object.values(teachers).filter((teacher) =>
      teacher?.levels.includes(lvl)
    );
    return filteredTeachersByLvl;
  } catch (error) {
    console.error(error);
  }
}

//========================= GET ALL TEACHERS BY PRICE
export async function getTeachersByPrice(price) {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, 'teachers'));
    const teachers = snapshot.val();
    const filteredTeachersByPrice = Object.values(teachers).filter(
      (teacher) => teacher.price_per_hour === +price
    );
    return filteredTeachersByPrice;
  } catch (error) {
    console.error(error);
  }
}
//========================= GET ALL TEACHERS BY LANGUAGE, LEVEL AND PRICE
export async function getAllFiltered(language, lvl, price) {
  try {
    if (language && !lvl && !price) {
      let teachersLang = await getTeachersByLanguage(language);
      return teachersLang;
    } else if (lvl && !language && !price) {
      let teachersLvl = await getTeachersByLvl(lvl);
      return teachersLvl;
    } else if (price && !language && !lvl) {
      let teachersPrice = await getTeachersByPrice(price);
      return teachersPrice;
    } else if (language && lvl && !price) {
      let teachersLang = await getTeachersByLanguage(language);
      let teachersLvl = await getTeachersByLvl(lvl);
      const intersectedTeachers = teachersLang.filter((teacherLvl) => {
        return teachersLvl.some(
          (teacherLang) => teacherLang.id === teacherLvl.id
        );
      });
      return intersectedTeachers;
    } else if (lvl && price && !language) {
      let teachersLvl = await getTeachersByLvl(lvl);
      let teachersPrice = await getTeachersByPrice(price);
      const intersectedTeachers = teachersLvl.filter((teacherLvl) => {
        return teachersPrice.some(
          (teacherPrice) => teacherPrice.id === teacherLvl.id
        );
      });
      return intersectedTeachers;
    } else if (language && price && !lvl) {
      let teachersLang = await getTeachersByLanguage(language);
      let teachersPrice = await getTeachersByPrice(price);
      const intersectedTeachers = teachersLang.filter((teacherLang) => {
        return teachersPrice.some(
          (teacherPrice) => teacherLang.id === teacherPrice.id
        );
      });
      return intersectedTeachers;
    } else if (language && lvl && price) {
      let teachersLang = await getTeachersByLanguage(language);
      let teachersLvl = await getTeachersByLvl(lvl);
      let teachersPrice = await getTeachersByPrice(price);
      const intersectedTeachers = teachersLang.filter((teacherLang) => {
        return teachersLvl.some((teacherLvl) => {
          return teachersPrice.some(
            (teacherPrice) =>
              teacherPrice.id === teacherLvl.id &&
              teacherLvl.id === teacherLang.id
          );
        });
      });

      return intersectedTeachers;
    }
  } catch (error) {
    console.error(error);
  }
}
