# AI-generated reference implementation prepared by Codex.
# This file does not claim independently authored student work.

hour = int(input("Starting time (hours): "))
mins = int(input("Starting time (minutes): "))
dura = int(input("Event duration (minutes): "))

# Work in minutes first, then convert the ending time back to a 24-hour clock.
total_minutes = hour * 60 + mins + dura
end_hour = (total_minutes // 60) % 24
end_minute = total_minutes % 60

print(end_hour, end_minute, sep=":")
