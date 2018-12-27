A basic second person adventure. All information is stored in a JSON file, and stored
temporarily in the browser. User login features are available to allow users to
save progress in the story, by setting the state of the application to be the
nodeid of the story.

JSON data structure brainstorming

  -Store data in nested JSON
  -Each entry coded with buttons that have id's associated with them, so when
  the button is pressed, the component state is updated to render new JSON content
  without saving anything in browser or database
  -ID will be a seven digit numeral, in the following format

    (Previous ID)(Most previous Choice Number)(0's up to seven digits)

    The first ID will be: 1000000
    The second can be one of three: 1100000, 1200000, 1300000
    The third can be one of nine: 1110000, 1120000, 1130000, 1210000, 1220000, 1230000, 1310000, 1320000, 1330000
    The fourth can be one of twenty seven: 1111000, 1112000, 1113000, 1121000, 1122000, 1123000, 1131000, 1132000, 1133000, 1211000, 1212000, 1213000, 1221000, 1222000, 1223000, 1231000, 1232000, 1233000, 1311000, 1312000, 1313000, 1321000, 1322000, 1323000, 1331000, 1332000, 1333000
    etc.

  
