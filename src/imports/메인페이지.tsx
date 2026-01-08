import svgPaths from "./svg-aborhwuqvo";
import img from "figma:asset/8a253933a8c0fc3e48e7e3c2d7ff2b7ff98cd752.png";
import img1 from "figma:asset/6c148f8d80e5021c10976dec70a364793dd519bc.png";
import img2 from "figma:asset/1d0a19bcbf5761a36694b026705f89b64fdd429e.png";
import imgRoom104 from "figma:asset/989271fb64a36d73deb2c190223643ddeecbeeba.png";
import imgRoom105 from "figma:asset/c6cc230c5edb6646fd7d551214737b5bbd3d6081.png";
import imgRoom106 from "figma:asset/513d3f22cfa2bd22c0a38afbdaad395459577167.png";
import imgRoom107 from "figma:asset/d482759b2d3359558afa5491294d86c27521e24a.png";
import imgRectangle65 from "figma:asset/6048557ed12aec7deb1ae9bfadcd73c825e0fdcc.png";
import imgRectangle66 from "figma:asset/e97672f61e59e8b465aa282680904836bc3a18e0.png";
import imgRectangle67 from "figma:asset/1edc635708f0dfee1dab7ac4476d014c82896ab9.png";
import imgRectangle68 from "figma:asset/2b49539c55d63aa56df1a275871fbbaba26b7b64.png";

function Component() {
  return (
    <div className="absolute h-[1020px] left-0 top-0 w-[1920px]" data-name="메인">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#c4c4c4] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={img} />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[1020px] left-[1920px] top-0 w-[1920px]" data-name="메인">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#c4c4c4] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={img1} />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute h-[1020px] left-[3840px] top-0 w-[1920px]" data-name="메인">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#c4c4c4] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={img2} />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute h-[1020px] left-[5760px] top-0 w-[1920px]" data-name="메인">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#c4c4c4] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={img} />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[1020px] overflow-clip relative shrink-0 w-full">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[20px] text-black text-nowrap">
        <p className="leading-[15px]">Reservation</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[23px] text-black text-nowrap">
        <p className="leading-[15px]">Room 101</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[50px] relative shrink-0 w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 50">
          <g id="Frame 7342">
            <line id="Line 299" stroke="var(--stroke-0, black)" x1="0.500002" x2="0.5" y1="2.18557e-08" y2="50" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[20px] text-black text-nowrap">
        <p className="leading-[15px]">Check In/Out</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[23px] text-black text-nowrap">
        <p className="leading-[15px]">2025.01.27 월 - 2025.01.28 화</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[45px] items-center justify-center left-[1032px] px-[50px] py-[30px] top-[907px]" data-name="예약 및 체크인아웃">
      <Frame10 />
      <Frame14 />
      <Frame13 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[23px] text-center text-nowrap text-white">
        <p className="leading-[normal]">SANGREEN</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[20px] text-center text-nowrap text-white">
        <p className="leading-[normal]">KO</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[20px] text-center text-nowrap text-white">
        <p className="leading-[normal]">EN</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[48px] relative shrink-0 w-[51px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 48">
        <g id="Frame 7332">
          <path clipRule="evenodd" d={svgPaths.p18f85a80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[25px] items-start relative shrink-0">
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-1/2 px-[100px] py-0 top-[70px] translate-x-[-50%] w-[1920px]">
      <Frame2 />
      <Frame6 />
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex flex-col gap-[10px] h-[1019px] items-start overflow-clip relative shrink-0 w-[1920px]" data-name="메인">
      <Group4 />
      <Component5 />
      <div className="absolute flex flex-col font-['Noto_Nastaliq_Urdu:SemiBold',sans-serif] font-semibold h-[71px] justify-center leading-[0] left-[773px] text-[100px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white top-[431.5px] translate-y-[-50%] w-[186px]">
        <p className="leading-[15px]">San</p>
      </div>
      <div className="absolute flex flex-col font-['Noto_Nastaliq_Urdu:SemiBold',sans-serif] font-semibold h-[71px] justify-center leading-[0] left-[843px] text-[100px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white top-[520.5px] translate-y-[-50%] w-[304px]">
        <p className="leading-[15px]">Green</p>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[25px] text-black text-center text-nowrap">
        <p className="leading-[normal]">Room List</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#808080] text-[18px] text-center text-nowrap">
        <p className="leading-[normal]">지친 일상 속 자연을 느낄 수 있는 산그린펜션의 객실입니다.</p>
      </div>
    </div>
  );
}

function Component1RoomList() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[10px] py-0 relative shrink-0" data-name="서브 제목 1> Room List">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#808080] text-[18px] text-center text-nowrap">
        <p className="leading-[normal]">Detail</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[30px]">
      <div className="flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#808080] text-[18px] text-center w-full">
        <p className="leading-[normal]">{`>`}</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="디테일">
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-0 relative w-full">
          <Component1RoomList />
          <Component7 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[40px] text-center text-nowrap text-white">
        <p className="leading-[normal]">#104</p>
      </div>
    </div>
  );
}

function Room() {
  return (
    <div className="absolute content-stretch flex flex-col h-[600px] items-start left-[1000px] px-[39px] py-[28px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.3)] top-0 w-[250px]" data-name="room 104">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRoom104} />
      <Frame20 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[40px] text-center text-nowrap text-white">
        <p className="leading-[normal]">#103</p>
      </div>
    </div>
  );
}

function Room1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[600px] items-start left-[750px] px-[39px] py-[28px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.3)] top-0 w-[250px]" data-name="room 105">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRoom105} />
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[40px] text-center text-nowrap text-white">
        <p className="leading-[normal]">#102</p>
      </div>
    </div>
  );
}

function Room2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[600px] items-start left-[500px] px-[39px] py-[28px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.3)] top-0 w-[250px]" data-name="room 106">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRoom106} />
      <Frame23 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[40px] text-center text-nowrap text-white">
        <p className="leading-[normal]">#101</p>
      </div>
    </div>
  );
}

function Room3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[600px] items-start left-0 px-[39px] py-[28px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.3)] top-0 w-[500px]" data-name="room 107">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-1.84%] max-w-none top-[0.07%] w-[123.47%]" src={imgRoom107} />
      </div>
      <Frame24 />
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[600px] relative shrink-0 w-[1250px]">
      <Room />
      <Room1 />
      <Room2 />
      <Room3 />
    </div>
  );
}

function Component8() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[25px] items-center overflow-clip px-[310px] py-[166px] relative shrink-0 w-[1920px]" data-name="룸리스트">
      <Frame21 />
      <Group3 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[25px] text-black text-center text-nowrap">
        <p className="leading-[normal]">Special</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#808080] text-[18px] text-center text-nowrap">
        <p className="leading-[normal]">산그린 펜션의 부대시설과 특장점을 확인해보세요.</p>
      </div>
    </div>
  );
}

function Component1RoomList1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[10px] py-0 relative shrink-0" data-name="서브 제목 1> Room List">
      <Frame17 />
      <Frame25 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#808080] text-[18px] text-center text-nowrap">
        <p className="leading-[normal]">Detail</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[30px]">
      <div className="flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#808080] text-[18px] text-center w-full">
        <p className="leading-[normal]">{`>`}</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="디테일">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-0 relative w-full">
          <Component1RoomList1 />
          <Component9 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[18px] text-black text-center text-nowrap">
        <p className="leading-[normal]">수영장</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#b7b7b7] text-[18px] text-center text-nowrap">
        <p className="leading-[normal]">정원</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#b7b7b7] text-[18px] text-center text-nowrap">
        <p className="leading-[normal]">영화관</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[10px] h-[42px] items-center relative shrink-0 w-full">
      <Frame40 />
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[23px] text-black text-center text-nowrap">
        <p className="leading-[normal]">메인 수영장</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[normal] relative shrink-0 text-[#808080] text-[18px] text-nowrap">
        <p className="mb-0">깨끗하고 넓은 수영 공간에서 가족, 친구들과 함께 시원한 물놀이를 즐겨보세요.</p>
        <p className="mb-0">투명카약을 수영장에서 즐기며 물 위를 떠다니는 특별한 경험을 만끽해보세요.</p>
        <p className="mb-0">&nbsp;</p>
        <p>*오후 3시~ 오후 8시까지 하절기에만 운영합니다.</p>
      </div>
    </div>
  );
}

function Component1RoomList2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[20px] py-0 relative shrink-0 w-[584px]" data-name="서브 제목 1> Room List">
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Component1RoomList2 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full">
      <div className="h-[546px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[125.18%] left-[-0.01%] max-w-none top-[-12.62%] w-full" src={imgRectangle65} />
          </div>
        </div>
      </div>
      <Frame36 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="h-[718px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
        <Frame43 />
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] inset-0 items-start" data-name="Component 4">
      <Frame45 />
      <Frame44 />
    </div>
  );
}

function Group5() {
  return (
    <div className="h-[780px] relative shrink-0 w-[991px]">
      <Component4 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full">
      <Frame28 />
      <Group5 />
    </div>
  );
}

function Component10() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip px-[310px] py-[76px] relative shrink-0 w-[1920px]" data-name="부대시설">
      <Frame46 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex items-center left-[10px] top-0">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[25px] text-black text-center text-nowrap">
        <p className="leading-[normal]">Tour Spot</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-center left-[10px] top-[40px] w-[324px]">
      <div className="flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#808080] text-[18px] text-center text-nowrap">
        <p className="leading-[normal]">멘션 근처 주요 관광지 정보를 확인해보세요!</p>
      </div>
    </div>
  );
}

function Component1RoomList3() {
  return (
    <div className="h-[62px] relative shrink-0 w-[344px]" data-name="서브 제목 1> Room List">
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[208px]">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(85,85,85,0)] text-center text-nowrap tracking-[-0.36px]">
        <p className="leading-[24px]">강원도 춘천시 남산면 남이섬길1</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="h-[10.909px] relative shrink-0 w-[12px]" data-name="map">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="map"></g>
        </svg>
      </div>
      <Frame33 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[249px]">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(85,85,85,0)] text-center text-nowrap tracking-[-0.36px]">
        <p className="leading-[24px]">펜션에서 약 34km, 차량 약 50분 거리</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="h-[14.922px] relative shrink-0 w-[12px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Frame37 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start justify-center relative shrink-0 w-full">
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[23px] text-[rgba(0,0,0,0)] text-center w-full">
        <p className="leading-[normal]">남이섬</p>
      </div>
      <Frame49 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(85,85,85,0)] text-nowrap tracking-[-0.26px]">
            <p className="leading-[24px]">#문화예술의섬 #생명의섬 #남이섬 #나미나라공화국</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] inset-[35.57%_20.2%_35.38%_20.4%] items-center justify-center">
      <Frame50 />
      <Frame51 />
    </div>
  );
}

function Group6() {
  return (
    <div className="relative shrink-0 size-[430px]">
      <div className="absolute inset-0 rounded-[9999px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9999px] size-full" src={imgRectangle66} />
      </div>
      <Frame52 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[208px]">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(85,85,85,0)] text-center text-nowrap tracking-[-0.36px]">
        <p className="leading-[24px]">강원도 춘천시 남산면 남이섬길1</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="h-[10.909px] relative shrink-0 w-[12px]" data-name="map">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="map"></g>
        </svg>
      </div>
      <Frame34 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[249px]">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(85,85,85,0)] text-center text-nowrap tracking-[-0.36px]">
        <p className="leading-[24px]">펜션에서 약 34km, 차량 약 50분 거리</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="h-[14.922px] relative shrink-0 w-[12px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Frame38 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start justify-center relative shrink-0 w-full">
      <Frame53 />
      <Frame55 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[23px] text-[rgba(0,0,0,0)] text-center w-full">
        <p className="leading-[normal]">남이섬</p>
      </div>
      <Frame56 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(85,85,85,0)] text-nowrap tracking-[-0.26px]">
            <p className="leading-[24px]">#문화예술의섬 #생명의섬 #남이섬 #나미나라공화국</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] inset-[35.57%_20.2%_35.38%_20.4%] items-center justify-center">
      <Frame57 />
      <Frame59 />
    </div>
  );
}

function Group7() {
  return (
    <div className="relative shrink-0 size-[430px]">
      <div className="absolute inset-0 rounded-[9999px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9999px] size-full" src={imgRectangle67} />
      </div>
      <Frame60 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[208px]">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(85,85,85,0)] text-center text-nowrap tracking-[-0.36px]">
        <p className="leading-[24px]">강원도 춘천시 남산면 남이섬길1</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="h-[10.909px] relative shrink-0 w-[12px]" data-name="map">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="map"></g>
        </svg>
      </div>
      <Frame35 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[249px]">
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(85,85,85,0)] text-center text-nowrap tracking-[-0.36px]">
        <p className="leading-[24px]">펜션에서 약 34km, 차량 약 50분 거리</p>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="h-[14.922px] relative shrink-0 w-[12px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Frame39 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start justify-center relative shrink-0 w-full">
      <Frame61 />
      <Frame62 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[23px] text-[rgba(0,0,0,0)] text-center w-full">
        <p className="leading-[normal]">남이섬</p>
      </div>
      <Frame63 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(85,85,85,0)] text-nowrap tracking-[-0.26px]">
            <p className="leading-[24px]">#문화예술의섬 #생명의섬 #남이섬 #나미나라공화국</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] inset-[35.57%_20.2%_35.38%_20.4%] items-center justify-center">
      <Frame64 />
      <Frame65 />
    </div>
  );
}

function Group8() {
  return (
    <div className="relative shrink-0 size-[430px]">
      <div className="absolute inset-0 rounded-[9999px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9999px] size-full" src={imgRectangle68} />
      </div>
      <Frame69 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full">
      <Group6 />
      <Group7 />
      <Group8 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[77px] items-start relative shrink-0 w-[1300px]">
      <Component1RoomList3 />
      <Frame66 />
    </div>
  );
}

function Component11() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-[162px] py-[171px] relative shrink-0 w-[1920px]" data-name="주변관광지">
      <Frame67 />
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] font-['Noto_Sans_KR:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[49px] place-items-start relative text-[#555] text-[14px]">
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[5px] relative text-nowrap translate-y-[-50%]">
        <p className="leading-[normal]">경기도 가평군 조종면 현등사길 35-9, 산그린펜션</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[28px] relative translate-y-[-50%] w-[238px]">
        <p className="leading-[normal]">{`대표자 : 이엽  |  E : sidezzz@naver.com`}</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[51px] relative text-nowrap translate-y-[-50%]">
        <p className="leading-[normal]">{`T : 031-584-5748  |  P : 010-2206-5748`}</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center ml-0 mt-[11px] relative text-[30px] text-black text-nowrap translate-y-[-50%]">
        <p className="leading-[normal]">SANGREEN</p>
      </div>
      <Group1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start leading-[0] relative shrink-0 w-[280px]">
      <Group2 />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#555] text-[14px] w-[min-content]">
        <p className="leading-[normal]">Copyright ⓒ 산그린펜션 All rights reserved.</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 text-[#555] text-[14px] text-nowrap">
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[5px] relative translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap">고객센터</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[94px] mt-[5px] relative translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap">이용약관</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[188px] mt-[5px] relative translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap">개인정보처리방침</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-[334px] mt-[5px] relative translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap">Contact Us</p>
      </div>
    </div>
  );
}

function LogosInstagramIcon() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[20px]" data-name="logos:instagram-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_536)" id="logos:instagram-icon">
          <path d={svgPaths.p30a25700} fill="var(--fill-0, #0A0A08)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_536">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function QlementineIconsFacebook() {
  return (
    <div className="[grid-area:1_/_1] ml-[33px] mt-0 relative size-[20px]" data-name="qlementine-icons:facebook-16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_539)" id="qlementine-icons:facebook-16">
          <path clipRule="evenodd" d={svgPaths.p1f656a80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_539">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Sns() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="sns">
      <LogosInstagramIcon />
      <QlementineIconsFacebook />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[86px] items-end leading-[0] relative shrink-0 w-[405px]">
      <Group />
      <Sns />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex h-[257px] items-center justify-between relative shrink-0 w-full" data-name="footer">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[10px] relative w-full">
        <Footer />
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 p-[10px] top-[70px] translate-x-[-50%] w-[1300px]">
      <Frame54 />
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-[#9fae95] h-[437px] overflow-clip relative shrink-0 w-[1920px]" data-name="마지막">
      <Frame58 />
    </div>
  );
}

function Component13() {
  return (
    <button className="bg-white block cursor-pointer h-[112px] shrink-0 sticky top-0 w-[300px]" data-name="예약하기 버튼">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
      <div className="absolute flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] left-[76px] text-[40px] text-black text-left text-nowrap top-[56px] translate-y-[-50%]">
        <p className="leading-[15px]">예약하기</p>
      </div>
    </button>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col items-start pointer-events-auto sticky top-0">
      <Component13 />
    </div>
  );
}

export default function Component14() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="메인페이지">
      <Component6 />
      <Component8 />
      <Component10 />
      <Component11 />
      <Component12 />
      <div className="absolute bottom-0 h-[3498px] left-[1620px] pointer-events-none top-[907px]">
        <Frame68 />
      </div>
    </div>
  );
}