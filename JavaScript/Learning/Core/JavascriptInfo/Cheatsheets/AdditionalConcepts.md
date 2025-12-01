# Javascript | JSInfo

## Part C: Additional Concepts


### Frames and windows


### Binary data, files


### Network requests


### Storing data in the browser

> Cookies, document.cookie
> LocalStorage, sessionStorage
> IndexedDB

### Animation


### Web components


### Regular expressions

> Patterns and Flags

1. Reg / RegExp syntax:
   - Using RegExp constructor (dynamic string)
     - regexp = new RegExp("pattern", "flags");
   - Using literal syntax (static string)
     - regexp = /pattern/; // no flags
     - regexp = /pattern/gmi; // with flags g,m and i

2. Flags:
   - empty = exact phrase match
   - i = case insensitive
   - g = all match search (else first match, if no "g" mentioned)
   - m = multiline mode
   - s = dotall mode
   - u = unicode support
   - y = sticky mode

3. Search and Replace strings:
   - Searching with string object API str.match(...)
   - Replacing with string object API str.replace(...)
     - Replacing string symbols:
       - $... = insert a character, eg. $$
       - $<name> = ...
       - $n = ...
       - $' = insert substring after match
       - $` = insert substring before match
       - $& = insert whole match

4. Testing strings:
   - RegExp object API = regexp.test(str)
