/**
 * Sorting by Month
Already provided for you is a list of MONTHS. These months are sorted from the beginning of the year (JAN) to the end of the year (DEC). 

What we need to do is sort an array of events by the month they are occurring in. Let's say we have the following events:

[{ event: 'dance', month: 'MAR' },
 { event: 'farmers market', month: 'JUN' },
 { event: 'parade', month: 'JAN' }]
The parade is the first event in the year, starting in January. Following that is the dance in March and the farmers market in June.

We need the order of these events to become:

[{ event: 'parade', month: 'JAN' },
{ event: 'dance', month: 'MAR' },
{ event: 'farmers market', month: 'JUN' }]
 Now everything is in the proper order!

 Your Goal: Sort the Events
Given the array of events, sort them by the month that they occur in and return the sorted array.

Each object in the events array will have properties event and month just like in the example shown above.

 To find which events comes first, you'll need to see where it belongs in the MONTHS array. You can use the array indexOf method to find where it belongs.
 */

const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const events = [
  { event: "haunted hayride", month: "OCT" },
  { event: "holiday party", month: "DEC" },
  { event: "picnic", month: "SEP" },
  { event: "dance", month: "MAR" },
  { event: "snowball fight", month: "FEB" },
  { event: "farmers market", month: "JUN" },
  { event: "parade", month: "JAN" },
];
function sortByMonth(events) {
  return events.sort((a, b) => {
    if (MONTHS.indexOf(a.month) < MONTHS.indexOf(b.month)) {
      return -1;
    } else return 1;
  });
}
console.log(sortByMonth(events));
