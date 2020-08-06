export default function convertTimeToMinutes(time: String) {
    const [hours, minutes] = time.split(":").map(Number);
    return (hours * 60) + minutes;
}