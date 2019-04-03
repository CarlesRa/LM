## URL format
```
http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}
```
Parameters:

## Parameters:
```
op - Weather map layer. Full list of available weather map layers here.

z - Number of zoom level

x - Number of x tile coordinate

y - Number of y tile coordinate
```
```
date - Date and time of (Unix time, UTC), e.g. date=1527811200. 
If you do not specify any date and time, you will get Current weather map.
More information about how to get Current, Forecast and Historical maps you can find here.
```
## Optional parameters:
```
opacity - Degree of layer opacity. Available value from 0 to 1 (default - 0.8)

palette - Color palette. You can use custom palettes for each layer. 
You can also create a palette for yourself and pass it to the URL as follows {value}:{HEX color};..;{value}:{HEX color}.
More information about it here.

fill_bound - 'true' or 'false'. If 'true', then all weather values outside the specified set of values will be filled by 
color corresponding to the nearest specified value (default value - 'false': all weather values outside the specified set 
of values are not filled).

arrow_step - Step of values for drawing wind arrows, specify in pixels (default - 32). Parameter only for wind layers (WS10, WND).

use_norm - 'true' or 'false'. If 'true', then the length of the arrows is normalizing 
(default - 'false': the length of the arrows is proportional to the speed wind value). Parameter only for wind layers (WS10, WND).
```
