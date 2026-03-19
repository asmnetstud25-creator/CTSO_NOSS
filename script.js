// Add JavaScript code for your web site here and call it from index.html.
let loopCount = 0;
const maxLoops = 3;
const alarm = document.getElementById('alarmSound');
const briefing = document.getElementById('briefingAudio');

function startMission() {
    // UI Updates
    document.getElementById('warning-overlay').style.display = 'none';
    document.getElementById('muteBtn').style.display = 'block';
    document.getElementById('mission-text').innerHTML = "SYSTEM ALERT: BREACH IN PROGRESS...";
    document.getElementById('system-status').innerHTML = "● BREACH DETECTED";
    document.getElementById('mission-text').style.color = "#ff3333";

    // Audio Loop Logic
    alarm.play();
    loopCount = 1;

    alarm.onended = function() {
        if (loopCount < maxLoops) {
            loopCount++;
            alarm.play();
        } else {
            stopAlarm();
            briefing.play();
            document.getElementById('mission-text').innerHTML = "MISSION BRIEFING IN PROGRESS... ANALYZE PCAPS.";
            document.getElementById('mission-text').style.color = "#00ffcc";
        }
    };
}

function stopAlarm() {
    alarm.pause();
    alarm.currentTime = 0;
    document.getElementById('muteBtn').style.display = 'none';
}

function stopAllAudio() {
    alarm.pause();
    briefing.pause();
    document.getElementById('muteBtn').style.display = 'none';
    document.getElementById('mission-text').innerHTML = "AUDIO SILENCED. PROCEED WITH TICKET 1.";
}
