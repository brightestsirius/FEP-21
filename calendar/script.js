// 🥵👨🏻‍💻🥳

const ROOMS = [
    {
        title: `Green`,
        days: [`Monday`, `Tuesday`, `Wednesday`, `Friday`],
        hours: {
            start: 10,
            end: 15
        }
    },
    {
        title: `Red`,
        days: [`Wednesday`, `Thursday`, `Friday`],
        hours: {
            start: 12,
            end: 19
        }
    },
    {
        title: `Orange`,
        days: [`Tuesday`, `Friday`, `Sunday`],
        hours: {
            start: 10,
            end: 17
        }
    }
];

const PARTICIPANTS = [`Jack`, `Taras`,`Volodymyr`,`Olena`];

// utils
const getRoomHours = (obj) => {
    const hours = [];

    let startHour = obj.start;
    let endHour = obj.end;

    for(; startHour<=endHour; startHour++) hours.push(startHour);
    return hours;
}

const MEETING_REPORTS = {
    successful: (item) => `🥳 Meeting in ${item.room} room on ${item.day} at ${item.hour}:00 successfully added.`,
    error: (item) => `🥵 Meeting in ${item.room} room on ${item.day} at ${item.hour}:00 already exist.`
}
// utils

// form
const formRoom = document.querySelector(`#formRoom`);

if(formRoom){
    const formMeetTitle = formRoom.querySelector(`input[data-name="title"]`);
    const formRoomSelect = formRoom.querySelector(`select[data-name="room"]`);
    const formDaySelect = formRoom.querySelector(`select[data-name="day"]`);
    const formHourSelect = formRoom.querySelector(`select[data-name="hour"]`);

    formRoomSelect.addEventListener(`change`, e => {
        fillFormDaysByRoom(e.target.value);
        fillFormHoursByRoom(e.target.value);
    })
    
    const fillDataRoomsSelect = () => {
        formRoomSelect.innerHTML = ROOMS
            .map(room => room.title)
            .map(room => `<option value="${room}">${room}</option>`)
            .join(``);
    }
    
    const fillFormDaysByRoom = (room) => {
        const selecedRoom = ROOMS.find(item => item.title === room);
        formDaySelect.innerHTML = selecedRoom.days
            .map(item => `<option value="${item}">${item}</option>`)
            .join(``);
    }
    
    const fillFormHoursByRoom = (room) => {
        const selecedRoom = ROOMS.find(item => item.title === room);
    
        const hours = getRoomHours(selecedRoom.hours);
    
        formHourSelect.innerHTML = hours
            .map(item => `<option value="${item}">${item}:00</option>`)
            .join(``);
    }
    
    const fillDataForm = () => {
        fillDataRoomsSelect();
    
        const formSelectedRoom = formRoomSelect.value;
        fillFormDaysByRoom(formSelectedRoom);
        fillFormHoursByRoom(formSelectedRoom);
    }
    
    fillDataForm();

    formRoom.addEventListener(`submit`, e =>{
        e.preventDefault();

        let meeting = {
            title: formMeetTitle.value,
            room: formRoomSelect.value,
            day: formDaySelect.value,
            hour: formHourSelect.value
        }

        let storageMeetings = localStorage.getItem(`meetings`); // null || [...]
        storageMeetings = storageMeetings ? JSON.parse(storageMeetings) : [];

        if(storageMeetings.length){
            let meetingExist = storageMeetings.find(item => 
                item.room === meeting.room 
                && item.day === meeting.day 
                & item.hour === meeting.hour
            );

            if(meetingExist){
                console.log(MEETING_REPORTS.error(meeting));
                return;
            }
        }

        storageMeetings.push(meeting);
        localStorage.setItem(`meetings`, JSON.stringify(storageMeetings));

        console.log(MEETING_REPORTS.successful(meeting));

        renderMeeting(meeting);
    })
}
// form

// meeting
const renderMeeting = (item) => {
    const meet = document.createElement(`div`);
    meet.className = `meeting__block`;

    const meetTitle = document.createElement(`h3`);
    meetTitle.innerHTML = item.title;

    const meetBtnDelete = document.createElement(`button`);
    meetBtnDelete.innerHTML = `Delete`;
    meetBtnDelete.addEventListener(`click`, () => {
        meet.remove();

        let storageMeetings = JSON.parse(localStorage.getItem(`meetings`));
        let storageMeetingIndex = storageMeetings.findIndex(meet => meet.room === item.room && meet.day===item.day && meet.hour===item.hour);
        storageMeetings.splice(storageMeetingIndex,1);

        localStorage.setItem(`meetings`, JSON.stringify(storageMeetings));
    })

    meet.append(meetTitle, meetBtnDelete);

    const tableCell = document.querySelector(`table[data-name="${item.room}"] td[data-day="${item.day}"][data-hour="${item.hour}"]`);
    tableCell && tableCell.append(meet);
}
// meeting

// tables
const containerRooms = document.querySelector(`#containerRooms`);

const createTableCaption = (item) => {
    const caption = document.createElement(`caption`);
    caption.innerHTML = `Calendar for ${item.title} room`;
    return caption;
}

const createTableThead = (item) => {
    const thead = document.createElement(`thead`);
    thead.innerHTML = `<tr>
        <th></th>
        ${item.days.map(item => `<th>${item}</th>`).join(``)}
    </tr>`;
    return thead;
}

const createTableTbody = (item) => {
    const tbody = document.createElement(`tbody`);

    const hours = getRoomHours(item.hours);

    hours.forEach(hour => {
        const tr = document.createElement(`tr`);

        const tdHour = document.createElement(`td`);
        tdHour.innerHTML = `${hour}:00`;
        tr.append(tdHour);

        item.days.forEach(day => {
            const td = document.createElement(`td`);
            td.dataset.hour = hour;
            td.dataset.day = day;
            tr.append(td);
        })

        tbody.append(tr);
    })

    return tbody;
}

const createRoomTable = (item) => {
    const table = document.createElement(`table`);
    table.dataset.name = item.title;

    const caption = createTableCaption(item);
    const thead = createTableThead(item);
    const tbody = createTableTbody(item);

    table.append(caption, thead, tbody);

    return table;
}

ROOMS
    .map(item => createRoomTable(item))
    .forEach(item => containerRooms.append(item));
// tables

// localStorage
let storageMeetings = localStorage.getItem(`meetings`);
if(storageMeetings){
    storageMeetings = JSON.parse(storageMeetings);
    storageMeetings.forEach(meet => renderMeeting(meet));
}
// localStorage