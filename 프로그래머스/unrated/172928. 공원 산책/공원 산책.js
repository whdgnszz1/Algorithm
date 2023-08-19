function solution(park, routes) {
    let [y, x] = [0,0];
    
    // 시작지점 좌표 구하기
    park.map((v,i) => {
        if(v.includes("S")) {
            x = v.indexOf("S");
            y = i;
        }
    });
    
    // routes에 따라 좌표 이동하기
    for(let v of routes) {
        const [direction, num] = v.split(" ");
        let nextY = y;
        let nextX = x;
        let isInvalid = false; // 명령 수행 중 장애물이나 경계에 걸리는지 체크
        
        for (let i = 0; i < Number(num); i++) {
            switch(direction) {
                case "E":
                    nextX++;
                    break;
                case "W":
                    nextX--;
                    break;
                case "N":
                    nextY--;
                    break;
                case "S":
                    nextY++;
                    break;
            }
            
            // 공원을 벗어나거나 장애물을 만나면 해당 명령 무시
            if (nextY < 0 || nextY >= park.length || nextX < 0 || nextX >= park[0].length || park[nextY][nextX] === "X") {
                isInvalid = true;
                break;
            }
        }
        
        if (!isInvalid) {
            y = nextY;
            x = nextX;
        }
    } 
    return [y, x];
}
