import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsEhd8_n_ab_NVWLlx6K-7Y_-1xcnN47w",
  authDomain: "my-school-homepage.firebaseapp.com",
  projectId: "my-school-homepage",
  storageBucket: "my-school-homepage.firebasestorage.app",
  messagingSenderId: "458349452372",
  appId: "1:458349452372:web:f85e926a05e1a2e0b9a1c1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const posts = [
  { title: "환영합니다! 우리 학교 게시판입니다.", content: "Firebase를 이용한 실시간 커뮤니티 공간에 오신 것을 환영합니다.", author: "관리자" },
  { title: "2026학년도 신입생 모집 요강", content: "자세한 사항은 학과 소개 페이지를 참고해 주세요.", author: "입학처" },
  { title: "오늘의 점심 메뉴 안내", content: "돈까스, 샐러드, 미소된장국, 김치가 제공됩니다.", author: "영양사" },
  { title: "포트폴리오 작성 가이드", content: "Vercel과 Firebase를 이용해 나만의 포트폴리오를 만들어보세요.", author: "도우미" }
];

async function seed() {
  console.log("데이터베이스에 초기 데이터를 생성하는 중...");
  for (const post of posts) {
    try {
      await addDoc(collection(db, "posts"), {
        ...post,
        createdAt: serverTimestamp()
      });
      console.log(`성공: "${post.title}" 글이 추가되었습니다.`);
    } catch (e) {
      console.error("오류 발생: ", e.message);
    }
  }
  console.log("\n모든 작업이 완료되었습니다! 이제 홈페이지 게시판에서 확인해 보세요.");
  process.exit();
}

seed();
