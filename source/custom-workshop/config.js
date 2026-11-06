const C26={
 colors:[['black','블랙','#27282c'],['white','화이트','#f2eee4'],['wine','와인 레드','#9c293d'],['orange','오렌지','#d47b32'],['gold','골드','#b89a50'],['forest','포레스트 그린','#35664c'],['teal','청록','#2c918d'],['blue','딥 블루','#2d467b'],['violet','바이올렛','#785098'],['natural','내추럴',null]],
 bodyWood:[['alder','앨더',0,1],['ash','애시',100000,1],['walnut','월넛',250000,2],['flame','플레임 메이플',600000,2],['burl','버얼',1500000,3]],
 neckWood:[['maple','메이플',0,1],['mahogany','마호가니',150000,2],['walnut','월넛',300000,3]],
 fretWood:[['maple','메이플',0,1],['rosewood','로즈우드',100000,2],['ebony','에보니',250000,3]],
 paint:[['solid','단색',0,1],['transparent','투명 착색',0,1],['sunburst','선버스트',80000,2],['gradient','그라데이션',150000,2],['pearl','펄',300000,3]],
 coat:[['standard','기본 도장',0,1],['shift','컬러시프트',1800000,3]],
 metal:[['silver','실버',0,1],['black','블랙',0,1],['gold','골드',120000,2],['roseGold','로즈골드',220000,3]],
 pickupSpec:[['standard','기본',0,1],['vintage','빈티지',120000,2],['noiseless','노이즈리스',230000,2],['active','액티브',330000,3],['handwound','핸드와운드',900000,3],['boutique','부티크',1200000,3]],
 bridge:[['fixed','고정형',0,1],['tremolo','트레몰로',200000,2],['vibrato','빈티지 비브라토',500000,3]],
 bridgeGrade:[['standard','기본',0,1],['precision','정밀 가공',80000,2],['premium','고급 브리지',600000,3]],
 guard:[['none','없음',0,1],['solid','솔리드',30000,1],['pearl','펄',80000,2],['tortoise','토터스',90000,2]],
 knob:[['metal','메탈 원통',0,1],['bell','벨형',30000,2],['black','검정 눈금형',30000,2]],
 tuner:[['vintage','빈티지형',0,1],['locking','락킹형',150000,2]],
 tunerGrade:[['standard','기본',0,1],['premium','고급 튜너',250000,3]],
 rosette:[['simple','단순 링',0,1],['wood','우드 모자이크',90000,2],['abalone','자개',1200000,3]],
 acousticBridge:[['rosewood','로즈우드',0,1],['ebony','에보니',140000,2],['premium','고급 에보니',350000,3]],
 saddle:[['standard','기본 새들',0,1],['bone','본 새들',600000,2],['premium','고급 새들',250000,3]],
 acousticPickup:[['none','없음',0,1],['internal','언더새들 내장형',800000,2],['soundhole','사운드홀형',1100000,3]],
 inlay:[['none','없음',0,1],['dot','점',0,1],['block','블록',100000,2],['moon','달',200000,2],['flower','꽃',350000,3],['vine','덩굴',600000,3]],
 finish:[['gloss','유광',0,1],['matte','무광',0,1],['relic','빈티지 에이징',170000,2]],
 engraving:[['none','없음',0,1],['engraved','핸드 인그레이빙',2500000,3]],
 motifs:[['phoenix','불사조',250000,3],['wing','날개',100000,2],['dragon','용',300000,3],['snake','뱀',200000,3],['rose','장미',100000,2],['orchid','난초',120000,2],['moon','초승달',50000,1],['stars','별자리',80000,2],['bolt','번개',50000,1],['geometry','기하학',60000,1]],
 material:[['paint','일반 도장',0,1],['gold','금박',100000,2],['silver','은박',80000,2],['pearl','자개',250000,3]]
};
C26.woodGrade=[['standard','기본 목재',0,1],['flameSelect','선별 플레임',200000,2],['walnutSelect','선별 월넛',650000,2],['quilt','퀼티드 메이플',900000,3]];
C26.topGrade=[['none','기본 상판',0,1],['spruce','선별 스프루스',800000,2],['cedar','선별 시더',1200000,3]];
C26.backWood=[['none','기본 측후판',0,1],['mahogany','선별 마호가니',1000000,2],['rosewood','선별 로즈우드',2000000,3]];
C26.binding=[['none','없음',0,1],['maple','메이플 바인딩',400000,2],['abalone','자개 바인딩',900000,3]];
C26.knobMaterial=[['metal','기본 소재',0,1],['wood','우드 노브',400000,2]];
C26.inlayMaterial=[['standard','기본 소재',0,1],['pearl','자개 인레이',1200000,3]];
const Labels26={woodGrade:'고급 바디 목재',topGrade:'고급 상판',backWood:'고급 측후판',binding:'바인딩',knobMaterial:'노브 소재',inlayMaterial:'인레이 소재',bodyWood:'바디 목재',neckWood:'넥 목재',fretWood:'지판 목재',bodyColor:'바디 색상',neckColor:'넥 뒷면 색상',headColor:'헤드 색상',paint:'도장',color2:'보조 색상',coat:'고급 도장',metal:'금속 색상',pickupShape:'픽업 외형',pickupSpec:'픽업 사양',bridge:'브리지',bridgeGrade:'브리지 사양',guard:'픽가드',guardColor:'픽가드 색상',knob:'노브',knobCount:'노브 개수',tuner:'튜너',tunerGrade:'튜너 사양',rosette:'로제트',acousticBridge:'브리지 목재',saddle:'새들',acousticPickup:'어쿠스틱 픽업',inlay:'지판 인레이',finish:'표면 마감',engraving:'문양 가공'};
const Fields26=['woodGrade','topGrade','backWood','binding','knobMaterial','inlayMaterial','bodyWood','neckWood','fretWood','bodyColor','neckColor','headColor','paint','color2','coat','metal','pickupShape','pickupSpec','bridge','bridgeGrade','guard','guardColor','knob','knobCount','tuner','tunerGrade','rosette','acousticBridge','saddle','acousticPickup','inlay','finish','engraving'];
const Metal26={silver:'#bcc2c6',black:'#34383b',gold:'#ccac60',roseGold:'#c88f80'};
const Wood26={alder:['#dfc291','#9c754b'],ash:['#e9d7ae','#9c815b'],walnut:['#977049','#4e3528'],flame:['#dfb37c','#8c5a31'],burl:['#bd9465','#704729'],maple:['#e9cf99','#a98a59'],mahogany:['#ae7150','#694731'],rosewood:['#704a38','#3b2a26'],ebony:['#2e2e2b','#131b18']};
let cleanAtlas26=[],partsAtlas26=null,motifsAtlas26=null,woodsAtlas26=null,workshopTab26='appearance',selectedMark26=-1,workshopZoom26=false,preview26=null;
const textureCache26=new Map(),pathCache26=new Map(),tintCache26=new Map();
const maskCtx26=document.createElement('canvas').getContext('2d');

const woodPixels26=new Map();

const materialCache26=new Map();
