var Module;if(!Module)Module=(typeof Module!=="undefined"?Module:null)||{};
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports === 'object' &&
               typeof exports.nodeName !== 'string') {
        factory(exports);
    } else {
        factory(root.libsodium = {});
    }
})(this, (function (exports) {
    var Module = exports;
var Module;if(!Module)Module=(typeof Module!=="undefined"?Module:null)||{};var moduleOverrides={};for(var key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var ENVIRONMENT_IS_WEB=false;var ENVIRONMENT_IS_WORKER=false;var ENVIRONMENT_IS_NODE=false;var ENVIRONMENT_IS_SHELL=false;if(Module["ENVIRONMENT"]){if(Module["ENVIRONMENT"]==="WEB"){ENVIRONMENT_IS_WEB=true}else if(Module["ENVIRONMENT"]==="WORKER"){ENVIRONMENT_IS_WORKER=true}else if(Module["ENVIRONMENT"]==="NODE"){ENVIRONMENT_IS_NODE=true}else if(Module["ENVIRONMENT"]==="SHELL"){ENVIRONMENT_IS_SHELL=true}else{throw new Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.")}}else{ENVIRONMENT_IS_WEB=typeof window==="object";ENVIRONMENT_IS_WORKER=typeof importScripts==="function";ENVIRONMENT_IS_NODE=typeof process==="object"&&typeof require==="function"&&!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_WORKER;ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER}if(ENVIRONMENT_IS_NODE){if(!Module["print"])Module["print"]=console.log;if(!Module["printErr"])Module["printErr"]=console.warn;var nodeFS;var nodePath;Module["read"]=function read(filename,binary){if(!nodeFS)nodeFS=require("fs");if(!nodePath)nodePath=require("path");filename=nodePath["normalize"](filename);var ret=nodeFS["readFileSync"](filename);return binary?ret:ret.toString()};Module["readBinary"]=function readBinary(filename){var ret=Module["read"](filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret};Module["load"]=function load(f){globalEval(read(f))};if(!Module["thisProgram"]){if(process["argv"].length>1){Module["thisProgram"]=process["argv"][1].replace(/\\/g,"/")}else{Module["thisProgram"]="unknown-program"}}Module["arguments"]=process["argv"].slice(2);if(typeof module!=="undefined"){module["exports"]=Module}process["on"]("uncaughtException",(function(ex){if(!(ex instanceof ExitStatus)){throw ex}}));Module["inspect"]=(function(){return"[Emscripten Module object]"})}else if(ENVIRONMENT_IS_SHELL){if(!Module["print"])Module["print"]=print;if(typeof printErr!="undefined")Module["printErr"]=printErr;if(typeof read!="undefined"){Module["read"]=read}else{Module["read"]=function read(){throw"no read() available"}}Module["readBinary"]=function readBinary(f){if(typeof readbuffer==="function"){return new Uint8Array(readbuffer(f))}var data=read(f,"binary");assert(typeof data==="object");return data};if(typeof scriptArgs!="undefined"){Module["arguments"]=scriptArgs}else if(typeof arguments!="undefined"){Module["arguments"]=arguments}if(typeof quit==="function"){Module["quit"]=(function(status,toThrow){quit(status)})}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){Module["read"]=function read(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){Module["readBinary"]=function read(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return xhr.response}}Module["readAsync"]=function readAsync(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=function xhr_onload(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response)}else{onerror()}};xhr.onerror=onerror;xhr.send(null)};if(typeof arguments!="undefined"){Module["arguments"]=arguments}if(typeof console!=="undefined"){if(!Module["print"])Module["print"]=function print(x){console.log(x)};if(!Module["printErr"])Module["printErr"]=function printErr(x){console.warn(x)}}else{var TRY_USE_DUMP=false;if(!Module["print"])Module["print"]=TRY_USE_DUMP&&typeof dump!=="undefined"?(function(x){dump(x)}):(function(x){})}if(ENVIRONMENT_IS_WORKER){Module["load"]=importScripts}if(typeof Module["setWindowTitle"]==="undefined"){Module["setWindowTitle"]=(function(title){document.title=title})}}else{throw"Unknown runtime environment. Where are we?"}function globalEval(x){abort("NO_DYNAMIC_EXECUTION=1 was set, cannot eval")}if(!Module["load"]&&Module["read"]){Module["load"]=function load(f){globalEval(Module["read"](f))}}if(!Module["print"]){Module["print"]=(function(){})}if(!Module["printErr"]){Module["printErr"]=Module["print"]}if(!Module["arguments"]){Module["arguments"]=[]}if(!Module["thisProgram"]){Module["thisProgram"]="./this.program"}if(!Module["quit"]){Module["quit"]=(function(status,toThrow){throw toThrow})}Module.print=Module["print"];Module.printErr=Module["printErr"];Module["preRun"]=[];Module["postRun"]=[];for(var key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=undefined;var Runtime={setTempRet0:(function(value){tempRet0=value;return value}),getTempRet0:(function(){return tempRet0}),stackSave:(function(){return STACKTOP}),stackRestore:(function(stackTop){STACKTOP=stackTop}),getNativeTypeSize:(function(type){switch(type){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:{if(type[type.length-1]==="*"){return Runtime.QUANTUM_SIZE}else if(type[0]==="i"){var bits=parseInt(type.substr(1));assert(bits%8===0);return bits/8}else{return 0}}}}),getNativeFieldSize:(function(type){return Math.max(Runtime.getNativeTypeSize(type),Runtime.QUANTUM_SIZE)}),STACK_ALIGN:16,prepVararg:(function(ptr,type){if(type==="double"||type==="i64"){if(ptr&7){assert((ptr&7)===4);ptr+=4}}else{assert((ptr&3)===0)}return ptr}),getAlignSize:(function(type,size,vararg){if(!vararg&&(type=="i64"||type=="double"))return 8;if(!type)return Math.min(size,8);return Math.min(size||(type?Runtime.getNativeFieldSize(type):0),Runtime.QUANTUM_SIZE)}),dynCall:(function(sig,ptr,args){if(args&&args.length){return Module["dynCall_"+sig].apply(null,[ptr].concat(args))}else{return Module["dynCall_"+sig].call(null,ptr)}}),functionPointers:[null,null,null,null,null,null,null,null],addFunction:(function(func){for(var i=0;i<Runtime.functionPointers.length;i++){if(!Runtime.functionPointers[i]){Runtime.functionPointers[i]=func;return 1*(1+i)}}throw"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS."}),removeFunction:(function(index){Runtime.functionPointers[(index-1)/1]=null}),warnOnce:(function(text){if(!Runtime.warnOnce.shown)Runtime.warnOnce.shown={};if(!Runtime.warnOnce.shown[text]){Runtime.warnOnce.shown[text]=1;Module.printErr(text)}}),funcWrappers:{},getFuncWrapper:(function(func,sig){assert(sig);if(!Runtime.funcWrappers[sig]){Runtime.funcWrappers[sig]={}}var sigCache=Runtime.funcWrappers[sig];if(!sigCache[func]){if(sig.length===1){sigCache[func]=function dynCall_wrapper(){return Runtime.dynCall(sig,func)}}else if(sig.length===2){sigCache[func]=function dynCall_wrapper(arg){return Runtime.dynCall(sig,func,[arg])}}else{sigCache[func]=function dynCall_wrapper(){return Runtime.dynCall(sig,func,Array.prototype.slice.call(arguments))}}}return sigCache[func]}),getCompilerSetting:(function(name){throw"You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work"}),stackAlloc:(function(size){var ret=STACKTOP;STACKTOP=STACKTOP+size|0;STACKTOP=STACKTOP+15&-16;return ret}),staticAlloc:(function(size){var ret=STATICTOP;STATICTOP=STATICTOP+size|0;STATICTOP=STATICTOP+15&-16;return ret}),dynamicAlloc:(function(size){var ret=HEAP32[DYNAMICTOP_PTR>>2];var end=(ret+size+15|0)&-16;HEAP32[DYNAMICTOP_PTR>>2]=end;if(end>=TOTAL_MEMORY){var success=enlargeMemory();if(!success){HEAP32[DYNAMICTOP_PTR>>2]=ret;return 0}}return ret}),alignMemory:(function(size,quantum){var ret=size=Math.ceil(size/(quantum?quantum:16))*(quantum?quantum:16);return ret}),makeBigInt:(function(low,high,unsigned){var ret=unsigned?+(low>>>0)+ +(high>>>0)*+4294967296:+(low>>>0)+ +(high|0)*+4294967296;return ret}),GLOBAL_BASE:8,QUANTUM_SIZE:4,__dummy__:0};Module["Runtime"]=Runtime;var ABORT=0;var EXITSTATUS=0;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}function getCFunc(ident){var func=Module["_"+ident];if(!func){abort("NO_DYNAMIC_EXECUTION=1 was set, cannot eval")}assert(func,"Cannot call unknown function "+ident+" (perhaps LLVM optimizations or closure removed it?)");return func}var cwrap,ccall;((function(){var JSfuncs={"stackSave":(function(){Runtime.stackSave()}),"stackRestore":(function(){Runtime.stackRestore()}),"arrayToC":(function(arr){var ret=Runtime.stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}),"stringToC":(function(str){var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=Runtime.stackAlloc(len);stringToUTF8(str,ret,len)}return ret})};var toC={"string":JSfuncs["stringToC"],"array":JSfuncs["arrayToC"]};ccall=function ccallFunc(ident,returnType,argTypes,args,opts){var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=Runtime.stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);if(returnType==="string")ret=Pointer_stringify(ret);if(stack!==0){if(opts&&opts.async){EmterpreterAsync.asyncFinalizers.push((function(){Runtime.stackRestore(stack)}));return}Runtime.stackRestore(stack)}return ret};cwrap=function cwrap(ident,returnType,argTypes){return(function(){return ccall(ident,returnType,argTypes,arguments)})}}))();Module["ccall"]=ccall;Module["cwrap"]=cwrap;function setValue(ptr,value,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":HEAP8[ptr>>0]=value;break;case"i8":HEAP8[ptr>>0]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":tempI64=[value>>>0,(tempDouble=value,+Math_abs(tempDouble)>=+1?tempDouble>+0?(Math_min(+Math_floor(tempDouble/+4294967296),+4294967295)|0)>>>0:~~+Math_ceil((tempDouble- +(~~tempDouble>>>0))/+4294967296)>>>0:0)],HEAP32[ptr>>2]=tempI64[0],HEAP32[ptr+4>>2]=tempI64[1];break;case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;default:abort("invalid type for setValue: "+type)}}Module["setValue"]=setValue;function getValue(ptr,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":return HEAP8[ptr>>0];case"i8":return HEAP8[ptr>>0];case"i16":return HEAP16[ptr>>1];case"i32":return HEAP32[ptr>>2];case"i64":return HEAP32[ptr>>2];case"float":return HEAPF32[ptr>>2];case"double":return HEAPF64[ptr>>3];default:abort("invalid type for setValue: "+type)}return null}Module["getValue"]=getValue;var ALLOC_NORMAL=0;var ALLOC_STACK=1;var ALLOC_STATIC=2;var ALLOC_DYNAMIC=3;var ALLOC_NONE=4;Module["ALLOC_NORMAL"]=ALLOC_NORMAL;Module["ALLOC_STACK"]=ALLOC_STACK;Module["ALLOC_STATIC"]=ALLOC_STATIC;Module["ALLOC_DYNAMIC"]=ALLOC_DYNAMIC;Module["ALLOC_NONE"]=ALLOC_NONE;function allocate(slab,types,allocator,ptr){var zeroinit,size;if(typeof slab==="number"){zeroinit=true;size=slab}else{zeroinit=false;size=slab.length}var singleType=typeof types==="string"?types:null;var ret;if(allocator==ALLOC_NONE){ret=ptr}else{ret=[typeof _malloc==="function"?_malloc:Runtime.staticAlloc,Runtime.stackAlloc,Runtime.staticAlloc,Runtime.dynamicAlloc][allocator===undefined?ALLOC_STATIC:allocator](Math.max(size,singleType?1:types.length))}if(zeroinit){var ptr=ret,stop;assert((ret&3)==0);stop=ret+(size&~3);for(;ptr<stop;ptr+=4){HEAP32[ptr>>2]=0}stop=ret+size;while(ptr<stop){HEAP8[ptr++>>0]=0}return ret}if(singleType==="i8"){if(slab.subarray||slab.slice){HEAPU8.set(slab,ret)}else{HEAPU8.set(new Uint8Array(slab),ret)}return ret}var i=0,type,typeSize,previousType;while(i<size){var curr=slab[i];if(typeof curr==="function"){curr=Runtime.getFunctionIndex(curr)}type=singleType||types[i];if(type===0){i++;continue}if(type=="i64")type="i32";setValue(ret+i,curr,type);if(previousType!==type){typeSize=Runtime.getNativeTypeSize(type);previousType=type}i+=typeSize}return ret}Module["allocate"]=allocate;function getMemory(size){if(!staticSealed)return Runtime.staticAlloc(size);if(!runtimeInitialized)return Runtime.dynamicAlloc(size);return _malloc(size)}Module["getMemory"]=getMemory;function Pointer_stringify(ptr,length){if(length===0||!ptr)return"";var hasUtf=0;var t;var i=0;while(1){t=HEAPU8[ptr+i>>0];hasUtf|=t;if(t==0&&!length)break;i++;if(length&&i==length)break}if(!length)length=i;var ret="";if(hasUtf<128){var MAX_CHUNK=1024;var curr;while(length>0){curr=String.fromCharCode.apply(String,HEAPU8.subarray(ptr,ptr+Math.min(length,MAX_CHUNK)));ret=ret?ret+curr:curr;ptr+=MAX_CHUNK;length-=MAX_CHUNK}return ret}return Module["UTF8ToString"](ptr)}Module["Pointer_stringify"]=Pointer_stringify;function AsciiToString(ptr){var str="";while(1){var ch=HEAP8[ptr++>>0];if(!ch)return str;str+=String.fromCharCode(ch)}}Module["AsciiToString"]=AsciiToString;function stringToAscii(str,outPtr){return writeAsciiToMemory(str,outPtr,false)}Module["stringToAscii"]=stringToAscii;var UTF8Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(u8Array,idx){var endPtr=idx;while(u8Array[endPtr])++endPtr;if(endPtr-idx>16&&u8Array.subarray&&UTF8Decoder){return UTF8Decoder.decode(u8Array.subarray(idx,endPtr))}else{var u0,u1,u2,u3,u4,u5;var str="";while(1){u0=u8Array[idx++];if(!u0)return str;if(!(u0&128)){str+=String.fromCharCode(u0);continue}u1=u8Array[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}u2=u8Array[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u3=u8Array[idx++]&63;if((u0&248)==240){u0=(u0&7)<<18|u1<<12|u2<<6|u3}else{u4=u8Array[idx++]&63;if((u0&252)==248){u0=(u0&3)<<24|u1<<18|u2<<12|u3<<6|u4}else{u5=u8Array[idx++]&63;u0=(u0&1)<<30|u1<<24|u2<<18|u3<<12|u4<<6|u5}}}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}}Module["UTF8ArrayToString"]=UTF8ArrayToString;function UTF8ToString(ptr){return UTF8ArrayToString(HEAPU8,ptr)}Module["UTF8ToString"]=UTF8ToString;function stringToUTF8Array(str,outU8Array,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){if(outIdx>=endIdx)break;outU8Array[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;outU8Array[outIdx++]=192|u>>6;outU8Array[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;outU8Array[outIdx++]=224|u>>12;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=2097151){if(outIdx+3>=endIdx)break;outU8Array[outIdx++]=240|u>>18;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=67108863){if(outIdx+4>=endIdx)break;outU8Array[outIdx++]=248|u>>24;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else{if(outIdx+5>=endIdx)break;outU8Array[outIdx++]=252|u>>30;outU8Array[outIdx++]=128|u>>24&63;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}}outU8Array[outIdx]=0;return outIdx-startIdx}Module["stringToUTF8Array"]=stringToUTF8Array;function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}Module["stringToUTF8"]=stringToUTF8;function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){++len}else if(u<=2047){len+=2}else if(u<=65535){len+=3}else if(u<=2097151){len+=4}else if(u<=67108863){len+=5}else{len+=6}}return len}Module["lengthBytesUTF8"]=lengthBytesUTF8;var UTF16Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf-16le"):undefined;function demangle(func){var __cxa_demangle_func=Module["___cxa_demangle"]||Module["__cxa_demangle"];if(__cxa_demangle_func){try{var s=func.substr(1);var len=lengthBytesUTF8(s)+1;var buf=_malloc(len);stringToUTF8(s,buf,len);var status=_malloc(4);var ret=__cxa_demangle_func(buf,0,0,status);if(getValue(status,"i32")===0&&ret){return Pointer_stringify(ret)}}catch(e){}finally{if(buf)_free(buf);if(status)_free(status);if(ret)_free(ret)}return func}Runtime.warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");return func}function demangleAll(text){var regex=/__Z[\w\d_]+/g;return text.replace(regex,(function(x){var y=demangle(x);return x===y?x:x+" ["+y+"]"}))}function jsStackTrace(){var err=new Error;if(!err.stack){try{throw new Error(0)}catch(e){err=e}if(!err.stack){return"(no stack trace available)"}}return err.stack.toString()}function stackTrace(){var js=jsStackTrace();if(Module["extraStackTrace"])js+="\n"+Module["extraStackTrace"]();return demangleAll(js)}Module["stackTrace"]=stackTrace;var PAGE_SIZE=16384;var HEAP;var buffer;var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferViews(){Module["HEAP8"]=HEAP8=new Int8Array(buffer);Module["HEAP16"]=HEAP16=new Int16Array(buffer);Module["HEAP32"]=HEAP32=new Int32Array(buffer);Module["HEAPU8"]=HEAPU8=new Uint8Array(buffer);Module["HEAPU16"]=HEAPU16=new Uint16Array(buffer);Module["HEAPU32"]=HEAPU32=new Uint32Array(buffer);Module["HEAPF32"]=HEAPF32=new Float32Array(buffer);Module["HEAPF64"]=HEAPF64=new Float64Array(buffer)}var STATIC_BASE,STATICTOP,staticSealed;var STACK_BASE,STACKTOP,STACK_MAX;var DYNAMIC_BASE,DYNAMICTOP_PTR;STATIC_BASE=STATICTOP=STACK_BASE=STACKTOP=STACK_MAX=DYNAMIC_BASE=DYNAMICTOP_PTR=0;staticSealed=false;function abortOnCannotGrowMemory(){abort("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+TOTAL_MEMORY+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or (4) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}function enlargeMemory(){abortOnCannotGrowMemory()}var TOTAL_STACK=Module["TOTAL_STACK"]||5242880;var TOTAL_MEMORY=Module["TOTAL_MEMORY"]||67108864;if(TOTAL_MEMORY<TOTAL_STACK)Module.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+TOTAL_MEMORY+"! (TOTAL_STACK="+TOTAL_STACK+")");if(Module["buffer"]){buffer=Module["buffer"]}else{{buffer=new ArrayBuffer(TOTAL_MEMORY)}}updateGlobalBufferViews();function getTotalMemory(){return TOTAL_MEMORY}HEAP32[0]=1668509029;HEAP16[1]=25459;if(HEAPU8[2]!==115||HEAPU8[3]!==99)throw"Runtime error: expected the system to be little-endian!";Module["HEAP"]=HEAP;Module["buffer"]=buffer;Module["HEAP8"]=HEAP8;Module["HEAP16"]=HEAP16;Module["HEAP32"]=HEAP32;Module["HEAPU8"]=HEAPU8;Module["HEAPU16"]=HEAPU16;Module["HEAPU32"]=HEAPU32;Module["HEAPF32"]=HEAPF32;Module["HEAPF64"]=HEAPF64;function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback();continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){Module["dynCall_v"](func)}else{Module["dynCall_vi"](func,callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATEXIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeExited=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function ensureInitRuntime(){if(runtimeInitialized)return;runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function exitRuntime(){callRuntimeCallbacks(__ATEXIT__);runtimeExited=true}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}Module["addOnPreRun"]=addOnPreRun;function addOnInit(cb){__ATINIT__.unshift(cb)}Module["addOnInit"]=addOnInit;function addOnPreMain(cb){__ATMAIN__.unshift(cb)}Module["addOnPreMain"]=addOnPreMain;function addOnExit(cb){__ATEXIT__.unshift(cb)}Module["addOnExit"]=addOnExit;function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}Module["addOnPostRun"]=addOnPostRun;function intArrayFromString(stringy,dontAddNull,length){var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array}Module["intArrayFromString"]=intArrayFromString;function intArrayToString(array){var ret=[];for(var i=0;i<array.length;i++){var chr=array[i];if(chr>255){chr&=255}ret.push(String.fromCharCode(chr))}return ret.join("")}Module["intArrayToString"]=intArrayToString;function writeStringToMemory(string,buffer,dontAddNull){Runtime.warnOnce("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");var lastChar,end;if(dontAddNull){end=buffer+lengthBytesUTF8(string);lastChar=HEAP8[end]}stringToUTF8(string,buffer,Infinity);if(dontAddNull)HEAP8[end]=lastChar}Module["writeStringToMemory"]=writeStringToMemory;function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}Module["writeArrayToMemory"]=writeArrayToMemory;function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i)}if(!dontAddNull)HEAP8[buffer>>0]=0}Module["writeAsciiToMemory"]=writeAsciiToMemory;if(!Math["imul"]||Math["imul"](4294967295,5)!==-5)Math["imul"]=function imul(a,b){var ah=a>>>16;var al=a&65535;var bh=b>>>16;var bl=b&65535;return al*bl+(ah*bl+al*bh<<16)|0};Math.imul=Math["imul"];if(!Math["clz32"])Math["clz32"]=(function(x){x=x>>>0;for(var i=0;i<32;i++){if(x&1<<31-i)return i}return 32});Math.clz32=Math["clz32"];if(!Math["trunc"])Math["trunc"]=(function(x){return x<0?Math.ceil(x):Math.floor(x)});Math.trunc=Math["trunc"];var Math_abs=Math.abs;var Math_cos=Math.cos;var Math_sin=Math.sin;var Math_tan=Math.tan;var Math_acos=Math.acos;var Math_asin=Math.asin;var Math_atan=Math.atan;var Math_atan2=Math.atan2;var Math_exp=Math.exp;var Math_log=Math.log;var Math_sqrt=Math.sqrt;var Math_ceil=Math.ceil;var Math_floor=Math.floor;var Math_pow=Math.pow;var Math_imul=Math.imul;var Math_fround=Math.fround;var Math_round=Math.round;var Math_min=Math.min;var Math_clz32=Math.clz32;var Math_trunc=Math.trunc;var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}Module["addRunDependency"]=addRunDependency;function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["removeRunDependency"]=removeRunDependency;Module["preloadedImages"]={};Module["preloadedAudios"]={};var ASM_CONSTS=[(function(){{return Module.getRandomValue()}}),(function(){{if(Module.getRandomValue===undefined){try{var window_="object"===typeof window?window:self,crypto_=typeof window_.crypto!=="undefined"?window_.crypto:window_.msCrypto,randomValuesStandard=(function(){var buf=new Uint32Array(1);crypto_.getRandomValues(buf);return buf[0]>>>0});randomValuesStandard();Module.getRandomValue=randomValuesStandard}catch(e){try{var crypto=require("crypto"),randomValueNodeJS=(function(){var buf=crypto.randomBytes(4);return(buf[0]<<24|buf[1]<<16|buf[2]<<8|buf[3])>>>0});randomValueNodeJS();Module.getRandomValue=randomValueNodeJS}catch(e){throw"No secure random number generator found"}}}}})];function _emscripten_asm_const_i(code){return ASM_CONSTS[code]()}function _emscripten_asm_const_v(code){return ASM_CONSTS[code]()}STATIC_BASE=Runtime.GLOBAL_BASE;STATICTOP=STATIC_BASE+36e3;__ATINIT__.push();allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,232,149,143,194,178,39,176,69,195,244,137,242,239,152,240,213,223,172,5,211,198,51,57,177,56,2,136,109,83,252,5,199,23,106,112,61,77,216,79,186,60,11,118,13,16,103,15,42,32,83,250,44,57,204,198,78,199,253,119,146,172,3,122,19,232,149,143,194,178,39,176,69,195,244,137,242,239,152,240,213,223,172,5,211,198,51,57,177,56,2,136,109,83,252,133,180,23,106,112,61,77,216,79,186,60,11,118,13,16,103,15,42,32,83,250,44,57,204,198,78,199,253,119,146,172,3,250,236,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,127,237,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,127,238,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,127,217,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,218,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,219,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,8,201,188,243,103,230,9,106,59,167,202,132,133,174,103,187,43,248,148,254,114,243,110,60,241,54,29,95,58,245,79,165,209,130,230,173,127,82,14,81,31,108,62,43,140,104,5,155,107,189,65,251,171,217,131,31,121,33,126,19,25,205,224,91,34,174,40,215,152,47,138,66,205,101,239,35,145,68,55,113,47,59,77,236,207,251,192,181,188,219,137,129,165,219,181,233,56,181,72,243,91,194,86,57,25,208,5,182,241,17,241,89,155,79,25,175,164,130,63,146,24,129,109,218,213,94,28,171,66,2,3,163,152,170,7,216,190,111,112,69,1,91,131,18,140,178,228,78,190,133,49,36,226,180,255,213,195,125,12,85,111,137,123,242,116,93,190,114,177,150,22,59,254,177,222,128,53,18,199,37,167,6,220,155,148,38,105,207,116,241,155,193,210,74,241,158,193,105,155,228,227,37,79,56,134,71,190,239,181,213,140,139,198,157,193,15,101,156,172,119,204,161,12,36,117,2,43,89,111,44,233,45,131,228,166,110,170,132,116,74,212,251,65,189,220,169,176,92,181,83,17,131,218,136,249,118,171,223,102,238,82,81,62,152,16,50,180,45,109,198,49,168,63,33,251,152,200,39,3,176,228,14,239,190,199,127,89,191,194,143,168,61,243,11,224,198,37,167,10,147,71,145,167,213,111,130,3,224,81,99,202,6,112,110,14,10,103,41,41,20,252,47,210,70,133,10,183,39,38,201,38,92,56,33,27,46,237,42,196,90,252,109,44,77,223,179,149,157,19,13,56,83,222,99,175,139,84,115,10,101,168,178,119,60,187,10,106,118,230,174,237,71,46,201,194,129,59,53,130,20,133,44,114,146,100,3,241,76,161,232,191,162,1,48,66,188,75,102,26,168,145,151,248,208,112,139,75,194,48,190,84,6,163,81,108,199,24,82,239,214,25,232,146,209,16,169,101,85,36,6,153,214,42,32,113,87,133,53,14,244,184,209,187,50,112,160,106,16,200,208,210,184,22,193,164,25,83,171,65,81,8,108,55,30,153,235,142,223,76,119,72,39,168,72,155,225,181,188,176,52,99,90,201,197,179,12,28,57,203,138,65,227,74,170,216,78,115,227,99,119,79,202,156,91,163,184,178,214,243,111,46,104,252,178,239,93,238,130,143,116,96,47,23,67,111,99,165,120,114,171,240,161,20,120,200,132,236,57,100,26,8,2,199,140,40,30,99,35,250,255,190,144,233,189,130,222,235,108,80,164,21,121,198,178,247,163,249,190,43,83,114,227,242,120,113,198,156,97,38,234,206,62,39,202,7,194,192,33,199,184,134,209,30,235,224,205,214,125,218,234,120,209,110,238,127,79,125,245,186,111,23,114,170,103,240,6,166,152,200,162,197,125,99,10,174,13,249,190,4,152,63,17,27,71,28,19,53,11,113,27,132,125,4,35,245,119,219,40,147,36,199,64,123,171,202,50,188,190,201,21,10,190,158,60,76,13,16,156,196,103,29,67,182,66,62,203,190,212,197,76,42,126,101,252,156,41,127,89,236,250,214,58,171,111,203,95,23,88,71,74,140,25,68,108,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,182,120,89,255,133,114,211,0,189,110,21,255,15,10,106,0,41,192,1,0,152,232,121,255,188,60,160,255,153,113,206,255,0,183,226,254,180,13,72,255,176,160,14,254,211,201,134,255,158,24,143,0,127,105,53,0,96,12,189,0,167,215,251,255,159,76,128,254,106,101,225,255,30,252,4,0,146,12,174,0,89,241,178,254,10,229,166,255,123,221,42,254,30,20,212,0,82,128,3,0,48,209,243,0,119,121,64,255,50,227,156,255,0,110,197,1,103,27,144,0,133,59,140,1,189,241,36,255,248,37,195,1,96,220,55,0,183,76,62,255,195,66,61,0,50,76,164,1,225,164,76,255,76,61,163,255,117,62,31,0,81,145,64,255,118,65,14,0,162,115,214,255,6,138,46,0,124,230,244,255,10,138,143,0,52,26,194,0,184,244,76,0,129,143,41,1,190,244,19,255,123,170,122,255,98,129,68,0,121,213,147,0,86,101,30,255,161,103,155,0,140,89,67,255,239,229,190,1,67,11,181,0,198,240,137,254,238,69,188,255,67,151,238,0,19,42,108,255,229,85,113,1,50,68,135,255,17,106,9,0,50,103,1,255,80,1,168,1,35,152,30,255,16,168,185,1,56,89,232,255,101,210,252,0,41,250,71,0,204,170,79,255,14,46,239,255,80,77,239,0,189,214,75,255,17,141,249,0,38,80,76,255,190,85,117,0,86,228,170,0,156,216,208,1,195,207,164,255,150,66,76,255,175,225,16,255,141,80,98,1,76,219,242,0,198,162,114,0,46,218,152,0,155,43,241,254,155,160,104,255,51,187,165,0,2,17,175,0,66,84,160,1,247,58,30,0,35,65,53,254,69,236,191,0,45,134,245,1,163,123,221,0,32,110,20,255,52,23,165,0,186,214,71,0,233,176,96,0,242,239,54,1,57,89,138,0,83,0,84,255,136,160,100,0,92,142,120,254,104,124,190,0,181,177,62,255,250,41,85,0,152,130,42,1,96,252,246,0,151,151,63,254,239,133,62,0,32,56,156,0,45,167,189,255,142,133,179,1,131,86,211,0,187,179,150,254,250,170,14,255,210,163,78,0,37,52,151,0,99,77,26,0,238,156,213,255,213,192,209,1,73,46,84,0,20,65,41,1,54,206,79,0,201,131,146,254,170,111,24,255,177,33,50,254,171,38,203,255,78,247,116,0,209,221,153,0,133,128,178,1,58,44,25,0,201,39,59,1,189,19,252,0,49,229,210,1,117,187,117,0,181,179,184,1,0,114,219,0,48,94,147,0,245,41,56,0,125,13,204,254,244,173,119,0,44,221,32,254,84,234,20,0,249,160,198,1,236,126,234,255,47,99,168,254,170,226,153,255,102,179,216,0,226,141,122,255,122,66,153,254,182,245,134,0,227,228,25,1,214,57,235,255,216,173,56,255,181,231,210,0,119,128,157,255,129,95,136,255,110,126,51,0,2,169,183,255,7,130,98,254,69,176,94,255,116,4,227,1,217,242,145,255,202,173,31,1,105,1,39,255,46,175,69,0,228,47,58,255,215,224,69,254,207,56,69,255,16,254,139,255,23,207,212,255,202,20,126,255,95,213,96,255,9,176,33,0,200,5,207,255,241,42,128,254,35,33,192,255,248,229,196,1,129,17,120,0,251,103,151,255,7,52,112,255,140,56,66,255,40,226,245,255,217,70,37,254,172,214,9,255,72,67,134,1,146,192,214,255,44,38,112,0,68,184,75,255,206,90,251,0,149,235,141,0,181,170,58,0,116,244,239,0,92,157,2,0,102,173,98,0,233,137,96,1,127,49,203,0,5,155,148,0,23,148,9,255,211,122,12,0,34,134,26,255,219,204,136,0,134,8,41,255,224,83,43,254,85,25,247,0,109,127,0,254,169,136,48,0,238,119,219,255,231,173,213,0,206,18,254,254,8,186,7,255,126,9,7,1,111,42,72,0,111,52,236,254,96,63,141,0,147,191,127,254,205,78,192,255,14,106,237,1,187,219,76,0,175,243,187,254,105,89,173,0,85,25,89,1,162,243,148,0,2,118,209,254,33,158,9,0,139,163,46,255,93,70,40,0,108,42,142,254,111,252,142,255,155,223,144,0,51,229,167,255,73,252,155,255,94,116,12,255,152,160,218,255,156,238,37,255,179,234,207,255,197,0,179,255,154,164,141,0,225,196,104,0,10,35,25,254,209,212,242,255,97,253,222,254,184,101,229,0,222,18,127,1,164,136,135,255,30,207,140,254,146,97,243,0,129,192,26,254,201,84,33,255,111,10,78,255,147,81,178,255,4,4,24,0,161,238,215,255,6,141,33,0,53,215,14,255,41,181,208,255,231,139,157,0,179,203,221,255,255,185,113,0,189,226,172,255,113,66,214,255,202,62,45,255,102,64,8,255,78,174,16,254,133,117,68,255,133,59,140,1,189,241,36,255,248,37,195,1,96,220,55,0,183,76,62,255,195,66,61,0,50,76,164,1,225,164,76,255,76,61,163,255,117,62,31,0,81,145,64,255,118,65,14,0,162,115,214,255,6,138,46,0,124,230,244,255,10,138,143,0,52,26,194,0,184,244,76,0,129,143,41,1,190,244,19,255,123,170,122,255,98,129,68,0,121,213,147,0,86,101,30,255,161,103,155,0,140,89,67,255,239,229,190,1,67,11,181,0,198,240,137,254,238,69,188,255,234,113,60,255,37,255,57,255,69,178,182,254,128,208,179,0,118,26,125,254,3,7,214,255,241,50,77,255,85,203,197,255,211,135,250,255,25,48,100,255,187,213,180,254,17,88,105,0,83,209,158,1,5,115,98,0,4,174,60,254,171,55,110,255,217,181,17,255,20,188,170,0,146,156,102,254,87,214,174,255,114,122,155,1,233,44,170,0,127,8,239,1,214,236,234,0,175,5,219,0,49,106,61,255,6,66,208,255,2,106,110,255,81,234,19,255,215,107,192,255,67,151,238,0,19,42,108,255,229,85,113,1,50,68,135,255,17,106,9,0,50,103,1,255,80,1,168,1,35,152,30,255,16,168,185,1,56,89,232,255,101,210,252,0,41,250,71,0,204,170,79,255,14,46,239,255,80,77,239,0,189,214,75,255,17,141,249,0,38,80,76,255,190,85,117,0,86,228,170,0,156,216,208,1,195,207,164,255,150,66,76,255,175,225,16,255,141,80,98,1,76,219,242,0,198,162,114,0,46,218,152,0,155,43,241,254,155,160,104,255,178,9,252,254,100,110,212,0,14,5,167,0,233,239,163,255,28,151,157,1,101,146,10,255,254,158,70,254,71,249,228,0,88,30,50,0,68,58,160,255,191,24,104,1,129,66,129,255,192,50,85,255,8,179,138,255,38,250,201,0,115,80,160,0,131,230,113,0,125,88,147,0,90,68,199,0,253,76,158,0,28,255,118,0,113,250,254,0,66,75,46,0,230,218,43,0,229,120,186,1,148,68,43,0,136,124,238,1,187,107,197,255,84,53,246,255,51,116,254,255,51,187,165,0,2,17,175,0,66,84,160,1,247,58,30,0,35,65,53,254,69,236,191,0,45,134,245,1,163,123,221,0,32,110,20,255,52,23,165,0,186,214,71,0,233,176,96,0,242,239,54,1,57,89,138,0,83,0,84,255,136,160,100,0,92,142,120,254,104,124,190,0,181,177,62,255,250,41,85,0,152,130,42,1,96,252,246,0,151,151,63,254,239,133,62,0,32,56,156,0,45,167,189,255,142,133,179,1,131,86,211,0,187,179,150,254,250,170,14,255,68,113,21,255,222,186,59,255,66,7,241,1,69,6,72,0,86,156,108,254,55,167,89,0,109,52,219,254,13,176,23,255,196,44,106,255,239,149,71,255,164,140,125,255,159,173,1,0,51,41,231,0,145,62,33,0,138,111,93,1,185,83,69,0,144,115,46,0,97,151,16,255,24,228,26,0,49,217,226,0,113,75,234,254,193,153,12,255,182,48,96,255,14,13,26,0,128,195,249,254,69,193,59,0,132,37,81,254,125,106,60,0,214,240,169,1,164,227,66,0,210,163,78,0,37,52,151,0,99,77,26,0,238,156,213,255,213,192,209,1,73,46,84,0,20,65,41,1,54,206,79,0,201,131,146,254,170,111,24,255,177,33,50,254,171,38,203,255,78,247,116,0,209,221,153,0,133,128,178,1,58,44,25,0,201,39,59,1,189,19,252,0,49,229,210,1,117,187,117,0,181,179,184,1,0,114,219,0,48,94,147,0,245,41,56,0,125,13,204,254,244,173,119,0,44,221,32,254,84,234,20,0,249,160,198,1,236,126,234,255,143,62,221,0,129,89,214,255,55,139,5,254,68,20,191,255,14,204,178,1,35,195,217,0,47,51,206,1,38,246,165,0,206,27,6,254,158,87,36,0,217,52,146,255,125,123,215,255,85,60,31,255,171,13,7,0,218,245,88,254,252,35,60,0,55,214,160,255,133,101,56,0,224,32,19,254,147,64,234,0,26,145,162,1,114,118,125,0,248,252,250,0,101,94,196,255,198,141,226,254,51,42,182,0,135,12,9,254,109,172,210,255,197,236,194,1,241,65,154,0,48,156,47,255,153,67,55,255,218,165,34,254,74,180,179,0,218,66,71,1,88,122,99,0,212,181,219,255,92,42,231,255,239,0,154,0,245,77,183,255,94,81,170,1,18,213,216,0,171,93,71,0,52,94,248,0,18,151,161,254,197,209,66,255,174,244,15,254,162,48,183,0,49,61,240,254,182,93,195,0,199,228,6,1,200,5,17,255,137,45,237,255,108,148,4,0,90,79,237,255,39,63,77,255,53,82,207,1,142,22,118,255,101,232,18,1,92,26,67,0,5,200,88,255,33,168,138,255,149,225,72,0,2,209,27,255,44,245,168,1,220,237,17,255,30,211,105,254,141,238,221,0,128,80,245,254,111,254,14,0,222,95,190,1,223,9,241,0,146,76,212,255,108,205,104,255,63,117,153,0,144,69,48,0,35,228,111,0,192,33,193,255,112,214,190,254,115,152,151,0,23,102,88,0,51,74,248,0,226,199,143,254,204,162,101,255,208,97,189,1,245,104,18,0,230,246,30,255,23,148,69,0,110,88,52,254,226,181,89,255,208,47,90,254,114,161,80,255,33,116,248,0,179,152,87,255,69,144,177,1,88,238,26,255,58,32,113,1,1,77,69,0,59,121,52,255,152,238,83,0,52,8,193,0,231,39,233,255,199,34,138,0,222,68,173,0,91,57,242,254,220,210,127,255,192,7,246,254,151,35,187,0,195,236,165,0,111,93,206,0,212,247,133,1,154,133,209,255,155,231,10,0,64,78,38,0,122,249,100,1,30,19,97,255,62,91,249,1,248,133,77,0,197,63,168,254,116,10,82,0,184,236,113,254,212,203,194,255,61,100,252,254,36,5,202,255,119,91,153,255,129,79,29,0,103,103,171,254,237,215,111,255,216,53,69,0,239,240,23,0,194,149,221,255,38,225,222,0,232,255,180,254,118,82,133,255,57,209,177,1,139,232,133,0,158,176,46,254,194,115,46,0,88,247,229,1,28,103,191,0,221,222,175,254,149,235,44,0,151,228,25,254,218,105,103,0,142,85,210,0,149,129,190,255,213,65,94,254,117,134,224,255,82,198,117,0,157,221,220,0,163,101,36,0,197,114,37,0,104,172,166,254,11,182,0,0,81,72,188,255,97,188,16,255,69,6,10,0,199,147,145,255,8,9,115,1,65,214,175,255,217,173,209,0,80,127,166,0,247,229,4,254,167,183,124,255,90,28,204,254,175,59,240,255,11,41,248,1,108,40,51,255,144,177,195,254,150,250,126,0,138,91,65,1,120,60,222,255,245,193,239,0,29,214,189,255,128,2,25,0,80,154,162,0,77,220,107,1,234,205,74,255,54,166,103,255,116,72,9,0,228,94,47,255,30,200,25,255,35,214,89,255,61,176,140,255,83,226,163,255,75,130,172,0,128,38,17,0,95,137,152,255,215,124,159,1,79,93,0,0,148,82,157,254,195,130,251,255,40,202,76,255,251,126,224,0,157,99,62,254,207,7,225,255,96,68,195,0,140,186,157,255,131,19,231,255,42,128,254,0,52,219,61,254,102,203,72,0,141,7,11,255,186,164,213,0,31,122,119,0,133,242,145,0,208,252,232,255,91,213,182,255,143,4,250,254,249,215,74,0,165,30,111,1,171,9,223,0,229,123,34,1,92,130,26,255,77,155,45,1,195,139,28,255,59,224,78,0,136,17,247,0,108,121,32,0,79,250,189,255,96,227,252,254,38,241,62,0,62,174,125,255,155,111,93,255,10,230,206,1,97,197,40,255,0,49,57,254,65,250,13,0,18,251,150,255,220,109,210,255,5,174,166,254,44,129,189,0,235,35,147,255,37,247,141,255,72,141,4,255,103,107,255,0,247,90,4,0,53,44,42,0,2,30,240,0,4,59,63,0,88,78,36,0,113,167,180,0,190,71,193,255,199,158,164,255,58,8,172,0,77,33,12,0,65,63,3,0,153,77,33,255,172,254,102,1,228,221,4,255,87,30,254,1,146,41,86,255,138,204,239,254,108,141,17,255,187,242,135,0,210,208,127,0,68,45,14,254,73,96,62,0,81,60,24,255,170,6,36,255,3,249,26,0,35,213,109,0,22,129,54,255,21,35,225,255,234,61,56,255,58,217,6,0,143,124,88,0,236,126,66,0,209,38,183,255,34,238,6,255,174,145,102,0,95,22,211,0,196,15,153,254,46,84,232,255,117,34,146,1,231,250,74,255,27,134,100,1,92,187,195,255,170,198,112,0,120,28,42,0,209,70,67,0,29,81,31,0,29,168,100,1,169,173,160,0,107,35,117,0,62,96,59,255,81,12,69,1,135,239,190,255,220,252,18,0,163,220,58,255,137,137,188,255,83,102,109,0,96,6,76,0,234,222,210,255,185,174,205,1,60,158,213,255,13,241,214,0,172,129,140,0,93,104,242,0,192,156,251,0,43,117,30,0,225,81,158,0,127,232,218,0,226,28,203,0,233,27,151,255,117,43,5,255,242,14,47,255,33,20,6,0,137,251,44,254,27,31,245,255,183,214,125,254,40,121,149,0,186,158,213,255,89,8,227,0,69,88,0,254,203,135,225,0,201,174,203,0,147,71,184,0,18,121,41,254,94,5,78,0,224,214,240,254,36,5,180,0,251,135,231,1,163,138,212,0,210,249,116,254,88,129,187,0,19,8,49,254,62,14,144,255,159,76,211,0,214,51,82,0,109,117,228,254,103,223,203,255,75,252,15,1,154,71,220,255,23,13,91,1,141,168,96,255,181,182,133,0,250,51,55,0,234,234,212,254,175,63,158,0,39,240,52,1,158,189,36,255,213,40,85,1,32,180,247,255,19,102,26,1,84,24,97,255,69,21,222,0,148,139,122,255,220,213,235,1,232,203,255,0,121,57,147,0,227,7,154,0,53,22,147,1,72,1,225,0,82,134,48,254,83,60,157,255,145,72,169,0,34,103,239,0,198,233,47,0,116,19,4,255,184,106,9,255,183,129,83,0,36,176,230,1,34,103,72,0,219,162,134,0,245,42,158,0,32,149,96,254,165,44,144,0,202,239,72,254,215,150,5,0,42,66,36,1,132,215,175,0,86,174,86,255,26,197,156,255,49,232,135,254,103,182,82,0,253,128,176,1,153,178,122,0,245,250,10,0,236,24,178,0,137,106,132,0,40,29,41,0,50,30,152,255,124,105,38,0,230,191,75,0,143,43,170,0,44,131,20,255,44,13,23,255,237,255,155,1,159,109,100,255,112,181,24,255,104,220,108,0,55,211,131,0,99,12,213,255,152,151,145,255,238,5,159,0,97,155,8,0,33,108,81,0,1,3,103,0,62,109,34,255,250,155,180,0,32,71,195,255,38,70,145,1,159,95,245,0,69,229,101,1,136,28,240,0,79,224,25,0,78,110,121,255,248,168,124,0,187,128,247,0,2,147,235,254,79,11,132,0,70,58,12,1,181,8,163,255,79,137,133,255,37,170,11,255,141,243,85,255,176,231,215,255,204,150,164,255,239,215,39,255,46,87,156,254,8,163,88,255,172,34,232,0,66,44,102,255,27,54,41,254,236,99,87,255,41,123,169,1,52,114,43,0,117,134,40,0,155,134,26,0,231,207,91,254,35,132,38,255,19,102,125,254,36,227,133,255,118,3,113,255,29,13,124,0,152,96,74,1,88,146,206,255,167,191,220,254,162,18,88,255,182,100,23,0,31,117,52,0,81,46,106,1,12,2,7,0,69,80,201,1,209,246,172,0,12,48,141,1,224,211,88,0,116,226,159,0,122,98,130,0,65,236,234,1,225,226,9,255,207,226,123,1,89,214,59,0,112,135,88,1,90,244,203,255,49,11,38,1,129,108,186,0,89,112,15,1,101,46,204,255,127,204,45,254,79,255,221,255,51,73,18,255,127,42,101,255,241,21,202,0,160,227,7,0,105,50,236,0,79,52,197,255,104,202,208,1,180,15,16,0,101,197,78,255,98,77,203,0,41,185,241,1,35,193,124,0,35,155,23,255,207,53,192,0,11,125,163,1,249,158,185,255,4,131,48,0,21,93,111,255,61,121,231,1,69,200,36,255,185,48,185,255,111,238,21,255,39,50,25,255,99,215,163,255,87,212,30,255,164,147,5,255,128,6,35,1,108,223,110,255,194,76,178,0,74,101,180,0,243,47,48,0,174,25,43,255,82,173,253,1,54,114,192,255,40,55,91,0,215,108,176,255,11,56,7,0,224,233,76,0,209,98,202,254,242,25,125,0,44,193,93,254,203,8,177,0,135,176,19,0,112,71,213,255,206,59,176,1,4,67,26,0,14,143,213,254,42,55,208,255,60,67,120,0,193,21,163,0,99,164,115,0,10,20,118,0,156,212,222,254,160,7,217,255,114,245,76,1,117,59,123,0,176,194,86,254,213,15,176,0,78,206,207,254,213,129,59,0,233,251,22,1,96,55,152,255,236,255,15,255,197,89,84,255,93,149,133,0,174,160,113,0,234,99,169,255,152,116,88,0,144,164,83,255,95,29,198,255,34,47,15,255,99,120,134,255,5,236,193,0,249,247,126,255,147,187,30,0,50,230,117,255,108,217,219,255,163,81,166,255,72,25,169,254,155,121,79,255,28,155,89,254,7,126,17,0,147,65,33,1,47,234,253,0,26,51,18,0,105,83,199,255,163,196,230,0,113,248,164,0,226,254,218,0,189,209,203,255,164,247,222,254,255,35,165,0,4,188,243,1,127,179,71,0,37,237,254,255,100,186,240,0,5,57,71,254,103,72,73,255,244,18,81,254,229,210,132,255,238,6,180,255,11,229,174,255,227,221,192,1,17,49,28,0,163,215,196,254,9,118,4,255,51,240,71,0,113,129,109,255,76,240,231,0,188,177,127,0,125,71,44,1,26,175,243,0,94,169,25,254,27,230,29,0,15,139,119,1,168,170,186,255,172,197,76,255,252,75,188,0,137,124,196,0,72,22,96,255,45,151,249,1,220,145,100,0,64,192,159,255,120,239,226,0,129,178,146,0,0,192,125,0,235,138,234,0,183,157,146,0,83,199,192,255,184,172,72,255,73,225,128,0,77,6,250,255,186,65,67,0,104,246,207,0,188,32,138,255,218,24,242,0,67,138,81,254,237,129,121,255,20,207,150,1,41,199,16,255,6,20,128,0,159,118,5,0,181,16,143,255,220,38,15,0,23,64,147,254,73,26,13,0,87,228,57,1,204,124,128,0,43,24,223,0,219,99,199,0,22,75,20,255,19,27,126,0,157,62,215,0,110,29,230,0,179,167,255,1,54,252,190,0,221,204,182,254,179,158,65,255,81,157,3,0,194,218,159,0,170,223,0,0,224,11,32,255,38,197,98,0,168,164,37,0,23,88,7,1,164,186,110,0,96,36,134,0,234,242,229,0,250,121,19,0,242,254,112,255,3,47,94,1,9,239,6,255,81,134,153,254,214,253,168,255,67,124,224,0,245,95,74,0,28,30,44,254,1,109,220,255,178,89,89,0,252,36,76,0,24,198,46,255,76,77,111,0,134,234,136,255,39,94,29,0,185,72,234,255,70,68,135,255,231,102,7,254,77,231,140,0,167,47,58,1,148,97,118,255,16,27,225,1,166,206,143,255,110,178,214,255,180,131,162,0,143,141,225,1,13,218,78,255,114,153,33,1,98,104,204,0,175,114,117,1,167,206,75,0,202,196,83,1,58,64,67,0,138,47,111,1,196,247,128,255,137,224,224,254,158,112,207,0,154,100,255,1,134,37,107,0,198,128,79,255,127,209,155,255,163,254,185,254,60,14,243,0,31,219,112,254,29,217,65,0,200,13,116,254,123,60,196,255,224,59,184,254,242,89,196,0,123,16,75,254,149,16,206,0,69,254,48,1,231,116,223,255,209,160,65,1,200,80,98,0,37,194,184,254,148,63,34,0,139,240,65,255,217,144,132,255,56,38,45,254,199,120,210,0,108,177,166,255,160,222,4,0,220,126,119,254,165,107,160,255,82,220,248,1,241,175,136,0,144,141,23,255,169,138,84,0,160,137,78,255,226,118,80,255,52,27,132,255,63,96,139,255,152,250,39,0,188,155,15,0,232,51,150,254,40,15,232,255,240,229,9,255,137,175,27,255,75,73,97,1,218,212,11,0,135,5,162,1,107,185,213,0,2,249,107,255,40,242,70,0,219,200,25,0,25,157,13,0,67,82,80,255,196,249,23,255,145,20,149,0,50,72,146,0,94,76,148,1,24,251,65,0,31,192,23,0,184,212,201,255,123,233,162,1,247,173,72,0,162,87,219,254,126,134,89,0,159,11,12,254,166,105,29,0,73,27,228,1,113,120,183,255,66,163,109,1,212,143,11,255,159,231,168,1,255,128,90,0,57,14,58,254,89,52,10,255,253,8,163,1,0,145,210,255,10,129,85,1,46,181,27,0,103,136,160,254,126,188,209,255,34,35,111,0,215,219,24,255,212,11,214,254,101,5,118,0,232,197,133,255,223,167,109,255,237,80,86,255,70,139,94,0,158,193,191,1,155,15,51,255,15,190,115,0,78,135,207,255,249,10,27,1,181,125,233,0,95,172,13,254,170,213,161,255,39,236,138,255,95,93,87,255,190,128,95,0,125,15,206,0,166,150,159,0,227,15,158,255,206,158,120,255,42,141,128,0,101,178,120,1,156,109,131,0,218,14,44,254,247,168,206,255,212,112,28,0,112,17,228,255,90,16,37,1,197,222,108,0,254,207,83,255,9,90,243,255,243,244,172,0,26,88,115,255,205,116,122,0,191,230,193,0,180,100,11,1,217,37,96,255,154,78,156,0,235,234,31,255,206,178,178,255,149,192,251,0,182,250,135,0,246,22,105,0,124,193,109,255,2,210,149,255,169,17,170,0,0,96,110,255,117,9,8,1,50,123,40,255,193,189,99,0,34,227,160,0,48,80,70,254,211,51,236,0,45,122,245,254,44,174,8,0,173,37,233,255,158,65,171,0,122,69,215,255,90,80,2,255,131,106,96,254,227,114,135,0,205,49,119,254,176,62,64,255,82,51,17,255,241,20,243,255,130,13,8,254,128,217,243,255,162,27,1,254,90,118,241,0,246,198,246,255,55,16,118,255,200,159,157,0,163,17,1,0,140,107,121,0,85,161,118,255,38,0,149,0,156,47,238,0,9,166,166,1,75,98,181,255,50,74,25,0,66,15,47,0,139,225,159,0,76,3,142,255,14,238,184,0,11,207,53,255,183,192,186,1,171,32,174,255,191,76,221,1,247,170,219,0,25,172,50,254,217,9,233,0,203,126,68,255,183,92,48,0,127,167,183,1,65,49,254,0,16,63,127,1,254,21,170,255,59,224,127,254,22,48,63,255,27,78,130,254,40,195,29,0,250,132,112,254,35,203,144,0,104,169,168,0,207,253,30,255,104,40,38,254,94,228,88,0,206,16,128,255,212,55,122,255,223,22,234,0,223,197,127,0,253,181,181,1,145,102,118,0,236,153,36,255,212,217,72,255,20,38,24,254,138,62,62,0,152,140,4,0,230,220,99,255,1,21,212,255,148,201,231,0,244,123,9,254,0,171,210,0,51,58,37,255,1,255,14,255,244,183,145,254,0,242,166,0,22,74,132,0,121,216,41,0,95,195,114,254,133,24,151,255,156,226,231,255,247,5,77,255,246,148,115,254,225,92,81,255,222,80,246,254,170,123,89,255,74,199,141,0,29,20,8,255,138,136,70,255,93,75,92,0,221,147,49,254,52,126,226,0,229,124,23,0,46,9,181,0,205,64,52,1,131,254,28,0,151,158,212,0,131,64,78,0,206,25,171,0,0,230,139,0,191,253,110,254,103,247,167,0,64,40,40,1,42,165,241,255,59,75,228,254,124,243,189,255,196,92,178,255,130,140,86,255,141,89,56,1,147,198,5,255,203,248,158,254,144,162,141,0,11,172,226,0,130,42,21,255,1,167,143,255,144,36,36,255,48,88,164,254,168,170,220,0,98,71,214,0,91,208,79,0,159,76,201,1,166,42,214,255,69,255,0,255,6,128,125,255,190,1,140,0,146,83,218,255,215,238,72,1,122,127,53,0,189,116,165,255,84,8,66,255,214,3,208,255,213,110,133,0,195,168,44,1,158,231,69,0,162,64,200,254,91,58,104,0,182,58,187,254,249,228,136,0,203,134,76,254,99,221,233,0,75,254,214,254,80,69,154,0,64,152,248,254,236,136,202,255,157,105,153,254,149,175,20,0,22,35,19,255,124,121,233,0,186,250,198,254,132,229,139,0,137,80,174,255,165,125,68,0,144,202,148,254,235,239,248,0,135,184,118,0,101,94,17,255,122,72,70,254,69,130,146,0,127,222,248,1,69,127,118,255,30,82,215,254,188,74,19,255,229,167,194,254,117,25,66,255,65,234,56,254,213,22,156,0,151,59,93,254,45,28,27,255,186,126,164,255,32,6,239,0,127,114,99,1,219,52,2,255,99,96,166,254,62,190,126,255,108,222,168,1,75,226,174,0,230,226,199,0,60,117,218,255,252,248,20,1,214,188,204,0,31,194,134,254,123,69,192,255,169,173,36,254,55,98,91,0,223,42,102,254,137,1,102,0,157,90,25,0,239,122,64,255,252,6,233,0,7,54,20,255,82,116,174,0,135,37,54,255,15,186,125,0,227,112,175,255,100,180,225,255,42,237,244,255,244,173,226,254,248,18,33,0,171,99,150,255,74,235,50,255,117,82,32,254,106,168,237,0,207,109,208,1,228,9,186,0,135,60,169,254,179,92,143,0,244,170,104,255,235,45,124,255,70,99,186,0,117,137,183,0,224,31,215,0,40,9,100,0,26,16,95,1,68,217,87,0,8,151,20,255,26,100,58,255,176,165,203,1,52,118,70,0,7,32,254,254,244,254,245,255,167,144,194,255,125,113,23,255,176,121,181,0,136,84,209,0,138,6,30,255,89,48,28,0,33,155,14,255,25,240,154,0,141,205,109,1,70,115,62,255,20,40,107,254,138,154,199,255,94,223,226,255,157,171,38,0,163,177,25,254,45,118,3,255,14,222,23,1,209,190,81,255,118,123,232,1,13,213,101,255,123,55,123,254,27,246,165,0,50,99,76,255,140,214,32,255,97,65,67,255,24,12,28,0,174,86,78,1,64,247,96,0,160,135,67,0,66,55,243,255,147,204,96,255,26,6,33,255,98,51,83,1,153,213,208,255,2,184,54,255,25,218,11,0,49,67,246,254,18,149,72,255,13,25,72,0,42,79,214,0,42,4,38,1,27,139,144,255,149,187,23,0,18,164,132,0,245,84,184,254,120,198,104,255,126,218,96,0,56,117,234,255,13,29,214,254,68,47,10,255,167,154,132,254,152,38,198,0,66,178,89,255,200,46,171,255,13,99,83,255,210,187,253,255,170,45,42,1,138,209,124,0,214,162,141,0,12,230,156,0,102,36,112,254,3,147,67,0,52,215,123,255,233,171,54,255,98,137,62,0,247,218,39,255,231,218,236,0,247,191,127,0,195,146,84,0,165,176,92,255,19,212,94,255,17,74,227,0,88,40,153,1,198,147,1,255,206,67,245,254,240,3,218,255,61,141,213,255,97,183,106,0,195,232,235,254,95,86,154,0,209,48,205,254,118,209,241,255,240,120,223,1,213,29,159,0,163,127,147,255,13,218,93,0,85,24,68,254,70,20,80,255,189,5,140,1,82,97,254,255,99,99,191,255,132,84,133,255,107,218,116,255,112,122,46,0,105,17,32,0,194,160,63,255,68,222,39,1,216,253,92,0,177,105,205,255,149,201,195,0,42,225,11,255,40,162,115,0,9,7,81,0,165,218,219,0,180,22,0,254,29,146,252,255,146,207,225,1,180,135,96,0,31,163,112,0,177,11,219,255,133,12,193,254,43,78,50,0,65,113,121,1,59,217,6,255,110,94,24,1,112,172,111,0,7,15,96,0,36,85,123,0,71,150,21,255,208,73,188,0,192,11,167,1,213,245,34,0,9,230,92,0,162,142,39,255,215,90,27,0,98,97,89,0,94,79,211,0,90,157,240,0,95,220,126,1,102,176,226,0,36,30,224,254,35,31,127,0,231,232,115,1,85,83,130,0,210,73,245,255,47,143,114,255,68,65,197,0,59,72,62,255,183,133,173,254,93,121,118,255,59,177,81,255,234,69,173,255,205,128,177,0,220,244,51,0,26,244,209,1,73,222,77,255,163,8,96,254,150,149,211,0,158,254,203,1,54,127,139,0,161,224,59,0,4,109,22,255,222,42,45,255,208,146,102,255,236,142,187,0,50,205,245,255,10,74,89,254,48,79,142,0,222,76,130,255,30,166,63,0,236,12,13,255,49,184,244,0,187,113,102,0,218,101,253,0,153,57,182,254,32,150,42,0,25,198,146,1,237,241,56,0,140,68,5,0,91,164,172,255,78,145,186,254,67,52,205,0,219,207,129,1,109,115,17,0,54,143,58,1,21,248,120,255,179,255,30,0,193,236,66,255,1,255,7,255,253,192,48,255,19,69,217,1,3,214,0,255,64,101,146,1,223,125,35,255,235,73,179,255,249,167,226,0,225,175,10,1,97,162,58,0,106,112,171,1,84,172,5,255,133,140,178,255,134,245,142,0,97,90,125,255,186,203,185,255,223,77,23,255,192,92,106,0,15,198,115,255,217,152,248,0,171,178,120,255,228,134,53,0,176,54,193,1,250,251,53,0,213,10,100,1,34,199,106,0,151,31,244,254,172,224,87,255,14,237,23,255,253,85,26,255,127,39,116,255,172,104,100,0,251,14,70,255,212,208,138,255,253,211,250,0,176,49,165,0,15,76,123,255,37,218,160,255,92,135,16,1,10,126,114,255,70,5,224,255,247,249,141,0,68,20,60,1,241,210,189,255,195,217,187,1,151,3,113,0,151,92,174,0,231,62,178,255,219,183,225,0,23,23,33,255,205,181,80,0,57,184,248,255,67,180,1,255,90,123,93,255,39,0,162,255,96,248,52,255,84,66,140,0,34,127,228,255,194,138,7,1,166,110,188,0,21,17,155,1,154,190,198,255,214,80,59,255,18,7,143,0,72,29,226,1,199,217,249,0,232,161,71,1,149,190,201,0,217,175,95,254,113,147,67,255,138,143,199,255,127,204,1,0,29,182,83,1,206,230,155,255,186,204,60,0,10,125,85,255,232,96,25,255,255,89,247,255,213,254,175,1,232,193,81,0,28,43,156,254,12,69,8,0,147,24,248,0,18,198,49,0,134,60,35,0,118,246,18,255,49,88,254,254,228,21,186,255,182,65,112,1,219,22,1,255,22,126,52,255,189,53,49,255,112,25,143,0,38,127,55,255,226,101,163,254,208,133,61,255,137,69,174,1,190,118,145,255,60,98,219,255,217,13,245,255,250,136,10,0,84,254,226,0,201,31,125,1,240,51,251,255,31,131,130,255,2,138,50,255,215,215,177,1,223,12,238,255,252,149,56,255,124,91,68,255,72,126,170,254,119,255,100,0,130,135,232,255,14,79,178,0,250,131,197,0,138,198,208,0,121,216,139,254,119,18,36,255,29,193,122,0,16,42,45,255,213,240,235,1,230,190,169,255,198,35,228,254,110,173,72,0,214,221,241,255,56,148,135,0,192,117,78,254,141,93,207,255,143,65,149,0,21,18,98,255,95,44,244,1,106,191,77,0,254,85,8,254,214,110,176,255,73,173,19,254,160,196,199,255,237,90,144,0,193,172,113,255,200,155,136,254,228,90,221,0,137,49,74,1,164,221,215,255,209,189,5,255,105,236,55,255,42,31,129,1,193,255,236,0,46,217,60,0,138,88,187,255,226,82,236,255,81,69,151,255,142,190,16,1,13,134,8,0,127,122,48,255,81,64,156,0,171,243,139,0,237,35,246,0,122,143,193,254,212,122,146,0,95,41,255,1,87,132,77,0,4,212,31,0,17,31,78,0,39,45,173,254,24,142,217,255,95,9,6,255,227,83,6,0,98,59,130,254,62,30,33,0,8,115,211,1,162,97,128,255,7,184,23,254,116,28,168,255,248,138,151,255,98,244,240,0,186,118,130,0,114,248,235,255,105,173,200,1,160,124,71,255,94,36,164,1,175,65,146,255,238,241,170,254,202,198,197,0,228,71,138,254,45,246,109,255,194,52,158,0,133,187,176,0,83,252,154,254,89,189,221,255,170,73,252,0,148,58,125,0,36,68,51,254,42,69,177,255,168,76,86,255,38,100,204,255,38,53,35,0,175,19,97,0,225,238,253,255,81,81,135,0,210,27,255,254,235,73,107,0,8,207,115,0,82,127,136,0,84,99,21,254,207,19,136,0,100,164,101,0,80,208,77,255,132,207,237,255,15,3,15,255,33,166,110,0,156,95,85,255,37,185,111,1,150,106,35,255,166,151,76,0,114,87,135,255,159,194,64,0,12,122,31,255,232,7,101,254,173,119,98,0,154,71,220,254,191,57,53,255,168,232,160,255,224,32,99,255,218,156,165,0,151,153,163,0,217,13,148,1,197,113,89,0,149,28,161,254,207,23,30,0,105,132,227,255,54,230,94,255,133,173,204,255,92,183,157,255,88,144,252,254,102,33,90,0,159,97,3,0,181,218,155,255,240,114,119,0,106,214,53,255,165,190,115,1,152,91,225,255,88,106,44,255,208,61,113,0,151,52,124,0,191,27,156,255,110,54,236,1,14,30,166,255,39,127,207,1,229,199,28,0,188,228,188,254,100,157,235,0,246,218,183,1,107,22,193,255,206,160,95,0,76,239,147,0,207,161,117,0,51,166,2,255,52,117,10,254,73,56,227,255,152,193,225,0,132,94,136,255,101,191,209,0,32,107,229,255,198,43,180,1,100,210,118,0,114,67,153,255,23,88,26,255,89,154,92,1,220,120,140,255,144,114,207,255,252,115,250,255,34,206,72,0,138,133,127,255,8,178,124,1,87,75,97,0,15,229,92,254,240,67,131,255,118,123,227,254,146,120,104,255,145,213,255,1,129,187,70,255,219,119,54,0,1,19,173,0,45,150,148,1,248,83,72,0,203,233,169,1,142,107,56,0,247,249,38,1,45,242,80,255,30,233,103,0,96,82,70,0,23,201,111,0,81,39,30,255,161,183,78,255,194,234,33,255,68,227,140,254,216,206,116,0,70,27,235,255,104,144,79,0,164,230,93,254,214,135,156,0,154,187,242,254,188,20,131,255,36,109,174,0,159,112,241,0,5,110,149,1,36,165,218,0,166,29,19,1,178,46,73,0,93,43,32,254,248,189,237,0,102,155,141,0,201,93,195,255,241,139,253,255,15,111,98,255,108,65,163,254,155,79,190,255,73,174,193,254,246,40,48,255,107,88,11,254,202,97,85,255,253,204,18,255,113,242,66,0,110,160,194,254,208,18,186,0,81,21,60,0,188,104,167,255,124,166,97,254,210,133,142,0,56,242,137,254,41,111,130,0,111,151,58,1,111,213,141,255,183,172,241,255,38,6,196,255,185,7,123,255,46,11,246,0,245,105,119,1,15,2,161,255,8,206,45,255,18,202,74,255,83,124,115,1,212,141,157,0,83,8,209,254,139,15,232,255,172,54,173,254,50,247,132,0,214,189,213,0,144,184,105,0,223,254,248,0,255,147,240,255,23,188,72,0,7,51,54,0,188,25,180,254,220,180,0,255,83,160,20,0,163,189,243,255,58,209,194,255,87,73,60,0,106,24,49,0,245,249,220,0,22,173,167,0,118,11,195,255,19,126,237,0,110,159,37,255,59,82,47,0,180,187,86,0,188,148,208,1,100,37,133,255,7,112,193,0,129,188,156,255,84,106,129,255,133,225,202,0,14,236,111,255,40,20,101,0,172,172,49,254,51,54,74,255,251,185,184,255,93,155,224,255,180,249,224,1,230,178,146,0,72,57,54,254,178,62,184,0,119,205,72,0,185,239,253,255,61,15,218,0,196,67,56,255,234,32,171,1,46,219,228,0,208,108,234,255,20,63,232,255,165,53,199,1,133,228,5,255,52,205,107,0,74,238,140,255,150,156,219,254,239,172,178,255,251,189,223,254,32,142,211,255,218,15,138,1,241,196,80,0,28,36,98,254,22,234,199,0,61,237,220,255,246,57,37,0,142,17,142,255,157,62,26,0,43,238,95,254,3,217,6,255,213,25,240,1,39,220,174,255,154,205,48,254,19,13,192,255,244,34,54,254,140,16,155,0,240,181,5,254,155,193,60,0,166,128,4,255,36,145,56,255,150,240,219,0,120,51,145,0,82,153,42,1,140,236,146,0,107,92,248,1,189,10,3,0,63,136,242,0,211,39,24,0,19,202,161,1,173,27,186,255,210,204,239,254,41,209,162,255,182,254,159,255,172,116,52,0,195,103,222,254,205,69,59,0,53,22,41,1,218,48,194,0,80,210,242,0,210,188,207,0,187,161,161,254,216,17,1,0,136,225,113,0,250,184,63,0,223,30,98,254,77,168,162,0,59,53,175,0,19,201,10,255,139,224,194,0,147,193,154,255,212,189,12,254,1,200,174,255,50,133,113,1,94,179,90,0,173,182,135,0,94,177,113,0,43,89,215,255,136,252,106,255,123,134,83,254,5,245,66,255,82,49,39,1,220,2,224,0,97,129,177,0,77,59,89,0,61,29,155,1,203,171,220,255,92,78,139,0,145,33,181,255,169,24,141,1,55,150,179,0,139,60,80,255,218,39,97,0,2,147,107,255,60,248,72,0,173,230,47,1,6,83,182,255,16,105,162,254,137,212,81,255,180,184,134,1,39,222,164,255,221,105,251,1,239,112,125,0,63,7,97,0,63,104,227,255,148,58,12,0,90,60,224,255,84,212,252,0,79,215,168,0,248,221,199,1,115,121,1,0,36,172,120,0,32,162,187,255,57,107,49,255,147,42,21,0,106,198,43,1,57,74,87,0,126,203,81,255,129,135,195,0,140,31,177,0,221,139,194,0,3,222,215,0,131,68,231,0,177,86,178,254,124,151,180,0,184,124,38,1,70,163,17,0,249,251,181,1,42,55,227,0,226,161,44,0,23,236,110,0,51,149,142,1,93,5,236,0,218,183,106,254,67,24,77,0,40,245,209,255,222,121,153,0,165,57,30,0,83,125,60,0,70,38,82,1,229,6,188,0,109,222,157,255,55,118,63,255,205,151,186,0,227,33,149,255,254,176,246,1,227,177,227,0,34,106,163,254,176,43,79,0,106,95,78,1,185,241,122,255,185,14,61,0,36,1,202,0,13,178,162,255,247,11,132,0,161,230,92,1,65,1,185,255,212,50,165,1,141,146,64,255,158,242,218,0,21,164,125,0,213,139,122,1,67,71,87,0,203,158,178,1,151,92,43,0,152,111,5,255,39,3,239,255,217,255,250,255,176,63,71,255,74,245,77,1,250,174,18,255,34,49,227,255,246,46,251,255,154,35,48,1,125,157,61,255,106,36,78,255,97,236,153,0,136,187,120,255,113,134,171,255,19,213,217,254,216,94,209,255,252,5,61,0,94,3,202,0,3,26,183,255,64,191,43,255,30,23,21,0,129,141,77,255,102,120,7,1,194,76,140,0,188,175,52,255,17,81,148,0,232,86,55,1,225,48,172,0,134,42,42,255,238,50,47,0,169,18,254,0,20,147,87,255,14,195,239,255,69,247,23,0,238,229,128,255,177,49,112,0,168,98,251,255,121,71,248,0,243,8,145,254,246,227,153,255,219,169,177,254,251,139,165,255,12,163,185,255,164,40,171,255,153,159,27,254,243,109,91,255,222,24,112,1,18,214,231,0,107,157,181,254,195,147,0,255,194,99,104,255,89,140,190,255,177,66,126,254,106,185,66],"i8",ALLOC_NONE,Runtime.GLOBAL_BASE);allocate([49,218,31,0,252,174,158,0,188,79,230,1,238,41,224,0,212,234,8,1,136,11,181,0,166,117,83,255,68,195,94,0,46,132,201,0,240,152,88,0,164,57,69,254,160,224,42,255,59,215,67,255,119,195,141,255,36,180,121,254,207,47,8,255,174,210,223,0,101,197,68,255,255,82,141,1,250,137,233,0,97,86,133,1,16,80,69,0,132,131,159,0,116,93,100,0,45,141,139,0,152,172,157,255,90,43,91,0,71,153,46,0,39,16,112,255,217,136,97,255,220,198,25,254,177,53,49,0,222,88,134,255,128,15,60,0,207,192,169,255,192,116,209,255,106,78,211,1,200,213,183,255,7,12,122,254,222,203,60,255,33,110,199,254,251,106,117,0,228,225,4,1,120,58,7,255,221,193,84,254,112,133,27,0,189,200,201,255,139,135,150,0,234,55,176,255,61,50,65,0,152,108,169,255,220,85,1,255,112,135,227,0,162,26,186,0,207,96,185,254,244,136,107,0,93,153,50,1,198,97,151,0,110,11,86,255,143,117,174,255,115,212,200,0,5,202,183,0,237,164,10,254,185,239,62,0,236,120,18,254,98,123,99,255,168,201,194,254,46,234,214,0,191,133,49,255,99,169,119,0,190,187,35,1,115,21,45,255,249,131,72,0,112,6,123,255,214,49,181,254,166,233,34,0,92,197,102,254,253,228,205,255,3,59,201,1,42,98,46,0,219,37,35,255,169,195,38,0,94,124,193,1,156,43,223,0,95,72,133,254,120,206,191,0,122,197,239,255,177,187,79,255,254,46,2,1,250,167,190,0,84,129,19,0,203,113,166,255,249,31,189,254,72,157,202,255,208,71,73,255,207,24,72,0,10,16,18,1,210,81,76,255,88,208,192,255,126,243,107,255,238,141,120,255,199,121,234,255,137,12,59,255,36,220,123,255,148,179,60,254,240,12,29,0,66,0,97,1,36,30,38,255,115,1,93,255,96,103,231,255,197,158,59,1,192,164,240,0,202,202,57,255,24,174,48,0,89,77,155,1,42,76,215,0,244,151,233,0,23,48,81,0,239,127,52,254,227,130,37,255,248,116,93,1,124,132,118,0,173,254,192,1,6,235,83,255,110,175,231,1,251,28,182,0,129,249,93,254,84,184,128,0,76,181,62,0,175,128,186,0,100,53,136,254,109,29,226,0,221,233,58,1,20,99,74,0,0,22,160,0,134,13,21,0,9,52,55,255,17,89,140,0,175,34,59,0,84,165,119,255,224,226,234,255,7,72,166,255,123,115,255,1,18,214,246,0,250,7,71,1,217,220,185,0,212,35,76,255,38,125,175,0,189,97,210,0,114,238,44,255,41,188,169,254,45,186,154,0,81,92,22,0,132,160,193,0,121,208,98,255,13,81,44,255,203,156,82,0,71,58,21,255,208,114,191,254,50,38,147,0,154,216,195,0,101,25,18,0,60,250,215,255,233,132,235,255,103,175,142,1,16,14,92,0,141,31,110,254,238,241,45,255,153,217,239,1,97,168,47,255,249,85,16,1,28,175,62,255,57,254,54,0,222,231,126,0,166,45,117,254,18,189,96,255,228,76,50,0,200,244,94,0,198,152,120,1,68,34,69,255,12,65,160,254,101,19,90,0,167,197,120,255,68,54,185,255,41,218,188,0,113,168,48,0,88,105,189,1,26,82,32,255,185,93,164,1,228,240,237,255,66,182,53,0,171,197,92,255,107,9,233,1,199,120,144,255,78,49,10,255,109,170,105,255,90,4,31,255,28,244,113,255,74,58,11,0,62,220,246,255,121,154,200,254,144,210,178,255,126,57,129,1,43,250,14,255,101,111,28,1,47,86,241,255,61,70,150,255,53,73,5,255,30,26,158,0,209,26,86,0,138,237,74,0,164,95,188,0,142,60,29,254,162,116,248,255,187,175,160,0,151,18,16,0,209,111,65,254,203,134,39,255,88,108,49,255,131,26,71,255,221,27,215,254,104,105,93,255,31,236,31,254,135,0,211,255,143,127,110,1,212,73,229,0,233,67,167,254,195,1,208,255,132,17,221,255,51,217,90,0,67,235,50,255,223,210,143,0,179,53,130,1,233,106,198,0,217,173,220,255,112,229,24,255,175,154,93,254,71,203,246,255,48,66,133,255,3,136,230,255,23,221,113,254,235,111,213,0,170,120,95,254,251,221,2,0,45,130,158,254,105,94,217,255,242,52,180,254,213,68,45,255,104,38,28,0,244,158,76,0,161,200,96,255,207,53,13,255,187,67,148,0,170,54,248,0,119,162,178,255,83,20,11,0,42,42,192,1,146,159,163,255,183,232,111,0,77,229,21,255,71,53,143,0,27,76,34,0,246,136,47,255,219,39,182,255,92,224,201,1,19,142,14,255,69,182,241,255,163,118,245,0,9,109,106,1,170,181,247,255,78,47,238,255,84,210,176,255,213,107,139,0,39,38,11,0,72,21,150,0,72,130,69,0,205,77,155,254,142,133,21,0,71,111,172,254,226,42,59,255,179,0,215,1,33,128,241,0,234,252,13,1,184,79,8,0,110,30,73,255,246,141,189,0,170,207,218,1,74,154,69,255,138,246,49,255,155,32,100,0,125,74,105,255,90,85,61,255,35,229,177,255,62,125,193,255,153,86,188,1,73,120,212,0,209,123,246,254,135,209,38,255,151,58,44,1,92,69,214,255,14,12,88,255,252,153,166,255,253,207,112,255,60,78,83,255,227,124,110,0,180,96,252,255,53,117,33,254,164,220,82,255,41,1,27,255,38,164,166,255,164,99,169,254,61,144,70,255,192,166,18,0,107,250,66,0,197,65,50,0,1,179,18,255,255,104,1,255,43,153,35,255,80,111,168,0,110,175,168,0,41,105,45,255,219,14,205,255,164,233,140,254,43,1,118,0,233,67,195,0,178,82,159,255,138,87,122,255,212,238,90,255,144,35,124,254,25,140,164,0,251,215,44,254,133,70,107,255,101,227,80,254,92,169,55,0,215,42,49,0,114,180,85,255,33,232,27,1,172,213,25,0,62,176,123,254,32,133,24,255,225,191,62,0,93,70,153,0,181,42,104,1,22,191,224,255,200,200,140,255,249,234,37,0,149,57,141,0,195,56,208,255,254,130,70,255,32,173,240,255,29,220,199,0,110,100,115,255,132,229,249,0,228,233,223,255,37,216,209,254,178,177,209,255,183,45,165,254,224,97,114,0,137,97,168,255,225,222,172,0,165,13,49,1,210,235,204,255,252,4,28,254,70,160,151,0,232,190,52,254,83,248,93,255,62,215,77,1,175,175,179,255,160,50,66,0,121,48,208,0,63,169,209,255,0,210,200,0,224,187,44,1,73,162,82,0,9,176,143,255,19,76,193,255,29,59,167,1,24,43,154,0,28,190,190,0,141,188,129,0,232,235,203,255,234,0,109,255,54,65,159,0,60,88,232,255,121,253,150,254,252,233,131,255,198,110,41,1,83,77,71,255,200,22,59,254,106,253,242,255,21,12,207,255,237,66,189,0,90,198,202,1,225,172,127,0,53,22,202,0,56,230,132,0,1,86,183,0,109,190,42,0,243,68,174,1,109,228,154,0,200,177,122,1,35,160,183,255,177,48,85,255,90,218,169,255,248,152,78,0,202,254,110,0,6,52,43,0,142,98,65,255,63,145,22,0,70,106,93,0,232,138,107,1,110,179,61,255,211,129,218,1,242,209,92,0,35,90,217,1,182,143,106,255,116,101,217,255,114,250,221,255,173,204,6,0,60,150,163,0,73,172,44,255,239,110,80,255,237,76,153,254,161,140,249,0,149,232,229,0,133,31,40,255,174,164,119,0,113,51,214,0,129,228,2,254,64,34,243,0,107,227,244,255,174,106,200,255,84,153,70,1,50,35,16,0,250,74,216,254,236,189,66,255,153,249,13,0,230,178,4,255,221,41,238,0,118,227,121,255,94,87,140,254,254,119,92,0,73,239,246,254,117,87,128,0,19,211,145,255,177,46,252,0,229,91,246,1,69,128,247,255,202,77,54,1,8,11,9,255,153,96,166,0,217,214,173,255,134,192,2,1,0,207,0,0,189,174,107,1,140,134,100,0,158,193,243,1,182,102,171,0,235,154,51,0,142,5,123,255,60,168,89,1,217,14,92,255,19,214,5,1,211,167,254,0,44,6,202,254,120,18,236,255,15,113,184,255,184,223,139,0,40,177,119,254,182,123,90,255,176,165,176,0,247,77,194,0,27,234,120,0,231,0,214,255,59,39,30,0,125,99,145,255,150,68,68,1,141,222,248,0,153,123,210,255,110,127,152,255,229,33,214,1,135,221,197,0,137,97,2,0,12,143,204,255,81,41,188,0,115,79,130,255,94,3,132,0,152,175,187,255,124,141,10,255,126,192,179,255,11,103,198,0,149,6,45,0,219,85,187,1,230,18,178,255,72,182,152,0,3,198,184,255,128,112,224,1,97,161,230,0,254,99,38,255,58,159,197,0,151,66,219,0,59,69,143,255,185,112,249,0,119,136,47,255,123,130,132,0,168,71,95,255,113,176,40,1,232,185,173,0,207,93,117,1,68,157,108,255,102,5,147,254,49,97,33,0,89,65,111,254,247,30,163,255,124,217,221,1,102,250,216,0,198,174,75,254,57,55,18,0,227,5,236,1,229,213,173,0,201,109,218,1,49,233,239,0,30,55,158,1,25,178,106,0,155,111,188,1,94,126,140,0,215,31,238,1,77,240,16,0,213,242,25,1,38,71,168,0,205,186,93,254,49,211,140,255,219,0,180,255,134,118,165,0,160,147,134,255,110,186,35,255,198,243,42,0,243,146,119,0,134,235,163,1,4,241,135,255,193,46,193,254,103,180,79,255,225,4,184,254,242,118,130,0,146,135,176,1,234,111,30,0,69,66,213,254,41,96,123,0,121,94,42,255,178,191,195,255,46,130,42,0,117,84,8,255,233,49,214,254,238,122,109,0,6,71,89,1,236,211,123,0,244,13,48,254,119,148,14,0,114,28,86,255,75,237,25,255,145,229,16,254,129,100,53,255,134,150,120,254,168,157,50,0,23,72,104,255,224,49,14,0,255,123,22,255,151,185,151,255,170,80,184,1,134,182,20,0,41,100,101,1,153,33,16,0,76,154,111,1,86,206,234,255,192,160,164,254,165,123,93,255,1,216,164,254,67,17,175,255,169,11,59,255,158,41,61,255,73,188,14,255,195,6,137,255,22,147,29,255,20,103,3,255,246,130,227,255,122,40,128,0,226,47,24,254,35,36,32,0,152,186,183,255,69,202,20,0,195,133,195,0,222,51,247,0,169,171,94,1,183,0,160,255,64,205,18,1,156,83,15,255,197,58,249,254,251,89,110,255,50,10,88,254,51,43,216,0,98,242,198,1,245,151,113,0,171,236,194,1,197,31,199,255,229,81,38,1,41,59,20,0,253,104,230,0,152,93,14,255,246,242,146,254,214,169,240,255,240,102,108,254,160,167,236,0,154,218,188,0,150,233,202,255,27,19,250,1,2,71,133,255,175,12,63,1,145,183,198,0,104,120,115,255,130,251,247,0,17,212,167,255,62,123,132,255,247,100,189,0,155,223,152,0,143,197,33,0,155,59,44,255,150,93,240,1,127,3,87,255,95,71,207,1,167,85,1,255,188,152,116,255,10,23,23,0,137,195,93,1,54,98,97,0,240,0,168,255,148,188,127,0,134,107,151,0,76,253,171,0,90,132,192,0,146,22,54,0,224,66,54,254,230,186,229,255,39,182,196,0,148,251,130,255,65,131,108,254,128,1,160,0,169,49,167,254,199,254,148,255,251,6,131,0,187,254,129,255,85,82,62,0,178,23,58,255,254,132,5,0,164,213,39,0,134,252,146,254,37,53,81,255,155,134,82,0,205,167,238,255,94,45,180,255,132,40,161,0,254,111,112,1,54,75,217,0,179,230,221,1,235,94,191,255,23,243,48,1,202,145,203,255,39,118,42,255,117,141,253,0,254,0,222,0,43,251,50,0,54,169,234,1,80,68,208,0,148,203,243,254,145,7,135,0,6,254,0,0,252,185,127,0,98,8,129,255,38,35,72,255,211,36,220,1,40,26,89,0,168,64,197,254,3,222,239,255,2,83,215,254,180,159,105,0,58,115,194,0,186,116,106,255,229,247,219,255,129,118,193,0,202,174,183,1,166,161,72,0,201,107,147,254,237,136,74,0,233,230,106,1,105,111,168,0,64,224,30,1,1,229,3,0,102,151,175,255,194,238,228,255,254,250,212,0,187,237,121,0,67,251,96,1,197,30,11,0,183,95,204,0,205,89,138,0,64,221,37,1,255,223,30,255,178,48,211,255,241,200,90,255,167,209,96,255,57,130,221,0,46,114,200,255,61,184,66,0,55,182,24,254,110,182,33,0,171,190,232,255,114,94,31,0,18,221,8,0,47,231,254,0,255,112,83,0,118,15,215,255,173,25,40,254,192,193,31,255,238,21,146,255,171,193,118,255,101,234,53,254,131,212,112,0,89,192,107,1,8,208,27,0,181,217,15,255,231,149,232,0,140,236,126,0,144,9,199,255,12,79,181,254,147,182,202,255,19,109,182,255,49,212,225,0,74,163,203,0,175,233,148,0,26,112,51,0,193,193,9,255,15,135,249,0,150,227,130,0,204,0,219,1,24,242,205,0,238,208,117,255,22,244,112,0,26,229,34,0,37,80,188,255,38,45,206,254,240,90,225,255,29,3,47,255,42,224,76,0,186,243,167,0,32,132,15,255,5,51,125,0,139,135,24,0,6,241,219,0,172,229,133,255,246,214,50,0,231,11,207,255,191,126,83,1,180,163,170,255,245,56,24,1,178,164,211,255,3,16,202,1,98,57,118,255,141,131,89,254,33,51,24,0,243,149,91,255,253,52,14,0,35,169,67,254,49,30,88,255,179,27,36,255,165,140,183,0,58,189,151,0,88,31,0,0,75,169,66,0,66,101,199,255,24,216,199,1,121,196,26,255,14,79,203,254,240,226,81,255,94,28,10,255,83,193,240,255,204,193,131,255,94,15,86,0,218,40,157,0,51,193,209,0,0,242,177,0,102,185,247,0,158,109,116,0,38,135,91,0,223,175,149,0,220,66,1,255,86,60,232,0,25,96,37,255,225,122,162,1,215,187,168,255,158,157,46,0,56,171,162,0,232,240,101,1,122,22,9,0,51,9,21,255,53,25,238,255,217,30,232,254,125,169,148,0,13,232,102,0,148,9,37,0,165,97,141,1,228,131,41,0,222,15,243,255,254,18,17,0,6,60,237,1,106,3,113,0,59,132,189,0,92,112,30,0,105,208,213,0,48,84,179,255,187,121,231,254,27,216,109,255,162,221,107,254,73,239,195,255,250,31,57,255,149,135,89,255,185,23,115,1,3,163,157,255,18,112,250,0,25,57,187,255,161,96,164,0,47,16,243,0,12,141,251,254,67,234,184,255,41,18,161,0,175,6,96,255,160,172,52,254,24,176,183,255,198,193,85,1,124,121,137,255,151,50,114,255,220,203,60,255,207,239,5,1,0,38,107,255,55,238,94,254,70,152,94,0,213,220,77,1,120,17,69,255,85,164,190,255,203,234,81,0,38,49,37,254,61,144,124,0,137,78,49,254,168,247,48,0,95,164,252,0,105,169,135,0,253,228,134,0,64,166,75,0,81,73,20,255,207,210,10,0,234,106,150,255,94,34,90,255,254,159,57,254,220,133,99,0,139,147,180,254,24,23,185,0,41,57,30,255,189,97,76,0,65,187,223,255,224,172,37,255,34,62,95,1,231,144,240,0,77,106,126,254,64,152,91,0,29,98,155,0,226,251,53,255,234,211,5,255,144,203,222,255,164,176,221,254,5,231,24,0,179,122,205,0,36,1,134,255,125,70,151,254,97,228,252,0,172,129,23,254,48,90,209,255,150,224,82,1,84,134,30,0,241,196,46,0,103,113,234,255,46,101,121,254,40,124,250,255,135,45,242,254,9,249,168,255,140,108,131,255,143,163,171,0,50,173,199,255,88,222,142,255,200,95,158,0,142,192,163,255,7,117,135,0,111,124,22,0,236,12,65,254,68,38,65,255,227,174,254,0,244,245,38,0,240,50,208,255,161,63,250,0,60,209,239,0,122,35,19,0,14,33,230,254,2,159,113,0,106,20,127,255,228,205,96,0,137,210,174,254,180,212,144,255,89,98,154,1,34,88,139,0,167,162,112,1,65,110,197,0,241,37,169,0,66,56,131,255,10,201,83,254,133,253,187,255,177,112,45,254,196,251,0,0,196,250,151,255,238,232,214,255,150,209,205,0,28,240,118,0,71,76,83,1,236,99,91,0,42,250,131,1,96,18,64,255,118,222,35,0,113,214,203,255,122,119,184,255,66,19,36,0,204,64,249,0,146,89,139,0,134,62,135,1,104,233,101,0,188,84,26,0,49,249,129,0,208,214,75,255,207,130,77,255,115,175,235,0,171,2,137,255,175,145,186,1,55,245,135,255,154,86,181,1,100,58,246,255,109,199,60,255,82,204,134,255,215,49,230,1,140,229,192,255,222,193,251,255,81,136,15,255,179,149,162,255,23,39,29,255,7,95,75,254,191,81,222,0,241,81,90,255,107,49,201,255,244,211,157,0,222,140,149,255,65,219,56,254,189,246,90,255,178,59,157,1,48,219,52,0,98,34,215,0,28,17,187,255,175,169,24,0,92,79,161,255,236,200,194,1,147,143,234,0,229,225,7,1,197,168,14,0,235,51,53,1,253,120,174,0,197,6,168,255,202,117,171,0,163,21,206,0,114,85,90,255,15,41,10,255,194,19,99,0,65,55,216,254,162,146,116,0,50,206,212,255,64,146,29,255,158,158,131,1,100,165,130,255,172,23,129,255,125,53,9,255,15,193,18,1,26,49,11,255,181,174,201,1,135,201,14,255,100,19,149,0,219,98,79,0,42,99,143,254,96,0,48,255,197,249,83,254,104,149,79,255,235,110,136,254,82,128,44,255,65,41,36,254,88,211,10,0,187,121,187,0,98,134,199,0,171,188,179,254,210,11,238,255,66,123,130,254,52,234,61,0,48,113,23,254,6,86,120,255,119,178,245,0,87,129,201,0,242,141,209,0,202,114,85,0,148,22,161,0,103,195,48,0,25,49,171,255,138,67,130,0,182,73,122,254,148,24,130,0,211,229,154,0,32,155,158,0,84,105,61,0,177,194,9,255,166,89,86,1,54,83,187,0,249,40,117,255,109,3,215,255,53,146,44,1,63,47,179,0,194,216,3,254,14,84,136,0,136,177,13,255,72,243,186,255,117,17,125,255,211,58,211,255,93,79,223,0,90,88,245,255,139,209,111,255,70,222,47,0,10,246,79,255,198,217,178,0,227,225,11,1,78,126,179,255,62,43,126,0,103,148,35,0,129,8,165,254,245,240,148,0,61,51,142,0,81,208,134,0,15,137,115,255,211,119,236,255,159,245,248,255,2,134,136,255,230,139,58,1,160,164,254,0,114,85,141,255,49,166,182,255,144,70,84,1,85,182,7,0,46,53,93,0,9,166,161,255,55,162,178,255,45,184,188,0,146,28,44,254,169,90,49,0,120,178,241,1,14,123,127,255,7,241,199,1,189,66,50,255,198,143,101,254,189,243,135,255,141,24,24,254,75,97,87,0,118,251,154,1,237,54,156,0,171,146,207,255,131,196,246,255,136,64,113,1,151,232,57,0,240,218,115,0,49,61,27,255,64,129,73,1,252,169,27,255,40,132,10,1,90,201,193,255,252,121,240,1,186,206,41,0,43,198,97,0,145,100,183,0,204,216,80,254,172,150,65,0,249,229,196,254,104,123,73,255,77,104,96,254,130,180,8,0,104,123,57,0,220,202,229,255,102,249,211,0,86,14,232,255,182,78,209,0,239,225,164,0,106,13,32,255,120,73,17,255,134,67,233,0,83,254,181,0,183,236,112,1,48,64,131,255,241,216,243,255,65,193,226,0,206,241,100,254,100,134,166,255,237,202,197,0,55,13,81,0,32,124,102,255,40,228,177,0,118,181,31,1,231,160,134,255,119,187,202,0,0,142,60,255,128,38,189,255,166,201,150,0,207,120,26,1,54,184,172,0,12,242,204,254,133,66,230,0,34,38,31,1,184,112,80,0,32,51,165,254,191,243,55,0,58,73,146,254,155,167,205,255,100,104,152,255,197,254,207,255,173,19,247,0,238,10,202,0,239,151,242,0,94,59,39,255,240,29,102,255,10,92,154,255,229,84,219,255,161,129,80,0,208,90,204,1,240,219,174,255,158,102,145,1,53,178,76,255,52,108,168,1,83,222,107,0,211,36,109,0,118,58,56,0,8,29,22,0,237,160,199,0,170,209,157,0,137,71,47,0,143,86,32,0,198,242,2,0,212,48,136,1,92,172,186,0,230,151,105,1,96,191,229,0,138,80,191,254,240,216,130,255,98,43,6,254,168,196,49,0,253,18,91,1,144,73,121,0,61,146,39,1,63,104,24,255,184,165,112,254,126,235,98,0,80,213,98,255,123,60,87,255,82,140,245,1,223,120,173,255,15,198,134,1,206,60,239,0,231,234,92,255,33,238,19,255,165,113,142,1,176,119,38,0,160,43,166,254,239,91,105,0,107,61,194,1,25,4,68,0,15,139,51,0,164,132,106,255,34,116,46,254,168,95,197,0,137,212,23,0,72,156,58,0,137,112,69,254,150,105,154,255,236,201,157,0,23,212,154,255,136,82,227,254,226,59,221,255,95,149,192,0,81,118,52,255,33,43,215,1,14,147,75,255,89,156,121,254,14,18,79,0,147,208,139,1,151,218,62,255,156,88,8,1,210,184,98,255,20,175,123,255,102,83,229,0,220,65,116,1,150,250,4,255,92,142,220,255,34,247,66,255,204,225,179,254,151,81,151,0,71,40,236,255,138,63,62,0,6,79,240,255,183,185,181,0,118,50,27,0,63,227,192,0,123,99,58,1,50,224,155,255,17,225,223,254,220,224,77,255,14,44,123,1,141,128,175,0,248,212,200,0,150,59,183,255,147,97,29,0,150,204,181,0,253,37,71,0,145,85,119,0,154,200,186,0,2,128,249,255,83,24,124,0,14,87,143,0,168,51,245,1,124,151,231,255,208,240,197,1,124,190,185,0,48,58,246,0,20,233,232,0,125,18,98,255,13,254,31,255,245,177,130,255,108,142,35,0,171,125,242,254,140,12,34,255,165,161,162,0,206,205,101,0,247,25,34,1,100,145,57,0,39,70,57,0,118,204,203,255,242,0,162,0,165,244,30,0,198,116,226,0,128,111,153,255,140,54,182,1,60,122,15,255,155,58,57,1,54,50,198,0,171,211,29,255,107,138,167,255,173,107,199,255,109,161,193,0,89,72,242,255,206,115,89,255,250,254,142,254,177,202,94,255,81,89,50,0,7,105,66,255,25,254,255,254,203,64,23,255,79,222,108,255,39,249,75,0,241,124,50,0,239,152,133,0,221,241,105,0,147,151,98,0,213,161,121,254,242,49,137,0,233,37,249,254,42,183,27,0,184,119,230,255,217,32,163,255,208,251,228,1,137,62,131,255,79,64,9,254,94,48,113,0,17,138,50,254,193,255,22,0,247,18,197,1,67,55,104,0,16,205,95,255,48,37,66,0,55,156,63,1,64,82,74,255,200,53,71,254,239,67,125,0,26,224,222,0,223,137,93,255,30,224,202,255,9,220,132,0,198,38,235,1,102,141,86,0,60,43,81,1,136,28,26,0,233,36,8,254,207,242,148,0,164,162,63,0,51,46,224,255,114,48,79,255,9,175,226,0,222,3,193,255,47,160,232,255,255,93,105,254,14,42,230,0,26,138,82,1,208,43,244,0,27,39,38,255,98,208,127,255,64,149,182,255,5,250,209,0,187,60,28,254,49,25,218,255,169,116,205,255,119,18,120,0,156,116,147,255,132,53,109,255,13,10,202,0,110,83,167,0,157,219,137,255,6,3,130,255,50,167,30,255,60,159,47,255,129,128,157,254,94,3,189,0,3,166,68,0,83,223,215,0,150,90,194,1,15,168,65,0,227,83,51,255,205,171,66,255,54,187,60,1,152,102,45,255,119,154,225,0,240,247,136,0,100,197,178,255,139,71,223,255,204,82,16,1,41,206,42,255,156,192,221,255,216,123,244,255,218,218,185,255,187,186,239,255,252,172,160,255,195,52,22,0,144,174,181,254,187,100,115,255,211,78,176,255,27,7,193,0,147,213,104,255,90,201,10,255,80,123,66,1,22,33,186,0,1,7,99,254,30,206,10,0,229,234,5,0,53,30,210,0,138,8,220,254,71,55,167,0,72,225,86,1,118,190,188,0,254,193,101,1,171,249,172,255,94,158,183,254,93,2,108,255,176,93,76,255,73,99,79,255,74,64,129,254,246,46,65,0,99,241,127,254,246,151,102,255,44,53,208,254,59,102,234,0,154,175,164,255,88,242,32,0,111,38,1,0,255,182,190,255,115,176,15,254,169,60,129,0,122,237,241,0,90,76,63,0,62,74,120,255,122,195,110,0,119,4,178,0,222,242,210,0,130,33,46,254,156,40,41,0,167,146,112,1,49,163,111,255,121,176,235,0,76,207,14,255,3,25,198,1,41,235,213,0,85,36,214,1,49,92,109,255,200,24,30,254,168,236,195,0,145,39,124,1,236,195,149,0,90,36,184,255,67,85,170,255,38,35,26,254,131,124,68,255,239,155,35,255,54,201,164,0,196,22,117,255,49,15,205,0,24,224,29,1,126,113,144,0,117,21,182,0,203,159,141,0,223,135,77,0,176,230,176,255,190,229,215,255,99,37,181,255,51,21,138,255,25,189,89,255,49,48,165,254,152,45,247,0,170,108,222,0,80,202,5,0,27,69,103,254,204,22,129,255,180,252,62,254,210,1,91,255,146,110,254,255,219,162,28,0,223,252,213,1,59,8,33,0,206,16,244,0,129,211,48,0,107,160,208,0,112,59,209,0,109,77,216,254,34,21,185,255,246,99,56,255,179,139,19,255,185,29,50,255,84,89,19,0,74,250,98,255,225,42,200,255,192,217,205,255,210,16,167,0,99,132,95,1,43,230,57,0,254,11,203,255,99,188,63,255,119,193,251,254,80,105,54,0,232,181,189,1,183,69,112,255,208,171,165,255,47,109,180,255,123,83,165,0,146,162,52,255,154,11,4,255,151,227,90,255,146,137,97,254,61,233,41,255,94,42,55,255,108,164,236,0,152,68,254,0,10,140,131,255,10,106,79,254,243,158,137,0,67,178,66,254,177,123,198,255,15,62,34,0,197,88,42,255,149,95,177,255,152,0,198,255,149,254,113,255,225,90,163,255,125,217,247,0,18,17,224,0,128,66,120,254,192,25,9,255,50,221,205,0,49,212,70,0,233,255,164,0,2,209,9,0,221,52,219,254,172,224,244,255,94,56,206,1,242,179,2,255,31,91,164,1,230,46,138,255,189,230,220,0,57,47,61,255,111,11,157,0,177,91,152,0,28,230,98,0,97,87,126,0,198,89,145,255,167,79,107,0,249,77,160,1,29,233,230,255,150,21,86,254,60,11,193,0,151,37,36,254,185,150,243,255,228,212,83,1,172,151,180,0,201,169,155,0,244,60,234,0,142,235,4,1,67,218,60,0,192,113,75,1,116,243,207,255,65,172,155,0,81,30,156,255,80,72,33,254,18,231,109,255,142,107,21,254,125,26,132,255,176,16,59,255,150,201,58,0,206,169,201,0,208,121,226,0,40,172,14,255,150,61,94,255,56,57,156,255,141,60,145,255,45,108,149,255,238,145,155,255,209,85,31,254,192,12,210,0,99,98,93,254,152,16,151,0,225,185,220,0,141,235,44,255,160,172,21,254,71,26,31,255,13,64,93,254,28,56,198,0,177,62,248,1,182,8,241,0,166,101,148,255,78,81,133,255,129,222,215,1,188,169,129,255,232,7,97,0,49,112,60,255,217,229,251,0,119,108,138,0,39,19,123,254,131,49,235,0,132,84,145,0,130,230,148,255,25,74,187,0,5,245,54,255,185,219,241,1,18,194,228,255,241,202,102,0,105,113,202,0,155,235,79,0,21,9,178,255,156,1,239,0,200,148,61,0,115,247,210,255,49,221,135,0,58,189,8,1,35,46,9,0,81,65,5,255,52,158,185,255,125,116,46,255,74,140,13,255,210,92,172,254,147,23,71,0,217,224,253,254,115,108,180,255,145,58,48,254,219,177,24,255,156,255,60,1,154,147,242,0,253,134,87,0,53,75,229,0,48,195,222,255,31,175,50,255,156,210,120,255,208,35,222,255,18,248,179,1,2,10,101,255,157,194,248,255,158,204,101,255,104,254,197,255,79,62,4,0,178,172,101,1,96,146,251,255,65,10,156,0,2,137,165,255,116,4,231,0,242,215,1,0,19,35,29,255,43,161,79,0,59,149,246,1,251,66,176,0,200,33,3,255,80,110,142,255,195,161,17,1,228,56,66,255,123,47,145,254,132,4,164,0,67,174,172,0,25,253,114,0,87,97,87,1,250,220,84,0,96,91,200,255,37,125,59,0,19,65,118,0,161,52,241,255,237,172,6,255,176,191,255,255,1,65,130,254,223,190,230,0,101,253,231,255,146,35,109,0,250,29,77,1,49,0,19,0,123,90,155,1,22,86,32,255,218,213,65,0,111,93,127,0,60,93,169,255,8,127,182,0,17,186,14,254,253,137,246,255,213,25,48,254,76,238,0,255,248,92,70,255,99,224,139,0,184,9,255,1,7,164,208,0,205,131,198,1,87,214,199,0,130,214,95,0,221,149,222,0,23,38,171,254,197,110,213,0,43,115,140,254,215,177,118,0,96,52,66,1,117,158,237,0,14,64,182,255,46,63,174,255,158,95,190,255,225,205,177,255,43,5,142,255,172,99,212,255,244,187,147,0,29,51,153,255,228,116,24,254,30,101,207,0,19,246,150,255,134,231,5,0,125,134,226,1,77,65,98,0,236,130,33,255,5,110,62,0,69,108,127,255,7,113,22,0,145,20,83,254,194,161,231,255,131,181,60,0,217,209,177,255,229,148,212,254,3,131,184,0,117,177,187,1,28,14,31,255,176,102,80,0,50,84,151,255,125,31,54,255,21,157,133,255,19,179,139,1,224,232,26,0,34,117,170,255,167,252,171,255,73,141,206,254,129,250,35,0,72,79,236,1,220,229,20,255,41,202,173,255,99,76,238,255,198,22,224,255,108,198,195,255,36,141,96,1,236,158,59,255,106,100,87,0,110,226,2,0,227,234,222,0,154,93,119,255,74,112,164,255,67,91,2,255,21,145,33,255,102,214,137,255,175,230,103,254,163,246,166,0,93,247,116,254,167,224,28,255,220,2,57,1,171,206,84,0,123,228,17,255,27,120,119,0,119,11,147,1,180,47,225,255,104,200,185,254,165,2,114,0,77,78,212,0,45,154,177,255,24,196,121,254,82,157,182,0,90,16,190,1,12,147,197,0,95,239,152,255,11,235,71,0,86,146,119,255,172,134,214,0,60,131,196,0,161,225,129,0,31,130,120,254,95,200,51,0,105,231,210,255,58,9,148,255,43,168,221,255,124,237,142,0,198,211,50,254,46,245,103,0,164,248,84,0,152,70,208,255,180,117,177,0,70,79,185,0,243,74,32,0,149,156,207,0,197,196,161,1,245,53,239,0,15,93,246,254,139,240,49,255,196,88,36,255,162,38,123,0,128,200,157,1,174,76,103,255,173,169,34,254,216,1,171,255,114,51,17,0,136,228,194,0,110,150,56,254,106,246,159,0,19,184,79,255,150,77,240,255,155,80,162,0,0,53,169,255,29,151,86,0,68,94,16,0,92,7,110,254,98,117,149,255,249,77,230,255,253,10,140,0,214,124,92,254,35,118,235,0,89,48,57,1,22,53,166,0,184,144,61,255,179,255,194,0,214,248,61,254,59,110,246,0,121,21,81,254,166,3,228,0,106,64,26,255,69,232,134,255,242,220,53,254,46,220,85,0,113,149,247,255,97,179,103,255,190,127,11,0,135,209,182,0,95,52,129,1,170,144,206,255,122,200,204,255,168,100,146,0,60,144,149,254,70,60,40,0,122,52,177,255,246,211,101,255,174,237,8,0,7,51,120,0,19,31,173,0,126,239,156,255,143,189,203,0,196,128,88,255,233,133,226,255,30,125,173,255,201,108,50,0,123,100,59,255,254,163,3,1,221,148,181,255,214,136,57,254,222,180,137,255,207,88,54,255,28,33,251,255,67,214,52,1,210,208,100,0,81,170,94,0,145,40,53,0,224,111,231,254,35,28,244,255,226,199,195,254,238,17,230,0,217,217,164,254,169,157,221,0,218,46,162,1,199,207,163,255,108,115,162,1,14,96,187,255,118,60,76,0,184,159,152,0,209,231,71,254,42,164,186,255,186,153,51,254,221,171,182,255,162,142,173,0,235,47,193,0,7,139,16,1,95,164,64,255,16,221,166,0,219,197,16,0,132,29,44,255,100,69,117,255,60,235,88,254,40,81,173,0,71,190,61,255,187,88,157,0,231,11,23,0,237,117,164,0,225,168,223,255,154,114,116,255,163,152,242,1,24,32,170,0,125,98,113,254,168,19,76,0,17,157,220,254,155,52,5,0,19,111,161,255,71,90,252,255,173,110,240,0,10,198,121,255,253,255,240,255,66,123,210,0,221,194,215,254,121,163,17,255,225,7,99,0,190,49,182,0,115,9,133,1,232,26,138,255,213,68,132,0,44,119,122,255,179,98,51,0,149,90,106,0,71,50,230,255,10,153,118,255,177,70,25,0,165,87,205,0,55,138,234,0,238,30,97,0,113,155,207,0,98,153,127,0,34,107,219,254,117,114,172,255,76,180,255,254,242,57,179,255,221,34,172,254,56,162,49,255,83,3,255,255,113,221,189,255,188,25,228,254,16,88,89,255,71,28,198,254,22,17,149,255,243,121,254,255,107,202,99,255,9,206,14,1,220,47,153,0,107,137,39,1,97,49,194,255,149,51,197,254,186,58,11,255,107,43,232,1,200,6,14,255,181,133,65,254,221,228,171,255,123,62,231,1,227,234,179,255,34,189,212,254,244,187,249,0,190,13,80,1,130,89,1,0,223,133,173,0,9,222,198,255,66,127,74,0,167,216,93,255,155,168,198,1,66,145,0,0,68,102,46,1,172,90,154,0,216,128,75,255,160,40,51,0,158,17,27,1,124,240,49,0,236,202,176,255,151,124,192,255,38,193,190,0,95,182,61,0,163,147,124,255,255,165,51,255,28,40,17,254,215,96,78,0,86,145,218,254,31,36,202,255,86,9,5,0,111,41,200,255,237,108,97,0,57,62,44,0,117,184,15,1,45,241,116,0,152,1,220,255,157,165,188,0,250,15,131,1,60,44,125,255,65,220,251,255,75,50,184,0,53,90,128,255,231,80,194,255,136,129,127,1,21,18,187,255,45,58,161,255,71,147,34,0,174,249,11,254,35,141,29,0,239,68,177,255,115,110,58,0,238,190,177,1,87,245,166,255,190,49,247,255,146,83,184,255,173,14,39,255,146,215,104,0,142,223,120,0,149,200,155,255,212,207,145,1,16,181,217,0,173,32,87,255,255,35,181,0,119,223,161,1,200,223,94,255,70,6,186,255,192,67,85,255,50,169,152,0,144,26,123,255,56,243,179,254,20,68,136,0,39,140,188,254,253,208,5,255,200,115,135,1,43,172,229,255,156,104,187,0,151,251,167,0,52,135,23,0,151,153,72,0,147,197,107,254,148,158,5,255,238,143,206,0,126,153,137,255,88,152,197,254,7,68,167,0,252,159,165,255,239,78,54,255,24,63,55,255,38,222,94,0,237,183,12,255,206,204,210,0,19,39,246,254,30,74,231,0,135,108,29,1,179,115,0,0,117,118,116,1,132,6,252,255,145,129,161,1,105,67,141,0,82,37,226,255,238,226,228,255,204,214,129,254,162,123,100,255,185,121,234,0,45,108,231,0,66,8,56,255,132,136,128,0,172,224,66,254,175,157,188,0,230,223,226,254,242,219,69,0,184,14,119,1,82,162,56,0,114,123,20,0,162,103,85,255,49,239,99,254,156,135,215,0,111,255,167,254,39,196,214,0,144,38,79,1,249,168,125,0,155,97,156,255,23,52,219,255,150,22,144,0,44,149,165,255,40,127,183,0,196,77,233,255,118,129,210,255,170,135,230,255,214,119,198,0,233,240,35,0,253,52,7,255,117,102,48,255,21,204,154,255,179,136,177,255,23,2,3,1,149,130,89,255,252,17,159,1,70,60,26,0,144,107,17,0,180,190,60,255,56,182,59,255,110,71,54,255,198,18,129,255,149,224,87,255,223,21,152,255,138,22,182,255,250,156,205,0,236,45,208,255,79,148,242,1,101,70,209,0,103,78,174,0,101,144,172,255,152,136,237,1,191,194,136,0,113,80,125,1,152,4,141,0,155,150,53,255,196,116,245,0,239,114,73,254,19,82,17,255,124,125,234,255,40,52,191,0,42,210,158,255,155,132,165,0,178,5,42,1,64,92,40,255,36,85,77,255,178,228,118,0,137,66,96,254,115,226,66,0,110,240,69,254,151,111,80,0,167,174,236,255,227,108,107,255,188,242,65,255,183,81,255,0,57,206,181,255,47,34,181,255,213,240,158,1,71,75,95,0,156,40,24,255,102,210,81,0,171,199,228,255,154,34,41,0,227,175,75,0,21,239,195,0,138,229,95,1,76,192,49,0,117,123,87,1,227,225,130,0,125,62,63,255,2,198,171,0,254,36,13,254,145,186,206,0,148,255,244,255,35,0,166,0,30,150,219,1,92,228,212,0,92,198,60,254,62,133,200,255,201,41,59,0,125,238,109,255,180,163,238,1,140,122,82,0,9,22,88,255,197,157,47,255,153,94,57,0,88,30,182,0,84,161,85,0,178,146,124,0,166,166,7,255,21,208,223,0,156,182,242,0,155,121,185,0,83,156,174,254,154,16,118,255,186,83,232,1,223,58,121,255,29,23,88,0,35,125,127,255,170,5,149,254,164,12,130,255,155,196,29,0,161,96,136,0,7,35,29,1,162,37,251,0,3,46,242,255,0,217,188,0,57,174,226,1,206,233,2,0,57,187,136,254,123,189,9,255,201,117,127,255,186,36,204,0,231,25,216,0,80,78,105,0,19,134,129,255,148,203,68,0,141,81,125,254,248,165,200,255,214,144,135,0,151,55,166,255,38,235,91,0,21,46,154,0,223,254,150,255,35,153,180,255,125,176,29,1,43,98,30,255,216,122,230,255,233,160,12,0,57,185,12,254,240,113,7,255,5,9,16,254,26,91,108,0,109,198,203,0,8,147,40,0,129,134,228,255,124,186,40,255,114,98,132,254,166,132,23,0,99,69,44,0,9,242,238,255,184,53,59,0,132,129,102,255,52,32,243,254,147,223,200,255,123,83,179,254,135,144,201,255,141,37,56,1,151,60,227,255,90,73,156,1,203,172,187,0,80,151,47,255,94,137,231,255,36,191,59,255,225,209,181,255,74,215,213,254,6,118,179,255,153,54,193,1,50,0,231,0,104,157,72,1,140,227,154,255,182,226,16,254,96,225,92,255,115,20,170,254,6,250,78,0,248,75,173,255,53,89,6,255,0,180,118,0,72,173,1,0,64,8,206,1,174,133,223,0,185,62,133,255,214,11,98,0,197,31,208,0,171,167,244,255,22,231,181,1,150,218,185,0,247,169,97,1,165,139,247,255,47,120,149,1,103,248,51,0,60,69,28,254,25,179,196,0,124,7,218,254,58,107,81,0,184,233,156,255,252,74,36,0,118,188,67,0,141,95,53,255,222,94,165,254,46,61,53,0,206,59,115,255,47,236,250,255,74,5,32,1,129,154,238,255,106,32,226,0,121,187,61,255,3,166,241,254,67,170,172,255,29,216,178,255,23,201,252,0,253,110,243,0,200,125,57,0,109,192,96,255,52,115,238,0,38,121,243,255,201,56,33,0,194,118,130,0,75,96,25,255,170,30,230,254,39,63,253,0,36,45,250,255,251,1,239,0,160,212,92,1,45,209,237,0,243,33,87,254,237,84,201,255,212,18,157,254,212,99,127,255,217,98,16,254,139,172,239,0,168,201,130,255,143,193,169,255,238,151,193,1,215,104,41,0,239,61,165,254,2,3,242,0,22,203,177,254,177,204,22,0,149,129,213,254,31,11,41,255,0,159,121,254,160,25,114,255,162,80,200,0,157,151,11,0,154,134,78,1,216,54,252,0,48,103,133,0,105,220,197,0,253,168,77,254,53,179,23,0,24,121,240,1,255,46,96,255,107,60,135,254,98,205,249,255,63,249,119,255,120,59,211,255,114,180,55,254,91,85,237,0,149,212,77,1,56,73,49,0,86,198,150,0,93,209,160,0,69,205,182,255,244,90,43,0,20,36,176,0,122,116,221,0,51,167,39,1,231,1,63,255,13,197,134,0,3,209,34,255,135,59,202,0,167,100,78,0,47,223,76,0,185,60,62,0,178,166,123,1,132,12,161,255,61,174,43,0,195,69,144,0,127,47,191,1,34,44,78,0,57,234,52,1,255,22,40,255,246,94,146,0,83,228,128,0,60,78,224,255,0,96,210,255,153,175,236,0,159,21,73,0,180,115,196,254,131,225,106,0,255,167,134,0,159,8,112,255,120,68,194,255,176,196,198,255,118,48,168,255,93,169,1,0,112,200,102,1,74,24,254,0,19,141,4,254,142,62,63,0,131,179,187,255,77,156,155,255,119,86,164,0,170,208,146,255,208,133,154,255,148,155,58,255,162,120,232,254,252,213,155,0,241,13,42,0,94,50,131,0,179,170,112,0,140,83,151,255,55,119,84,1,140,35,239,255,153,45,67,1,236,175,39,0,54,151,103,255,158,42,65,255,196,239,135,254,86,53,203,0,149,97,47,254,216,35,17,255,70,3,70,1,103,36,90,255,40,26,173,0,184,48,13,0,163,219,217,255,81,6,1,255,221,170,108,254,233,208,93,0,100,201,249,254,86,36,35,255,209,154,30,1,227,201,251,255,2,189,167,254,100,57,3,0,13,128,41,0,197,100,75,0,150,204,235,255,145,174,59,0,120,248,149,255,85,55,225,0,114,210,53,254,199,204,119,0,14,247,74,1,63,251,129,0,67,104,151,1,135,130,80,0,79,89,55,255,117,230,157,255,25,96,143,0,213,145,5,0,69,241,120,1,149,243,95,255,114,42,20,0,131,72,2,0,154,53,20,255,73,62,109,0,196,102,152,0,41,12,204,255,122,38,11,1,250,10,145,0,207,125,148,0,246,244,222,255,41,32,85,1,112,213,126,0,162,249,86,1,71,198,127,255,81,9,21,1,98,39,4,255,204,71,45,1,75,111,137,0,234,59,231,0,32,48,95,255,204,31,114,1,29,196,181,255,51,241,167,254,93,109,142,0,104,144,45,0,235,12,181,255,52,112,164,0,76,254,202,255,174,14,162,0,61,235,147,255,43,64,185,254,233,125,217,0,243,88,167,254,74,49,8,0,156,204,66,0,124,214,123,0,38,221,118,1,146,112,236,0,114,98,177,0,151,89,199,0,87,197,112,0,185,149,161,0,44,96,165,0,248,179,20,255,188,219,216,254,40,62,13,0,243,142,141,0,229,227,206,255,172,202,35,255,117,176,225,255,82,110,38,1,42,245,14,255,20,83,97,0,49,171,10,0,242,119,120,0,25,232,61,0,212,240,147,255,4,115,56,255,145,17,239,254,202,17,251,255,249,18,245,255,99,117,239,0,184,4,179,255,246,237,51,255,37,239,137,255,166,112,166,255,81,188,33,255,185,250,142,255,54,187,173,0,208,112,201,0,246,43,228,1,104,184,88,255,212,52,196,255,51,117,108,255,254,117,155,0,46,91,15,255,87,14,144,255,87,227,204,0,83,26,83,1,159,76,227,0,159,27,213,1,24,151,108,0,117,144,179,254,137,209,82,0,38,159,10,0,115,133,201,0,223,182,156,1,110,196,93,255,57,60,233,0,5,167,105,255,154,197,164,0,96,34,186,255,147,133,37,1,220,99,190,0,1,167,84,255,20,145,171,0,194,197,251,254,95,78,133,255,252,248,243,255,225,93,131,255,187,134,196,255,216,153,170,0,20,118,158,254,140,1,118,0,86,158,15,1,45,211,41,255,147,1,100,254,113,116,76,255,211,127,108,1,103,15,48,0,193,16,102,1,69,51,95,255,107,128,157,0,137,171,233,0,90,124,144,1,106,161,182,0,175,76,236,1,200,141,172,255,163,58,104,0,233,180,52,255,240,253,14,255,162,113,254,255,38,239,138,254,52,46,166,0,241,101,33,254,131,186,156,0,111,208,62,255,124,94,160,255,31,172,254,0,112,174,56,255,188,99,27,255,67,138,251,0,125,58,128,1,156,152,174,255,178,12,247,255,252,84,158,0,82,197,14,254,172,200,83,255,37,39,46,1,106,207,167,0,24,189,34,0,131,178,144,0,206,213,4,0,161,226,210,0,72,51,105,255,97,45,187,255,78,184,223,255,176,29,251,0,79,160,86,255,116,37,178,0,82,77,213,1,82,84,141,255,226,101,212,1,175,88,199,255,245,94,247,1,172,118,109,255,166,185,190,0,131,181,120,0,87,254,93,255,134,240,73,255,32,245,143,255,139,162,103,255,179,98,18,254,217,204,112,0,147,223,120,255,53,10,243,0,166,140,150,0,125,80,200,255,14,109,219,255,91,218,1,255,252,252,47,254,109,156,116,255,115,49,127,1,204,87,211,255,148,202,217,255,26,85,249,255,14,245,134,1,76,89,169,255,242,45,230,0,59,98,172,255,114,73,132,254,78,155,49,255,158,126,84,0,49,175,43,255,16,182,84,255,157,103,35,0,104,193,109,255,67,221,154],"i8",ALLOC_NONE,Runtime.GLOBAL_BASE+10240);allocate([201,172,1,254,8,162,88,0,165,1,29,255,125,155,229,255,30,154,220,1,103,239,92,0,220,1,109,255,202,198,1,0,94,2,142,1,36,54,44,0,235,226,158,255,170,251,214,255,185,77,9,0,97,74,242,0,219,163,149,255,240,35,118,255,223,114,88,254,192,199,3,0,106,37,24,255,201,161,118,255,97,89,99,1,224,58,103,255,101,199,147,254,222,60,99,0,234,25,59,1,52,135,27,0,102,3,91,254,168,216,235,0,229,232,136,0,104,60,129,0,46,168,238,0,39,191,67,0,75,163,47,0,143,97,98,255,56,216,168,1,168,233,252,255,35,111,22,255,92,84,43,0,26,200,87,1,91,253,152,0,202,56,70,0,142,8,77,0,80,10,175,1,252,199,76,0,22,110,82,255,129,1,194,0,11,128,61,1,87,14,145,255,253,222,190,1,15,72,174,0,85,163,86,254,58,99,44,255,45,24,188,254,26,205,15,0,19,229,210,254,248,67,195,0,99,71,184,0,154,199,37,255,151,243,121,255,38,51,75,255,201,85,130,254,44,65,250,0,57,147,243,254,146,43,59,255,89,28,53,0,33,84,24,255,179,51,18,254,189,70,83,0,11,156,179,1,98,134,119,0,158,111,111,0,119,154,73,255,200,63,140,254,45,13,13,255,154,192,2,254,81,72,42,0,46,160,185,254,44,112,6,0,146,215,149,1,26,176,104,0,68,28,87,1,236,50,153,255,179,128,250,254,206,193,191,255,166,92,137,254,53,40,239,0,210,1,204,254,168,173,35,0,141,243,45,1,36,50,109,255,15,242,194,255,227,159,122,255,176,175,202,254,70,57,72,0,40,223,56,0,208,162,58,255,183,98,93,0,15,111,12,0,30,8,76,255,132,127,246,255,45,242,103,0,69,181,15,255,10,209,30,0,3,179,121,0,241,232,218,1,123,199,88,255,2,210,202,1,188,130,81,255,94,101,208,1,103,36,45,0,76,193,24,1,95,26,241,255,165,162,187,0,36,114,140,0,202,66,5,255,37,56,147,0,152,11,243,1,127,85,232,255,250,135,212,1,185,177,113,0,90,220,75,255,69,248,146,0,50,111,50,0,92,22,80,0,244,36,115,254,163,100,82,255,25,193,6,1,127,61,36,0,253,67,30,254,65,236,170,255,161,17,215,254,63,175,140,0,55,127,4,0,79,112,233,0,109,160,40,0,143,83,7,255,65,26,238,255,217,169,140,255,78,94,189,255,0,147,190,255,147,71,186,254,106,77,127,255,233,157,233,1,135,87,237,255,208,13,236,1,155,109,36,255,180,100,218,0,180,163,18,0,190,110,9,1,17,63,123,255,179,136,180,255,165,123,123,255,144,188,81,254,71,240,108,255,25,112,11,255,227,218,51,255,167,50,234,255,114,79,108,255,31,19,115,255,183,240,99,0,227,87,143,255,72,217,248,255,102,169,95,1,129,149,149,0,238,133,12,1,227,204,35,0,208,115,26,1,102,8,234,0,112,88,143,1,144,249,14,0,240,158,172,254,100,112,119,0,194,141,153,254,40,56,83,255,121,176,46,0,42,53,76,255,158,191,154,0,91,209,92,0,173,13,16,1,5,72,226,255,204,254,149,0,80,184,207,0,100,9,122,254,118,101,171,255,252,203,0,254,160,207,54,0,56,72,249,1,56,140,13,255,10,64,107,254,91,101,52,255,225,181,248,1,139,255,132,0,230,145,17,0,233,56,23,0,119,1,241,255,213,169,151,255,99,99,9,254,185,15,191,255,173,103,109,1,174,13,251,255,178,88,7,254,27,59,68,255,10,33,2,255,248,97,59,0,26,30,146,1,176,147,10,0,95,121,207,1,188,88,24,0,185,94,254,254,115,55,201,0,24,50,70,0,120,53,6,0,142,66,146,0,228,226,249,255,104,192,222,1,173,68,219,0,162,184,36,255,143,102,137,255,157,11,23,0,125,45,98,0,235,93,225,254,56,112,160,255,70,116,243,1,153,249,55,255,129,39,17,1,241,80,244,0,87,69,21,1,94,228,73,255,78,66,65,255,194,227,231,0,61,146,87,255,173,155,23,255,112,116,219,254,216,38,11,255,131,186,133,0,94,212,187,0,100,47,91,0,204,254,175,255,222,18,215,254,173,68,108,255,227,228,79,255,38,221,213,0,163,227,150,254,31,190,18,0,160,179,11,1,10,90,94,255,220,174,88,0,163,211,229,255,199,136,52,0,130,95,221,255,140,188,231,254,139,113,128,255,117,171,236,254,49,220,20,255,59,20,171,255,228,109,188,0,20,225,32,254,195,16,174,0,227,254,136,1,135,39,105,0,150,77,206,255,210,238,226,0,55,212,132,254,239,57,124,0,170,194,93,255,249,16,247,255,24,151,62,255,10,151,10,0,79,139,178,255,120,242,202,0,26,219,213,0,62,125,35,255,144,2,108,255,230,33,83,255,81,45,216,1,224,62,17,0,214,217,125,0,98,153,153,255,179,176,106,254,131,93,138,255,109,62,36,255,178,121,32,255,120,252,70,0,220,248,37,0,204,88,103,1,128,220,251,255,236,227,7,1,106,49,198,255,60,56,107,0,99,114,238,0,220,204,94,1,73,187,1,0,89,154,34,0,78,217,165,255,14,195,249,255,9,230,253,255,205,135,245,0,26,252,7,255,84,205,27,1,134,2,112,0,37,158,32,0,231,91,237,255,191,170,204,255,152,7,222,0,109,192,49,0,193,166,146,255,232,19,181,255,105,142,52,255,103,16,27,1,253,200,165,0,195,217,4,255,52,189,144,255,123,155,160,254,87,130,54,255,78,120,61,255,14,56,41,0,25,41,125,255,87,168,245,0,214,165,70,0,212,169,6,255,219,211,194,254,72,93,164,255,197,33,103,255,43,142,141,0,131,225,172,0,244,105,28,0,68,68,225,0,136,84,13,255,130,57,40,254,139,77,56,0,84,150,53,0,54,95,157,0,144,13,177,254,95,115,186,0,117,23,118,255,244,166,241,255,11,186,135,0,178,106,203,255,97,218,93,0,43,253,45,0,164,152,4,0,139,118,239,0,96,1,24,254,235,153,211,255,168,110,20,255,50,239,176,0,114,41,232,0,193,250,53,0,254,160,111,254,136,122,41,255,97,108,67,0,215,152,23,255,140,209,212,0,42,189,163,0,202,42,50,255,106,106,189,255,190,68,217,255,233,58,117,0,229,220,243,1,197,3,4,0,37,120,54,254,4,156,134,255,36,61,171,254,165,136,100,255,212,232,14,0,90,174,10,0,216,198,65,255,12,3,64,0,116,113,115,255,248,103,8,0,231,125,18,255,160,28,197,0,30,184,35,1,223,73,249,255,123,20,46,254,135,56,37,255,173,13,229,1,119,161,34,255,245,61,73,0,205,125,112,0,137,104,134,0,217,246,30,255,237,142,143,0,65,159,102,255,108,164,190,0,219,117,173,255,34,37,120,254,200,69,80,0,31,124,218,254,74,27,160,255,186,154,199,255,71,199,252,0,104,81,159,1,17,200,39,0,211,61,192,1,26,238,91,0,148,217,12,0,59,91,213,255,11,81,183,255,129,230,122,255,114,203,145,1,119,180,66,255,72,138,180,0,224,149,106,0,119,82,104,255,208,140,43,0,98,9,182,255,205,101,134,255,18,101,38,0,95,197,166,255,203,241,147,0,62,208,145,255,133,246,251,0,2,169,14,0,13,247,184,0,142,7,254,0,36,200,23,255,88,205,223,0,91,129,52,255,21,186,30,0,143,228,210,1,247,234,248,255,230,69,31,254,176,186,135,255,238,205,52,1,139,79,43,0,17,176,217,254,32,243,67,0,242,111,233,0,44,35,9,255,227,114,81,1,4,71,12,255,38,105,191,0,7,117,50,255,81,79,16,0,63,68,65,255,157,36,110,255,77,241,3,255,226,45,251,1,142,25,206,0,120,123,209,1,28,254,238,255,5,128,126,255,91,222,215,255,162,15,191,0,86,240,73,0,135,185,81,254,44,241,163,0,212,219,210,255,112,162,155,0,207,101,118,0,168,72,56,255,196,5,52,0,72,172,242,255,126,22,157,255,146,96,59,255,162,121,152,254,140,16,95,0,195,254,200,254,82,150,162,0,119,43,145,254,204,172,78,255,166,224,159,0,104,19,237,255,245,126,208,255,226,59,213,0,117,217,197,0,152,72,237,0,220,31,23,254,14,90,231,255,188,212,64,1,60,101,246,255,85,24,86,0,1,177,109,0,146,83,32,1,75,182,192,0,119,241,224,0,185,237,27,255,184,101,82,1,235,37,77,255,253,134,19,0,232,246,122,0,60,106,179,0,195,11,12,0,109,66,235,1,125,113,59,0,61,40,164,0,175,104,240,0,2,47,187,255,50,12,141,0,194,139,181,255,135,250,104,0,97,92,222,255,217,149,201,255,203,241,118,255,79,151,67,0,122,142,218,255,149,245,239,0,138,42,200,254,80,37,97,255,124,112,167,255,36,138,87,255,130,29,147,255,241,87,78,255,204,97,19,1,177,209,22,255,247,227,127,254,99,119,83,255,212,25,198,1,16,179,179,0,145,77,172,254,89,153,14,255,218,189,167,0,107,233,59,255,35,33,243,254,44,112,112,255,161,127,79,1,204,175,10,0,40,21,138,254,104,116,228,0,199,95,137,255,133,190,168,255,146,165,234,1,183,99,39,0,183,220,54,254,255,222,133,0,162,219,121,254,63,239,6,0,225,102,54,255,251,18,246,0,4,34,129,1,135,36,131,0,206,50,59,1,15,97,183,0,171,216,135,255,101,152,43,255,150,251,91,0,38,145,95,0,34,204,38,254,178,140,83,255,25,129,243,255,76,144,37,0,106,36,26,254,118,144,172,255,68,186,229,255,107,161,213,255,46,163,68,255,149,170,253,0,187,17,15,0,218,160,165,255,171,35,246,1,96,13,19,0,165,203,117,0,214,107,192,255,244,123,177,1,100,3,104,0,178,242,97,255,251,76,130,255,211,77,42,1,250,79,70,255,63,244,80,1,105,101,246,0,61,136,58,1,238,91,213,0,14,59,98,255,167,84,77,0,17,132,46,254,57,175,197,255,185,62,184,0,76,64,207,0,172,175,208,254,175,74,37,0,138,27,211,254,148,125,194,0,10,89,81,0,168,203,101,255,43,213,209,1,235,245,54,0,30,35,226,255,9,126,70,0,226,125,94,254,156,117,20,255,57,248,112,1,230,48,64,255,164,92,166,1,224,214,230,255,36,120,143,0,55,8,43,255,251,1,245,1,106,98,165,0,74,107,106,254,53,4,54,255,90,178,150,1,3,120,123,255,244,5,89,1,114,250,61,255,254,153,82,1,77,15,17,0,57,238,90,1,95,223,230,0,236,52,47,254,103,148,164,255,121,207,36,1,18,16,185,255,75,20,74,0,187,11,101,0,46,48,129,255,22,239,210,255,77,236,129,255,111,77,204,255,61,72,97,255,199,217,251,255,42,215,204,0,133,145,201,255,57,230,146,1,235,100,198,0,146,73,35,254,108,198,20,255,182,79,210,255,82,103,136,0,246,108,176,0,34,17,60,255,19,74,114,254,168,170,78,255,157,239,20,255,149,41,168,0,58,121,28,0,79,179,134,255,231,121,135,255,174,209,98,255,243,122,190,0,171,166,205,0,212,116,48,0,29,108,66,255,162,222,182,1,14,119,21,0,213,39,249,255,254,223,228,255,183,165,198,0,133,190,48,0,124,208,109,255,119,175,85,255,9,209,121,1,48,171,189,255,195,71,134,1,136,219,51,255,182,91,141,254,49,159,72,0,35,118,245,255,112,186,227,255,59,137,31,0,137,44,163,0,114,103,60,254,8,213,150,0,162,10,113,255,194,104,72,0,220,131,116,255,178,79,92,0,203,250,213,254,93,193,189,255,130,255,34,254,212,188,151,0,136,17,20,255,20,101,83,255,212,206,166,0,229,238,73,255,151,74,3,255,168,87,215,0,155,188,133,255,166,129,73,0,240,79,133,255,178,211,81,255,203,72,163,254,193,168,165,0,14,164,199,254,30,255,204,0,65,72,91,1,166,74,102,255,200,42,0,255,194,113,227,255,66,23,208,0,229,216,100,255,24,239,26,0,10,233,62,255,123,10,178,1,26,36,174,255,119,219,199,1,45,163,190,0,16,168,42,0,166,57,198,255,28,26,26,0,126,165,231,0,251,108,100,255,61,229,121,255,58,118,138,0,76,207,17,0,13,34,112,254,89,16,168,0,37,208,105,255,35,201,215,255,40,106,101,254,6,239,114,0,40,103,226,254,246,127,110,255,63,167,58,0,132,240,142,0,5,158,88,255,129,73,158,255,94,89,146,0,230,54,146,0,8,45,173,0,79,169,1,0,115,186,247,0,84,64,131,0,67,224,253,255,207,189,64,0,154,28,81,1,45,184,54,255,87,212,224,255,0,96,73,255,129,33,235,1,52,66,80,255,251,174,155,255,4,179,37,0,234,164,93,254,93,175,253,0,198,69,87,255,224,106,46,0,99,29,210,0,62,188,114,255,44,234,8,0,169,175,247,255,23,109,137,255,229,182,39,0,192,165,94,254,245,101,217,0,191,88,96,0,196,94,99,255,106,238,11,254,53,126,243,0,94,1,101,255,46,147,2,0,201,124,124,255,141,12,218,0,13,166,157,1,48,251,237,255,155,250,124,255,106,148,146,255,182,13,202,0,28,61,167,0,217,152,8,254,220,130,45,255,200,230,255,1,55,65,87,255,93,191,97,254,114,251,14,0,32,105,92,1,26,207,141,0,24,207,13,254,21,50,48,255,186,148,116,255,211,43,225,0,37,34,162,254,164,210,42,255,68,23,96,255,182,214,8,255,245,117,137,255,66,195,50,0,75,12,83,254,80,140,164,0,9,165,36,1,228,110,227,0,241,17,90,1,25,52,212,0,6,223,12,255,139,243,57,0,12,113,75,1,246,183,191,255,213,191,69,255,230,15,142,0,1,195,196,255,138,171,47,255,64,63,106,1,16,169,214,255,207,174,56,1,88,73,133,255,182,133,140,0,177,14,25,255,147,184,53,255,10,227,161,255,120,216,244,255,73,77,233,0,157,238,139,1,59,65,233,0,70,251,216,1,41,184,153,255,32,203,112,0,146,147,253,0,87,101,109,1,44,82,133,255,244,150,53,255,94,152,232,255,59,93,39,255,88,147,220,255,78,81,13,1,32,47,252,255,160,19,114,255,93,107,39,255,118,16,211,1,185,119,209,255,227,219,127,254,88,105,236,255,162,110,23,255,36,166,110,255,91,236,221,255,66,234,116,0,111,19,244,254,10,233,26,0,32,183,6,254,2,191,242,0,218,156,53,254,41,60,70,255,168,236,111,0,121,185,126,255,238,142,207,255,55,126,52,0,220,129,208,254,80,204,164,255,67,23,144,254,218,40,108,255,127,202,164,0,203,33,3,255,2,158,0,0,37,96,188,255,192,49,74,0,109,4,0,0,111,167,10,254,91,218,135,255,203,66,173,255,150,194,226,0,201,253,6,255,174,102,121,0,205,191,110,0,53,194,4,0,81,40,45,254,35,102,143,255,12,108,198,255,16,27,232,255,252,71,186,1,176,110,114,0,142,3,117,1,113,77,142,0,19,156,197,1,92,47,252,0,53,232,22,1,54,18,235,0,46,35,189,255,236,212,129,0,2,96,208,254,200,238,199,255,59,175,164,255,146,43,231,0,194,217,52,255,3,223,12,0,138,54,178,254,85,235,207,0,232,207,34,0,49,52,50,255,166,113,89,255,10,45,216,255,62,173,28,0,111,165,246,0,118,115,91,255,128,84,60,0,167,144,203,0,87,13,243,0,22,30,228,1,177,113,146,255,129,170,230,254,252,153,129,255,145,225,43,0,70,231,5,255,122,105,126,254,86,246,148,255,110,37,154,254,209,3,91,0,68,145,62,0,228,16,165,255,55,221,249,254,178,210,91,0,83,146,226,254,69,146,186,0,93,210,104,254,16,25,173,0,231,186,38,0,189,122,140,255,251,13,112,255,105,110,93,0,251,72,170,0,192,23,223,255,24,3,202,1,225,93,228,0,153,147,199,254,109,170,22,0,248,101,246,255,178,124,12,255,178,254,102,254,55,4,65,0,125,214,180,0,183,96,147,0,45,117,23,254,132,191,249,0,143,176,203,254,136,183,54,255,146,234,177,0,146,101,86,255,44,123,143,1,33,209,152,0,192,90,41,254,83,15,125,255,213,172,82,0,215,169,144,0,16,13,34,0,32,209,100,255,84,18,249,1,197,17,236,255,217,186,230,0,49,160,176,255,111,118,97,255,237,104,235,0,79,59,92,254,69,249,11,255,35,172,74,1,19,118,68,0,222,124,165,255,180,66,35,255,86,174,246,0,43,74,111,255,126,144,86,255,228,234,91,0,242,213,24,254,69,44,235,255,220,180,35,0,8,248,7,255,102,47,92,255,240,205,102,255,113,230,171,1,31,185,201,255,194,246,70,255,122,17,187,0,134,70,199,255,149,3,150,255,117,63,103,0,65,104,123,255,212,54,19,1,6,141,88,0,83,134,243,255,136,53,103,0,169,27,180,0,177,49,24,0,111,54,167,0,195,61,215,255,31,1,108,1,60,42,70,0,185,3,162,255,194,149,40,255,246,127,38,254,190,119,38,255,61,119,8,1,96,161,219,255,42,203,221,1,177,242,164,255,245,159,10,0,116,196,0,0,5,93,205,254,128,127,179,0,125,237,246,255,149,162,217,255,87,37,20,254,140,238,192,0,9,9,193,0,97,1,226,0,29,38,10,0,0,136,63,255,229,72,210,254,38,134,92,255,78,218,208,1,104,36,84,255,12,5,193,255,242,175,61,255,191,169,46,1,179,147,147,255,113,190,139,254,125,172,31,0,3,75,252,254,215,36,15,0,193,27,24,1,255,69,149,255,110,129,118,0,203,93,249,0,138,137,64,254,38,70,6,0,153,116,222,0,161,74,123,0,193,99,79,255,118,59,94,255,61,12,43,1,146,177,157,0,46,147,191,0,16,255,38,0,11,51,31,1,60,58,98,255,111,194,77,1,154,91,244,0,140,40,144,1,173,10,251,0,203,209,50,254,108,130,78,0,228,180,90,0,174,7,250,0,31,174,60,0,41,171,30,0,116,99,82,255,118,193,139,255,187,173,198,254,218,111,56,0,185,123,216,0,249,158,52,0,52,180,93,255,201,9,91,255,56,45,166,254,132,155,203,255,58,232,110,0,52,211,89,255,253,0,162,1,9,87,183,0,145,136,44,1,94,122,245,0,85,188,171,1,147,92,198,0,0,8,104,0,30,95,174,0,221,230,52,1,247,247,235,255,137,174,53,255,35,21,204,255,71,227,214,1,232,82,194,0,11,48,227,255,170,73,184,255,198,251,252,254,44,112,34,0,131,101,131,255,72,168,187,0,132,135,125,255,138,104,97,255,238,184,168,255,243,104,84,255,135,216,226,255,139,144,237,0,188,137,150,1,80,56,140,255,86,169,167,255,194,78,25,255,220,17,180,255,17,13,193,0,117,137,212,255,141,224,151,0,49,244,175,0,193,99,175,255,19,99,154,1,255,65,62,255,156,210,55,255,242,244,3,255,250,14,149,0,158,88,217,255,157,207,134,254,251,232,28,0,46,156,251,255,171,56,184,255,239,51,234,0,142,138,131,255,25,254,243,1,10,201,194,0,63,97,75,0,210,239,162,0,192,200,31,1,117,214,243,0,24,71,222,254,54,40,232,255,76,183,111,254,144,14,87,255,214,79,136,255,216,196,212,0,132,27,140,254,131,5,253,0,124,108,19,255,28,215,75,0,76,222,55,254,233,182,63,0,68,171,191,254,52,111,222,255,10,105,77,255,80,170,235,0,143,24,88,255,45,231,121,0,148,129,224,1,61,246,84,0,253,46,219,255,239,76,33,0,49,148,18,254,230,37,69,0,67,134,22,254,142,155,94,0,31,157,211,254,213,42,30,255,4,228,247,254,252,176,13,255,39,0,31,254,241,244,255,255,170,45,10,254,253,222,249,0,222,114,132,0,255,47,6,255,180,163,179,1,84,94,151,255,89,209,82,254,229,52,169,255,213,236,0,1,214,56,228,255,135,119,151,255,112,201,193,0,83,160,53,254,6,151,66,0,18,162,17,0,233,97,91,0,131,5,78,1,181,120,53,255,117,95,63,255,237,117,185,0,191,126,136,255,144,119,233,0,183,57,97,1,47,201,187,255,167,165,119,1,45,100,126,0,21,98,6,254,145,150,95,255,120,54,152,0,209,98,104,0,143,111,30,254,184,148,249,0,235,216,46,0,248,202,148,255,57,95,22,0,242,225,163,0,233,247,232,255,71,171,19,255,103,244,49,255,84,103,93,255,68,121,244,1,82,224,13,0,41,79,43,255,249,206,167,255,215,52,21,254,192,32,22,255,247,111,60,0,101,74,38,255,22,91,84,254,29,28,13,255,198,231,215,254,244,154,200,0,223,137,237,0,211,132,14,0,95,64,206,255,17,62,247,255,233,131,121,1,93,23,77,0,205,204,52,254,81,189,136,0,180,219,138,1,143,18,94,0,204,43,140,254,188,175,219,0,111,98,143,255,151,63,162,255,211,50,71,254,19,146,53,0,146,45,83,254,178,82,238,255,16,133,84,255,226,198,93,255,201,97,20,255,120,118,35,255,114,50,231,255,162,229,156,255,211,26,12,0,114,39,115,255,206,212,134,0,197,217,160,255,116,129,94,254,199,215,219,255,75,223,249,1,253,116,181,255,232,215,104,255,228,130,246,255,185,117,86,0,14,5,8,0,239,29,61,1,237,87,133,255,125,146,137,254,204,168,223,0,46,168,245,0,154,105,22,0,220,212,161,255,107,69,24,255,137,218,181,255,241,84,198,255,130,122,211,255,141,8,153,255,190,177,118,0,96,89,178,0,255,16,48,254,122,96,105,255,117,54,232,255,34,126,105,255,204,67,166,0,232,52,138,255,211,147,12,0,25,54,7,0,44,15,215,254,51,236,45,0,190,68,129,1,106,147,225,0,28,93,45,254,236,141,15,255,17,61,161,0,220,115,192,0,236,145,24,254,111,168,169,0,224,58,63,255,127,164,188,0,82,234,75,1,224,158,134,0,209,68,110,1,217,166,217,0,70,225,166,1,187,193,143,255,16,7,88,255,10,205,140,0,117,192,156,1,17,56,38,0,27,124,108,1,171,215,55,255,95,253,212,0,155,135,168,255,246,178,153,254,154,68,74,0,232,61,96,254,105,132,59,0,33,76,199,1,189,176,130,255,9,104,25,254,75,198,102,255,233,1,112,0,108,220,20,255,114,230,70,0,140,194,133,255,57,158,164,254,146,6,80,255,169,196,97,1,85,183,130,0,70,158,222,1,59,237,234,255,96,25,26,255,232,175,97,255,11,121,248,254,88,35,194,0,219,180,252,254,74,8,227,0,195,227,73,1,184,110,161,255,49,233,164,1,128,53,47,0,82,14,121,255,193,190,58,0,48,174,117,255,132,23,32,0,40,10,134,1,22,51,25,255,240,11,176,255,110,57,146,0,117,143,239,1,157,101,118,255,54,84,76,0,205,184,18,255,47,4,72,255,78,112,85,255,193,50,66,1,93,16,52,255,8,105,134,0,12,109,72,255,58,156,251,0,144,35,204,0,44,160,117,254,50,107,194,0,1,68,165,255,111,110,162,0,158,83,40,254,76,214,234,0,58,216,205,255,171,96,147,255,40,227,114,1,176,227,241,0,70,249,183,1,136,84,139,255,60,122,247,254,143,9,117,255,177,174,137,254,73,247,143,0,236,185,126,255,62,25,247,255,45,64,56,255,161,244,6,0,34,57,56,1,105,202,83,0,128,147,208,0,6,103,10,255,74,138,65,255,97,80,100,255,214,174,33,255,50,134,74,255,110,151,130,254,111,84,172,0,84,199,75,254,248,59,112,255,8,216,178,1,9,183,95,0,238,27,8,254,170,205,220,0,195,229,135,0,98,76,237,255,226,91,26,1,82,219,39,255,225,190,199,1,217,200,121,255,81,179,8,255,140,65,206,0,178,207,87,254,250,252,46,255,104,89,110,1,253,189,158,255,144,214,158,255,160,245,54,255,53,183,92,1,21,200,194,255,146,33,113,1,209,1,255,0,235,106,43,255,167,52,232,0,157,229,221,0,51,30,25,0,250,221,27,1,65,147,87,255,79,123,196,0,65,196,223,255,76,44,17,1,85,241,68,0,202,183,249,255,65,212,212,255,9,33,154,1,71,59,80,0,175,194,59,255,141,72,9,0,100,160,244,0,230,208,56,0,59,25,75,254,80,194,194,0,18,3,200,254,160,159,115,0,132,143,247,1,111,93,57,255,58,237,11,1,134,222,135,255,122,163,108,1,123,43,190,255,251,189,206,254,80,182,72,255,208,246,224,1,17,60,9,0,161,207,38,0,141,109,91,0,216,15,211,255,136,78,110,0,98,163,104,255,21,80,121,255,173,178,183,1,127,143,4,0,104,60,82,254,214,16,13,255,96,238,33,1,158,148,230,255,127,129,62,255,51,255,210,255,62,141,236,254,157,55,224,255,114,39,244,0,192,188,250,255,228,76,53,0,98,84,81,255,173,203,61,254,147,50,55,255,204,235,191,0,52,197,244,0,88,43,211,254,27,191,119,0,188,231,154,0,66,81,161,0,92,193,160,1,250,227,120,0,123,55,226,0,184,17,72,0,133,168,10,254,22,135,156,255,41,25,103,255,48,202,58,0,186,149,81,255,188,134,239,0,235,181,189,254,217,139,188,255,74,48,82,0,46,218,229,0,189,253,251,0,50,229,12,255,211,141,191,1,128,244,25,255,169,231,122,254,86,47,189,255,132,183,23,255,37,178,150,255,51,137,253,0,200,78,31,0,22,105,50,0,130,60,0,0,132,163,91,254,23,231,187,0,192,79,239,0,157,102,164,255,192,82,20,1,24,181,103,255,240,9,234,0,1,123,164,255,133,233,0,255,202,242,242,0,60,186,245,0,241,16,199,255,224,116,158,254,191,125,91,255,224,86,207,0,121,37,231,255,227,9,198,255,15,153,239,255,121,232,217,254,75,112,82,0,95,12,57,254,51,214,105,255,148,220,97,1,199,98,36,0,156,209,12,254,10,212,52,0,217,180,55,254,212,170,232,255,216,20,84,255,157,250,135,0,157,99,127,254,1,206,41,0,149,36,70,1,54,196,201,255,87,116,0,254,235,171,150,0,27,163,234,0,202,135,180,0,208,95,0,254,123,156,93,0,183,62,75,0,137,235,182,0,204,225,255,255,214,139,210,255,2,115,8,255,29,12,111,0,52,156,1,0,253,21,251,255,37,165,31,254,12,130,211,0,106,18,53,254,42,99,154,0,14,217,61,254,216,11,92,255,200,197,112,254,147,38,199,0,36,252,120,254,107,169,77,0,1,123,159,255,207,75,102,0,163,175,196,0,44,1,240,0,120,186,176,254,13,98,76,255,237,124,241,255,232,146,188,255,200,96,224,0,204,31,41,0,208,200,13,0,21,225,96,255,175,156,196,0,247,208,126,0,62,184,244,254,2,171,81,0,85,115,158,0,54,64,45,255,19,138,114,0,135,71,205,0,227,47,147,1,218,231,66,0,253,209,28,0,244,15,173,255,6,15,118,254,16,150,208,255,185,22,50,255,86,112,207,255,75,113,215,1,63,146,43,255,4,225,19,254,227,23,62,255,14,255,214,254,45,8,205,255,87,197,151,254,210,82,215,255,245,248,247,255,128,248,70,0,225,247,87,0,90,120,70,0,213,245,92,0,13,133,226,0,47,181,5,1,92,163,105,255,6,30,133,254,232,178,61,255,230,149,24,255,18,49,158,0,228,100,61,254,116,243,251,255,77,75,92,1,81,219,147,255,76,163,254,254,141,213,246,0,232,37,152,254,97,44,100,0,201,37,50,1,212,244,57,0,174,171,183,255,249,74,112,0,166,156,30,0,222,221,97,255,243,93,73,254,251,101,100,255,216,217,93,255,254,138,187,255,142,190,52,255,59,203,177,255,200,94,52,0,115,114,158,255,165,152,104,1,126,99,226,255,118,157,244,1,107,200,16,0,193,90,229,0,121,6,88,0,156,32,93,254,125,241,211,255,14,237,157,255,165,154,21,255,184,224,22,255,250,24,152,255,113,77,31,0,247,171,23,255,237,177,204,255,52,137,145,255,194,182,114,0,224,234,149,0,10,111,103,1,201,129,4,0,238,142,78,0,52,6,40,255,110,213,165,254,60,207,253,0,62,215,69,0,96,97,0,255,49,45,202,0,120,121,22,255,235,139,48,1,198,45,34,255,182,50,27,1,131,210,91,255,46,54,128,0,175,123,105,255,198,141,78,254,67,244,239,255,245,54,103,254,78,38,242,255,2,92,249,254,251,174,87,255,139,63,144,0,24,108,27,255,34,102,18,1,34,22,152,0,66,229,118,254,50,143,99,0,144,169,149,1,118,30,152,0,178,8,121,1,8,159,18,0,90,101,230,255,129,29,119,0,68,36,11,1,232,183,55,0,23,255,96,255,161,41,193,255,63,139,222,0,15,179,243,0,255,100,15,255,82,53,135,0,137,57,149,1,99,240,170,255,22,230,228,254,49,180,82,255,61,82,43,0,110,245,217,0,199,125,61,0,46,253,52,0,141,197,219,0,211,159,193,0,55,121,105,254,183,20,129,0,169,119,170,255,203,178,139,255,135,40,182,255,172,13,202,255,65,178,148,0,8,207,43,0,122,53,127,1,74,161,48,0,227,214,128,254,86,11,243,255,100,86,7,1,245,68,134,255,61,43,21,1,152,84,94,255,190,60,250,254,239,118,232,255,214,136,37,1,113,76,107,255,93,104,100,1,144,206,23,255,110,150,154,1,228,103,185,0,218,49,50,254,135,77,139,255,185,1,78,0,0,161,148,255,97,29,233,255,207,148,149,255,160,168,0,0,91,128,171,255,6,28,19,254,11,111,247,0,39,187,150,255,138,232,149,0,117,62,68,255,63,216,188,255,235,234,32,254,29,57,160,255,25,12,241,1,169,60,191,0,32,131,141,255,237,159,123,255,94,197,94,254,116,254,3,255,92,179,97,254,121,97,92,255,170,112,14,0,21,149,248,0,248,227,3,0,80,96,109,0,75,192,74,1,12,90,226,255,161,106,68,1,208,114,127,255,114,42,255,254,74,26,74,255,247,179,150,254,121,140,60,0,147,70,200,255,214,40,161,255,161,188,201,255,141,65,135,255,242,115,252,0,62,47,202,0,180,149,255,254,130,55,237,0,165,17,186,255,10,169,194,0,156,109,218,255,112,140,123,255,104,128,223,254,177,142,108,255,121,37,219,255,128,77,18,255,111,108,23,1,91,192,75,0,174,245,22,255,4,236,62,255,43,64,153,1,227,173,254,0,237,122,132,1,127,89,186,255,142,82,128,254,252,84,174,0,90,179,177,1,243,214,87,255,103,60,162,255,208,130,14,255,11,130,139,0,206,129,219,255,94,217,157,255,239,230,230,255,116,115,159,254,164,107,95,0,51,218,2,1,216,125,198,255,140,202,128,254,11,95,68,255,55,9,93,254,174,153,6,255,204,172,96,0,69,160,110,0,213,38,49,254,27,80,213,0,118,125,114,0,70,70,67,255,15,142,73,255,131,122,185,255,243,20,50,254,130,237,40,0,210,159,140,1,197,151,65,255,84,153,66,0,195,126,90,0,16,238,236,1,118,187,102,255,3,24,133,255,187,69,230,0,56,197,92,1,213,69,94,255,80,138,229,1,206,7,230,0,222,111,230,1,91,233,119,255,9,89,7,1,2,98,1,0,148,74,133,255,51,246,180,255,228,177,112,1,58,189,108,255,194,203,237,254,21,209,195,0,147,10,35,1,86,157,226,0,31,163,139,254,56,7,75,255,62,90,116,0,181,60,169,0,138,162,212,254,81,167,31,0,205,90,112,255,33,112,227,0,83,151,117,1,177,224,73,255,174,144,217,255,230,204,79,255,22,77,232,255,114,78,234,0,224,57,126,254,9,49,141,0,242,147,165,1,104,182,140,255,167,132,12,1,123,68,127,0,225,87,39,1,251,108,8,0,198,193,143,1,121,135,207,255,172,22,70,0,50,68,116,255,101,175,40,255,248,105,233,0,166,203,7,0,110,197,218,0,215,254,26,254,168,226,253,0,31,143,96,0,11,103,41,0,183,129,203,254,100,247,74,255,213,126,132,0,210,147,44,0,199,234,27,1,148,47,181,0,155,91,158,1,54,105,175,255,2,78,145,254,102,154,95,0,128,207,127,254,52,124,236,255,130,84,71,0,221,243,211,0,152,170,207,0,222,106,199,0,183,84,94,254,92,200,56,255,138,182,115,1,142,96,146,0,133,136,228,0,97,18,150,0,55,251,66,0,140,102,4,0,202,103,151,0,30,19,248,255,51,184,207,0,202,198,89,0,55,197,225,254,169,95,249,255,66,65,68,255,188,234,126,0,166,223,100,1,112,239,244,0,144,23,194,0,58,39,182,0,244,44,24,254,175,68,179,255,152,118,154,1,176,162,130,0,217,114,204,254,173,126,78,255,33,222,30,255,36,2,91,255,2,143,243,0,9,235,215,0,3,171,151,1,24,215,245,255,168,47,164,254,241,146,207,0,69,129,180,0,68,243,113,0,144,53,72,254,251,45,14,0,23,110,168,0,68,68,79,255,110,70,95,254,174,91,144,255,33,206,95,255,137,41,7,255,19,187,153,254,35,255,112,255,9,145,185,254,50,157,37,0,11,112,49,1,102,8,190,255,234,243,169,1,60,85,23,0,74,39,189,0,116,49,239,0,173,213,210,0,46,161,108,255,159,150,37,0,196,120,185,255,34,98,6,255,153,195,62,255,97,230,71,255,102,61,76,0,26,212,236,255,164,97,16,0,198,59,146,0,163,23,196,0,56,24,61,0,181,98,193,0,251,147,229,255,98,189,24,255,46,54,206,255,234,82,246,0,183,103,38,1,109,62,204,0,10,240,224,0,146,22,117,255,142,154,120,0,69,212,35,0,208,99,118,1,121,255,3,255,72,6,194,0,117,17,197,255,125,15,23,0,154,79,153,0,214,94,197,255,185,55,147,255,62,254,78,254,127,82,153,0,110,102,63,255,108,82,161,255,105,187,212,1,80,138,39,0,60,255,93,255,72,12,186,0,210,251,31,1,190,167,144,255,228,44,19,254,128,67,232,0,214,249,107,254,136,145,86,255,132,46,176,0,189,187,227,255,208,22,140,0,217,211,116,0,50,81,186,254,139,250,31,0,30,64,198,1,135,155,100,0,160,206,23,254,187,162,211,255,16,188,63,0,254,208,49,0,85,84,191,0,241,192,242,255,153,126,145,1,234,162,162,255,230,97,216,1,64,135,126,0,190,148,223,1,52,0,43,255,28,39,189,1,64,136,238,0,175,196,185,0,98,226,213,255,127,159,244,1,226,175,60,0,160,233,142,1,180,243,207,255,69,152,89,1,31,101,21,0,144,25,164,254,139,191,209,0,91,25,121,0,32,147,5,0,39,186,123,255,63,115,230,255,93,167,198,255,143,213,220,255,179,156,19,255,25,66,122,0,214,160,217,255,2,45,62,255,106,79,146,254,51,137,99,255,87,100,231,255,175,145,232,255,101,184,1,255,174,9,125,0,82,37,161,1,36,114,141,255,48,222,142,255,245,186,154,0,5,174,221,254,63,114,155,255,135,55,160,1,80,31,135,0,126,250,179,1,236,218,45,0,20,28,145,1,16,147,73,0,249,189,132,1,17,189,192,255,223,142,198,255,72,20,15,255,250,53,237,254,15,11,18,0,27,211,113,254,213,107,56,255,174,147,146,255,96,126,48,0,23,193,109,1,37,162,94,0,199,157,249,254,24,128,187,255,205,49,178,254,93,164,42,255,43,119,235,1,88,183,237,255,218,210,1,255,107,254,42,0,230,10,99,255,162,0,226,0,219,237,91,0,129,178,203,0,208,50,95,254,206,208,95,255,247,191,89,254,110,234,79,255,165,61,243,0,20,122,112,255,246,246,185,254,103,4,123,0,233,99,230,1,219,91,252,255,199,222,22,255,179,245,233,255,211,241,234,0,111,250,192,255,85,84,136,0,101,58,50,255,131,173,156,254,119,45,51,255,118,233,16,254,242,90,214,0,94,159,219,1,3,3,234,255,98,76,92,254,80,54,230,0,5,228,231,254,53,24,223,255,113,56,118,1,20,132,1,255,171,210,236,0,56,241,158,255,186,115,19,255,8,229,174,0,48,44,0,1,114,114,166,255,6,73,226,255,205,89,244,0,137,227,75,1,248,173,56,0,74,120,246,254,119,3,11,255,81,120,198,255,136,122,98,255,146,241,221,1,109,194,78,255,223,241,70,1,214,200,169,255,97,190,47,255,47,103,174,255,99,92,72,254,118,233,180,255,193,35,233,254,26,229,32,255,222,252,198,0,204,43,71,255,199,84,172,0,134,102,190,0,111,238,97,254,230,40,230,0,227,205,64,254,200,12,225,0,166,25,222,0,113,69,51,255,143,159,24,0,167,184,74,0,29,224,116,254,158,208,233,0,193,116,126,255,212,11,133,255,22,58,140,1,204,36,51,255,232,30,43,0,235,70,181,255,64,56,146,254,169,18,84,255,226,1,13,255,200,50,176,255,52,213,245,254,168,209,97,0,191,71,55,0,34,78,156,0,232,144,58,1,185,74,189,0,186,142,149,254,64,69,127,255,161,203,147,255,176,151,191,0,136,231,203,254,163,182,137,0,161,126,251,254,233,32,66,0,68,207,66,0,30,28,37,0,93,114,96,1,254,92,247,255,44,171,69,0,202,119,11,255,188,118,50,1,255,83,136,255,71,82,26,0,70,227,2,0,32,235,121,1,181,41,154,0,71,134,229,254,202,255,36,0,41,152,5,0,154,63,73,255,34,182,124,0,121,221,150,255,26,204,213,1,41,172,87,0,90,157,146,255,109,130,20,0,71,107,200,255,243,102,189,0,1,195,145,254,46,88,117,0,8,206,227,0,191,110,253,255,109,128,20,254,134,85,51,255,137,177,112,1,216,34,22,255,131,16,208,255,121,149,170,0,114,19,23,1,166,80,31,255,113,240,122,0,232,179,250,0,68,110,180,254,210,170,119,0,223,108,164,255,207,79,233,255,27,229,226,254,209,98,81,255,79,68,7,0,131,185,100,0,170,29,162,255,17,162,107,255,57,21,11,1,100,200,181,255,127,65,166,1,165,134,204,0,104,167,168,0,1,164,79,0,146,135,59,1,70,50,128,255,102,119,13,254,227,6,135,0,162,142,179,255,160,100,222,0,27,224,219,1,158,93,195,255,234,141,137,0,16,24,125,255,238,206,47,255,97,17,98,255,116,110,12,255,96,115,77,0,91,227,232,255,248,254,79,255,92,229,6,254,88,198,139,0,206,75,129,0,250,77,206,255,141,244,123,1,138,69,220,0,32,151,6,1,131,167,22,255,237,68,167,254,199,189,150,0,163,171,138,255,51,188,6,255,95,29,137,254,148,226,179,0,181,107,208,255,134,31,82,255,151,101,45,255,129,202,225,0,224,72,147,0,48,138,151,255,195,64,206,254,237,218,158,0,106,29,137,254,253,189,233,255,103,15,17,255,194,97,255,0,178,45,169,254,198,225,155,0,39,48,117,255,135,106,115,0,97,38,181,0,150,47,65,255,83,130,229,254,246,38,129,0,92,239,154,254,91,99,127,0,161,111,33,255,238,217,242,255,131,185,195,255,213,191,158,255,41,150,218,0,132,169,131,0,89,84,252,1,171,70,128,255,163,248,203,254,1,50,180,255,124,76,85,1,251,111,80,0,99,66,239,255,154,237,182,255,221,126,133,254,74,204,99,255,65,147,119,255,99,56,167,255,79,248,149,255,116,155,228,255,237,43,14,254,69,137,11,255,22,250,241,1,91,122,143,255,205,249,243,0,212,26,60,255,48,182,176,1,48,23,191,255,203,121,152,254,45,74,213,255,62,90,18,254,245,163,230,255,185,106,116,255,83,35,159,0,12,33,2,255,80,34,62,0,16,87,174,255,173,101,85,0,202,36,81,254,160,69,204,255,64,225,187,0,58,206,94,0,86,144,47,0,229,86,245,0,63,145,190,1,37,5,39,0,109,251,26,0,137,147,234,0,162,121,145,255,144,116,206,255,197,232,185,255,183,190,140,255,73,12,254,255,139,20,242,255,170,90,239,255,97,66,187,255,245,181,135,254,222,136,52,0,245,5,51,254,203,47,78,0,152,101,216,0,73,23,125,0,254,96,33,1,235,210,73,255,43,209,88,1,7,129,109,0,122,104,228,254,170,242,203,0,242,204,135,255,202,28,233,255,65,6,127,0,159,144,71,0,100,140,95,0,78,150,13,0,251,107,118,1,182,58,125,255,1,38,108,255,141,189,209,255,8,155,125,1,113,163,91,255,121,79,190,255,134,239,108,255,76,47,248,0,163,228,239,0,17,111,10,0,88,149,75,255,215,235,239,0,167,159,24,255,47,151,108,255,107,209,188,0,233,231,99,254,28,202,148,255,174,35,138,255,110,24,68,255,2,69,181,0,107,102,82,0,102,237,7,0,92,36,237,255,221,162,83,1,55,202,6,255,135,234,135,255,24,250,222,0,65,94,168,254,245,248,210,255,167,108,201,254,255,161,111,0,205,8,254,0,136,13,116,0,100,176,132,255,43,215,126,255,177,133,130,255,158,79,148,0,67,224,37,1,12,206,21,255,62,34,110,1,237,104,175,255,80,132,111,255,142,174,72,0,84,229,180,254,105,179,140,0,64,248,15,255,233,138,16,0,245,67,123,254,218,121,212,255,63,95,218,1,213,133,137,255,143,182,82,255,48,28,11,0,244,114,141,1,209,175,76,255,157,181,150,255,186,229,3,255,164,157,111,1,231,189,139,0,119,202,190,255,218,106,64,255,68,235,63,254,96,26,172,255,187,47,11,1,215,18,251,255,81,84,89,0,68,58,128,0,94,113,5,1,92,129,208,255,97,15,83,254,9,28,188,0,239,9,164,0,60,205,152,0,192,163,98,255,184,18,60,0,217,182,139,0,109,59,120,255,4,192,251,0,169,210,240,255,37,172,92,254,148,211,245,255,179,65,52,0,253,13,115,0,185,174,206,1,114,188,149,255,237,90,173,0,43,199,192,255,88,108,113,0,52,35,76,0,66,25,148,255,221,4,7,255,151,241,114,255,190,209,232,0,98,50,199,0,151,150,213,255,18,74,36,1,53,40,7,0,19,135,65,255,26,172,69,0,174,237,85,0,99,95,41,0,3,56,16,0,39,160,177,255,200,106,218,254,185,68,84,255,91,186,61,254,67,143,141,255,13,244,166,255,99,114,198,0,199,110,163,255,193,18,186,0,124,239,246,1,110,68,22,0,2,235,46,1,212,60,107,0,105,42,105,1,14,230,152,0,7,5,131,0,141,104,154,255,213,3,6,0,131,228,162,255,179,100,28,1,231,123,85,255,206,14,223,1,253,96,230,0,38,152,149,1,98,137,122,0,214,205,3,255,226,152,179,255,6,133,137,0,158,69,140,255,113,162,154,255,180,243,172,255,27,189,115,255,143,46,220,255,213,134,225,255,126,29,69,0,188,43,137,1,242,70,9,0,90,204,255,255,231,170,147,0,23,56,19,254,56,125,157,255,48,179,218,255,79,182,253,255,38,212,191,1,41,235,124,0,96,151,28,0,135,148,190,0,205,249,39,254,52,96,136,255,212,44,136,255,67,209,131,255,252,130,23,255,219,128,20,255,198,129,118,0,108,101,11,0,178,5,146,1,62,7,100,255,181,236,94,254,28,26,164,0,76,22,112,255,120,102,79,0,202,192,229,1,200,176,215,0,41,64,244,255,206,184,78,0,167,45,63,1,160,35,0,255,59,12,142,255,204,9,144,255,219,94,229,1,122,27,112,0,189,105,109,255,64,208,74,255,251,127,55,1,2,226,198,0,44,76,209,0,151,152,77,255,210,23,46,1,201,171,69,255,44,211,231,0,190,37,224,255,245,196,62,255,169,181,222,255,34,211,17,0,119,241,197,255,229,35,152,1,21,69,40,255,178,226,161,0,148,179,193,0,219,194,254,1,40,206,51,255,231,92,250,1,67,153,170,0,21,148,241,0,170,69,82,255,121,18,231,255,92,114,3,0,184,62,230,0,225,201,87,255,146,96,162,255,181,242,220,0,173,187,221,1,226,62,170,255,56,126,217,1,117,13,227,255,179,44,239,0,157,141,155,255,144,221,83,0,235,209,208,0,42,17,165,1,251,81,133,0,124,245,201,254,97,211,24,255,83,214,166,0,154,36,9,255,248,47,127,0,90,219,140,255,161,217,38,254,212,147,63,255,66,84,148,1,207,3,1,0,230,134,89,1,127,78,122,255,224,155,1,255,82,136,74,0,178,156,208,255,186,25,49,255,222,3,210,1,229,150,190,255,85,162,52,255,41,84,141,255,73,123,84,254,93,17,150,0,119,19,28,1,32,22,215,255,28,23,204,255,142,241,52,255,228,52,125,0,29,76,207,0,215,167,250,254,175,164,230,0,55,207,105,1,109,187,245,255,161,44,220,1,41,101,128,255,167,16,94,0,93,214,107,255,118,72,0,254,80,61,234,255,121,175,125,0,139,169,251,0,97,39,147,254,250,196,49,255,165,179,110,254,223,70,187,255,22,142,125,1,154,179,138,255,118,176,42,1,10,174,153,0,156,92,102,0,168,13,161,255,143,16,32,0,250,197,180,255,203,163,44,1,87,32,36,0,161,153,20,255,123,252,15,0,25,227,80,0,60,88,142,0,17,22,201,1,154,205,77,255,39,63,47,0,8,122,141,0,128,23,182,254,204,39,19,255],"i8",ALLOC_NONE,Runtime.GLOBAL_BASE+20480);allocate([4,112,29,255,23,36,140,255,210,234,116,254,53,50,63,255,121,171,104,255,160,219,94,0,87,82,14,254,231,42,5,0,165,139,127,254,86,78,38,0,130,60,66,254,203,30,45,255,46,196,122,1,249,53,162,255,136,143,103,254,215,210,114,0,231,7,160,254,169,152,42,255,111,45,246,0,142,131,135,255,131,71,204,255,36,226,11,0,0,28,242,255,225,138,213,255,247,46,216,254,245,3,183,0,108,252,74,1,206,26,48,255,205,54,246,255,211,198,36,255,121,35,50,0,52,216,202,255,38,139,129,254,242,73,148,0,67,231,141,255,42,47,204,0,78,116,25,1,4,225,191,255,6,147,228,0,58,88,177,0,122,165,229,255,252,83,201,255,224,167,96,1,177,184,158,255,242,105,179,1,248,198,240,0,133,66,203,1,254,36,47,0,45,24,115,255,119,62,254,0,196,225,186,254,123,141,172,0,26,85,41,255,226,111,183,0,213,231,151,0,4,59,7,255,238,138,148,0,66,147,33,255,31,246,141,255,209,141,116,255,104,112,31,0,88,161,172,0,83,215,230,254,47,111,151,0,45,38,52,1,132,45,204,0,138,128,109,254,233,117,134,255,243,190,173,254,241,236,240,0,82,127,236,254,40,223,161,255,110,182,225,255,123,174,239,0,135,242,145,1,51,209,154,0,150,3,115,254,217,164,252,255,55,156,69,1,84,94,255,255,232,73,45,1,20,19,212,255,96,197,59,254,96,251,33,0,38,199,73,1,64,172,247,255,117,116,56,255,228,17,18,0,62,138,103,1,246,229,164,255,244,118,201,254,86,32,159,255,109,34,137,1,85,211,186,0,10,193,193,254,122,194,177,0,122,238,102,255,162,218,171,0,108,217,161,1,158,170,34,0,176,47,155,1,181,228,11,255,8,156,0,0,16,75,93,0,206,98,255,1,58,154,35,0,12,243,184,254,67,117,66,255,230,229,123,0,201,42,110,0,134,228,178,254,186,108,118,255,58,19,154,255,82,169,62,255,114,143,115,1,239,196,50,255,173,48,193,255,147,2,84,255,150,134,147,254,95,232,73,0,109,227,52,254,191,137,10,0,40,204,30,254,76,52,97,255,164,235,126,0,254,124,188,0,74,182,21,1,121,29,35,255,241,30,7,254,85,218,214,255,7,84,150,254,81,27,117,255,160,159,152,254,66,24,221,255,227,10,60,1,141,135,102,0,208,189,150,1,117,179,92,0,132,22,136,255,120,199,28,0,21,129,79,254,182,9,65,0,218,163,169,0,246,147,198,255,107,38,144,1,78,175,205,255,214,5,250,254,47,88,29,255,164,47,204,255,43,55,6,255,131,134,207,254,116,100,214,0,96,140,75,1,106,220,144,0,195,32,28,1,172,81,5,255,199,179,52,255,37,84,203,0,170,112,174,0,11,4,91,0,69,244,27,1,117,131,92,0,33,152,175,255,140,153,107,255,251,135,43,254,87,138,4,255,198,234,147,254,121,152,84,255,205,101,155,1,157,9,25,0,72,106,17,254,108,153,0,255,189,229,186,0,193,8,176,255,174,149,209,0,238,130,29,0,233,214,126,1,61,226,102,0,57,163,4,1,198,111,51,255,45,79,78,1,115,210,10,255,218,9,25,255,158,139,198,255,211,82,187,254,80,133,83,0,157,129,230,1,243,133,134,255,40,136,16,0,77,107,79,255,183,85,92,1,177,204,202,0,163,71,147,255,152,69,190,0,172,51,188,1,250,210,172,255,211,242,113,1,89,89,26,255,64,66,111,254,116,152,42,0,161,39,27,255,54,80,254,0,106,209,115,1,103,124,97,0,221,230,98,255,31,231,6,0,178,192,120,254,15,217,203,255,124,158,79,0,112,145,247,0,92,250,48,1,163,181,193,255,37,47,142,254,144,189,165,255,46,146,240,0,6,75,128,0,41,157,200,254,87,121,213,0,1,113,236,0,5,45,250,0,144,12,82,0,31,108,231,0,225,239,119,255,167,7,189,255,187,228,132,255,110,189,34,0,94,44,204,1,162,52,197,0,78,188,241,254,57,20,141,0,244,146,47,1,206,100,51,0,125,107,148,254,27,195,77,0,152,253,90,1,7,143,144,255,51,37,31,0,34,119,38,255,7,197,118,0,153,188,211,0,151,20,116,254,245,65,52,255,180,253,110,1,47,177,209,0,161,99,17,255,118,222,202,0,125,179,252,1,123,54,126,255,145,57,191,0,55,186,121,0,10,243,138,0,205,211,229,255,125,156,241,254,148,156,185,255,227,19,188,255,124,41,32,255,31,34,206,254,17,57,83,0,204,22,37,255,42,96,98,0,119,102,184,1,3,190,28,0,110,82,218,255,200,204,192,255,201,145,118,0,117,204,146,0,132,32,98,1,192,194,121,0,106,161,248,1,237,88,124,0,23,212,26,0,205,171,90,255,248,48,216,1,141,37,230,255,124,203,0,254,158,168,30,255,214,248,21,0,112,187,7,255,75,133,239,255,74,227,243,255,250,147,70,0,214,120,162,0,167,9,179,255,22,158,18,0,218,77,209,1,97,109,81,255,244,33,179,255,57,52,57,255,65,172,210,255,249,71,209,255,142,169,238,0,158,189,153,255,174,254,103,254,98,33,14,0,141,76,230,255,113,139,52,255,15,58,212,0,168,215,201,255,248,204,215,1,223,68,160,255,57,154,183,254,47,231,121,0,106,166,137,0,81,136,138,0,165,43,51,0,231,139,61,0,57,95,59,254,118,98,25,255,151,63,236,1,94,190,250,255,169,185,114,1,5,250,58,255,75,105,97,1,215,223,134,0,113,99,163,1,128,62,112,0,99,106,147,0,163,195,10,0,33,205,182,0,214,14,174,255,129,38,231,255,53,182,223,0,98,42,159,255,247,13,40,0,188,210,177,1,6,21,0,255,255,61,148,254,137,45,129,255,89,26,116,254,126,38,114,0,251,50,242,254,121,134,128,255,204,249,167,254,165,235,215,0,202,177,243,0,133,141,62,0,240,130,190,1,110,175,255,0,0,20,146,1,37,210,121,255,7,39,130,0,142,250,84,255,141,200,207,0,9,95,104,255,11,244,174,0,134,232,126,0,167,1,123,254,16,193,149,255,232,233,239,1,213,70,112,255,252,116,160,254,242,222,220,255,205,85,227,0,7,185,58,0,118,247,63,1,116,77,177,255,62,245,200,254,63,18,37,255,107,53,232,254,50,221,211,0,162,219,7,254,2,94,43,0,182,62,182,254,160,78,200,255,135,140,170,0,235,184,228,0,175,53,138,254,80,58,77,255,152,201,2,1,63,196,34,0,5,30,184,0,171,176,154,0,121,59,206,0,38,99,39,0,172,80,77,254,0,134,151,0,186,33,241,254,94,253,223,255,44,114,252,0,108,126,57,255,201,40,13,255,39,229,27,255,39,239,23,1,151,121,51,255,153,150,248,0,10,234,174,255,118,246,4,254,200,245,38,0,69,161,242,1,16,178,150,0,113,56,130,0,171,31,105,0,26,88,108,255,49,42,106,0,251,169,66,0,69,93,149,0,20,57,254,0,164,25,111,0,90,188,90,255,204,4,197,0,40,213,50,1,212,96,132,255,88,138,180,254,228,146,124,255,184,246,247,0,65,117,86,255,253,102,210,254,254,121,36,0,137,115,3,255,60,24,216,0,134,18,29,0,59,226,97,0,176,142,71,0,7,209,161,0,189,84,51,254,155,250,72,0,213,84,235,255,45,222,224,0,238,148,143,255,170,42,53,255,78,167,117,0,186,0,40,255,125,177,103,255,69,225,66,0,227,7,88,1,75,172,6,0,169,45,227,1,16,36,70,255,50,2,9,255,139,193,22,0,143,183,231,254,218,69,50,0,236,56,161,1,213,131,42,0,138,145,44,254,136,229,40,255,49,63,35,255,61,145,245,255,101,192,2,254,232,167,113,0,152,104,38,1,121,185,218,0,121,139,211,254,119,240,35,0,65,189,217,254,187,179,162,255,160,187,230,0,62,248,14,255,60,78,97,0,255,247,163,255,225,59,91,255,107,71,58,255,241,47,33,1,50,117,236,0,219,177,63,254,244,90,179,0,35,194,215,255,189,67,50,255,23,135,129,0,104,189,37,255,185,57,194,0,35,62,231,255,220,248,108,0,12,231,178,0,143,80,91,1,131,93,101,255,144,39,2,1,255,250,178,0,5,17,236,254,139,32,46,0,204,188,38,254,245,115,52,255,191,113,73,254,191,108,69,255,22,69,245,1,23,203,178,0,170,99,170,0,65,248,111,0,37,108,153,255,64,37,69,0,0,88,62,254,89,148,144,255,191,68,224,1,241,39,53,0,41,203,237,255,145,126,194,255,221,42,253,255,25,99,151,0,97,253,223,1,74,115,49,255,6,175,72,255,59,176,203,0,124,183,249,1,228,228,99,0,129,12,207,254,168,192,195,255,204,176,16,254,152,234,171,0,77,37,85,255,33,120,135,255,142,194,227,1,31,214,58,0,213,187,125,255,232,46,60,255,190,116,42,254,151,178,19,255,51,62,237,254,204,236,193,0,194,232,60,0,172,34,157,255,189,16,184,254,103,3,95,255,141,233,36,254,41,25,11,255,21,195,166,0,118,245,45,0,67,213,149,255,159,12,18,255,187,164,227,1,160,25,5,0,12,78,195,1,43,197,225,0,48,142,41,254,196,155,60,255,223,199,18,1,145,136,156,0,252,117,169,254,145,226,238,0,239,23,107,0,109,181,188,255,230,112,49,254,73,170,237,255,231,183,227,255,80,220,20,0,194,107,127,1,127,205,101,0,46,52,197,1,210,171,36,255,88,3,90,255,56,151,141,0,96,187,255,255,42,78,200,0,254,70,70,1,244,125,168,0,204,68,138,1,124,215,70,0,102,66,200,254,17,52,228,0,117,220,143,254,203,248,123,0,56,18,174,255,186,151,164,255,51,232,208,1,160,228,43,255,249,29,25,1,68,190,63,0,103,230,9,106,133,174,103,187,114,243,110,60,58,245,79,165,127,82,14,81,140,104,5,155,171,217,131,31,25,205,224,91,152,47,138,66,145,68,55,113,207,251,192,181,165,219,181,233,91,194,86,57,241,17,241,89,164,130,63,146,213,94,28,171,152,170,7,216,1,91,131,18,190,133,49,36,195,125,12,85,116,93,190,114,254,177,222,128,167,6,220,155,116,241,155,193,193,105,155,228,134,71,190,239,198,157,193,15,204,161,12,36,111,44,233,45,170,132,116,74,220,169,176,92,218,136,249,118,82,81,62,152,109,198,49,168,200,39,3,176,199,127,89,191,243,11,224,198,71,145,167,213,81,99,202,6,103,41,41,20,133,10,183,39,56,33,27,46,252,109,44,77,19,13,56,83,84,115,10,101,187,10,106,118,46,201,194,129,133,44,114,146,161,232,191,162,75,102,26,168,112,139,75,194,163,81,108,199,25,232,146,209,36,6,153,214,133,53,14,244,112,160,106,16,22,193,164,25,8,108,55,30,76,119,72,39,181,188,176,52,179,12,28,57,74,170,216,78,79,202,156,91,243,111,46,104,238,130,143,116,111,99,165,120,20,120,200,132,8,2,199,140,250,255,190,144,235,108,80,164,247,163,249,190,242,120,113,198,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,138,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,109,97,99,115,104,97,53,49,50,50,53,54,0,99,117,114,118,101,50,53,53,49,57,120,115,97,108,115,97,50,48,112,111,108,121,49,51,48,53,0,83,45,62,98,117,102,108,101,110,32,60,61,32,66,76,65,75,69,50,66,95,66,76,79,67,75,66,89,84,69,83,0,99,114,121,112,116,111,95,103,101,110,101,114,105,99,104,97,115,104,47,98,108,97,107,101,50,98,47,114,101,102,47,98,108,97,107,101,50,98,45,114,101,102,46,99,0,99,114,121,112,116,111,95,103,101,110,101,114,105,99,104,97,115,104,95,98,108,97,107,101,50,98,95,95,102,105,110,97,108,0,111,117,116,108,101,110,32,60,61,32,85,73,78,84,56,95,77,65,88,0,99,114,121,112,116,111,95,103,101,110,101,114,105,99,104,97,115,104,47,98,108,97,107,101,50,98,47,114,101,102,47,103,101,110,101,114,105,99,104,97,115,104,95,98,108,97,107,101,50,98,46,99,0,99,114,121,112,116,111,95,103,101,110,101,114,105,99,104,97,115,104,95,98,108,97,107,101,50,98,0,107,101,121,108,101,110,32,60,61,32,85,73,78,84,56,95,77,65,88,0,99,114,121,112,116,111,95,103,101,110,101,114,105,99,104,97,115,104,95,98,108,97,107,101,50,98,95,115,97,108,116,95,112,101,114,115,111,110,97,108,0,99,114,121,112,116,111,95,103,101,110,101,114,105,99,104,97,115,104,95,98,108,97,107,101,50,98,95,105,110,105,116,0,99,114,121,112,116,111,95,103,101,110,101,114,105,99,104,97,115,104,95,98,108,97,107,101,50,98,95,105,110,105,116,95,115,97,108,116,95,112,101,114,115,111,110,97,108,0,99,114,121,112,116,111,95,103,101,110,101,114,105,99,104,97,115,104,95,98,108,97,107,101,50,98,95,102,105,110,97,108,0,115,104,97,53,49,50,0,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,98,108,97,107,101,50,98,0,120,50,53,53,49,57,98,108,97,107,101,50,98,0,112,111,108,121,49,51,48,53,0,36,97,114,103,111,110,50,105,0,36,118,61,0,36,109,61,0,44,116,61,0,44,112,61,0,36,97,114,103,111,110,50,105,36,118,61,0,36,97,114,103,111,110,50,105,36,0,97,114,103,111,110,50,105,0,46,47,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,0,36,55,36,0,99,117,114,118,101,50,53,53,49,57,0,120,115,97,108,115,97,50,48,112,111,108,121,49,51,48,53,0,115,105,112,104,97,115,104,50,52,0,101,100,50,53,53,49,57,0,237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,83,105,103,69,100,50,53,53,49,57,32,110,111,32,69,100,50,53,53,49,57,32,99,111,108,108,105,115,105,111,110,115,1,0,120,115,97,108,115,97,50,48,0,106,115,0,123,32,114,101,116,117,114,110,32,77,111,100,117,108,101,46,103,101,116,82,97,110,100,111,109,86,97,108,117,101,40,41,59,32,125,0,123,32,105,102,32,40,77,111,100,117,108,101,46,103,101,116,82,97,110,100,111,109,86,97,108,117,101,32,61,61,61,32,117,110,100,101,102,105,110,101,100,41,32,123,32,116,114,121,32,123,32,118,97,114,32,119,105,110,100,111,119,95,32,61,32,34,111,98,106,101,99,116,34,32,61,61,61,32,116,121,112,101,111,102,32,119,105,110,100,111,119,32,63,32,119,105,110,100,111,119,32,58,32,115,101,108,102,44,32,99,114,121,112,116,111,95,32,61,32,116,121,112,101,111,102,32,119,105,110,100,111,119,95,46,99,114,121,112,116,111,32,33,61,61,32,34,117,110,100,101,102,105,110,101,100,34,32,63,32,119,105,110,100,111,119,95,46,99,114,121,112,116,111,32,58,32,119,105,110,100,111,119,95,46,109,115,67,114,121,112,116,111,44,32,114,97,110,100,111,109,86,97,108,117,101,115,83,116,97,110,100,97,114,100,32,61,32,102,117,110,99,116,105,111,110,40,41,32,123,32,118,97,114,32,98,117,102,32,61,32,110,101,119,32,85,105,110,116,51,50,65,114,114,97,121,40,49,41,59,32,99,114,121,112,116,111,95,46,103,101,116,82,97,110,100,111,109,86,97,108,117,101,115,40,98,117,102,41,59,32,114,101,116,117,114,110,32,98,117,102,91,48,93,32,62,62,62,32,48,59,32,125,59,32,114,97,110,100,111,109,86,97,108,117,101,115,83,116,97,110,100,97,114,100,40,41,59,32,77,111,100,117,108,101,46,103,101,116,82,97,110,100,111,109,86,97,108,117,101,32,61,32,114,97,110,100,111,109,86,97,108,117,101,115,83,116,97,110,100,97,114,100,59,32,125,32,99,97,116,99,104,32,40,101,41,32,123,32,116,114,121,32,123,32,118,97,114,32,99,114,121,112,116,111,32,61,32,114,101,113,117,105,114,101,40,39,99,114,121,112,116,111,39,41,44,32,114,97,110,100,111,109,86,97,108,117,101,78,111,100,101,74,83,32,61,32,102,117,110,99,116,105,111,110,40,41,32,123,32,118,97,114,32,98,117,102,32,61,32,99,114,121,112,116,111,46,114,97,110,100,111,109,66,121,116,101,115,40,52,41,59,32,114,101,116,117,114,110,32,40,98,117,102,91,48,93,32,60,60,32,50,52,32,124,32,98,117,102,91,49,93,32,60,60,32,49,54,32,124,32,98,117,102,91,50,93,32,60,60,32,56,32,124,32,98,117,102,91,51,93,41,32,62,62,62,32,48,59,32,125,59,32,114,97,110,100,111,109,86,97,108,117,101,78,111,100,101,74,83,40,41,59,32,77,111,100,117,108,101,46,103,101,116,82,97,110,100,111,109,86,97,108,117,101,32,61,32,114,97,110,100,111,109,86,97,108,117,101,78,111,100,101,74,83,59,32,125,32,99,97,116,99,104,32,40,101,41,32,123,32,116,104,114,111,119,32,39,78,111,32,115,101,99,117,114,101,32,114,97,110,100,111,109,32,110,117,109,98,101,114,32,103,101,110,101,114,97,116,111,114,32,102,111,117,110,100,39,59,32,125,32,125,32,125,32,125,0,76,105,98,115,111,100,105,117,109,68,82,71,98,117,102,95,108,101,110,32,60,61,32,83,73,90,69,95,77,65,88,0,114,97,110,100,111,109,98,121,116,101,115,47,114,97,110,100,111,109,98,121,116,101,115,46,99,0,114,97,110,100,111,109,98,121,116,101,115,0,49,46,48,46,49,51,0,0,0,0,12,0,0,0,0,0,0,0,4,0,0,0,8,15,11,7,3,14,10,6,2,13,9,5,1,12,8,4,0,3,3,3,3,7,7,7,7,11,11,11,11,15,15,15,15,3,2,1,0,7,6,5,4,11,10,9,8,15,14,13,12,12,8,4,0,13,9,5,1,14,10,6,2,15,11,7,3,1,2,3,0,6,7,4,5,11,8,9,10,12,13,14,15,15,10,5,0,14,9,4,3,13,8,7,2,12,11,6,1],"i8",ALLOC_NONE,Runtime.GLOBAL_BASE+30720);var tempDoublePtr=STATICTOP;STATICTOP+=16;Module["_bitshift64Ashr"]=_bitshift64Ashr;Module["_i64Subtract"]=_i64Subtract;Module["_i64Add"]=_i64Add;Module["_memset"]=_memset;Module["_bitshift64Lshr"]=_bitshift64Lshr;Module["_bitshift64Shl"]=_bitshift64Shl;function _abort(){Module["abort"]()}function ___assert_fail(condition,filename,line,func){ABORT=true;throw"Assertion failed: "+Pointer_stringify(condition)+", at: "+[filename?Pointer_stringify(filename):"unknown filename",line,func?Pointer_stringify(func):"unknown function"]+" at "+stackTrace()}function _emscripten_memcpy_big(dest,src,num){HEAPU8.set(HEAPU8.subarray(src,src+num),dest);return dest}Module["_memcpy"]=_memcpy;var cttz_i8=allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0],"i8",ALLOC_STATIC);Module["_llvm_cttz_i32"]=_llvm_cttz_i32;Module["___udivmoddi4"]=___udivmoddi4;Module["___udivdi3"]=___udivdi3;Module["___muldsi3"]=___muldsi3;Module["___muldi3"]=___muldi3;function ___setErrNo(value){if(Module["___errno_location"])HEAP32[Module["___errno_location"]()>>2]=value;return value}var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};function _sysconf(name){switch(name){case 30:return PAGE_SIZE;case 85:var maxHeapSize=2*1024*1024*1024-16777216;maxHeapSize=HEAPU8.length;return maxHeapSize/PAGE_SIZE;case 132:case 133:case 12:case 137:case 138:case 15:case 235:case 16:case 17:case 18:case 19:case 20:case 149:case 13:case 10:case 236:case 153:case 9:case 21:case 22:case 159:case 154:case 14:case 77:case 78:case 139:case 80:case 81:case 82:case 68:case 67:case 164:case 11:case 29:case 47:case 48:case 95:case 52:case 51:case 46:return 200809;case 79:return 0;case 27:case 246:case 127:case 128:case 23:case 24:case 160:case 161:case 181:case 182:case 242:case 183:case 184:case 243:case 244:case 245:case 165:case 178:case 179:case 49:case 50:case 168:case 169:case 175:case 170:case 171:case 172:case 97:case 76:case 32:case 173:case 35:return-1;case 176:case 177:case 7:case 155:case 8:case 157:case 125:case 126:case 92:case 93:case 129:case 130:case 131:case 94:case 91:return 1;case 74:case 60:case 69:case 70:case 4:return 1024;case 31:case 42:case 72:return 32;case 87:case 26:case 33:return 2147483647;case 34:case 1:return 47839;case 38:case 36:return 99;case 43:case 37:return 2048;case 0:return 2097152;case 3:return 65536;case 28:return 32768;case 44:return 32767;case 75:return 16384;case 39:return 1e3;case 89:return 700;case 71:return 256;case 40:return 255;case 2:return 100;case 180:return 64;case 25:return 20;case 5:return 16;case 6:return 6;case 73:return 4;case 84:{if(typeof navigator==="object")return navigator["hardwareConcurrency"]||1;return 1}}___setErrNo(ERRNO_CODES.EINVAL);return-1}Module["_sbrk"]=_sbrk;Module["_memmove"]=_memmove;Module["___uremdi3"]=___uremdi3;DYNAMICTOP_PTR=allocate(1,"i32",ALLOC_STATIC);STACK_BASE=STACKTOP=Runtime.alignMemory(STATICTOP);STACK_MAX=STACK_BASE+TOTAL_STACK;DYNAMIC_BASE=Runtime.alignMemory(STACK_MAX);HEAP32[DYNAMICTOP_PTR>>2]=DYNAMIC_BASE;staticSealed=true;Module.asmGlobalArg={"Math":Math,"Int8Array":Int8Array,"Int16Array":Int16Array,"Int32Array":Int32Array,"Uint8Array":Uint8Array,"Uint16Array":Uint16Array,"Uint32Array":Uint32Array,"Float32Array":Float32Array,"Float64Array":Float64Array,"NaN":NaN,"Infinity":Infinity};Module.asmLibraryArg={"abort":abort,"assert":assert,"enlargeMemory":enlargeMemory,"getTotalMemory":getTotalMemory,"abortOnCannotGrowMemory":abortOnCannotGrowMemory,"_emscripten_asm_const_i":_emscripten_asm_const_i,"_sysconf":_sysconf,"_abort":_abort,"___setErrNo":___setErrNo,"_emscripten_memcpy_big":_emscripten_memcpy_big,"_emscripten_asm_const_v":_emscripten_asm_const_v,"___assert_fail":___assert_fail,"DYNAMICTOP_PTR":DYNAMICTOP_PTR,"tempDoublePtr":tempDoublePtr,"ABORT":ABORT,"STACKTOP":STACKTOP,"STACK_MAX":STACK_MAX,"cttz_i8":cttz_i8};// EMSCRIPTEN_START_ASM
var asm=(function(global,env,buffer) {
"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.DYNAMICTOP_PTR|0;var j=env.tempDoublePtr|0;var k=env.ABORT|0;var l=env.STACKTOP|0;var m=env.STACK_MAX|0;var n=env.cttz_i8|0;var o=0;var p=0;var q=0;var r=0;var s=global.NaN,t=global.Infinity;var u=0,v=0,w=0,x=0,y=0.0,z=0,A=0,B=0,C=0.0;var D=0;var E=global.Math.floor;var F=global.Math.abs;var G=global.Math.sqrt;var H=global.Math.pow;var I=global.Math.cos;var J=global.Math.sin;var K=global.Math.tan;var L=global.Math.acos;var M=global.Math.asin;var N=global.Math.atan;var O=global.Math.atan2;var P=global.Math.exp;var Q=global.Math.log;var R=global.Math.ceil;var S=global.Math.imul;var T=global.Math.min;var U=global.Math.max;var V=global.Math.clz32;var W=env.abort;var X=env.assert;var Y=env.enlargeMemory;var Z=env.getTotalMemory;var _=env.abortOnCannotGrowMemory;var $=env._emscripten_asm_const_i;var aa=env._sysconf;var ba=env._abort;var ca=env.___setErrNo;var da=env._emscripten_memcpy_big;var ea=env._emscripten_asm_const_v;var fa=env.___assert_fail;var ga=0.0;
// EMSCRIPTEN_START_FUNCS
function ka(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0;f=l;g=l=l+63&-64;l=l+256|0;d=0;do{h=Xe(b+(d<<3)|0)|0;e=g+128+(d<<3)|0;c[e>>2]=h;c[e+4>>2]=D;d=d+1|0}while((d|0)!=16);d=g;b=a;e=d+64|0;do{c[d>>2]=c[b>>2];d=d+4|0;b=b+4|0}while((d|0)<(e|0));c[g+88>>2]=1595750129;c[g+88+4>>2]=-1521486534;ca=c[a+64>>2]^-1377402159;r=c[a+64+4>>2]^1359893119;h=c[a+72>>2]^725511199;w=c[a+72+4>>2]^-1694144372;n=c[a+80>>2]^-79577749;s=c[a+80+4>>2]^528734635;K=c[a+88>>2]^327033209;ba=c[a+88+4>>2]^1541459225;c[g+120>>2]=K;c[g+120+4>>2]=ba;u=c[g+32>>2]|0;e=c[g+32+4>>2]|0;N=jg(u|0,e|0,c[g>>2]|0,c[g+4>>2]|0)|0;N=jg(N|0,D|0,c[g+128>>2]|0,c[g+128+4>>2]|0)|0;d=D;r=bf(ca^N,r^d,32)|0;ca=D;V=jg(r|0,ca|0,-205731576,1779033703)|0;O=D;e=bf(u^V,e^O,24)|0;u=D;d=jg(N|0,d|0,e|0,u|0)|0;N=g+128+8|0;d=jg(d|0,D|0,c[N>>2]|0,c[N+4>>2]|0)|0;R=D;c[g>>2]=d;c[g+4>>2]=R;ca=bf(r^d,ca^R,16)|0;r=D;c[g+96>>2]=ca;c[g+96+4>>2]=r;r=jg(V|0,O|0,ca|0,r|0)|0;ca=D;c[g+64>>2]=r;c[g+64+4>>2]=ca;ca=bf(e^r,u^ca,63)|0;c[g+32>>2]=ca;c[g+32+4>>2]=D;ca=c[g+40>>2]|0;u=c[g+40+4>>2]|0;r=jg(ca|0,u|0,c[g+8>>2]|0,c[g+8+4>>2]|0)|0;e=g+128+16|0;r=jg(r|0,D|0,c[e>>2]|0,c[e+4>>2]|0)|0;O=D;w=bf(h^r,w^O,32)|0;h=D;V=jg(w|0,h|0,-2067093701,-1150833019)|0;C=D;u=bf(ca^V,u^C,24)|0;ca=D;O=jg(r|0,O|0,u|0,ca|0)|0;r=g+128+24|0;O=jg(O|0,D|0,c[r>>2]|0,c[r+4>>2]|0)|0;x=D;h=bf(w^O,h^x,16)|0;w=D;c[g+104>>2]=h;c[g+104+4>>2]=w;C=jg(V|0,C|0,h|0,w|0)|0;V=D;c[g+72>>2]=C;c[g+72+4>>2]=V;V=bf(u^C,ca^V,63)|0;ca=D;C=c[g+48>>2]|0;u=c[g+48+4>>2]|0;t=jg(C|0,u|0,c[g+16>>2]|0,c[g+16+4>>2]|0)|0;X=g+128+32|0;t=jg(t|0,D|0,c[X>>2]|0,c[X+4>>2]|0)|0;i=D;s=bf(n^t,s^i,32)|0;n=D;B=jg(s|0,n|0,-23791573,1013904242)|0;b=D;u=bf(C^B,u^b,24)|0;C=D;i=jg(t|0,i|0,u|0,C|0)|0;t=g+128+40|0;i=jg(i|0,D|0,c[t>>2]|0,c[t+4>>2]|0)|0;P=D;n=bf(s^i,n^P,16)|0;s=D;c[g+112>>2]=n;c[g+112+4>>2]=s;b=jg(B|0,b|0,n|0,s|0)|0;B=D;C=bf(u^b,C^B,63)|0;u=D;m=c[g+56>>2]|0;o=c[g+56+4>>2]|0;v=jg(m|0,o|0,c[g+24>>2]|0,c[g+24+4>>2]|0)|0;q=g+128+48|0;v=jg(v|0,D|0,c[q>>2]|0,c[q+4>>2]|0)|0;aa=D;ba=bf(K^v,ba^aa,32)|0;K=D;A=jg(c[g+88>>2]|0,c[g+88+4>>2]|0,ba|0,K|0)|0;F=D;o=bf(m^A,o^F,24)|0;m=D;aa=jg(v|0,aa|0,o|0,m|0)|0;v=g+128+56|0;aa=jg(aa|0,D|0,c[v>>2]|0,c[v+4>>2]|0)|0;y=D;K=bf(ba^aa,K^y,16)|0;ba=D;F=jg(A|0,F|0,K|0,ba|0)|0;A=D;m=bf(o^F,m^A,63)|0;o=D;R=jg(V|0,ca|0,d|0,R|0)|0;d=g+128+64|0;R=jg(R|0,D|0,c[d>>2]|0,c[d+4>>2]|0)|0;S=D;ba=bf(K^R,ba^S,32)|0;K=D;B=jg(b|0,B|0,ba|0,K|0)|0;b=D;ca=bf(V^B,ca^b,24)|0;V=D;S=jg(R|0,S|0,ca|0,V|0)|0;R=g+128+72|0;S=jg(S|0,D|0,c[R>>2]|0,c[R+4>>2]|0)|0;$=D;K=bf(ba^S,K^$,16)|0;ba=D;c[g+120>>2]=K;c[g+120+4>>2]=ba;ba=jg(B|0,b|0,K|0,ba|0)|0;K=D;c[g+80>>2]=ba;c[g+80+4>>2]=K;K=bf(ca^ba,V^K,63)|0;V=D;c[g+40>>2]=K;c[g+40+4>>2]=V;x=jg(C|0,u|0,O|0,x|0)|0;O=g+128+80|0;ba=c[O>>2]|0;ca=c[O+4>>2]|0;x=jg(x|0,D|0,ba|0,ca|0)|0;b=D;B=bf(c[g+96>>2]^x,c[g+96+4>>2]^b,32)|0;z=D;A=jg(F|0,A|0,B|0,z|0)|0;F=D;u=bf(C^A,u^F,24)|0;C=D;b=jg(x|0,b|0,u|0,C|0)|0;x=g+128+88|0;b=jg(b|0,D|0,c[x>>2]|0,c[x+4>>2]|0)|0;M=D;z=bf(B^b,z^M,16)|0;B=D;F=jg(A|0,F|0,z|0,B|0)|0;A=D;c[g+88>>2]=F;c[g+88+4>>2]=A;A=bf(u^F,C^A,63)|0;C=D;c[g+48>>2]=A;c[g+48+4>>2]=C;P=jg(m|0,o|0,i|0,P|0)|0;i=g+128+96|0;P=jg(P|0,D|0,c[i>>2]|0,c[i+4>>2]|0)|0;F=D;w=bf(h^P,w^F,32)|0;h=D;u=jg(c[g+64>>2]|0,c[g+64+4>>2]|0,w|0,h|0)|0;p=D;o=bf(m^u,o^p,24)|0;m=D;F=jg(P|0,F|0,o|0,m|0)|0;P=g+128+104|0;da=c[P>>2]|0;_=c[P+4>>2]|0;F=jg(F|0,D|0,da|0,_|0)|0;E=D;h=bf(w^F,h^E,16)|0;w=D;p=jg(u|0,p|0,h|0,w|0)|0;u=D;m=bf(o^p,m^u,63)|0;o=D;c[g+56>>2]=m;c[g+56+4>>2]=o;k=c[g+32>>2]|0;ga=c[g+32+4>>2]|0;y=jg(k|0,ga|0,aa|0,y|0)|0;aa=g+128+112|0;T=c[aa>>2]|0;j=c[aa+4>>2]|0;y=jg(y|0,D|0,T|0,j|0)|0;ia=D;s=bf(n^y,s^ia,32)|0;n=D;I=jg(c[g+72>>2]|0,c[g+72+4>>2]|0,s|0,n|0)|0;U=D;ga=bf(k^I,ga^U,24)|0;k=D;ia=jg(y|0,ia|0,ga|0,k|0)|0;y=g+128+120|0;H=c[y>>2]|0;fa=c[y+4>>2]|0;ia=jg(ia|0,D|0,H|0,fa|0)|0;Q=D;n=bf(s^ia,n^Q,16)|0;s=D;U=jg(I|0,U|0,n|0,s|0)|0;I=D;k=bf(ga^U,k^I,63)|0;ga=D;$=jg(S|0,$|0,k|0,ga|0)|0;j=jg($|0,D|0,T|0,j|0)|0;T=D;B=bf(z^j,B^T,32)|0;z=D;u=jg(p|0,u|0,B|0,z|0)|0;p=D;ga=bf(k^u,ga^p,24)|0;k=D;T=jg(j|0,T|0,ga|0,k|0)|0;ca=jg(T|0,D|0,ba|0,ca|0)|0;ba=D;z=bf(B^ca,z^ba,16)|0;B=D;c[g+96>>2]=z;c[g+96+4>>2]=B;p=jg(u|0,p|0,z|0,B|0)|0;u=D;c[g+64>>2]=p;c[g+64+4>>2]=u;k=bf(ga^p,k^u,63)|0;c[g+32>>2]=k;c[g+32+4>>2]=D;M=jg(K|0,V|0,b|0,M|0)|0;M=jg(M|0,D|0,c[X>>2]|0,c[X+4>>2]|0)|0;b=D;w=bf(h^M,w^b,32)|0;h=D;I=jg(U|0,I|0,w|0,h|0)|0;U=D;V=bf(K^I,V^U,24)|0;K=D;b=jg(M|0,b|0,V|0,K|0)|0;b=jg(b|0,D|0,c[d>>2]|0,c[d+4>>2]|0)|0;M=D;h=bf(w^b,h^M,16)|0;w=D;c[g+104>>2]=h;c[g+104+4>>2]=w;U=jg(I|0,U|0,h|0,w|0)|0;I=D;c[g+72>>2]=U;c[g+72+4>>2]=I;K=bf(V^U,K^I,63)|0;V=D;E=jg(A|0,C|0,F|0,E|0)|0;E=jg(E|0,D|0,c[R>>2]|0,c[R+4>>2]|0)|0;F=D;s=bf(n^E,s^F,32)|0;n=D;k=jg(c[g+80>>2]|0,c[g+80+4>>2]|0,s|0,n|0)|0;ga=D;C=bf(A^k,C^ga,24)|0;A=D;F=jg(E|0,F|0,C|0,A|0)|0;fa=jg(F|0,D|0,H|0,fa|0)|0;H=D;n=bf(s^fa,n^H,16)|0;s=D;c[g+112>>2]=n;c[g+112+4>>2]=s;ga=jg(k|0,ga|0,n|0,s|0)|0;k=D;A=bf(C^ga,A^k,63)|0;C=D;Q=jg(m|0,o|0,ia|0,Q|0)|0;_=jg(Q|0,D|0,da|0,_|0)|0;da=D;Q=bf(c[g+120>>2]^_,c[g+120+4>>2]^da,32)|0;ia=D;F=jg(c[g+88>>2]|0,c[g+88+4>>2]|0,Q|0,ia|0)|0;E=D;o=bf(m^F,o^E,24)|0;m=D;da=jg(_|0,da|0,o|0,m|0)|0;da=jg(da|0,D|0,c[q>>2]|0,c[q+4>>2]|0)|0;_=D;ia=bf(Q^da,ia^_,16)|0;Q=D;E=jg(F|0,E|0,ia|0,Q|0)|0;F=D;m=bf(o^E,m^F,63)|0;o=D;ba=jg(K|0,V|0,ca|0,ba|0)|0;ba=jg(ba|0,D|0,c[N>>2]|0,c[N+4>>2]|0)|0;ca=D;Q=bf(ia^ba,Q^ca,32)|0;ia=D;k=jg(ga|0,k|0,Q|0,ia|0)|0;ga=D;V=bf(K^k,V^ga,24)|0;K=D;ca=jg(ba|0,ca|0,V|0,K|0)|0;ba=c[i>>2]|0;T=c[i+4>>2]|0;ca=jg(ca|0,D|0,ba|0,T|0)|0;j=D;ia=bf(Q^ca,ia^j,16)|0;Q=D;c[g+120>>2]=ia;c[g+120+4>>2]=Q;Q=jg(k|0,ga|0,ia|0,Q|0)|0;ia=D;c[g+80>>2]=Q;c[g+80+4>>2]=ia;K=bf(V^Q,K^ia,63)|0;V=D;c[g+40>>2]=K;c[g+40+4>>2]=V;M=jg(A|0,C|0,b|0,M|0)|0;b=c[g+128>>2]|0;ga=c[g+128+4>>2]|0;M=jg(M|0,D|0,b|0,ga|0)|0;k=D;B=bf(z^M,B^k,32)|0;z=D;F=jg(E|0,F|0,B|0,z|0)|0;E=D;C=bf(A^F,C^E,24)|0;A=D;k=jg(M|0,k|0,C|0,A|0)|0;M=c[e>>2]|0;$=c[e+4>>2]|0;k=jg(k|0,D|0,M|0,$|0)|0;S=D;z=bf(B^k,z^S,16)|0;B=D;E=jg(F|0,E|0,z|0,B|0)|0;F=D;c[g+88>>2]=E;c[g+88+4>>2]=F;A=bf(C^E,A^F,63)|0;C=D;c[g+48>>2]=A;c[g+48+4>>2]=C;H=jg(m|0,o|0,fa|0,H|0)|0;fa=c[x>>2]|0;ha=c[x+4>>2]|0;H=jg(H|0,D|0,fa|0,ha|0)|0;L=D;w=bf(h^H,w^L,32)|0;h=D;u=jg(p|0,u|0,w|0,h|0)|0;p=D;o=bf(m^u,o^p,24)|0;m=D;L=jg(H|0,L|0,o|0,m|0)|0;L=jg(L|0,D|0,c[v>>2]|0,c[v+4>>2]|0)|0;H=D;h=bf(w^L,h^H,16)|0;w=D;p=jg(u|0,p|0,h|0,w|0)|0;u=D;m=bf(o^p,m^u,63)|0;o=D;c[g+56>>2]=m;c[g+56+4>>2]=o;Z=c[g+32>>2]|0;W=c[g+32+4>>2]|0;_=jg(Z|0,W|0,da|0,_|0)|0;da=c[t>>2]|0;G=c[t+4>>2]|0;_=jg(_|0,D|0,da|0,G|0)|0;ea=D;s=bf(n^_,s^ea,32)|0;n=D;I=jg(U|0,I|0,s|0,n|0)|0;U=D;W=bf(Z^I,W^U,24)|0;Z=D;ea=jg(_|0,ea|0,W|0,Z|0)|0;_=c[r>>2]|0;J=c[r+4>>2]|0;ea=jg(ea|0,D|0,_|0,J|0)|0;Y=D;n=bf(s^ea,n^Y,16)|0;s=D;U=jg(I|0,U|0,n|0,s|0)|0;I=D;Z=bf(W^U,Z^I,63)|0;W=D;j=jg(ca|0,j|0,Z|0,W|0)|0;ha=jg(j|0,D|0,fa|0,ha|0)|0;fa=D;B=bf(z^ha,B^fa,32)|0;z=D;u=jg(p|0,u|0,B|0,z|0)|0;p=D;W=bf(Z^u,W^p,24)|0;Z=D;fa=jg(ha|0,fa|0,W|0,Z|0)|0;fa=jg(fa|0,D|0,c[d>>2]|0,c[d+4>>2]|0)|0;ha=D;z=bf(B^fa,z^ha,16)|0;B=D;c[g+96>>2]=z;c[g+96+4>>2]=B;p=jg(u|0,p|0,z|0,B|0)|0;u=D;c[g+64>>2]=p;c[g+64+4>>2]=u;Z=bf(W^p,Z^u,63)|0;c[g+32>>2]=Z;c[g+32+4>>2]=D;S=jg(K|0,V|0,k|0,S|0)|0;T=jg(S|0,D|0,ba|0,T|0)|0;ba=D;w=bf(h^T,w^ba,32)|0;h=D;I=jg(U|0,I|0,w|0,h|0)|0;U=D;V=bf(K^I,V^U,24)|0;K=D;ba=jg(T|0,ba|0,V|0,K|0)|0;ga=jg(ba|0,D|0,b|0,ga|0)|0;b=D;h=bf(w^ga,h^b,16)|0;w=D;c[g+104>>2]=h;c[g+104+4>>2]=w;U=jg(I|0,U|0,h|0,w|0)|0;I=D;c[g+72>>2]=U;c[g+72+4>>2]=I;K=bf(V^U,K^I,63)|0;V=D;H=jg(A|0,C|0,L|0,H|0)|0;G=jg(H|0,D|0,da|0,G|0)|0;da=D;s=bf(n^G,s^da,32)|0;n=D;ia=jg(Q|0,ia|0,s|0,n|0)|0;Q=D;C=bf(A^ia,C^Q,24)|0;A=D;da=jg(G|0,da|0,C|0,A|0)|0;$=jg(da|0,D|0,M|0,$|0)|0;M=D;n=bf(s^$,n^M,16)|0;s=D;c[g+112>>2]=n;c[g+112+4>>2]=s;Q=jg(ia|0,Q|0,n|0,s|0)|0;ia=D;A=bf(C^Q,A^ia,63)|0;C=D;Y=jg(m|0,o|0,ea|0,Y|0)|0;Y=jg(Y|0,D|0,c[y>>2]|0,c[y+4>>2]|0)|0;ea=D;da=bf(c[g+120>>2]^Y,c[g+120+4>>2]^ea,32)|0;G=D;F=jg(E|0,F|0,da|0,G|0)|0;E=D;o=bf(m^F,o^E,24)|0;m=D;ea=jg(Y|0,ea|0,o|0,m|0)|0;ea=jg(ea|0,D|0,c[P>>2]|0,c[P+4>>2]|0)|0;Y=D;G=bf(da^ea,G^Y,16)|0;da=D;E=jg(F|0,E|0,G|0,da|0)|0;F=D;m=bf(o^E,m^F,63)|0;o=D;ha=jg(K|0,V|0,fa|0,ha|0)|0;ha=jg(ha|0,D|0,c[O>>2]|0,c[O+4>>2]|0)|0;fa=D;da=bf(G^ha,da^fa,32)|0;G=D;ia=jg(Q|0,ia|0,da|0,G|0)|0;Q=D;V=bf(K^ia,V^Q,24)|0;K=D;fa=jg(ha|0,fa|0,V|0,K|0)|0;fa=jg(fa|0,D|0,c[aa>>2]|0,c[aa+4>>2]|0)|0;ha=D;G=bf(da^fa,G^ha,16)|0;da=D;c[g+120>>2]=G;c[g+120+4>>2]=da;da=jg(ia|0,Q|0,G|0,da|0)|0;G=D;c[g+80>>2]=da;c[g+80+4>>2]=G;K=bf(V^da,K^G,63)|0;V=D;c[g+40>>2]=K;c[g+40+4>>2]=V;b=jg(A|0,C|0,ga|0,b|0)|0;J=jg(b|0,D|0,_|0,J|0)|0;_=D;B=bf(z^J,B^_,32)|0;z=D;F=jg(E|0,F|0,B|0,z|0)|0;E=D;C=bf(A^F,C^E,24)|0;A=D;_=jg(J|0,_|0,C|0,A|0)|0;_=jg(_|0,D|0,c[q>>2]|0,c[q+4>>2]|0)|0;J=D;z=bf(B^_,z^J,16)|0;B=D;E=jg(F|0,E|0,z|0,B|0)|0;F=D;c[g+88>>2]=E;c[g+88+4>>2]=F;A=bf(C^E,A^F,63)|0;C=D;c[g+48>>2]=A;c[g+48+4>>2]=C;M=jg(m|0,o|0,$|0,M|0)|0;$=c[v>>2]|0;b=c[v+4>>2]|0;M=jg(M|0,D|0,$|0,b|0)|0;ga=D;w=bf(h^M,w^ga,32)|0;h=D;u=jg(p|0,u|0,w|0,h|0)|0;p=D;o=bf(m^u,o^p,24)|0;m=D;ga=jg(M|0,ga|0,o|0,m|0)|0;M=c[N>>2]|0;Q=c[N+4>>2]|0;ga=jg(ga|0,D|0,M|0,Q|0)|0;ia=D;h=bf(w^ga,h^ia,16)|0;w=D;p=jg(u|0,p|0,h|0,w|0)|0;u=D;m=bf(o^p,m^u,63)|0;o=D;c[g+56>>2]=m;c[g+56+4>>2]=o;H=c[g+32>>2]|0;L=c[g+32+4>>2]|0;Y=jg(H|0,L|0,ea|0,Y|0)|0;ea=c[R>>2]|0;ba=c[R+4>>2]|0;Y=jg(Y|0,D|0,ea|0,ba|0)|0;T=D;s=bf(n^Y,s^T,32)|0;n=D;I=jg(U|0,I|0,s|0,n|0)|0;U=D;L=bf(H^I,L^U,24)|0;H=D;T=jg(Y|0,T|0,L|0,H|0)|0;T=jg(T|0,D|0,c[X>>2]|0,c[X+4>>2]|0)|0;Y=D;n=bf(s^T,n^Y,16)|0;s=D;U=jg(I|0,U|0,n|0,s|0)|0;I=D;H=bf(L^U,H^I,63)|0;L=D;ha=jg(fa|0,ha|0,H|0,L|0)|0;b=jg(ha|0,D|0,$|0,b|0)|0;$=D;B=bf(z^b,B^$,32)|0;z=D;u=jg(p|0,u|0,B|0,z|0)|0;p=D;L=bf(H^u,L^p,24)|0;H=D;$=jg(b|0,$|0,L|0,H|0)|0;ba=jg($|0,D|0,ea|0,ba|0)|0;ea=D;z=bf(B^ba,z^ea,16)|0;B=D;c[g+96>>2]=z;c[g+96+4>>2]=B;p=jg(u|0,p|0,z|0,B|0)|0;u=D;c[g+64>>2]=p;c[g+64+4>>2]=u;H=bf(L^p,H^u,63)|0;c[g+32>>2]=H;c[g+32+4>>2]=D;J=jg(K|0,V|0,_|0,J|0)|0;J=jg(J|0,D|0,c[r>>2]|0,c[r+4>>2]|0)|0;_=D;w=bf(h^J,w^_,32)|0;h=D;I=jg(U|0,I|0,w|0,h|0)|0;U=D;V=bf(K^I,V^U,24)|0;K=D;_=jg(J|0,_|0,V|0,K|0)|0;Q=jg(_|0,D|0,M|0,Q|0)|0;M=D;h=bf(w^Q,h^M,16)|0;w=D;c[g+104>>2]=h;c[g+104+4>>2]=w;U=jg(I|0,U|0,h|0,w|0)|0;I=D;c[g+72>>2]=U;c[g+72+4>>2]=I;K=bf(V^U,K^I,63)|0;V=D;ia=jg(A|0,C|0,ga|0,ia|0)|0;ia=jg(ia|0,D|0,c[P>>2]|0,c[P+4>>2]|0)|0;ga=D;s=bf(n^ia,s^ga,32)|0;n=D;G=jg(da|0,G|0,s|0,n|0)|0;da=D;C=bf(A^G,C^da,24)|0;A=D;ga=jg(ia|0,ga|0,C|0,A|0)|0;ga=jg(ga|0,D|0,c[i>>2]|0,c[i+4>>2]|0)|0;ia=D;n=bf(s^ga,n^ia,16)|0;s=D;c[g+112>>2]=n;c[g+112+4>>2]=s;da=jg(G|0,da|0,n|0,s|0)|0;G=D;A=bf(C^da,A^G,63)|0;C=D;Y=jg(m|0,o|0,T|0,Y|0)|0;Y=jg(Y|0,D|0,c[x>>2]|0,c[x+4>>2]|0)|0;T=D;_=bf(c[g+120>>2]^Y,c[g+120+4>>2]^T,32)|0;J=D;F=jg(E|0,F|0,_|0,J|0)|0;E=D;o=bf(m^F,o^E,24)|0;m=D;T=jg(Y|0,T|0,o|0,m|0)|0;T=jg(T|0,D|0,c[aa>>2]|0,c[aa+4>>2]|0)|0;Y=D;J=bf(_^T,J^Y,16)|0;_=D;E=jg(F|0,E|0,J|0,_|0)|0;F=D;m=bf(o^E,m^F,63)|0;o=D;ea=jg(K|0,V|0,ba|0,ea|0)|0;ea=jg(ea|0,D|0,c[e>>2]|0,c[e+4>>2]|0)|0;ba=D;_=bf(J^ea,_^ba,32)|0;J=D;G=jg(da|0,G|0,_|0,J|0)|0;da=D;V=bf(K^G,V^da,24)|0;K=D;ba=jg(ea|0,ba|0,V|0,K|0)|0;ba=jg(ba|0,D|0,c[q>>2]|0,c[q+4>>2]|0)|0;ea=D;J=bf(_^ba,J^ea,16)|0;_=D;c[g+120>>2]=J;c[g+120+4>>2]=_;_=jg(G|0,da|0,J|0,_|0)|0;J=D;c[g+80>>2]=_;c[g+80+4>>2]=J;K=bf(V^_,K^J,63)|0;V=D;c[g+40>>2]=K;c[g+40+4>>2]=V;M=jg(A|0,C|0,Q|0,M|0)|0;Q=c[t>>2]|0;da=c[t+4>>2]|0;M=jg(M|0,D|0,Q|0,da|0)|0;G=D;B=bf(z^M,B^G,32)|0;z=D;F=jg(E|0,F|0,B|0,z|0)|0;E=D;C=bf(A^F,C^E,24)|0;A=D;G=jg(M|0,G|0,C|0,A|0)|0;M=c[O>>2]|0;H=c[O+4>>2]|0;G=jg(G|0,D|0,M|0,H|0)|0;L=D;z=bf(B^G,z^L,16)|0;B=D;E=jg(F|0,E|0,z|0,B|0)|0;F=D;c[g+88>>2]=E;c[g+88+4>>2]=F;A=bf(C^E,A^F,63)|0;C=D;c[g+48>>2]=A;c[g+48+4>>2]=C;ia=jg(m|0,o|0,ga|0,ia|0)|0;ga=c[X>>2]|0;$=c[X+4>>2]|0;ia=jg(ia|0,D|0,ga|0,$|0)|0;b=D;w=bf(h^ia,w^b,32)|0;h=D;u=jg(p|0,u|0,w|0,h|0)|0;p=D;o=bf(m^u,o^p,24)|0;m=D;b=jg(ia|0,b|0,o|0,m|0)|0;ia=c[g+128>>2]|0;ha=c[g+128+4>>2]|0;b=jg(b|0,D|0,ia|0,ha|0)|0;fa=D;h=bf(w^b,h^fa,16)|0;w=D;p=jg(u|0,p|0,h|0,w|0)|0;u=D;m=bf(o^p,m^u,63)|0;o=D;c[g+56>>2]=m;c[g+56+4>>2]=o;S=c[g+32>>2]|0;k=c[g+32+4>>2]|0;Y=jg(S|0,k|0,T|0,Y|0)|0;T=c[y>>2]|0;Z=c[y+4>>2]|0;Y=jg(Y|0,D|0,T|0,Z|0)|0;W=D;s=bf(n^Y,s^W,32)|0;n=D;I=jg(U|0,I|0,s|0,n|0)|0;U=D;k=bf(S^I,k^U,24)|0;S=D;W=jg(Y|0,W|0,k|0,S|0)|0;W=jg(W|0,D|0,c[d>>2]|0,c[d+4>>2]|0)|0;Y=D;n=bf(s^W,n^Y,16)|0;s=D;U=jg(I|0,U|0,n|0,s|0)|0;I=D;S=bf(k^U,S^I,63)|0;k=D;ea=jg(ba|0,ea|0,S|0,k|0)|0;ea=jg(ea|0,D|0,c[R>>2]|0,c[R+4>>2]|0)|0;ba=D;B=bf(z^ea,B^ba,32)|0;z=D;u=jg(p|0,u|0,B|0,z|0)|0;p=D;k=bf(S^u,k^p,24)|0;S=D;ba=jg(ea|0,ba|0,k|0,S|0)|0;ha=jg(ba|0,D|0,ia|0,ha|0)|0;ia=D;z=bf(B^ha,z^ia,16)|0;B=D;c[g+96>>2]=z;c[g+96+4>>2]=B;p=jg(u|0,p|0,z|0,B|0)|0;u=D;c[g+64>>2]=p;c[g+64+4>>2]=u;S=bf(k^p,S^u,63)|0;c[g+32>>2]=S;c[g+32+4>>2]=D;L=jg(K|0,V|0,G|0,L|0)|0;da=jg(L|0,D|0,Q|0,da|0)|0;Q=D;w=bf(h^da,w^Q,32)|0;h=D;I=jg(U|0,I|0,w|0,h|0)|0;U=D;V=bf(K^I,V^U,24)|0;K=D;Q=jg(da|0,Q|0,V|0,K|0)|0;Q=jg(Q|0,D|0,c[v>>2]|0,c[v+4>>2]|0)|0;da=D;h=bf(w^Q,h^da,16)|0;w=D;c[g+104>>2]=h;c[g+104+4>>2]=w;U=jg(I|0,U|0,h|0,w|0)|0;I=D;c[g+72>>2]=U;c[g+72+4>>2]=I;K=bf(V^U,K^I,63)|0;V=D;fa=jg(A|0,C|0,b|0,fa|0)|0;fa=jg(fa|0,D|0,c[e>>2]|0,c[e+4>>2]|0)|0;b=D;s=bf(n^fa,s^b,32)|0;n=D;J=jg(_|0,J|0,s|0,n|0)|0;_=D;C=bf(A^J,C^_,24)|0;A=D;b=jg(fa|0,b|0,C|0,A|0)|0;$=jg(b|0,D|0,ga|0,$|0)|0;ga=D;n=bf(s^$,n^ga,16)|0;s=D;c[g+112>>2]=n;c[g+112+4>>2]=s;_=jg(J|0,_|0,n|0,s|0)|0;J=D;A=bf(C^_,A^J,63)|0;C=D;Y=jg(m|0,o|0,W|0,Y|0)|0;H=jg(Y|0,D|0,M|0,H|0)|0;M=D;Y=bf(c[g+120>>2]^H,c[g+120+4>>2]^M,32)|0;W=D;F=jg(E|0,F|0,Y|0,W|0)|0;E=D;o=bf(m^F,o^E,24)|0;m=D;M=jg(H|0,M|0,o|0,m|0)|0;Z=jg(M|0,D|0,T|0,Z|0)|0;T=D;W=bf(Y^Z,W^T,16)|0;Y=D;E=jg(F|0,E|0,W|0,Y|0)|0;F=D;m=bf(o^E,m^F,63)|0;o=D;ia=jg(K|0,V|0,ha|0,ia|0)|0;ia=jg(ia|0,D|0,c[aa>>2]|0,c[aa+4>>2]|0)|0;ha=D;Y=bf(W^ia,Y^ha,32)|0;W=D;J=jg(_|0,J|0,Y|0,W|0)|0;_=D;V=bf(K^J,V^_,24)|0;K=D;ha=jg(ia|0,ha|0,V|0,K|0)|0;ha=jg(ha|0,D|0,c[N>>2]|0,c[N+4>>2]|0)|0;ia=D;W=bf(Y^ha,W^ia,16)|0;Y=D;c[g+120>>2]=W;c[g+120+4>>2]=Y;Y=jg(J|0,_|0,W|0,Y|0)|0;W=D;c[g+80>>2]=Y;c[g+80+4>>2]=W;K=bf(V^Y,K^W,63)|0;V=D;c[g+40>>2]=K;c[g+40+4>>2]=V;da=jg(A|0,C|0,Q|0,da|0)|0;Q=c[x>>2]|0;_=c[x+4>>2]|0;da=jg(da|0,D|0,Q|0,_|0)|0;J=D;B=bf(z^da,B^J,32)|0;z=D;F=jg(E|0,F|0,B|0,z|0)|0;E=D;C=bf(A^F,C^E,24)|0;A=D;J=jg(da|0,J|0,C|0,A|0)|0;da=c[i>>2]|0;M=c[i+4>>2]|0;J=jg(J|0,D|0,da|0,M|0)|0;H=D;z=bf(B^J,z^H,16)|0;B=D;E=jg(F|0,E|0,z|0,B|0)|0;F=D;c[g+88>>2]=E;c[g+88+4>>2]=F;A=bf(C^E,A^F,63)|0;C=D;c[g+48>>2]=A;c[g+48+4>>2]=C;ga=jg(m|0,o|0,$|0,ga|0)|0;$=c[q>>2]|0;b=c[q+4>>2]|0;ga=jg(ga|0,D|0,$|0,b|0)|0;fa=D;w=bf(h^ga,w^fa,32)|0;h=D;u=jg(p|0,u|0,w|0,h|0)|0;p=D;o=bf(m^u,o^p,24)|0;m=D;fa=jg(ga|0,fa|0,o|0,m|0)|0;ga=c[d>>2]|0;L=c[d+4>>2]|0;fa=jg(fa|0,D|0,ga|0,L|0)|0;G=D;h=bf(w^fa,h^G,16)|0;w=D;p=jg(u|0,p|0,h|0,w|0)|0;u=D;m=bf(o^p,m^u,63)|0;o=D;c[g+56>>2]=m;c[g+56+4>>2]=o;S=c[g+32>>2]|0;k=c[g+32+4>>2]|0;T=jg(S|0,k|0,Z|0,T|0)|0;Z=c[r>>2]|0;ba=c[r+4>>2]|0;T=jg(T|0,D|0,Z|0,ba|0)|0;ea=D;s=bf(n^T,s^ea,32)|0;n=D;I=jg(U|0,I|0,s|0,n|0)|0;U=D;k=bf(S^I,k^U,24)|0;S=D;ea=jg(T|0,ea|0,k|0,S|0)|0;T=c[P>>2]|0;j=c[P+4>>2]|0;ea=jg(ea|0,D|0,T|0,j|0)|0;ca=D;n=bf(s^ea,n^ca,16)|0;s=D;U=jg(I|0,U|0,n|0,s|0)|0;I=D;S=bf(k^U,S^I,63)|0;k=D;ia=jg(ha|0,ia|0,S|0,k|0)|0;ia=jg(ia|0,D|0,c[e>>2]|0,c[e+4>>2]|0)|0;ha=D;B=bf(z^ia,B^ha,32)|0;z=D;u=jg(p|0,u|0,B|0,z|0)|0;p=D;k=bf(S^u,k^p,24)|0;S=D;ha=jg(ia|0,ha|0,k|0,S|0)|0;M=jg(ha|0,D|0,da|0,M|0)|0;da=D;z=bf(B^M,z^da,16)|0;B=D;c[g+96>>2]=z;c[g+96+4>>2]=B;p=jg(u|0,p|0,z|0,B|0)|0;u=D;c[g+64>>2]=p;c[g+64+4>>2]=u;S=bf(k^p,S^u,63)|0;c[g+32>>2]=S;c[g+32+4>>2]=D;H=jg(K|0,V|0,J|0,H|0)|0;b=jg(H|0,D|0,$|0,b|0)|0;$=D;w=bf(h^b,w^$,32)|0;h=D;I=jg(U|0,I|0,w|0,h|0)|0;U=D;V=bf(K^I,V^U,24)|0;K=D;$=jg(b|0,$|0,V|0,K|0)|0;$=jg($|0,D|0,c[O>>2]|0,c[O+4>>2]|0)|0;b=D;h=bf(w^$,h^b,16)|0;w=D;c[g+104>>2]=h;c[g+104+4>>2]=w;U=jg(I|0,U|0,h|0,w|0)|0;I=D;c[g+72>>2]=U;c[g+72+4>>2]=I;K=bf(V^U,K^I,63)|0;V=D;G=jg(A|0,C|0,fa|0,G|0)|0;G=jg(G|0,D|0,c[g+128>>2]|0,c[g+128+4>>2]|0)|0;fa=D;s=bf(n^G,s^fa,32)|0;n=D;W=jg(Y|0,W|0,s|0,n|0)|0;Y=D;C=bf(A^W,C^Y,24)|0;A=D;fa=jg(G|0,fa|0,C|0,A|0)|0;_=jg(fa|0,D|0,Q|0,_|0)|0;Q=D;n=bf(s^_,n^Q,16)|0;s=D;c[g+112>>2]=n;c[g+112+4>>2]=s;Y=jg(W|0,Y|0,n|0,s|0)|0;W=D;A=bf(C^Y,A^W,63)|0;C=D;ca=jg(m|0,o|0,ea|0,ca|0)|0;L=jg(ca|0,D|0,ga|0,L|0)|0;ga=D;ca=bf(c[g+120>>2]^L,c[g+120+4>>2]^ga,32)|0;ea=D;F=jg(E|0,F|0,ca|0,ea|0)|0;E=D;o=bf(m^F,o^E,24)|0;m=D;ga=jg(L|0,ga|0,o|0,m|0)|0;ba=jg(ga|0,D|0,Z|0,ba|0)|0;Z=D;ea=bf(ca^ba,ea^Z,16)|0;ca=D;E=jg(F|0,E|0,ea|0,ca|0)|0;F=D;m=bf(o^E,m^F,63)|0;o=D;da=jg(K|0,V|0,M|0,da|0)|0;da=jg(da|0,D|0,c[X>>2]|0,c[X+4>>2]|0)|0;M=D;ca=bf(ea^da,ca^M,32)|0;ea=D;W=jg(Y|0,W|0,ca|0,ea|0)|0;Y=D;V=bf(K^W,V^Y,24)|0;K=D;M=jg(da|0,M|0,V|0,K|0)|0;j=jg(M|0,D|0,T|0,j|0)|0;T=D;ea=bf(ca^j,ea^T,16)|0;ca=D;c[g+120>>2]=ea;c[g+120+4>>2]=ca;ca=jg(W|0,Y|0,ea|0,ca|0)|0;ea=D;c[g+80>>2]=ca;c[g+80+4>>2]=ea;K=bf(V^ca,K^ea,63)|0;V=D;c[g+40>>2]=K;c[g+40+4>>2]=V;b=jg(A|0,C|0,$|0,b|0)|0;b=jg(b|0,D|0,c[v>>2]|0,c[v+4>>2]|0)|0;$=D;B=bf(z^b,B^$,32)|0;z=D;F=jg(E|0,F|0,B|0,z|0)|0;E=D;C=bf(A^F,C^E,24)|0;A=D;$=jg(b|0,$|0,C|0,A|0)|0;b=c[t>>2]|0;Y=c[t+4>>2]|0;$=jg($|0,D|0,b|0,Y|0)|0;W=D;z=bf(B^$,z^W,16)|0;B=D;E=jg(F|0,E|0,z|0,B|0)|0;F=D;c[g+88>>2]=E;c[g+88+4>>2]=F;A=bf(C^E,A^F,63)|0;C=D;c[g+48>>2]=A;c[g+48+4>>2]=C;Q=jg(m|0,o|0,_|0,Q|0)|0;_=c[y>>2]|0;M=c[y+4>>2]|0;Q=jg(Q|0,D|0,_|0,M|0)|0;da=D;w=bf(h^Q,w^da,32)|0;h=D;u=jg(p|0,u|0,w|0,h|0)|0;p=D;o=bf(m^u,o^p,24)|0;m=D;da=jg(Q|0,da|0,o|0,m|0)|0;Q=c[aa>>2]|0;ga=c[aa+4>>2]|0;da=jg(da|0,D|0,Q|0,ga|0)|0;L=D;h=bf(w^da,h^L,16)|0;w=D;p=jg(u|0,p|0,h|0,w|0)|0;u=D;m=bf(o^p,m^u,63)|0;o=D;c[g+56>>2]=m;c[g+56+4>>2]=o;fa=c[g+32>>2]|0;G=c[g+32+4>>2]|0;Z=jg(fa|0,G|0,ba|0,Z|0)|0;ba=c[N>>2]|0;H=c[N+4>>2]|0;Z=jg(Z|0,D|0,ba|0,H|0)|0;J=D;s=bf(n^Z,s^J,32)|0;n=D;I=jg(U|0,I|0,s|0,n|0)|0;U=D;G=bf(fa^I,G^U,24)|0;fa=D;J=jg(Z|0,J|0,G|0,fa|0)|0;J=jg(J|0,D|0,c[R>>2]|0,c[R+4>>2]|0)|0;Z=D;n=bf(s^J,n^Z,16)|0;s=D;U=jg(I|0,U|0,n|0,s|0)|0;I=D;fa=bf(G^U,fa^I,63)|0;G=D;T=jg(j|0,T|0,fa|0,G|0)|0;T=jg(T|0,D|0,c[i>>2]|0,c[i+4>>2]|0)|0;j=D;B=bf(z^T,B^j,32)|0;z=D;u=jg(p|0,u|0,B|0,z|0)|0;p=D;G=bf(fa^u,G^p,24)|0;fa=D;j=jg(T|0,j|0,G|0,fa|0)|0;Y=jg(j|0,D|0,b|0,Y|0)|0;b=D;z=bf(B^Y,z^b,16)|0;B=D;c[g+96>>2]=z;c[g+96+4>>2]=B;p=jg(u|0,p|0,z|0,B|0)|0;u=D;c[g+64>>2]=p;c[g+64+4>>2]=u;fa=bf(G^p,fa^u,63)|0;c[g+32>>2]=fa;c[g+32+4>>2]=D;W=jg(K|0,V|0,$|0,W|0)|0;H=jg(W|0,D|0,ba|0,H|0)|0;ba=D;w=bf(h^H,w^ba,32)|0;h=D;I=jg(U|0,I|0,w|0,h|0)|0;U=D;V=bf(K^I,V^U,24)|0;K=D;ba=jg(H|0,ba|0,V|0,K|0)|0;M=jg(ba|0,D|0,_|0,M|0)|0;_=D;h=bf(w^M,h^_,16)|0;w=D;c[g+104>>2]=h;c[g+104+4>>2]=w;U=jg(I|0,U|0,h|0,w|0)|0;I=D;c[g+72>>2]=U;c[g+72+4>>2]=I;K=bf(V^U,K^I,63)|0;V=D;L=jg(A|0,C|0,da|0,L|0)|0;ga=jg(L|0,D|0,Q|0,ga|0)|0;Q=D;s=bf(n^ga,s^Q,32)|0;n=D;ea=jg(ca|0,ea|0,s|0,n|0)|0;ca=D;C=bf(A^ea,C^ca,24)|0;A=D;Q=jg(ga|0,Q|0,C|0,A|0)|0;ga=c[P>>2]|0;L=c[P+4>>2]|0;Q=jg(Q|0,D|0,ga|0,L|0)|0;da=D;n=bf(s^Q,n^da,16)|0;s=D;c[g+112>>2]=n;c[g+112+4>>2]=s;ca=jg(ea|0,ca|0,n|0,s|0)|0;ea=D;A=bf(C^ca,A^ea,63)|0;C=D;Z=jg(m|0,o|0,J|0,Z|0)|0;Z=jg(Z|0,D|0,c[X>>2]|0,c[X+4>>2]|0)|0;J=D;ba=bf(c[g+120>>2]^Z,c[g+120+4>>2]^J,32)|0;H=D;F=jg(E|0,F|0,ba|0,H|0)|0;E=D;o=bf(m^F,o^E,24)|0;m=D;J=jg(Z|0,J|0,o|0,m|0)|0;J=jg(J|0,D|0,c[O>>2]|0,c[O+4>>2]|0)|0;Z=D;H=bf(ba^J,H^Z,16)|0;ba=D;E=jg(F|0,E|0,H|0,ba|0)|0;F=D;m=bf(o^E,m^F,63)|0;o=D;b=jg(K|0,V|0,Y|0,b|0)|0;b=jg(b|0,D|0,c[g+128>>2]|0,c[g+128+4>>2]|0)|0;Y=D;ba=bf(H^b,ba^Y,32)|0;H=D;ea=jg(ca|0,ea|0,ba|0,H|0)|0;ca=D;V=bf(K^ea,V^ca,24)|0;K=D;Y=jg(b|0,Y|0,V|0,K|0)|0;b=c[v>>2]|0;W=c[v+4>>2]|0;Y=jg(Y|0,D|0,b|0,W|0)|0;$=D;H=bf(ba^Y,H^$,16)|0;ba=D;c[g+120>>2]=H;c[g+120+4>>2]=ba;ba=jg(ea|0,ca|0,H|0,ba|0)|0;H=D;c[g+80>>2]=ba;c[g+80+4>>2]=H;K=bf(V^ba,K^H,63)|0;V=D;c[g+40>>2]=K;c[g+40+4>>2]=V;_=jg(A|0,C|0,M|0,_|0)|0;_=jg(_|0,D|0,c[q>>2]|0,c[q+4>>2]|0)|0;M=D;B=bf(z^_,B^M,32)|0;z=D;F=jg(E|0,F|0,B|0,z|0)|0;E=D;C=bf(A^F,C^E,24)|0;A=D;M=jg(_|0,M|0,C|0,A|0)|0;_=c[r>>2]|0;ca=c[r+4>>2]|0;M=jg(M|0,D|0,_|0,ca|0)|0;ea=D;z=bf(B^M,z^ea,16)|0;B=D;E=jg(F|0,E|0,z|0,B|0)|0;F=D;c[g+88>>2]=E;c[g+88+4>>2]=F;A=bf(C^E,A^F,63)|0;C=D;c[g+48>>2]=A;c[g+48+4>>2]=C;da=jg(m|0,o|0,Q|0,da|0)|0;Q=c[R>>2]|0;fa=c[R+4>>2]|0;da=jg(da|0,D|0,Q|0,fa|0)|0;G=D;w=bf(h^da,w^G,32)|0;h=D;u=jg(p|0,u|0,w|0,h|0)|0;p=D;o=bf(m^u,o^p,24)|0;m=D;G=jg(da|0,G|0,o|0,m|0)|0;G=jg(G|0,D|0,c[e>>2]|0,c[e+4>>2]|0)|0;da=D;h=bf(w^G,h^da,16)|0;w=D;p=jg(u|0,p|0,h|0,w|0)|0;u=D;m=bf(o^p,m^u,63)|0;o=D;c[g+56>>2]=m;c[g+56+4>>2]=o;j=c[g+32>>2]|0;T=c[g+32+4>>2]|0;Z=jg(j|0,T|0,J|0,Z|0)|0;Z=jg(Z|0,D|0,c[d>>2]|0,c[d+4>>2]|0)|0;J=D;s=bf(n^Z,s^J,32)|0;n=D;I=jg(U|0,I|0,s|0,n|0)|0;U=D;T=bf(j^I,T^U,24)|0;j=D;J=jg(Z|0,J|0,T|0,j|0)|0;Z=c[x>>2]|0;S=c[x+4>>2]|0;J=jg(J|0,D|0,Z|0,S|0)|0;k=D;n=bf(s^J,n^k,16)|0;s=D;U=jg(I|0,U|0,n|0,s|0)|0;I=D;j=bf(T^U,j^I,63)|0;T=D;$=jg(Y|0,$|0,j|0,T|0)|0;L=jg($|0,D|0,ga|0,L|0)|0;ga=D;B=bf(z^L,B^ga,32)|0;z=D;u=jg(p|0,u|0,B|0,z|0)|0;p=D;T=bf(j^u,T^p,24)|0;j=D;ga=jg(L|0,ga|0,T|0,j|0)|0;S=jg(ga|0,D|0,Z|0,S|0)|0;Z=D;z=bf(B^S,z^Z,16)|0;B=D;c[g+96>>2]=z;c[g+96+4>>2]=B;p=jg(u|0,p|0,z|0,B|0)|0;u=D;c[g+64>>2]=p;c[g+64+4>>2]=u;j=bf(T^p,j^u,63)|0;c[g+32>>2]=j;c[g+32+4>>2]=D;ea=jg(K|0,V|0,M|0,ea|0)|0;W=jg(ea|0,D|0,b|0,W|0)|0;b=D;w=bf(h^W,w^b,32)|0;h=D;I=jg(U|0,I|0,w|0,h|0)|0;U=D;V=bf(K^I,V^U,24)|0;K=D;b=jg(W|0,b|0,V|0,K|0)|0;b=jg(b|0,D|0,c[aa>>2]|0,c[aa+4>>2]|0)|0;W=D;h=bf(w^b,h^W,16)|0;w=D;c[g+104>>2]=h;c[g+104+4>>2]=w;U=jg(I|0,U|0,h|0,w|0)|0;I=D;c[g+72>>2]=U;c[g+72+4>>2]=I;K=bf(V^U,K^I,63)|0;V=D;da=jg(A|0,C|0,G|0,da|0)|0;da=jg(da|0,D|0,c[i>>2]|0,c[i+4>>2]|0)|0;G=D;s=bf(n^da,s^G,32)|0;n=D;H=jg(ba|0,H|0,s|0,n|0)|0;ba=D;C=bf(A^H,C^ba,24)|0;A=D;G=jg(da|0,G|0,C|0,A|0)|0;G=jg(G|0,D|0,c[N>>2]|0,c[N+4>>2]|0)|0;da=D;n=bf(s^G,n^da,16)|0;s=D;c[g+112>>2]=n;c[g+112+4>>2]=s;ba=jg(H|0,ba|0,n|0,s|0)|0;H=D;A=bf(C^ba,A^H,63)|0;C=D;k=jg(m|0,o|0,J|0,k|0)|0;ca=jg(k|0,D|0,_|0,ca|0)|0;_=D;k=bf(c[g+120>>2]^ca,c[g+120+4>>2]^_,32)|0;J=D;F=jg(E|0,F|0,k|0,J|0)|0;E=D;o=bf(m^F,o^E,24)|0;m=D;_=jg(ca|0,_|0,o|0,m|0)|0;fa=jg(_|0,D|0,Q|0,fa|0)|0;Q=D;J=bf(k^fa,J^Q,16)|0;k=D;E=jg(F|0,E|0,J|0,k|0)|0;F=D;m=bf(o^E,m^F,63)|0;o=D;Z=jg(K|0,V|0,S|0,Z|0)|0;Z=jg(Z|0,D|0,c[t>>2]|0,c[t+4>>2]|0)|0;S=D;k=bf(J^Z,k^S,32)|0;J=D;H=jg(ba|0,H|0,k|0,J|0)|0;ba=D;V=bf(K^H,V^ba,24)|0;K=D;S=jg(Z|0,S|0,V|0,K|0)|0;S=jg(S|0,D|0,c[g+128>>2]|0,c[g+128+4>>2]|0)|0;Z=D;J=bf(k^S,J^Z,16)|0;k=D;c[g+120>>2]=J;c[g+120+4>>2]=k;k=jg(H|0,ba|0,J|0,k|0)|0;J=D;c[g+80>>2]=k;c[g+80+4>>2]=J;K=bf(V^k,K^J,63)|0;V=D;c[g+40>>2]=K;c[g+40+4>>2]=V;W=jg(A|0,C|0,b|0,W|0)|0;b=c[y>>2]|0;ba=c[y+4>>2]|0;W=jg(W|0,D|0,b|0,ba|0)|0;H=D;B=bf(z^W,B^H,32)|0;z=D;F=jg(E|0,F|0,B|0,z|0)|0;E=D;C=bf(A^F,C^E,24)|0;A=D;H=jg(W|0,H|0,C|0,A|0)|0;H=jg(H|0,D|0,c[X>>2]|0,c[X+4>>2]|0)|0;W=D;z=bf(B^H,z^W,16)|0;B=D;E=jg(F|0,E|0,z|0,B|0)|0;F=D;c[g+88>>2]=E;c[g+88+4>>2]=F;A=bf(C^E,A^F,63)|0;C=D;c[g+48>>2]=A;c[g+48+4>>2]=C;da=jg(m|0,o|0,G|0,da|0)|0;G=c[d>>2]|0;_=c[d+4>>2]|0;da=jg(da|0,D|0,G|0,_|0)|0;ca=D;w=bf(h^da,w^ca,32)|0;h=D;u=jg(p|0,u|0,w|0,h|0)|0;p=D;o=bf(m^u,o^p,24)|0;m=D;ca=jg(da|0,ca|0,o|0,m|0)|0;da=c[q>>2]|0;ea=c[q+4>>2]|0;ca=jg(ca|0,D|0,da|0,ea|0)|0;M=D;h=bf(w^ca,h^M,16)|0;w=D;p=jg(u|0,p|0,h|0,w|0)|0;u=D;m=bf(o^p,m^u,63)|0;o=D;c[g+56>>2]=m;c[g+56+4>>2]=o;j=c[g+32>>2]|0;T=c[g+32+4>>2]|0;Q=jg(j|0,T|0,fa|0,Q|0)|0;fa=c[e>>2]|0;ga=c[e+4>>2]|0;Q=jg(Q|0,D|0,fa|0,ga|0)|0;L=D;s=bf(n^Q,s^L,32)|0;n=D;I=jg(U|0,I|0,s|0,n|0)|0;U=D;T=bf(j^I,T^U,24)|0;j=D;L=jg(Q|0,L|0,T|0,j|0)|0;L=jg(L|0,D|0,c[O>>2]|0,c[O+4>>2]|0)|0;Q=D;n=bf(s^L,n^Q,16)|0;s=D;U=jg(I|0,U|0,n|0,s|0)|0;I=D;j=bf(T^U,j^I,63)|0;T=D;Z=jg(S|0,Z|0,j|0,T|0)|0;ea=jg(Z|0,D|0,da|0,ea|0)|0;da=D;B=bf(z^ea,B^da,32)|0;z=D;u=jg(p|0,u|0,B|0,z|0)|0;p=D;T=bf(j^u,T^p,24)|0;j=D;da=jg(ea|0,da|0,T|0,j|0)|0;ba=jg(da|0,D|0,b|0,ba|0)|0;b=D;z=bf(B^ba,z^b,16)|0;B=D;c[g+96>>2]=z;c[g+96+4>>2]=B;p=jg(u|0,p|0,z|0,B|0)|0;u=D;c[g+64>>2]=p;c[g+64+4>>2]=u;j=bf(T^p,j^u,63)|0;c[g+32>>2]=j;c[g+32+4>>2]=D;W=jg(K|0,V|0,H|0,W|0)|0;W=jg(W|0,D|0,c[aa>>2]|0,c[aa+4>>2]|0)|0;H=D;w=bf(h^W,w^H,32)|0;h=D;I=jg(U|0,I|0,w|0,h|0)|0;U=D;V=bf(K^I,V^U,24)|0;K=D;H=jg(W|0,H|0,V|0,K|0)|0;H=jg(H|0,D|0,c[R>>2]|0,c[R+4>>2]|0)|0;W=D;h=bf(w^H,h^W,16)|0;w=D;c[g+104>>2]=h;c[g+104+4>>2]=w;U=jg(I|0,U|0,h|0,w|0)|0;I=D;c[g+72>>2]=U;c[g+72+4>>2]=I;K=bf(V^U,K^I,63)|0;V=D;M=jg(A|0,C|0,ca|0,M|0)|0;M=jg(M|0,D|0,c[x>>2]|0,c[x+4>>2]|0)|0;ca=D;s=bf(n^M,s^ca,32)|0;n=D;J=jg(k|0,J|0,s|0,n|0)|0;k=D;C=bf(A^J,C^k,24)|0;A=D;ca=jg(M|0,ca|0,C|0,A|0)|0;ca=jg(ca|0,D|0,c[r>>2]|0,c[r+4>>2]|0)|0;M=D;n=bf(s^ca,n^M,16)|0;s=D;c[g+112>>2]=n;c[g+112+4>>2]=s;k=jg(J|0,k|0,n|0,s|0)|0;J=D;A=bf(C^k,A^J,63)|0;C=D;Q=jg(m|0,o|0,L|0,Q|0)|0;Q=jg(Q|0,D|0,c[g+128>>2]|0,c[g+128+4>>2]|0)|0;L=D;j=bf(c[g+120>>2]^Q,c[g+120+4>>2]^L,32)|0;T=D;F=jg(E|0,F|0,j|0,T|0)|0;E=D;o=bf(m^F,o^E,24)|0;m=D;L=jg(Q|0,L|0,o|0,m|0)|0;_=jg(L|0,D|0,G|0,_|0)|0;G=D;T=bf(j^_,T^G,16)|0;j=D;E=jg(F|0,E|0,T|0,j|0)|0;F=D;m=bf(o^E,m^F,63)|0;o=D;b=jg(K|0,V|0,ba|0,b|0)|0;b=jg(b|0,D|0,c[i>>2]|0,c[i+4>>2]|0)|0;ba=D;j=bf(T^b,j^ba,32)|0;T=D;J=jg(k|0,J|0,j|0,T|0)|0;k=D;V=bf(K^J,V^k,24)|0;K=D;ba=jg(b|0,ba|0,V|0,K|0)|0;ga=jg(ba|0,D|0,fa|0,ga|0)|0;fa=D;T=bf(j^ga,T^fa,16)|0;j=D;c[g+120>>2]=T;c[g+120+4>>2]=j;j=jg(J|0,k|0,T|0,j|0)|0;T=D;c[g+80>>2]=j;c[g+80+4>>2]=T;K=bf(V^j,K^T,63)|0;V=D;c[g+40>>2]=K;c[g+40+4>>2]=V;W=jg(A|0,C|0,H|0,W|0)|0;W=jg(W|0,D|0,c[P>>2]|0,c[P+4>>2]|0)|0;H=D;B=bf(z^W,B^H,32)|0;z=D;F=jg(E|0,F|0,B|0,z|0)|0;E=D;C=bf(A^F,C^E,24)|0;A=D;H=jg(W|0,H|0,C|0,A|0)|0;W=c[v>>2]|0;k=c[v+4>>2]|0;H=jg(H|0,D|0,W|0,k|0)|0;J=D;z=bf(B^H,z^J,16)|0;B=D;E=jg(F|0,E|0,z|0,B|0)|0;F=D;c[g+88>>2]=E;c[g+88+4>>2]=F;A=bf(C^E,A^F,63)|0;C=D;c[g+48>>2]=A;c[g+48+4>>2]=C;M=jg(m|0,o|0,ca|0,M|0)|0;ca=c[N>>2]|0;ba=c[N+4>>2]|0;M=jg(M|0,D|0,ca|0,ba|0)|0;b=D;w=bf(h^M,w^b,32)|0;h=D;u=jg(p|0,u|0,w|0,h|0)|0;p=D;o=bf(m^u,o^p,24)|0;m=D;b=jg(M|0,b|0,o|0,m|0)|0;M=c[X>>2]|0;L=c[X+4>>2]|0;b=jg(b|0,D|0,M|0,L|0)|0;Q=D;h=bf(w^b,h^Q,16)|0;w=D;p=jg(u|0,p|0,h|0,w|0)|0;u=D;m=bf(o^p,m^u,63)|0;o=D;c[g+56>>2]=m;c[g+56+4>>2]=o;da=c[g+32>>2]|0;ea=c[g+32+4>>2]|0;G=jg(da|0,ea|0,_|0,G|0)|0;_=c[O>>2]|0;Z=c[O+4>>2]|0;G=jg(G|0,D|0,_|0,Z|0)|0;S=D;s=bf(n^G,s^S,32)|0;n=D;I=jg(U|0,I|0,s|0,n|0)|0;U=D;ea=bf(da^I,ea^U,24)|0;da=D;S=jg(G|0,S|0,ea|0,da|0)|0;G=c[t>>2]|0;$=c[t+4>>2]|0;S=jg(S|0,D|0,G|0,$|0)|0;Y=D;n=bf(s^S,n^Y,16)|0;s=D;U=jg(I|0,U|0,n|0,s|0)|0;I=D;da=bf(ea^U,da^I,63)|0;ea=D;fa=jg(ga|0,fa|0,da|0,ea|0)|0;Z=jg(fa|0,D|0,_|0,Z|0)|0;_=D;B=bf(z^Z,B^_,32)|0;z=D;u=jg(p|0,u|0,B|0,z|0)|0;p=D;ea=bf(da^u,ea^p,24)|0;da=D;_=jg(Z|0,_|0,ea|0,da|0)|0;_=jg(_|0,D|0,c[e>>2]|0,c[e+4>>2]|0)|0;Z=D;z=bf(B^_,z^Z,16)|0;B=D;c[g+96>>2]=z;c[g+96+4>>2]=B;p=jg(u|0,p|0,z|0,B|0)|0;u=D;c[g+64>>2]=p;c[g+64+4>>2]=u;da=bf(ea^p,da^u,63)|0;c[g+32>>2]=da;c[g+32+4>>2]=D;J=jg(K|0,V|0,H|0,J|0)|0;J=jg(J|0,D|0,c[d>>2]|0,c[d+4>>2]|0)|0;H=D;w=bf(h^J,w^H,32)|0;h=D;I=jg(U|0,I|0,w|0,h|0)|0;U=D;V=bf(K^I,V^U,24)|0;K=D;H=jg(J|0,H|0,V|0,K|0)|0;L=jg(H|0,D|0,M|0,L|0)|0;M=D;h=bf(w^L,h^M,16)|0;w=D;c[g+104>>2]=h;c[g+104+4>>2]=w;U=jg(I|0,U|0,h|0,w|0)|0;I=D;c[g+72>>2]=U;c[g+72+4>>2]=I;K=bf(V^U,K^I,63)|0;V=D;Q=jg(A|0,C|0,b|0,Q|0)|0;k=jg(Q|0,D|0,W|0,k|0)|0;W=D;s=bf(n^k,s^W,32)|0;n=D;T=jg(j|0,T|0,s|0,n|0)|0;j=D;C=bf(A^T,C^j,24)|0;A=D;W=jg(k|0,W|0,C|0,A|0)|0;W=jg(W|0,D|0,c[q>>2]|0,c[q+4>>2]|0)|0;k=D;n=bf(s^W,n^k,16)|0;s=D;c[g+112>>2]=n;c[g+112+4>>2]=s;j=jg(T|0,j|0,n|0,s|0)|0;T=D;A=bf(C^j,A^T,63)|0;C=D;Y=jg(m|0,o|0,S|0,Y|0)|0;ba=jg(Y|0,D|0,ca|0,ba|0)|0;ca=D;Y=bf(c[g+120>>2]^ba,c[g+120+4>>2]^ca,32)|0;S=D;F=jg(E|0,F|0,Y|0,S|0)|0;E=D;o=bf(m^F,o^E,24)|0;m=D;ca=jg(ba|0,ca|0,o|0,m|0)|0;$=jg(ca|0,D|0,G|0,$|0)|0;G=D;S=bf(Y^$,S^G,16)|0;Y=D;E=jg(F|0,E|0,S|0,Y|0)|0;F=D;m=bf(o^E,m^F,63)|0;o=D;Z=jg(K|0,V|0,_|0,Z|0)|0;Z=jg(Z|0,D|0,c[y>>2]|0,c[y+4>>2]|0)|0;_=D;Y=bf(S^Z,Y^_,32)|0;S=D;T=jg(j|0,T|0,Y|0,S|0)|0;j=D;V=bf(K^T,V^j,24)|0;K=D;_=jg(Z|0,_|0,V|0,K|0)|0;_=jg(_|0,D|0,c[x>>2]|0,c[x+4>>2]|0)|0;Z=D;S=bf(Y^_,S^Z,16)|0;Y=D;c[g+120>>2]=S;c[g+120+4>>2]=Y;Y=jg(T|0,j|0,S|0,Y|0)|0;S=D;c[g+80>>2]=Y;c[g+80+4>>2]=S;K=bf(V^Y,K^S,63)|0;V=D;c[g+40>>2]=K;c[g+40+4>>2]=V;M=jg(A|0,C|0,L|0,M|0)|0;M=jg(M|0,D|0,c[R>>2]|0,c[R+4>>2]|0)|0;L=D;B=bf(z^M,B^L,32)|0;z=D;F=jg(E|0,F|0,B|0,z|0)|0;E=D;C=bf(A^F,C^E,24)|0;A=D;L=jg(M|0,L|0,C|0,A|0)|0;L=jg(L|0,D|0,c[aa>>2]|0,c[aa+4>>2]|0)|0;M=D;z=bf(B^L,z^M,16)|0;B=D;E=jg(F|0,E|0,z|0,B|0)|0;F=D;c[g+88>>2]=E;c[g+88+4>>2]=F;A=bf(C^E,A^F,63)|0;C=D;c[g+48>>2]=A;c[g+48+4>>2]=C;k=jg(m|0,o|0,W|0,k|0)|0;W=c[r>>2]|0;j=c[r+4>>2]|0;k=jg(k|0,D|0,W|0,j|0)|0;T=D;w=bf(h^k,w^T,32)|0;h=D;u=jg(p|0,u|0,w|0,h|0)|0;p=D;o=bf(m^u,o^p,24)|0;m=D;T=jg(k|0,T|0,o|0,m|0)|0;T=jg(T|0,D|0,c[i>>2]|0,c[i+4>>2]|0)|0;k=D;h=bf(w^T,h^k,16)|0;w=D;p=jg(u|0,p|0,h|0,w|0)|0;u=D;m=bf(o^p,m^u,63)|0;o=D;c[g+56>>2]=m;c[g+56+4>>2]=o;ca=c[g+32>>2]|0;ba=c[g+32+4>>2]|0;G=jg(ca|0,ba|0,$|0,G|0)|0;G=jg(G|0,D|0,c[P>>2]|0,c[P+4>>2]|0)|0;$=D;s=bf(n^G,s^$,32)|0;n=D;I=jg(U|0,I|0,s|0,n|0)|0;U=D;ba=bf(ca^I,ba^U,24)|0;ca=D;$=jg(G|0,$|0,ba|0,ca|0)|0;G=c[g+128>>2]|0;Q=c[g+128+4>>2]|0;$=jg($|0,D|0,G|0,Q|0)|0;b=D;n=bf(s^$,n^b,16)|0;s=D;U=jg(I|0,U|0,n|0,s|0)|0;I=D;ca=bf(ba^U,ca^I,63)|0;ba=D;Z=jg(_|0,Z|0,ca|0,ba|0)|0;Q=jg(Z|0,D|0,G|0,Q|0)|0;G=D;B=bf(z^Q,B^G,32)|0;z=D;u=jg(p|0,u|0,B|0,z|0)|0;p=D;ba=bf(ca^u,ba^p,24)|0;ca=D;G=jg(Q|0,G|0,ba|0,ca|0)|0;G=jg(G|0,D|0,c[N>>2]|0,c[N+4>>2]|0)|0;Q=D;z=bf(B^G,z^Q,16)|0;B=D;c[g+96>>2]=z;c[g+96+4>>2]=B;p=jg(u|0,p|0,z|0,B|0)|0;u=D;c[g+64>>2]=p;c[g+64+4>>2]=u;ca=bf(ba^p,ca^u,63)|0;c[g+32>>2]=ca;c[g+32+4>>2]=D;M=jg(K|0,V|0,L|0,M|0)|0;M=jg(M|0,D|0,c[e>>2]|0,c[e+4>>2]|0)|0;L=D;w=bf(h^M,w^L,32)|0;h=D;I=jg(U|0,I|0,w|0,h|0)|0;U=D;V=bf(K^I,V^U,24)|0;K=D;L=jg(M|0,L|0,V|0,K|0)|0;j=jg(L|0,D|0,W|0,j|0)|0;W=D;h=bf(w^j,h^W,16)|0;w=D;c[g+104>>2]=h;c[g+104+4>>2]=w;U=jg(I|0,U|0,h|0,w|0)|0;I=D;c[g+72>>2]=U;c[g+72+4>>2]=I;K=bf(V^U,K^I,63)|0;V=D;k=jg(A|0,C|0,T|0,k|0)|0;k=jg(k|0,D|0,c[X>>2]|0,c[X+4>>2]|0)|0;T=D;s=bf(n^k,s^T,32)|0;n=D;S=jg(Y|0,S|0,s|0,n|0)|0;Y=D;C=bf(A^S,C^Y,24)|0;A=D;T=jg(k|0,T|0,C|0,A|0)|0;T=jg(T|0,D|0,c[t>>2]|0,c[t+4>>2]|0)|0;k=D;n=bf(s^T,n^k,16)|0;s=D;c[g+112>>2]=n;c[g+112+4>>2]=s;Y=jg(S|0,Y|0,n|0,s|0)|0;S=D;A=bf(C^Y,A^S,63)|0;C=D;b=jg(m|0,o|0,$|0,b|0)|0;b=jg(b|0,D|0,c[q>>2]|0,c[q+4>>2]|0)|0;$=D;L=bf(c[g+120>>2]^b,c[g+120+4>>2]^$,32)|0;M=D;F=jg(E|0,F|0,L|0,M|0)|0;E=D;o=bf(m^F,o^E,24)|0;m=D;$=jg(b|0,$|0,o|0,m|0)|0;$=jg($|0,D|0,c[v>>2]|0,c[v+4>>2]|0)|0;b=D;M=bf(L^$,M^b,16)|0;L=D;E=jg(F|0,E|0,M|0,L|0)|0;F=D;m=bf(o^E,m^F,63)|0;o=D;Q=jg(K|0,V|0,G|0,Q|0)|0;G=c[d>>2]|0;d=c[d+4>>2]|0;Q=jg(Q|0,D|0,G|0,d|0)|0;ca=D;L=bf(M^Q,L^ca,32)|0;M=D;S=jg(Y|0,S|0,L|0,M|0)|0;Y=D;V=bf(K^S,V^Y,24)|0;K=D;ca=jg(Q|0,ca|0,V|0,K|0)|0;Q=c[R>>2]|0;R=c[R+4>>2]|0;ca=jg(ca|0,D|0,Q|0,R|0)|0;ba=D;M=bf(L^ca,M^ba,16)|0;L=D;c[g+120>>2]=M;c[g+120+4>>2]=L;L=jg(S|0,Y|0,M|0,L|0)|0;M=D;c[g+80>>2]=L;c[g+80+4>>2]=M;K=bf(V^L,K^M,63)|0;V=D;c[g+40>>2]=K;c[g+40+4>>2]=V;W=jg(A|0,C|0,j|0,W|0)|0;j=c[O>>2]|0;O=c[O+4>>2]|0;W=jg(W|0,D|0,j|0,O|0)|0;Y=D;B=bf(z^W,B^Y,32)|0;z=D;F=jg(E|0,F|0,B|0,z|0)|0;E=D;C=bf(A^F,C^E,24)|0;A=D;Y=jg(W|0,Y|0,C|0,A|0)|0;Y=jg(Y|0,D|0,c[x>>2]|0,c[x+4>>2]|0)|0;W=D;z=bf(B^Y,z^W,16)|0;B=D;E=jg(F|0,E|0,z|0,B|0)|0;F=D;c[g+88>>2]=E;c[g+88+4>>2]=F;A=bf(C^E,A^F,63)|0;C=D;c[g+48>>2]=A;c[g+48+4>>2]=C;k=jg(m|0,o|0,T|0,k|0)|0;k=jg(k|0,D|0,c[i>>2]|0,c[i+4>>2]|0)|0;T=D;w=bf(h^k,w^T,32)|0;h=D;u=jg(p|0,u|0,w|0,h|0)|0;p=D;o=bf(m^u,o^p,24)|0;m=D;T=jg(k|0,T|0,o|0,m|0)|0;k=c[P>>2]|0;P=c[P+4>>2]|0;T=jg(T|0,D|0,k|0,P|0)|0;S=D;h=bf(w^T,h^S,16)|0;w=D;p=jg(u|0,p|0,h|0,w|0)|0;u=D;m=bf(o^p,m^u,63)|0;o=D;c[g+56>>2]=m;c[g+56+4>>2]=o;Z=c[g+32>>2]|0;_=c[g+32+4>>2]|0;b=jg(Z|0,_|0,$|0,b|0)|0;$=c[aa>>2]|0;aa=c[aa+4>>2]|0;b=jg(b|0,D|0,$|0,aa|0)|0;H=D;s=bf(n^b,s^H,32)|0;n=D;I=jg(U|0,I|0,s|0,n|0)|0;U=D;_=bf(Z^I,_^U,24)|0;Z=D;H=jg(b|0,H|0,_|0,Z|0)|0;b=c[y>>2]|0;y=c[y+4>>2]|0;H=jg(H|0,D|0,b|0,y|0)|0;J=D;n=bf(s^H,n^J,16)|0;s=D;U=jg(I|0,U|0,n|0,s|0)|0;I=D;Z=bf(_^U,Z^I,63)|0;_=D;ba=jg(ca|0,ba|0,Z|0,_|0)|0;aa=jg(ba|0,D|0,$|0,aa|0)|0;$=D;B=bf(z^aa,B^$,32)|0;z=D;u=jg(p|0,u|0,B|0,z|0)|0;p=D;_=bf(Z^u,_^p,24)|0;Z=D;$=jg(aa|0,$|0,_|0,Z|0)|0;O=jg($|0,D|0,j|0,O|0)|0;j=D;z=bf(B^O,z^j,16)|0;B=D;p=jg(u|0,p|0,z|0,B|0)|0;u=D;c[g+64>>2]=p;c[g+64+4>>2]=u;Z=bf(_^p,Z^u,63)|0;c[g+32>>2]=Z;c[g+32+4>>2]=D;W=jg(K|0,V|0,Y|0,W|0)|0;X=jg(W|0,D|0,c[X>>2]|0,c[X+4>>2]|0)|0;W=D;w=bf(h^X,w^W,32)|0;h=D;I=jg(U|0,I|0,w|0,h|0)|0;U=D;V=bf(K^I,V^U,24)|0;K=D;W=jg(X|0,W|0,V|0,K|0)|0;d=jg(W|0,D|0,G|0,d|0)|0;G=D;h=bf(w^d,h^G,16)|0;w=D;U=jg(I|0,U|0,h|0,w|0)|0;I=D;c[g+72>>2]=U;c[g+72+4>>2]=I;I=bf(V^U,K^I,63)|0;K=D;S=jg(A|0,C|0,T|0,S|0)|0;R=jg(S|0,D|0,Q|0,R|0)|0;Q=D;s=bf(n^R,s^Q,32)|0;n=D;M=jg(L|0,M|0,s|0,n|0)|0;L=D;C=bf(A^M,C^L,24)|0;A=D;Q=jg(R|0,Q|0,C|0,A|0)|0;y=jg(Q|0,D|0,b|0,y|0)|0;b=D;n=bf(s^y,n^b,16)|0;s=D;L=jg(M|0,L|0,n|0,s|0)|0;M=D;A=bf(C^L,A^M,63)|0;C=D;J=jg(m|0,o|0,H|0,J|0)|0;P=jg(J|0,D|0,k|0,P|0)|0;k=D;J=bf(c[g+120>>2]^P,c[g+120+4>>2]^k,32)|0;H=D;F=jg(E|0,F|0,J|0,H|0)|0;E=D;o=bf(m^F,o^E,24)|0;m=D;k=jg(P|0,k|0,o|0,m|0)|0;q=jg(k|0,D|0,c[q>>2]|0,c[q+4>>2]|0)|0;k=D;H=bf(J^q,H^k,16)|0;J=D;E=jg(F|0,E|0,H|0,J|0)|0;F=D;m=bf(o^E,m^F,63)|0;o=D;j=jg(I|0,K|0,O|0,j|0)|0;N=jg(j|0,D|0,c[N>>2]|0,c[N+4>>2]|0)|0;j=D;J=bf(H^N,J^j,32)|0;H=D;M=jg(L|0,M|0,J|0,H|0)|0;L=D;K=bf(I^M,K^L,24)|0;I=D;j=jg(N|0,j|0,K|0,I|0)|0;i=jg(j|0,D|0,c[i>>2]|0,c[i+4>>2]|0)|0;j=D;c[g>>2]=i;c[g+4>>2]=j;H=bf(J^i,H^j,16)|0;J=D;c[g+120>>2]=H;c[g+120+4>>2]=J;J=jg(M|0,L|0,H|0,J|0)|0;H=D;c[g+80>>2]=J;c[g+80+4>>2]=H;H=bf(K^J,I^H,63)|0;c[g+40>>2]=H;c[g+40+4>>2]=D;G=jg(A|0,C|0,d|0,G|0)|0;G=jg(G|0,D|0,c[g+128>>2]|0,c[g+128+4>>2]|0)|0;d=D;B=bf(z^G,B^d,32)|0;z=D;F=jg(E|0,F|0,B|0,z|0)|0;E=D;C=bf(A^F,C^E,24)|0;A=D;d=jg(G|0,d|0,C|0,A|0)|0;e=jg(d|0,D|0,c[e>>2]|0,c[e+4>>2]|0)|0;d=D;c[g+8>>2]=e;c[g+8+4>>2]=d;z=bf(B^e,z^d,16)|0;B=D;c[g+96>>2]=z;c[g+96+4>>2]=B;B=jg(F|0,E|0,z|0,B|0)|0;z=D;c[g+88>>2]=B;c[g+88+4>>2]=z;z=bf(C^B,A^z,63)|0;c[g+48>>2]=z;c[g+48+4>>2]=D;b=jg(m|0,o|0,y|0,b|0)|0;x=jg(b|0,D|0,c[x>>2]|0,c[x+4>>2]|0)|0;b=D;w=bf(h^x,w^b,32)|0;h=D;u=jg(p|0,u|0,w|0,h|0)|0;p=D;o=bf(m^u,o^p,24)|0;m=D;b=jg(x|0,b|0,o|0,m|0)|0;v=jg(b|0,D|0,c[v>>2]|0,c[v+4>>2]|0)|0;b=D;c[g+16>>2]=v;c[g+16+4>>2]=b;b=bf(w^v,h^b,16)|0;h=D;c[g+104>>2]=b;c[g+104+4>>2]=h;h=jg(u|0,p|0,b|0,h|0)|0;b=D;c[g+64>>2]=h;c[g+64+4>>2]=b;m=bf(o^h,m^b,63)|0;c[g+56>>2]=m;c[g+56+4>>2]=D;m=c[g+32>>2]|0;o=c[g+32+4>>2]|0;k=jg(m|0,o|0,q|0,k|0)|0;t=jg(k|0,D|0,c[t>>2]|0,c[t+4>>2]|0)|0;k=D;s=bf(n^t,s^k,32)|0;n=D;q=jg(c[g+72>>2]|0,c[g+72+4>>2]|0,s|0,n|0)|0;p=D;o=bf(m^q,o^p,24)|0;m=D;k=jg(t|0,k|0,o|0,m|0)|0;r=jg(k|0,D|0,c[r>>2]|0,c[r+4>>2]|0)|0;k=D;c[g+24>>2]=r;c[g+24+4>>2]=k;k=bf(s^r,n^k,16)|0;n=D;c[g+112>>2]=k;c[g+112+4>>2]=n;n=jg(q|0,p|0,k|0,n|0)|0;k=D;c[g+72>>2]=n;c[g+72+4>>2]=k;k=bf(o^n,m^k,63)|0;c[g+32>>2]=k;c[g+32+4>>2]=D;b=j^c[a+4>>2]^b;c[a>>2]=i^c[a>>2]^h;c[a+4>>2]=b;b=1;while(1){ia=a+(b<<3)|0;ha=g+(b+8<<3)|0;d=d^c[ia+4>>2]^c[ha+4>>2];c[ia>>2]=e^c[ia>>2]^c[ha>>2];c[ia+4>>2]=d;d=b+1|0;if((d|0)==8)break;b=d;e=c[g+(d<<3)>>2]|0;d=c[g+(d<<3)+4>>2]|0}l=f;return}function la(b,c,d,e){b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0,Ha=0,Ia=0,Ja=0,Ka=0,La=0,Ma=0,Na=0,Oa=0,Pa=0,Qa=0,Ra=0,Sa=0,Ta=0,Ua=0,Va=0,Wa=0,Xa=0,Ya=0,Za=0,_a=0,$a=0,ab=0,bb=0,cb=0,db=0,eb=0,fb=0,gb=0,hb=0,ib=0,jb=0,kb=0,lb=0,mb=0,nb=0,ob=0,pb=0,qb=0,rb=0,sb=0,tb=0,ub=0,vb=0,wb=0,xb=0,yb=0,zb=0,Ab=0,Bb=0,Cb=0,Db=0,Eb=0,Fb=0,Gb=0,Hb=0,Ib=0,Jb=0,Kb=0,Lb=0,Mb=0,Nb=0,Ob=0,Pb=0,Qb=0,Rb=0,Sb=0,Tb=0,Ub=0,Vb=0,Wb=0,Xb=0,Yb=0,Zb=0,_b=0,$b=0,ac=0,bc=0,cc=0,dc=0,ec=0,fc=0,gc=0,hc=0,ic=0,jc=0,kc=0,lc=0,mc=0,nc=0,oc=0,pc=0,qc=0,rc=0,sc=0;Za=hf(a[c>>0]|0,a[c+1>>0]|0,a[c+2>>0]|0)|0;nb=Ud(c+2|0)|0;nb=Cf(nb|0,D|0,5)|0;z=hf(a[c+5>>0]|0,a[c+6>>0]|0,a[c+7>>0]|0)|0;z=Cf(z|0,D|0,2)|0;kb=Ud(c+7|0)|0;kb=Cf(kb|0,D|0,7)|0;l=Ud(c+10|0)|0;l=Cf(l|0,D|0,4)|0;J=hf(a[c+13>>0]|0,a[c+14>>0]|0,a[c+15>>0]|0)|0;J=Cf(J|0,D|0,1)|0;F=Ud(c+15|0)|0;F=Cf(F|0,D|0,6)|0;ea=hf(a[c+18>>0]|0,a[c+19>>0]|0,a[c+20>>0]|0)|0;ea=Cf(ea|0,D|0,3)|0;ib=hf(a[c+21>>0]|0,a[c+22>>0]|0,a[c+23>>0]|0)|0;I=Ud(c+23|0)|0;I=Cf(I|0,D|0,5)|0;qc=hf(a[c+26>>0]|0,a[c+27>>0]|0,a[c+28>>0]|0)|0;qc=Cf(qc|0,D|0,2)|0;n=Ud(c+28|0)|0;n=Cf(n|0,D|0,7)|0;ua=D;ub=hf(a[d>>0]|0,a[d+1>>0]|0,a[d+2>>0]|0)|0;Ia=Ud(d+2|0)|0;Ia=Cf(Ia|0,D|0,5)|0;Wa=hf(a[d+5>>0]|0,a[d+6>>0]|0,a[d+7>>0]|0)|0;Wa=Cf(Wa|0,D|0,2)|0;ca=Ud(d+7|0)|0;ca=Cf(ca|0,D|0,7)|0;P=Ud(d+10|0)|0;P=Cf(P|0,D|0,4)|0;ta=hf(a[d+13>>0]|0,a[d+14>>0]|0,a[d+15>>0]|0)|0;ta=Cf(ta|0,D|0,1)|0;xa=Ud(d+15|0)|0;xa=Cf(xa|0,D|0,6)|0;rb=hf(a[d+18>>0]|0,a[d+19>>0]|0,a[d+20>>0]|0)|0;rb=Cf(rb|0,D|0,3)|0;na=hf(a[d+21>>0]|0,a[d+22>>0]|0,a[d+23>>0]|0)|0;O=Ud(d+23|0)|0;O=Cf(O|0,D|0,5)|0;Ja=hf(a[d+26>>0]|0,a[d+27>>0]|0,a[d+28>>0]|0)|0;Ja=Cf(Ja|0,D|0,2)|0;w=Ud(d+28|0)|0;w=Cf(w|0,D|0,7)|0;qa=D;V=hf(a[e>>0]|0,a[e+1>>0]|0,a[e+2>>0]|0)|0;oa=Ud(e+2|0)|0;oa=Cf(oa|0,D|0,5)|0;sa=hf(a[e+5>>0]|0,a[e+6>>0]|0,a[e+7>>0]|0)|0;sa=Cf(sa|0,D|0,2)|0;Na=Ud(e+7|0)|0;Na=Cf(Na|0,D|0,7)|0;ma=Ud(e+10|0)|0;ma=Cf(ma|0,D|0,4)|0;Da=hf(a[e+13>>0]|0,a[e+14>>0]|0,a[e+15>>0]|0)|0;Da=Cf(Da|0,D|0,1)|0;fb=Ud(e+15|0)|0;fb=Cf(fb|0,D|0,6)|0;g=hf(a[e+18>>0]|0,a[e+19>>0]|0,a[e+20>>0]|0)|0;g=Cf(g|0,D|0,3)|0;Ra=hf(a[e+21>>0]|0,a[e+22>>0]|0,a[e+23>>0]|0)|0;E=Ud(e+23|0)|0;E=Cf(E|0,D|0,5)|0;Qa=hf(a[e+26>>0]|0,a[e+27>>0]|0,a[e+28>>0]|0)|0;Qa=Cf(Qa|0,D|0,2)|0;c=Ud(e+28|0)|0;c=Cf(c|0,D|0,7)|0;h=D;pa=ef(ub&2097151|0,0,Za&2097151|0,0)|0;pa=jg(V&2097151|0,0,pa|0,D|0)|0;V=D;pc=ef(Ia&2097151|0,0,Za&2097151|0,0)|0;oc=D;nc=ef(ub&2097151|0,0,nb&2097151|0,0)|0;t=D;ja=ef(Wa&2097151|0,0,Za&2097151|0,0)|0;ra=D;ka=ef(Ia&2097151|0,0,nb&2097151|0,0)|0;ic=D;S=ef(ub&2097151|0,0,z&2097151|0,0)|0;S=jg(ka|0,ic|0,S|0,D|0)|0;ra=jg(S|0,D|0,ja|0,ra|0)|0;sa=jg(ra|0,D|0,sa&2097151|0,0)|0;ra=D;ja=ef(ca&2097151|0,0,Za&2097151|0,0)|0;S=D;ic=ef(Wa&2097151|0,0,nb&2097151|0,0)|0;ka=D;mc=ef(Ia&2097151|0,0,z&2097151|0,0)|0;lc=D;kc=ef(ub&2097151|0,0,kb&2097151|0,0)|0;jc=D;Ca=ef(P&2097151|0,0,Za&2097151|0,0)|0;la=D;$b=ef(ca&2097151|0,0,nb&2097151|0,0)|0;_=D;bc=ef(Wa&2097151|0,0,z&2097151|0,0)|0;Ba=D;cc=ef(Ia&2097151|0,0,kb&2097151|0,0)|0;dc=D;ac=ef(ub&2097151|0,0,l&2097151|0,0)|0;ac=jg(cc|0,dc|0,ac|0,D|0)|0;Ba=jg(ac|0,D|0,bc|0,Ba|0)|0;_=jg(Ba|0,D|0,$b|0,_|0)|0;la=jg(_|0,D|0,Ca|0,la|0)|0;ma=jg(la|0,D|0,ma&2097151|0,0)|0;la=D;Ca=ef(ta&2097151|0,0,Za&2097151|0,0)|0;_=D;$b=ef(P&2097151|0,0,nb&2097151|0,0)|0;Ba=D;bc=ef(ca&2097151|0,0,z&2097151|0,0)|0;ac=D;dc=ef(Wa&2097151|0,0,kb&2097151|0,0)|0;cc=D;hc=ef(Ia&2097151|0,0,l&2097151|0,0)|0;gc=D;fc=ef(ub&2097151|0,0,J&2097151|0,0)|0;ec=D;Y=ef(xa&2097151|0,0,Za&2097151|0,0)|0;$a=D;Ob=ef(ta&2097151|0,0,nb&2097151|0,0)|0;A=D;Qb=ef(P&2097151|0,0,z&2097151|0,0)|0;X=D;Sb=ef(ca&2097151|0,0,kb&2097151|0,0)|0;Pb=D;Ub=ef(Wa&2097151|0,0,l&2097151|0,0)|0;Rb=D;Vb=ef(Ia&2097151|0,0,J&2097151|0,0)|0;Wb=D;Tb=ef(ub&2097151|0,0,F&2097151|0,0)|0;Tb=jg(Vb|0,Wb|0,Tb|0,D|0)|0;Rb=jg(Tb|0,D|0,Ub|0,Rb|0)|0;Pb=jg(Rb|0,D|0,Sb|0,Pb|0)|0;X=jg(Pb|0,D|0,Qb|0,X|0)|0;A=jg(X|0,D|0,Ob|0,A|0)|0;$a=jg(A|0,D|0,Y|0,$a|0)|0;fb=jg($a|0,D|0,fb&2097151|0,0)|0;$a=D;Y=ef(rb&2097151|0,0,Za&2097151|0,0)|0;A=D;Ob=ef(xa&2097151|0,0,nb&2097151|0,0)|0;X=D;Qb=ef(ta&2097151|0,0,z&2097151|0,0)|0;Pb=D;Sb=ef(P&2097151|0,0,kb&2097151|0,0)|0;Rb=D;Ub=ef(ca&2097151|0,0,l&2097151|0,0)|0;Tb=D;Wb=ef(Wa&2097151|0,0,J&2097151|0,0)|0;Vb=D;_b=ef(Ia&2097151|0,0,F&2097151|0,0)|0;Zb=D;Yb=ef(ub&2097151|0,0,ea&2097151|0,0)|0;Xb=D;zb=ef(na&2097151|0,0,Za&2097151|0,0)|0;e=D;i=ef(rb&2097151|0,0,nb&2097151|0,0)|0;Sa=D;xb=ef(xa&2097151|0,0,z&2097151|0,0)|0;yb=D;Bb=ef(ta&2097151|0,0,kb&2097151|0,0)|0;va=D;Db=ef(P&2097151|0,0,l&2097151|0,0)|0;Ab=D;Fb=ef(ca&2097151|0,0,J&2097151|0,0)|0;Cb=D;Hb=ef(Wa&2097151|0,0,F&2097151|0,0)|0;Eb=D;Ib=ef(Ia&2097151|0,0,ea&2097151|0,0)|0;Jb=D;Gb=ef(ub&2097151|0,0,ib&2097151|0,0)|0;Gb=jg(Ib|0,Jb|0,Gb|0,D|0)|0;Eb=jg(Gb|0,D|0,Hb|0,Eb|0)|0;Cb=jg(Eb|0,D|0,Fb|0,Cb|0)|0;Ab=jg(Cb|0,D|0,Db|0,Ab|0)|0;va=jg(Ab|0,D|0,Bb|0,va|0)|0;yb=jg(va|0,D|0,xb|0,yb|0)|0;e=jg(yb|0,D|0,zb|0,e|0)|0;Sa=jg(e|0,D|0,i|0,Sa|0)|0;Ra=jg(Sa|0,D|0,Ra&2097151|0,0)|0;Sa=D;i=ef(O&2097151|0,0,Za&2097151|0,0)|0;e=D;zb=ef(na&2097151|0,0,nb&2097151|0,0)|0;yb=D;xb=ef(rb&2097151|0,0,z&2097151|0,0)|0;va=D;Bb=ef(xa&2097151|0,0,kb&2097151|0,0)|0;Ab=D;Db=ef(ta&2097151|0,0,l&2097151|0,0)|0;Cb=D;Fb=ef(P&2097151|0,0,J&2097151|0,0)|0;Eb=D;Hb=ef(ca&2097151|0,0,F&2097151|0,0)|0;Gb=D;Jb=ef(Wa&2097151|0,0,ea&2097151|0,0)|0;Ib=D;Nb=ef(Ia&2097151|0,0,ib&2097151|0,0)|0;Mb=D;Lb=ef(ub&2097151|0,0,I&2097151|0,0)|0;Kb=D;_a=ef(Ja&2097151|0,0,Za&2097151|0,0)|0;Pa=D;ab=ef(O&2097151|0,0,nb&2097151|0,0)|0;gb=D;$=ef(na&2097151|0,0,z&2097151|0,0)|0;aa=D;U=ef(rb&2097151|0,0,kb&2097151|0,0)|0;T=D;mb=ef(xa&2097151|0,0,l&2097151|0,0)|0;lb=D;Ma=ef(ta&2097151|0,0,J&2097151|0,0)|0;La=D;eb=ef(P&2097151|0,0,F&2097151|0,0)|0;db=D;Ga=ef(ca&2097151|0,0,ea&2097151|0,0)|0;Fa=D;Ua=ef(Wa&2097151|0,0,ib&2097151|0,0)|0;Ta=D;wb=ef(Ia&2097151|0,0,I&2097151|0,0)|0;L=D;Q=ef(ub&2097151|0,0,qc&2097151|0,0)|0;Q=jg(wb|0,L|0,Q|0,D|0)|0;Ta=jg(Q|0,D|0,Ua|0,Ta|0)|0;Fa=jg(Ta|0,D|0,Ga|0,Fa|0)|0;db=jg(Fa|0,D|0,eb|0,db|0)|0;La=jg(db|0,D|0,Ma|0,La|0)|0;lb=jg(La|0,D|0,mb|0,lb|0)|0;aa=jg(lb|0,D|0,$|0,aa|0)|0;T=jg(aa|0,D|0,U|0,T|0)|0;gb=jg(T|0,D|0,ab|0,gb|0)|0;Pa=jg(gb|0,D|0,_a|0,Pa|0)|0;Qa=jg(Pa|0,D|0,Qa&2097151|0,0)|0;Pa=D;Za=ef(w|0,qa|0,Za&2097151|0,0)|0;_a=D;gb=ef(Ja&2097151|0,0,nb&2097151|0,0)|0;ab=D;T=ef(O&2097151|0,0,z&2097151|0,0)|0;U=D;aa=ef(na&2097151|0,0,kb&2097151|0,0)|0;$=D;lb=ef(rb&2097151|0,0,l&2097151|0,0)|0;mb=D;La=ef(xa&2097151|0,0,J&2097151|0,0)|0;Ma=D;db=ef(ta&2097151|0,0,F&2097151|0,0)|0;eb=D;Fa=ef(P&2097151|0,0,ea&2097151|0,0)|0;Ga=D;Ta=ef(ca&2097151|0,0,ib&2097151|0,0)|0;Ua=D;Q=ef(Wa&2097151|0,0,I&2097151|0,0)|0;L=D;wb=ef(Ia&2097151|0,0,qc&2097151|0,0)|0;vb=D;ub=ef(ub&2097151|0,0,n|0,ua|0)|0;tb=D;nb=ef(w|0,qa|0,nb&2097151|0,0)|0;ob=D;bb=ef(Ja&2097151|0,0,z&2097151|0,0)|0;v=D;M=ef(O&2097151|0,0,kb&2097151|0,0)|0;cb=D;pb=ef(na&2097151|0,0,l&2097151|0,0)|0;u=D;p=ef(rb&2097151|0,0,J&2097151|0,0)|0;hb=D;q=ef(xa&2097151|0,0,F&2097151|0,0)|0;qb=D;ha=ef(ta&2097151|0,0,ea&2097151|0,0)|0;y=D;da=ef(P&2097151|0,0,ib&2097151|0,0)|0;ia=D;Ha=ef(ca&2097151|0,0,I&2097151|0,0)|0;R=D;jb=ef(Wa&2097151|0,0,qc&2097151|0,0)|0;Va=D;Ia=ef(Ia&2097151|0,0,n|0,ua|0)|0;Ia=jg(jb|0,Va|0,Ia|0,D|0)|0;R=jg(Ia|0,D|0,Ha|0,R|0)|0;ia=jg(R|0,D|0,da|0,ia|0)|0;y=jg(ia|0,D|0,ha|0,y|0)|0;qb=jg(y|0,D|0,q|0,qb|0)|0;u=jg(qb|0,D|0,pb|0,u|0)|0;hb=jg(u|0,D|0,p|0,hb|0)|0;cb=jg(hb|0,D|0,M|0,cb|0)|0;v=jg(cb|0,D|0,bb|0,v|0)|0;ob=jg(v|0,D|0,nb|0,ob|0)|0;nb=D;z=ef(w|0,qa|0,z&2097151|0,0)|0;v=D;bb=ef(Ja&2097151|0,0,kb&2097151|0,0)|0;cb=D;M=ef(O&2097151|0,0,l&2097151|0,0)|0;hb=D;p=ef(na&2097151|0,0,J&2097151|0,0)|0;u=D;pb=ef(rb&2097151|0,0,F&2097151|0,0)|0;qb=D;q=ef(xa&2097151|0,0,ea&2097151|0,0)|0;y=D;ha=ef(ta&2097151|0,0,ib&2097151|0,0)|0;ia=D;da=ef(P&2097151|0,0,I&2097151|0,0)|0;R=D;Ha=ef(ca&2097151|0,0,qc&2097151|0,0)|0;Ia=D;Wa=ef(Wa&2097151|0,0,n|0,ua|0)|0;Va=D;kb=ef(w|0,qa|0,kb&2097151|0,0)|0;jb=D;Xa=ef(Ja&2097151|0,0,l&2097151|0,0)|0;j=D;m=ef(O&2097151|0,0,J&2097151|0,0)|0;Ya=D;W=ef(na&2097151|0,0,F&2097151|0,0)|0;G=D;Z=ef(rb&2097151|0,0,ea&2097151|0,0)|0;f=D;za=ef(xa&2097151|0,0,ib&2097151|0,0)|0;r=D;wa=ef(ta&2097151|0,0,I&2097151|0,0)|0;k=D;sb=ef(P&2097151|0,0,qc&2097151|0,0)|0;o=D;ca=ef(ca&2097151|0,0,n|0,ua|0)|0;ca=jg(sb|0,o|0,ca|0,D|0)|0;k=jg(ca|0,D|0,wa|0,k|0)|0;r=jg(k|0,D|0,za|0,r|0)|0;G=jg(r|0,D|0,W|0,G|0)|0;f=jg(G|0,D|0,Z|0,f|0)|0;Ya=jg(f|0,D|0,m|0,Ya|0)|0;j=jg(Ya|0,D|0,Xa|0,j|0)|0;jb=jg(j|0,D|0,kb|0,jb|0)|0;kb=D;l=ef(w|0,qa|0,l&2097151|0,0)|0;j=D;Xa=ef(Ja&2097151|0,0,J&2097151|0,0)|0;Ya=D;m=ef(O&2097151|0,0,F&2097151|0,0)|0;f=D;Z=ef(na&2097151|0,0,ea&2097151|0,0)|0;G=D;W=ef(rb&2097151|0,0,ib&2097151|0,0)|0;r=D;za=ef(xa&2097151|0,0,I&2097151|0,0)|0;k=D;wa=ef(ta&2097151|0,0,qc&2097151|0,0)|0;ca=D;P=ef(P&2097151|0,0,n|0,ua|0)|0;o=D;J=ef(w|0,qa|0,J&2097151|0,0)|0;sb=D;fa=ef(Ja&2097151|0,0,F&2097151|0,0)|0;Ka=D;Ea=ef(O&2097151|0,0,ea&2097151|0,0)|0;B=D;ba=ef(na&2097151|0,0,ib&2097151|0,0)|0;s=D;C=ef(rb&2097151|0,0,I&2097151|0,0)|0;Aa=D;K=ef(xa&2097151|0,0,qc&2097151|0,0)|0;ya=D;d=ef(ta&2097151|0,0,n|0,ua|0)|0;d=jg(K|0,ya|0,d|0,D|0)|0;s=jg(d|0,D|0,ba|0,s|0)|0;Aa=jg(s|0,D|0,C|0,Aa|0)|0;B=jg(Aa|0,D|0,Ea|0,B|0)|0;Ka=jg(B|0,D|0,fa|0,Ka|0)|0;sb=jg(Ka|0,D|0,J|0,sb|0)|0;J=D;F=ef(w|0,qa|0,F&2097151|0,0)|0;Ka=D;fa=ef(Ja&2097151|0,0,ea&2097151|0,0)|0;B=D;Ea=ef(O&2097151|0,0,ib&2097151|0,0)|0;Aa=D;C=ef(na&2097151|0,0,I&2097151|0,0)|0;s=D;ba=ef(rb&2097151|0,0,qc&2097151|0,0)|0;d=D;xa=ef(xa&2097151|0,0,n|0,ua|0)|0;ya=D;ea=ef(w|0,qa|0,ea&2097151|0,0)|0;K=D;ta=ef(Ja&2097151|0,0,ib&2097151|0,0)|0;N=D;Oa=ef(O&2097151|0,0,I&2097151|0,0)|0;H=D;x=ef(na&2097151|0,0,qc&2097151|0,0)|0;ga=D;rb=ef(rb&2097151|0,0,n|0,ua|0)|0;ga=jg(rb|0,D|0,x|0,ga|0)|0;H=jg(ga|0,D|0,Oa|0,H|0)|0;N=jg(H|0,D|0,ta|0,N|0)|0;K=jg(N|0,D|0,ea|0,K|0)|0;ea=D;ib=ef(w|0,qa|0,ib&2097151|0,0)|0;N=D;ta=ef(Ja&2097151|0,0,I&2097151|0,0)|0;H=D;Oa=ef(O&2097151|0,0,qc&2097151|0,0)|0;ga=D;na=ef(na&2097151|0,0,n|0,ua|0)|0;x=D;I=ef(w|0,qa|0,I&2097151|0,0)|0;rb=D;sc=ef(Ja&2097151|0,0,qc&2097151|0,0)|0;rc=D;O=ef(O&2097151|0,0,n|0,ua|0)|0;O=jg(sc|0,rc|0,O|0,D|0)|0;rb=jg(O|0,D|0,I|0,rb|0)|0;I=D;qc=ef(w|0,qa|0,qc&2097151|0,0)|0;O=D;Ja=ef(Ja&2097151|0,0,n|0,ua|0)|0;Ja=jg(qc|0,O|0,Ja|0,D|0)|0;O=D;ua=ef(w|0,qa|0,n|0,ua|0)|0;n=D;qa=jg(pa|0,V|0,1048576,0)|0;qa=Cf(qa|0,D|0,21)|0;w=D;t=jg(pc|0,oc|0,nc|0,t|0)|0;oa=jg(t|0,D|0,oa&2097151|0,0)|0;oa=jg(oa|0,D|0,qa|0,w|0)|0;t=D;w=zf(qa|0,w|0,21)|0;w=gg(pa|0,V|0,w|0,D|0)|0;V=D;pa=jg(sa|0,ra|0,1048576,0)|0;pa=Cf(pa|0,D|0,21)|0;qa=D;jc=jg(mc|0,lc|0,kc|0,jc|0)|0;ka=jg(jc|0,D|0,ic|0,ka|0)|0;S=jg(ka|0,D|0,ja|0,S|0)|0;Na=jg(S|0,D|0,Na&2097151|0,0)|0;Na=jg(Na|0,D|0,pa|0,qa|0)|0;S=D;qa=zf(pa|0,qa|0,21)|0;pa=D;ja=jg(ma|0,la|0,1048576,0)|0;ja=$e(ja|0,D|0,21)|0;ka=D;ec=jg(hc|0,gc|0,fc|0,ec|0)|0;cc=jg(ec|0,D|0,dc|0,cc|0)|0;ac=jg(cc|0,D|0,bc|0,ac|0)|0;Ba=jg(ac|0,D|0,$b|0,Ba|0)|0;_=jg(Ba|0,D|0,Ca|0,_|0)|0;Da=jg(_|0,D|0,Da&2097151|0,0)|0;Da=jg(Da|0,D|0,ja|0,ka|0)|0;_=D;ka=zf(ja|0,ka|0,21)|0;ja=D;Ca=jg(fb|0,$a|0,1048576,0)|0;Ca=$e(Ca|0,D|0,21)|0;Ba=D;Xb=jg(_b|0,Zb|0,Yb|0,Xb|0)|0;Vb=jg(Xb|0,D|0,Wb|0,Vb|0)|0;Tb=jg(Vb|0,D|0,Ub|0,Tb|0)|0;Rb=jg(Tb|0,D|0,Sb|0,Rb|0)|0;Pb=jg(Rb|0,D|0,Qb|0,Pb|0)|0;X=jg(Pb|0,D|0,Ob|0,X|0)|0;A=jg(X|0,D|0,Y|0,A|0)|0;g=jg(A|0,D|0,g&2097151|0,0)|0;g=jg(g|0,D|0,Ca|0,Ba|0)|0;A=D;Ba=zf(Ca|0,Ba|0,21)|0;Ca=D;Y=jg(Ra|0,Sa|0,1048576,0)|0;Y=$e(Y|0,D|0,21)|0;X=D;Kb=jg(Nb|0,Mb|0,Lb|0,Kb|0)|0;Ib=jg(Kb|0,D|0,Jb|0,Ib|0)|0;Gb=jg(Ib|0,D|0,Hb|0,Gb|0)|0;Eb=jg(Gb|0,D|0,Fb|0,Eb|0)|0;Cb=jg(Eb|0,D|0,Db|0,Cb|0)|0;Ab=jg(Cb|0,D|0,Bb|0,Ab|0)|0;yb=jg(Ab|0,D|0,zb|0,yb|0)|0;va=jg(yb|0,D|0,xb|0,va|0)|0;e=jg(va|0,D|0,i|0,e|0)|0;e=jg(e|0,D|0,E&2097151|0,0)|0;e=jg(e|0,D|0,Y|0,X|0)|0;E=D;X=zf(Y|0,X|0,21)|0;Y=D;i=jg(Qa|0,Pa|0,1048576,0)|0;i=$e(i|0,D|0,21)|0;va=D;tb=jg(wb|0,vb|0,ub|0,tb|0)|0;L=jg(tb|0,D|0,Q|0,L|0)|0;Ua=jg(L|0,D|0,Ta|0,Ua|0)|0;Ga=jg(Ua|0,D|0,Fa|0,Ga|0)|0;eb=jg(Ga|0,D|0,db|0,eb|0)|0;Ma=jg(eb|0,D|0,La|0,Ma|0)|0;$=jg(Ma|0,D|0,aa|0,$|0)|0;mb=jg($|0,D|0,lb|0,mb|0)|0;U=jg(mb|0,D|0,T|0,U|0)|0;_a=jg(U|0,D|0,Za|0,_a|0)|0;ab=jg(_a|0,D|0,gb|0,ab|0)|0;h=jg(ab|0,D|0,c|0,h|0)|0;h=jg(h|0,D|0,i|0,va|0)|0;c=D;va=zf(i|0,va|0,21)|0;i=D;ab=jg(ob|0,nb|0,1048576,0)|0;ab=$e(ab|0,D|0,21)|0;gb=D;Va=jg(Ha|0,Ia|0,Wa|0,Va|0)|0;R=jg(Va|0,D|0,da|0,R|0)|0;ia=jg(R|0,D|0,ha|0,ia|0)|0;y=jg(ia|0,D|0,q|0,y|0)|0;u=jg(y|0,D|0,p|0,u|0)|0;qb=jg(u|0,D|0,pb|0,qb|0)|0;hb=jg(qb|0,D|0,M|0,hb|0)|0;cb=jg(hb|0,D|0,bb|0,cb|0)|0;v=jg(cb|0,D|0,z|0,v|0)|0;v=jg(v|0,D|0,ab|0,gb|0)|0;z=D;gb=zf(ab|0,gb|0,21)|0;ab=D;cb=jg(jb|0,kb|0,1048576,0)|0;cb=$e(cb|0,D|0,21)|0;bb=D;o=jg(wa|0,ca|0,P|0,o|0)|0;k=jg(o|0,D|0,za|0,k|0)|0;G=jg(k|0,D|0,Z|0,G|0)|0;r=jg(G|0,D|0,W|0,r|0)|0;f=jg(r|0,D|0,m|0,f|0)|0;Ya=jg(f|0,D|0,Xa|0,Ya|0)|0;j=jg(Ya|0,D|0,l|0,j|0)|0;j=jg(j|0,D|0,cb|0,bb|0)|0;l=D;bb=zf(cb|0,bb|0,21)|0;cb=D;Ya=jg(sb|0,J|0,1048576,0)|0;Ya=$e(Ya|0,D|0,21)|0;Xa=D;ya=jg(C|0,s|0,xa|0,ya|0)|0;d=jg(ya|0,D|0,ba|0,d|0)|0;Aa=jg(d|0,D|0,Ea|0,Aa|0)|0;B=jg(Aa|0,D|0,fa|0,B|0)|0;Ka=jg(B|0,D|0,F|0,Ka|0)|0;Ka=jg(Ka|0,D|0,Ya|0,Xa|0)|0;F=D;Xa=zf(Ya|0,Xa|0,21)|0;Ya=D;B=jg(K|0,ea|0,1048576,0)|0;B=$e(B|0,D|0,21)|0;fa=D;x=jg(Oa|0,ga|0,na|0,x|0)|0;H=jg(x|0,D|0,ta|0,H|0)|0;N=jg(H|0,D|0,ib|0,N|0)|0;N=jg(N|0,D|0,B|0,fa|0)|0;ib=D;fa=zf(B|0,fa|0,21)|0;fa=gg(K|0,ea|0,fa|0,D|0)|0;ea=D;K=jg(rb|0,I|0,1048576,0)|0;K=$e(K|0,D|0,21)|0;B=D;O=jg(Ja|0,O|0,K|0,B|0)|0;Ja=D;B=zf(K|0,B|0,21)|0;B=gg(rb|0,I|0,B|0,D|0)|0;I=D;rb=jg(ua|0,n|0,1048576,0)|0;rb=$e(rb|0,D|0,21)|0;K=D;H=zf(rb|0,K|0,21)|0;H=gg(ua|0,n|0,H|0,D|0)|0;n=D;ua=jg(oa|0,t|0,1048576,0)|0;ua=Cf(ua|0,D|0,21)|0;ta=D;x=zf(ua|0,ta|0,21)|0;x=gg(oa|0,t|0,x|0,D|0)|0;t=D;oa=jg(Na|0,S|0,1048576,0)|0;oa=$e(oa|0,D|0,21)|0;na=D;ga=zf(oa|0,na|0,21)|0;ga=gg(Na|0,S|0,ga|0,D|0)|0;S=D;Na=jg(Da|0,_|0,1048576,0)|0;Na=$e(Na|0,D|0,21)|0;Oa=D;Aa=zf(Na|0,Oa|0,21)|0;Aa=gg(Da|0,_|0,Aa|0,D|0)|0;_=D;Da=jg(g|0,A|0,1048576,0)|0;Da=$e(Da|0,D|0,21)|0;Ea=D;d=zf(Da|0,Ea|0,21)|0;ba=D;ya=jg(e|0,E|0,1048576,0)|0;ya=$e(ya|0,D|0,21)|0;xa=D;s=zf(ya|0,xa|0,21)|0;C=D;f=jg(h|0,c|0,1048576,0)|0;f=$e(f|0,D|0,21)|0;m=D;r=zf(f|0,m|0,21)|0;W=D;G=jg(v|0,z|0,1048576,0)|0;G=$e(G|0,D|0,21)|0;Z=D;k=zf(G|0,Z|0,21)|0;za=D;o=jg(j|0,l|0,1048576,0)|0;o=$e(o|0,D|0,21)|0;P=D;ca=zf(o|0,P|0,21)|0;wa=D;hb=jg(Ka|0,F|0,1048576,0)|0;hb=$e(hb|0,D|0,21)|0;M=D;ea=jg(hb|0,M|0,fa|0,ea|0)|0;fa=D;M=zf(hb|0,M|0,21)|0;M=gg(Ka|0,F|0,M|0,D|0)|0;F=D;Ka=jg(N|0,ib|0,1048576,0)|0;Ka=$e(Ka|0,D|0,21)|0;hb=D;I=jg(Ka|0,hb|0,B|0,I|0)|0;B=D;hb=zf(Ka|0,hb|0,21)|0;hb=gg(N|0,ib|0,hb|0,D|0)|0;ib=D;N=jg(O|0,Ja|0,1048576,0)|0;N=$e(N|0,D|0,21)|0;Ka=D;n=jg(N|0,Ka|0,H|0,n|0)|0;H=D;Ka=zf(N|0,Ka|0,21)|0;Ka=gg(O|0,Ja|0,Ka|0,D|0)|0;Ja=D;O=ef(rb|0,K|0,666643,0)|0;N=D;qb=ef(rb|0,K|0,470296,0)|0;pb=D;u=ef(rb|0,K|0,654183,0)|0;p=D;y=ef(rb|0,K|0,-997805,-1)|0;q=D;ia=ef(rb|0,K|0,136657,0)|0;ha=D;K=ef(rb|0,K|0,-683901,-1)|0;K=jg(sb|0,J|0,K|0,D|0)|0;Ya=gg(K|0,D|0,Xa|0,Ya|0)|0;P=jg(Ya|0,D|0,o|0,P|0)|0;o=D;Ya=ef(n|0,H|0,666643,0)|0;Xa=D;K=ef(n|0,H|0,470296,0)|0;J=D;sb=ef(n|0,H|0,654183,0)|0;rb=D;R=ef(n|0,H|0,-997805,-1)|0;da=D;Va=ef(n|0,H|0,136657,0)|0;Wa=D;H=ef(n|0,H|0,-683901,-1)|0;n=D;Ia=ef(Ka|0,Ja|0,666643,0)|0;Ha=D;_a=ef(Ka|0,Ja|0,470296,0)|0;Za=D;U=ef(Ka|0,Ja|0,654183,0)|0;T=D;mb=ef(Ka|0,Ja|0,-997805,-1)|0;lb=D;$=ef(Ka|0,Ja|0,136657,0)|0;aa=D;Ja=ef(Ka|0,Ja|0,-683901,-1)|0;Ka=D;q=jg(jb|0,kb|0,y|0,q|0)|0;Wa=jg(q|0,D|0,Va|0,Wa|0)|0;Ka=jg(Wa|0,D|0,Ja|0,Ka|0)|0;cb=gg(Ka|0,D|0,bb|0,cb|0)|0;Z=jg(cb|0,D|0,G|0,Z|0)|0;G=D;cb=ef(I|0,B|0,666643,0)|0;bb=D;Ka=ef(I|0,B|0,470296,0)|0;Ja=D;Wa=ef(I|0,B|0,654183,0)|0;Va=D;q=ef(I|0,B|0,-997805,-1)|0;y=D;kb=ef(I|0,B|0,136657,0)|0;jb=D;B=ef(I|0,B|0,-683901,-1)|0;I=D;Ma=ef(hb|0,ib|0,666643,0)|0;La=D;eb=ef(hb|0,ib|0,470296,0)|0;db=D;Ga=ef(hb|0,ib|0,654183,0)|0;Fa=D;Ua=ef(hb|0,ib|0,-997805,-1)|0;Ta=D;L=ef(hb|0,ib|0,136657,0)|0;Q=D;ib=ef(hb|0,ib|0,-683901,-1)|0;hb=D;pb=jg(sb|0,rb|0,qb|0,pb|0)|0;nb=jg(pb|0,D|0,ob|0,nb|0)|0;lb=jg(nb|0,D|0,mb|0,lb|0)|0;jb=jg(lb|0,D|0,kb|0,jb|0)|0;hb=jg(jb|0,D|0,ib|0,hb|0)|0;ab=gg(hb|0,D|0,gb|0,ab|0)|0;m=jg(ab|0,D|0,f|0,m|0)|0;f=D;ab=ef(ea|0,fa|0,666643,0)|0;ab=jg(fb|0,$a|0,ab|0,D|0)|0;Oa=jg(ab|0,D|0,Na|0,Oa|0)|0;Ca=gg(Oa|0,D|0,Ba|0,Ca|0)|0;Ba=D;Oa=ef(ea|0,fa|0,470296,0)|0;Na=D;ab=ef(ea|0,fa|0,654183,0)|0;$a=D;bb=jg(eb|0,db|0,cb|0,bb|0)|0;$a=jg(bb|0,D|0,ab|0,$a|0)|0;Sa=jg($a|0,D|0,Ra|0,Sa|0)|0;Ea=jg(Sa|0,D|0,Da|0,Ea|0)|0;Y=gg(Ea|0,D|0,X|0,Y|0)|0;X=D;Ea=ef(ea|0,fa|0,-997805,-1)|0;Da=D;Sa=ef(ea|0,fa|0,136657,0)|0;Ra=D;Xa=jg(_a|0,Za|0,Ya|0,Xa|0)|0;Va=jg(Xa|0,D|0,Wa|0,Va|0)|0;Ta=jg(Va|0,D|0,Ua|0,Ta|0)|0;Ra=jg(Ta|0,D|0,Sa|0,Ra|0)|0;Pa=jg(Ra|0,D|0,Qa|0,Pa|0)|0;xa=jg(Pa|0,D|0,ya|0,xa|0)|0;i=gg(xa|0,D|0,va|0,i|0)|0;va=D;fa=ef(ea|0,fa|0,-683901,-1)|0;ea=D;xa=jg(Ca|0,Ba|0,1048576,0)|0;xa=$e(xa|0,D|0,21)|0;ya=D;La=jg(Oa|0,Na|0,Ma|0,La|0)|0;A=jg(La|0,D|0,g|0,A|0)|0;ba=gg(A|0,D|0,d|0,ba|0)|0;ba=jg(ba|0,D|0,xa|0,ya|0)|0;d=D;ya=zf(xa|0,ya|0,21)|0;xa=D;A=jg(Y|0,X|0,1048576,0)|0;A=$e(A|0,D|0,21)|0;g=D;Ha=jg(Ka|0,Ja|0,Ia|0,Ha|0)|0;Fa=jg(Ha|0,D|0,Ga|0,Fa|0)|0;Da=jg(Fa|0,D|0,Ea|0,Da|0)|0;E=jg(Da|0,D|0,e|0,E|0)|0;C=gg(E|0,D|0,s|0,C|0)|0;C=jg(C|0,D|0,A|0,g|0)|0;s=D;g=zf(A|0,g|0,21)|0;A=D;E=jg(i|0,va|0,1048576,0)|0;E=$e(E|0,D|0,21)|0;e=D;N=jg(K|0,J|0,O|0,N|0)|0;T=jg(N|0,D|0,U|0,T|0)|0;y=jg(T|0,D|0,q|0,y|0)|0;Q=jg(y|0,D|0,L|0,Q|0)|0;ea=jg(Q|0,D|0,fa|0,ea|0)|0;c=jg(ea|0,D|0,h|0,c|0)|0;W=gg(c|0,D|0,r|0,W|0)|0;W=jg(W|0,D|0,E|0,e|0)|0;r=D;e=zf(E|0,e|0,21)|0;E=D;c=jg(m|0,f|0,1048576,0)|0;c=$e(c|0,D|0,21)|0;h=D;p=jg(R|0,da|0,u|0,p|0)|0;aa=jg(p|0,D|0,$|0,aa|0)|0;I=jg(aa|0,D|0,B|0,I|0)|0;z=jg(I|0,D|0,v|0,z|0)|0;za=gg(z|0,D|0,k|0,za|0)|0;za=jg(za|0,D|0,c|0,h|0)|0;k=D;h=zf(c|0,h|0,21)|0;h=gg(m|0,f|0,h|0,D|0)|0;f=D;m=jg(Z|0,G|0,1048576,0)|0;m=$e(m|0,D|0,21)|0;c=D;ha=jg(H|0,n|0,ia|0,ha|0)|0;l=jg(ha|0,D|0,j|0,l|0)|0;wa=gg(l|0,D|0,ca|0,wa|0)|0;wa=jg(wa|0,D|0,m|0,c|0)|0;ca=D;c=zf(m|0,c|0,21)|0;c=gg(Z|0,G|0,c|0,D|0)|0;G=D;Z=jg(P|0,o|0,1048576,0)|0;Z=$e(Z|0,D|0,21)|0;m=D;F=jg(Z|0,m|0,M|0,F|0)|0;M=D;m=zf(Z|0,m|0,21)|0;m=gg(P|0,o|0,m|0,D|0)|0;o=D;P=jg(ba|0,d|0,1048576,0)|0;P=$e(P|0,D|0,21)|0;Z=D;l=zf(P|0,Z|0,21)|0;j=D;ha=jg(C|0,s|0,1048576,0)|0;ha=$e(ha|0,D|0,21)|0;ia=D;n=zf(ha|0,ia|0,21)|0;H=D;z=jg(W|0,r|0,1048576,0)|0;z=$e(z|0,D|0,21)|0;v=D;f=jg(z|0,v|0,h|0,f|0)|0;h=D;v=zf(z|0,v|0,21)|0;v=gg(W|0,r|0,v|0,D|0)|0;r=D;W=jg(za|0,k|0,1048576,0)|0;W=$e(W|0,D|0,21)|0;z=D;G=jg(W|0,z|0,c|0,G|0)|0;c=D;z=zf(W|0,z|0,21)|0;z=gg(za|0,k|0,z|0,D|0)|0;k=D;za=jg(wa|0,ca|0,1048576,0)|0;za=$e(za|0,D|0,21)|0;W=D;o=jg(za|0,W|0,m|0,o|0)|0;m=D;W=zf(za|0,W|0,21)|0;W=gg(wa|0,ca|0,W|0,D|0)|0;ca=D;wa=ef(F|0,M|0,666643,0)|0;wa=jg(Aa|0,_|0,wa|0,D|0)|0;_=D;Aa=ef(F|0,M|0,470296,0)|0;za=D;I=ef(F|0,M|0,654183,0)|0;B=D;aa=ef(F|0,M|0,-997805,-1)|0;$=D;p=ef(F|0,M|0,136657,0)|0;u=D;M=ef(F|0,M|0,-683901,-1)|0;M=jg(i|0,va|0,M|0,D|0)|0;ia=jg(M|0,D|0,ha|0,ia|0)|0;E=gg(ia|0,D|0,e|0,E|0)|0;e=D;ia=ef(o|0,m|0,666643,0)|0;ha=D;M=ef(o|0,m|0,470296,0)|0;M=jg(wa|0,_|0,M|0,D|0)|0;_=D;wa=ef(o|0,m|0,654183,0)|0;va=D;i=ef(o|0,m|0,-997805,-1)|0;F=D;da=ef(o|0,m|0,136657,0)|0;R=D;m=ef(o|0,m|0,-683901,-1)|0;o=D;ea=ef(W|0,ca|0,666643,0)|0;ea=jg(ga|0,S|0,ea|0,D|0)|0;S=D;ga=ef(W|0,ca|0,470296,0)|0;fa=D;Q=ef(W|0,ca|0,654183,0)|0;Q=jg(M|0,_|0,Q|0,D|0)|0;_=D;M=ef(W|0,ca|0,-997805,-1)|0;L=D;y=ef(W|0,ca|0,136657,0)|0;q=D;ca=ef(W|0,ca|0,-683901,-1)|0;W=D;$=jg(Y|0,X|0,aa|0,$|0)|0;Z=jg($|0,D|0,P|0,Z|0)|0;R=jg(Z|0,D|0,da|0,R|0)|0;W=jg(R|0,D|0,ca|0,W|0)|0;A=gg(W|0,D|0,g|0,A|0)|0;g=D;W=ef(G|0,c|0,666643,0)|0;ca=D;R=ef(G|0,c|0,470296,0)|0;R=jg(ea|0,S|0,R|0,D|0)|0;S=D;ea=ef(G|0,c|0,654183,0)|0;da=D;Z=ef(G|0,c|0,-997805,-1)|0;Z=jg(Q|0,_|0,Z|0,D|0)|0;_=D;Q=ef(G|0,c|0,136657,0)|0;P=D;c=ef(G|0,c|0,-683901,-1)|0;G=D;$=ef(z|0,k|0,666643,0)|0;aa=D;X=ef(z|0,k|0,470296,0)|0;Y=D;T=ef(z|0,k|0,654183,0)|0;U=D;N=ef(z|0,k|0,-997805,-1)|0;O=D;J=ef(z|0,k|0,136657,0)|0;K=D;k=ef(z|0,k|0,-683901,-1)|0;z=D;za=jg(Ca|0,Ba|0,Aa|0,za|0)|0;xa=gg(za|0,D|0,ya|0,xa|0)|0;va=jg(xa|0,D|0,wa|0,va|0)|0;L=jg(va|0,D|0,M|0,L|0)|0;P=jg(L|0,D|0,Q|0,P|0)|0;z=jg(P|0,D|0,k|0,z|0)|0;k=D;P=ef(f|0,h|0,666643,0)|0;V=jg(P|0,D|0,w|0,V|0)|0;w=D;P=ef(f|0,h|0,470296,0)|0;Q=D;L=ef(f|0,h|0,654183,0)|0;M=D;ra=jg(ua|0,ta|0,sa|0,ra|0)|0;pa=gg(ra|0,D|0,qa|0,pa|0)|0;ca=jg(pa|0,D|0,W|0,ca|0)|0;M=jg(ca|0,D|0,L|0,M|0)|0;Y=jg(M|0,D|0,X|0,Y|0)|0;X=D;M=ef(f|0,h|0,-997805,-1)|0;L=D;ca=ef(f|0,h|0,136657,0)|0;W=D;la=jg(oa|0,na|0,ma|0,la|0)|0;ja=gg(la|0,D|0,ka|0,ja|0)|0;ha=jg(ja|0,D|0,ia|0,ha|0)|0;fa=jg(ha|0,D|0,ga|0,fa|0)|0;da=jg(fa|0,D|0,ea|0,da|0)|0;W=jg(da|0,D|0,ca|0,W|0)|0;O=jg(W|0,D|0,N|0,O|0)|0;N=D;h=ef(f|0,h|0,-683901,-1)|0;f=D;W=jg(V|0,w|0,1048576,0)|0;W=$e(W|0,D|0,21)|0;ca=D;Q=jg(x|0,t|0,P|0,Q|0)|0;aa=jg(Q|0,D|0,$|0,aa|0)|0;aa=jg(aa|0,D|0,W|0,ca|0)|0;$=D;ca=zf(W|0,ca|0,21)|0;ca=gg(V|0,w|0,ca|0,D|0)|0;w=D;V=jg(Y|0,X|0,1048576,0)|0;V=$e(V|0,D|0,21)|0;W=D;L=jg(R|0,S|0,M|0,L|0)|0;U=jg(L|0,D|0,T|0,U|0)|0;U=jg(U|0,D|0,V|0,W|0)|0;T=D;W=zf(V|0,W|0,21)|0;V=D;L=jg(O|0,N|0,1048576,0)|0;L=$e(L|0,D|0,21)|0;M=D;f=jg(Z|0,_|0,h|0,f|0)|0;K=jg(f|0,D|0,J|0,K|0)|0;K=jg(K|0,D|0,L|0,M|0)|0;J=D;M=zf(L|0,M|0,21)|0;L=D;f=jg(z|0,k|0,1048576,0)|0;f=$e(f|0,D|0,21)|0;h=D;B=jg(ba|0,d|0,I|0,B|0)|0;F=jg(B|0,D|0,i|0,F|0)|0;j=gg(F|0,D|0,l|0,j|0)|0;q=jg(j|0,D|0,y|0,q|0)|0;G=jg(q|0,D|0,c|0,G|0)|0;G=jg(G|0,D|0,f|0,h|0)|0;c=D;h=zf(f|0,h|0,21)|0;h=gg(z|0,k|0,h|0,D|0)|0;k=D;z=jg(A|0,g|0,1048576,0)|0;z=$e(z|0,D|0,21)|0;f=D;u=jg(m|0,o|0,p|0,u|0)|0;s=jg(u|0,D|0,C|0,s|0)|0;H=gg(s|0,D|0,n|0,H|0)|0;H=jg(H|0,D|0,z|0,f|0)|0;n=D;f=zf(z|0,f|0,21)|0;f=gg(A|0,g|0,f|0,D|0)|0;g=D;A=jg(E|0,e|0,1048576,0)|0;A=$e(A|0,D|0,21)|0;z=D;r=jg(v|0,r|0,A|0,z|0)|0;v=D;z=zf(A|0,z|0,21)|0;A=D;s=jg(aa|0,$|0,1048576,0)|0;s=$e(s|0,D|0,21)|0;C=D;u=zf(s|0,C|0,21)|0;p=D;o=jg(U|0,T|0,1048576,0)|0;o=$e(o|0,D|0,21)|0;m=D;q=zf(o|0,m|0,21)|0;y=D;j=jg(K|0,J|0,1048576,0)|0;j=$e(j|0,D|0,21)|0;l=D;k=jg(h|0,k|0,j|0,l|0)|0;h=D;l=zf(j|0,l|0,21)|0;j=D;F=jg(G|0,c|0,1048576,0)|0;F=$e(F|0,D|0,21)|0;i=D;g=jg(f|0,g|0,F|0,i|0)|0;f=D;i=zf(F|0,i|0,21)|0;i=gg(G|0,c|0,i|0,D|0)|0;c=D;G=jg(H|0,n|0,1048576,0)|0;G=$e(G|0,D|0,21)|0;F=D;B=zf(G|0,F|0,21)|0;B=gg(H|0,n|0,B|0,D|0)|0;n=D;H=jg(r|0,v|0,1048576,0)|0;H=$e(H|0,D|0,21)|0;I=D;d=zf(H|0,I|0,21)|0;d=gg(r|0,v|0,d|0,D|0)|0;v=D;r=ef(H|0,I|0,666643,0)|0;r=jg(ca|0,w|0,r|0,D|0)|0;w=D;ca=ef(H|0,I|0,470296,0)|0;ba=D;_=ef(H|0,I|0,654183,0)|0;Z=D;S=ef(H|0,I|0,-997805,-1)|0;R=D;Q=ef(H|0,I|0,136657,0)|0;P=D;I=ef(H|0,I|0,-683901,-1)|0;H=D;t=$e(r|0,w|0,21)|0;x=D;$=jg(ca|0,ba|0,aa|0,$|0)|0;p=gg($|0,D|0,u|0,p|0)|0;p=jg(p|0,D|0,t|0,x|0)|0;u=D;x=zf(t|0,x|0,21)|0;x=gg(r|0,w|0,x|0,D|0)|0;w=D;r=$e(p|0,u|0,21)|0;t=D;X=jg(_|0,Z|0,Y|0,X|0)|0;V=gg(X|0,D|0,W|0,V|0)|0;C=jg(V|0,D|0,s|0,C|0)|0;C=jg(C|0,D|0,r|0,t|0)|0;s=D;t=zf(r|0,t|0,21)|0;t=gg(p|0,u|0,t|0,D|0)|0;u=D;p=$e(C|0,s|0,21)|0;r=D;R=jg(U|0,T|0,S|0,R|0)|0;y=gg(R|0,D|0,q|0,y|0)|0;y=jg(y|0,D|0,p|0,r|0)|0;q=D;r=zf(p|0,r|0,21)|0;r=gg(C|0,s|0,r|0,D|0)|0;s=D;C=$e(y|0,q|0,21)|0;p=D;N=jg(Q|0,P|0,O|0,N|0)|0;L=gg(N|0,D|0,M|0,L|0)|0;m=jg(L|0,D|0,o|0,m|0)|0;m=jg(m|0,D|0,C|0,p|0)|0;o=D;p=zf(C|0,p|0,21)|0;p=gg(y|0,q|0,p|0,D|0)|0;q=D;y=$e(m|0,o|0,21)|0;C=D;H=jg(K|0,J|0,I|0,H|0)|0;j=gg(H|0,D|0,l|0,j|0)|0;j=jg(j|0,D|0,y|0,C|0)|0;l=D;C=zf(y|0,C|0,21)|0;C=gg(m|0,o|0,C|0,D|0)|0;o=D;m=$e(j|0,l|0,21)|0;y=D;h=jg(k|0,h|0,m|0,y|0)|0;k=D;y=zf(m|0,y|0,21)|0;y=gg(j|0,l|0,y|0,D|0)|0;l=D;j=$e(h|0,k|0,21)|0;m=D;c=jg(j|0,m|0,i|0,c|0)|0;i=D;m=zf(j|0,m|0,21)|0;m=gg(h|0,k|0,m|0,D|0)|0;k=D;h=$e(c|0,i|0,21)|0;j=D;f=jg(g|0,f|0,h|0,j|0)|0;g=D;j=zf(h|0,j|0,21)|0;j=gg(c|0,i|0,j|0,D|0)|0;i=D;c=$e(f|0,g|0,21)|0;h=D;n=jg(c|0,h|0,B|0,n|0)|0;B=D;h=zf(c|0,h|0,21)|0;h=gg(f|0,g|0,h|0,D|0)|0;g=D;f=$e(n|0,B|0,21)|0;c=D;e=jg(G|0,F|0,E|0,e|0)|0;A=gg(e|0,D|0,z|0,A|0)|0;A=jg(A|0,D|0,f|0,c|0)|0;z=D;c=zf(f|0,c|0,21)|0;c=gg(n|0,B|0,c|0,D|0)|0;B=D;n=$e(A|0,z|0,21)|0;f=D;v=jg(n|0,f|0,d|0,v|0)|0;d=D;f=zf(n|0,f|0,21)|0;f=gg(A|0,z|0,f|0,D|0)|0;z=D;A=$e(v|0,d|0,21)|0;n=D;e=zf(A|0,n|0,21)|0;e=gg(v|0,d|0,e|0,D|0)|0;d=D;v=ef(A|0,n|0,666643,0)|0;w=jg(v|0,D|0,x|0,w|0)|0;x=D;v=ef(A|0,n|0,470296,0)|0;v=jg(t|0,u|0,v|0,D|0)|0;u=D;t=ef(A|0,n|0,654183,0)|0;t=jg(r|0,s|0,t|0,D|0)|0;s=D;r=ef(A|0,n|0,-997805,-1)|0;r=jg(p|0,q|0,r|0,D|0)|0;q=D;p=ef(A|0,n|0,136657,0)|0;p=jg(C|0,o|0,p|0,D|0)|0;o=D;n=ef(A|0,n|0,-683901,-1)|0;n=jg(y|0,l|0,n|0,D|0)|0;l=D;y=$e(w|0,x|0,21)|0;A=D;u=jg(v|0,u|0,y|0,A|0)|0;v=D;A=zf(y|0,A|0,21)|0;A=gg(w|0,x|0,A|0,D|0)|0;x=D;w=$e(u|0,v|0,21)|0;y=D;s=jg(t|0,s|0,w|0,y|0)|0;t=D;y=zf(w|0,y|0,21)|0;y=gg(u|0,v|0,y|0,D|0)|0;v=D;u=$e(s|0,t|0,21)|0;w=D;q=jg(r|0,q|0,u|0,w|0)|0;r=D;w=zf(u|0,w|0,21)|0;w=gg(s|0,t|0,w|0,D|0)|0;t=D;s=$e(q|0,r|0,21)|0;u=D;o=jg(p|0,o|0,s|0,u|0)|0;p=D;u=zf(s|0,u|0,21)|0;u=gg(q|0,r|0,u|0,D|0)|0;r=D;q=$e(o|0,p|0,21)|0;s=D;l=jg(n|0,l|0,q|0,s|0)|0;n=D;s=zf(q|0,s|0,21)|0;s=gg(o|0,p|0,s|0,D|0)|0;p=D;o=$e(l|0,n|0,21)|0;q=D;k=jg(o|0,q|0,m|0,k|0)|0;m=D;q=zf(o|0,q|0,21)|0;q=gg(l|0,n|0,q|0,D|0)|0;n=D;l=$e(k|0,m|0,21)|0;o=D;i=jg(l|0,o|0,j|0,i|0)|0;j=D;o=zf(l|0,o|0,21)|0;o=gg(k|0,m|0,o|0,D|0)|0;m=D;k=$e(i|0,j|0,21)|0;l=D;g=jg(k|0,l|0,h|0,g|0)|0;h=D;l=zf(k|0,l|0,21)|0;l=gg(i|0,j|0,l|0,D|0)|0;j=D;i=$e(g|0,h|0,21)|0;k=D;B=jg(i|0,k|0,c|0,B|0)|0;c=D;k=zf(i|0,k|0,21)|0;k=gg(g|0,h|0,k|0,D|0)|0;h=D;g=$e(B|0,c|0,21)|0;i=D;z=jg(g|0,i|0,f|0,z|0)|0;f=D;i=zf(g|0,i|0,21)|0;i=gg(B|0,c|0,i|0,D|0)|0;c=D;B=$e(z|0,f|0,21)|0;g=D;d=jg(B|0,g|0,e|0,d|0)|0;e=D;g=zf(B|0,g|0,21)|0;g=gg(z|0,f|0,g|0,D|0)|0;f=D;a[b>>0]=A;z=Cf(A|0,x|0,8)|0;a[b+1>>0]=z;x=Cf(A|0,x|0,16)|0;A=D;z=zf(y|0,v|0,5)|0;a[b+2>>0]=z|x;x=Cf(y|0,v|0,3)|0;a[b+3>>0]=x;x=Cf(y|0,v|0,11)|0;a[b+4>>0]=x;v=Cf(y|0,v|0,19)|0;y=D;x=zf(w|0,t|0,2)|0;a[b+5>>0]=x|v;v=Cf(w|0,t|0,6)|0;a[b+6>>0]=v;t=Cf(w|0,t|0,14)|0;w=D;v=zf(u|0,r|0,7)|0;a[b+7>>0]=v|t;t=Cf(u|0,r|0,1)|0;a[b+8>>0]=t;t=Cf(u|0,r|0,9)|0;a[b+9>>0]=t;r=Cf(u|0,r|0,17)|0;u=D;t=zf(s|0,p|0,4)|0;a[b+10>>0]=t|r;r=Cf(s|0,p|0,4)|0;a[b+11>>0]=r;r=Cf(s|0,p|0,12)|0;a[b+12>>0]=r;p=Cf(s|0,p|0,20)|0;s=D;r=zf(q|0,n|0,1)|0;a[b+13>>0]=r|p;p=Cf(q|0,n|0,7)|0;a[b+14>>0]=p;n=Cf(q|0,n|0,15)|0;q=D;p=zf(o|0,m|0,6)|0;a[b+15>>0]=p|n;n=Cf(o|0,m|0,2)|0;a[b+16>>0]=n;n=Cf(o|0,m|0,10)|0;a[b+17>>0]=n;m=Cf(o|0,m|0,18)|0;o=D;n=zf(l|0,j|0,3)|0;a[b+18>>0]=n|m;m=Cf(l|0,j|0,5)|0;a[b+19>>0]=m;j=Cf(l|0,j|0,13)|0;a[b+20>>0]=j;a[b+21>>0]=k;j=Cf(k|0,h|0,8)|0;a[b+22>>0]=j;h=Cf(k|0,h|0,16)|0;k=D;j=zf(i|0,c|0,5)|0;a[b+23>>0]=j|h;h=Cf(i|0,c|0,3)|0;a[b+24>>0]=h;h=Cf(i|0,c|0,11)|0;a[b+25>>0]=h;c=Cf(i|0,c|0,19)|0;i=D;h=zf(g|0,f|0,2)|0;a[b+26>>0]=h|c;c=Cf(g|0,f|0,6)|0;a[b+27>>0]=c;f=Cf(g|0,f|0,14)|0;g=D;c=zf(d|0,e|0,7)|0;a[b+28>>0]=f|c;c=Cf(d|0,e|0,1)|0;a[b+29>>0]=c;c=Cf(d|0,e|0,9)|0;a[b+30>>0]=c;e=Cf(d|0,e|0,17)|0;a[b+31>>0]=e;return}function ma(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0;I=l;n=l=l+63&-64;l=l+16|0;do if(a>>>0<245){s=a>>>0<11?16:a+11&-8;r=c[8850]|0;if(r>>>(s>>>3)&3|0){a=35440+((r>>>(s>>>3)&1^1)+(s>>>3)<<1<<2)|0;b=c[a+8>>2]|0;d=c[b+8>>2]|0;do if((a|0)!=(d|0)){if(d>>>0<(c[8854]|0)>>>0)ba();if((c[d+12>>2]|0)==(b|0)){c[d+12>>2]=a;c[a+8>>2]=d;break}else ba()}else c[8850]=r&~(1<<(r>>>(s>>>3)&1^1)+(s>>>3));while(0);H=(r>>>(s>>>3)&1^1)+(s>>>3)<<3;c[b+4>>2]=H|3;c[b+H+4>>2]=c[b+H+4>>2]|1;H=b+8|0;l=I;return H|0}q=c[8852]|0;if(s>>>0>q>>>0){if(r>>>(s>>>3)|0){a=r>>>(s>>>3)<<(s>>>3)&(2<<(s>>>3)|0-(2<<(s>>>3)));e=((a&0-a)+-1|0)>>>(((a&0-a)+-1|0)>>>12&16);d=e>>>(e>>>5&8)>>>(e>>>(e>>>5&8)>>>2&4);d=(e>>>5&8|((a&0-a)+-1|0)>>>12&16|e>>>(e>>>5&8)>>>2&4|d>>>1&2|d>>>(d>>>1&2)>>>1&1)+(d>>>(d>>>1&2)>>>(d>>>(d>>>1&2)>>>1&1))|0;e=c[35440+(d<<1<<2)+8>>2]|0;a=c[e+8>>2]|0;do if((35440+(d<<1<<2)|0)!=(a|0)){if(a>>>0<(c[8854]|0)>>>0)ba();if((c[a+12>>2]|0)==(e|0)){c[a+12>>2]=35440+(d<<1<<2);c[35440+(d<<1<<2)+8>>2]=a;f=r;break}else ba()}else{c[8850]=r&~(1<<d);f=r&~(1<<d)}while(0);c[e+4>>2]=s|3;c[e+s+4>>2]=(d<<3)-s|1;c[e+s+((d<<3)-s)>>2]=(d<<3)-s;if(q|0){b=c[8855]|0;if(f&1<<(q>>>3)){a=c[35440+(q>>>3<<1<<2)+8>>2]|0;if(a>>>0<(c[8854]|0)>>>0)ba();else{h=a;i=35440+(q>>>3<<1<<2)+8|0}}else{c[8850]=f|1<<(q>>>3);h=35440+(q>>>3<<1<<2)|0;i=35440+(q>>>3<<1<<2)+8|0}c[i>>2]=b;c[h+12>>2]=b;c[b+8>>2]=h;c[b+12>>2]=35440+(q>>>3<<1<<2)}c[8852]=(d<<3)-s;c[8855]=e+s;H=e+8|0;l=I;return H|0}k=c[8851]|0;if(k){b=((k&0-k)+-1|0)>>>(((k&0-k)+-1|0)>>>12&16);a=b>>>(b>>>5&8)>>>(b>>>(b>>>5&8)>>>2&4);a=c[35704+((b>>>5&8|((k&0-k)+-1|0)>>>12&16|b>>>(b>>>5&8)>>>2&4|a>>>1&2|a>>>(a>>>1&2)>>>1&1)+(a>>>(a>>>1&2)>>>(a>>>(a>>>1&2)>>>1&1))<<2)>>2]|0;b=(c[a+4>>2]&-8)-s|0;d=c[a+16+(((c[a+16>>2]|0)==0&1)<<2)>>2]|0;if(!d){j=a;h=b}else{do{G=(c[d+4>>2]&-8)-s|0;H=G>>>0<b>>>0;b=H?G:b;a=H?d:a;d=c[d+16+(((c[d+16>>2]|0)==0&1)<<2)>>2]|0}while((d|0)!=0);j=a;h=b}f=c[8854]|0;if(j>>>0<f>>>0)ba();i=j+s|0;if(j>>>0>=i>>>0)ba();g=c[j+24>>2]|0;a=c[j+12>>2]|0;do if((a|0)==(j|0)){b=j+20|0;a=c[b>>2]|0;if(!a){b=j+16|0;a=c[b>>2]|0;if(!a){m=0;break}}while(1){d=a+20|0;e=c[d>>2]|0;if(e|0){a=e;b=d;continue}d=a+16|0;e=c[d>>2]|0;if(!e)break;else{a=e;b=d}}if(b>>>0<f>>>0)ba();else{c[b>>2]=0;m=a;break}}else{b=c[j+8>>2]|0;if(b>>>0<f>>>0)ba();if((c[b+12>>2]|0)!=(j|0))ba();if((c[a+8>>2]|0)==(j|0)){c[b+12>>2]=a;c[a+8>>2]=b;m=a;break}else ba()}while(0);a:do if(g|0){a=c[j+28>>2]|0;do if((j|0)==(c[35704+(a<<2)>>2]|0)){c[35704+(a<<2)>>2]=m;if(!m){c[8851]=k&~(1<<a);break a}}else if(g>>>0>=(c[8854]|0)>>>0){c[g+16+(((c[g+16>>2]|0)!=(j|0)&1)<<2)>>2]=m;if(!m)break a;else break}else ba();while(0);b=c[8854]|0;if(m>>>0<b>>>0)ba();c[m+24>>2]=g;a=c[j+16>>2]|0;do if(a|0)if(a>>>0<b>>>0)ba();else{c[m+16>>2]=a;c[a+24>>2]=m;break}while(0);a=c[j+20>>2]|0;if(a|0)if(a>>>0<(c[8854]|0)>>>0)ba();else{c[m+20>>2]=a;c[a+24>>2]=m;break}}while(0);if(h>>>0<16){H=h+s|0;c[j+4>>2]=H|3;H=j+H+4|0;c[H>>2]=c[H>>2]|1}else{c[j+4>>2]=s|3;c[i+4>>2]=h|1;c[i+h>>2]=h;if(q|0){b=c[8855]|0;if(r&1<<(q>>>3)){a=c[35440+(q>>>3<<1<<2)+8>>2]|0;if(a>>>0<(c[8854]|0)>>>0)ba();else{o=a;p=35440+(q>>>3<<1<<2)+8|0}}else{c[8850]=r|1<<(q>>>3);o=35440+(q>>>3<<1<<2)|0;p=35440+(q>>>3<<1<<2)+8|0}c[p>>2]=b;c[o+12>>2]=b;c[b+8>>2]=o;c[b+12>>2]=35440+(q>>>3<<1<<2)}c[8852]=h;c[8855]=i}H=j+8|0;l=I;return H|0}}}else if(a>>>0<=4294967231){s=a+11&-8;k=c[8851]|0;if(k){if((a+11|0)>>>8)if(s>>>0>16777215)i=31;else{i=(a+11|0)>>>8<<((((a+11|0)>>>8)+1048320|0)>>>16&8);i=14-((i+520192|0)>>>16&4|(((a+11|0)>>>8)+1048320|0)>>>16&8|((i<<((i+520192|0)>>>16&4))+245760|0)>>>16&2)+(i<<((i+520192|0)>>>16&4)<<(((i<<((i+520192|0)>>>16&4))+245760|0)>>>16&2)>>>15)|0;i=s>>>(i+7|0)&1|i<<1}else i=0;b=c[35704+(i<<2)>>2]|0;b:do if(!b){b=0;a=0;d=0-s|0;A=81}else{a=0;d=0-s|0;h=s<<((i|0)==31?0:25-(i>>>1)|0);f=0;while(1){e=(c[b+4>>2]&-8)-s|0;if(e>>>0<d>>>0)if(!e){a=b;d=0;e=b;A=85;break b}else{a=b;d=e}e=c[b+20>>2]|0;b=c[b+16+(h>>>31<<2)>>2]|0;f=(e|0)==0|(e|0)==(b|0)?f:e;e=(b|0)==0;if(e){b=f;A=81;break}else h=h<<((e^1)&1)}}while(0);if((A|0)==81){if((b|0)==0&(a|0)==0){a=2<<i;if(!(k&(a|0-a)))break;o=(k&(a|0-a)&0-(k&(a|0-a)))+-1|0;p=o>>>(o>>>12&16)>>>(o>>>(o>>>12&16)>>>5&8);b=p>>>(p>>>2&4)>>>(p>>>(p>>>2&4)>>>1&2);a=0;b=c[35704+((o>>>(o>>>12&16)>>>5&8|o>>>12&16|p>>>2&4|p>>>(p>>>2&4)>>>1&2|b>>>1&1)+(b>>>(b>>>1&1))<<2)>>2]|0}if(!b){j=a;i=d}else{e=b;A=85}}if((A|0)==85)while(1){A=0;b=(c[e+4>>2]&-8)-s|0;p=b>>>0<d>>>0;b=p?b:d;a=p?e:a;e=c[e+16+(((c[e+16>>2]|0)==0&1)<<2)>>2]|0;if(!e){j=a;i=b;break}else{d=b;A=85}}if((j|0)!=0?i>>>0<((c[8852]|0)-s|0)>>>0:0){f=c[8854]|0;if(j>>>0<f>>>0)ba();h=j+s|0;if(j>>>0>=h>>>0)ba();g=c[j+24>>2]|0;a=c[j+12>>2]|0;do if((a|0)==(j|0)){b=j+20|0;a=c[b>>2]|0;if(!a){b=j+16|0;a=c[b>>2]|0;if(!a){q=0;break}}while(1){d=a+20|0;e=c[d>>2]|0;if(e|0){a=e;b=d;continue}d=a+16|0;e=c[d>>2]|0;if(!e)break;else{a=e;b=d}}if(b>>>0<f>>>0)ba();else{c[b>>2]=0;q=a;break}}else{b=c[j+8>>2]|0;if(b>>>0<f>>>0)ba();if((c[b+12>>2]|0)!=(j|0))ba();if((c[a+8>>2]|0)==(j|0)){c[b+12>>2]=a;c[a+8>>2]=b;q=a;break}else ba()}while(0);c:do if(g){a=c[j+28>>2]|0;do if((j|0)==(c[35704+(a<<2)>>2]|0)){c[35704+(a<<2)>>2]=q;if(!q){c[8851]=k&~(1<<a);x=k&~(1<<a);break c}}else if(g>>>0>=(c[8854]|0)>>>0){c[g+16+(((c[g+16>>2]|0)!=(j|0)&1)<<2)>>2]=q;if(!q){x=k;break c}else break}else ba();while(0);b=c[8854]|0;if(q>>>0<b>>>0)ba();c[q+24>>2]=g;a=c[j+16>>2]|0;do if(a|0)if(a>>>0<b>>>0)ba();else{c[q+16>>2]=a;c[a+24>>2]=q;break}while(0);a=c[j+20>>2]|0;if(a)if(a>>>0<(c[8854]|0)>>>0)ba();else{c[q+20>>2]=a;c[a+24>>2]=q;x=k;break}else x=k}else x=k;while(0);do if(i>>>0>=16){c[j+4>>2]=s|3;c[h+4>>2]=i|1;c[h+i>>2]=i;b=i>>>3;if(i>>>0<256){a=c[8850]|0;if(a&1<<b){a=c[35440+(b<<1<<2)+8>>2]|0;if(a>>>0<(c[8854]|0)>>>0)ba();else{r=a;w=35440+(b<<1<<2)+8|0}}else{c[8850]=a|1<<b;r=35440+(b<<1<<2)|0;w=35440+(b<<1<<2)+8|0}c[w>>2]=h;c[r+12>>2]=h;c[h+8>>2]=r;c[h+12>>2]=35440+(b<<1<<2);break}a=i>>>8;if(a)if(i>>>0>16777215)a=31;else{H=a<<((a+1048320|0)>>>16&8)<<(((a<<((a+1048320|0)>>>16&8))+520192|0)>>>16&4);a=14-(((a<<((a+1048320|0)>>>16&8))+520192|0)>>>16&4|(a+1048320|0)>>>16&8|(H+245760|0)>>>16&2)+(H<<((H+245760|0)>>>16&2)>>>15)|0;a=i>>>(a+7|0)&1|a<<1}else a=0;d=35704+(a<<2)|0;c[h+28>>2]=a;c[h+16+4>>2]=0;c[h+16>>2]=0;b=1<<a;if(!(x&b)){c[8851]=x|b;c[d>>2]=h;c[h+24>>2]=d;c[h+12>>2]=h;c[h+8>>2]=h;break}b=i<<((a|0)==31?0:25-(a>>>1)|0);e=c[d>>2]|0;while(1){if((c[e+4>>2]&-8|0)==(i|0)){A=139;break}d=e+16+(b>>>31<<2)|0;a=c[d>>2]|0;if(!a){A=136;break}else{b=b<<1;e=a}}if((A|0)==136)if(d>>>0<(c[8854]|0)>>>0)ba();else{c[d>>2]=h;c[h+24>>2]=e;c[h+12>>2]=h;c[h+8>>2]=h;break}else if((A|0)==139){a=e+8|0;b=c[a>>2]|0;H=c[8854]|0;if(b>>>0>=H>>>0&e>>>0>=H>>>0){c[b+12>>2]=h;c[a>>2]=h;c[h+8>>2]=b;c[h+12>>2]=e;c[h+24>>2]=0;break}else ba()}}else{H=i+s|0;c[j+4>>2]=H|3;H=j+H+4|0;c[H>>2]=c[H>>2]|1}while(0);H=j+8|0;l=I;return H|0}}}else s=-1;while(0);d=c[8852]|0;if(d>>>0>=s>>>0){a=d-s|0;b=c[8855]|0;if(a>>>0>15){H=b+s|0;c[8855]=H;c[8852]=a;c[H+4>>2]=a|1;c[H+a>>2]=a;c[b+4>>2]=s|3}else{c[8852]=0;c[8855]=0;c[b+4>>2]=d|3;c[b+d+4>>2]=c[b+d+4>>2]|1}H=b+8|0;l=I;return H|0}f=c[8853]|0;if(f>>>0>s>>>0){F=f-s|0;c[8853]=F;H=c[8856]|0;G=H+s|0;c[8856]=G;c[G+4>>2]=F|1;c[H+4>>2]=s|3;H=H+8|0;l=I;return H|0}if(!(c[8968]|0)){c[8970]=4096;c[8969]=4096;c[8971]=-1;c[8972]=-1;c[8973]=0;c[8961]=0;c[n>>2]=n&-16^1431655768;c[8968]=n&-16^1431655768;a=4096}else a=c[8970]|0;h=s+48|0;i=s+47|0;k=a+i|0;j=0-a|0;if((k&j)>>>0<=s>>>0){H=0;l=I;return H|0}a=c[8960]|0;if(a|0?(x=c[8958]|0,(x+(k&j)|0)>>>0<=x>>>0?1:(x+(k&j)|0)>>>0>a>>>0):0){H=0;l=I;return H|0}d:do if(!(c[8961]&4)){d=c[8856]|0;e:do if(d){b=35848;while(1){a=c[b>>2]|0;if(a>>>0<=d>>>0?(t=b+4|0,(a+(c[t>>2]|0)|0)>>>0>d>>>0):0)break;a=c[b+8>>2]|0;if(!a){A=163;break e}else b=a}if((k-f&j)>>>0<2147483647){a=nd(k-f&j|0)|0;if((a|0)==((c[b>>2]|0)+(c[t>>2]|0)|0))if((a|0)==(-1|0))a=k-f&j;else{h=k-f&j;g=a;A=180;break d}else{e=a;d=k-f&j;A=171}}else a=0}else A=163;while(0);do if((A|0)==163){b=nd(0)|0;if((b|0)!=(-1|0)?(v=c[8969]|0,v=((v+-1&b|0)==0?0:(v+-1+b&0-v)-b|0)+(k&j)|0,u=c[8958]|0,v>>>0>s>>>0&v>>>0<2147483647):0){x=c[8960]|0;if(x|0?(v+u|0)>>>0<=u>>>0|(v+u|0)>>>0>x>>>0:0){a=0;break}a=nd(v|0)|0;if((a|0)==(b|0)){h=v;g=b;A=180;break d}else{e=a;d=v;A=171}}else a=0}while(0);do if((A|0)==171){b=0-d|0;if(!(h>>>0>d>>>0&(d>>>0<2147483647&(e|0)!=(-1|0))))if((e|0)==(-1|0)){a=0;break}else{h=d;g=e;A=180;break d}a=c[8970]|0;a=i-d+a&0-a;if(a>>>0>=2147483647){h=d;g=e;A=180;break d}if((nd(a|0)|0)==(-1|0)){nd(b|0)|0;a=0;break}else{h=a+d|0;g=e;A=180;break d}}while(0);c[8961]=c[8961]|4;A=178}else{a=0;A=178}while(0);if(((A|0)==178?(k&j)>>>0<2147483647:0)?(g=nd(k&j|0)|0,y=nd(0)|0,z=(y-g|0)>>>0>(s+40|0)>>>0,!((g|0)==(-1|0)|z^1|g>>>0<y>>>0&((g|0)!=(-1|0)&(y|0)!=(-1|0))^1)):0){h=z?y-g|0:a;A=180}if((A|0)==180){a=(c[8958]|0)+h|0;c[8958]=a;if(a>>>0>(c[8959]|0)>>>0)c[8959]=a;i=c[8856]|0;do if(i){a=35848;while(1){b=c[a>>2]|0;d=a+4|0;e=c[d>>2]|0;if((g|0)==(b+e|0)){A=190;break}f=c[a+8>>2]|0;if(!f)break;else a=f}if(((A|0)==190?(c[a+12>>2]&8|0)==0:0)?i>>>0<g>>>0&i>>>0>=b>>>0:0){c[d>>2]=e+h;G=(i+8&7|0)==0?0:0-(i+8)&7;H=(c[8853]|0)+(h-G)|0;c[8856]=i+G;c[8853]=H;c[i+G+4>>2]=H|1;c[i+G+H+4>>2]=40;c[8857]=c[8972];break}a=c[8854]|0;if(g>>>0<a>>>0){c[8854]=g;j=g}else j=a;d=g+h|0;a=35848;while(1){if((c[a>>2]|0)==(d|0)){A=198;break}b=c[a+8>>2]|0;if(!b)break;else a=b}if((A|0)==198?(c[a+12>>2]&8|0)==0:0){c[a>>2]=g;m=a+4|0;c[m>>2]=(c[m>>2]|0)+h;m=g+8|0;m=g+((m&7|0)==0?0:0-m&7)|0;a=d+((d+8&7|0)==0?0:0-(d+8)&7)|0;k=m+s|0;f=a-m-s|0;c[m+4>>2]=s|3;do if((a|0)!=(i|0)){if((a|0)==(c[8855]|0)){H=(c[8852]|0)+f|0;c[8852]=H;c[8855]=k;c[k+4>>2]=H|1;c[k+H>>2]=H;break}i=c[a+4>>2]|0;if((i&3|0)==1){f:do if(i>>>0>=256){h=c[a+24>>2]|0;b=c[a+12>>2]|0;do if((b|0)==(a|0)){b=c[a+16+4>>2]|0;if(!b){b=c[a+16>>2]|0;if(!b){F=0;break}else g=a+16|0}else g=a+16+4|0;while(1){d=b+20|0;e=c[d>>2]|0;if(e|0){b=e;g=d;continue}d=b+16|0;e=c[d>>2]|0;if(!e)break;else{b=e;g=d}}if(g>>>0<j>>>0)ba();else{c[g>>2]=0;F=b;break}}else{d=c[a+8>>2]|0;if(d>>>0<j>>>0)ba();if((c[d+12>>2]|0)!=(a|0))ba();if((c[b+8>>2]|0)==(a|0)){c[d+12>>2]=b;c[b+8>>2]=d;F=b;break}else ba()}while(0);if(!h)break;b=c[a+28>>2]|0;do if((a|0)!=(c[35704+(b<<2)>>2]|0))if(h>>>0>=(c[8854]|0)>>>0){c[h+16+(((c[h+16>>2]|0)!=(a|0)&1)<<2)>>2]=F;if(!F)break f;else break}else ba();else{c[35704+(b<<2)>>2]=F;if(F|0)break;c[8851]=c[8851]&~(1<<b);break f}while(0);d=c[8854]|0;if(F>>>0<d>>>0)ba();c[F+24>>2]=h;b=c[a+16>>2]|0;do if(b|0)if(b>>>0<d>>>0)ba();else{c[F+16>>2]=b;c[b+24>>2]=F;break}while(0);b=c[a+16+4>>2]|0;if(!b)break;if(b>>>0<(c[8854]|0)>>>0)ba();else{c[F+20>>2]=b;c[b+24>>2]=F;break}}else{b=c[a+8>>2]|0;d=c[a+12>>2]|0;do if((b|0)!=(35440+(i>>>3<<1<<2)|0)){if(b>>>0<j>>>0)ba();if((c[b+12>>2]|0)==(a|0))break;ba()}while(0);if((d|0)==(b|0)){c[8850]=c[8850]&~(1<<(i>>>3));break}do if((d|0)==(35440+(i>>>3<<1<<2)|0))E=d+8|0;else{if(d>>>0<j>>>0)ba();if((c[d+8>>2]|0)==(a|0)){E=d+8|0;break}ba()}while(0);c[b+12>>2]=d;c[E>>2]=b}while(0);a=a+(i&-8)|0;f=(i&-8)+f|0}b=a+4|0;c[b>>2]=c[b>>2]&-2;c[k+4>>2]=f|1;c[k+f>>2]=f;b=f>>>3;if(f>>>0<256){a=c[8850]|0;do if(!(a&1<<b)){c[8850]=a|1<<b;G=35440+(b<<1<<2)|0;H=35440+(b<<1<<2)+8|0}else{a=c[35440+(b<<1<<2)+8>>2]|0;if(a>>>0>=(c[8854]|0)>>>0){G=a;H=35440+(b<<1<<2)+8|0;break}ba()}while(0);c[H>>2]=k;c[G+12>>2]=k;c[k+8>>2]=G;c[k+12>>2]=35440+(b<<1<<2);break}a=f>>>8;do if(!a)a=0;else{if(f>>>0>16777215){a=31;break}H=a<<((a+1048320|0)>>>16&8)<<(((a<<((a+1048320|0)>>>16&8))+520192|0)>>>16&4);a=14-(((a<<((a+1048320|0)>>>16&8))+520192|0)>>>16&4|(a+1048320|0)>>>16&8|(H+245760|0)>>>16&2)+(H<<((H+245760|0)>>>16&2)>>>15)|0;a=f>>>(a+7|0)&1|a<<1}while(0);e=35704+(a<<2)|0;c[k+28>>2]=a;c[k+16+4>>2]=0;c[k+16>>2]=0;b=c[8851]|0;d=1<<a;if(!(b&d)){c[8851]=b|d;c[e>>2]=k;c[k+24>>2]=e;c[k+12>>2]=k;c[k+8>>2]=k;break}b=f<<((a|0)==31?0:25-(a>>>1)|0);e=c[e>>2]|0;while(1){if((c[e+4>>2]&-8|0)==(f|0)){A=265;break}d=e+16+(b>>>31<<2)|0;a=c[d>>2]|0;if(!a){A=262;break}else{b=b<<1;e=a}}if((A|0)==262)if(d>>>0<(c[8854]|0)>>>0)ba();else{c[d>>2]=k;c[k+24>>2]=e;c[k+12>>2]=k;c[k+8>>2]=k;break}else if((A|0)==265){a=e+8|0;b=c[a>>2]|0;H=c[8854]|0;if(b>>>0>=H>>>0&e>>>0>=H>>>0){c[b+12>>2]=k;c[a>>2]=k;c[k+8>>2]=b;c[k+12>>2]=e;c[k+24>>2]=0;break}else ba()}}else{H=(c[8853]|0)+f|0;c[8853]=H;c[8856]=k;c[k+4>>2]=H|1}while(0);H=m+8|0;l=I;return H|0}a=35848;while(1){b=c[a>>2]|0;if(b>>>0<=i>>>0?(B=b+(c[a+4>>2]|0)|0,B>>>0>i>>>0):0)break;a=c[a+8>>2]|0}f=B+-47+((B+-47+8&7|0)==0?0:0-(B+-47+8)&7)|0;f=f>>>0<(i+16|0)>>>0?i:f;a=g+8|0;a=(a&7|0)==0?0:0-a&7;H=g+a|0;a=h+-40-a|0;c[8856]=H;c[8853]=a;c[H+4>>2]=a|1;c[H+a+4>>2]=40;c[8857]=c[8972];c[f+4>>2]=27;c[f+8>>2]=c[8962];c[f+8+4>>2]=c[8963];c[f+8+8>>2]=c[8964];c[f+8+12>>2]=c[8965];c[8962]=g;c[8963]=h;c[8965]=0;c[8964]=f+8;a=f+24|0;do{H=a;a=a+4|0;c[a>>2]=7}while((H+8|0)>>>0<B>>>0);if((f|0)!=(i|0)){c[f+4>>2]=c[f+4>>2]&-2;c[i+4>>2]=f-i|1;c[f>>2]=f-i;if((f-i|0)>>>0<256){b=35440+((f-i|0)>>>3<<1<<2)|0;a=c[8850]|0;if(a&1<<((f-i|0)>>>3)){a=c[b+8>>2]|0;if(a>>>0<(c[8854]|0)>>>0)ba();else{C=a;D=b+8|0}}else{c[8850]=a|1<<((f-i|0)>>>3);C=b;D=b+8|0}c[D>>2]=i;c[C+12>>2]=i;c[i+8>>2]=C;c[i+12>>2]=b;break}if((f-i|0)>>>8)if((f-i|0)>>>0>16777215)a=31;else{a=(f-i|0)>>>8<<((((f-i|0)>>>8)+1048320|0)>>>16&8);a=14-((a+520192|0)>>>16&4|(((f-i|0)>>>8)+1048320|0)>>>16&8|((a<<((a+520192|0)>>>16&4))+245760|0)>>>16&2)+(a<<((a+520192|0)>>>16&4)<<(((a<<((a+520192|0)>>>16&4))+245760|0)>>>16&2)>>>15)|0;a=(f-i|0)>>>(a+7|0)&1|a<<1}else a=0;e=35704+(a<<2)|0;c[i+28>>2]=a;c[i+20>>2]=0;c[i+16>>2]=0;b=c[8851]|0;d=1<<a;if(!(b&d)){c[8851]=b|d;c[e>>2]=i;c[i+24>>2]=e;c[i+12>>2]=i;c[i+8>>2]=i;break}b=f-i<<((a|0)==31?0:25-(a>>>1)|0);e=c[e>>2]|0;while(1){if((c[e+4>>2]&-8|0)==(f-i|0)){A=292;break}d=e+16+(b>>>31<<2)|0;a=c[d>>2]|0;if(!a){A=289;break}else{b=b<<1;e=a}}if((A|0)==289)if(d>>>0<(c[8854]|0)>>>0)ba();else{c[d>>2]=i;c[i+24>>2]=e;c[i+12>>2]=i;c[i+8>>2]=i;break}else if((A|0)==292){a=e+8|0;b=c[a>>2]|0;H=c[8854]|0;if(b>>>0>=H>>>0&e>>>0>=H>>>0){c[b+12>>2]=i;c[a>>2]=i;c[i+8>>2]=b;c[i+12>>2]=e;c[i+24>>2]=0;break}else ba()}}}else{H=c[8854]|0;if((H|0)==0|g>>>0<H>>>0)c[8854]=g;c[8962]=g;c[8963]=h;c[8965]=0;c[8859]=c[8968];c[8858]=-1;a=0;do{H=35440+(a<<1<<2)|0;c[H+12>>2]=H;c[H+8>>2]=H;a=a+1|0}while((a|0)!=32);H=g+8|0;H=(H&7|0)==0?0:0-H&7;G=g+H|0;H=h+-40-H|0;c[8856]=G;c[8853]=H;c[G+4>>2]=H|1;c[G+H+4>>2]=40;c[8857]=c[8972]}while(0);a=c[8853]|0;if(a>>>0>s>>>0){F=a-s|0;c[8853]=F;H=c[8856]|0;G=H+s|0;c[8856]=G;c[G+4>>2]=F|1;c[H+4>>2]=s|3;H=H+8|0;l=I;return H|0}}c[8326]=12;H=0;l=I;return H|0}function na(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0;He(d,b);b=e;f=a;g=b+64|0;do{c[b>>2]=c[f>>2];b=b+4|0;f=f+4|0}while((b|0)<(g|0));s=0;b=c[d>>2]|0;f=c[d+4>>2]|0;while(1){z=c[e+32>>2]|0;q=c[e+32+4>>2]|0;i=bf(z,q,14)|0;B=D;y=bf(z,q,18)|0;B=D^B;C=bf(z,q,41)|0;r=c[e+40>>2]|0;l=c[e+40+4>>2]|0;k=c[e+48>>2]|0;M=c[e+48+4>>2]|0;o=464+(s<<3)|0;m=c[o>>2]|0;o=c[o+4>>2]|0;w=c[e+56>>2]|0;u=c[e+56+4>>2]|0;B=jg(b|0,f|0,y^i^C|0,B^D|0)|0;o=jg(B|0,D|0,m|0,o|0)|0;o=jg(o|0,D|0,(k^r)&z^k|0,(M^l)&q^M|0)|0;u=jg(o|0,D|0,w|0,u|0)|0;w=D;o=jg(u|0,w|0,c[e+24>>2]|0,c[e+24+4>>2]|0)|0;m=D;c[e+24>>2]=o;c[e+24+4>>2]=m;B=c[e>>2]|0;C=c[e+4>>2]|0;i=bf(B,C,28)|0;y=D;j=bf(B,C,34)|0;y=D^y;v=bf(B,C,39)|0;A=c[e+8>>2]|0;H=c[e+8+4>>2]|0;E=c[e+16>>2]|0;I=c[e+16+4>>2]|0;y=jg(u|0,w|0,j^i^v|0,y^D|0)|0;y=jg(y|0,D|0,(E|A)&B|E&A|0,(I|H)&C|I&H|0)|0;v=D;c[e+56>>2]=y;c[e+56+4>>2]=v;i=bf(o,m,14)|0;j=D;w=bf(o,m,18)|0;j=D^j;u=bf(o,m,41)|0;h=s|1;x=c[464+(h<<3)>>2]|0;L=c[464+(h<<3)+4>>2]|0;j=jg(c[d+(h<<3)>>2]|0,c[d+(h<<3)+4>>2]|0,w^i^u|0,j^D|0)|0;L=jg(j|0,D|0,x|0,L|0)|0;L=jg(L|0,D|0,(r^z)&o^r|0,(l^q)&m^l|0)|0;M=jg(L|0,D|0,k|0,M|0)|0;k=D;I=jg(M|0,k|0,E|0,I|0)|0;E=D;c[e+16>>2]=I;c[e+16+4>>2]=E;L=bf(y,v,28)|0;x=D;j=bf(y,v,34)|0;x=D^x;u=bf(y,v,39)|0;x=jg(M|0,k|0,j^L^u|0,x^D|0)|0;x=jg(x|0,D|0,(A|B)&y|A&B|0,(H|C)&v|H&C|0)|0;u=D;c[e+48>>2]=x;c[e+48+4>>2]=u;L=bf(I,E,14)|0;j=D;k=bf(I,E,18)|0;j=D^j;M=bf(I,E,41)|0;i=s|2;w=c[464+(i<<3)>>2]|0;n=c[464+(i<<3)+4>>2]|0;j=jg(c[d+(i<<3)>>2]|0,c[d+(i<<3)+4>>2]|0,k^L^M|0,j^D|0)|0;n=jg(j|0,D|0,w|0,n|0)|0;q=jg(n|0,D|0,(z^o)&I^z|0,(q^m)&E^q|0)|0;l=jg(q|0,D|0,r|0,l|0)|0;r=D;H=jg(l|0,r|0,A|0,H|0)|0;A=D;c[e+8>>2]=H;c[e+8+4>>2]=A;q=bf(x,u,28)|0;z=D;n=bf(x,u,34)|0;z=D^z;w=bf(x,u,39)|0;z=jg(l|0,r|0,n^q^w|0,z^D|0)|0;z=jg(z|0,D|0,(B|y)&x|B&y|0,(C|v)&u|C&v|0)|0;w=D;c[e+40>>2]=z;c[e+40+4>>2]=w;q=bf(H,A,14)|0;n=D;r=bf(H,A,18)|0;n=D^n;l=bf(H,A,41)|0;j=s|3;M=c[464+(j<<3)>>2]|0;L=c[464+(j<<3)+4>>2]|0;k=c[e+32>>2]|0;p=c[e+32+4>>2]|0;n=jg(c[d+(j<<3)>>2]|0,c[d+(j<<3)+4>>2]|0,r^q^l|0,n^D|0)|0;L=jg(n|0,D|0,M|0,L|0)|0;m=jg(L|0,D|0,(o^I)&H^o|0,(m^E)&A^m|0)|0;p=jg(m|0,D|0,k|0,p|0)|0;k=D;C=jg(p|0,k|0,B|0,C|0)|0;B=D;c[e>>2]=C;c[e+4>>2]=B;m=bf(z,w,28)|0;o=D;L=bf(z,w,34)|0;o=D^o;M=bf(z,w,39)|0;o=jg(p|0,k|0,L^m^M|0,o^D|0)|0;v=jg(o|0,D|0,(y|x)&z|y&x|0,(v|u)&w|v&u|0)|0;y=D;c[e+32>>2]=v;c[e+32+4>>2]=y;o=bf(C,B,14)|0;M=D;m=bf(C,B,18)|0;M=D^M;L=bf(C,B,41)|0;k=s|4;p=c[464+(k<<3)>>2]|0;n=c[464+(k<<3)+4>>2]|0;l=c[e+24>>2]|0;q=c[e+24+4>>2]|0;M=jg(c[d+(k<<3)>>2]|0,c[d+(k<<3)+4>>2]|0,m^o^L|0,M^D|0)|0;n=jg(M|0,D|0,p|0,n|0)|0;E=jg(n|0,D|0,(I^H)&C^I|0,(E^A)&B^E|0)|0;q=jg(E|0,D|0,l|0,q|0)|0;l=D;E=jg(q|0,l|0,c[e+56>>2]|0,c[e+56+4>>2]|0)|0;I=D;c[e+56>>2]=E;c[e+56+4>>2]=I;n=bf(v,y,28)|0;p=D;M=bf(v,y,34)|0;p=D^p;L=bf(v,y,39)|0;p=jg(q|0,l|0,M^n^L|0,p^D|0)|0;u=jg(p|0,D|0,(x|z)&v|x&z|0,(u|w)&y|u&w|0)|0;x=D;c[e+24>>2]=u;c[e+24+4>>2]=x;p=bf(E,I,14)|0;L=D;n=bf(E,I,18)|0;L=D^L;M=bf(E,I,41)|0;l=s|5;q=c[464+(l<<3)>>2]|0;o=c[464+(l<<3)+4>>2]|0;m=c[e+16>>2]|0;r=c[e+16+4>>2]|0;L=jg(c[d+(l<<3)>>2]|0,c[d+(l<<3)+4>>2]|0,n^p^M|0,L^D|0)|0;o=jg(L|0,D|0,q|0,o|0)|0;A=jg(o|0,D|0,(H^C)&E^H|0,(A^B)&I^A|0)|0;r=jg(A|0,D|0,m|0,r|0)|0;m=D;A=jg(r|0,m|0,c[e+48>>2]|0,c[e+48+4>>2]|0)|0;H=D;c[e+48>>2]=A;c[e+48+4>>2]=H;o=bf(u,x,28)|0;q=D;L=bf(u,x,34)|0;q=D^q;M=bf(u,x,39)|0;q=jg(r|0,m|0,L^o^M|0,q^D|0)|0;w=jg(q|0,D|0,(z|v)&u|z&v|0,(w|y)&x|w&y|0)|0;z=D;c[e+16>>2]=w;c[e+16+4>>2]=z;q=bf(A,H,14)|0;M=D;o=bf(A,H,18)|0;M=D^M;L=bf(A,H,41)|0;m=s|6;r=c[464+(m<<3)>>2]|0;p=c[464+(m<<3)+4>>2]|0;n=c[e+8>>2]|0;b=c[e+8+4>>2]|0;M=jg(c[d+(m<<3)>>2]|0,c[d+(m<<3)+4>>2]|0,o^q^L|0,M^D|0)|0;p=jg(M|0,D|0,r|0,p|0)|0;B=jg(p|0,D|0,(C^E)&A^C|0,(B^I)&H^B|0)|0;b=jg(B|0,D|0,n|0,b|0)|0;n=D;B=jg(b|0,n|0,c[e+40>>2]|0,c[e+40+4>>2]|0)|0;C=D;c[e+40>>2]=B;c[e+40+4>>2]=C;p=bf(w,z,28)|0;r=D;M=bf(w,z,34)|0;r=D^r;L=bf(w,z,39)|0;r=jg(b|0,n|0,M^p^L|0,r^D|0)|0;y=jg(r|0,D|0,(v|u)&w|v&u|0,(y|x)&z|y&x|0)|0;v=D;c[e+8>>2]=y;c[e+8+4>>2]=v;r=bf(B,C,14)|0;L=D;p=bf(B,C,18)|0;L=D^L;M=bf(B,C,41)|0;n=s|7;b=c[464+(n<<3)>>2]|0;q=c[464+(n<<3)+4>>2]|0;o=c[e>>2]|0;f=c[e+4>>2]|0;L=jg(c[d+(n<<3)>>2]|0,c[d+(n<<3)+4>>2]|0,p^r^M|0,L^D|0)|0;q=jg(L|0,D|0,b|0,q|0)|0;I=jg(q|0,D|0,(E^A)&B^E|0,(I^H)&C^I|0)|0;f=jg(I|0,D|0,o|0,f|0)|0;o=D;I=jg(f|0,o|0,c[e+32>>2]|0,c[e+32+4>>2]|0)|0;E=D;c[e+32>>2]=I;c[e+32+4>>2]=E;q=bf(y,v,28)|0;b=D;L=bf(y,v,34)|0;b=D^b;M=bf(y,v,39)|0;b=jg(f|0,o|0,L^q^M|0,b^D|0)|0;x=jg(b|0,D|0,(u|w)&y|u&w|0,(x|z)&v|x&z|0)|0;u=D;c[e>>2]=x;c[e+4>>2]=u;b=bf(I,E,14)|0;M=D;q=bf(I,E,18)|0;M=D^M;L=bf(I,E,41)|0;o=s|8;f=c[464+(o<<3)>>2]|0;r=c[464+(o<<3)+4>>2]|0;p=c[e+56>>2]|0;g=c[e+56+4>>2]|0;M=jg(c[d+(o<<3)>>2]|0,c[d+(o<<3)+4>>2]|0,q^b^L|0,M^D|0)|0;r=jg(M|0,D|0,f|0,r|0)|0;H=jg(r|0,D|0,(A^B)&I^A|0,(H^C)&E^H|0)|0;g=jg(H|0,D|0,p|0,g|0)|0;p=D;H=jg(g|0,p|0,c[e+24>>2]|0,c[e+24+4>>2]|0)|0;A=D;c[e+24>>2]=H;c[e+24+4>>2]=A;r=bf(x,u,28)|0;f=D;M=bf(x,u,34)|0;f=D^f;L=bf(x,u,39)|0;f=jg(g|0,p|0,M^r^L|0,f^D|0)|0;z=jg(f|0,D|0,(w|y)&x|w&y|0,(z|v)&u|z&v|0)|0;w=D;c[e+56>>2]=z;c[e+56+4>>2]=w;f=bf(H,A,14)|0;L=D;r=bf(H,A,18)|0;L=D^L;M=bf(H,A,41)|0;p=s|9;g=c[464+(p<<3)>>2]|0;b=c[464+(p<<3)+4>>2]|0;q=c[e+48>>2]|0;t=c[e+48+4>>2]|0;L=jg(c[d+(p<<3)>>2]|0,c[d+(p<<3)+4>>2]|0,r^f^M|0,L^D|0)|0;b=jg(L|0,D|0,g|0,b|0)|0;C=jg(b|0,D|0,(B^I)&H^B|0,(C^E)&A^C|0)|0;t=jg(C|0,D|0,q|0,t|0)|0;q=D;C=jg(t|0,q|0,c[e+16>>2]|0,c[e+16+4>>2]|0)|0;B=D;c[e+16>>2]=C;c[e+16+4>>2]=B;b=bf(z,w,28)|0;g=D;L=bf(z,w,34)|0;g=D^g;M=bf(z,w,39)|0;g=jg(t|0,q|0,L^b^M|0,g^D|0)|0;v=jg(g|0,D|0,(y|x)&z|y&x|0,(v|u)&w|v&u|0)|0;y=D;c[e+48>>2]=v;c[e+48+4>>2]=y;g=bf(C,B,14)|0;M=D;b=bf(C,B,18)|0;M=D^M;L=bf(C,B,41)|0;q=s|10;t=c[464+(q<<3)>>2]|0;f=c[464+(q<<3)+4>>2]|0;r=c[e+40>>2]|0;F=c[e+40+4>>2]|0;M=jg(c[d+(q<<3)>>2]|0,c[d+(q<<3)+4>>2]|0,b^g^L|0,M^D|0)|0;f=jg(M|0,D|0,t|0,f|0)|0;E=jg(f|0,D|0,(I^H)&C^I|0,(E^A)&B^E|0)|0;F=jg(E|0,D|0,r|0,F|0)|0;r=D;E=jg(F|0,r|0,c[e+8>>2]|0,c[e+8+4>>2]|0)|0;I=D;c[e+8>>2]=E;c[e+8+4>>2]=I;f=bf(v,y,28)|0;t=D;M=bf(v,y,34)|0;t=D^t;L=bf(v,y,39)|0;t=jg(F|0,r|0,M^f^L|0,t^D|0)|0;u=jg(t|0,D|0,(x|z)&v|x&z|0,(u|w)&y|u&w|0)|0;x=D;c[e+40>>2]=u;c[e+40+4>>2]=x;t=bf(E,I,14)|0;L=D;f=bf(E,I,18)|0;L=D^L;M=bf(E,I,41)|0;r=s|11;F=c[464+(r<<3)>>2]|0;g=c[464+(r<<3)+4>>2]|0;b=c[e+32>>2]|0;O=c[e+32+4>>2]|0;L=jg(c[d+(r<<3)>>2]|0,c[d+(r<<3)+4>>2]|0,f^t^M|0,L^D|0)|0;g=jg(L|0,D|0,F|0,g|0)|0;A=jg(g|0,D|0,(H^C)&E^H|0,(A^B)&I^A|0)|0;O=jg(A|0,D|0,b|0,O|0)|0;b=D;A=jg(O|0,b|0,c[e>>2]|0,c[e+4>>2]|0)|0;H=D;c[e>>2]=A;c[e+4>>2]=H;g=bf(u,x,28)|0;F=D;L=bf(u,x,34)|0;F=D^F;M=bf(u,x,39)|0;F=jg(O|0,b|0,L^g^M|0,F^D|0)|0;w=jg(F|0,D|0,(z|v)&u|z&v|0,(w|y)&x|w&y|0)|0;z=D;c[e+32>>2]=w;c[e+32+4>>2]=z;F=bf(A,H,14)|0;M=D;g=bf(A,H,18)|0;M=D^M;L=bf(A,H,41)|0;b=s|12;O=c[464+(b<<3)>>2]|0;t=c[464+(b<<3)+4>>2]|0;f=c[e+24>>2]|0;J=c[e+24+4>>2]|0;M=jg(c[d+(b<<3)>>2]|0,c[d+(b<<3)+4>>2]|0,g^F^L|0,M^D|0)|0;t=jg(M|0,D|0,O|0,t|0)|0;B=jg(t|0,D|0,(C^E)&A^C|0,(B^I)&H^B|0)|0;J=jg(B|0,D|0,f|0,J|0)|0;f=D;B=jg(J|0,f|0,c[e+56>>2]|0,c[e+56+4>>2]|0)|0;C=D;c[e+56>>2]=B;c[e+56+4>>2]=C;t=bf(w,z,28)|0;O=D;M=bf(w,z,34)|0;O=D^O;L=bf(w,z,39)|0;O=jg(J|0,f|0,M^t^L|0,O^D|0)|0;y=jg(O|0,D|0,(v|u)&w|v&u|0,(y|x)&z|y&x|0)|0;v=D;c[e+24>>2]=y;c[e+24+4>>2]=v;O=bf(B,C,14)|0;L=D;t=bf(B,C,18)|0;L=D^L;M=bf(B,C,41)|0;f=s|13;J=c[464+(f<<3)>>2]|0;F=c[464+(f<<3)+4>>2]|0;g=c[e+16>>2]|0;N=c[e+16+4>>2]|0;L=jg(c[d+(f<<3)>>2]|0,c[d+(f<<3)+4>>2]|0,t^O^M|0,L^D|0)|0;F=jg(L|0,D|0,J|0,F|0)|0;I=jg(F|0,D|0,(E^A)&B^E|0,(I^H)&C^I|0)|0;N=jg(I|0,D|0,g|0,N|0)|0;g=D;I=jg(N|0,g|0,c[e+48>>2]|0,c[e+48+4>>2]|0)|0;E=D;c[e+48>>2]=I;c[e+48+4>>2]=E;F=bf(y,v,28)|0;J=D;L=bf(y,v,34)|0;J=D^J;M=bf(y,v,39)|0;J=jg(N|0,g|0,L^F^M|0,J^D|0)|0;x=jg(J|0,D|0,(u|w)&y|u&w|0,(x|z)&v|x&z|0)|0;u=D;c[e+16>>2]=x;c[e+16+4>>2]=u;J=bf(I,E,14)|0;M=D;F=bf(I,E,18)|0;M=D^M;L=bf(I,E,41)|0;g=s|14;N=c[464+(g<<3)>>2]|0;O=c[464+(g<<3)+4>>2]|0;t=c[e+8>>2]|0;K=c[e+8+4>>2]|0;M=jg(c[d+(g<<3)>>2]|0,c[d+(g<<3)+4>>2]|0,F^J^L|0,M^D|0)|0;O=jg(M|0,D|0,N|0,O|0)|0;H=jg(O|0,D|0,(A^B)&I^A|0,(H^C)&E^H|0)|0;K=jg(H|0,D|0,t|0,K|0)|0;t=D;H=jg(K|0,t|0,c[e+40>>2]|0,c[e+40+4>>2]|0)|0;A=D;c[e+40>>2]=H;c[e+40+4>>2]=A;O=bf(x,u,28)|0;N=D;M=bf(x,u,34)|0;N=D^N;L=bf(x,u,39)|0;N=jg(K|0,t|0,M^O^L|0,N^D|0)|0;z=jg(N|0,D|0,(w|y)&x|w&y|0,(z|v)&u|z&v|0)|0;w=D;c[e+8>>2]=z;c[e+8+4>>2]=w;N=bf(H,A,14)|0;L=D;O=bf(H,A,18)|0;L=D^L;M=bf(H,A,41)|0;t=s|15;K=c[464+(t<<3)>>2]|0;J=c[464+(t<<3)+4>>2]|0;F=c[e>>2]|0;G=c[e+4>>2]|0;L=jg(c[d+(t<<3)>>2]|0,c[d+(t<<3)+4>>2]|0,O^N^M|0,L^D|0)|0;J=jg(L|0,D|0,K|0,J|0)|0;C=jg(J|0,D|0,(B^I)&H^B|0,(C^E)&A^C|0)|0;G=jg(C|0,D|0,F|0,G|0)|0;F=D;C=jg(G|0,F|0,c[e+32>>2]|0,c[e+32+4>>2]|0)|0;c[e+32>>2]=C;c[e+32+4>>2]=D;C=bf(z,w,28)|0;A=D;E=bf(z,w,34)|0;A=D^A;B=bf(z,w,39)|0;A=jg(G|0,F|0,E^C^B|0,A^D|0)|0;u=jg(A|0,D|0,(y|x)&z|y&x|0,(v|u)&w|v&u|0)|0;c[e>>2]=u;c[e+4>>2]=D;if((s|0)==64){b=0;break}K=c[d+(g<<3)>>2]|0;I=c[d+(g<<3)+4>>2]|0;N=bf(K,I,19)|0;B=D;H=bf(K,I,61)|0;J=D;I=Cf(K|0,I|0,6)|0;J=jg(I^N^H|0,D^B^J|0,c[d+(p<<3)>>2]|0,c[d+(p<<3)+4>>2]|0)|0;B=D;H=c[d+(h<<3)>>2]|0;N=c[d+(h<<3)+4>>2]|0;I=bf(H,N,1)|0;K=D;G=bf(H,N,8)|0;L=D;E=Cf(H|0,N|0,7)|0;L=D^K^L;K=d+(s<<3)|0;K=jg(J|0,B|0,c[K>>2]|0,c[K+4>>2]|0)|0;L=jg(K|0,D|0,E^I^G|0,L|0)|0;G=D;s=s+16|0;I=d+(s<<3)|0;c[I>>2]=L;c[I+4>>2]=G;I=c[d+(t<<3)>>2]|0;E=c[d+(t<<3)+4>>2]|0;K=bf(I,E,19)|0;B=D;J=bf(I,E,61)|0;F=D;E=Cf(I|0,E|0,6)|0;F=jg(E^K^J|0,D^B^F|0,c[d+(h+9<<3)>>2]|0,c[d+(h+9<<3)+4>>2]|0)|0;B=D;J=c[d+(h+1<<3)>>2]|0;K=c[d+(h+1<<3)+4>>2]|0;E=bf(J,K,1)|0;I=D;O=bf(J,K,8)|0;M=D;C=Cf(J|0,K|0,7)|0;M=D^I^M;N=jg(F|0,B|0,H|0,N|0)|0;M=jg(N|0,D|0,C^E^O|0,M|0)|0;O=D;c[d+(h+16<<3)>>2]=M;c[d+(h+16<<3)+4>>2]=O;E=bf(L,G,19)|0;C=D;N=bf(L,G,61)|0;H=D;G=Cf(L|0,G|0,6)|0;H=jg(G^E^N|0,D^C^H|0,c[d+(r<<3)>>2]|0,c[d+(r<<3)+4>>2]|0)|0;C=D;N=c[d+(j<<3)>>2]|0;E=c[d+(j<<3)+4>>2]|0;G=bf(N,E,1)|0;L=D;B=bf(N,E,8)|0;F=D;I=Cf(N|0,E|0,7)|0;F=D^L^F;K=jg(H|0,C|0,J|0,K|0)|0;F=jg(K|0,D|0,I^G^B|0,F|0)|0;B=D;c[d+(i+16<<3)>>2]=F;c[d+(i+16<<3)+4>>2]=B;G=bf(M,O,19)|0;I=D;K=bf(M,O,61)|0;J=D;O=Cf(M|0,O|0,6)|0;J=jg(O^G^K|0,D^I^J|0,c[d+(j+9<<3)>>2]|0,c[d+(j+9<<3)+4>>2]|0)|0;I=D;K=c[d+(j+1<<3)>>2]|0;G=c[d+(j+1<<3)+4>>2]|0;O=bf(K,G,1)|0;M=D;C=bf(K,G,8)|0;H=D;L=Cf(K|0,G|0,7)|0;H=D^M^H;E=jg(J|0,I|0,N|0,E|0)|0;H=jg(E|0,D|0,L^O^C|0,H|0)|0;C=D;c[d+(j+16<<3)>>2]=H;c[d+(j+16<<3)+4>>2]=C;O=bf(F,B,19)|0;L=D;E=bf(F,B,61)|0;N=D;B=Cf(F|0,B|0,6)|0;N=jg(B^O^E|0,D^L^N|0,c[d+(f<<3)>>2]|0,c[d+(f<<3)+4>>2]|0)|0;L=D;E=c[d+(l<<3)>>2]|0;O=c[d+(l<<3)+4>>2]|0;B=bf(E,O,1)|0;F=D;I=bf(E,O,8)|0;J=D;M=Cf(E|0,O|0,7)|0;J=D^F^J;G=jg(N|0,L|0,K|0,G|0)|0;J=jg(G|0,D|0,M^B^I|0,J|0)|0;I=D;c[d+(k+16<<3)>>2]=J;c[d+(k+16<<3)+4>>2]=I;B=bf(H,C,19)|0;M=D;G=bf(H,C,61)|0;K=D;C=Cf(H|0,C|0,6)|0;K=jg(C^B^G|0,D^M^K|0,c[d+(l+9<<3)>>2]|0,c[d+(l+9<<3)+4>>2]|0)|0;M=D;G=c[d+(l+1<<3)>>2]|0;B=c[d+(l+1<<3)+4>>2]|0;C=bf(G,B,1)|0;H=D;L=bf(G,B,8)|0;N=D;F=Cf(G|0,B|0,7)|0;N=D^H^N;O=jg(K|0,M|0,E|0,O|0)|0;N=jg(O|0,D|0,F^C^L|0,N|0)|0;L=D;c[d+(l+16<<3)>>2]=N;c[d+(l+16<<3)+4>>2]=L;C=bf(J,I,19)|0;F=D;O=bf(J,I,61)|0;E=D;I=Cf(J|0,I|0,6)|0;E=jg(I^C^O|0,D^F^E|0,c[d+(t<<3)>>2]|0,c[d+(t<<3)+4>>2]|0)|0;F=D;O=c[d+(n<<3)>>2]|0;C=c[d+(n<<3)+4>>2]|0;I=bf(O,C,1)|0;J=D;M=bf(O,C,8)|0;K=D;H=Cf(O|0,C|0,7)|0;K=D^J^K;B=jg(E|0,F|0,G|0,B|0)|0;K=jg(B|0,D|0,H^I^M|0,K|0)|0;M=D;c[d+(m+16<<3)>>2]=K;c[d+(m+16<<3)+4>>2]=M;I=bf(N,L,19)|0;H=D;B=bf(N,L,61)|0;G=D;L=Cf(N|0,L|0,6)|0;G=jg(L^I^B|0,D^H^G|0,c[d+(n+9<<3)>>2]|0,c[d+(n+9<<3)+4>>2]|0)|0;H=D;B=c[d+(n+1<<3)>>2]|0;I=c[d+(n+1<<3)+4>>2]|0;L=bf(B,I,1)|0;N=D;F=bf(B,I,8)|0;E=D;J=Cf(B|0,I|0,7)|0;E=D^N^E;C=jg(G|0,H|0,O|0,C|0)|0;E=jg(C|0,D|0,J^L^F|0,E|0)|0;F=D;c[d+(n+16<<3)>>2]=E;c[d+(n+16<<3)+4>>2]=F;L=bf(K,M,19)|0;J=D;C=bf(K,M,61)|0;O=D;M=Cf(K|0,M|0,6)|0;O=jg(M^L^C|0,D^J^O|0,c[d+(o+9<<3)>>2]|0,c[d+(o+9<<3)+4>>2]|0)|0;J=D;C=c[d+(p<<3)>>2]|0;L=c[d+(p<<3)+4>>2]|0;M=bf(C,L,1)|0;K=D;H=bf(C,L,8)|0;G=D;N=Cf(C|0,L|0,7)|0;G=D^K^G;I=jg(O|0,J|0,B|0,I|0)|0;G=jg(I|0,D|0,N^M^H|0,G|0)|0;H=D;c[d+(o+16<<3)>>2]=G;c[d+(o+16<<3)+4>>2]=H;M=bf(E,F,19)|0;N=D;I=bf(E,F,61)|0;B=D;F=Cf(E|0,F|0,6)|0;B=jg(F^M^I|0,D^N^B|0,c[d+(p+9<<3)>>2]|0,c[d+(p+9<<3)+4>>2]|0)|0;N=D;I=c[d+(p+1<<3)>>2]|0;M=c[d+(p+1<<3)+4>>2]|0;F=bf(I,M,1)|0;E=D;J=bf(I,M,8)|0;O=D;K=Cf(I|0,M|0,7)|0;O=D^E^O;L=jg(B|0,N|0,C|0,L|0)|0;O=jg(L|0,D|0,K^F^J|0,O|0)|0;J=D;c[d+(p+16<<3)>>2]=O;c[d+(p+16<<3)+4>>2]=J;F=bf(G,H,19)|0;K=D;L=bf(G,H,61)|0;C=D;H=Cf(G|0,H|0,6)|0;C=jg(H^F^L|0,D^K^C|0,c[d+(q+9<<3)>>2]|0,c[d+(q+9<<3)+4>>2]|0)|0;K=D;L=c[d+(r<<3)>>2]|0;F=c[d+(r<<3)+4>>2]|0;H=bf(L,F,1)|0;G=D;N=bf(L,F,8)|0;B=D;E=Cf(L|0,F|0,7)|0;B=D^G^B;M=jg(C|0,K|0,I|0,M|0)|0;B=jg(M|0,D|0,E^H^N|0,B|0)|0;N=D;c[d+(q+16<<3)>>2]=B;c[d+(q+16<<3)+4>>2]=N;H=bf(O,J,19)|0;E=D;M=bf(O,J,61)|0;I=D;J=Cf(O|0,J|0,6)|0;I=jg(J^H^M|0,D^E^I|0,c[d+(r+9<<3)>>2]|0,c[d+(r+9<<3)+4>>2]|0)|0;E=D;M=c[d+(r+1<<3)>>2]|0;H=c[d+(r+1<<3)+4>>2]|0;J=bf(M,H,1)|0;O=D;K=bf(M,H,8)|0;C=D;G=Cf(M|0,H|0,7)|0;C=D^O^C;F=jg(I|0,E|0,L|0,F|0)|0;C=jg(F|0,D|0,G^J^K|0,C|0)|0;K=D;c[d+(r+16<<3)>>2]=C;c[d+(r+16<<3)+4>>2]=K;J=bf(B,N,19)|0;G=D;F=bf(B,N,61)|0;L=D;N=Cf(B|0,N|0,6)|0;L=jg(N^J^F|0,D^G^L|0,c[d+(b+9<<3)>>2]|0,c[d+(b+9<<3)+4>>2]|0)|0;G=D;F=c[d+(f<<3)>>2]|0;J=c[d+(f<<3)+4>>2]|0;N=bf(F,J,1)|0;B=D;E=bf(F,J,8)|0;I=D;O=Cf(F|0,J|0,7)|0;I=D^B^I;H=jg(L|0,G|0,M|0,H|0)|0;I=jg(H|0,D|0,O^N^E|0,I|0)|0;E=D;c[d+(b+16<<3)>>2]=I;c[d+(b+16<<3)+4>>2]=E;N=bf(C,K,19)|0;b=D;O=bf(C,K,61)|0;H=D;K=Cf(C|0,K|0,6)|0;H=jg(K^N^O|0,D^b^H|0,c[d+(f+9<<3)>>2]|0,c[d+(f+9<<3)+4>>2]|0)|0;b=D;O=c[d+(f+1<<3)>>2]|0;N=c[d+(f+1<<3)+4>>2]|0;K=bf(O,N,1)|0;C=D;M=bf(O,N,8)|0;G=D;L=Cf(O|0,N|0,7)|0;G=D^C^G;J=jg(H|0,b|0,F|0,J|0)|0;G=jg(J|0,D|0,L^K^M|0,G|0)|0;M=D;c[d+(f+16<<3)>>2]=G;c[d+(f+16<<3)+4>>2]=M;K=bf(I,E,19)|0;L=D;J=bf(I,E,61)|0;F=D;b=Cf(I|0,E|0,6)|0;F=jg(b^K^J|0,D^L^F|0,c[d+(g+9<<3)>>2]|0,c[d+(g+9<<3)+4>>2]|0)|0;L=D;J=c[d+(t<<3)>>2]|0;K=c[d+(t<<3)+4>>2]|0;b=bf(J,K,1)|0;E=D;I=bf(J,K,8)|0;f=D;H=Cf(J|0,K|0,7)|0;f=D^E^f;N=jg(F|0,L|0,O|0,N|0)|0;f=jg(N|0,D|0,H^b^I|0,f|0)|0;c[d+(g+16<<3)>>2]=f;c[d+(g+16<<3)+4>>2]=D;f=bf(G,M,19)|0;I=D;b=bf(G,M,61)|0;H=D;M=Cf(G|0,M|0,6)|0;H=jg(M^f^b|0,D^I^H|0,c[d+(t+9<<3)>>2]|0,c[d+(t+9<<3)+4>>2]|0)|0;I=D;b=c[d+(t+1<<3)>>2]|0;f=c[d+(t+1<<3)+4>>2]|0;M=bf(b,f,1)|0;G=D;N=bf(b,f,8)|0;O=D;L=Cf(b|0,f|0,7)|0;O=D^G^O;K=jg(H|0,I|0,J|0,K|0)|0;O=jg(K|0,D|0,L^M^N|0,O|0)|0;c[d+(t+16<<3)>>2]=O;c[d+(t+16<<3)+4>>2]=D;if((s|0)>=80){b=0;break}}do{N=e+(b<<3)|0;O=a+(b<<3)|0;N=jg(c[O>>2]|0,c[O+4>>2]|0,c[N>>2]|0,c[N+4>>2]|0)|0;c[O>>2]=N;c[O+4>>2]=D;b=b+1|0}while((b|0)!=8);return}function oa(b){b=b|0;var c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0;R=hf(a[b>>0]|0,a[b+1>>0]|0,a[b+2>>0]|0)|0;d=Ud(b+2|0)|0;d=Cf(d|0,D|0,5)|0;S=hf(a[b+5>>0]|0,a[b+6>>0]|0,a[b+7>>0]|0)|0;S=Cf(S|0,D|0,2)|0;V=Ud(b+7|0)|0;V=Cf(V|0,D|0,7)|0;w=Ud(b+10|0)|0;w=Cf(w|0,D|0,4)|0;X=hf(a[b+13>>0]|0,a[b+14>>0]|0,a[b+15>>0]|0)|0;X=Cf(X|0,D|0,1)|0;Q=Ud(b+15|0)|0;Q=Cf(Q|0,D|0,6)|0;fa=hf(a[b+18>>0]|0,a[b+19>>0]|0,a[b+20>>0]|0)|0;fa=Cf(fa|0,D|0,3)|0;ma=hf(a[b+21>>0]|0,a[b+22>>0]|0,a[b+23>>0]|0)|0;ca=Ud(b+23|0)|0;ca=Cf(ca|0,D|0,5)|0;la=hf(a[b+26>>0]|0,a[b+27>>0]|0,a[b+28>>0]|0)|0;la=Cf(la|0,D|0,2)|0;t=Ud(b+28|0)|0;t=Cf(t|0,D|0,7)|0;qa=Ud(b+31|0)|0;qa=Cf(qa|0,D|0,4)|0;u=hf(a[b+34>>0]|0,a[b+35>>0]|0,a[b+36>>0]|0)|0;u=Cf(u|0,D|0,1)|0;z=Ud(b+36|0)|0;z=Cf(z|0,D|0,6)|0;o=hf(a[b+39>>0]|0,a[b+40>>0]|0,a[b+41>>0]|0)|0;o=Cf(o|0,D|0,3)|0;Z=hf(a[b+42>>0]|0,a[b+43>>0]|0,a[b+44>>0]|0)|0;O=Ud(b+44|0)|0;O=Cf(O|0,D|0,5)|0;$=hf(a[b+47>>0]|0,a[b+48>>0]|0,a[b+49>>0]|0)|0;$=Cf($|0,D|0,2)|0;ra=Ud(b+49|0)|0;ra=Cf(ra|0,D|0,7)|0;v=Ud(b+52|0)|0;v=Cf(v|0,D|0,4)|0;s=hf(a[b+55>>0]|0,a[b+56>>0]|0,a[b+57>>0]|0)|0;s=Cf(s|0,D|0,1)|0;g=Ud(b+57|0)|0;g=Cf(g|0,D|0,6)|0;H=Ud(b+60|0)|0;H=Cf(H|0,D|0,3)|0;c=D;h=ef(H|0,c|0,666643,0)|0;e=D;ha=ef(H|0,c|0,470296,0)|0;k=D;P=ef(H|0,c|0,654183,0)|0;l=D;F=ef(H|0,c|0,-997805,-1)|0;K=D;j=ef(H|0,c|0,136657,0)|0;o=jg(j|0,D|0,o&2097151|0,0)|0;j=D;c=ef(H|0,c|0,-683901,-1)|0;Z=jg(c|0,D|0,Z&2097151|0,0)|0;c=D;H=ef(g&2097151|0,0,666643,0)|0;B=D;r=ef(g&2097151|0,0,470296,0)|0;C=D;f=ef(g&2097151|0,0,654183,0)|0;n=D;A=ef(g&2097151|0,0,-997805,-1)|0;I=D;Y=ef(g&2097151|0,0,136657,0)|0;G=D;g=ef(g&2097151|0,0,-683901,-1)|0;g=jg(o|0,j|0,g|0,D|0)|0;j=D;o=ef(s&2097151|0,0,666643,0)|0;m=D;J=ef(s&2097151|0,0,470296,0)|0;x=D;y=ef(s&2097151|0,0,654183,0)|0;U=D;na=ef(s&2097151|0,0,-997805,-1)|0;ga=D;p=ef(s&2097151|0,0,136657,0)|0;_=D;s=ef(s&2097151|0,0,-683901,-1)|0;z=jg(s|0,D|0,z&2097151|0,0)|0;K=jg(z|0,D|0,F|0,K|0)|0;G=jg(K|0,D|0,Y|0,G|0)|0;Y=D;K=ef(v&2097151|0,0,666643,0)|0;F=D;z=ef(v&2097151|0,0,470296,0)|0;s=D;ia=ef(v&2097151|0,0,654183,0)|0;i=D;N=ef(v&2097151|0,0,-997805,-1)|0;q=D;pa=ef(v&2097151|0,0,136657,0)|0;oa=D;v=ef(v&2097151|0,0,-683901,-1)|0;W=D;E=ef(ra&2097151|0,0,666643,0)|0;T=D;da=ef(ra&2097151|0,0,470296,0)|0;ea=D;ba=ef(ra&2097151|0,0,654183,0)|0;aa=D;ka=ef(ra&2097151|0,0,-997805,-1)|0;ja=D;L=ef(ra&2097151|0,0,136657,0)|0;M=D;ra=ef(ra&2097151|0,0,-683901,-1)|0;qa=jg(ra|0,D|0,qa&2097151|0,0)|0;oa=jg(qa|0,D|0,pa|0,oa|0)|0;ga=jg(oa|0,D|0,na|0,ga|0)|0;k=jg(ga|0,D|0,ha|0,k|0)|0;n=jg(k|0,D|0,f|0,n|0)|0;f=D;k=ef($&2097151|0,0,666643,0)|0;Q=jg(k|0,D|0,Q&2097151|0,0)|0;k=D;ha=ef($&2097151|0,0,470296,0)|0;ga=D;na=ef($&2097151|0,0,654183,0)|0;ma=jg(na|0,D|0,ma&2097151|0,0)|0;ea=jg(ma|0,D|0,da|0,ea|0)|0;F=jg(ea|0,D|0,K|0,F|0)|0;K=D;ea=ef($&2097151|0,0,-997805,-1)|0;da=D;ma=ef($&2097151|0,0,136657,0)|0;la=jg(ma|0,D|0,la&2097151|0,0)|0;ja=jg(la|0,D|0,ka|0,ja|0)|0;i=jg(ja|0,D|0,ia|0,i|0)|0;x=jg(i|0,D|0,J|0,x|0)|0;B=jg(x|0,D|0,H|0,B|0)|0;H=D;$=ef($&2097151|0,0,-683901,-1)|0;x=D;J=jg(Q|0,k|0,1048576,0)|0;J=Cf(J|0,D|0,21)|0;i=D;fa=jg(ha|0,ga|0,fa&2097151|0,0)|0;T=jg(fa|0,D|0,E|0,T|0)|0;T=jg(T|0,D|0,J|0,i|0)|0;E=D;i=zf(J|0,i|0,21)|0;i=gg(Q|0,k|0,i|0,D|0)|0;k=D;Q=jg(F|0,K|0,1048576,0)|0;Q=Cf(Q|0,D|0,21)|0;J=D;ca=jg(ea|0,da|0,ca&2097151|0,0)|0;aa=jg(ca|0,D|0,ba|0,aa|0)|0;s=jg(aa|0,D|0,z|0,s|0)|0;m=jg(s|0,D|0,o|0,m|0)|0;m=jg(m|0,D|0,Q|0,J|0)|0;o=D;J=zf(Q|0,J|0,21)|0;Q=D;s=jg(B|0,H|0,1048576,0)|0;s=$e(s|0,D|0,21)|0;z=D;t=jg($|0,x|0,t&2097151|0,0)|0;M=jg(t|0,D|0,L|0,M|0)|0;q=jg(M|0,D|0,N|0,q|0)|0;U=jg(q|0,D|0,y|0,U|0)|0;e=jg(U|0,D|0,h|0,e|0)|0;C=jg(e|0,D|0,r|0,C|0)|0;C=jg(C|0,D|0,s|0,z|0)|0;r=D;z=zf(s|0,z|0,21)|0;s=D;e=jg(n|0,f|0,1048576,0)|0;e=$e(e|0,D|0,21)|0;h=D;u=jg(v|0,W|0,u&2097151|0,0)|0;_=jg(u|0,D|0,p|0,_|0)|0;l=jg(_|0,D|0,P|0,l|0)|0;I=jg(l|0,D|0,A|0,I|0)|0;I=jg(I|0,D|0,e|0,h|0)|0;A=D;h=zf(e|0,h|0,21)|0;h=gg(n|0,f|0,h|0,D|0)|0;f=D;n=jg(G|0,Y|0,1048576,0)|0;n=$e(n|0,D|0,21)|0;e=D;j=jg(g|0,j|0,n|0,e|0)|0;g=D;e=zf(n|0,e|0,21)|0;e=gg(G|0,Y|0,e|0,D|0)|0;Y=D;G=jg(Z|0,c|0,1048576,0)|0;G=$e(G|0,D|0,21)|0;n=D;O=jg(G|0,n|0,O&2097151|0,0)|0;l=D;n=zf(G|0,n|0,21)|0;n=gg(Z|0,c|0,n|0,D|0)|0;c=D;Z=jg(T|0,E|0,1048576,0)|0;Z=Cf(Z|0,D|0,21)|0;G=D;P=zf(Z|0,G|0,21)|0;P=gg(T|0,E|0,P|0,D|0)|0;E=D;T=jg(m|0,o|0,1048576,0)|0;T=$e(T|0,D|0,21)|0;_=D;p=zf(T|0,_|0,21)|0;u=D;W=jg(C|0,r|0,1048576,0)|0;W=$e(W|0,D|0,21)|0;v=D;f=jg(W|0,v|0,h|0,f|0)|0;h=D;v=zf(W|0,v|0,21)|0;v=gg(C|0,r|0,v|0,D|0)|0;r=D;C=jg(I|0,A|0,1048576,0)|0;C=$e(C|0,D|0,21)|0;W=D;Y=jg(C|0,W|0,e|0,Y|0)|0;e=D;W=zf(C|0,W|0,21)|0;W=gg(I|0,A|0,W|0,D|0)|0;A=D;I=jg(j|0,g|0,1048576,0)|0;I=$e(I|0,D|0,21)|0;C=D;c=jg(I|0,C|0,n|0,c|0)|0;n=D;C=zf(I|0,C|0,21)|0;C=gg(j|0,g|0,C|0,D|0)|0;g=D;j=ef(O|0,l|0,666643,0)|0;X=jg(j|0,D|0,X&2097151|0,0)|0;j=D;I=ef(O|0,l|0,470296,0)|0;I=jg(i|0,k|0,I|0,D|0)|0;k=D;i=ef(O|0,l|0,654183,0)|0;i=jg(P|0,E|0,i|0,D|0)|0;E=D;P=ef(O|0,l|0,-997805,-1)|0;U=D;y=ef(O|0,l|0,136657,0)|0;q=D;l=ef(O|0,l|0,-683901,-1)|0;H=jg(l|0,D|0,B|0,H|0)|0;_=jg(H|0,D|0,T|0,_|0)|0;s=gg(_|0,D|0,z|0,s|0)|0;z=D;_=ef(c|0,n|0,666643,0)|0;w=jg(_|0,D|0,w&2097151|0,0)|0;_=D;T=ef(c|0,n|0,470296,0)|0;T=jg(X|0,j|0,T|0,D|0)|0;j=D;X=ef(c|0,n|0,654183,0)|0;X=jg(I|0,k|0,X|0,D|0)|0;k=D;I=ef(c|0,n|0,-997805,-1)|0;I=jg(i|0,E|0,I|0,D|0)|0;E=D;i=ef(c|0,n|0,136657,0)|0;H=D;n=ef(c|0,n|0,-683901,-1)|0;c=D;B=ef(C|0,g|0,666643,0)|0;V=jg(B|0,D|0,V&2097151|0,0)|0;B=D;l=ef(C|0,g|0,470296,0)|0;l=jg(w|0,_|0,l|0,D|0)|0;_=D;w=ef(C|0,g|0,654183,0)|0;w=jg(T|0,j|0,w|0,D|0)|0;j=D;T=ef(C|0,g|0,-997805,-1)|0;T=jg(X|0,k|0,T|0,D|0)|0;k=D;X=ef(C|0,g|0,136657,0)|0;X=jg(I|0,E|0,X|0,D|0)|0;E=D;g=ef(C|0,g|0,-683901,-1)|0;C=D;K=jg(Z|0,G|0,F|0,K|0)|0;Q=gg(K|0,D|0,J|0,Q|0)|0;U=jg(Q|0,D|0,P|0,U|0)|0;H=jg(U|0,D|0,i|0,H|0)|0;C=jg(H|0,D|0,g|0,C|0)|0;g=D;H=ef(Y|0,e|0,666643,0)|0;S=jg(H|0,D|0,S&2097151|0,0)|0;H=D;i=ef(Y|0,e|0,470296,0)|0;i=jg(V|0,B|0,i|0,D|0)|0;B=D;V=ef(Y|0,e|0,654183,0)|0;V=jg(l|0,_|0,V|0,D|0)|0;_=D;l=ef(Y|0,e|0,-997805,-1)|0;l=jg(w|0,j|0,l|0,D|0)|0;j=D;w=ef(Y|0,e|0,136657,0)|0;w=jg(T|0,k|0,w|0,D|0)|0;k=D;e=ef(Y|0,e|0,-683901,-1)|0;e=jg(X|0,E|0,e|0,D|0)|0;E=D;X=ef(W|0,A|0,666643,0)|0;Y=D;T=ef(W|0,A|0,470296,0)|0;U=D;P=ef(W|0,A|0,654183,0)|0;Q=D;J=ef(W|0,A|0,-997805,-1)|0;K=D;F=ef(W|0,A|0,136657,0)|0;G=D;A=ef(W|0,A|0,-683901,-1)|0;A=jg(w|0,k|0,A|0,D|0)|0;k=D;w=ef(f|0,h|0,666643,0)|0;R=jg(w|0,D|0,R&2097151|0,0)|0;w=D;W=ef(f|0,h|0,470296,0)|0;Z=D;I=ef(f|0,h|0,654183,0)|0;I=jg(S|0,H|0,I|0,D|0)|0;U=jg(I|0,D|0,T|0,U|0)|0;T=D;I=ef(f|0,h|0,-997805,-1)|0;H=D;S=ef(f|0,h|0,136657,0)|0;S=jg(V|0,_|0,S|0,D|0)|0;K=jg(S|0,D|0,J|0,K|0)|0;J=D;h=ef(f|0,h|0,-683901,-1)|0;f=D;S=jg(R|0,w|0,1048576,0)|0;S=$e(S|0,D|0,21)|0;_=D;d=jg(W|0,Z|0,d&2097151|0,0)|0;Y=jg(d|0,D|0,X|0,Y|0)|0;Y=jg(Y|0,D|0,S|0,_|0)|0;X=D;_=zf(S|0,_|0,21)|0;_=gg(R|0,w|0,_|0,D|0)|0;w=D;R=jg(U|0,T|0,1048576,0)|0;R=$e(R|0,D|0,21)|0;S=D;H=jg(i|0,B|0,I|0,H|0)|0;Q=jg(H|0,D|0,P|0,Q|0)|0;Q=jg(Q|0,D|0,R|0,S|0)|0;P=D;S=zf(R|0,S|0,21)|0;R=D;H=jg(K|0,J|0,1048576,0)|0;H=$e(H|0,D|0,21)|0;I=D;f=jg(l|0,j|0,h|0,f|0)|0;G=jg(f|0,D|0,F|0,G|0)|0;G=jg(G|0,D|0,H|0,I|0)|0;F=D;I=zf(H|0,I|0,21)|0;H=D;f=jg(A|0,k|0,1048576,0)|0;f=$e(f|0,D|0,21)|0;h=D;E=jg(e|0,E|0,f|0,h|0)|0;e=D;h=zf(f|0,h|0,21)|0;h=gg(A|0,k|0,h|0,D|0)|0;k=D;A=jg(C|0,g|0,1048576,0)|0;A=$e(A|0,D|0,21)|0;f=D;o=jg(y|0,q|0,m|0,o|0)|0;u=gg(o|0,D|0,p|0,u|0)|0;c=jg(u|0,D|0,n|0,c|0)|0;c=jg(c|0,D|0,A|0,f|0)|0;n=D;f=zf(A|0,f|0,21)|0;f=gg(C|0,g|0,f|0,D|0)|0;g=D;C=jg(s|0,z|0,1048576,0)|0;C=$e(C|0,D|0,21)|0;A=D;r=jg(C|0,A|0,v|0,r|0)|0;v=D;A=zf(C|0,A|0,21)|0;A=gg(s|0,z|0,A|0,D|0)|0;z=D;s=jg(Y|0,X|0,1048576,0)|0;s=$e(s|0,D|0,21)|0;C=D;u=zf(s|0,C|0,21)|0;p=D;o=jg(Q|0,P|0,1048576,0)|0;o=$e(o|0,D|0,21)|0;m=D;q=zf(o|0,m|0,21)|0;y=D;j=jg(G|0,F|0,1048576,0)|0;j=$e(j|0,D|0,21)|0;l=D;k=jg(h|0,k|0,j|0,l|0)|0;h=D;l=zf(j|0,l|0,21)|0;j=D;B=jg(E|0,e|0,1048576,0)|0;B=$e(B|0,D|0,21)|0;i=D;g=jg(f|0,g|0,B|0,i|0)|0;f=D;i=zf(B|0,i|0,21)|0;i=gg(E|0,e|0,i|0,D|0)|0;e=D;E=jg(c|0,n|0,1048576,0)|0;E=$e(E|0,D|0,21)|0;B=D;z=jg(A|0,z|0,E|0,B|0)|0;A=D;B=zf(E|0,B|0,21)|0;B=gg(c|0,n|0,B|0,D|0)|0;n=D;c=jg(r|0,v|0,1048576,0)|0;c=$e(c|0,D|0,21)|0;E=D;d=zf(c|0,E|0,21)|0;d=gg(r|0,v|0,d|0,D|0)|0;v=D;r=ef(c|0,E|0,666643,0)|0;r=jg(_|0,w|0,r|0,D|0)|0;w=D;_=ef(c|0,E|0,470296,0)|0;Z=D;W=ef(c|0,E|0,654183,0)|0;V=D;O=ef(c|0,E|0,-997805,-1)|0;N=D;M=ef(c|0,E|0,136657,0)|0;L=D;E=ef(c|0,E|0,-683901,-1)|0;c=D;t=$e(r|0,w|0,21)|0;x=D;X=jg(_|0,Z|0,Y|0,X|0)|0;p=gg(X|0,D|0,u|0,p|0)|0;p=jg(p|0,D|0,t|0,x|0)|0;u=D;x=zf(t|0,x|0,21)|0;x=gg(r|0,w|0,x|0,D|0)|0;w=D;r=$e(p|0,u|0,21)|0;t=D;T=jg(W|0,V|0,U|0,T|0)|0;R=gg(T|0,D|0,S|0,R|0)|0;C=jg(R|0,D|0,s|0,C|0)|0;C=jg(C|0,D|0,r|0,t|0)|0;s=D;t=zf(r|0,t|0,21)|0;t=gg(p|0,u|0,t|0,D|0)|0;u=D;p=$e(C|0,s|0,21)|0;r=D;N=jg(Q|0,P|0,O|0,N|0)|0;y=gg(N|0,D|0,q|0,y|0)|0;y=jg(y|0,D|0,p|0,r|0)|0;q=D;r=zf(p|0,r|0,21)|0;r=gg(C|0,s|0,r|0,D|0)|0;s=D;C=$e(y|0,q|0,21)|0;p=D;J=jg(M|0,L|0,K|0,J|0)|0;H=gg(J|0,D|0,I|0,H|0)|0;m=jg(H|0,D|0,o|0,m|0)|0;m=jg(m|0,D|0,C|0,p|0)|0;o=D;p=zf(C|0,p|0,21)|0;p=gg(y|0,q|0,p|0,D|0)|0;q=D;y=$e(m|0,o|0,21)|0;C=D;c=jg(G|0,F|0,E|0,c|0)|0;j=gg(c|0,D|0,l|0,j|0)|0;j=jg(j|0,D|0,y|0,C|0)|0;l=D;C=zf(y|0,C|0,21)|0;C=gg(m|0,o|0,C|0,D|0)|0;o=D;m=$e(j|0,l|0,21)|0;y=D;h=jg(k|0,h|0,m|0,y|0)|0;k=D;y=zf(m|0,y|0,21)|0;y=gg(j|0,l|0,y|0,D|0)|0;l=D;j=$e(h|0,k|0,21)|0;m=D;e=jg(j|0,m|0,i|0,e|0)|0;i=D;m=zf(j|0,m|0,21)|0;m=gg(h|0,k|0,m|0,D|0)|0;k=D;h=$e(e|0,i|0,21)|0;j=D;f=jg(g|0,f|0,h|0,j|0)|0;g=D;j=zf(h|0,j|0,21)|0;j=gg(e|0,i|0,j|0,D|0)|0;i=D;e=$e(f|0,g|0,21)|0;h=D;n=jg(e|0,h|0,B|0,n|0)|0;B=D;h=zf(e|0,h|0,21)|0;h=gg(f|0,g|0,h|0,D|0)|0;g=D;f=$e(n|0,B|0,21)|0;e=D;A=jg(z|0,A|0,f|0,e|0)|0;z=D;e=zf(f|0,e|0,21)|0;e=gg(n|0,B|0,e|0,D|0)|0;B=D;n=$e(A|0,z|0,21)|0;f=D;v=jg(n|0,f|0,d|0,v|0)|0;d=D;f=zf(n|0,f|0,21)|0;f=gg(A|0,z|0,f|0,D|0)|0;z=D;A=$e(v|0,d|0,21)|0;n=D;c=zf(A|0,n|0,21)|0;c=gg(v|0,d|0,c|0,D|0)|0;d=D;v=ef(A|0,n|0,666643,0)|0;w=jg(v|0,D|0,x|0,w|0)|0;x=D;v=ef(A|0,n|0,470296,0)|0;v=jg(t|0,u|0,v|0,D|0)|0;u=D;t=ef(A|0,n|0,654183,0)|0;t=jg(r|0,s|0,t|0,D|0)|0;s=D;r=ef(A|0,n|0,-997805,-1)|0;r=jg(p|0,q|0,r|0,D|0)|0;q=D;p=ef(A|0,n|0,136657,0)|0;p=jg(C|0,o|0,p|0,D|0)|0;o=D;n=ef(A|0,n|0,-683901,-1)|0;n=jg(y|0,l|0,n|0,D|0)|0;l=D;y=$e(w|0,x|0,21)|0;A=D;u=jg(v|0,u|0,y|0,A|0)|0;v=D;A=zf(y|0,A|0,21)|0;A=gg(w|0,x|0,A|0,D|0)|0;x=D;w=$e(u|0,v|0,21)|0;y=D;s=jg(t|0,s|0,w|0,y|0)|0;t=D;y=zf(w|0,y|0,21)|0;y=gg(u|0,v|0,y|0,D|0)|0;v=D;u=$e(s|0,t|0,21)|0;w=D;q=jg(r|0,q|0,u|0,w|0)|0;r=D;w=zf(u|0,w|0,21)|0;w=gg(s|0,t|0,w|0,D|0)|0;t=D;s=$e(q|0,r|0,21)|0;u=D;o=jg(p|0,o|0,s|0,u|0)|0;p=D;u=zf(s|0,u|0,21)|0;u=gg(q|0,r|0,u|0,D|0)|0;r=D;q=$e(o|0,p|0,21)|0;s=D;l=jg(n|0,l|0,q|0,s|0)|0;n=D;s=zf(q|0,s|0,21)|0;s=gg(o|0,p|0,s|0,D|0)|0;p=D;o=$e(l|0,n|0,21)|0;q=D;k=jg(o|0,q|0,m|0,k|0)|0;m=D;q=zf(o|0,q|0,21)|0;q=gg(l|0,n|0,q|0,D|0)|0;n=D;l=$e(k|0,m|0,21)|0;o=D;i=jg(l|0,o|0,j|0,i|0)|0;j=D;o=zf(l|0,o|0,21)|0;o=gg(k|0,m|0,o|0,D|0)|0;m=D;k=$e(i|0,j|0,21)|0;l=D;g=jg(k|0,l|0,h|0,g|0)|0;h=D;l=zf(k|0,l|0,21)|0;l=gg(i|0,j|0,l|0,D|0)|0;j=D;i=$e(g|0,h|0,21)|0;k=D;B=jg(i|0,k|0,e|0,B|0)|0;e=D;k=zf(i|0,k|0,21)|0;k=gg(g|0,h|0,k|0,D|0)|0;h=D;g=$e(B|0,e|0,21)|0;i=D;z=jg(g|0,i|0,f|0,z|0)|0;f=D;i=zf(g|0,i|0,21)|0;i=gg(B|0,e|0,i|0,D|0)|0;e=D;B=$e(z|0,f|0,21)|0;g=D;d=jg(B|0,g|0,c|0,d|0)|0;c=D;g=zf(B|0,g|0,21)|0;g=gg(z|0,f|0,g|0,D|0)|0;f=D;a[b>>0]=A;z=Cf(A|0,x|0,8)|0;a[b+1>>0]=z;x=Cf(A|0,x|0,16)|0;A=D;z=zf(y|0,v|0,5)|0;a[b+2>>0]=z|x;x=Cf(y|0,v|0,3)|0;a[b+3>>0]=x;x=Cf(y|0,v|0,11)|0;a[b+4>>0]=x;v=Cf(y|0,v|0,19)|0;y=D;x=zf(w|0,t|0,2)|0;a[b+5>>0]=x|v;v=Cf(w|0,t|0,6)|0;a[b+6>>0]=v;t=Cf(w|0,t|0,14)|0;w=D;v=zf(u|0,r|0,7)|0;a[b+7>>0]=v|t;t=Cf(u|0,r|0,1)|0;a[b+8>>0]=t;t=Cf(u|0,r|0,9)|0;a[b+9>>0]=t;r=Cf(u|0,r|0,17)|0;u=D;t=zf(s|0,p|0,4)|0;a[b+10>>0]=t|r;r=Cf(s|0,p|0,4)|0;a[b+11>>0]=r;r=Cf(s|0,p|0,12)|0;a[b+12>>0]=r;p=Cf(s|0,p|0,20)|0;s=D;r=zf(q|0,n|0,1)|0;a[b+13>>0]=r|p;p=Cf(q|0,n|0,7)|0;a[b+14>>0]=p;n=Cf(q|0,n|0,15)|0;q=D;p=zf(o|0,m|0,6)|0;a[b+15>>0]=p|n;n=Cf(o|0,m|0,2)|0;a[b+16>>0]=n;n=Cf(o|0,m|0,10)|0;a[b+17>>0]=n;m=Cf(o|0,m|0,18)|0;o=D;n=zf(l|0,j|0,3)|0;a[b+18>>0]=n|m;m=Cf(l|0,j|0,5)|0;a[b+19>>0]=m;j=Cf(l|0,j|0,13)|0;a[b+20>>0]=j;a[b+21>>0]=k;j=Cf(k|0,h|0,8)|0;a[b+22>>0]=j;h=Cf(k|0,h|0,16)|0;k=D;j=zf(i|0,e|0,5)|0;a[b+23>>0]=j|h;h=Cf(i|0,e|0,3)|0;a[b+24>>0]=h;h=Cf(i|0,e|0,11)|0;a[b+25>>0]=h;e=Cf(i|0,e|0,19)|0;i=D;h=zf(g|0,f|0,2)|0;a[b+26>>0]=h|e;e=Cf(g|0,f|0,6)|0;a[b+27>>0]=e;f=Cf(g|0,f|0,14)|0;g=D;e=zf(d|0,c|0,7)|0;a[b+28>>0]=f|e;e=Cf(d|0,c|0,1)|0;a[b+29>>0]=e;e=Cf(d|0,c|0,9)|0;a[b+30>>0]=e;c=Cf(d|0,c|0,17)|0;a[b+31>>0]=c;return}function pa(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0,Ha=0,Ia=0,Ja=0,Ka=0,La=0,Ma=0,Na=0,Oa=0,Pa=0,Qa=0,Ra=0,Sa=0,Ta=0,Ua=0,Va=0,Wa=0,Xa=0,Ya=0,Za=0,_a=0,$a=0,ab=0,bb=0,cb=0,db=0,eb=0,fb=0,gb=0,hb=0,ib=0,jb=0,kb=0,lb=0,mb=0,nb=0,ob=0,pb=0,qb=0,rb=0,sb=0,tb=0,ub=0,vb=0,wb=0,xb=0,yb=0,zb=0,Ab=0,Bb=0,Cb=0,Db=0,Eb=0,Fb=0,Gb=0,Hb=0,Ib=0,Jb=0,Kb=0,Lb=0,Mb=0,Nb=0,Ob=0,Pb=0,Qb=0,Rb=0,Sb=0,Tb=0,Ub=0,Vb=0,Wb=0,Xb=0,Yb=0,Zb=0,_b=0,$b=0,ac=0,bc=0,cc=0,dc=0,ec=0,fc=0,gc=0,hc=0,ic=0,jc=0,kc=0,lc=0,mc=0,nc=0,oc=0,pc=0,qc=0,rc=0,sc=0,tc=0,uc=0,vc=0,wc=0,xc=0,yc=0,zc=0,Ac=0,Bc=0,Cc=0,Dc=0,Ec=0,Fc=0,Gc=0,Hc=0,Ic=0,Jc=0,Kc=0,Lc=0,Mc=0,Nc=0,Oc=0,Pc=0;o=c[b>>2]|0;n=c[b+4>>2]|0;k=c[b+8>>2]|0;fa=c[b+12>>2]|0;N=c[b+16>>2]|0;M=c[b+20>>2]|0;g=c[b+24>>2]|0;ea=c[b+28>>2]|0;L=c[b+32>>2]|0;q=c[b+36>>2]|0;I=c[d>>2]|0;Oc=c[d+4>>2]|0;cc=c[d+8>>2]|0;sb=c[d+12>>2]|0;Ia=c[d+16>>2]|0;jc=c[d+20>>2]|0;Db=c[d+24>>2]|0;Ta=c[d+28>>2]|0;ga=c[d+32>>2]|0;Pc=c[d+36>>2]|0;Mc=ef(I|0,((I|0)<0)<<31>>31|0,o|0,((o|0)<0)<<31>>31|0)|0;Lc=D;wc=ef(Oc|0,((Oc|0)<0)<<31>>31|0,o|0,((o|0)<0)<<31>>31|0)|0;vc=D;ub=ef(cc|0,((cc|0)<0)<<31>>31|0,o|0,((o|0)<0)<<31>>31|0)|0;tb=D;Ka=ef(sb|0,((sb|0)<0)<<31>>31|0,o|0,((o|0)<0)<<31>>31|0)|0;Ja=D;mc=ef(Ia|0,((Ia|0)<0)<<31>>31|0,o|0,((o|0)<0)<<31>>31|0)|0;lc=D;Gb=ef(jc|0,((jc|0)<0)<<31>>31|0,o|0,((o|0)<0)<<31>>31|0)|0;Fb=D;Wa=ef(Db|0,((Db|0)<0)<<31>>31|0,o|0,((o|0)<0)<<31>>31|0)|0;Va=D;ja=ef(Ta|0,((Ta|0)<0)<<31>>31|0,o|0,((o|0)<0)<<31>>31|0)|0;ia=D;P=ef(ga|0,((ga|0)<0)<<31>>31|0,o|0,((o|0)<0)<<31>>31|0)|0;O=D;o=ef(Pc|0,((Pc|0)<0)<<31>>31|0,o|0,((o|0)<0)<<31>>31|0)|0;l=D;dc=ef(I|0,((I|0)<0)<<31>>31|0,n|0,((n|0)<0)<<31>>31|0)|0;ec=D;yb=ef(Oc|0,((Oc|0)<0)<<31>>31|0,n<<1|0,((n<<1|0)<0)<<31>>31|0)|0;xb=D;Ma=ef(cc|0,((cc|0)<0)<<31>>31|0,n|0,((n|0)<0)<<31>>31|0)|0;La=D;oc=ef(sb|0,((sb|0)<0)<<31>>31|0,n<<1|0,((n<<1|0)<0)<<31>>31|0)|0;nc=D;Ib=ef(Ia|0,((Ia|0)<0)<<31>>31|0,n|0,((n|0)<0)<<31>>31|0)|0;Hb=D;Ya=ef(jc|0,((jc|0)<0)<<31>>31|0,n<<1|0,((n<<1|0)<0)<<31>>31|0)|0;Xa=D;la=ef(Db|0,((Db|0)<0)<<31>>31|0,n|0,((n|0)<0)<<31>>31|0)|0;ka=D;R=ef(Ta|0,((Ta|0)<0)<<31>>31|0,n<<1|0,((n<<1|0)<0)<<31>>31|0)|0;Q=D;t=ef(ga|0,((ga|0)<0)<<31>>31|0,n|0,((n|0)<0)<<31>>31|0)|0;s=D;d=((Pc*19|0)<0)<<31>>31;n=ef(Pc*19|0,d|0,n<<1|0,((n<<1|0)<0)<<31>>31|0)|0;p=D;wb=ef(I|0,((I|0)<0)<<31>>31|0,k|0,((k|0)<0)<<31>>31|0)|0;vb=D;Qa=ef(Oc|0,((Oc|0)<0)<<31>>31|0,k|0,((k|0)<0)<<31>>31|0)|0;Pa=D;qc=ef(cc|0,((cc|0)<0)<<31>>31|0,k|0,((k|0)<0)<<31>>31|0)|0;pc=D;Kb=ef(sb|0,((sb|0)<0)<<31>>31|0,k|0,((k|0)<0)<<31>>31|0)|0;Jb=D;_a=ef(Ia|0,((Ia|0)<0)<<31>>31|0,k|0,((k|0)<0)<<31>>31|0)|0;Za=D;na=ef(jc|0,((jc|0)<0)<<31>>31|0,k|0,((k|0)<0)<<31>>31|0)|0;ma=D;T=ef(Db|0,((Db|0)<0)<<31>>31|0,k|0,((k|0)<0)<<31>>31|0)|0;S=D;v=ef(Ta|0,((Ta|0)<0)<<31>>31|0,k|0,((k|0)<0)<<31>>31|0)|0;u=D;ha=((ga*19|0)<0)<<31>>31;yc=ef(ga*19|0,ha|0,k|0,((k|0)<0)<<31>>31|0)|0;xc=D;k=ef(Pc*19|0,d|0,k|0,((k|0)<0)<<31>>31|0)|0;j=D;Oa=ef(I|0,((I|0)<0)<<31>>31|0,fa|0,((fa|0)<0)<<31>>31|0)|0;Na=D;uc=ef(Oc|0,((Oc|0)<0)<<31>>31|0,fa<<1|0,((fa<<1|0)<0)<<31>>31|0)|0;tc=D;Mb=ef(cc|0,((cc|0)<0)<<31>>31|0,fa|0,((fa|0)<0)<<31>>31|0)|0;Lb=D;ab=ef(sb|0,((sb|0)<0)<<31>>31|0,fa<<1|0,((fa<<1|0)<0)<<31>>31|0)|0;$a=D;pa=ef(Ia|0,((Ia|0)<0)<<31>>31|0,fa|0,((fa|0)<0)<<31>>31|0)|0;oa=D;V=ef(jc|0,((jc|0)<0)<<31>>31|0,fa<<1|0,((fa<<1|0)<0)<<31>>31|0)|0;U=D;x=ef(Db|0,((Db|0)<0)<<31>>31|0,fa|0,((fa|0)<0)<<31>>31|0)|0;w=D;Ua=((Ta*19|0)<0)<<31>>31;Ac=ef(Ta*19|0,Ua|0,fa<<1|0,((fa<<1|0)<0)<<31>>31|0)|0;zc=D;Sb=ef(ga*19|0,ha|0,fa|0,((fa|0)<0)<<31>>31|0)|0;Rb=D;fa=ef(Pc*19|0,d|0,fa<<1|0,((fa<<1|0)<0)<<31>>31|0)|0;f=D;sc=ef(I|0,((I|0)<0)<<31>>31|0,N|0,((N|0)<0)<<31>>31|0)|0;rc=D;Qb=ef(Oc|0,((Oc|0)<0)<<31>>31|0,N|0,((N|0)<0)<<31>>31|0)|0;Pb=D;cb=ef(cc|0,((cc|0)<0)<<31>>31|0,N|0,((N|0)<0)<<31>>31|0)|0;bb=D;ra=ef(sb|0,((sb|0)<0)<<31>>31|0,N|0,((N|0)<0)<<31>>31|0)|0;qa=D;X=ef(Ia|0,((Ia|0)<0)<<31>>31|0,N|0,((N|0)<0)<<31>>31|0)|0;W=D;z=ef(jc|0,((jc|0)<0)<<31>>31|0,N|0,((N|0)<0)<<31>>31|0)|0;y=D;Eb=((Db*19|0)<0)<<31>>31;Cc=ef(Db*19|0,Eb|0,N|0,((N|0)<0)<<31>>31|0)|0;Bc=D;Ub=ef(Ta*19|0,Ua|0,N|0,((N|0)<0)<<31>>31|0)|0;Tb=D;ib=ef(ga*19|0,ha|0,N|0,((N|0)<0)<<31>>31|0)|0;hb=D;N=ef(Pc*19|0,d|0,N|0,((N|0)<0)<<31>>31|0)|0;e=D;Ob=ef(I|0,((I|0)<0)<<31>>31|0,M|0,((M|0)<0)<<31>>31|0)|0;Nb=D;gb=ef(Oc|0,((Oc|0)<0)<<31>>31|0,M<<1|0,((M<<1|0)<0)<<31>>31|0)|0;fb=D;ta=ef(cc|0,((cc|0)<0)<<31>>31|0,M|0,((M|0)<0)<<31>>31|0)|0;sa=D;Z=ef(sb|0,((sb|0)<0)<<31>>31|0,M<<1|0,((M<<1|0)<0)<<31>>31|0)|0;Y=D;B=ef(Ia|0,((Ia|0)<0)<<31>>31|0,M|0,((M|0)<0)<<31>>31|0)|0;A=D;kc=((jc*19|0)<0)<<31>>31;Ec=ef(jc*19|0,kc|0,M<<1|0,((M<<1|0)<0)<<31>>31|0)|0;Dc=D;Wb=ef(Db*19|0,Eb|0,M|0,((M|0)<0)<<31>>31|0)|0;Vb=D;kb=ef(Ta*19|0,Ua|0,M<<1|0,((M<<1|0)<0)<<31>>31|0)|0;jb=D;Aa=ef(ga*19|0,ha|0,M|0,((M|0)<0)<<31>>31|0)|0;za=D;b=ef(Pc*19|0,d|0,M<<1|0,((M<<1|0)<0)<<31>>31|0)|0;M=D;eb=ef(I|0,((I|0)<0)<<31>>31|0,g|0,((g|0)<0)<<31>>31|0)|0;db=D;xa=ef(Oc|0,((Oc|0)<0)<<31>>31|0,g|0,((g|0)<0)<<31>>31|0)|0;wa=D;$=ef(cc|0,((cc|0)<0)<<31>>31|0,g|0,((g|0)<0)<<31>>31|0)|0;_=D;E=ef(sb|0,((sb|0)<0)<<31>>31|0,g|0,((g|0)<0)<<31>>31|0)|0;C=D;Gc=ef(Ia*19|0,((Ia*19|0)<0)<<31>>31|0,g|0,((g|0)<0)<<31>>31|0)|0;Fc=D;Yb=ef(jc*19|0,kc|0,g|0,((g|0)<0)<<31>>31|0)|0;Xb=D;mb=ef(Db*19|0,Eb|0,g|0,((g|0)<0)<<31>>31|0)|0;lb=D;Ca=ef(Ta*19|0,Ua|0,g|0,((g|0)<0)<<31>>31|0)|0;Ba=D;m=ef(ga*19|0,ha|0,g|0,((g|0)<0)<<31>>31|0)|0;r=D;g=ef(Pc*19|0,d|0,g|0,((g|0)<0)<<31>>31|0)|0;ya=D;va=ef(I|0,((I|0)<0)<<31>>31|0,ea|0,((ea|0)<0)<<31>>31|0)|0;ua=D;da=ef(Oc|0,((Oc|0)<0)<<31>>31|0,ea<<1|0,((ea<<1|0)<0)<<31>>31|0)|0;ca=D;G=ef(cc|0,((cc|0)<0)<<31>>31|0,ea|0,((ea|0)<0)<<31>>31|0)|0;F=D;Ic=ef(sb*19|0,((sb*19|0)<0)<<31>>31|0,ea<<1|0,((ea<<1|0)<0)<<31>>31|0)|0;Hc=D;_b=ef(Ia*19|0,((Ia*19|0)<0)<<31>>31|0,ea|0,((ea|0)<0)<<31>>31|0)|0;Zb=D;ob=ef(jc*19|0,kc|0,ea<<1|0,((ea<<1|0)<0)<<31>>31|0)|0;nb=D;Ea=ef(Db*19|0,Eb|0,ea|0,((ea|0)<0)<<31>>31|0)|0;Da=D;gc=ef(Ta*19|0,Ua|0,ea<<1|0,((ea<<1|0)<0)<<31>>31|0)|0;fc=D;Ab=ef(ga*19|0,ha|0,ea|0,((ea|0)<0)<<31>>31|0)|0;zb=D;ea=ef(Pc*19|0,d|0,ea<<1|0,((ea<<1|0)<0)<<31>>31|0)|0;i=D;ba=ef(I|0,((I|0)<0)<<31>>31|0,L|0,((L|0)<0)<<31>>31|0)|0;aa=D;K=ef(Oc|0,((Oc|0)<0)<<31>>31|0,L|0,((L|0)<0)<<31>>31|0)|0;J=D;Kc=ef(cc*19|0,((cc*19|0)<0)<<31>>31|0,L|0,((L|0)<0)<<31>>31|0)|0;Jc=D;ac=ef(sb*19|0,((sb*19|0)<0)<<31>>31|0,L|0,((L|0)<0)<<31>>31|0)|0;$b=D;qb=ef(Ia*19|0,((Ia*19|0)<0)<<31>>31|0,L|0,((L|0)<0)<<31>>31|0)|0;pb=D;Ga=ef(jc*19|0,kc|0,L|0,((L|0)<0)<<31>>31|0)|0;Fa=D;ic=ef(Db*19|0,Eb|0,L|0,((L|0)<0)<<31>>31|0)|0;hc=D;Cb=ef(Ta*19|0,Ua|0,L|0,((L|0)<0)<<31>>31|0)|0;Bb=D;Sa=ef(ga*19|0,ha|0,L|0,((L|0)<0)<<31>>31|0)|0;Ra=D;L=ef(Pc*19|0,d|0,L|0,((L|0)<0)<<31>>31|0)|0;h=D;I=ef(I|0,((I|0)<0)<<31>>31|0,q|0,((q|0)<0)<<31>>31|0)|0;H=D;Oc=ef(Oc*19|0,((Oc*19|0)<0)<<31>>31|0,q<<1|0,((q<<1|0)<0)<<31>>31|0)|0;Nc=D;cc=ef(cc*19|0,((cc*19|0)<0)<<31>>31|0,q|0,((q|0)<0)<<31>>31|0)|0;bc=D;sb=ef(sb*19|0,((sb*19|0)<0)<<31>>31|0,q<<1|0,((q<<1|0)<0)<<31>>31|0)|0;rb=D;Ia=ef(Ia*19|0,((Ia*19|0)<0)<<31>>31|0,q|0,((q|0)<0)<<31>>31|0)|0;Ha=D;kc=ef(jc*19|0,kc|0,q<<1|0,((q<<1|0)<0)<<31>>31|0)|0;jc=D;Eb=ef(Db*19|0,Eb|0,q|0,((q|0)<0)<<31>>31|0)|0;Db=D;Ua=ef(Ta*19|0,Ua|0,q<<1|0,((q<<1|0)<0)<<31>>31|0)|0;Ta=D;ha=ef(ga*19|0,ha|0,q|0,((q|0)<0)<<31>>31|0)|0;ga=D;q=ef(Pc*19|0,d|0,q<<1|0,((q<<1|0)<0)<<31>>31|0)|0;d=D;Lc=jg(Oc|0,Nc|0,Mc|0,Lc|0)|0;Jc=jg(Lc|0,D|0,Kc|0,Jc|0)|0;Hc=jg(Jc|0,D|0,Ic|0,Hc|0)|0;Fc=jg(Hc|0,D|0,Gc|0,Fc|0)|0;Dc=jg(Fc|0,D|0,Ec|0,Dc|0)|0;Bc=jg(Dc|0,D|0,Cc|0,Bc|0)|0;zc=jg(Bc|0,D|0,Ac|0,zc|0)|0;xc=jg(zc|0,D|0,yc|0,xc|0)|0;p=jg(xc|0,D|0,n|0,p|0)|0;n=D;ec=jg(wc|0,vc|0,dc|0,ec|0)|0;dc=D;rc=jg(uc|0,tc|0,sc|0,rc|0)|0;pc=jg(rc|0,D|0,qc|0,pc|0)|0;nc=jg(pc|0,D|0,oc|0,nc|0)|0;lc=jg(nc|0,D|0,mc|0,lc|0)|0;jc=jg(lc|0,D|0,kc|0,jc|0)|0;hc=jg(jc|0,D|0,ic|0,hc|0)|0;fc=jg(hc|0,D|0,gc|0,fc|0)|0;r=jg(fc|0,D|0,m|0,r|0)|0;M=jg(r|0,D|0,b|0,M|0)|0;b=D;r=jg(p|0,n|0,33554432,0)|0;r=$e(r|0,D|0,26)|0;m=D;bc=jg(ec|0,dc|0,cc|0,bc|0)|0;$b=jg(bc|0,D|0,ac|0,$b|0)|0;Zb=jg($b|0,D|0,_b|0,Zb|0)|0;Xb=jg(Zb|0,D|0,Yb|0,Xb|0)|0;Vb=jg(Xb|0,D|0,Wb|0,Vb|0)|0;Tb=jg(Vb|0,D|0,Ub|0,Tb|0)|0;Rb=jg(Tb|0,D|0,Sb|0,Rb|0)|0;j=jg(Rb|0,D|0,k|0,j|0)|0;j=jg(j|0,D|0,r|0,m|0)|0;k=D;m=zf(r|0,m|0,26)|0;m=gg(p|0,n|0,m|0,D|0)|0;n=D;p=jg(M|0,b|0,33554432,0)|0;p=$e(p|0,D|0,26)|0;r=D;Nb=jg(Qb|0,Pb|0,Ob|0,Nb|0)|0;Lb=jg(Nb|0,D|0,Mb|0,Lb|0)|0;Jb=jg(Lb|0,D|0,Kb|0,Jb|0)|0;Hb=jg(Jb|0,D|0,Ib|0,Hb|0)|0;Fb=jg(Hb|0,D|0,Gb|0,Fb|0)|0;Db=jg(Fb|0,D|0,Eb|0,Db|0)|0;Bb=jg(Db|0,D|0,Cb|0,Bb|0)|0;zb=jg(Bb|0,D|0,Ab|0,zb|0)|0;ya=jg(zb|0,D|0,g|0,ya|0)|0;ya=jg(ya|0,D|0,p|0,r|0)|0;g=D;r=zf(p|0,r|0,26)|0;r=gg(M|0,b|0,r|0,D|0)|0;b=D;M=jg(j|0,k|0,16777216,0)|0;M=$e(M|0,D|0,25)|0;p=D;vb=jg(yb|0,xb|0,wb|0,vb|0)|0;tb=jg(vb|0,D|0,ub|0,tb|0)|0;rb=jg(tb|0,D|0,sb|0,rb|0)|0;pb=jg(rb|0,D|0,qb|0,pb|0)|0;nb=jg(pb|0,D|0,ob|0,nb|0)|0;lb=jg(nb|0,D|0,mb|0,lb|0)|0;jb=jg(lb|0,D|0,kb|0,jb|0)|0;hb=jg(jb|0,D|0,ib|0,hb|0)|0;f=jg(hb|0,D|0,fa|0,f|0)|0;f=jg(f|0,D|0,M|0,p|0)|0;fa=D;p=zf(M|0,p|0,25)|0;p=gg(j|0,k|0,p|0,D|0)|0;k=D;j=jg(ya|0,g|0,16777216,0)|0;j=$e(j|0,D|0,25)|0;M=D;db=jg(gb|0,fb|0,eb|0,db|0)|0;bb=jg(db|0,D|0,cb|0,bb|0)|0;$a=jg(bb|0,D|0,ab|0,$a|0)|0;Za=jg($a|0,D|0,_a|0,Za|0)|0;Xa=jg(Za|0,D|0,Ya|0,Xa|0)|0;Va=jg(Xa|0,D|0,Wa|0,Va|0)|0;Ta=jg(Va|0,D|0,Ua|0,Ta|0)|0;Ra=jg(Ta|0,D|0,Sa|0,Ra|0)|0;i=jg(Ra|0,D|0,ea|0,i|0)|0;i=jg(i|0,D|0,j|0,M|0)|0;ea=D;M=zf(j|0,M|0,25)|0;M=gg(ya|0,g|0,M|0,D|0)|0;g=D;ya=jg(f|0,fa|0,33554432,0)|0;ya=$e(ya|0,D|0,26)|0;j=D;Na=jg(Qa|0,Pa|0,Oa|0,Na|0)|0;La=jg(Na|0,D|0,Ma|0,La|0)|0;Ja=jg(La|0,D|0,Ka|0,Ja|0)|0;Ha=jg(Ja|0,D|0,Ia|0,Ha|0)|0;Fa=jg(Ha|0,D|0,Ga|0,Fa|0)|0;Da=jg(Fa|0,D|0,Ea|0,Da|0)|0;Ba=jg(Da|0,D|0,Ca|0,Ba|0)|0;za=jg(Ba|0,D|0,Aa|0,za|0)|0;e=jg(za|0,D|0,N|0,e|0)|0;e=jg(e|0,D|0,ya|0,j|0)|0;N=D;j=zf(ya|0,j|0,26)|0;j=gg(f|0,fa|0,j|0,D|0)|0;fa=jg(i|0,ea|0,33554432,0)|0;fa=$e(fa|0,D|0,26)|0;f=D;ua=jg(xa|0,wa|0,va|0,ua|0)|0;sa=jg(ua|0,D|0,ta|0,sa|0)|0;qa=jg(sa|0,D|0,ra|0,qa|0)|0;oa=jg(qa|0,D|0,pa|0,oa|0)|0;ma=jg(oa|0,D|0,na|0,ma|0)|0;ka=jg(ma|0,D|0,la|0,ka|0)|0;ia=jg(ka|0,D|0,ja|0,ia|0)|0;ga=jg(ia|0,D|0,ha|0,ga|0)|0;h=jg(ga|0,D|0,L|0,h|0)|0;h=jg(h|0,D|0,fa|0,f|0)|0;L=D;f=zf(fa|0,f|0,26)|0;f=gg(i|0,ea|0,f|0,D|0)|0;ea=jg(e|0,N|0,16777216,0)|0;ea=$e(ea|0,D|0,25)|0;i=D;b=jg(ea|0,i|0,r|0,b|0)|0;r=D;i=zf(ea|0,i|0,25)|0;i=gg(e|0,N|0,i|0,D|0)|0;N=jg(h|0,L|0,16777216,0)|0;N=$e(N|0,D|0,25)|0;e=D;aa=jg(da|0,ca|0,ba|0,aa|0)|0;_=jg(aa|0,D|0,$|0,_|0)|0;Y=jg(_|0,D|0,Z|0,Y|0)|0;W=jg(Y|0,D|0,X|0,W|0)|0;U=jg(W|0,D|0,V|0,U|0)|0;S=jg(U|0,D|0,T|0,S|0)|0;Q=jg(S|0,D|0,R|0,Q|0)|0;O=jg(Q|0,D|0,P|0,O|0)|0;d=jg(O|0,D|0,q|0,d|0)|0;d=jg(d|0,D|0,N|0,e|0)|0;q=D;e=zf(N|0,e|0,25)|0;e=gg(h|0,L|0,e|0,D|0)|0;L=jg(b|0,r|0,33554432,0)|0;L=$e(L|0,D|0,26)|0;h=D;g=jg(M|0,g|0,L|0,h|0)|0;h=zf(L|0,h|0,26)|0;h=gg(b|0,r|0,h|0,D|0)|0;r=jg(d|0,q|0,33554432,0)|0;r=$e(r|0,D|0,26)|0;b=D;H=jg(K|0,J|0,I|0,H|0)|0;F=jg(H|0,D|0,G|0,F|0)|0;C=jg(F|0,D|0,E|0,C|0)|0;A=jg(C|0,D|0,B|0,A|0)|0;y=jg(A|0,D|0,z|0,y|0)|0;w=jg(y|0,D|0,x|0,w|0)|0;u=jg(w|0,D|0,v|0,u|0)|0;s=jg(u|0,D|0,t|0,s|0)|0;l=jg(s|0,D|0,o|0,l|0)|0;l=jg(l|0,D|0,r|0,b|0)|0;o=D;b=zf(r|0,b|0,26)|0;b=gg(d|0,q|0,b|0,D|0)|0;q=jg(l|0,o|0,16777216,0)|0;q=$e(q|0,D|0,25)|0;d=D;r=ef(q|0,d|0,19,0)|0;n=jg(r|0,D|0,m|0,n|0)|0;m=D;d=zf(q|0,d|0,25)|0;d=gg(l|0,o|0,d|0,D|0)|0;o=jg(n|0,m|0,33554432,0)|0;o=$e(o|0,D|0,26)|0;l=D;k=jg(p|0,k|0,o|0,l|0)|0;l=zf(o|0,l|0,26)|0;l=gg(n|0,m|0,l|0,D|0)|0;c[a>>2]=l;c[a+4>>2]=k;c[a+8>>2]=j;c[a+12>>2]=i;c[a+16>>2]=h;c[a+20>>2]=g;c[a+24>>2]=f;c[a+28>>2]=e;c[a+32>>2]=b;c[a+36>>2]=d;return}function qa(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,E=0,F=0,G=0,H=0;e=l;f=l=l+63&-64;l=l+2048|0;yh(f+1024|0,b);Yd(f+1024|0,a);yh(f,f+1024|0);Yd(f,d);a=0;do{b=a<<4;u=c[f+1024+((b|4)<<3)>>2]|0;x=c[f+1024+((b|4)<<3)+4>>2]|0;z=ge(c[f+1024+(b<<3)>>2]|0,c[f+1024+(b<<3)+4>>2]|0,u,x)|0;G=D;y=bf(c[f+1024+((b|12)<<3)>>2]^z,c[f+1024+((b|12)<<3)+4>>2]^G,32)|0;t=D;C=ge(c[f+1024+((b|8)<<3)>>2]|0,c[f+1024+((b|8)<<3)+4>>2]|0,y,t)|0;q=D;x=bf(u^C,x^q,24)|0;u=D;G=ge(z,G,x,u)|0;z=D;t=bf(y^G,t^z,16)|0;y=D;c[f+1024+((b|12)<<3)>>2]=t;c[f+1024+((b|12)<<3)+4>>2]=y;q=ge(C,q,t,y)|0;C=D;c[f+1024+((b|8)<<3)>>2]=q;c[f+1024+((b|8)<<3)+4>>2]=C;C=bf(x^q,u^C,63)|0;c[f+1024+((b|4)<<3)>>2]=C;c[f+1024+((b|4)<<3)+4>>2]=D;C=c[f+1024+((b|5)<<3)>>2]|0;u=c[f+1024+((b|5)<<3)+4>>2]|0;q=ge(c[f+1024+((b|1)<<3)>>2]|0,c[f+1024+((b|1)<<3)+4>>2]|0,C,u)|0;x=D;s=bf(c[f+1024+((b|13)<<3)>>2]^q,c[f+1024+((b|13)<<3)+4>>2]^x,32)|0;m=D;A=ge(c[f+1024+((b|9)<<3)>>2]|0,c[f+1024+((b|9)<<3)+4>>2]|0,s,m)|0;p=D;u=bf(C^A,u^p,24)|0;C=D;x=ge(q,x,u,C)|0;q=D;m=bf(s^x,m^q,16)|0;s=D;p=ge(A,p,m,s)|0;A=D;c[f+1024+((b|9)<<3)>>2]=p;c[f+1024+((b|9)<<3)+4>>2]=A;A=bf(u^p,C^A,63)|0;C=D;p=c[f+1024+((b|6)<<3)>>2]|0;u=c[f+1024+((b|6)<<3)+4>>2]|0;h=ge(c[f+1024+((b|2)<<3)>>2]|0,c[f+1024+((b|2)<<3)+4>>2]|0,p,u)|0;r=D;o=bf(c[f+1024+((b|14)<<3)>>2]^h,c[f+1024+((b|14)<<3)+4>>2]^r,32)|0;i=D;F=ge(c[f+1024+((b|10)<<3)>>2]|0,c[f+1024+((b|10)<<3)+4>>2]|0,o,i)|0;E=D;u=bf(p^F,u^E,24)|0;p=D;r=ge(h,r,u,p)|0;h=D;i=bf(o^r,i^h,16)|0;o=D;E=ge(F,E,i,o)|0;F=D;p=bf(u^E,p^F,63)|0;u=D;j=c[f+1024+((b|7)<<3)>>2]|0;k=c[f+1024+((b|7)<<3)+4>>2]|0;g=ge(c[f+1024+((b|3)<<3)>>2]|0,c[f+1024+((b|3)<<3)+4>>2]|0,j,k)|0;n=D;H=bf(c[f+1024+((b|15)<<3)>>2]^g,c[f+1024+((b|15)<<3)+4>>2]^n,32)|0;B=D;w=ge(c[f+1024+((b|11)<<3)>>2]|0,c[f+1024+((b|11)<<3)+4>>2]|0,H,B)|0;v=D;k=bf(j^w,k^v,24)|0;j=D;n=ge(g,n,k,j)|0;g=D;B=bf(H^n,B^g,16)|0;H=D;v=ge(w,v,B,H)|0;w=D;j=bf(k^v,j^w,63)|0;k=D;z=ge(G,z,A,C)|0;G=D;H=bf(B^z,H^G,32)|0;B=D;F=ge(E,F,H,B)|0;E=D;C=bf(A^F,C^E,24)|0;A=D;G=ge(z,G,C,A)|0;z=D;c[f+1024+(b<<3)>>2]=G;c[f+1024+(b<<3)+4>>2]=z;z=bf(H^G,B^z,16)|0;B=D;c[f+1024+((b|15)<<3)>>2]=z;c[f+1024+((b|15)<<3)+4>>2]=B;B=ge(F,E,z,B)|0;z=D;c[f+1024+((b|10)<<3)>>2]=B;c[f+1024+((b|10)<<3)+4>>2]=z;z=bf(C^B,A^z,63)|0;c[f+1024+((b|5)<<3)>>2]=z;c[f+1024+((b|5)<<3)+4>>2]=D;q=ge(x,q,p,u)|0;x=D;y=bf(t^q,y^x,32)|0;t=D;w=ge(v,w,y,t)|0;v=D;u=bf(p^w,u^v,24)|0;p=D;x=ge(q,x,u,p)|0;q=D;c[f+1024+((b|1)<<3)>>2]=x;c[f+1024+((b|1)<<3)+4>>2]=q;q=bf(y^x,t^q,16)|0;t=D;c[f+1024+((b|12)<<3)>>2]=q;c[f+1024+((b|12)<<3)+4>>2]=t;t=ge(w,v,q,t)|0;q=D;c[f+1024+((b|11)<<3)>>2]=t;c[f+1024+((b|11)<<3)+4>>2]=q;q=bf(u^t,p^q,63)|0;c[f+1024+((b|6)<<3)>>2]=q;c[f+1024+((b|6)<<3)+4>>2]=D;h=ge(r,h,j,k)|0;r=D;s=bf(m^h,s^r,32)|0;m=D;q=ge(c[f+1024+((b|8)<<3)>>2]|0,c[f+1024+((b|8)<<3)+4>>2]|0,s,m)|0;p=D;k=bf(j^q,k^p,24)|0;j=D;r=ge(h,r,k,j)|0;h=D;c[f+1024+((b|2)<<3)>>2]=r;c[f+1024+((b|2)<<3)+4>>2]=h;h=bf(s^r,m^h,16)|0;m=D;c[f+1024+((b|13)<<3)>>2]=h;c[f+1024+((b|13)<<3)+4>>2]=m;m=ge(q,p,h,m)|0;h=D;c[f+1024+((b|8)<<3)>>2]=m;c[f+1024+((b|8)<<3)+4>>2]=h;h=bf(k^m,j^h,63)|0;c[f+1024+((b|7)<<3)>>2]=h;c[f+1024+((b|7)<<3)+4>>2]=D;h=c[f+1024+((b|4)<<3)>>2]|0;j=c[f+1024+((b|4)<<3)+4>>2]|0;g=ge(n,g,h,j)|0;n=D;o=bf(i^g,o^n,32)|0;i=D;m=ge(c[f+1024+((b|9)<<3)>>2]|0,c[f+1024+((b|9)<<3)+4>>2]|0,o,i)|0;k=D;j=bf(h^m,j^k,24)|0;h=D;n=ge(g,n,j,h)|0;g=D;c[f+1024+((b|3)<<3)>>2]=n;c[f+1024+((b|3)<<3)+4>>2]=g;g=bf(o^n,i^g,16)|0;i=D;c[f+1024+((b|14)<<3)>>2]=g;c[f+1024+((b|14)<<3)+4>>2]=i;i=ge(m,k,g,i)|0;g=D;c[f+1024+((b|9)<<3)>>2]=i;c[f+1024+((b|9)<<3)+4>>2]=g;g=bf(j^i,h^g,63)|0;c[f+1024+((b|4)<<3)>>2]=g;c[f+1024+((b|4)<<3)+4>>2]=D;a=a+1|0}while((a|0)!=8);a=0;do{H=a<<1;p=f+1024+(H+32<<3)|0;s=c[p>>2]|0;p=c[p+4>>2]|0;m=ge(c[f+1024+(H<<3)>>2]|0,c[f+1024+(H<<3)+4>>2]|0,s,p)|0;g=D;o=f+1024+(H+96<<3)|0;o=bf(c[o>>2]^m,c[o+4>>2]^g,32)|0;t=D;j=f+1024+(H+64<<3)|0;j=ge(c[j>>2]|0,c[j+4>>2]|0,o,t)|0;x=D;p=bf(s^j,p^x,24)|0;s=D;g=ge(m,g,p,s)|0;m=D;t=bf(o^g,t^m,16)|0;o=D;u=f+1024+(H+96<<3)|0;c[u>>2]=t;c[u+4>>2]=o;x=ge(j,x,t,o)|0;j=D;u=f+1024+(H+64<<3)|0;c[u>>2]=x;c[u+4>>2]=j;j=bf(p^x,s^j,63)|0;s=f+1024+(H+32<<3)|0;c[s>>2]=j;c[s+4>>2]=D;s=f+1024+(H+33<<3)|0;j=c[s>>2]|0;s=c[s+4>>2]|0;x=ge(c[f+1024+((H|1)<<3)>>2]|0,c[f+1024+((H|1)<<3)+4>>2]|0,j,s)|0;p=D;u=f+1024+(H+97<<3)|0;u=bf(c[u>>2]^x,c[u+4>>2]^p,32)|0;A=D;n=f+1024+(H+65<<3)|0;n=ge(c[n>>2]|0,c[n+4>>2]|0,u,A)|0;F=D;s=bf(j^n,s^F,24)|0;j=D;p=ge(x,p,s,j)|0;x=D;A=bf(u^p,A^x,16)|0;u=D;F=ge(n,F,A,u)|0;n=D;w=f+1024+(H+65<<3)|0;c[w>>2]=F;c[w+4>>2]=n;n=bf(s^F,j^n,63)|0;j=D;F=f+1024+(H+16<<3)|0;s=f+1024+(H+48<<3)|0;w=c[s>>2]|0;s=c[s+4>>2]|0;F=ge(c[F>>2]|0,c[F+4>>2]|0,w,s)|0;v=D;y=f+1024+(H+112<<3)|0;y=bf(c[y>>2]^F,c[y+4>>2]^v,32)|0;E=D;h=f+1024+(H+80<<3)|0;h=ge(c[h>>2]|0,c[h+4>>2]|0,y,E)|0;i=D;s=bf(w^h,s^i,24)|0;w=D;v=ge(F,v,s,w)|0;F=D;E=bf(y^v,E^F,16)|0;y=D;i=ge(h,i,E,y)|0;h=D;w=bf(s^i,w^h,63)|0;s=D;G=f+1024+(H+17<<3)|0;B=f+1024+(H+49<<3)|0;C=c[B>>2]|0;B=c[B+4>>2]|0;G=ge(c[G>>2]|0,c[G+4>>2]|0,C,B)|0;z=D;b=f+1024+(H+113<<3)|0;b=bf(c[b>>2]^G,c[b+4>>2]^z,32)|0;k=D;q=f+1024+(H+81<<3)|0;q=ge(c[q>>2]|0,c[q+4>>2]|0,b,k)|0;r=D;B=bf(C^q,B^r,24)|0;C=D;z=ge(G,z,B,C)|0;G=D;k=bf(b^z,k^G,16)|0;b=D;r=ge(q,r,k,b)|0;q=D;C=bf(B^r,C^q,63)|0;B=D;m=ge(g,m,n,j)|0;g=D;b=bf(k^m,b^g,32)|0;k=D;h=ge(i,h,b,k)|0;i=D;j=bf(n^h,j^i,24)|0;n=D;g=ge(m,g,j,n)|0;m=D;c[f+1024+(H<<3)>>2]=g;c[f+1024+(H<<3)+4>>2]=m;m=bf(b^g,k^m,16)|0;k=D;g=f+1024+(H+113<<3)|0;c[g>>2]=m;c[g+4>>2]=k;k=ge(h,i,m,k)|0;m=D;i=f+1024+(H+80<<3)|0;c[i>>2]=k;c[i+4>>2]=m;m=bf(j^k,n^m,63)|0;n=f+1024+(H+33<<3)|0;c[n>>2]=m;c[n+4>>2]=D;x=ge(p,x,w,s)|0;p=D;o=bf(t^x,o^p,32)|0;t=D;q=ge(r,q,o,t)|0;r=D;s=bf(w^q,s^r,24)|0;w=D;p=ge(x,p,s,w)|0;x=D;c[f+1024+((H|1)<<3)>>2]=p;c[f+1024+((H|1)<<3)+4>>2]=x;x=bf(o^p,t^x,16)|0;t=D;p=f+1024+(H+96<<3)|0;c[p>>2]=x;c[p+4>>2]=t;t=ge(q,r,x,t)|0;x=D;r=f+1024+(H+81<<3)|0;c[r>>2]=t;c[r+4>>2]=x;x=bf(s^t,w^x,63)|0;w=f+1024+(H+48<<3)|0;c[w>>2]=x;c[w+4>>2]=D;F=ge(v,F,C,B)|0;v=D;u=bf(A^F,u^v,32)|0;A=D;w=f+1024+(H+64<<3)|0;w=ge(c[w>>2]|0,c[w+4>>2]|0,u,A)|0;x=D;B=bf(C^w,B^x,24)|0;C=D;v=ge(F,v,B,C)|0;F=D;t=f+1024+(H+16<<3)|0;c[t>>2]=v;c[t+4>>2]=F;F=bf(u^v,A^F,16)|0;A=D;v=f+1024+(H+97<<3)|0;c[v>>2]=F;c[v+4>>2]=A;A=ge(w,x,F,A)|0;F=D;x=f+1024+(H+64<<3)|0;c[x>>2]=A;c[x+4>>2]=F;F=bf(B^A,C^F,63)|0;C=f+1024+(H+49<<3)|0;c[C>>2]=F;c[C+4>>2]=D;C=f+1024+(H+32<<3)|0;F=c[C>>2]|0;C=c[C+4>>2]|0;G=ge(z,G,F,C)|0;z=D;y=bf(E^G,y^z,32)|0;E=D;A=f+1024+(H+65<<3)|0;A=ge(c[A>>2]|0,c[A+4>>2]|0,y,E)|0;B=D;C=bf(F^A,C^B,24)|0;F=D;z=ge(G,z,C,F)|0;G=D;x=f+1024+(H+17<<3)|0;c[x>>2]=z;c[x+4>>2]=G;G=bf(y^z,E^G,16)|0;E=D;z=f+1024+(H+112<<3)|0;c[z>>2]=G;c[z+4>>2]=E;E=ge(A,B,G,E)|0;G=D;B=f+1024+(H+65<<3)|0;c[B>>2]=E;c[B+4>>2]=G;G=bf(C^E,F^G,63)|0;H=f+1024+(H+32<<3)|0;c[H>>2]=G;c[H+4>>2]=D;a=a+1|0}while((a|0)!=8);yh(d,f);Yd(d,f+1024|0);l=e;return}function ra(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,E=0,F=0,G=0,H=0;e=l;f=l=l+63&-64;l=l+2048|0;yh(f+1024|0,b);Yd(f+1024|0,a);yh(f,f+1024|0);a=0;do{b=a<<4;u=c[f+1024+((b|4)<<3)>>2]|0;x=c[f+1024+((b|4)<<3)+4>>2]|0;z=ge(c[f+1024+(b<<3)>>2]|0,c[f+1024+(b<<3)+4>>2]|0,u,x)|0;G=D;y=bf(c[f+1024+((b|12)<<3)>>2]^z,c[f+1024+((b|12)<<3)+4>>2]^G,32)|0;t=D;C=ge(c[f+1024+((b|8)<<3)>>2]|0,c[f+1024+((b|8)<<3)+4>>2]|0,y,t)|0;q=D;x=bf(u^C,x^q,24)|0;u=D;G=ge(z,G,x,u)|0;z=D;t=bf(y^G,t^z,16)|0;y=D;c[f+1024+((b|12)<<3)>>2]=t;c[f+1024+((b|12)<<3)+4>>2]=y;q=ge(C,q,t,y)|0;C=D;c[f+1024+((b|8)<<3)>>2]=q;c[f+1024+((b|8)<<3)+4>>2]=C;C=bf(x^q,u^C,63)|0;c[f+1024+((b|4)<<3)>>2]=C;c[f+1024+((b|4)<<3)+4>>2]=D;C=c[f+1024+((b|5)<<3)>>2]|0;u=c[f+1024+((b|5)<<3)+4>>2]|0;q=ge(c[f+1024+((b|1)<<3)>>2]|0,c[f+1024+((b|1)<<3)+4>>2]|0,C,u)|0;x=D;s=bf(c[f+1024+((b|13)<<3)>>2]^q,c[f+1024+((b|13)<<3)+4>>2]^x,32)|0;m=D;A=ge(c[f+1024+((b|9)<<3)>>2]|0,c[f+1024+((b|9)<<3)+4>>2]|0,s,m)|0;p=D;u=bf(C^A,u^p,24)|0;C=D;x=ge(q,x,u,C)|0;q=D;m=bf(s^x,m^q,16)|0;s=D;p=ge(A,p,m,s)|0;A=D;c[f+1024+((b|9)<<3)>>2]=p;c[f+1024+((b|9)<<3)+4>>2]=A;A=bf(u^p,C^A,63)|0;C=D;p=c[f+1024+((b|6)<<3)>>2]|0;u=c[f+1024+((b|6)<<3)+4>>2]|0;h=ge(c[f+1024+((b|2)<<3)>>2]|0,c[f+1024+((b|2)<<3)+4>>2]|0,p,u)|0;r=D;o=bf(c[f+1024+((b|14)<<3)>>2]^h,c[f+1024+((b|14)<<3)+4>>2]^r,32)|0;i=D;F=ge(c[f+1024+((b|10)<<3)>>2]|0,c[f+1024+((b|10)<<3)+4>>2]|0,o,i)|0;E=D;u=bf(p^F,u^E,24)|0;p=D;r=ge(h,r,u,p)|0;h=D;i=bf(o^r,i^h,16)|0;o=D;E=ge(F,E,i,o)|0;F=D;p=bf(u^E,p^F,63)|0;u=D;j=c[f+1024+((b|7)<<3)>>2]|0;k=c[f+1024+((b|7)<<3)+4>>2]|0;g=ge(c[f+1024+((b|3)<<3)>>2]|0,c[f+1024+((b|3)<<3)+4>>2]|0,j,k)|0;n=D;H=bf(c[f+1024+((b|15)<<3)>>2]^g,c[f+1024+((b|15)<<3)+4>>2]^n,32)|0;B=D;w=ge(c[f+1024+((b|11)<<3)>>2]|0,c[f+1024+((b|11)<<3)+4>>2]|0,H,B)|0;v=D;k=bf(j^w,k^v,24)|0;j=D;n=ge(g,n,k,j)|0;g=D;B=bf(H^n,B^g,16)|0;H=D;v=ge(w,v,B,H)|0;w=D;j=bf(k^v,j^w,63)|0;k=D;z=ge(G,z,A,C)|0;G=D;H=bf(B^z,H^G,32)|0;B=D;F=ge(E,F,H,B)|0;E=D;C=bf(A^F,C^E,24)|0;A=D;G=ge(z,G,C,A)|0;z=D;c[f+1024+(b<<3)>>2]=G;c[f+1024+(b<<3)+4>>2]=z;z=bf(H^G,B^z,16)|0;B=D;c[f+1024+((b|15)<<3)>>2]=z;c[f+1024+((b|15)<<3)+4>>2]=B;B=ge(F,E,z,B)|0;z=D;c[f+1024+((b|10)<<3)>>2]=B;c[f+1024+((b|10)<<3)+4>>2]=z;z=bf(C^B,A^z,63)|0;c[f+1024+((b|5)<<3)>>2]=z;c[f+1024+((b|5)<<3)+4>>2]=D;q=ge(x,q,p,u)|0;x=D;y=bf(t^q,y^x,32)|0;t=D;w=ge(v,w,y,t)|0;v=D;u=bf(p^w,u^v,24)|0;p=D;x=ge(q,x,u,p)|0;q=D;c[f+1024+((b|1)<<3)>>2]=x;c[f+1024+((b|1)<<3)+4>>2]=q;q=bf(y^x,t^q,16)|0;t=D;c[f+1024+((b|12)<<3)>>2]=q;c[f+1024+((b|12)<<3)+4>>2]=t;t=ge(w,v,q,t)|0;q=D;c[f+1024+((b|11)<<3)>>2]=t;c[f+1024+((b|11)<<3)+4>>2]=q;q=bf(u^t,p^q,63)|0;c[f+1024+((b|6)<<3)>>2]=q;c[f+1024+((b|6)<<3)+4>>2]=D;h=ge(r,h,j,k)|0;r=D;s=bf(m^h,s^r,32)|0;m=D;q=ge(c[f+1024+((b|8)<<3)>>2]|0,c[f+1024+((b|8)<<3)+4>>2]|0,s,m)|0;p=D;k=bf(j^q,k^p,24)|0;j=D;r=ge(h,r,k,j)|0;h=D;c[f+1024+((b|2)<<3)>>2]=r;c[f+1024+((b|2)<<3)+4>>2]=h;h=bf(s^r,m^h,16)|0;m=D;c[f+1024+((b|13)<<3)>>2]=h;c[f+1024+((b|13)<<3)+4>>2]=m;m=ge(q,p,h,m)|0;h=D;c[f+1024+((b|8)<<3)>>2]=m;c[f+1024+((b|8)<<3)+4>>2]=h;h=bf(k^m,j^h,63)|0;c[f+1024+((b|7)<<3)>>2]=h;c[f+1024+((b|7)<<3)+4>>2]=D;h=c[f+1024+((b|4)<<3)>>2]|0;j=c[f+1024+((b|4)<<3)+4>>2]|0;g=ge(n,g,h,j)|0;n=D;o=bf(i^g,o^n,32)|0;i=D;m=ge(c[f+1024+((b|9)<<3)>>2]|0,c[f+1024+((b|9)<<3)+4>>2]|0,o,i)|0;k=D;j=bf(h^m,j^k,24)|0;h=D;n=ge(g,n,j,h)|0;g=D;c[f+1024+((b|3)<<3)>>2]=n;c[f+1024+((b|3)<<3)+4>>2]=g;g=bf(o^n,i^g,16)|0;i=D;c[f+1024+((b|14)<<3)>>2]=g;c[f+1024+((b|14)<<3)+4>>2]=i;i=ge(m,k,g,i)|0;g=D;c[f+1024+((b|9)<<3)>>2]=i;c[f+1024+((b|9)<<3)+4>>2]=g;g=bf(j^i,h^g,63)|0;c[f+1024+((b|4)<<3)>>2]=g;c[f+1024+((b|4)<<3)+4>>2]=D;a=a+1|0}while((a|0)!=8);a=0;do{H=a<<1;p=f+1024+(H+32<<3)|0;s=c[p>>2]|0;p=c[p+4>>2]|0;m=ge(c[f+1024+(H<<3)>>2]|0,c[f+1024+(H<<3)+4>>2]|0,s,p)|0;g=D;o=f+1024+(H+96<<3)|0;o=bf(c[o>>2]^m,c[o+4>>2]^g,32)|0;t=D;j=f+1024+(H+64<<3)|0;j=ge(c[j>>2]|0,c[j+4>>2]|0,o,t)|0;x=D;p=bf(s^j,p^x,24)|0;s=D;g=ge(m,g,p,s)|0;m=D;t=bf(o^g,t^m,16)|0;o=D;u=f+1024+(H+96<<3)|0;c[u>>2]=t;c[u+4>>2]=o;x=ge(j,x,t,o)|0;j=D;u=f+1024+(H+64<<3)|0;c[u>>2]=x;c[u+4>>2]=j;j=bf(p^x,s^j,63)|0;s=f+1024+(H+32<<3)|0;c[s>>2]=j;c[s+4>>2]=D;s=f+1024+(H+33<<3)|0;j=c[s>>2]|0;s=c[s+4>>2]|0;x=ge(c[f+1024+((H|1)<<3)>>2]|0,c[f+1024+((H|1)<<3)+4>>2]|0,j,s)|0;p=D;u=f+1024+(H+97<<3)|0;u=bf(c[u>>2]^x,c[u+4>>2]^p,32)|0;A=D;n=f+1024+(H+65<<3)|0;n=ge(c[n>>2]|0,c[n+4>>2]|0,u,A)|0;F=D;s=bf(j^n,s^F,24)|0;j=D;p=ge(x,p,s,j)|0;x=D;A=bf(u^p,A^x,16)|0;u=D;F=ge(n,F,A,u)|0;n=D;w=f+1024+(H+65<<3)|0;c[w>>2]=F;c[w+4>>2]=n;n=bf(s^F,j^n,63)|0;j=D;F=f+1024+(H+16<<3)|0;s=f+1024+(H+48<<3)|0;w=c[s>>2]|0;s=c[s+4>>2]|0;F=ge(c[F>>2]|0,c[F+4>>2]|0,w,s)|0;v=D;y=f+1024+(H+112<<3)|0;y=bf(c[y>>2]^F,c[y+4>>2]^v,32)|0;E=D;h=f+1024+(H+80<<3)|0;h=ge(c[h>>2]|0,c[h+4>>2]|0,y,E)|0;i=D;s=bf(w^h,s^i,24)|0;w=D;v=ge(F,v,s,w)|0;F=D;E=bf(y^v,E^F,16)|0;y=D;i=ge(h,i,E,y)|0;h=D;w=bf(s^i,w^h,63)|0;s=D;G=f+1024+(H+17<<3)|0;B=f+1024+(H+49<<3)|0;C=c[B>>2]|0;B=c[B+4>>2]|0;G=ge(c[G>>2]|0,c[G+4>>2]|0,C,B)|0;z=D;b=f+1024+(H+113<<3)|0;b=bf(c[b>>2]^G,c[b+4>>2]^z,32)|0;k=D;q=f+1024+(H+81<<3)|0;q=ge(c[q>>2]|0,c[q+4>>2]|0,b,k)|0;r=D;B=bf(C^q,B^r,24)|0;C=D;z=ge(G,z,B,C)|0;G=D;k=bf(b^z,k^G,16)|0;b=D;r=ge(q,r,k,b)|0;q=D;C=bf(B^r,C^q,63)|0;B=D;m=ge(g,m,n,j)|0;g=D;b=bf(k^m,b^g,32)|0;k=D;h=ge(i,h,b,k)|0;i=D;j=bf(n^h,j^i,24)|0;n=D;g=ge(m,g,j,n)|0;m=D;c[f+1024+(H<<3)>>2]=g;c[f+1024+(H<<3)+4>>2]=m;m=bf(b^g,k^m,16)|0;k=D;g=f+1024+(H+113<<3)|0;c[g>>2]=m;c[g+4>>2]=k;k=ge(h,i,m,k)|0;m=D;i=f+1024+(H+80<<3)|0;c[i>>2]=k;c[i+4>>2]=m;m=bf(j^k,n^m,63)|0;n=f+1024+(H+33<<3)|0;c[n>>2]=m;c[n+4>>2]=D;x=ge(p,x,w,s)|0;p=D;o=bf(t^x,o^p,32)|0;t=D;q=ge(r,q,o,t)|0;r=D;s=bf(w^q,s^r,24)|0;w=D;p=ge(x,p,s,w)|0;x=D;c[f+1024+((H|1)<<3)>>2]=p;c[f+1024+((H|1)<<3)+4>>2]=x;x=bf(o^p,t^x,16)|0;t=D;p=f+1024+(H+96<<3)|0;c[p>>2]=x;c[p+4>>2]=t;t=ge(q,r,x,t)|0;x=D;r=f+1024+(H+81<<3)|0;c[r>>2]=t;c[r+4>>2]=x;x=bf(s^t,w^x,63)|0;w=f+1024+(H+48<<3)|0;c[w>>2]=x;c[w+4>>2]=D;F=ge(v,F,C,B)|0;v=D;u=bf(A^F,u^v,32)|0;A=D;w=f+1024+(H+64<<3)|0;w=ge(c[w>>2]|0,c[w+4>>2]|0,u,A)|0;x=D;B=bf(C^w,B^x,24)|0;C=D;v=ge(F,v,B,C)|0;F=D;t=f+1024+(H+16<<3)|0;c[t>>2]=v;c[t+4>>2]=F;F=bf(u^v,A^F,16)|0;A=D;v=f+1024+(H+97<<3)|0;c[v>>2]=F;c[v+4>>2]=A;A=ge(w,x,F,A)|0;F=D;x=f+1024+(H+64<<3)|0;c[x>>2]=A;c[x+4>>2]=F;F=bf(B^A,C^F,63)|0;C=f+1024+(H+49<<3)|0;c[C>>2]=F;c[C+4>>2]=D;C=f+1024+(H+32<<3)|0;F=c[C>>2]|0;C=c[C+4>>2]|0;G=ge(z,G,F,C)|0;z=D;y=bf(E^G,y^z,32)|0;E=D;A=f+1024+(H+65<<3)|0;A=ge(c[A>>2]|0,c[A+4>>2]|0,y,E)|0;B=D;C=bf(F^A,C^B,24)|0;F=D;z=ge(G,z,C,F)|0;G=D;x=f+1024+(H+17<<3)|0;c[x>>2]=z;c[x+4>>2]=G;G=bf(y^z,E^G,16)|0;E=D;z=f+1024+(H+112<<3)|0;c[z>>2]=G;c[z+4>>2]=E;E=ge(A,B,G,E)|0;G=D;B=f+1024+(H+65<<3)|0;c[B>>2]=E;c[B+4>>2]=G;G=bf(C^E,F^G,63)|0;H=f+1024+(H+32<<3)|0;c[H>>2]=G;c[H+4>>2]=D;a=a+1|0}while((a|0)!=8);yh(d,f);Yd(d,f+1024|0);l=e;return}function sa(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0,Ha=0,Ia=0,Ja=0,Ka=0,La=0,Ma=0,Na=0,Oa=0,Pa=0,Qa=0,Ra=0,Sa=0,Ta=0,Ua=0,Va=0,Wa=0,Xa=0,Ya=0,Za=0,_a=0,$a=0,ab=0,bb=0,cb=0,db=0,eb=0;l=c[b>>2]|0;n=c[b+4>>2]|0;k=c[b+8>>2]|0;f=c[b+12>>2]|0;u=c[b+16>>2]|0;t=c[b+20>>2]|0;g=c[b+24>>2]|0;v=c[b+28>>2]|0;s=c[b+32>>2]|0;q=c[b+36>>2]|0;cb=ef(l|0,((l|0)<0)<<31>>31|0,l|0,((l|0)<0)<<31>>31|0)|0;bb=D;o=((l<<1|0)<0)<<31>>31;Ua=ef(l<<1|0,o|0,n|0,((n|0)<0)<<31>>31|0)|0;Ta=D;Oa=ef(k|0,((k|0)<0)<<31>>31|0,l<<1|0,o|0)|0;Na=D;Ea=ef(f|0,((f|0)<0)<<31>>31|0,l<<1|0,o|0)|0;Da=D;sa=ef(u|0,((u|0)<0)<<31>>31|0,l<<1|0,o|0)|0;ra=D;ia=ef(t|0,((t|0)<0)<<31>>31|0,l<<1|0,o|0)|0;ha=D;_=ef(g|0,((g|0)<0)<<31>>31|0,l<<1|0,o|0)|0;Z=D;Q=ef(v|0,((v|0)<0)<<31>>31|0,l<<1|0,o|0)|0;P=D;G=ef(s|0,((s|0)<0)<<31>>31|0,l<<1|0,o|0)|0;F=D;o=ef(q|0,((q|0)<0)<<31>>31|0,l<<1|0,o|0)|0;l=D;p=((n<<1|0)<0)<<31>>31;Ma=ef(n<<1|0,p|0,n|0,((n|0)<0)<<31>>31|0)|0;La=D;Ca=ef(n<<1|0,p|0,k|0,((k|0)<0)<<31>>31|0)|0;Ba=D;w=((f<<1|0)<0)<<31>>31;wa=ef(f<<1|0,w|0,n<<1|0,p|0)|0;va=D;ma=ef(u|0,((u|0)<0)<<31>>31|0,n<<1|0,p|0)|0;la=D;aa=ef(t<<1|0,((t<<1|0)<0)<<31>>31|0,n<<1|0,p|0)|0;$=D;S=ef(g|0,((g|0)<0)<<31>>31|0,n<<1|0,p|0)|0;R=D;I=ef(v<<1|0,((v<<1|0)<0)<<31>>31|0,n<<1|0,p|0)|0;H=D;m=ef(s|0,((s|0)<0)<<31>>31|0,n<<1|0,p|0)|0;r=D;b=((q*38|0)<0)<<31>>31;p=ef(q*38|0,b|0,n<<1|0,p|0)|0;n=D;ua=ef(k|0,((k|0)<0)<<31>>31|0,k|0,((k|0)<0)<<31>>31|0)|0;ta=D;ka=ef(k<<1|0,((k<<1|0)<0)<<31>>31|0,f|0,((f|0)<0)<<31>>31|0)|0;ja=D;ca=ef(u|0,((u|0)<0)<<31>>31|0,k<<1|0,((k<<1|0)<0)<<31>>31|0)|0;ba=D;W=ef(t|0,((t|0)<0)<<31>>31|0,k<<1|0,((k<<1|0)<0)<<31>>31|0)|0;V=D;O=ef(g|0,((g|0)<0)<<31>>31|0,k<<1|0,((k<<1|0)<0)<<31>>31|0)|0;N=D;z=ef(v|0,((v|0)<0)<<31>>31|0,k<<1|0,((k<<1|0)<0)<<31>>31|0)|0;y=D;Y=((s*19|0)<0)<<31>>31;Ya=ef(s*19|0,Y|0,k<<1|0,((k<<1|0)<0)<<31>>31|0)|0;Xa=D;k=ef(q*38|0,b|0,k|0,((k|0)<0)<<31>>31|0)|0;j=D;ea=ef(f<<1|0,w|0,f|0,((f|0)<0)<<31>>31|0)|0;da=D;U=ef(f<<1|0,w|0,u|0,((u|0)<0)<<31>>31|0)|0;T=D;K=ef(t<<1|0,((t<<1|0)<0)<<31>>31|0,f<<1|0,w|0)|0;J=D;E=ef(g|0,((g|0)<0)<<31>>31|0,f<<1|0,w|0)|0;C=D;qa=((v*38|0)<0)<<31>>31;_a=ef(v*38|0,qa|0,f<<1|0,w|0)|0;Za=D;Qa=ef(s*19|0,Y|0,f<<1|0,w|0)|0;Pa=D;w=ef(q*38|0,b|0,f<<1|0,w|0)|0;f=D;M=ef(u|0,((u|0)<0)<<31>>31|0,u|0,((u|0)<0)<<31>>31|0)|0;L=D;B=ef(u<<1|0,((u<<1|0)<0)<<31>>31|0,t|0,((t|0)<0)<<31>>31|0)|0;A=D;ab=ef(g*19|0,((g*19|0)<0)<<31>>31|0,u<<1|0,((u<<1|0)<0)<<31>>31|0)|0;$a=D;Sa=ef(v*38|0,qa|0,u|0,((u|0)<0)<<31>>31|0)|0;Ra=D;Ga=ef(s*19|0,Y|0,u<<1|0,((u<<1|0)<0)<<31>>31|0)|0;Fa=D;u=ef(q*38|0,b|0,u|0,((u|0)<0)<<31>>31|0)|0;e=D;eb=ef(t*38|0,((t*38|0)<0)<<31>>31|0,t|0,((t|0)<0)<<31>>31|0)|0;db=D;Wa=ef(g*19|0,((g*19|0)<0)<<31>>31|0,t<<1|0,((t<<1|0)<0)<<31>>31|0)|0;Va=D;Ia=ef(v*38|0,qa|0,t<<1|0,((t<<1|0)<0)<<31>>31|0)|0;Ha=D;ya=ef(s*19|0,Y|0,t<<1|0,((t<<1|0)<0)<<31>>31|0)|0;xa=D;t=ef(q*38|0,b|0,t<<1|0,((t<<1|0)<0)<<31>>31|0)|0;d=D;Ka=ef(g*19|0,((g*19|0)<0)<<31>>31|0,g|0,((g|0)<0)<<31>>31|0)|0;Ja=D;Aa=ef(v*38|0,qa|0,g|0,((g|0)<0)<<31>>31|0)|0;za=D;oa=ef(s*19|0,Y|0,g<<1|0,((g<<1|0)<0)<<31>>31|0)|0;na=D;g=ef(q*38|0,b|0,g|0,((g|0)<0)<<31>>31|0)|0;x=D;qa=ef(v*38|0,qa|0,v|0,((v|0)<0)<<31>>31|0)|0;pa=D;ga=ef(s*19|0,Y|0,v<<1|0,((v<<1|0)<0)<<31>>31|0)|0;fa=D;v=ef(q*38|0,b|0,v<<1|0,((v<<1|0)<0)<<31>>31|0)|0;i=D;Y=ef(s*19|0,Y|0,s|0,((s|0)<0)<<31>>31|0)|0;X=D;s=ef(q*38|0,b|0,s|0,((s|0)<0)<<31>>31|0)|0;h=D;q=ef(q*38|0,b|0,q|0,((q|0)<0)<<31>>31|0)|0;b=D;bb=jg(eb|0,db|0,cb|0,bb|0)|0;$a=jg(bb|0,D|0,ab|0,$a|0)|0;Za=jg($a|0,D|0,_a|0,Za|0)|0;Xa=jg(Za|0,D|0,Ya|0,Xa|0)|0;n=jg(Xa|0,D|0,p|0,n|0)|0;p=D;Ta=jg(Wa|0,Va|0,Ua|0,Ta|0)|0;Ra=jg(Ta|0,D|0,Sa|0,Ra|0)|0;Pa=jg(Ra|0,D|0,Qa|0,Pa|0)|0;j=jg(Pa|0,D|0,k|0,j|0)|0;k=D;La=jg(Oa|0,Na|0,Ma|0,La|0)|0;Ja=jg(La|0,D|0,Ka|0,Ja|0)|0;Ha=jg(Ja|0,D|0,Ia|0,Ha|0)|0;Fa=jg(Ha|0,D|0,Ga|0,Fa|0)|0;f=jg(Fa|0,D|0,w|0,f|0)|0;w=D;Ba=jg(Ea|0,Da|0,Ca|0,Ba|0)|0;za=jg(Ba|0,D|0,Aa|0,za|0)|0;xa=jg(za|0,D|0,ya|0,xa|0)|0;e=jg(xa|0,D|0,u|0,e|0)|0;u=D;ta=jg(wa|0,va|0,ua|0,ta|0)|0;ra=jg(ta|0,D|0,sa|0,ra|0)|0;pa=jg(ra|0,D|0,qa|0,pa|0)|0;na=jg(pa|0,D|0,oa|0,na|0)|0;d=jg(na|0,D|0,t|0,d|0)|0;t=D;ja=jg(ma|0,la|0,ka|0,ja|0)|0;ha=jg(ja|0,D|0,ia|0,ha|0)|0;fa=jg(ha|0,D|0,ga|0,fa|0)|0;x=jg(fa|0,D|0,g|0,x|0)|0;g=D;ba=jg(ea|0,da|0,ca|0,ba|0)|0;$=jg(ba|0,D|0,aa|0,$|0)|0;Z=jg($|0,D|0,_|0,Z|0)|0;X=jg(Z|0,D|0,Y|0,X|0)|0;i=jg(X|0,D|0,v|0,i|0)|0;v=D;T=jg(W|0,V|0,U|0,T|0)|0;R=jg(T|0,D|0,S|0,R|0)|0;P=jg(R|0,D|0,Q|0,P|0)|0;h=jg(P|0,D|0,s|0,h|0)|0;s=D;L=jg(O|0,N|0,M|0,L|0)|0;J=jg(L|0,D|0,K|0,J|0)|0;H=jg(J|0,D|0,I|0,H|0)|0;F=jg(H|0,D|0,G|0,F|0)|0;b=jg(F|0,D|0,q|0,b|0)|0;q=D;A=jg(E|0,C|0,B|0,A|0)|0;y=jg(A|0,D|0,z|0,y|0)|0;r=jg(y|0,D|0,m|0,r|0)|0;l=jg(r|0,D|0,o|0,l|0)|0;o=D;p=zf(n|0,p|0,1)|0;n=D;k=zf(j|0,k|0,1)|0;j=D;w=zf(f|0,w|0,1)|0;f=D;u=zf(e|0,u|0,1)|0;e=D;t=zf(d|0,t|0,1)|0;d=D;g=zf(x|0,g|0,1)|0;x=D;v=zf(i|0,v|0,1)|0;i=D;s=zf(h|0,s|0,1)|0;h=D;q=zf(b|0,q|0,1)|0;b=D;o=zf(l|0,o|0,1)|0;l=D;r=jg(p|0,n|0,33554432,0)|0;r=$e(r|0,D|0,26)|0;m=D;j=jg(r|0,m|0,k|0,j|0)|0;k=D;m=zf(r|0,m|0,26)|0;m=gg(p|0,n|0,m|0,D|0)|0;n=D;p=jg(t|0,d|0,33554432,0)|0;p=$e(p|0,D|0,26)|0;r=D;x=jg(p|0,r|0,g|0,x|0)|0;g=D;r=zf(p|0,r|0,26)|0;r=gg(t|0,d|0,r|0,D|0)|0;d=D;t=jg(j|0,k|0,16777216,0)|0;t=$e(t|0,D|0,25)|0;p=D;f=jg(t|0,p|0,w|0,f|0)|0;w=D;p=zf(t|0,p|0,25)|0;p=gg(j|0,k|0,p|0,D|0)|0;k=D;j=jg(x|0,g|0,16777216,0)|0;j=$e(j|0,D|0,25)|0;t=D;i=jg(j|0,t|0,v|0,i|0)|0;v=D;t=zf(j|0,t|0,25)|0;t=gg(x|0,g|0,t|0,D|0)|0;g=D;x=jg(f|0,w|0,33554432,0)|0;x=$e(x|0,D|0,26)|0;j=D;e=jg(x|0,j|0,u|0,e|0)|0;u=D;j=zf(x|0,j|0,26)|0;j=gg(f|0,w|0,j|0,D|0)|0;w=jg(i|0,v|0,33554432,0)|0;w=$e(w|0,D|0,26)|0;f=D;h=jg(w|0,f|0,s|0,h|0)|0;s=D;f=zf(w|0,f|0,26)|0;f=gg(i|0,v|0,f|0,D|0)|0;v=jg(e|0,u|0,16777216,0)|0;v=$e(v|0,D|0,25)|0;i=D;d=jg(v|0,i|0,r|0,d|0)|0;r=D;i=zf(v|0,i|0,25)|0;i=gg(e|0,u|0,i|0,D|0)|0;u=jg(h|0,s|0,16777216,0)|0;u=$e(u|0,D|0,25)|0;e=D;b=jg(u|0,e|0,q|0,b|0)|0;q=D;e=zf(u|0,e|0,25)|0;e=gg(h|0,s|0,e|0,D|0)|0;s=jg(d|0,r|0,33554432,0)|0;s=$e(s|0,D|0,26)|0;h=D;g=jg(t|0,g|0,s|0,h|0)|0;h=zf(s|0,h|0,26)|0;h=gg(d|0,r|0,h|0,D|0)|0;r=jg(b|0,q|0,33554432,0)|0;r=$e(r|0,D|0,26)|0;d=D;l=jg(r|0,d|0,o|0,l|0)|0;o=D;d=zf(r|0,d|0,26)|0;d=gg(b|0,q|0,d|0,D|0)|0;q=jg(l|0,o|0,16777216,0)|0;q=$e(q|0,D|0,25)|0;b=D;r=ef(q|0,b|0,19,0)|0;n=jg(r|0,D|0,m|0,n|0)|0;m=D;b=zf(q|0,b|0,25)|0;b=gg(l|0,o|0,b|0,D|0)|0;o=jg(n|0,m|0,33554432,0)|0;o=$e(o|0,D|0,26)|0;l=D;k=jg(p|0,k|0,o|0,l|0)|0;l=zf(o|0,l|0,26)|0;l=gg(n|0,m|0,l|0,D|0)|0;c[a>>2]=l;c[a+4>>2]=k;c[a+8>>2]=j;c[a+12>>2]=i;c[a+16>>2]=h;c[a+20>>2]=g;c[a+24>>2]=f;c[a+28>>2]=e;c[a+32>>2]=d;c[a+36>>2]=b;return}function ta(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0;xf(d,b);c[e>>2]=c[a>>2];c[e+4>>2]=c[a+4>>2];c[e+8>>2]=c[a+8>>2];c[e+12>>2]=c[a+12>>2];c[e+16>>2]=c[a+16>>2];c[e+20>>2]=c[a+20>>2];c[e+24>>2]=c[a+24>>2];c[e+28>>2]=c[a+28>>2];s=0;b=c[d>>2]|0;while(1){w=c[e+16>>2]|0;m=Eh(w,6)|0;m=(Eh(w,11)|0)^m;m=m^(Eh(w,25)|0);k=c[e+20>>2]|0;j=c[e+24>>2]|0;m=b+m+(c[32984+(s<<2)>>2]|0)+((j^k)&w^j)+(c[e+28>>2]|0)|0;l=m+(c[e+12>>2]|0)|0;c[e+12>>2]=l;i=c[e>>2]|0;v=Eh(i,2)|0;v=(Eh(i,13)|0)^v;v=v^(Eh(i,22)|0);h=c[e+4>>2]|0;g=c[e+8>>2]|0;c[e+28>>2]=m+v+((g|h)&i|g&h);u=Eh(l,6)|0;u=(Eh(l,11)|0)^u;u=u^(Eh(l,25)|0);q=s|1;j=(c[d+(q<<2)>>2]|0)+u+(c[32984+(q<<2)>>2]|0)+((k^w)&l^k)+j|0;c[e+8>>2]=j+g;u=Eh(m+v+((g|h)&i|g&h)|0,2)|0;u=(Eh(m+v+((g|h)&i|g&h)|0,13)|0)^u;u=j+(u^(Eh(m+v+((g|h)&i|g&h)|0,22)|0))+((h|i)&m+v+((g|h)&i|g&h)|h&i)|0;c[e+24>>2]=u;f=Eh(j+g|0,6)|0;f=(Eh(j+g|0,11)|0)^f;f=f^(Eh(j+g|0,25)|0);r=s|2;k=(c[d+(r<<2)>>2]|0)+f+(c[32984+(r<<2)>>2]|0)+((w^l)&j+g^w)+k|0;c[e+4>>2]=k+h;w=Eh(u,2)|0;w=(Eh(u,13)|0)^w;w=k+(w^(Eh(u,22)|0))+((i|m+v+((g|h)&i|g&h))&u|i&m+v+((g|h)&i|g&h))|0;c[e+20>>2]=w;f=Eh(k+h|0,6)|0;f=(Eh(k+h|0,11)|0)^f;f=f^(Eh(k+h|0,25)|0);b=s|3;l=(c[d+(b<<2)>>2]|0)+f+(c[32984+(b<<2)>>2]|0)+((l^j+g)&k+h^l)+(c[e+16>>2]|0)|0;c[e>>2]=l+i;f=Eh(w,2)|0;f=(Eh(w,13)|0)^f;v=l+(f^(Eh(w,22)|0))+((m+v+((g|h)&i|g&h)|u)&w|m+v+((g|h)&i|g&h)&u)|0;c[e+16>>2]=v;m=Eh(l+i|0,6)|0;m=(Eh(l+i|0,11)|0)^m;m=m^(Eh(l+i|0,25)|0);f=s|4;g=(c[d+(f<<2)>>2]|0)+m+(c[32984+(f<<2)>>2]|0)+((j+g^k+h)&l+i^j+g)+(c[e+12>>2]|0)|0;j=g+(c[e+28>>2]|0)|0;c[e+28>>2]=j;m=Eh(v,2)|0;m=(Eh(v,13)|0)^m;u=g+(m^(Eh(v,22)|0))+((u|w)&v|u&w)|0;c[e+12>>2]=u;m=Eh(j,6)|0;m=(Eh(j,11)|0)^m;m=m^(Eh(j,25)|0);g=s|5;h=(c[d+(g<<2)>>2]|0)+m+(c[32984+(g<<2)>>2]|0)+((k+h^l+i)&j^k+h)+(c[e+8>>2]|0)|0;k=h+(c[e+24>>2]|0)|0;c[e+24>>2]=k;m=Eh(u,2)|0;m=(Eh(u,13)|0)^m;w=h+(m^(Eh(u,22)|0))+((w|v)&u|w&v)|0;c[e+8>>2]=w;m=Eh(k,6)|0;m=(Eh(k,11)|0)^m;m=m^(Eh(k,25)|0);h=s|6;i=(c[d+(h<<2)>>2]|0)+m+(c[32984+(h<<2)>>2]|0)+((l+i^j)&k^l+i)+(c[e+4>>2]|0)|0;l=i+(c[e+20>>2]|0)|0;c[e+20>>2]=l;m=Eh(w,2)|0;m=(Eh(w,13)|0)^m;v=i+(m^(Eh(w,22)|0))+((v|u)&w|v&u)|0;c[e+4>>2]=v;m=Eh(l,6)|0;m=(Eh(l,11)|0)^m;m=m^(Eh(l,25)|0);i=s|7;j=(c[d+(i<<2)>>2]|0)+m+(c[32984+(i<<2)>>2]|0)+((j^k)&l^j)+(c[e>>2]|0)|0;m=j+(c[e+16>>2]|0)|0;c[e+16>>2]=m;n=Eh(v,2)|0;n=(Eh(v,13)|0)^n;u=j+(n^(Eh(v,22)|0))+((u|w)&v|u&w)|0;c[e>>2]=u;n=Eh(m,6)|0;n=(Eh(m,11)|0)^n;n=n^(Eh(m,25)|0);j=s|8;k=(c[d+(j<<2)>>2]|0)+n+(c[32984+(j<<2)>>2]|0)+((k^l)&m^k)+(c[e+28>>2]|0)|0;n=k+(c[e+12>>2]|0)|0;c[e+12>>2]=n;o=Eh(u,2)|0;o=(Eh(u,13)|0)^o;w=k+(o^(Eh(u,22)|0))+((w|v)&u|w&v)|0;c[e+28>>2]=w;o=Eh(n,6)|0;o=(Eh(n,11)|0)^o;o=o^(Eh(n,25)|0);k=s|9;l=(c[d+(k<<2)>>2]|0)+o+(c[32984+(k<<2)>>2]|0)+((l^m)&n^l)+(c[e+24>>2]|0)|0;o=l+(c[e+8>>2]|0)|0;c[e+8>>2]=o;p=Eh(w,2)|0;p=(Eh(w,13)|0)^p;v=l+(p^(Eh(w,22)|0))+((v|u)&w|v&u)|0;c[e+24>>2]=v;p=Eh(o,6)|0;p=(Eh(o,11)|0)^p;p=p^(Eh(o,25)|0);l=s|10;m=(c[d+(l<<2)>>2]|0)+p+(c[32984+(l<<2)>>2]|0)+((m^n)&o^m)+(c[e+20>>2]|0)|0;p=m+(c[e+4>>2]|0)|0;c[e+4>>2]=p;t=Eh(v,2)|0;t=(Eh(v,13)|0)^t;u=m+(t^(Eh(v,22)|0))+((u|w)&v|u&w)|0;c[e+20>>2]=u;t=Eh(p,6)|0;t=(Eh(p,11)|0)^t;t=t^(Eh(p,25)|0);m=s|11;n=(c[d+(m<<2)>>2]|0)+t+(c[32984+(m<<2)>>2]|0)+((n^o)&p^n)+(c[e+16>>2]|0)|0;t=n+(c[e>>2]|0)|0;c[e>>2]=t;y=Eh(u,2)|0;y=(Eh(u,13)|0)^y;w=n+(y^(Eh(u,22)|0))+((w|v)&u|w&v)|0;c[e+16>>2]=w;y=Eh(t,6)|0;y=(Eh(t,11)|0)^y;y=y^(Eh(t,25)|0);n=s|12;o=(c[d+(n<<2)>>2]|0)+y+(c[32984+(n<<2)>>2]|0)+((o^p)&t^o)+(c[e+12>>2]|0)|0;y=o+(c[e+28>>2]|0)|0;c[e+28>>2]=y;z=Eh(w,2)|0;z=(Eh(w,13)|0)^z;v=o+(z^(Eh(w,22)|0))+((v|u)&w|v&u)|0;c[e+12>>2]=v;z=Eh(y,6)|0;z=(Eh(y,11)|0)^z;z=z^(Eh(y,25)|0);o=s|13;p=(c[d+(o<<2)>>2]|0)+z+(c[32984+(o<<2)>>2]|0)+((p^t)&y^p)+(c[e+8>>2]|0)|0;z=p+(c[e+24>>2]|0)|0;c[e+24>>2]=z;x=Eh(v,2)|0;x=(Eh(v,13)|0)^x;u=p+(x^(Eh(v,22)|0))+((u|w)&v|u&w)|0;c[e+8>>2]=u;x=Eh(z,6)|0;x=(Eh(z,11)|0)^x;x=x^(Eh(z,25)|0);p=s|14;t=(c[d+(p<<2)>>2]|0)+x+(c[32984+(p<<2)>>2]|0)+((t^y)&z^t)+(c[e+4>>2]|0)|0;x=t+(c[e+20>>2]|0)|0;c[e+20>>2]=x;A=Eh(u,2)|0;A=(Eh(u,13)|0)^A;w=t+(A^(Eh(u,22)|0))+((w|v)&u|w&v)|0;c[e+4>>2]=w;A=Eh(x,6)|0;A=(Eh(x,11)|0)^A;A=A^(Eh(x,25)|0);t=s|15;y=(c[d+(t<<2)>>2]|0)+A+(c[32984+(t<<2)>>2]|0)+((y^z)&x^y)+(c[e>>2]|0)|0;c[e+16>>2]=y+(c[e+16>>2]|0);x=Eh(w,2)|0;x=(Eh(w,13)|0)^x;c[e>>2]=y+(x^(Eh(w,22)|0))+((v|u)&w|v&u);if((s|0)==48){b=0;break}z=c[d+(p<<2)>>2]|0;y=Eh(z,17)|0;z=z>>>10^y^(Eh(z,19)|0);z=z+(c[d+(k<<2)>>2]|0)|0;y=c[d+(q<<2)>>2]|0;x=Eh(y,7)|0;x=y>>>3^x^(Eh(y,18)|0);x=z+(c[d+(s<<2)>>2]|0)+x|0;s=s+16|0;c[d+(s<<2)>>2]=x;z=c[d+(t<<2)>>2]|0;A=Eh(z,17)|0;z=z>>>10^A^(Eh(z,19)|0);z=z+(c[d+(q+9<<2)>>2]|0)|0;A=c[d+(q+1<<2)>>2]|0;w=Eh(A,7)|0;w=z+y+(A>>>3^w^(Eh(A,18)|0))|0;c[d+(q+16<<2)>>2]=w;y=Eh(x,17)|0;x=x>>>10^y^(Eh(x,19)|0);x=x+(c[d+(m<<2)>>2]|0)|0;y=c[d+(b<<2)>>2]|0;z=Eh(y,7)|0;z=x+A+(y>>>3^z^(Eh(y,18)|0))|0;c[d+(r+16<<2)>>2]=z;A=Eh(w,17)|0;w=w>>>10^A^(Eh(w,19)|0);w=w+(c[d+(b+9<<2)>>2]|0)|0;A=c[d+(b+1<<2)>>2]|0;x=Eh(A,7)|0;x=w+y+(A>>>3^x^(Eh(A,18)|0))|0;c[d+(b+16<<2)>>2]=x;b=Eh(z,17)|0;b=z>>>10^b^(Eh(z,19)|0);b=b+(c[d+(o<<2)>>2]|0)|0;z=c[d+(g<<2)>>2]|0;y=Eh(z,7)|0;y=b+A+(z>>>3^y^(Eh(z,18)|0))|0;c[d+(f+16<<2)>>2]=y;A=Eh(x,17)|0;x=x>>>10^A^(Eh(x,19)|0);x=x+(c[d+(g+9<<2)>>2]|0)|0;A=c[d+(g+1<<2)>>2]|0;b=Eh(A,7)|0;b=x+z+(A>>>3^b^(Eh(A,18)|0))|0;c[d+(g+16<<2)>>2]=b;z=Eh(y,17)|0;y=y>>>10^z^(Eh(y,19)|0);y=y+(c[d+(t<<2)>>2]|0)|0;z=c[d+(i<<2)>>2]|0;x=Eh(z,7)|0;x=y+A+(z>>>3^x^(Eh(z,18)|0))|0;c[d+(h+16<<2)>>2]=x;A=Eh(b,17)|0;b=b>>>10^A^(Eh(b,19)|0);b=b+(c[d+(i+9<<2)>>2]|0)|0;A=c[d+(i+1<<2)>>2]|0;y=Eh(A,7)|0;y=b+z+(A>>>3^y^(Eh(A,18)|0))|0;c[d+(i+16<<2)>>2]=y;z=Eh(x,17)|0;x=x>>>10^z^(Eh(x,19)|0);x=x+(c[d+(j+9<<2)>>2]|0)|0;z=c[d+(k<<2)>>2]|0;b=Eh(z,7)|0;b=x+A+(z>>>3^b^(Eh(z,18)|0))|0;c[d+(j+16<<2)>>2]=b;A=Eh(y,17)|0;y=y>>>10^A^(Eh(y,19)|0);y=y+(c[d+(k+9<<2)>>2]|0)|0;A=c[d+(k+1<<2)>>2]|0;x=Eh(A,7)|0;x=y+z+(A>>>3^x^(Eh(A,18)|0))|0;c[d+(k+16<<2)>>2]=x;z=Eh(b,17)|0;b=b>>>10^z^(Eh(b,19)|0);b=b+(c[d+(l+9<<2)>>2]|0)|0;z=c[d+(m<<2)>>2]|0;y=Eh(z,7)|0;y=b+A+(z>>>3^y^(Eh(z,18)|0))|0;c[d+(l+16<<2)>>2]=y;A=Eh(x,17)|0;x=x>>>10^A^(Eh(x,19)|0);x=x+(c[d+(m+9<<2)>>2]|0)|0;A=c[d+(m+1<<2)>>2]|0;b=Eh(A,7)|0;b=x+z+(A>>>3^b^(Eh(A,18)|0))|0;c[d+(m+16<<2)>>2]=b;z=Eh(y,17)|0;y=y>>>10^z^(Eh(y,19)|0);y=y+(c[d+(n+9<<2)>>2]|0)|0;z=c[d+(o<<2)>>2]|0;x=Eh(z,7)|0;x=y+A+(z>>>3^x^(Eh(z,18)|0))|0;c[d+(n+16<<2)>>2]=x;A=Eh(b,17)|0;b=b>>>10^A^(Eh(b,19)|0);b=b+(c[d+(o+9<<2)>>2]|0)|0;A=c[d+(o+1<<2)>>2]|0;y=Eh(A,7)|0;y=b+z+(A>>>3^y^(Eh(A,18)|0))|0;c[d+(o+16<<2)>>2]=y;z=Eh(x,17)|0;x=x>>>10^z^(Eh(x,19)|0);x=x+(c[d+(p+9<<2)>>2]|0)|0;z=c[d+(t<<2)>>2]|0;b=Eh(z,7)|0;c[d+(p+16<<2)>>2]=x+A+(z>>>3^b^(Eh(z,18)|0));b=Eh(y,17)|0;y=y>>>10^b^(Eh(y,19)|0);y=y+(c[d+(t+9<<2)>>2]|0)|0;b=c[d+(t+1<<2)>>2]|0;A=Eh(b,7)|0;c[d+(t+16<<2)>>2]=y+z+(b>>>3^A^(Eh(b,18)|0));if((s|0)>=64){b=0;break}}do{A=a+(b<<2)|0;c[A>>2]=(c[A>>2]|0)+(c[e+(b<<2)>>2]|0);b=b+1|0}while((b|0)!=8);return}function ua(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0,Ha=0,Ia=0,Ja=0,Ka=0,La=0,Ma=0,Na=0,Oa=0,Pa=0,Qa=0,Ra=0,Sa=0,Ta=0,Ua=0,Va=0,Wa=0,Xa=0,Ya=0,Za=0,_a=0,$a=0,ab=0,bb=0,cb=0,db=0,eb=0;l=c[b>>2]|0;p=c[b+4>>2]|0;k=c[b+8>>2]|0;f=c[b+12>>2]|0;C=c[b+16>>2]|0;d=c[b+20>>2]|0;g=c[b+24>>2]|0;O=c[b+28>>2]|0;A=c[b+32>>2]|0;q=c[b+36>>2]|0;cb=ef(l|0,((l|0)<0)<<31>>31|0,l|0,((l|0)<0)<<31>>31|0)|0;bb=D;o=((l<<1|0)<0)<<31>>31;Ia=ef(l<<1|0,o|0,p|0,((p|0)<0)<<31>>31|0)|0;Ha=D;Wa=ef(k|0,((k|0)<0)<<31>>31|0,l<<1|0,o|0)|0;Va=D;Ua=ef(f|0,((f|0)<0)<<31>>31|0,l<<1|0,o|0)|0;Ta=D;Oa=ef(C|0,((C|0)<0)<<31>>31|0,l<<1|0,o|0)|0;Na=D;ya=ef(d|0,((d|0)<0)<<31>>31|0,l<<1|0,o|0)|0;xa=D;ga=ef(g|0,((g|0)<0)<<31>>31|0,l<<1|0,o|0)|0;fa=D;R=ef(O|0,((O|0)<0)<<31>>31|0,l<<1|0,o|0)|0;Q=D;F=ef(A|0,((A|0)<0)<<31>>31|0,l<<1|0,o|0)|0;E=D;o=ef(q|0,((q|0)<0)<<31>>31|0,l<<1|0,o|0)|0;l=D;n=((p<<1|0)<0)<<31>>31;ta=ef(p<<1|0,n|0,p|0,((p|0)<0)<<31>>31|0)|0;ua=D;ba=ef(p<<1|0,n|0,k|0,((k|0)<0)<<31>>31|0)|0;ca=D;P=((f<<1|0)<0)<<31>>31;Sa=ef(f<<1|0,P|0,p<<1|0,n|0)|0;Ra=D;Ca=ef(C|0,((C|0)<0)<<31>>31|0,p<<1|0,n|0)|0;Ba=D;ia=ef(d<<1|0,((d<<1|0)<0)<<31>>31|0,p<<1|0,n|0)|0;ha=D;T=ef(g|0,((g|0)<0)<<31>>31|0,p<<1|0,n|0)|0;S=D;H=ef(O<<1|0,((O<<1|0)<0)<<31>>31|0,p<<1|0,n|0)|0;G=D;t=ef(A|0,((A|0)<0)<<31>>31|0,p<<1|0,n|0)|0;s=D;b=((q*38|0)<0)<<31>>31;n=ef(q*38|0,b|0,p<<1|0,n|0)|0;p=D;Qa=ef(k|0,((k|0)<0)<<31>>31|0,k|0,((k|0)<0)<<31>>31|0)|0;Pa=D;Aa=ef(k<<1|0,((k<<1|0)<0)<<31>>31|0,f|0,((f|0)<0)<<31>>31|0)|0;za=D;ka=ef(C|0,((C|0)<0)<<31>>31|0,k<<1|0,((k<<1|0)<0)<<31>>31|0)|0;ja=D;X=ef(d|0,((d|0)<0)<<31>>31|0,k<<1|0,((k<<1|0)<0)<<31>>31|0)|0;W=D;N=ef(g|0,((g|0)<0)<<31>>31|0,k<<1|0,((k<<1|0)<0)<<31>>31|0)|0;M=D;v=ef(O|0,((O|0)<0)<<31>>31|0,k<<1|0,((k<<1|0)<0)<<31>>31|0)|0;u=D;ea=((A*19|0)<0)<<31>>31;Ya=ef(A*19|0,ea|0,k<<1|0,((k<<1|0)<0)<<31>>31|0)|0;Xa=D;k=ef(q*38|0,b|0,k|0,((k|0)<0)<<31>>31|0)|0;j=D;ma=ef(f<<1|0,P|0,f|0,((f|0)<0)<<31>>31|0)|0;la=D;V=ef(f<<1|0,P|0,C|0,((C|0)<0)<<31>>31|0)|0;U=D;J=ef(d<<1|0,((d<<1|0)<0)<<31>>31|0,f<<1|0,P|0)|0;I=D;z=ef(g|0,((g|0)<0)<<31>>31|0,f<<1|0,P|0)|0;y=D;Ma=((O*38|0)<0)<<31>>31;_a=ef(O*38|0,Ma|0,f<<1|0,P|0)|0;Za=D;Ea=ef(A*19|0,ea|0,f<<1|0,P|0)|0;Da=D;P=ef(q*38|0,b|0,f<<1|0,P|0)|0;f=D;L=ef(C|0,((C|0)<0)<<31>>31|0,C|0,((C|0)<0)<<31>>31|0)|0;K=D;x=ef(C<<1|0,((C<<1|0)<0)<<31>>31|0,d|0,((d|0)<0)<<31>>31|0)|0;w=D;ab=ef(g*19|0,((g*19|0)<0)<<31>>31|0,C<<1|0,((C<<1|0)<0)<<31>>31|0)|0;$a=D;Ga=ef(O*38|0,Ma|0,C|0,((C|0)<0)<<31>>31|0)|0;Fa=D;oa=ef(A*19|0,ea|0,C<<1|0,((C<<1|0)<0)<<31>>31|0)|0;na=D;C=ef(q*38|0,b|0,C|0,((C|0)<0)<<31>>31|0)|0;e=D;eb=ef(d*38|0,((d*38|0)<0)<<31>>31|0,d|0,((d|0)<0)<<31>>31|0)|0;db=D;Ka=ef(g*19|0,((g*19|0)<0)<<31>>31|0,d<<1|0,((d<<1|0)<0)<<31>>31|0)|0;Ja=D;qa=ef(O*38|0,Ma|0,d<<1|0,((d<<1|0)<0)<<31>>31|0)|0;pa=D;_=ef(A*19|0,ea|0,d<<1|0,((d<<1|0)<0)<<31>>31|0)|0;Z=D;d=ef(q*38|0,b|0,d<<1|0,((d<<1|0)<0)<<31>>31|0)|0;B=D;sa=ef(g*19|0,((g*19|0)<0)<<31>>31|0,g|0,((g|0)<0)<<31>>31|0)|0;ra=D;aa=ef(O*38|0,Ma|0,g|0,((g|0)<0)<<31>>31|0)|0;$=D;m=ef(A*19|0,ea|0,g<<1|0,((g<<1|0)<0)<<31>>31|0)|0;r=D;g=ef(q*38|0,b|0,g|0,((g|0)<0)<<31>>31|0)|0;Y=D;Ma=ef(O*38|0,Ma|0,O|0,((O|0)<0)<<31>>31|0)|0;La=D;wa=ef(A*19|0,ea|0,O<<1|0,((O<<1|0)<0)<<31>>31|0)|0;va=D;O=ef(q*38|0,b|0,O<<1|0,((O<<1|0)<0)<<31>>31|0)|0;i=D;ea=ef(A*19|0,ea|0,A|0,((A|0)<0)<<31>>31|0)|0;da=D;A=ef(q*38|0,b|0,A|0,((A|0)<0)<<31>>31|0)|0;h=D;q=ef(q*38|0,b|0,q|0,((q|0)<0)<<31>>31|0)|0;b=D;bb=jg(eb|0,db|0,cb|0,bb|0)|0;$a=jg(bb|0,D|0,ab|0,$a|0)|0;Za=jg($a|0,D|0,_a|0,Za|0)|0;Xa=jg(Za|0,D|0,Ya|0,Xa|0)|0;p=jg(Xa|0,D|0,n|0,p|0)|0;n=D;ua=jg(Wa|0,Va|0,ta|0,ua|0)|0;ta=D;ca=jg(Ua|0,Ta|0,ba|0,ca|0)|0;ba=D;Pa=jg(Sa|0,Ra|0,Qa|0,Pa|0)|0;Na=jg(Pa|0,D|0,Oa|0,Na|0)|0;La=jg(Na|0,D|0,Ma|0,La|0)|0;r=jg(La|0,D|0,m|0,r|0)|0;B=jg(r|0,D|0,d|0,B|0)|0;d=D;r=jg(p|0,n|0,33554432,0)|0;r=$e(r|0,D|0,26)|0;m=D;Ha=jg(Ka|0,Ja|0,Ia|0,Ha|0)|0;Fa=jg(Ha|0,D|0,Ga|0,Fa|0)|0;Da=jg(Fa|0,D|0,Ea|0,Da|0)|0;j=jg(Da|0,D|0,k|0,j|0)|0;j=jg(j|0,D|0,r|0,m|0)|0;k=D;m=zf(r|0,m|0,26)|0;m=gg(p|0,n|0,m|0,D|0)|0;n=D;p=jg(B|0,d|0,33554432,0)|0;p=$e(p|0,D|0,26)|0;r=D;za=jg(Ca|0,Ba|0,Aa|0,za|0)|0;xa=jg(za|0,D|0,ya|0,xa|0)|0;va=jg(xa|0,D|0,wa|0,va|0)|0;Y=jg(va|0,D|0,g|0,Y|0)|0;Y=jg(Y|0,D|0,p|0,r|0)|0;g=D;r=zf(p|0,r|0,26)|0;r=gg(B|0,d|0,r|0,D|0)|0;d=D;B=jg(j|0,k|0,16777216,0)|0;B=$e(B|0,D|0,25)|0;p=D;ra=jg(ua|0,ta|0,sa|0,ra|0)|0;pa=jg(ra|0,D|0,qa|0,pa|0)|0;na=jg(pa|0,D|0,oa|0,na|0)|0;f=jg(na|0,D|0,P|0,f|0)|0;f=jg(f|0,D|0,B|0,p|0)|0;P=D;p=zf(B|0,p|0,25)|0;p=gg(j|0,k|0,p|0,D|0)|0;k=D;j=jg(Y|0,g|0,16777216,0)|0;j=$e(j|0,D|0,25)|0;B=D;ja=jg(ma|0,la|0,ka|0,ja|0)|0;ha=jg(ja|0,D|0,ia|0,ha|0)|0;fa=jg(ha|0,D|0,ga|0,fa|0)|0;da=jg(fa|0,D|0,ea|0,da|0)|0;i=jg(da|0,D|0,O|0,i|0)|0;i=jg(i|0,D|0,j|0,B|0)|0;O=D;B=zf(j|0,B|0,25)|0;B=gg(Y|0,g|0,B|0,D|0)|0;g=D;Y=jg(f|0,P|0,33554432,0)|0;Y=$e(Y|0,D|0,26)|0;j=D;$=jg(ca|0,ba|0,aa|0,$|0)|0;Z=jg($|0,D|0,_|0,Z|0)|0;e=jg(Z|0,D|0,C|0,e|0)|0;e=jg(e|0,D|0,Y|0,j|0)|0;C=D;j=zf(Y|0,j|0,26)|0;j=gg(f|0,P|0,j|0,D|0)|0;P=jg(i|0,O|0,33554432,0)|0;P=$e(P|0,D|0,26)|0;f=D;U=jg(X|0,W|0,V|0,U|0)|0;S=jg(U|0,D|0,T|0,S|0)|0;Q=jg(S|0,D|0,R|0,Q|0)|0;h=jg(Q|0,D|0,A|0,h|0)|0;h=jg(h|0,D|0,P|0,f|0)|0;A=D;f=zf(P|0,f|0,26)|0;f=gg(i|0,O|0,f|0,D|0)|0;O=jg(e|0,C|0,16777216,0)|0;O=$e(O|0,D|0,25)|0;i=D;d=jg(O|0,i|0,r|0,d|0)|0;r=D;i=zf(O|0,i|0,25)|0;i=gg(e|0,C|0,i|0,D|0)|0;C=jg(h|0,A|0,16777216,0)|0;C=$e(C|0,D|0,25)|0;e=D;K=jg(N|0,M|0,L|0,K|0)|0;I=jg(K|0,D|0,J|0,I|0)|0;G=jg(I|0,D|0,H|0,G|0)|0;E=jg(G|0,D|0,F|0,E|0)|0;b=jg(E|0,D|0,q|0,b|0)|0;b=jg(b|0,D|0,C|0,e|0)|0;q=D;e=zf(C|0,e|0,25)|0;e=gg(h|0,A|0,e|0,D|0)|0;A=jg(d|0,r|0,33554432,0)|0;A=$e(A|0,D|0,26)|0;h=D;g=jg(B|0,g|0,A|0,h|0)|0;h=zf(A|0,h|0,26)|0;h=gg(d|0,r|0,h|0,D|0)|0;r=jg(b|0,q|0,33554432,0)|0;r=$e(r|0,D|0,26)|0;d=D;w=jg(z|0,y|0,x|0,w|0)|0;u=jg(w|0,D|0,v|0,u|0)|0;s=jg(u|0,D|0,t|0,s|0)|0;l=jg(s|0,D|0,o|0,l|0)|0;l=jg(l|0,D|0,r|0,d|0)|0;o=D;d=zf(r|0,d|0,26)|0;d=gg(b|0,q|0,d|0,D|0)|0;q=jg(l|0,o|0,16777216,0)|0;q=$e(q|0,D|0,25)|0;b=D;r=ef(q|0,b|0,19,0)|0;n=jg(r|0,D|0,m|0,n|0)|0;m=D;b=zf(q|0,b|0,25)|0;b=gg(l|0,o|0,b|0,D|0)|0;o=jg(n|0,m|0,33554432,0)|0;o=$e(o|0,D|0,26)|0;l=D;k=jg(p|0,k|0,o|0,l|0)|0;l=zf(o|0,l|0,26)|0;l=gg(n|0,m|0,l|0,D|0)|0;c[a>>2]=l;c[a+4>>2]=k;c[a+8>>2]=j;c[a+12>>2]=i;c[a+16>>2]=h;c[a+20>>2]=g;c[a+24>>2]=f;c[a+28>>2]=e;c[a+32>>2]=d;c[a+36>>2]=b;return}function va(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;if(!a)return;h=c[8854]|0;if((a+-8|0)>>>0<h>>>0)ba();b=c[a+-4>>2]|0;if((b&3|0)==1)ba();o=a+-8+(b&-8)|0;a:do if(!(b&1)){e=c[a+-8>>2]|0;if(!(b&3))return;k=a+-8+(0-e)|0;j=e+(b&-8)|0;if(k>>>0<h>>>0)ba();if((k|0)==(c[8855]|0)){a=c[o+4>>2]|0;if((a&3|0)!=3){r=k;f=j;m=k;break}c[8852]=j;c[o+4>>2]=a&-2;c[k+4>>2]=j|1;c[k+j>>2]=j;return}if(e>>>0<256){a=c[k+8>>2]|0;b=c[k+12>>2]|0;if((a|0)!=(35440+(e>>>3<<1<<2)|0)){if(a>>>0<h>>>0)ba();if((c[a+12>>2]|0)!=(k|0))ba()}if((b|0)==(a|0)){c[8850]=c[8850]&~(1<<(e>>>3));r=k;f=j;m=k;break}if((b|0)!=(35440+(e>>>3<<1<<2)|0)){if(b>>>0<h>>>0)ba();if((c[b+8>>2]|0)!=(k|0))ba();else d=b+8|0}else d=b+8|0;c[a+12>>2]=b;c[d>>2]=a;r=k;f=j;m=k;break}g=c[k+24>>2]|0;a=c[k+12>>2]|0;do if((a|0)==(k|0)){a=c[k+16+4>>2]|0;if(!a){a=c[k+16>>2]|0;if(!a){i=0;break}else e=k+16|0}else e=k+16+4|0;while(1){b=a+20|0;d=c[b>>2]|0;if(d|0){a=d;e=b;continue}b=a+16|0;d=c[b>>2]|0;if(!d)break;else{a=d;e=b}}if(e>>>0<h>>>0)ba();else{c[e>>2]=0;i=a;break}}else{b=c[k+8>>2]|0;if(b>>>0<h>>>0)ba();if((c[b+12>>2]|0)!=(k|0))ba();if((c[a+8>>2]|0)==(k|0)){c[b+12>>2]=a;c[a+8>>2]=b;i=a;break}else ba()}while(0);if(g){a=c[k+28>>2]|0;do if((k|0)==(c[35704+(a<<2)>>2]|0)){c[35704+(a<<2)>>2]=i;if(!i){c[8851]=c[8851]&~(1<<a);r=k;f=j;m=k;break a}}else if(g>>>0>=(c[8854]|0)>>>0){c[g+16+(((c[g+16>>2]|0)!=(k|0)&1)<<2)>>2]=i;if(!i){r=k;f=j;m=k;break a}else break}else ba();while(0);b=c[8854]|0;if(i>>>0<b>>>0)ba();c[i+24>>2]=g;a=c[k+16>>2]|0;do if(a|0)if(a>>>0<b>>>0)ba();else{c[i+16>>2]=a;c[a+24>>2]=i;break}while(0);a=c[k+16+4>>2]|0;if(a)if(a>>>0<(c[8854]|0)>>>0)ba();else{c[i+20>>2]=a;c[a+24>>2]=i;r=k;f=j;m=k;break}else{r=k;f=j;m=k}}else{r=k;f=j;m=k}}else{r=a+-8|0;f=b&-8;m=a+-8|0}while(0);if(m>>>0>=o>>>0)ba();d=c[o+4>>2]|0;if(!(d&1))ba();if(!(d&2)){a=c[8855]|0;if((o|0)==(c[8856]|0)){q=(c[8853]|0)+f|0;c[8853]=q;c[8856]=r;c[r+4>>2]=q|1;if((r|0)!=(a|0))return;c[8855]=0;c[8852]=0;return}if((o|0)==(a|0)){q=(c[8852]|0)+f|0;c[8852]=q;c[8855]=m;c[r+4>>2]=q|1;c[m+q>>2]=q;return}f=(d&-8)+f|0;b:do if(d>>>0>=256){g=c[o+24>>2]|0;a=c[o+12>>2]|0;do if((a|0)==(o|0)){a=c[o+16+4>>2]|0;if(!a){a=c[o+16>>2]|0;if(!a){n=0;break}else e=o+16|0}else e=o+16+4|0;while(1){b=a+20|0;d=c[b>>2]|0;if(d|0){a=d;e=b;continue}b=a+16|0;d=c[b>>2]|0;if(!d)break;else{a=d;e=b}}if(e>>>0<(c[8854]|0)>>>0)ba();else{c[e>>2]=0;n=a;break}}else{b=c[o+8>>2]|0;if(b>>>0<(c[8854]|0)>>>0)ba();if((c[b+12>>2]|0)!=(o|0))ba();if((c[a+8>>2]|0)==(o|0)){c[b+12>>2]=a;c[a+8>>2]=b;n=a;break}else ba()}while(0);if(g|0){a=c[o+28>>2]|0;do if((o|0)==(c[35704+(a<<2)>>2]|0)){c[35704+(a<<2)>>2]=n;if(!n){c[8851]=c[8851]&~(1<<a);break b}}else if(g>>>0>=(c[8854]|0)>>>0){c[g+16+(((c[g+16>>2]|0)!=(o|0)&1)<<2)>>2]=n;if(!n)break b;else break}else ba();while(0);b=c[8854]|0;if(n>>>0<b>>>0)ba();c[n+24>>2]=g;a=c[o+16>>2]|0;do if(a|0)if(a>>>0<b>>>0)ba();else{c[n+16>>2]=a;c[a+24>>2]=n;break}while(0);a=c[o+16+4>>2]|0;if(a|0)if(a>>>0<(c[8854]|0)>>>0)ba();else{c[n+20>>2]=a;c[a+24>>2]=n;break}}}else{a=c[o+8>>2]|0;b=c[o+12>>2]|0;if((a|0)!=(35440+(d>>>3<<1<<2)|0)){if(a>>>0<(c[8854]|0)>>>0)ba();if((c[a+12>>2]|0)!=(o|0))ba()}if((b|0)==(a|0)){c[8850]=c[8850]&~(1<<(d>>>3));break}if((b|0)!=(35440+(d>>>3<<1<<2)|0)){if(b>>>0<(c[8854]|0)>>>0)ba();if((c[b+8>>2]|0)!=(o|0))ba();else l=b+8|0}else l=b+8|0;c[a+12>>2]=b;c[l>>2]=a}while(0);c[r+4>>2]=f|1;c[m+f>>2]=f;if((r|0)==(c[8855]|0)){c[8852]=f;return}}else{c[o+4>>2]=d&-2;c[r+4>>2]=f|1;c[m+f>>2]=f}b=f>>>3;if(f>>>0<256){a=c[8850]|0;if(a&1<<b){a=c[35440+(b<<1<<2)+8>>2]|0;if(a>>>0<(c[8854]|0)>>>0)ba();else{p=a;q=35440+(b<<1<<2)+8|0}}else{c[8850]=a|1<<b;p=35440+(b<<1<<2)|0;q=35440+(b<<1<<2)+8|0}c[q>>2]=r;c[p+12>>2]=r;c[r+8>>2]=p;c[r+12>>2]=35440+(b<<1<<2);return}a=f>>>8;if(a)if(f>>>0>16777215)a=31;else{q=a<<((a+1048320|0)>>>16&8)<<(((a<<((a+1048320|0)>>>16&8))+520192|0)>>>16&4);a=14-(((a<<((a+1048320|0)>>>16&8))+520192|0)>>>16&4|(a+1048320|0)>>>16&8|(q+245760|0)>>>16&2)+(q<<((q+245760|0)>>>16&2)>>>15)|0;a=f>>>(a+7|0)&1|a<<1}else a=0;e=35704+(a<<2)|0;c[r+28>>2]=a;c[r+20>>2]=0;c[r+16>>2]=0;b=c[8851]|0;d=1<<a;do if(b&d){b=f<<((a|0)==31?0:25-(a>>>1)|0);e=c[e>>2]|0;while(1){if((c[e+4>>2]&-8|0)==(f|0)){a=124;break}d=e+16+(b>>>31<<2)|0;a=c[d>>2]|0;if(!a){a=121;break}else{b=b<<1;e=a}}if((a|0)==121)if(d>>>0<(c[8854]|0)>>>0)ba();else{c[d>>2]=r;c[r+24>>2]=e;c[r+12>>2]=r;c[r+8>>2]=r;break}else if((a|0)==124){a=e+8|0;b=c[a>>2]|0;q=c[8854]|0;if(b>>>0>=q>>>0&e>>>0>=q>>>0){c[b+12>>2]=r;c[a>>2]=r;c[r+8>>2]=b;c[r+12>>2]=e;c[r+24>>2]=0;break}else ba()}}else{c[8851]=b|d;c[e>>2]=r;c[r+24>>2]=e;c[r+12>>2]=r;c[r+8>>2]=r}while(0);r=(c[8858]|0)+-1|0;c[8858]=r;if(!r)a=35856;else return;while(1){a=c[a>>2]|0;if(!a)break;else a=a+8|0}c[8858]=-1;return}function wa(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;d=c[a+4>>2]|0;a:do if(!(d&1)){l=c[a>>2]|0;if(!(d&3))return;j=c[8854]|0;if((a+(0-l)|0)>>>0<j>>>0)ba();if((a+(0-l)|0)==(c[8855]|0)){d=c[a+b+4>>2]|0;if((d&3|0)!=3){q=a+(0-l)|0;h=l+b|0;break}c[8852]=l+b;c[a+b+4>>2]=d&-2;c[a+(0-l)+4>>2]=l+b|1;c[a+(0-l)+(l+b)>>2]=l+b;return}if(l>>>0<256){d=c[a+(0-l)+8>>2]|0;e=c[a+(0-l)+12>>2]|0;if((d|0)!=(35440+(l>>>3<<1<<2)|0)){if(d>>>0<j>>>0)ba();if((c[d+12>>2]|0)!=(a+(0-l)|0))ba()}if((e|0)==(d|0)){c[8850]=c[8850]&~(1<<(l>>>3));q=a+(0-l)|0;h=l+b|0;break}if((e|0)!=(35440+(l>>>3<<1<<2)|0)){if(e>>>0<j>>>0)ba();if((c[e+8>>2]|0)!=(a+(0-l)|0))ba();else f=e+8|0}else f=e+8|0;c[d+12>>2]=e;c[f>>2]=d;q=a+(0-l)|0;h=l+b|0;break}i=c[a+(0-l)+24>>2]|0;d=c[a+(0-l)+12>>2]|0;do if((d|0)==(a+(0-l)|0)){e=a+(0-l)+16|0;d=c[e+4>>2]|0;if(!d){d=c[e>>2]|0;if(!d){k=0;break}}else e=e+4|0;while(1){f=d+20|0;g=c[f>>2]|0;if(g|0){d=g;e=f;continue}f=d+16|0;g=c[f>>2]|0;if(!g)break;else{d=g;e=f}}if(e>>>0<j>>>0)ba();else{c[e>>2]=0;k=d;break}}else{e=c[a+(0-l)+8>>2]|0;if(e>>>0<j>>>0)ba();if((c[e+12>>2]|0)!=(a+(0-l)|0))ba();if((c[d+8>>2]|0)==(a+(0-l)|0)){c[e+12>>2]=d;c[d+8>>2]=e;k=d;break}else ba()}while(0);if(i){d=c[a+(0-l)+28>>2]|0;do if((a+(0-l)|0)==(c[35704+(d<<2)>>2]|0)){c[35704+(d<<2)>>2]=k;if(!k){c[8851]=c[8851]&~(1<<d);q=a+(0-l)|0;h=l+b|0;break a}}else if(i>>>0>=(c[8854]|0)>>>0){c[i+16+(((c[i+16>>2]|0)!=(a+(0-l)|0)&1)<<2)>>2]=k;if(!k){q=a+(0-l)|0;h=l+b|0;break a}else break}else ba();while(0);e=c[8854]|0;if(k>>>0<e>>>0)ba();c[k+24>>2]=i;d=c[a+(0-l)+16>>2]|0;do if(d|0)if(d>>>0<e>>>0)ba();else{c[k+16>>2]=d;c[d+24>>2]=k;break}while(0);d=c[a+(0-l)+16+4>>2]|0;if(d)if(d>>>0<(c[8854]|0)>>>0)ba();else{c[k+20>>2]=d;c[d+24>>2]=k;q=a+(0-l)|0;h=l+b|0;break}else{q=a+(0-l)|0;h=l+b|0}}else{q=a+(0-l)|0;h=l+b|0}}else{q=a;h=b}while(0);j=c[8854]|0;if((a+b|0)>>>0<j>>>0)ba();f=c[a+b+4>>2]|0;if(!(f&2)){d=c[8855]|0;if((a+b|0)==(c[8856]|0)){p=(c[8853]|0)+h|0;c[8853]=p;c[8856]=q;c[q+4>>2]=p|1;if((q|0)!=(d|0))return;c[8855]=0;c[8852]=0;return}if((a+b|0)==(d|0)){p=(c[8852]|0)+h|0;c[8852]=p;c[8855]=q;c[q+4>>2]=p|1;c[q+p>>2]=p;return}h=(f&-8)+h|0;b:do if(f>>>0>=256){i=c[a+b+24>>2]|0;d=c[a+b+12>>2]|0;do if((d|0)==(a+b|0)){d=c[a+b+16+4>>2]|0;if(!d){d=c[a+b+16>>2]|0;if(!d){n=0;break}else g=a+b+16|0}else g=a+b+16+4|0;while(1){e=d+20|0;f=c[e>>2]|0;if(f|0){d=f;g=e;continue}e=d+16|0;f=c[e>>2]|0;if(!f)break;else{d=f;g=e}}if(g>>>0<j>>>0)ba();else{c[g>>2]=0;n=d;break}}else{e=c[a+b+8>>2]|0;if(e>>>0<j>>>0)ba();if((c[e+12>>2]|0)!=(a+b|0))ba();if((c[d+8>>2]|0)==(a+b|0)){c[e+12>>2]=d;c[d+8>>2]=e;n=d;break}else ba()}while(0);if(i|0){d=c[a+b+28>>2]|0;do if((a+b|0)==(c[35704+(d<<2)>>2]|0)){c[35704+(d<<2)>>2]=n;if(!n){c[8851]=c[8851]&~(1<<d);break b}}else if(i>>>0>=(c[8854]|0)>>>0){c[i+16+(((c[i+16>>2]|0)!=(a+b|0)&1)<<2)>>2]=n;if(!n)break b;else break}else ba();while(0);e=c[8854]|0;if(n>>>0<e>>>0)ba();c[n+24>>2]=i;d=c[a+b+16>>2]|0;do if(d|0)if(d>>>0<e>>>0)ba();else{c[n+16>>2]=d;c[d+24>>2]=n;break}while(0);d=c[a+b+16+4>>2]|0;if(d|0)if(d>>>0<(c[8854]|0)>>>0)ba();else{c[n+20>>2]=d;c[d+24>>2]=n;break}}}else{d=c[a+b+8>>2]|0;e=c[a+b+12>>2]|0;if((d|0)!=(35440+(f>>>3<<1<<2)|0)){if(d>>>0<j>>>0)ba();if((c[d+12>>2]|0)!=(a+b|0))ba()}if((e|0)==(d|0)){c[8850]=c[8850]&~(1<<(f>>>3));break}if((e|0)!=(35440+(f>>>3<<1<<2)|0)){if(e>>>0<j>>>0)ba();if((c[e+8>>2]|0)!=(a+b|0))ba();else m=e+8|0}else m=e+8|0;c[d+12>>2]=e;c[m>>2]=d}while(0);c[q+4>>2]=h|1;c[q+h>>2]=h;if((q|0)==(c[8855]|0)){c[8852]=h;return}}else{c[a+b+4>>2]=f&-2;c[q+4>>2]=h|1;c[q+h>>2]=h}e=h>>>3;if(h>>>0<256){d=c[8850]|0;if(d&1<<e){d=c[35440+(e<<1<<2)+8>>2]|0;if(d>>>0<(c[8854]|0)>>>0)ba();else{o=d;p=35440+(e<<1<<2)+8|0}}else{c[8850]=d|1<<e;o=35440+(e<<1<<2)|0;p=35440+(e<<1<<2)+8|0}c[p>>2]=q;c[o+12>>2]=q;c[q+8>>2]=o;c[q+12>>2]=35440+(e<<1<<2);return}d=h>>>8;if(d)if(h>>>0>16777215)d=31;else{p=d<<((d+1048320|0)>>>16&8)<<(((d<<((d+1048320|0)>>>16&8))+520192|0)>>>16&4);d=14-(((d<<((d+1048320|0)>>>16&8))+520192|0)>>>16&4|(d+1048320|0)>>>16&8|(p+245760|0)>>>16&2)+(p<<((p+245760|0)>>>16&2)>>>15)|0;d=h>>>(d+7|0)&1|d<<1}else d=0;g=35704+(d<<2)|0;c[q+28>>2]=d;c[q+20>>2]=0;c[q+16>>2]=0;e=c[8851]|0;f=1<<d;if(!(e&f)){c[8851]=e|f;c[g>>2]=q;c[q+24>>2]=g;c[q+12>>2]=q;c[q+8>>2]=q;return}e=h<<((d|0)==31?0:25-(d>>>1)|0);g=c[g>>2]|0;while(1){if((c[g+4>>2]&-8|0)==(h|0)){d=121;break}f=g+16+(e>>>31<<2)|0;d=c[f>>2]|0;if(!d){d=118;break}else{e=e<<1;g=d}}if((d|0)==118){if(f>>>0<(c[8854]|0)>>>0)ba();c[f>>2]=q;c[q+24>>2]=g;c[q+12>>2]=q;c[q+8>>2]=q;return}else if((d|0)==121){d=g+8|0;e=c[d>>2]|0;p=c[8854]|0;if(!(e>>>0>=p>>>0&g>>>0>=p>>>0))ba();c[e+12>>2]=q;c[d>>2]=q;c[q+8>>2]=e;c[q+12>>2]=g;c[q+24>>2]=0;return}}function xa(a,b,c,e,f){a=a|0;b=b|0;c=c|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;m=Xe(f)|0;o=D;g=Xe(f+8|0)|0;h=D;e=zf(c|0,e|0,56)|0;f=D;if((b+c+(0-(c&7))|0)==(b|0)){q=g^2037671283;j=h^1952801890;n=m^1886610805;k=o^1936682341;i=g^1852075907;r=h^1685025377;h=m^1852142177;g=o^1819895653}else{s=b;q=g^2037671283;j=h^1952801890;n=m^1886610805;l=o^1936682341;k=g^1852075907;i=h^1685025377;h=m^1852142177;g=o^1819895653;while(1){p=Xe(s)|0;t=D;v=p^q;j=t^j;l=jg(n|0,l|0,k|0,i|0)|0;r=D;n=cf(k,i,13)|0;k=D^r;r=cf(l,r,32)|0;q=D;m=jg(v|0,j|0,h|0,g|0)|0;o=D;j=cf(v,j,16)|0;i=D^o;q=jg(j^m|0,i|0,r|0,q|0)|0;r=D;i=cf(j^m,i,21)|0;j=r^D;o=jg(m|0,o|0,n^l|0,k|0)|0;m=D;k=cf(n^l,k,17)|0;g=D^m;m=cf(o,m,32)|0;h=D;r=jg(k^o|0,g|0,q|0,r|0)|0;l=D;g=cf(k^o,g,13)|0;o=D^l;l=cf(r,l,32)|0;k=D;h=jg(m|0,h|0,q^i|0,j|0)|0;m=D;j=cf(q^i,j,16)|0;i=D^m;k=jg(j^h|0,i|0,l|0,k|0)|0;l=D;i=cf(j^h,i,21)|0;j=l^D;m=jg(g^r|0,o|0,h|0,m|0)|0;h=D;o=cf(g^r,o,17)|0;r=D^h;h=cf(m,h,32)|0;g=D;s=s+8|0;if((s|0)==(b+c+(0-(c&7))|0)){b=b+c+(0-(c&7))|0;q=k^i;n=k^p;k=l^t;i=o^m;break}else{q=k^i;n=k^p;l=l^t;k=o^m;i=r}}}switch(c&7){case 7:{e=zf(d[b+6>>0]|0|0,0,48)|0|e;f=D|f;u=5;break}case 6:{u=5;break}case 5:{u=6;break}case 4:{u=7;break}case 3:{u=8;break}case 2:{u=9;break}case 1:{u=10;break}default:{}}if((u|0)==5){v=zf(d[b+5>>0]|0|0,0,40)|0;f=D|f;e=v|e;u=6}if((u|0)==6){f=d[b+4>>0]|0|f;u=7}if((u|0)==7){v=zf(d[b+3>>0]|0|0,0,24)|0;e=v|e;f=D|f;u=8}if((u|0)==8){v=zf(d[b+2>>0]|0|0,0,16)|0;e=v|e;f=D|f;u=9}if((u|0)==9){v=zf(d[b+1>>0]|0|0,0,8)|0;e=v|e;f=D|f;u=10}if((u|0)==10)e=d[b>>0]|0|e;t=e^q;c=f^j;b=jg(n|0,k|0,i|0,r|0)|0;v=D;u=cf(i,r,13)|0;o=D^v;v=cf(b,v,32)|0;q=D;s=jg(t|0,c|0,h|0,g|0)|0;p=D;r=cf(t,c,16)|0;c=D^p;q=jg(r^s|0,c|0,v|0,q|0)|0;v=D;c=cf(r^s,c,21)|0;r=v^D;p=jg(s|0,p|0,u^b|0,o|0)|0;s=D;o=cf(u^b,o,17)|0;b=D^s;s=cf(p,s,32)|0;u=D;v=jg(o^p|0,b|0,q|0,v|0)|0;t=D;b=cf(o^p,b,13)|0;p=D^t;t=cf(v,t,32)|0;o=D;u=jg(s|0,u|0,q^c|0,r|0)|0;s=D;r=cf(q^c,r,16)|0;c=D^s;o=jg(r^u|0,c|0,t|0,o|0)|0;t=D;c=cf(r^u,c,21)|0;r=t^D;s=jg(b^v|0,p|0,u|0,s|0)|0;u=D;p=cf(b^v,p,17)|0;v=D^u;u=cf(s,u,32)|0;b=D;t=jg(o^e|0,t^f|0,p^s|0,v|0)|0;q=D;v=cf(p^s,v,13)|0;s=D^q;q=cf(t,q,32)|0;p=D;b=jg(u^238|0,b|0,o^c|0,r|0)|0;u=D;r=cf(o^c,r,16)|0;c=D^u;p=jg(r^b|0,c|0,q|0,p|0)|0;q=D;c=cf(r^b,c,21)|0;r=q^D;u=jg(b|0,u|0,v^t|0,s|0)|0;b=D;s=cf(v^t,s,17)|0;t=D^b;b=cf(u,b,32)|0;v=D;q=jg(s^u|0,t|0,p|0,q|0)|0;o=D;t=cf(s^u,t,13)|0;u=D^o;o=cf(q,o,32)|0;s=D;v=jg(b|0,v|0,p^c|0,r|0)|0;b=D;r=cf(p^c,r,16)|0;c=D^b;s=jg(r^v|0,c|0,o|0,s|0)|0;o=D;c=cf(r^v,c,21)|0;r=o^D;b=jg(t^q|0,u|0,v|0,b|0)|0;v=D;u=cf(t^q,u,17)|0;q=D^v;v=cf(b,v,32)|0;t=D;o=jg(u^b|0,q|0,s|0,o|0)|0;p=D;q=cf(u^b,q,13)|0;b=D^p;p=cf(o,p,32)|0;u=D;t=jg(v|0,t|0,s^c|0,r|0)|0;v=D;r=cf(s^c,r,16)|0;c=D^v;u=jg(r^t|0,c|0,p|0,u|0)|0;p=D;c=cf(r^t,c,21)|0;r=p^D;v=jg(q^o|0,b|0,t|0,v|0)|0;t=D;b=cf(q^o,b,17)|0;o=D^t;t=cf(v,t,32)|0;q=D;p=jg(b^v|0,o|0,u|0,p|0)|0;s=D;o=cf(b^v,o,13)|0;v=D^s;s=cf(p,s,32)|0;b=D;q=jg(t|0,q|0,u^c|0,r|0)|0;t=D;r=cf(u^c,r,16)|0;c=D^t;b=jg(r^q|0,c|0,s|0,b|0)|0;s=D;c=cf(r^q,c,21)|0;r=s^D;t=jg(o^p|0,v|0,q|0,t|0)|0;q=D;v=cf(o^p,v,17)|0;p=D^q;q=cf(t,q,32)|0;o=D;ve(a,v^t^b^q^(b^c),p^s^o^r);s=jg(v^t^221|0,p|0,b|0,s|0)|0;u=D;p=cf(v^t^221,p,13)|0;t=D^u;u=cf(s,u,32)|0;v=D;o=jg(q|0,o|0,b^c|0,r|0)|0;q=D;r=cf(b^c,r,16)|0;c=D^q;v=jg(r^o|0,c|0,u|0,v|0)|0;u=D;c=cf(r^o,c,21)|0;r=u^D;q=jg(p^s|0,t|0,o|0,q|0)|0;o=D;t=cf(p^s,t,17)|0;s=D^o;o=cf(q,o,32)|0;p=D;u=jg(t^q|0,s|0,v|0,u|0)|0;b=D;s=cf(t^q,s,13)|0;q=D^b;b=cf(u,b,32)|0;t=D;p=jg(o|0,p|0,v^c|0,r|0)|0;o=D;r=cf(v^c,r,16)|0;c=D^o;t=jg(r^p|0,c|0,b|0,t|0)|0;b=D;c=cf(r^p,c,21)|0;r=b^D;o=jg(s^u|0,q|0,p|0,o|0)|0;p=D;q=cf(s^u,q,17)|0;u=D^p;p=cf(o,p,32)|0;s=D;b=jg(q^o|0,u|0,t|0,b|0)|0;v=D;u=cf(q^o,u,13)|0;o=D^v;v=cf(b,v,32)|0;q=D;s=jg(p|0,s|0,t^c|0,r|0)|0;p=D;r=cf(t^c,r,16)|0;c=D^p;q=jg(r^s|0,c|0,v|0,q|0)|0;v=D;c=cf(r^s,c,21)|0;r=v^D;p=jg(u^b|0,o|0,s|0,p|0)|0;s=D;o=cf(u^b,o,17)|0;b=D^s;s=cf(p,s,32)|0;u=D;v=jg(o^p|0,b|0,q|0,v|0)|0;t=D;b=cf(o^p,b,13)|0;t=D^t;u=jg(s|0,u|0,q^c|0,r|0)|0;s=D;r=cf(q^c,r,16)|0;r=cf(r^u,D^s,21)|0;c=D;s=jg(b^v|0,t|0,u|0,s|0)|0;u=D;t=cf(b^v,t,17)|0;v=D;b=cf(s,u,32)|0;ve(a+8|0,r^s^t^b,c^u^v^D);return 0}function ya(a,b,c,e,f){a=a|0;b=b|0;c=c|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;m=Xe(f)|0;o=D;g=Xe(f+8|0)|0;h=D;e=zf(c|0,e|0,56)|0;f=D;if((b+c+(0-(c&7))|0)==(b|0)){q=g^2037671283;j=h^1952801890;n=m^1886610805;k=o^1936682341;i=g^1852075885;r=h^1685025377;h=m^1852142177;g=o^1819895653}else{s=b;q=g^2037671283;j=h^1952801890;n=m^1886610805;l=o^1936682341;k=g^1852075885;i=h^1685025377;h=m^1852142177;g=o^1819895653;while(1){p=Xe(s)|0;t=D;v=p^q;j=t^j;l=jg(n|0,l|0,k|0,i|0)|0;r=D;n=cf(k,i,13)|0;k=D^r;r=cf(l,r,32)|0;q=D;m=jg(v|0,j|0,h|0,g|0)|0;o=D;j=cf(v,j,16)|0;i=D^o;q=jg(j^m|0,i|0,r|0,q|0)|0;r=D;i=cf(j^m,i,21)|0;j=r^D;o=jg(m|0,o|0,n^l|0,k|0)|0;m=D;k=cf(n^l,k,17)|0;g=D^m;m=cf(o,m,32)|0;h=D;r=jg(k^o|0,g|0,q|0,r|0)|0;l=D;g=cf(k^o,g,13)|0;o=D^l;l=cf(r,l,32)|0;k=D;h=jg(m|0,h|0,q^i|0,j|0)|0;m=D;j=cf(q^i,j,16)|0;i=D^m;k=jg(j^h|0,i|0,l|0,k|0)|0;l=D;i=cf(j^h,i,21)|0;j=l^D;m=jg(g^r|0,o|0,h|0,m|0)|0;h=D;o=cf(g^r,o,17)|0;r=D^h;h=cf(m,h,32)|0;g=D;s=s+8|0;if((s|0)==(b+c+(0-(c&7))|0)){b=b+c+(0-(c&7))|0;q=k^i;n=k^p;k=l^t;i=o^m;break}else{q=k^i;n=k^p;l=l^t;k=o^m;i=r}}}switch(c&7){case 7:{e=zf(d[b+6>>0]|0|0,0,48)|0|e;f=D|f;u=5;break}case 6:{u=5;break}case 5:{u=6;break}case 4:{u=7;break}case 3:{u=8;break}case 2:{u=9;break}case 1:{u=10;break}default:{}}if((u|0)==5){v=zf(d[b+5>>0]|0|0,0,40)|0;f=D|f;e=v|e;u=6}if((u|0)==6){f=d[b+4>>0]|0|f;u=7}if((u|0)==7){v=zf(d[b+3>>0]|0|0,0,24)|0;e=v|e;f=D|f;u=8}if((u|0)==8){v=zf(d[b+2>>0]|0|0,0,16)|0;e=v|e;f=D|f;u=9}if((u|0)==9){v=zf(d[b+1>>0]|0|0,0,8)|0;e=v|e;f=D|f;u=10}if((u|0)==10)e=d[b>>0]|0|e;s=e^q;c=f^j;o=jg(n|0,k|0,i|0,r|0)|0;p=D;q=cf(i,r,13)|0;b=D^p;p=cf(o,p,32)|0;u=D;t=jg(s|0,c|0,h|0,g|0)|0;v=D;r=cf(s,c,16)|0;c=D^v;u=jg(r^t|0,c|0,p|0,u|0)|0;p=D;c=cf(r^t,c,21)|0;r=p^D;v=jg(t|0,v|0,q^o|0,b|0)|0;t=D;b=cf(q^o,b,17)|0;o=D^t;t=cf(v,t,32)|0;q=D;p=jg(b^v|0,o|0,u|0,p|0)|0;s=D;o=cf(b^v,o,13)|0;v=D^s;s=cf(p,s,32)|0;b=D;q=jg(t|0,q|0,u^c|0,r|0)|0;t=D;r=cf(u^c,r,16)|0;c=D^t;b=jg(r^q|0,c|0,s|0,b|0)|0;s=D;c=cf(r^q,c,21)|0;r=s^D;t=jg(o^p|0,v|0,q|0,t|0)|0;q=D;v=cf(o^p,v,17)|0;p=D^q;q=cf(t,q,32)|0;o=D;s=jg(b^e|0,s^f|0,v^t|0,p|0)|0;u=D;p=cf(v^t,p,13)|0;t=D^u;u=cf(s,u,32)|0;v=D;o=jg(q^255|0,o|0,b^c|0,r|0)|0;q=D;r=cf(b^c,r,16)|0;c=D^q;v=jg(r^o|0,c|0,u|0,v|0)|0;u=D;c=cf(r^o,c,21)|0;r=u^D;q=jg(o|0,q|0,p^s|0,t|0)|0;o=D;t=cf(p^s,t,17)|0;s=D^o;o=cf(q,o,32)|0;p=D;u=jg(t^q|0,s|0,v|0,u|0)|0;b=D;s=cf(t^q,s,13)|0;q=D^b;b=cf(u,b,32)|0;t=D;p=jg(o|0,p|0,v^c|0,r|0)|0;o=D;r=cf(v^c,r,16)|0;c=D^o;t=jg(r^p|0,c|0,b|0,t|0)|0;b=D;c=cf(r^p,c,21)|0;r=b^D;o=jg(s^u|0,q|0,p|0,o|0)|0;p=D;q=cf(s^u,q,17)|0;u=D^p;p=cf(o,p,32)|0;s=D;b=jg(q^o|0,u|0,t|0,b|0)|0;v=D;u=cf(q^o,u,13)|0;o=D^v;v=cf(b,v,32)|0;q=D;s=jg(p|0,s|0,t^c|0,r|0)|0;p=D;r=cf(t^c,r,16)|0;c=D^p;q=jg(r^s|0,c|0,v|0,q|0)|0;v=D;c=cf(r^s,c,21)|0;r=v^D;p=jg(u^b|0,o|0,s|0,p|0)|0;s=D;o=cf(u^b,o,17)|0;b=D^s;s=cf(p,s,32)|0;u=D;v=jg(o^p|0,b|0,q|0,v|0)|0;t=D;b=cf(o^p,b,13)|0;t=D^t;u=jg(s|0,u|0,q^c|0,r|0)|0;s=D;r=cf(q^c,r,16)|0;r=cf(r^u,D^s,21)|0;c=D;s=jg(b^v|0,t|0,u|0,s|0)|0;u=D;t=cf(b^v,t,17)|0;v=D;b=cf(s,u,32)|0;ve(a,r^s^t^b,c^u^v^D);return 0}function za(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0;T=l;S=l=l+63&-64;l=l+64|0;if(!((f|0)==0&(g|0)==0)){if(g>>>0>63|(g|0)==63&f>>>0>4294967232)ba();E=c[b>>2]|0;F=c[b+4>>2]|0;G=c[b+8>>2]|0;H=c[b+12>>2]|0;I=c[b+16>>2]|0;J=c[b+20>>2]|0;K=c[b+24>>2]|0;L=c[b+28>>2]|0;M=c[b+32>>2]|0;N=c[b+36>>2]|0;O=c[b+40>>2]|0;P=c[b+44>>2]|0;Q=c[b+56>>2]|0;R=c[b+60>>2]|0;h=0;A=c[b+52>>2]|0;y=c[b+48>>2]|0;B=g;C=f;while(1){z=B>>>0<0|(B|0)==0&C>>>0<64;if(z){g=S;f=g+64|0;do{a[g>>0]=0;g=g+1|0}while((g|0)<(f|0));g=0;do{a[S+g>>0]=a[d+g>>0]|0;g=g+1|0}while(0<B>>>0|0==(B|0)&g>>>0<C>>>0);h=e;d=S;e=S}g=E;f=F;i=G;j=H;k=I;m=J;n=K;o=L;p=M;q=N;r=O;s=R;t=Q;u=A;v=y;w=P;x=20;do{ma=g+k|0;aa=Bh(ma^v,16)|0;$=aa+p|0;na=Bh($^k,12)|0;aa=Bh(na+ma^aa,8)|0;Y=Bh(aa+$^na,7)|0;ia=f+m|0;W=Bh(ia^u,16)|0;V=W+q|0;ja=Bh(V^m,12)|0;W=Bh(ja+ia^W,8)|0;oa=Bh(W+V^ja,7)|0;da=i+n|0;X=Bh(da^t,16)|0;ca=X+r|0;ea=Bh(ca^n,12)|0;X=Bh(ea+da^X,8)|0;ka=Bh(X+ca^ea,7)|0;Z=j+o|0;ga=Bh(Z^s,16)|0;U=ga+w|0;_=Bh(U^o,12)|0;ga=Bh(_+Z^ga,8)|0;fa=Bh(ga+U^_,7)|0;la=Bh(ga^oa+(na+ma),16)|0;ha=Bh(la+(X+ca)^oa,12)|0;g=ha+(oa+(na+ma))|0;s=Bh(g^la,8)|0;r=s+(la+(X+ca))|0;m=Bh(r^ha,7)|0;ha=Bh(ka+(ja+ia)^aa,16)|0;ca=Bh(ha+(ga+U)^ka,12)|0;f=ca+(ka+(ja+ia))|0;v=Bh(f^ha,8)|0;w=v+(ha+(ga+U))|0;n=Bh(w^ca,7)|0;ca=Bh(fa+(ea+da)^W,16)|0;U=Bh(ca+(aa+$)^fa,12)|0;i=U+(fa+(ea+da))|0;u=Bh(i^ca,8)|0;p=u+(ca+(aa+$))|0;o=Bh(p^U,7)|0;X=Bh(_+Z+Y^X,16)|0;U=Bh(X+(W+V)^Y,12)|0;j=U+(_+Z+Y)|0;t=Bh(j^X,8)|0;q=t+(X+(W+V))|0;k=Bh(q^U,7)|0;x=x+-2|0}while((x|0)!=0);_=(Vg(d)|0)^g+E;$=(Vg(d+4|0)|0)^f+F;aa=(Vg(d+8|0)|0)^i+G;ca=(Vg(d+12|0)|0)^j+H;da=(Vg(d+16|0)|0)^k+I;ea=(Vg(d+20|0)|0)^m+J;fa=(Vg(d+24|0)|0)^n+K;ga=(Vg(d+28|0)|0)^o+L;ha=(Vg(d+32|0)|0)^p+M;ia=(Vg(d+36|0)|0)^q+N;ja=(Vg(d+40|0)|0)^r+O;ka=(Vg(d+44|0)|0)^w+P;la=(Vg(d+48|0)|0)^v+y;ma=(Vg(d+52|0)|0)^u+A;na=(Vg(d+56|0)|0)^t+Q;oa=(Vg(d+60|0)|0)^s+R;f=y+1|0;g=((f|0)==0&1)+A|0;ng(e,_);ng(e+4|0,$);ng(e+8|0,aa);ng(e+12|0,ca);ng(e+16|0,da);ng(e+20|0,ea);ng(e+24|0,fa);ng(e+28|0,ga);ng(e+32|0,ha);ng(e+36|0,ia);ng(e+40|0,ja);ng(e+44|0,ka);ng(e+48|0,la);ng(e+52|0,ma);ng(e+56|0,na);ng(e+60|0,oa);if(B>>>0<0|(B|0)==0&C>>>0<65)break;oa=jg(C|0,B|0,-64,-1)|0;d=d+64|0;e=e+64|0;A=g;y=f;B=D;C=oa}if(z?C|0:0){d=0;do{a[h+d>>0]=a[e+d>>0]|0;d=d+1|0}while((d|0)!=(C|0))}c[b+48>>2]=f;c[b+52>>2]=g}l=T;return}function Aa(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0;s=a[b+80>>0]|0?0:16777216;t=c[b+4>>2]|0;o=c[b+8>>2]|0;p=c[b+12>>2]|0;q=c[b+16>>2]|0;k=c[b+20>>2]|0;j=c[b+24>>2]|0;i=c[b+28>>2]|0;h=c[b+32>>2]|0;g=c[b+36>>2]|0;if(f>>>0>0|(f|0)==0&e>>>0>15){r=c[b>>2]|0;m=e;while(1){y=((Vg(d)|0)&67108863)+k|0;z=((Vg(d+3|0)|0)>>>2&67108863)+j|0;x=((Vg(d+6|0)|0)>>>4&67108863)+i|0;w=((Vg(d+9|0)|0)>>>6)+h|0;k=((Vg(d+12|0)|0)>>>8|s)+g|0;g=ef(y|0,0,r|0,0)|0;e=D;i=ef(z|0,0,q*5|0,0)|0;e=jg(i|0,D|0,g|0,e|0)|0;g=D;i=ef(x|0,0,p*5|0,0)|0;i=jg(e|0,g|0,i|0,D|0)|0;g=D;e=ef(w|0,0,o*5|0,0)|0;e=jg(i|0,g|0,e|0,D|0)|0;g=D;i=ef(k|0,0,t*5|0,0)|0;i=jg(e|0,g|0,i|0,D|0)|0;g=D;e=ef(y|0,0,t|0,0)|0;l=D;v=ef(z|0,0,r|0,0)|0;l=jg(v|0,D|0,e|0,l|0)|0;e=D;v=ef(x|0,0,q*5|0,0)|0;v=jg(l|0,e|0,v|0,D|0)|0;e=D;l=ef(w|0,0,p*5|0,0)|0;l=jg(v|0,e|0,l|0,D|0)|0;e=D;v=ef(k|0,0,o*5|0,0)|0;v=jg(l|0,e|0,v|0,D|0)|0;e=D;l=ef(y|0,0,o|0,0)|0;n=D;u=ef(z|0,0,t|0,0)|0;n=jg(u|0,D|0,l|0,n|0)|0;l=D;u=ef(x|0,0,r|0,0)|0;u=jg(n|0,l|0,u|0,D|0)|0;l=D;n=ef(w|0,0,q*5|0,0)|0;n=jg(u|0,l|0,n|0,D|0)|0;l=D;u=ef(k|0,0,p*5|0,0)|0;u=jg(n|0,l|0,u|0,D|0)|0;l=D;n=ef(y|0,0,p|0,0)|0;h=D;j=ef(z|0,0,o|0,0)|0;h=jg(j|0,D|0,n|0,h|0)|0;n=D;j=ef(x|0,0,t|0,0)|0;j=jg(h|0,n|0,j|0,D|0)|0;n=D;h=ef(w|0,0,r|0,0)|0;h=jg(j|0,n|0,h|0,D|0)|0;n=D;j=ef(k|0,0,q*5|0,0)|0;j=jg(h|0,n|0,j|0,D|0)|0;n=D;h=ef(y|0,0,q|0,0)|0;y=D;z=ef(z|0,0,p|0,0)|0;y=jg(z|0,D|0,h|0,y|0)|0;h=D;x=ef(x|0,0,o|0,0)|0;x=jg(y|0,h|0,x|0,D|0)|0;h=D;w=ef(w|0,0,t|0,0)|0;w=jg(x|0,h|0,w|0,D|0)|0;h=D;k=ef(k|0,0,r|0,0)|0;k=jg(w|0,h|0,k|0,D|0)|0;h=D;g=Cf(i|0,g|0,26)|0;g=jg(v|0,e|0,g|0,0)|0;e=Cf(g|0,D|0,26)|0;e=jg(u|0,l|0,e|0,0)|0;l=Cf(e|0,D|0,26)|0;l=jg(j|0,n|0,l|0,0)|0;n=Cf(l|0,D|0,26)|0;n=jg(k|0,h|0,n|0,0)|0;h=Cf(n|0,D|0,26)|0;m=jg(m|0,f|0,-16,-1)|0;f=D;if(!(f>>>0>0|(f|0)==0&m>>>0>15)){k=(h*5|0)+i&67108863;j=(((h*5|0)+(i&67108863)|0)>>>26)+(g&67108863)|0;i=e&67108863;h=l&67108863;g=n&67108863;break}else{k=(h*5|0)+i&67108863;j=(((h*5|0)+(i&67108863)|0)>>>26)+(g&67108863)|0;i=e&67108863;h=l&67108863;g=n&67108863;d=d+16|0}}}c[b+20>>2]=k;c[b+24>>2]=j;c[b+28>>2]=i;c[b+32>>2]=h;c[b+36>>2]=g;return}function Ba(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0;y=Ud(d)|0;k=D;x=hf(a[d+4>>0]|0,a[d+5>>0]|0,a[d+6>>0]|0)|0;x=zf(x|0,D|0,6)|0;l=D;w=hf(a[d+7>>0]|0,a[d+8>>0]|0,a[d+9>>0]|0)|0;w=zf(w|0,D|0,5)|0;i=D;t=hf(a[d+10>>0]|0,a[d+11>>0]|0,a[d+12>>0]|0)|0;t=zf(t|0,D|0,3)|0;j=D;s=hf(a[d+13>>0]|0,a[d+14>>0]|0,a[d+15>>0]|0)|0;s=zf(s|0,D|0,2)|0;g=D;f=Ud(d+16|0)|0;h=D;p=hf(a[d+20>>0]|0,a[d+21>>0]|0,a[d+22>>0]|0)|0;p=zf(p|0,D|0,7)|0;e=D;v=hf(a[d+23>>0]|0,a[d+24>>0]|0,a[d+25>>0]|0)|0;v=zf(v|0,D|0,5)|0;u=D;n=hf(a[d+26>>0]|0,a[d+27>>0]|0,a[d+28>>0]|0)|0;n=zf(n|0,D|0,4)|0;o=D;r=hf(a[d+29>>0]|0,a[d+30>>0]|0,a[d+31>>0]|0)|0;r=zf(r|0,D|0,2)|0;d=jg(r&33554428|0,0,16777216,0)|0;d=Cf(d|0,D|0,25)|0;q=D;z=gg(0,0,d|0,q|0)|0;k=jg(z&19|0,0,y|0,k|0)|0;y=D;q=zf(d|0,q|0,25)|0;d=D;z=jg(x|0,l|0,16777216,0)|0;z=$e(z|0,D|0,25)|0;B=D;i=jg(z|0,B|0,w|0,i|0)|0;w=D;B=zf(z|0,B|0,25)|0;B=gg(x|0,l|0,B|0,D|0)|0;l=D;x=jg(t|0,j|0,16777216,0)|0;x=$e(x|0,D|0,25)|0;z=D;g=jg(x|0,z|0,s|0,g|0)|0;s=D;z=zf(x|0,z|0,25)|0;z=gg(t|0,j|0,z|0,D|0)|0;j=D;t=jg(f|0,h|0,16777216,0)|0;t=$e(t|0,D|0,25)|0;x=D;e=jg(p|0,e|0,t|0,x|0)|0;p=D;x=zf(t|0,x|0,25)|0;x=gg(f|0,h|0,x|0,D|0)|0;h=D;f=jg(v|0,u|0,16777216,0)|0;f=$e(f|0,D|0,25)|0;t=D;o=jg(f|0,t|0,n|0,o|0)|0;n=D;t=zf(f|0,t|0,25)|0;f=D;A=jg(k|0,y|0,33554432,0)|0;A=$e(A|0,D|0,26)|0;m=D;l=jg(B|0,l|0,A|0,m|0)|0;m=zf(A|0,m|0,26)|0;m=gg(k|0,y|0,m|0,D|0)|0;y=jg(i|0,w|0,33554432,0)|0;y=$e(y|0,D|0,26)|0;k=D;j=jg(z|0,j|0,y|0,k|0)|0;k=zf(y|0,k|0,26)|0;k=gg(i|0,w|0,k|0,D|0)|0;w=jg(g|0,s|0,33554432,0)|0;w=$e(w|0,D|0,26)|0;i=D;h=jg(x|0,h|0,w|0,i|0)|0;i=zf(w|0,i|0,26)|0;i=gg(g|0,s|0,i|0,D|0)|0;s=jg(e|0,p|0,33554432,0)|0;s=$e(s|0,D|0,26)|0;g=D;u=jg(s|0,g|0,v|0,u|0)|0;f=gg(u|0,D|0,t|0,f|0)|0;g=zf(s|0,g|0,26)|0;g=gg(e|0,p|0,g|0,D|0)|0;p=jg(o|0,n|0,33554432,0)|0;p=$e(p|0,D|0,26)|0;e=D;r=jg(p|0,e|0,r&33554428|0,0)|0;d=gg(r|0,D|0,q|0,d|0)|0;e=zf(p|0,e|0,26)|0;e=gg(o|0,n|0,e|0,D|0)|0;c[b>>2]=m;c[b+4>>2]=l;c[b+8>>2]=k;c[b+12>>2]=j;c[b+16>>2]=i;c[b+20>>2]=h;c[b+24>>2]=g;c[b+28>>2]=f;c[b+32>>2]=e;c[b+36>>2]=d;return}function Ca(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0;u=c[b>>2]|0;t=c[b+4>>2]|0;s=c[b+8>>2]|0;r=c[b+12>>2]|0;q=c[b+16>>2]|0;l=c[b+20>>2]|0;o=c[b+24>>2]|0;w=c[b+28>>2]|0;m=c[b+32>>2]|0;v=c[b+36>>2]|0;u=ef(u|0,((u|0)<0)<<31>>31|0,121666,0)|0;j=D;t=ef(t|0,((t|0)<0)<<31>>31|0,121666,0)|0;k=D;s=ef(s|0,((s|0)<0)<<31>>31|0,121666,0)|0;h=D;r=ef(r|0,((r|0)<0)<<31>>31|0,121666,0)|0;i=D;q=ef(q|0,((q|0)<0)<<31>>31|0,121666,0)|0;f=D;l=ef(l|0,((l|0)<0)<<31>>31|0,121666,0)|0;g=D;o=ef(o|0,((o|0)<0)<<31>>31|0,121666,0)|0;d=D;w=ef(w|0,((w|0)<0)<<31>>31|0,121666,0)|0;e=D;m=ef(m|0,((m|0)<0)<<31>>31|0,121666,0)|0;n=D;v=ef(v|0,((v|0)<0)<<31>>31|0,121666,0)|0;b=D;x=jg(v|0,b|0,16777216,0)|0;x=$e(x|0,D|0,25)|0;p=D;y=ef(x|0,p|0,19,0)|0;j=jg(y|0,D|0,u|0,j|0)|0;u=D;p=zf(x|0,p|0,25)|0;p=gg(v|0,b|0,p|0,D|0)|0;b=D;v=jg(t|0,k|0,16777216,0)|0;v=$e(v|0,D|0,25)|0;x=D;h=jg(v|0,x|0,s|0,h|0)|0;s=D;x=zf(v|0,x|0,25)|0;x=gg(t|0,k|0,x|0,D|0)|0;k=D;t=jg(r|0,i|0,16777216,0)|0;t=$e(t|0,D|0,25)|0;v=D;f=jg(t|0,v|0,q|0,f|0)|0;q=D;v=zf(t|0,v|0,25)|0;v=gg(r|0,i|0,v|0,D|0)|0;i=D;r=jg(l|0,g|0,16777216,0)|0;r=$e(r|0,D|0,25)|0;t=D;d=jg(r|0,t|0,o|0,d|0)|0;o=D;t=zf(r|0,t|0,25)|0;t=gg(l|0,g|0,t|0,D|0)|0;g=D;l=jg(w|0,e|0,16777216,0)|0;l=$e(l|0,D|0,25)|0;r=D;n=jg(l|0,r|0,m|0,n|0)|0;m=D;r=zf(l|0,r|0,25)|0;r=gg(w|0,e|0,r|0,D|0)|0;e=D;w=jg(j|0,u|0,33554432,0)|0;w=$e(w|0,D|0,26)|0;l=D;k=jg(x|0,k|0,w|0,l|0)|0;l=zf(w|0,l|0,26)|0;l=gg(j|0,u|0,l|0,D|0)|0;u=jg(h|0,s|0,33554432,0)|0;u=$e(u|0,D|0,26)|0;j=D;i=jg(v|0,i|0,u|0,j|0)|0;j=zf(u|0,j|0,26)|0;j=gg(h|0,s|0,j|0,D|0)|0;s=jg(f|0,q|0,33554432,0)|0;s=$e(s|0,D|0,26)|0;h=D;g=jg(t|0,g|0,s|0,h|0)|0;h=zf(s|0,h|0,26)|0;h=gg(f|0,q|0,h|0,D|0)|0;q=jg(d|0,o|0,33554432,0)|0;q=$e(q|0,D|0,26)|0;f=D;e=jg(r|0,e|0,q|0,f|0)|0;f=zf(q|0,f|0,26)|0;f=gg(d|0,o|0,f|0,D|0)|0;o=jg(n|0,m|0,33554432,0)|0;o=$e(o|0,D|0,26)|0;d=D;b=jg(p|0,b|0,o|0,d|0)|0;d=zf(o|0,d|0,26)|0;d=gg(n|0,m|0,d|0,D|0)|0;c[a>>2]=l;c[a+4>>2]=k;c[a+8>>2]=j;c[a+12>>2]=i;c[a+16>>2]=h;c[a+20>>2]=g;c[a+24>>2]=f;c[a+28>>2]=e;c[a+32>>2]=d;c[a+36>>2]=b;return}function Da(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;if(!b)if(!e){if(f|0){c[f>>2]=(a>>>0)%(d>>>0);c[f+4>>2]=0}e=0;f=(a>>>0)/(d>>>0)>>>0;return (D=e,f)|0}else{if(!f){e=0;f=0;return (D=e,f)|0}c[f>>2]=a|0;c[f+4>>2]=b&0;e=0;f=0;return (D=e,f)|0}do if(d){if(e|0){h=(V(e|0)|0)-(V(b|0)|0)|0;if(h>>>0<=31){n=h+1|0;i=a>>>((h+1|0)>>>0)&h-31>>31|b<<31-h;m=b>>>((h+1|0)>>>0)&h-31>>31;g=0;h=a<<31-h;break}if(!f){e=0;f=0;return (D=e,f)|0}c[f>>2]=a|0;c[f+4>>2]=b|b&0;e=0;f=0;return (D=e,f)|0}if(d-1&d|0){h=(V(d|0)|0)+33-(V(b|0)|0)|0;n=h;i=32-h-1>>31&b>>>((h-32|0)>>>0)|(b<<32-h|a>>>(h>>>0))&h-32>>31;m=h-32>>31&b>>>(h>>>0);g=a<<64-h&32-h>>31;h=(b<<64-h|a>>>((h-32|0)>>>0))&32-h>>31|a<<32-h&h-33>>31;break}if(f|0){c[f>>2]=d-1&a;c[f+4>>2]=0}if((d|0)==1){e=b|b&0;f=a|0|0;return (D=e,f)|0}else{f=ae(d|0)|0;e=b>>>(f>>>0)|0;f=b<<32-f|a>>>(f>>>0)|0;return (D=e,f)|0}}else{if(!e){if(f|0){c[f>>2]=(b>>>0)%(d>>>0);c[f+4>>2]=0}e=0;f=(b>>>0)/(d>>>0)>>>0;return (D=e,f)|0}if(!a){if(f|0){c[f>>2]=0;c[f+4>>2]=(b>>>0)%(e>>>0)}d=0;f=(b>>>0)/(e>>>0)>>>0;return (D=d,f)|0}if(!(e-1&e)){if(f|0){c[f>>2]=a|0;c[f+4>>2]=e-1&b|b&0}d=0;f=b>>>((ae(e|0)|0)>>>0);return (D=d,f)|0}h=(V(e|0)|0)-(V(b|0)|0)|0;if(h>>>0<=30){n=h+1|0;i=b<<31-h|a>>>((h+1|0)>>>0);m=b>>>((h+1|0)>>>0);g=0;h=a<<31-h;break}if(!f){e=0;f=0;return (D=e,f)|0}c[f>>2]=a|0;c[f+4>>2]=b|b&0;e=0;f=0;return (D=e,f)|0}while(0);if(!n){j=h;b=m;a=0;h=0}else{k=jg(d|0|0,e|e&0|0,-1,-1)|0;l=D;j=h;b=m;a=n;h=0;do{p=j;j=g>>>31|j<<1;g=h|g<<1;p=i<<1|p>>>31|0;o=i>>>31|b<<1|0;gg(k|0,l|0,p|0,o|0)|0;n=D;m=n>>31|((n|0)<0?-1:0)<<1;h=m&1;i=gg(p|0,o|0,m&(d|0)|0,(((n|0)<0?-1:0)>>31|((n|0)<0?-1:0)<<1)&(e|e&0)|0)|0;b=D;a=a-1|0}while((a|0)!=0);a=0}if(f|0){c[f>>2]=i;c[f+4>>2]=b}o=(g|0)>>>31|j<<1|(0<<1|g>>>31)&0|a;p=(g<<1|0>>>31)&-2|h;return (D=o,p)|0}function Ea(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0;if(!d){G=857760878;H=2036477234;I=1634760805;y=1797285236}else{I=Vg(d)|0;G=Vg(d+4|0)|0;H=Vg(d+8|0)|0;y=Vg(d+12|0)|0}z=Vg(c)|0;A=Vg(c+4|0)|0;B=Vg(c+8|0)|0;C=Vg(c+12|0)|0;D=Vg(c+16|0)|0;E=Vg(c+20|0)|0;F=Vg(c+24|0)|0;u=Vg(c+28|0)|0;v=Vg(b)|0;w=Vg(b+4|0)|0;x=Vg(b+8|0)|0;t=Vg(b+12|0)|0;if((e|0)>0){g=z;i=A;l=B;o=C;r=v;q=w;p=x;n=t;m=D;k=u;j=F;h=E;s=0;b=G;c=H;d=y;f=I;do{o=(Bh(f+h|0,7)|0)^o;p=(Bh(o+f|0,9)|0)^p;h=(Bh(p+o|0,13)|0)^h;f=(Bh(h+p|0,18)|0)^f;n=(Bh(g+b|0,7)|0)^n;j=(Bh(n+b|0,9)|0)^j;g=(Bh(j+n|0,13)|0)^g;b=(Bh(g+j|0,18)|0)^b;k=(Bh(r+c|0,7)|0)^k;i=(Bh(k+c|0,9)|0)^i;r=(Bh(i+k|0,13)|0)^r;c=(Bh(r+i|0,18)|0)^c;l=(Bh(m+d|0,7)|0)^l;q=(Bh(l+d|0,9)|0)^q;m=(Bh(q+l|0,13)|0)^m;d=(Bh(m+q|0,18)|0)^d;g=(Bh(l+f|0,7)|0)^g;i=(Bh(g+f|0,9)|0)^i;l=(Bh(i+g|0,13)|0)^l;f=(Bh(l+i|0,18)|0)^f;r=(Bh(b+o|0,7)|0)^r;q=(Bh(r+b|0,9)|0)^q;o=(Bh(q+r|0,13)|0)^o;b=(Bh(o+q|0,18)|0)^b;m=(Bh(c+n|0,7)|0)^m;p=(Bh(m+c|0,9)|0)^p;n=(Bh(p+m|0,13)|0)^n;c=(Bh(n+p|0,18)|0)^c;h=(Bh(d+k|0,7)|0)^h;j=(Bh(h+d|0,9)|0)^j;k=(Bh(j+h|0,13)|0)^k;d=(Bh(k+j|0,18)|0)^d;s=s+2|0}while((s|0)<(e|0))}else{g=z;i=A;l=B;o=C;r=v;q=w;p=x;n=t;m=D;k=u;j=F;h=E;f=I;b=G;c=H;d=y}ng(a,f+I|0);ng(a+4|0,g+z|0);ng(a+8|0,i+A|0);ng(a+12|0,l+B|0);ng(a+16|0,o+C|0);ng(a+20|0,b+G|0);ng(a+24|0,r+v|0);ng(a+28|0,q+w|0);ng(a+32|0,p+x|0);ng(a+36|0,n+t|0);ng(a+40|0,c+H|0);ng(a+44|0,m+D|0);ng(a+48|0,h+E|0);ng(a+52|0,j+F|0);ng(a+56|0,k+u|0);ng(a+60|0,d+y|0);return}function Fa(b,c,d,e){b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0;f=l;g=l=l+63&-64;l=l+2272|0;Eb(g+2016|0,c);Eb(g+1760|0,e);$d(g+480|0,d);Ce(g+320|0,d);Md(g,g+320|0);Vb(g+320|0,g,g+480|0);Md(g+160|0,g+320|0);$d(g+480+160|0,g+160|0);Vb(g+320|0,g,g+480+160|0);Md(g+160|0,g+320|0);$d(g+480+320|0,g+160|0);Vb(g+320|0,g,g+480+320|0);Md(g+160|0,g+320|0);$d(g+480+480|0,g+160|0);Vb(g+320|0,g,g+480+480|0);Md(g+160|0,g+320|0);$d(g+480+640|0,g+160|0);Vb(g+320|0,g,g+480+640|0);Md(g+160|0,g+320|0);$d(g+480+800|0,g+160|0);Vb(g+320|0,g,g+480+800|0);Md(g+160|0,g+320|0);$d(g+480+960|0,g+160|0);Vb(g+320|0,g,g+480+960|0);Md(g+160|0,g+320|0);$d(g+480+1120|0,g+160|0);Qf(b);c=255;while(1){if(a[g+2016+c>>0]|0)break;if(a[g+1760+c>>0]|0)break;d=c+-1|0;if((c|0)>0)c=d;else{c=d;break}}if((c|0)>-1)while(1){nc(g+320|0,b);d=a[g+2016+c>>0]|0;if(d<<24>>24<=0){if(d<<24>>24<0){Md(g+160|0,g+320|0);Ub(g+320|0,g+160|0,g+480+((((d<<24>>24)/-2|0)<<24>>24)*160|0)|0)}}else{Md(g+160|0,g+320|0);Vb(g+320|0,g+160|0,g+480+(((d&255)>>>1&255)*160|0)|0)}d=a[g+1760+c>>0]|0;if(d<<24>>24<=0){if(d<<24>>24<0){Md(g+160|0,g+320|0);Zb(g+320|0,g+160|0,1272+((((d<<24>>24)/-2|0)<<24>>24)*120|0)|0)}}else{Md(g+160|0,g+320|0);_b(g+320|0,g+160|0,1272+(((d&255)>>>1&255)*120|0)|0)}De(b,g+320|0);if((c|0)>0)c=c+-1|0;else break}l=f;return}function Ga(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0;u=l;v=l=l+63&-64;l=l+64|0;If(v,a);b=0;e=c[v+44>>2]|0;f=c[v+60>>2]|0;g=c[v+12>>2]|0;h=c[v+28>>2]|0;i=c[v+48>>2]|0;j=c[v>>2]|0;k=c[v+16>>2]|0;m=c[v+32>>2]|0;d=c[v+4>>2]|0;n=c[v+20>>2]|0;o=c[v+36>>2]|0;p=c[v+52>>2]|0;q=c[v+24>>2]|0;r=c[v+40>>2]|0;s=c[v+56>>2]|0;t=c[v+8>>2]|0;do{F=i+j|0;F=(F<<7|F>>>25)^k;C=F+j|0;C=(C<<9|C>>>23)^m;z=(C+F<<13|(C+F|0)>>>19)^i;I=(z+C<<18|(z+C|0)>>>14)^j;B=d+n|0;B=(B<<7|B>>>25)^o;y=B+n|0;y=(y<<9|y>>>23)^p;L=(y+B<<13|(y+B|0)>>>19)^d;E=(L+y<<18|(L+y|0)>>>14)^n;x=q+r|0;x=(x<<7|x>>>25)^s;K=x+r|0;K=(K<<9|K>>>23)^t;H=(K+x<<13|(K+x|0)>>>19)^q;A=(H+K<<18|(H+K|0)>>>14)^r;J=e+f|0;J=(J<<7|J>>>25)^g;G=J+f|0;G=(G<<9|G>>>23)^h;D=(G+J<<13|(G+J|0)>>>19)^e;w=(D+G<<18|(D+G|0)>>>14)^f;d=(J+I<<7|(J+I|0)>>>25)^L;L=d+I|0;t=(L<<9|L>>>23)^K;K=t+d|0;g=(K<<13|K>>>19)^J;J=g+t|0;j=(J<<18|J>>>14)^I;q=(F+E<<7|(F+E|0)>>>25)^H;H=q+E|0;h=(H<<9|H>>>23)^G;G=h+q|0;k=(G<<13|G>>>19)^F;F=k+h|0;n=(F<<18|F>>>14)^E;e=(B+A<<7|(B+A|0)>>>25)^D;D=e+A|0;m=(D<<9|D>>>23)^C;C=m+e|0;o=(C<<13|C>>>19)^B;B=o+m|0;r=(B<<18|B>>>14)^A;i=(x+w<<7|(x+w|0)>>>25)^z;z=i+w|0;p=(z<<9|z>>>23)^y;y=p+i|0;s=(y<<13|y>>>19)^x;x=s+p|0;f=(x<<18|x>>>14)^w;b=b+2|0}while(b>>>0<8);c[v>>2]=j;c[v+48>>2]=i;c[v+16>>2]=k;c[v+32>>2]=m;c[v+20>>2]=n;c[v+4>>2]=d;c[v+36>>2]=o;c[v+52>>2]=p;c[v+40>>2]=r;c[v+24>>2]=q;c[v+56>>2]=s;c[v+8>>2]=t;c[v+60>>2]=f;c[v+44>>2]=e;c[v+12>>2]=g;c[v+28>>2]=h;c[a>>2]=(c[a>>2]|0)+j;b=1;while(1){L=a+(b<<2)|0;c[L>>2]=(c[L>>2]|0)+d;b=b+1|0;if((b|0)==16)break;d=c[v+(b<<2)>>2]|0}l=u;return}function Ha(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0;if(!d){d=1797285236;e=2036477234;f=857760878;g=1634760805}else{g=Vg(d)|0;f=Vg(d+4|0)|0;e=Vg(d+8|0)|0;d=Vg(d+12|0)|0}r=Vg(c)|0;q=Vg(c+4|0)|0;p=Vg(c+8|0)|0;o=Vg(c+12|0)|0;n=Vg(c+16|0)|0;m=Vg(c+20|0)|0;l=Vg(c+24|0)|0;k=Vg(c+28|0)|0;j=Vg(b)|0;i=Vg(b+4|0)|0;h=Vg(b+8|0)|0;s=0;b=Vg(b+12|0)|0;c=g;do{L=r+c|0;A=Bh(j^L,16)|0;z=A+n|0;M=Bh(z^r,12)|0;A=Bh(M+L^A,8)|0;w=Bh(A+z^M,7)|0;H=q+f|0;u=Bh(i^H,16)|0;t=u+m|0;I=Bh(t^q,12)|0;u=Bh(I+H^u,8)|0;N=Bh(u+t^I,7)|0;C=p+e|0;v=Bh(h^C,16)|0;B=v+l|0;D=Bh(B^p,12)|0;v=Bh(D+C^v,8)|0;J=Bh(v+B^D,7)|0;x=o+d|0;F=Bh(b^x,16)|0;g=F+k|0;y=Bh(g^o,12)|0;F=Bh(y+x^F,8)|0;E=Bh(F+g^y,7)|0;K=Bh(F^N+(M+L),16)|0;G=Bh(K+(v+B)^N,12)|0;c=G+(N+(M+L))|0;b=Bh(c^K,8)|0;l=b+(K+(v+B))|0;q=Bh(l^G,7)|0;G=Bh(J+(I+H)^A,16)|0;B=Bh(G+(F+g)^J,12)|0;f=B+(J+(I+H))|0;j=Bh(f^G,8)|0;k=j+(G+(F+g))|0;p=Bh(k^B,7)|0;B=Bh(E+(D+C)^u,16)|0;g=Bh(B+(A+z)^E,12)|0;e=g+(E+(D+C))|0;i=Bh(e^B,8)|0;n=i+(B+(A+z))|0;o=Bh(n^g,7)|0;v=Bh(y+x+w^v,16)|0;g=Bh(v+(u+t)^w,12)|0;d=g+(y+x+w)|0;h=Bh(d^v,8)|0;m=h+(v+(u+t))|0;r=Bh(m^g,7)|0;s=s+1|0}while((s|0)!=10);ng(a,c);ng(a+4|0,f);ng(a+8|0,e);ng(a+12|0,d);ng(a+16|0,j);ng(a+20|0,i);ng(a+24|0,h);ng(a+28|0,b);return 0}function Ia(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0;n=l;m=l=l+63&-64;l=l+704|0;a:do if(!((e|0)==0&(f|0)==0)){r=c[b+72>>2]|0;p=c[b+72+4>>2]|0;k=Cf(r|0,p|0,3)|0;o=zf(e|0,f|0,3)|0;q=D;i=Cf(e|0,f|0,61)|0;j=D;p=jg(r|0,p|0,o|0,q|0)|0;r=D;c[b+72>>2]=p;c[b+72+4>>2]=r;g=c[b+64>>2]|0;h=c[b+64+4>>2]|0;if(r>>>0<q>>>0|(r|0)==(q|0)&p>>>0<o>>>0){g=jg(g|0,h|0,1,0)|0;h=D;c[b+64>>2]=g;c[b+64+4>>2]=h}j=jg(g|0,h|0,i|0,j|0)|0;c[b+64>>2]=j;c[b+64+4>>2]=D;j=gg(128,0,k&127|0,0)|0;g=D;if(g>>>0>f>>>0|(g|0)==(f|0)&j>>>0>e>>>0){g=0;h=0;while(1){q=a[d+g>>0]|0;r=jg(g|0,h|0,k&127|0,0)|0;a[b+80+r>>0]=q;g=jg(g|0,h|0,1,0)|0;h=D;if(!(h>>>0<f>>>0|(h|0)==(f|0)&g>>>0<e>>>0))break a}}if(!((j|0)==0&(g|0)==0)){h=0;i=0;do{q=a[d+h>>0]|0;r=jg(h|0,i|0,k&127|0,0)|0;a[b+80+r>>0]=q;h=jg(h|0,i|0,1,0)|0;i=D}while(i>>>0<g>>>0|(i|0)==(g|0)&h>>>0<j>>>0)}na(b,b+80|0,m,m+640|0);g=gg(e|0,f|0,j|0,g|0)|0;h=D;if(h>>>0>0|(h|0)==0&g>>>0>127){i=d+j|0;do{na(b,i,m,m+640|0);i=i+128|0;g=jg(g|0,h|0,-128,-1)|0;h=D}while(h>>>0>0|(h|0)==0&g>>>0>127);j=i}else j=d+j|0;g=g&127;if(!((g|0)==0&0==0)){h=0;i=0;do{a[b+80+h>>0]=a[j+h>>0]|0;h=jg(h|0,i|0,1,0)|0;i=D}while(i>>>0<0|(i|0)==0&h>>>0<g>>>0)}Wd(m,704)}while(0);l=n;return 0}function Ja(a,b){a=a|0;b=b|0;var c=0,d=0;c=l;d=l=l+63&-64;l=l+160|0;ua(d+120|0,b);ua(d+80|0,d+120|0);ua(d+80|0,d+80|0);pa(d+80|0,b,d+80|0);pa(d+120|0,d+120|0,d+80|0);ua(d+40|0,d+120|0);pa(d+80|0,d+80|0,d+40|0);ua(d+40|0,d+80|0);b=1;do{ua(d+40|0,d+40|0);b=b+1|0}while((b|0)!=5);pa(d+80|0,d+40|0,d+80|0);ua(d+40|0,d+80|0);b=1;do{ua(d+40|0,d+40|0);b=b+1|0}while((b|0)!=10);pa(d+40|0,d+40|0,d+80|0);ua(d,d+40|0);b=1;do{ua(d,d);b=b+1|0}while((b|0)!=20);pa(d+40|0,d,d+40|0);ua(d+40|0,d+40|0);b=1;do{ua(d+40|0,d+40|0);b=b+1|0}while((b|0)!=10);pa(d+80|0,d+40|0,d+80|0);ua(d+40|0,d+80|0);b=1;do{ua(d+40|0,d+40|0);b=b+1|0}while((b|0)!=50);pa(d+40|0,d+40|0,d+80|0);ua(d,d+40|0);b=1;do{ua(d,d);b=b+1|0}while((b|0)!=100);pa(d+40|0,d,d+40|0);ua(d+40|0,d+40|0);b=1;do{ua(d+40|0,d+40|0);b=b+1|0}while((b|0)!=50);pa(d+80|0,d+40|0,d+80|0);ua(d+80|0,d+80|0);b=1;do{ua(d+80|0,d+80|0);b=b+1|0}while((b|0)!=5);pa(a,d+80|0,d+120|0);l=c;return}function Ka(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0;if(!d){d=1797285236;e=2036477234;f=857760878;o=1634760805}else{o=Vg(d)|0;f=Vg(d+4|0)|0;e=Vg(d+8|0)|0;d=Vg(d+12|0)|0}n=Vg(c)|0;m=Vg(c+4|0)|0;l=Vg(c+8|0)|0;k=Vg(c+12|0)|0;t=Vg(c+16|0)|0;s=Vg(c+20|0)|0;r=Vg(c+24|0)|0;q=Vg(c+28|0)|0;j=Vg(b)|0;i=Vg(b+4|0)|0;h=Vg(b+8|0)|0;g=Vg(b+12|0)|0;p=20;b=f;c=o;while(1){B=(Bh(s+c|0,7)|0)^k;y=(Bh(B+c|0,9)|0)^h;v=(Bh(y+B|0,13)|0)^s;E=(Bh(v+y|0,18)|0)^c;x=(Bh(b+n|0,7)|0)^g;u=(Bh(x+b|0,9)|0)^r;H=(Bh(u+x|0,13)|0)^n;A=(Bh(H+u|0,18)|0)^b;f=(Bh(e+j|0,7)|0)^q;G=(Bh(f+e|0,9)|0)^m;D=(Bh(G+f|0,13)|0)^j;w=(Bh(D+G|0,18)|0)^e;F=(Bh(d+t|0,7)|0)^l;C=(Bh(F+d|0,9)|0)^i;z=(Bh(C+F|0,13)|0)^t;o=(Bh(z+C|0,18)|0)^d;n=(Bh(F+E|0,7)|0)^H;m=(Bh(n+E|0,9)|0)^G;l=(Bh(m+n|0,13)|0)^F;c=(Bh(l+m|0,18)|0)^E;j=(Bh(A+B|0,7)|0)^D;i=(Bh(j+A|0,9)|0)^C;k=(Bh(i+j|0,13)|0)^B;b=(Bh(k+i|0,18)|0)^A;t=(Bh(w+x|0,7)|0)^z;h=(Bh(t+w|0,9)|0)^y;g=(Bh(h+t|0,13)|0)^x;e=(Bh(g+h|0,18)|0)^w;s=(Bh(o+f|0,7)|0)^v;r=(Bh(s+o|0,9)|0)^u;q=(Bh(r+s|0,13)|0)^f;d=(Bh(q+r|0,18)|0)^o;if((p|0)<=2)break;else p=p+-2|0}ng(a,c);ng(a+4|0,b);ng(a+8|0,e);ng(a+12|0,d);ng(a+16|0,j);ng(a+20|0,i);ng(a+24|0,h);ng(a+28|0,g);return 0}function La(a,b){a=a|0;b=b|0;var c=0,d=0,e=0;d=l;e=l=l+63&-64;l=l+128|0;ua(e+80|0,b);ua(e+40|0,e+80|0);ua(e+40|0,e+40|0);pa(e+40|0,b,e+40|0);pa(e+80|0,e+80|0,e+40|0);ua(e+80|0,e+80|0);pa(e+80|0,e+40|0,e+80|0);ua(e+40|0,e+80|0);c=1;do{ua(e+40|0,e+40|0);c=c+1|0}while((c|0)!=5);pa(e+80|0,e+40|0,e+80|0);ua(e+40|0,e+80|0);c=1;do{ua(e+40|0,e+40|0);c=c+1|0}while((c|0)!=10);pa(e+40|0,e+40|0,e+80|0);ua(e,e+40|0);c=1;do{ua(e,e);c=c+1|0}while((c|0)!=20);pa(e+40|0,e,e+40|0);ua(e+40|0,e+40|0);c=1;do{ua(e+40|0,e+40|0);c=c+1|0}while((c|0)!=10);pa(e+80|0,e+40|0,e+80|0);ua(e+40|0,e+80|0);c=1;do{ua(e+40|0,e+40|0);c=c+1|0}while((c|0)!=50);pa(e+40|0,e+40|0,e+80|0);ua(e,e+40|0);c=1;do{ua(e,e);c=c+1|0}while((c|0)!=100);pa(e+40|0,e,e+40|0);ua(e+40|0,e+40|0);c=1;do{ua(e+40|0,e+40|0);c=c+1|0}while((c|0)!=50);pa(e+80|0,e+40|0,e+80|0);ua(e+80|0,e+80|0);ua(e+80|0,e+80|0);pa(a,e+80|0,b);l=d;return}function Ma(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0;o=l;k=l=l+63&-64;l=l+16|0;do if(d>>>0>=12){f=b;g=34163;h=f+12|0;do{a[f>>0]=a[g>>0]|0;f=f+1|0;g=g+1|0}while((f|0)<(h|0));f=lb(e)|0;if(!f){jd(k,19);h=yc(k)|0;g=b+11+h|0;if((d+-11|0)>>>0<=h>>>0){f=-31;break}jb(b+11|0,k|0,h+1|0)|0;if((d+-11-h|0)>>>0>=4){a[g>>0]=36;a[g+1>>0]=109;a[g+2>>0]=61;a[g+3>>0]=0;jd(k,c[e+44>>2]|0);f=yc(k)|0;i=g+3+f|0;j=d+-11-h+-3-f|0;if((d+-11-h+-3|0)>>>0<=f>>>0){f=-31;break}jb(g+3|0,k|0,f+1|0)|0;if(j>>>0>=4){a[i>>0]=44;a[i+1>>0]=116;a[i+2>>0]=61;a[i+3>>0]=0;jd(k,c[e+40>>2]|0);f=yc(k)|0;b=i+3+f|0;if((j+-3|0)>>>0<=f>>>0){f=-31;break}jb(i+3|0,k|0,f+1|0)|0;if((j+-3-f|0)>>>0>=4){a[b>>0]=44;a[b+1>>0]=112;a[b+2>>0]=61;a[b+3>>0]=0;jd(k,c[e+48>>2]|0);g=yc(k)|0;h=j+-3-f+-3-g|0;if((j+-3-f+-3|0)>>>0<=g>>>0){f=-31;break}jb(b+3|0,k|0,g+1|0)|0;f=b+3+g+1|0;if(h>>>0>=2?(a[b+3+g>>0]=36,a[b+3+g+1>>0]=0,k=Ib(f,h+-1|0,c[e+16>>2]|0,c[e+20>>2]|0)|0,n=h+-1-((k|0)==-1?0:k)|0,m=(k|0)==-1?f:f+k|0,!((k|0)==-1|n>>>0<2)):0){a[m>>0]=36;a[m+1>>0]=0;e=(Ib(m+1|0,n+-1|0,c[e>>2]|0,c[e+4>>2]|0)|0)!=-1;l=o;return (e?0:-31)|0}else f=-31}else f=-31}else f=-31}else f=-31}}else f=-31;while(0);l=o;return f|0}function Na(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;m=c[d>>2]|0;h=c[d+4>>2]|0;i=c[d+8>>2]|0;j=c[d+12>>2]|0;p=c[d+16>>2]|0;f=c[d+20>>2]|0;g=c[d+24>>2]|0;n=c[d+28>>2]|0;e=c[d+32>>2]|0;d=c[d+36>>2]|0;o=((((((((((((((d*19|0)+16777216|0)>>>25)+m>>26)+h>>25)+i>>26)+j>>25)+p>>26)+f>>25)+g>>26)+n>>25)+e>>26)+d>>25)*19|0)+m>>26;m=((((((((((((((d*19|0)+16777216|0)>>>25)+m>>26)+h>>25)+i>>26)+j>>25)+p>>26)+f>>25)+g>>26)+n>>25)+e>>26)+d>>25)*19|0)+m-(o<<26)|0;l=o+h-(o+h>>25<<25)|0;k=(o+h>>25)+i-((o+h>>25)+i>>26<<26)|0;q=((o+h>>25)+i>>26)+j>>25;j=((o+h>>25)+i>>26)+j-(q<<25)|0;i=q+p-(q+p>>26<<26)|0;h=(q+p>>26)+f-((q+p>>26)+f>>25<<25)|0;o=((q+p>>26)+f>>25)+g>>26;g=((q+p>>26)+f>>25)+g-(o<<26)|0;f=o+n-(o+n>>25<<25)|0;d=((o+n>>25)+e>>26)+d|0;e=(o+n>>25)+e-((o+n>>25)+e>>26<<26)|0;a[b>>0]=m;a[b+1>>0]=m>>>8;a[b+2>>0]=m>>>16;a[b+3>>0]=l<<2|m>>>24;a[b+4>>0]=l>>>6;a[b+5>>0]=l>>>14;a[b+6>>0]=k<<3|l>>>22;a[b+7>>0]=k>>>5;a[b+8>>0]=k>>>13;a[b+9>>0]=j<<5|k>>>21;a[b+10>>0]=j>>>3;a[b+11>>0]=j>>>11;a[b+12>>0]=i<<6|j>>>19;a[b+13>>0]=i>>>2;a[b+14>>0]=i>>>10;a[b+15>>0]=i>>>18;a[b+16>>0]=h;a[b+17>>0]=h>>>8;a[b+18>>0]=h>>>16;a[b+19>>0]=g<<1|h>>>24;a[b+20>>0]=g>>>7;a[b+21>>0]=g>>>15;a[b+22>>0]=f<<3|g>>>23;a[b+23>>0]=f>>>5;a[b+24>>0]=f>>>13;a[b+25>>0]=e<<4|f>>>21;a[b+26>>0]=e>>>4;a[b+27>>0]=e>>>12;a[b+28>>0]=e>>>20|(d&33554431)<<6;a[b+29>>0]=d>>>2;a[b+30>>0]=d>>>10;a[b+31>>0]=(d&33554431)>>>18;return}function Oa(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0,i=0;h=l;i=l=l+63&-64;l=l+320|0;g=i+280|0;f=g+32|0;do{a[g>>0]=a[c>>0]|0;g=g+1|0;c=c+1|0}while((g|0)<(f|0));a[i+280>>0]=a[i+280>>0]&-8;a[i+280+31>>0]=a[i+280+31>>0]&63|64;Ba(i+240|0,e);Ff(i+200|0);pg(i+160|0);uc(i+120|0,i+240|0);Ff(i+80|0);c=0;f=254;while(1){g=c;c=(d[i+280+(f>>>3)>>0]|0)>>>(f&7)&1;g=c^g;fb(i+200|0,i+120|0,g);fb(i+160|0,i+80|0,g);Jb(i+40|0,i+120|0,i+80|0);Jb(i,i+200|0,i+160|0);Kb(i+200|0,i+200|0,i+160|0);Kb(i+160|0,i+120|0,i+80|0);pa(i+80|0,i+40|0,i+200|0);pa(i+160|0,i+160|0,i);ua(i+40|0,i);ua(i,i+200|0);Kb(i+120|0,i+80|0,i+160|0);Jb(i+160|0,i+80|0,i+160|0);pa(i+200|0,i,i+40|0);Jb(i,i,i+40|0);ua(i+160|0,i+160|0);Ca(i+80|0,i);ua(i+120|0,i+120|0);Kb(i+40|0,i+40|0,i+80|0);pa(i+80|0,i+240|0,i+160|0);pa(i+160|0,i,i+40|0);if((f|0)<=0)break;else f=f+-1|0}fb(i+200|0,i+120|0,c);fb(i+160|0,i+80|0,c);Ja(i+160|0,i+160|0);pa(i+200|0,i+200|0,i+160|0);Na(b,i+200|0);l=h;return 0}function Pa(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0;n=l;m=l=l+63&-64;l=l+288|0;a:do if(!((e|0)==0&(f|0)==0)){i=c[b+32>>2]|0;g=c[b+32+4>>2]|0;j=Cf(i|0,g|0,3)|0;k=zf(e|0,f|0,3)|0;k=jg(i|0,g|0,k|0,D|0)|0;c[b+32>>2]=k;c[b+32+4>>2]=D;k=gg(64,0,j&63|0,0)|0;g=D;if(g>>>0>f>>>0|(g|0)==(f|0)&k>>>0>e>>>0){g=0;h=0;while(1){k=a[d+g>>0]|0;m=jg(g|0,h|0,j&63|0,0)|0;a[b+40+m>>0]=k;g=jg(g|0,h|0,1,0)|0;h=D;if(!(h>>>0<f>>>0|(h|0)==(f|0)&g>>>0<e>>>0))break a}}if(!((k|0)==0&(g|0)==0)){h=0;i=0;do{p=a[d+h>>0]|0;o=jg(h|0,i|0,j&63|0,0)|0;a[b+40+o>>0]=p;h=jg(h|0,i|0,1,0)|0;i=D}while(i>>>0<g>>>0|(i|0)==(g|0)&h>>>0<k>>>0)}ta(b,b+40|0,m,m+256|0);g=gg(e|0,f|0,k|0,g|0)|0;h=D;if(h>>>0>0|(h|0)==0&g>>>0>63){i=d+k|0;do{ta(b,i,m,m+256|0);i=i+64|0;g=jg(g|0,h|0,-64,-1)|0;h=D}while(h>>>0>0|(h|0)==0&g>>>0>63);j=i}else j=d+k|0;g=g&63;if(!((g|0)==0&0==0)){h=0;i=0;do{a[b+40+h>>0]=a[j+h>>0]|0;h=jg(h|0,i|0,1,0)|0;i=D}while(i>>>0<0|(i|0)==0&h>>>0<g>>>0)}Wd(m,288)}while(0);l=n;return 0}function Qa(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;h=c[b+56>>2]|0;g=c[b+56+4>>2]|0;if(!((h|0)==0&(g|0)==0)){j=gg(16,0,h|0,g|0)|0;l=D;k=l>>>0>f>>>0|(l|0)==(f|0)&j>>>0>e>>>0?e:j;l=l>>>0>f>>>0|(l|0)==(f|0)&j>>>0>e>>>0?f:l;if(!((k|0)==0&(l|0)==0)){j=0;i=0;do{n=a[d+j>>0]|0;h=jg(h|0,g|0,j|0,i|0)|0;a[b+64+h>>0]=n;j=jg(j|0,i|0,1,0)|0;i=D;h=c[b+56>>2]|0;g=c[b+56+4>>2]|0}while(i>>>0<l>>>0|(i|0)==(l|0)&j>>>0<k>>>0)}n=jg(h|0,g|0,k|0,l|0)|0;j=D;c[b+56>>2]=n;c[b+56+4>>2]=j;if(!(j>>>0<0|(j|0)==0&n>>>0<16)){e=gg(e|0,f|0,k|0,l|0)|0;f=D;Aa(b,b+64|0,16,0);c[b+56>>2]=0;c[b+56+4>>2]=0;d=d+k|0;m=6}}else m=6;if((m|0)==6){g=e&-16;if(f>>>0>0|(f|0)==0&e>>>0>15){e=gg(e|0,f|0,g|0,f|0)|0;n=D;Aa(b,d,g,f);d=d+g|0;g=n}else g=f;if(!((e|0)==0&(g|0)==0)){f=0;h=c[b+56>>2]|0;i=c[b+56+4>>2]|0;j=0;do{m=a[d+f>>0]|0;n=jg(h|0,i|0,f|0,j|0)|0;a[b+64+n>>0]=m;f=jg(f|0,j|0,1,0)|0;j=D;h=c[b+56>>2]|0;i=c[b+56+4>>2]|0}while(j>>>0<g>>>0|(j|0)==(g|0)&f>>>0<e>>>0);n=jg(h|0,i|0,e|0,g|0)|0;c[b+56>>2]=n;c[b+56+4>>2]=D}}return}function Ra(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=l;f=l=l+63&-64;l=l+368|0;if(!((a|0)==0|(b|0)==0)){Kc(f,0,0,64)|0;ng(f+360|0,c[b+48>>2]|0);sg(f,f+360|0,4,0)|0;ng(f+360|0,c[b+4>>2]|0);sg(f,f+360|0,4,0)|0;ng(f+360|0,c[b+44>>2]|0);sg(f,f+360|0,4,0)|0;ng(f+360|0,c[b+40>>2]|0);sg(f,f+360|0,4,0)|0;ng(f+360|0,19);sg(f,f+360|0,4,0)|0;ng(f+360|0,d);sg(f,f+360|0,4,0)|0;ng(f+360|0,c[b+12>>2]|0);sg(f,f+360|0,4,0)|0;d=c[b+8>>2]|0;if(d|0?(sg(f,d,c[b+12>>2]|0,0)|0,c[b+56>>2]&1|0):0){Wd(c[b+8>>2]|0,c[b+12>>2]|0);c[b+12>>2]=0}ng(f+360|0,c[b+20>>2]|0);sg(f,f+360|0,4,0)|0;d=c[b+16>>2]|0;if(d|0)sg(f,d,c[b+20>>2]|0,0)|0;ng(f+360|0,c[b+28>>2]|0);sg(f,f+360|0,4,0)|0;d=c[b+24>>2]|0;if(d|0?(sg(f,d,c[b+28>>2]|0,0)|0,c[b+56>>2]&2|0):0){Wd(c[b+24>>2]|0,c[b+28>>2]|0);c[b+28>>2]=0}ng(f+360|0,c[b+36>>2]|0);sg(f,f+360|0,4,0)|0;d=c[b+32>>2]|0;if(d|0)sg(f,d,c[b+36>>2]|0,0)|0;gf(f,a,64)|0}l=e;return}function Sa(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0;j=l;k=l=l+63&-64;l=l+496|0;c[k+360>>2]=0;ng(k+360|0,d);if(d>>>0<65){if((Kc(k,0,0,d)|0)>=0){sg(k,k+360|0,4,0)|0;sg(k,e,f,0)|0;gf(k,b,d)|0}}else a:do if((Kc(k,0,0,64)|0)>=0?(sg(k,k+360|0,4,0)|0,sg(k,e,f,0)|0,(gf(k,k+432|0,64)|0)>=0):0){g=b;h=k+432|0;i=g+32|0;do{a[g>>0]=a[h>>0]|0;g=g+1|0;h=h+1|0}while((g|0)<(i|0));g=k+368|0;h=k+432|0;i=g+64|0;do{a[g>>0]=a[h>>0]|0;g=g+1|0;h=h+1|0}while((g|0)<(i|0));if((d+-32|0)>>>0>64){f=d+-32|0;e=b+32|0;do{if((Wc(k+432|0,64,k+368|0,64,0,0,0)|0)<0)break a;g=e;h=k+432|0;i=g+32|0;do{a[g>>0]=a[h>>0]|0;g=g+1|0;h=h+1|0}while((g|0)<(i|0));f=f+-32|0;e=e+32|0;g=k+368|0;h=k+432|0;i=g+64|0;do{a[g>>0]=a[h>>0]|0;g=g+1|0;h=h+1|0}while((g|0)<(i|0))}while(f>>>0>64)}else{f=d+-32|0;e=b+32|0}if((Wc(k+432|0,f,k+368|0,64,0,0,0)|0)>=0)jb(e|0,k+432|0,f|0)|0}while(0);Wd(k,357);l=j;return}function Ta(b,e,f,g,h,i,j,k){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;var m=0,n=0,o=0,p=0;o=l;p=l=l+63&-64;l=l+112|0;if(!((f|0)==0&(g|0)==0)){n=p+16|0;m=n+32|0;do{a[n>>0]=a[k>>0]|0;n=n+1|0;k=k+1|0}while((n|0)<(m|0));k=d[h+4>>0]|d[h+4+1>>0]<<8|d[h+4+2>>0]<<16|d[h+4+3>>0]<<24;c[p>>2]=d[h>>0]|d[h+1>>0]<<8|d[h+2>>0]<<16|d[h+3>>0]<<24;c[p+4>>2]=k;k=8;while(1){a[p+k>>0]=i;i=Cf(i|0,j|0,8)|0;k=k+1|0;if((k|0)==16)break;else j=D}if(g>>>0>0|(g|0)==0&f>>>0>63){k=b;i=f;while(1){Sg(p+48|0,p,p+16|0,0)|0;b=0;do{a[k+b>>0]=a[p+48+b>>0]^a[e+b>>0];b=b+1|0}while((b|0)!=64);b=1;j=8;while(1){f=p+j|0;b=(d[f>>0]|0)+b|0;a[f>>0]=b;j=j+1|0;if((j|0)==16)break;else b=b>>>8}j=jg(i|0,g|0,-64,-1)|0;g=D;b=k+64|0;e=e+64|0;if(g>>>0>0|(g|0)==0&j>>>0>63){k=b;i=j}else break}}else j=f;if(!((j|0)==0&(g|0)==0)?(Sg(p+48|0,p,p+16|0,0)|0,j|0):0){g=0;do{a[b+g>>0]=a[p+48+g>>0]^a[e+g>>0];g=g+1|0}while((g|0)!=(j|0))}Wd(p+48|0,64);Wd(p+16|0,32)}l=o;return 0}function Ua(b,c,d,e,f,g,h){b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,m=0;j=l;k=l=l+63&-64;l=l+352|0;Ha(k+256|0,g,h,0)|0;if(b>>>0>=d>>>0?0<f>>>0|0==(f|0)&(b-d|0)>>>0<e>>>0:0)i=5;else if(d>>>0>=b>>>0?0<f>>>0|0==(f|0)&(d-b|0)>>>0<e>>>0:0)i=5;if((i|0)==5){Id(b|0,d|0,e|0)|0;d=b}h=k+288|0;i=h+32|0;do{a[h>>0]=0;h=h+1|0}while((h|0)<(i|0));h=f>>>0>0|(f|0)==0&e>>>0>32?32:e;i=f>>>0>0|(f|0)==0&e>>>0>32?0:f;if(!((h|0)==0&(i|0)==0)){m=gg(-2,-1,(~f>>>0>4294967295|(~f|0)==-1&~e>>>0>4294967263?~e:-33)|0,(~f>>>0>4294967295|(~f|0)==-1&~e>>>0>4294967263?~f:-1)|0)|0;jb(k+288+32|0,d|0,m+1|0)|0}m=jg(h|0,i|0,32,0)|0;Xf(k+288|0,k+288|0,m,D,g+16|0,k+256|0)|0;ch(k,k+288|0)|0;if(!((h|0)==0&(i|0)==0)){m=gg(-2,-1,(~f>>>0>4294967295|(~f|0)==-1&~e>>>0>4294967263?~e:-33)|0,(~f>>>0>4294967295|(~f|0)==-1&~e>>>0>4294967263?~f:-1)|0)|0;jb(b|0,k+288+32|0,m+1|0)|0}Wd(k+288|0,64);if(f>>>0>0|(f|0)==0&e>>>0>32){m=gg(e|0,f|0,h|0,i|0)|0;nf(b+h|0,d+h|0,m,D,g+16|0,1,0,k+256|0)|0}Wd(k+256|0,32);ig(k,b,e,f)|0;bh(k,c)|0;Wd(k,256);l=j;return 0}function Va(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;i=l;h=l=l+63&-64;l=l+16|0;f=c[b+20>>2]|0;g=c[b+4>>2]|0;c[b+20>>2]=0;c[b+4>>2]=0;j=(jc(d,34138,8)|0)==0;d=j?d+8|0:d;do if((j?(jc(d,34147,3)|0)==0:0)?(e=rc(d+3|0,h)|0,(e|0)!=0):0)if((c[h>>2]|0)==19)if(!(jc(e,34151,3)|0)){d=rc(e+3|0,h)|0;if(!d){d=-32;break}c[b+44>>2]=c[h>>2];if(!(jc(d,34155,3)|0)){d=rc(d+3|0,h)|0;if(!d){d=-32;break}c[b+40>>2]=c[h>>2];if(!(jc(d,34159,3)|0)){d=rc(d+3|0,h)|0;if(!d){d=-32;break}j=c[h>>2]|0;c[b+48>>2]=j;c[b+52>>2]=j;if((a[d>>0]|0)==36){c[h>>2]=f;d=xc(c[b+16>>2]|0,h,d+1|0)|0;if(!d){d=-32;break}c[b+20>>2]=c[h>>2];if((a[d>>0]|0)==36){c[h>>2]=g;e=xc(c[b>>2]|0,h,d+1|0)|0;if(!e){d=-32;break}c[b+4>>2]=c[h>>2];d=lb(b)|0;if(!d)d=(a[e>>0]|0)==0?0:-32}else d=-32}else d=-32}else d=-32}else d=-32}else d=-32;else d=-26;else d=-32;while(0);l=i;return d|0}function Wa(b,e,f,g,h,i){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;var j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0;q=l;r=l=l+63&-64;l=l+112|0;if(!((f|0)==0&(g|0)==0)){k=r+16|0;j=k+32|0;do{a[k>>0]=a[i>>0]|0;k=k+1|0;i=i+1|0}while((k|0)<(j|0));k=d[h+4>>0]|d[h+4+1>>0]<<8|d[h+4+2>>0]<<16|d[h+4+3>>0]<<24;c[r>>2]=d[h>>0]|d[h+1>>0]<<8|d[h+2>>0]<<16|d[h+3>>0]<<24;c[r+4>>2]=k;c[r+8>>2]=0;c[r+8+4>>2]=0;if(g>>>0>0|(g|0)==0&f>>>0>63){k=e;h=f;do{Pg(r+48|0,r,r+16|0,0)|0;i=0;do{a[b+i>>0]=a[r+48+i>>0]^a[k+i>>0];i=i+1|0}while((i|0)!=64);i=1;j=8;while(1){f=r+j|0;i=(d[f>>0]|0)+i|0;a[f>>0]=i;j=j+1|0;if((j|0)==16)break;else i=i>>>8}h=jg(h|0,g|0,-64,-1)|0;g=D;b=b+64|0;k=k+64|0}while(g>>>0>0|(g|0)==0&h>>>0>63);if(!((h|0)==0&(g|0)==0)){n=b;o=h;p=k;m=8}}else{n=b;o=f;p=e;m=8}if((m|0)==8?(Pg(r+48|0,r,r+16|0,0)|0,o|0):0){i=0;do{a[n+i>>0]=a[r+48+i>>0]^a[p+i>>0];i=i+1|0}while((i|0)!=(o|0))}Wd(r+48|0,64);Wd(r+16|0,32)}l=q;return 0}function Xa(b,e,f,g,h,i){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;var j=0,k=0,m=0,n=0,o=0,p=0,q=0,r=0;q=l;r=l=l+63&-64;l=l+112|0;if(!((f|0)==0&(g|0)==0)){k=r+16|0;j=k+32|0;do{a[k>>0]=a[i>>0]|0;k=k+1|0;i=i+1|0}while((k|0)<(j|0));k=d[h+4>>0]|d[h+4+1>>0]<<8|d[h+4+2>>0]<<16|d[h+4+3>>0]<<24;c[r>>2]=d[h>>0]|d[h+1>>0]<<8|d[h+2>>0]<<16|d[h+3>>0]<<24;c[r+4>>2]=k;c[r+8>>2]=0;c[r+8+4>>2]=0;if(g>>>0>0|(g|0)==0&f>>>0>63){k=e;h=f;do{Rg(r+48|0,r,r+16|0,0)|0;i=0;do{a[b+i>>0]=a[r+48+i>>0]^a[k+i>>0];i=i+1|0}while((i|0)!=64);i=1;j=8;while(1){f=r+j|0;i=(d[f>>0]|0)+i|0;a[f>>0]=i;j=j+1|0;if((j|0)==16)break;else i=i>>>8}h=jg(h|0,g|0,-64,-1)|0;g=D;b=b+64|0;k=k+64|0}while(g>>>0>0|(g|0)==0&h>>>0>63);if(!((h|0)==0&(g|0)==0)){n=b;o=h;p=k;m=8}}else{n=b;o=f;p=e;m=8}if((m|0)==8?(Rg(r+48|0,r,r+16|0,0)|0,o|0):0){i=0;do{a[n+i>>0]=a[r+48+i>>0]^a[p+i>>0];i=i+1|0}while((i|0)!=(o|0))}Wd(r+48|0,64);Wd(r+16|0,32)}l=q;return 0}function Ya(b,c,d,e,f,g,h){b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,m=0;j=l;k=l=l+63&-64;l=l+352|0;Ka(k+256|0,g,h,0)|0;if(b>>>0>=d>>>0?0<f>>>0|0==(f|0)&(b-d|0)>>>0<e>>>0:0)i=5;else if(d>>>0>=b>>>0?0<f>>>0|0==(f|0)&(d-b|0)>>>0<e>>>0:0)i=5;if((i|0)==5){Id(b|0,d|0,e|0)|0;d=b}h=k+288|0;i=h+32|0;do{a[h>>0]=0;h=h+1|0}while((h|0)<(i|0));h=f>>>0>0|(f|0)==0&e>>>0>32?32:e;i=f>>>0>0|(f|0)==0&e>>>0>32?0:f;if(!((h|0)==0&(i|0)==0)){m=gg(-2,-1,(~f>>>0>4294967295|(~f|0)==-1&~e>>>0>4294967263?~e:-33)|0,(~f>>>0>4294967295|(~f|0)==-1&~e>>>0>4294967263?~f:-1)|0)|0;jb(k+288+32|0,d|0,m+1|0)|0}m=jg(h|0,i|0,32,0)|0;Sf(k+288|0,k+288|0,m,D,g+16|0,k+256|0)|0;ch(k,k+288|0)|0;if(!((h|0)==0&(i|0)==0)){m=gg(-2,-1,(~f>>>0>4294967295|(~f|0)==-1&~e>>>0>4294967263?~e:-33)|0,(~f>>>0>4294967295|(~f|0)==-1&~e>>>0>4294967263?~f:-1)|0)|0;jb(b|0,k+288+32|0,m+1|0)|0}Wd(k+288|0,64);if(f>>>0>0|(f|0)==0&e>>>0>32){m=gg(e|0,f|0,h|0,i|0)|0;jf(b+h|0,d+h|0,m,D,g+16|0,1,0,k+256|0)|0}Wd(k+256|0,32);ig(k,b,e,f)|0;bh(k,c)|0;Wd(k,256);l=j;return 0}function Za(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;f=c[b+56>>2]|0;e=c[b+56+4>>2]|0;if(!((f|0)==0&(e|0)==0)){g=1;while(1){a[b+64+f>>0]=g;f=jg(f|0,e|0,1,0)|0;e=D;if(!(e>>>0<0|(e|0)==0&f>>>0<16))break;else g=0}a[b+80>>0]=1;Aa(b,b+64|0,16,0)}f=c[b+24>>2]|0;g=(c[b+28>>2]|0)+(f>>>26)|0;k=(g>>>26)+(c[b+32>>2]|0)|0;i=(k>>>26)+(c[b+36>>2]|0)|0;h=((i>>>26)*5|0)+(c[b+20>>2]|0)|0;l=((((h&67108863)+5|0)>>>26)+((h>>>26)+(f&67108863))|0)>>>26;j=(i|-67108864)+((((l+(g&67108863)|0)>>>26)+(k&67108863)|0)>>>26)|0;f=(((h&67108863)+5|0)>>>26)+((h>>>26)+(f&67108863))&67108863&(j>>>31)+-1|j>>31&(h>>>26)+(f&67108863);k=((l+(g&67108863)|0)>>>26)+k&67108863&(j>>>31)+-1|j>>31&(k&67108863);h=jg(h+5&67108863&(j>>>31)+-1|j>>31&(h&67108863)|f<<26|0,0,c[b+40>>2]|0,0)|0;e=D;f=jg(f>>>6|(l+g&67108863&(j>>>31)+-1|j>>31&(g&67108863))<<20|0,0,c[b+44>>2]|0,0)|0;e=jg(f|0,D|0,e|0,0)|0;f=D;g=jg((l+g&67108863&(j>>>31)+-1|j>>31&(g&67108863))>>>12|k<<14|0,0,c[b+48>>2]|0,0)|0;f=jg(g|0,D|0,f|0,0)|0;g=D;i=jg(k>>>18|((j>>>31)+-1&j|j>>31&i)<<8|0,0,c[b+52>>2]|0,0)|0;g=jg(i|0,D|0,g|0,0)|0;ng(d,h);ng(d+4|0,e);ng(d+8|0,f);ng(d+12|0,g);Wd(b,88);return}function _a(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;if(b){m=ma(c[b+12>>2]<<3)|0;if(!m)e=-22;else{kb(b,d,m);i=c[d>>2]|0;f=a[d+8>>0]|0;e=(i|0)==0&f<<24>>24==0?2:0;h=c[b+16>>2]|0;k=S(h,c[d+4>>2]|0)|0;l=c[b+12>>2]|0;f=e+k+(S(l,f&255)|0)|0;a:do if(e>>>0<l>>>0){l=f;g=(((f>>>0)%(h>>>0)|0|0)==0?h+-1|0:-1)+f|0;f=h;while(1){k=((l>>>0)%(f>>>0)|0|0)==1?l+-1|0:g;f=m+(e<<3)|0;h=c[f>>2]|0;f=Te(c[f+4>>2]|0,0,c[b+20>>2]|0,0)|0;g=D;j=(i|0)==0;if(j?(a[d+8>>0]|0)==0:0){f=c[d+4>>2]|0;g=0}c[d+12>>2]=e;h=Gb(b,d,h,((g|0)==0?(f|0)==(c[d+4>>2]|0):0)&1)|0;i=c[(c[b>>2]|0)+4>>2]|0;f=ef(c[b+16>>2]|0,0,f|0,g|0)|0;g=i+(l<<10)|0;if(j)ra(i+(k<<10)|0,i+(f<<10)+(h<<10)|0,g);else qa(i+(k<<10)|0,i+(f<<10)+(h<<10)|0,g);e=e+1|0;if(e>>>0>=(c[b+12>>2]|0)>>>0)break a;l=l+1|0;g=k+1|0;f=c[b+16>>2]|0;i=c[d>>2]|0}}while(0);va(m);e=0}}else e=0;return e|0}function $a(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0;if(b<<5|0){h=0;do{c[g+(h<<2)>>2]=Vg(a+(h<<2)|0)|0;h=h+1|0}while((h|0)!=(b<<5|0))}if(!((d|0)==0&(e|0)==0)){h=0;i=0;do{k=ef(h|0,i|0,b<<5|0,0)|0;Ve(f+(k<<2)|0,g,b<<7);Yc(g,g+(b<<5<<2)|0,g+(b<<6<<2)|0,b);k=ef(h|1|0,i|0,b<<5|0,0)|0;Ve(f+(k<<2)|0,g+(b<<5<<2)|0,b<<7);Yc(g+(b<<5<<2)|0,g,g+(b<<6<<2)|0,b);h=jg(h|0,i|0,2,0)|0;i=D}while(i>>>0<e>>>0|(i|0)==(e|0)&h>>>0<d>>>0);h=jg(d|0,e|0,-1,-1)|0;i=D;j=0;k=0;do{l=Mg(g,b)|0;l=ef(l&h|0,D&i|0,b<<5|0,0)|0;Ae(g,f+(l<<2)|0,b<<7);Yc(g,g+(b<<5<<2)|0,g+(b<<6<<2)|0,b);l=Mg(g+(b<<5<<2)|0,b)|0;l=ef(l&h|0,D&i|0,b<<5|0,0)|0;Ae(g+(b<<5<<2)|0,f+(l<<2)|0,b<<7);Yc(g+(b<<5<<2)|0,g,g+(b<<6<<2)|0,b);j=jg(j|0,k|0,2,0)|0;k=D}while(k>>>0<e>>>0|(k|0)==(e|0)&j>>>0<d>>>0)}if(b<<5|0){h=0;do{ng(a+(h<<2)|0,c[g+(h<<2)>>2]|0);h=h+1|0}while((h|0)!=(b<<5|0))}return}function ab(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0;j=l;i=l=l+63&-64;l=l+96|0;Ha(i,f,g,0)|0;Gg(i+32|0,32,0,f+16|0,i)|0;if(!(Vf(c,b,d,e,i+32|0)|0))if(!a)c=0;else{if(b>>>0>=a>>>0?0<e>>>0|0==(e|0)&(b-a|0)>>>0<d>>>0:0)h=8;else if(a>>>0>=b>>>0?0<e>>>0|0==(e|0)&(a-b|0)>>>0<d>>>0:0)h=8;if((h|0)==8){Id(a|0,b|0,d|0)|0;b=a}c=e>>>0>0|(e|0)==0&d>>>0>32?32:d;g=e>>>0>0|(e|0)==0&d>>>0>32?0:e;if((c|0)==0&(g|0)==0)Xf(i+32|0,i+32|0,32,0,f+16|0,i)|0;else{h=gg(-2,-1,(~e>>>0>4294967295|(~e|0)==-1&~d>>>0>4294967263?~d:-33)|0,(~e>>>0>4294967295|(~e|0)==-1&~d>>>0>4294967263?~e:-1)|0)|0;jb(i+32+32|0,b|0,h+1|0)|0;k=jg(c|0,g|0,32,0)|0;Xf(i+32|0,i+32|0,k,D,f+16|0,i)|0;jb(a|0,i+32+32|0,h+1|0)|0}if(e>>>0>0|(e|0)==0&d>>>0>32){k=gg(d|0,e|0,c|0,g|0)|0;nf(a+c|0,b+c|0,k,D,f+16|0,1,0,i)|0}Wd(i,32);c=0}else{Wd(i,32);c=-1}l=j;return c|0}function bb(a,b){a=a|0;b=b|0;var c=0,e=0,f=0;f=l;c=l=l+63&-64;l=l+208|0;Ba(a+40|0,b);Ff(a+80|0);ua(c+160|0,a+40|0);pa(c+120|0,c+160|0,1152);Jb(c+160|0,c+160|0,a+80|0);Kb(c+120|0,c+120|0,a+80|0);ua(c+80|0,c+120|0);pa(c+80|0,c+80|0,c+120|0);ua(a,c+80|0);pa(a,a,c+120|0);pa(a,a,c+160|0);La(a,a);pa(a,a,c+80|0);pa(a,a,c+160|0);ua(c+40|0,a);pa(c+40|0,c+40|0,c+120|0);Jb(c,c+40|0,c+160|0);if(Ke(c)|0){Kb(c,c+40|0,c+160|0);if(!(Ke(c)|0)){pa(a,a,1192);e=4}else a=-1}else e=4;if((e|0)==4){e=Ze(a)|0;if((e|0)==((d[b+31>>0]|0)>>>7|0))hc(a,a);pa(a+120|0,a,a+40|0);a=0}l=f;return a|0}function cb(a,b,d,e,f,g,h,i,j,k,l){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;l=l|0;var m=0,n=0,o=0;o=ef(j|0,0,i|0,0)|0;n=D;do if(n>>>0>0|(n|0)==0&o>>>0>1073741823){c[8326]=27;a=-1}else{if(h>>>0>0|(h|0)==0&g>>>0>4294967295){c[8326]=27;a=-1;break}o=jg(g|0,h|0,-1,-1)|0;if(h>>>0<0|(h|0)==0&g>>>0<2|((o&g|0)!=0|(D&h|0)!=0)){c[8326]=22;a=-1;break}if((i|0)==0|(j|0)==0){c[8326]=22;a=-1;break}if(!(i>>>0>16777215?1:(33554431/(j>>>0)|0)>>>0<i>>>0)?!(0<h>>>0|(0==(h|0)?(33554431/(i>>>0)|0)>>>0<g>>>0:0)):0){n=S(i<<7,j)|0;o=S(i<<7,g)|0;if((n+o|0)>>>0<o>>>0){c[8326]=12;a=-1;break}m=n+o+(i<<8|64)|0;if(m>>>0<(i<<8|64)>>>0){c[8326]=12;a=-1;break}if((c[a+8>>2]|0)>>>0<m>>>0?(dh(a),(sd(a,m)|0)==0):0){a=-1;break}m=c[a+4>>2]|0;gc(b,d,e,f,m,n);a=0;do{$a(m+(S(i<<7,a)|0)|0,i,g,h,m+n|0,m+n+o|0);a=a+1|0}while((a|0)!=(j|0));gc(b,d,m,n,k,l);a=0;break}c[8326]=12;a=-1}while(0);return a|0}function db(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0;j=l;i=l=l+63&-64;l=l+96|0;Ka(i,f,g,0)|0;Bg(i+32|0,32,0,f+16|0,i)|0;if(!(Vf(c,b,d,e,i+32|0)|0))if(!a)c=0;else{if(b>>>0>=a>>>0?0<e>>>0|0==(e|0)&(b-a|0)>>>0<d>>>0:0)h=8;else if(a>>>0>=b>>>0?0<e>>>0|0==(e|0)&(a-b|0)>>>0<d>>>0:0)h=8;if((h|0)==8){Id(a|0,b|0,d|0)|0;b=a}c=e>>>0>0|(e|0)==0&d>>>0>32?32:d;g=e>>>0>0|(e|0)==0&d>>>0>32?0:e;if((c|0)==0&(g|0)==0)Sf(i+32|0,i+32|0,32,0,f+16|0,i)|0;else{h=gg(-2,-1,(~e>>>0>4294967295|(~e|0)==-1&~d>>>0>4294967263?~d:-33)|0,(~e>>>0>4294967295|(~e|0)==-1&~d>>>0>4294967263?~e:-1)|0)|0;jb(i+32+32|0,b|0,h+1|0)|0;k=jg(c|0,g|0,32,0)|0;Sf(i+32|0,i+32|0,k,D,f+16|0,i)|0;jb(a|0,i+32+32|0,h+1|0)|0}if(e>>>0>0|(e|0)==0&d>>>0>32){k=gg(d|0,e|0,c|0,g|0)|0;jf(a+c|0,b+c|0,k,D,f+16|0,1,0,i)|0}Wd(i,32);c=0}else{Wd(i,32);c=-1}l=j;return c|0}function eb(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,i=0;f=l;g=l=l+63&-64;l=l+464|0;e=0;do{i=a[c+e>>0]|0;h=e<<1;a[g+400+h>>0]=i&15;a[g+400+(h|1)>>0]=(i&255)>>>4;e=e+1|0}while((e|0)!=32);e=0;c=0;do{i=g+400+c|0;h=(d[i>>0]|0)+e|0;e=(h<<24)+134217728>>28;a[i>>0]=h-(e<<4);c=c+1|0}while((c|0)!=63);a[g+400+63>>0]=(d[g+400+63>>0]|0)+e;af(b);e=1;do{Nb(g,(e|0)/2|0,a[g+400+e>>0]|0);_b(g+240|0,b,g);Md(b,g+240|0);e=e+2|0}while((e|0)<64);Ce(g+240|0,b);De(g+120|0,g+240|0);nc(g+240|0,g+120|0);De(g+120|0,g+240|0);nc(g+240|0,g+120|0);De(g+120|0,g+240|0);nc(g+240|0,g+120|0);Md(b,g+240|0);e=0;do{Nb(g,(e|0)/2|0,a[g+400+e>>0]|0);_b(g+240|0,b,g);Md(b,g+240|0);e=e+2|0}while((e|0)<64);l=f;return}function fb(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0;x=c[a>>2]|0;v=c[a+4>>2]|0;t=c[a+8>>2]|0;r=c[a+12>>2]|0;p=c[a+16>>2]|0;n=c[a+20>>2]|0;l=c[a+24>>2]|0;j=c[a+28>>2]|0;h=c[a+32>>2]|0;f=c[a+36>>2]|0;w=c[b>>2]|0;u=c[b+4>>2]|0;s=c[b+8>>2]|0;q=c[b+12>>2]|0;o=c[b+16>>2]|0;m=c[b+20>>2]|0;k=c[b+24>>2]|0;i=c[b+28>>2]|0;g=c[b+32>>2]|0;e=c[b+36>>2]|0;c[a>>2]=(w^x)&0-d^x;c[a+4>>2]=(u^v)&0-d^v;c[a+8>>2]=(s^t)&0-d^t;c[a+12>>2]=(q^r)&0-d^r;c[a+16>>2]=(o^p)&0-d^p;c[a+20>>2]=(m^n)&0-d^n;c[a+24>>2]=(k^l)&0-d^l;c[a+28>>2]=(i^j)&0-d^j;c[a+32>>2]=(g^h)&0-d^h;c[a+36>>2]=(e^f)&0-d^f;c[b>>2]=(w^x)&0-d^w;c[b+4>>2]=(u^v)&0-d^u;c[b+8>>2]=(s^t)&0-d^s;c[b+12>>2]=(q^r)&0-d^q;c[b+16>>2]=(o^p)&0-d^o;c[b+20>>2]=(m^n)&0-d^m;c[b+24>>2]=(k^l)&0-d^k;c[b+28>>2]=(i^j)&0-d^i;c[b+32>>2]=(g^h)&0-d^g;c[b+36>>2]=(e^f)&0-d^e;return}function gb(b,e,f,g,h){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,m=0,n=0,o=0,p=0;o=l;p=l=l+63&-64;l=l+112|0;if(!((e|0)==0&(f|0)==0)){j=p+16|0;i=j+32|0;do{a[j>>0]=a[h>>0]|0;j=j+1|0;h=h+1|0}while((j|0)<(i|0));j=d[g+4>>0]|d[g+4+1>>0]<<8|d[g+4+2>>0]<<16|d[g+4+3>>0]<<24;c[p>>2]=d[g>>0]|d[g+1>>0]<<8|d[g+2>>0]<<16|d[g+3>>0]<<24;c[p+4>>2]=j;c[p+8>>2]=0;c[p+8+4>>2]=0;if(f>>>0>0|(f|0)==0&e>>>0>63){do{Pg(b,p,p+16|0,0)|0;h=1;i=8;while(1){j=p+i|0;h=(d[j>>0]|0)+h|0;a[j>>0]=h;i=i+1|0;if((i|0)==16)break;else h=h>>>8}e=jg(e|0,f|0,-64,-1)|0;f=D;b=b+64|0}while(f>>>0>0|(f|0)==0&e>>>0>63);if(!((e|0)==0&(f|0)==0)){m=b;n=e;k=7}}else{m=b;n=e;k=7}if((k|0)==7?(Pg(p+48|0,p,p+16|0,0)|0,n|0):0){h=0;do{a[m+h>>0]=a[p+48+h>>0]|0;h=h+1|0}while((h|0)!=(n|0))}Wd(p+48|0,64);Wd(p+16|0,32)}l=o;return 0}function hb(b,e,f,g,h){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,m=0,n=0,o=0,p=0;o=l;p=l=l+63&-64;l=l+112|0;if(!((e|0)==0&(f|0)==0)){j=p+16|0;i=j+32|0;do{a[j>>0]=a[h>>0]|0;j=j+1|0;h=h+1|0}while((j|0)<(i|0));j=d[g+4>>0]|d[g+4+1>>0]<<8|d[g+4+2>>0]<<16|d[g+4+3>>0]<<24;c[p>>2]=d[g>>0]|d[g+1>>0]<<8|d[g+2>>0]<<16|d[g+3>>0]<<24;c[p+4>>2]=j;c[p+8>>2]=0;c[p+8+4>>2]=0;if(f>>>0>0|(f|0)==0&e>>>0>63){do{Rg(b,p,p+16|0,0)|0;h=1;i=8;while(1){j=p+i|0;h=(d[j>>0]|0)+h|0;a[j>>0]=h;i=i+1|0;if((i|0)==16)break;else h=h>>>8}e=jg(e|0,f|0,-64,-1)|0;f=D;b=b+64|0}while(f>>>0>0|(f|0)==0&e>>>0>63);if(!((e|0)==0&(f|0)==0)){m=b;n=e;k=7}}else{m=b;n=e;k=7}if((k|0)==7?(Rg(p+48|0,p,p+16|0,0)|0,n|0):0){h=0;do{a[m+h>>0]=a[p+48+h>>0]|0;h=h+1|0}while((h|0)!=(n|0))}Wd(p+48|0,64);Wd(p+16|0,32)}l=o;return 0}function ib(b,e,f,g,h){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,m=0,n=0,o=0,p=0;o=l;p=l=l+63&-64;l=l+112|0;if(!((e|0)==0&(f|0)==0)){j=p+16|0;i=j+32|0;do{a[j>>0]=a[h>>0]|0;j=j+1|0;h=h+1|0}while((j|0)<(i|0));j=d[g+4>>0]|d[g+4+1>>0]<<8|d[g+4+2>>0]<<16|d[g+4+3>>0]<<24;c[p>>2]=d[g>>0]|d[g+1>>0]<<8|d[g+2>>0]<<16|d[g+3>>0]<<24;c[p+4>>2]=j;c[p+8>>2]=0;c[p+8+4>>2]=0;if(f>>>0>0|(f|0)==0&e>>>0>63){do{Sg(b,p,p+16|0,0)|0;h=1;i=8;while(1){j=p+i|0;h=(d[j>>0]|0)+h|0;a[j>>0]=h;i=i+1|0;if((i|0)==16)break;else h=h>>>8}e=jg(e|0,f|0,-64,-1)|0;f=D;b=b+64|0}while(f>>>0>0|(f|0)==0&e>>>0>63);if(!((e|0)==0&(f|0)==0)){m=b;n=e;k=7}}else{m=b;n=e;k=7}if((k|0)==7?(Sg(p+48|0,p,p+16|0,0)|0,n|0):0){h=0;do{a[m+h>>0]=a[p+48+h>>0]|0;h=h+1|0}while((h|0)!=(n|0))}Wd(p+48|0,64);Wd(p+16|0,32)}l=o;return 0}function jb(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;if((e|0)>=8192)return da(b|0,d|0,e|0)|0;h=b|0;g=b+e|0;if((b&3)==(d&3)){while(b&3){if(!e)return h|0;a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0;e=e-1|0}e=g&-4|0;f=e-64|0;while((b|0)<=(f|0)){c[b>>2]=c[d>>2];c[b+4>>2]=c[d+4>>2];c[b+8>>2]=c[d+8>>2];c[b+12>>2]=c[d+12>>2];c[b+16>>2]=c[d+16>>2];c[b+20>>2]=c[d+20>>2];c[b+24>>2]=c[d+24>>2];c[b+28>>2]=c[d+28>>2];c[b+32>>2]=c[d+32>>2];c[b+36>>2]=c[d+36>>2];c[b+40>>2]=c[d+40>>2];c[b+44>>2]=c[d+44>>2];c[b+48>>2]=c[d+48>>2];c[b+52>>2]=c[d+52>>2];c[b+56>>2]=c[d+56>>2];c[b+60>>2]=c[d+60>>2];b=b+64|0;d=d+64|0}while((b|0)<(e|0)){c[b>>2]=c[d>>2];b=b+4|0;d=d+4|0}}else{e=g-4|0;while((b|0)<(e|0)){a[b>>0]=a[d>>0]|0;a[b+1>>0]=a[d+1>>0]|0;a[b+2>>0]=a[d+2>>0]|0;a[b+3>>0]=a[d+3>>0]|0;b=b+4|0;d=d+4|0}}while((b|0)<(g|0)){a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0}return h|0}function kb(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0;g=l;h=l=l+63&-64;l=l+4096|0;Ih(h+3072|0);Ih(h+2048|0);if((a|0)!=0&(b|0)!=0?(c[h+2048>>2]=c[b>>2],c[h+2048+4>>2]=0,c[h+2048+8>>2]=c[b+4>>2],c[h+2048+8+4>>2]=0,c[h+2048+16>>2]=d[b+8>>0],c[h+2048+16+4>>2]=0,c[h+2048+24>>2]=c[a+8>>2],c[h+2048+24+4>>2]=0,c[h+2048+32>>2]=c[a+4>>2],c[h+2048+32+4>>2]=0,c[h+2048+40>>2]=c[a+28>>2],c[h+2048+40+4>>2]=0,c[a+12>>2]|0):0){b=0;do{f=b&127;if(!f){i=jg(c[h+2048+48>>2]|0,c[h+2048+48+4>>2]|0,1,0)|0;c[h+2048+48>>2]=i;c[h+2048+48+4>>2]=D;Ih(h);Ih(h+1024|0);qa(h+3072|0,h+2048|0,h);qa(h+3072|0,h,h+1024|0)}j=c[h+1024+(f<<3)+4>>2]|0;i=e+(b<<3)|0;c[i>>2]=c[h+1024+(f<<3)>>2];c[i+4>>2]=j;b=b+1|0}while(b>>>0<(c[a+12>>2]|0)>>>0)}l=g;return}function lb(a){a=a|0;var b=0,d=0;do if(a)if(c[a>>2]|0)if((c[a+4>>2]|0)>>>0>=16){if((c[a+8>>2]|0)==0?c[a+12>>2]|0:0){b=-18;break}b=c[a+20>>2]|0;if((c[a+16>>2]|0)!=0|(b|0)==0)if(b>>>0>=8){if((c[a+24>>2]|0)==0?c[a+28>>2]|0:0){b=-20;break}if((c[a+32>>2]|0)==0?c[a+36>>2]|0:0){b=-21;break}b=c[a+44>>2]|0;if(b>>>0>=8)if(b>>>0<=2097152){d=c[a+48>>2]|0;if(b>>>0>=d<<3>>>0)if((c[a+40>>2]|0)>>>0>=3)if(d)if(d>>>0>16777215)b=-17;else{a=c[a+52>>2]|0;return ((a|0)==0?-28:a>>>0>16777215?-29:0)|0}else b=-16;else b=-12;else b=-14}else b=-15;else b=-14}else b=-6;else b=-19}else b=-2;else b=-1;else b=-25;while(0);return b|0}function mb(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0;k=l;j=l=l+63&-64;l=l+64|0;e=j+8|0;f=e+52|0;do{c[e>>2]=0;e=e+4|0}while((e|0)<(f|0));e=yc(a)|0;c[j+36>>2]=e;c[j+20>>2]=e;c[j+4>>2]=e;h=ma(e)|0;c[j+32>>2]=h;f=ma(e)|0;c[j+16>>2]=f;g=ma(e)|0;c[j>>2]=g;do if((f|0)==0|(g|0)==0|(h|0)==0){va(h);va(f);va(g);e=-22}else{i=ma(e)|0;if(!i){va(h);va(f);va(g);e=-22;break}e=Va(j,a)|0;if(e|0){va(c[j+32>>2]|0);va(c[j+16>>2]|0);va(c[j>>2]|0);va(i);break}d=yb(c[j+40>>2]|0,c[j+44>>2]|0,c[j+52>>2]|0,b,d,c[j+16>>2]|0,c[j+20>>2]|0,i,c[j+4>>2]|0,0,0)|0;va(c[j+32>>2]|0);va(c[j+16>>2]|0);if((d|0)==0?(Uc(i,c[j>>2]|0,c[j+4>>2]|0)|0)==0:0)e=0;else e=-35;va(i);va(c[j>>2]|0)}while(0);l=k;return e|0}function nb(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0;i=b>>>0>0|(b|0)==0&a>>>0>32768?a:32768;h=b>>>0>0|(b|0)==0&a>>>0>32768?b:0;c[g>>2]=8;a:do if(h>>>0<0|(h|0)==0&i>>>0<d>>>5>>>0){c[f>>2]=1;a=eh(i|0,h|0,c[g>>2]<<2|0,0)|0;c[e>>2]=1;a=Cf(a|0,D|0,1)|0;b=D;h=1;do{g=zf(1,0,h|0)|0;f=D;h=h+1|0;if(f>>>0>b>>>0|(f|0)==(b|0)&g>>>0>a>>>0)break a;c[e>>2]=h}while(h>>>0<63)}else{c[e>>2]=1;a=1;b=1;while(1){j=zf(1,0,a|0)|0;k=D;b=b+1|0;if(k>>>0>0|(k|0)==0&j>>>0>d>>>11>>>0)break;c[e>>2]=b;if(b>>>0>=63){a=b;break}else a=b}e=Cf(i|0,h|0,2)|0;e=Cf(e|0,D|0,a|0)|0;j=D;k=j>>>0<0|(j|0)==0&e>>>0<1073741823?e:1073741823;c[f>>2]=(k>>>0)/((c[g>>2]|0)>>>0)|0}while(0);return}function ob(b,e,f,g,h,i,j){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;var k=0,l=0,m=0,n=0,o=0,p=0;a:do if(!g){n=0;l=0;m=0;k=0}else{k=0;n=0;l=0;p=0;while(1){while(1){m=d[f+l>>0]|0;o=(((m&223)+201&255)+65526^((m&223)+201&255)+65520)>>>8;if((o|((m^48)+65526|0)>>>8)&255|0)break;if(!((h|0)!=0&k<<24>>24==0)){m=0;break a}if(!(Og(h,m)|0)){m=0;k=0;break a}l=l+1|0;if(l>>>0<g>>>0)k=0;else{m=0;k=0;break a}}if(n>>>0>=e>>>0)break;m=(m&223)+201&255&o|((m^48)+65526|0)>>>8&(m^48);if(!(k<<24>>24))m=m<<4&255;else{a[b+n>>0]=m|p&255;n=n+1|0;m=p}k=~k;l=l+1|0;if(l>>>0<g>>>0)p=m;else{m=0;break a}}c[8326]=34;m=-1}while(0);if(j|0)c[j>>2]=f+(((k<<24>>24!=0)<<31>>31)+l);if(i|0)c[i>>2]=n;return m|0}function pb(a,b,c,d,e,f,g,h,i,j,k){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;var m=0;m=l;l=l+352|0;tg(m+280|0,64,0,j,k)|0;ch(m,m+280|0)|0;Wd(m+280|0,64);ig(m,g,h,i)|0;b=gg(0,0,h|0,i|0)|0;ig(m,35896,b&15,0)|0;ig(m,c,d,e)|0;b=gg(0,0,d|0,e|0)|0;ig(m,35896,b&15,0)|0;ve(m+272|0,h,i);ig(m,m+272|0,8,0)|0;ve(m+272|0,d,e);ig(m,m+272|0,8,0)|0;bh(m,m+256|0)|0;Wd(m,256);b=Se(m+256|0,f)|0;Wd(m+256|0,16);do if(a)if(!b){tf(a,c,d,e,j,1,k)|0;b=0;break}else{Tb(a|0,0,d|0)|0;b=-1;break}while(0);l=m;return b|0}function qb(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;a:do if((e|0)!=0&(b&3|0)!=0){f=e;while(1){if((a[b>>0]|0)==(d&255)<<24>>24)break a;b=b+1|0;e=f+-1|0;if((e|0)!=0&(b&3|0)!=0)f=e;else{f=e;e=(e|0)!=0;g=5;break}}}else{f=e;e=(e|0)!=0;g=5}while(0);b:do if((g|0)==5)if(e){if((a[b>>0]|0)!=(d&255)<<24>>24){e=S(d&255,16843009)|0;c:do if(f>>>0>3)while(1){h=c[b>>2]^e;if((h&-2139062144^-2139062144)&h+-16843009|0)break;b=b+4|0;f=f+-4|0;if(f>>>0<=3){g=11;break c}}else g=11;while(0);if((g|0)==11)if(!f){f=0;break}while(1){if((a[b>>0]|0)==(d&255)<<24>>24)break b;b=b+1|0;f=f+-1|0;if(!f){f=0;break}}}}else f=0;while(0);return (f|0?b:0)|0}function rb(b,c,d,e,f,g){b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0;i=l;j=l=l+63&-64;l=l+192|0;if((c+-1&255)>63)ba();if((d|0)!=0&e<<24>>24!=0?(e&255)<=64:0){a[j+128>>0]=c;a[j+128+1>>0]=e;a[j+128+2>>0]=1;a[j+128+3>>0]=1;Zg(j+128+4|0);ff(j+128+8|0);c=j+128+16|0;h=c+16|0;do{a[c>>0]=0;c=c+1|0}while((c|0)<(h|0));if(!f){c=j+128+32|0;h=c+16|0;do{a[c>>0]=0;c=c+1|0}while((c|0)<(h|0))}else pf(j+128|0,f);if(!g){c=j+128+48|0;h=c+16|0;do{a[c>>0]=0;c=c+1|0}while((c|0)<(h|0))}else of(j+128|0,g);yd(b,j+128|0);Tb(j+(e&255)|0,0,128-(e&255)|0)|0;jb(j|0,d|0,e&255|0)|0;Fb(b,j,128,0);Wd(j,128);l=i;return}ba()}function sb(a){a=a|0;var b=0,d=0,e=0,f=0;if(a>>>0>=4294967168){c[8326]=12;f=0;return f|0}f=a>>>0<11?16:a+11&-8;e=ma(f+76|0)|0;if(!e){f=0;return f|0}do if(e&63){d=((e+63&-64)+-8-(e+-8)|0)>>>0>15?(e+63&-64)+-8|0:(e+63&-64)+56|0;a=d-(e+-8)|0;b=c[e+-4>>2]|0;if(!(b&3)){c[d>>2]=(c[e+-8>>2]|0)+a;c[d+4>>2]=(b&-8)-a;a=d;break}else{c[d+4>>2]=(b&-8)-a|c[d+4>>2]&1|2;c[d+((b&-8)-a)+4>>2]=c[d+((b&-8)-a)+4>>2]|1;c[e+-4>>2]=a|c[e+-4>>2]&1|2;c[d+4>>2]=c[d+4>>2]|1;wa(e+-8|0,a);a=d;break}}else{a=e+-8|0;d=e+-8|0}while(0);a=a+4|0;b=c[a>>2]|0;if(b&3|0?(b&-8)>>>0>(f+16|0)>>>0:0){e=d+f|0;c[a>>2]=f|b&1|2;c[e+4>>2]=(b&-8)-f|3;c[e+((b&-8)-f)+4>>2]=c[e+((b&-8)-f)+4>>2]|1;wa(e,(b&-8)-f|0)}f=d+8|0;return f|0}function tb(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0;h=l;l=l+192|0;if(d>>>0>128){qe(b)|0;Ia(b,c,d,0)|0;Fe(b,h)|0;d=64;c=h}qe(b)|0;e=h+64|0;f=e+128|0;do{a[e>>0]=54;e=e+1|0}while((e|0)<(f|0));g=(d|0)==0;if(!g?(a[h+64>>0]=a[c>>0]^54,(d|0)!=1):0){e=1;do{f=h+64+e|0;a[f>>0]=a[f>>0]^a[c+e>>0];e=e+1|0}while((e|0)!=(d|0))}Ia(b,h+64|0,128,0)|0;qe(b+208|0)|0;e=h+64|0;f=e+128|0;do{a[e>>0]=92;e=e+1|0}while((e|0)<(f|0));if(!g?(a[h+64>>0]=a[c>>0]^92,(d|0)!=1):0){e=1;do{g=h+64+e|0;a[g>>0]=a[g>>0]^a[c+e>>0];e=e+1|0}while((e|0)!=(d|0))}Ia(b+208|0,h+64|0,128,0)|0;Wd(h+64|0,128);Wd(h,64);l=h;return 0}function ub(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0;h=l;l=l+96|0;if(d>>>0>64){xd(b)|0;Pa(b,c,d,0)|0;Je(b,h)|0;d=32;c=h}xd(b)|0;e=h+32|0;f=e+64|0;do{a[e>>0]=54;e=e+1|0}while((e|0)<(f|0));g=(d|0)==0;if(!g?(a[h+32>>0]=a[c>>0]^54,(d|0)!=1):0){e=1;do{f=h+32+e|0;a[f>>0]=a[f>>0]^a[c+e>>0];e=e+1|0}while((e|0)!=(d|0))}Pa(b,h+32|0,64,0)|0;xd(b+104|0)|0;e=h+32|0;f=e+64|0;do{a[e>>0]=92;e=e+1|0}while((e|0)<(f|0));if(!g?(a[h+32>>0]=a[c>>0]^92,(d|0)!=1):0){e=1;do{g=h+32+e|0;a[g>>0]=a[g>>0]^a[c+e>>0];e=e+1|0}while((e|0)!=(d|0))}Pa(b+104|0,h+32|0,64,0)|0;Wd(h+32|0,64);Wd(h,32);l=h;return 0}function vb(b,c){b=b|0;c=c|0;var e=0,f=0;e=l;f=l=l+63&-64;l=l+16|0;Ge(f,b);a[b>>0]=a[f+(d[c>>0]|0)>>0]|0;a[b+1>>0]=a[f+(d[c+1>>0]|0)>>0]|0;a[b+2>>0]=a[f+(d[c+2>>0]|0)>>0]|0;a[b+3>>0]=a[f+(d[c+3>>0]|0)>>0]|0;a[b+4>>0]=a[f+(d[c+4>>0]|0)>>0]|0;a[b+5>>0]=a[f+(d[c+5>>0]|0)>>0]|0;a[b+6>>0]=a[f+(d[c+6>>0]|0)>>0]|0;a[b+7>>0]=a[f+(d[c+7>>0]|0)>>0]|0;a[b+8>>0]=a[f+(d[c+8>>0]|0)>>0]|0;a[b+9>>0]=a[f+(d[c+9>>0]|0)>>0]|0;a[b+10>>0]=a[f+(d[c+10>>0]|0)>>0]|0;a[b+11>>0]=a[f+(d[c+11>>0]|0)>>0]|0;a[b+12>>0]=a[f+(d[c+12>>0]|0)>>0]|0;a[b+13>>0]=a[f+(d[c+13>>0]|0)>>0]|0;a[b+14>>0]=a[f+(d[c+14>>0]|0)>>0]|0;a[b+15>>0]=a[f+(d[c+15>>0]|0)>>0]|0;l=e;return}function wb(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0;w=c[a>>2]|0;u=c[a+4>>2]|0;s=c[a+8>>2]|0;q=c[a+12>>2]|0;o=c[a+16>>2]|0;m=c[a+20>>2]|0;k=c[a+24>>2]|0;i=c[a+28>>2]|0;g=c[a+32>>2]|0;e=c[a+36>>2]|0;v=(c[b+4>>2]^u)&0-d;t=(c[b+8>>2]^s)&0-d;r=(c[b+12>>2]^q)&0-d;p=(c[b+16>>2]^o)&0-d;n=(c[b+20>>2]^m)&0-d;l=(c[b+24>>2]^k)&0-d;j=(c[b+28>>2]^i)&0-d;h=(c[b+32>>2]^g)&0-d;f=(c[b+36>>2]^e)&0-d;c[a>>2]=(c[b>>2]^w)&0-d^w;c[a+4>>2]=v^u;c[a+8>>2]=t^s;c[a+12>>2]=r^q;c[a+16>>2]=p^o;c[a+20>>2]=n^m;c[a+24>>2]=l^k;c[a+28>>2]=j^i;c[a+32>>2]=h^g;c[a+36>>2]=f^e;return}function xb(b,d,e,f,g,h,i){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;var j=0,k=0;j=l;k=l=l+63&-64;l=l+560|0;he(k+496|0,h,32,0)|0;a[k+496>>0]=a[k+496>>0]&-8;a[k+496+31>>0]=a[k+496+31>>0]&63|64;eg(k,i);Ia(k,k+496+32|0,32,0)|0;Ia(k,e,f,g)|0;Fe(k,k+432|0)|0;Id(b+32|0,h+32|0,32)|0;oa(k+432|0);eb(k+208|0,k+432|0);Mc(b,k+208|0);eg(k,i);Ia(k,b,64,0)|0;Ia(k,e,f,g)|0;Fe(k,k+368|0)|0;oa(k+368|0);la(b+32|0,k+368|0,k+496|0,k+432|0);Wd(k+496|0,64);if(d|0){c[d>>2]=64;c[d+4>>2]=0}l=j;return}function yb(a,b,d,e,f,g,h,i,j,k,m){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;m=m|0;var n=0,o=0,p=0;p=l;o=l=l+63&-64;l=l+64|0;n=ma(j)|0;do if(!n)a=-22;else{c[o>>2]=n;c[o+4>>2]=j;c[o+8>>2]=e;c[o+12>>2]=f;c[o+16>>2]=g;c[o+20>>2]=h;c[o+24>>2]=0;c[o+24+4>>2]=0;c[o+24+8>>2]=0;c[o+24+12>>2]=0;c[o+40>>2]=a;c[o+44>>2]=b;c[o+48>>2]=d;c[o+52>>2]=d;c[o+56>>2]=4;a=dc(o)|0;if(a|0){Wd(n,j);va(n);break}if(i|0)jb(i|0,n|0,j|0)|0;if((k|0)!=0&(m|0)!=0?Ma(k,m,o)|0:0){Wd(n,j);Wd(k,m);va(n);a=-31;break}Wd(n,j);va(n);a=0}while(0);l=p;return a|0}function zb(a,b,c,e,f,g){a=a|0;b=b|0;c=c|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0;k=l;j=l=l+63&-64;l=l+592|0;if(((rd(a+32|0)|0)==0?(Bd(a)|0)==0:0)?(bb(j+328|0,f)|0)==0:0){h=0;i=0;do{i=d[f+h>>0]|0|i;h=h+1|0}while((h|0)!=32);if(i){eg(j,g);Ia(j,a,32,0)|0;Ia(j,f,32,0)|0;Ia(j,b,c,e)|0;Fe(j,j+520|0)|0;oa(j+520|0);Fa(j+208|0,j+520|0,j+328|0,a+32|0);Mc(j+488|0,j+208|0);h=Re(j+488|0,a)|0;h=((j+488|0)==(a|0)?-1:h)|(Uc(a,j+488|0,32)|0)}else h=-1}else h=-1;l=k;return h|0}function Ab(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,m=0,n=0,o=0,p=0;p=l;o=l=l+63&-64;l=l+48|0;if((((((a[f>>0]|0)==36?(a[f+1>>0]|0)==55:0)?(a[f+2>>0]|0)==36:0)?(cg(o+8|0,a[f+3>>0]|0)|0)==0:0)?(j=zf(1,0,c[o+8>>2]|0)|0,k=D,h=Xc(o+4|0,f+4|0)|0,(h|0)!=0):0)?(m=Xc(o,h)|0,(m|0)!=0):0){h=Fh(m)|0;if(!h)h=yc(m)|0;else h=h-m|0;i=h+(m-f)|0;if((!((i+45|0)>>>0>102|(i+45|0)>>>0<h>>>0)?(cb(b,d,e,m,h,j,k,c[o+4>>2]|0,c[o>>2]|0,o+16|0,32)|0)==0:0)?(jb(g|0,f|0,i|0)|0,a[g+i>>0]=36,n=Vc(g+i+1|0,g+102-(g+i+1)|0,o+16|0)|0,Wd(o+16|0,32),(n|0)!=0&n>>>0<(g+102|0)>>>0):0)a[n>>0]=0;else g=0}else g=0;l=p;return g|0}function Bb(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0;j=l;i=l=l+63&-64;l=l+32|0;a:do if(((b|0)!=0?(d=c[b+20>>2]|0,(d|0)!=0):0)?(c[b+4>>2]|0)!=0:0){h=0;while(1){g=0;do{if(!d)d=0;else{f=g&255;e=0;do{c[i>>2]=h;c[i+4>>2]=e;a[i+8>>0]=f;c[i+12>>2]=0;c[i+16>>2]=c[i>>2];c[i+16+4>>2]=c[i+4>>2];c[i+16+8>>2]=c[i+8>>2];c[i+16+12>>2]=c[i+12>>2];d=_a(b,i+16|0)|0;e=e+1|0;if(d|0)break a;d=c[b+20>>2]|0}while(e>>>0<d>>>0)}g=g+1|0}while(g>>>0<4);h=h+1|0;if(h>>>0>=(c[b+4>>2]|0)>>>0){d=0;break}}}else d=0;while(0);l=j;return d|0}function Cb(a,b,d,e,f,g,h,i,j,k,m,n){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;m=m|0;n=n|0;k=l;l=l+336|0;tg(k+264|0,64,0,m,n)|0;ch(k,k+264|0)|0;Wd(k+264|0,64);ig(k,h,i,j)|0;h=gg(0,0,i|0,j|0)|0;ig(k,35896,h&15,0)|0;tf(a,e,f,g,m,1,n)|0;ig(k,a,f,g)|0;h=gg(0,0,f|0,g|0)|0;ig(k,35896,h&15,0)|0;ve(k+256|0,i,j);ig(k,k+256|0,8,0)|0;ve(k+256|0,f,g);ig(k,k+256|0,8,0)|0;bh(k,b)|0;Wd(k,256);if(d|0){c[d>>2]=16;c[d+4>>2]=0}l=k;return 0}
function ha(a,b){a=a|0;b=b|0;var d=0,e=0;d=l;e=l=l+63&-64;l=l+272|0;c[e+256>>2]=c[b>>2];c[e+256+4>>2]=c[b+4>>2];c[e+256+8>>2]=c[b+8>>2];c[e+256+12>>2]=c[b+12>>2];vb(e+256|0,35222);Ge(e+240|0,e+256|0);Ge(e+224|0,e+256|0);Ge(e+208|0,e+256|0);Ge(e+192|0,e+256|0);Ge(e+176|0,e+256|0);Ge(e+160|0,e+256|0);Ge(e+144|0,e+256|0);Ge(e,e+160|0);ce(e,1);Kd(e,e+144|0);Ld(e,1104);Kd(e+144|0,e);ee(e,1);Kd(e+160|0,e);Ge(e,e+192|0);ce(e,1);Kd(e,e+176|0);Ld(e,1104);Kd(e+176|0,e);ee(e,1);Kd(e+192|0,e);Ge(e,e+224|0);ce(e,1);Kd(e,e+208|0);Ld(e,1104);Kd(e+208|0,e);ee(e,1);Kd(e+224|0,e);Ge(e,e+256|0);ce(e,1);Kd(e,e+240|0);Ld(e,1104);Kd(e+240|0,e);ee(e,1);Kd(e+256|0,e);Ge(e,e+176|0);ce(e,2);Kd(e,e+144|0);Ld(e,1120);Kd(e+144|0,e);ee(e,2);Kd(e+176|0,e);Ge(e,e+192|0);ce(e,2);Kd(e,e+160|0);Ld(e,1120);Kd(e+160|0,e);ee(e,2);Kd(e+192|0,e);Ge(e,e+240|0);ce(e,2);Kd(e,e+208|0);Ld(e,1120);Kd(e+208|0,e);ee(e,2);Kd(e+240|0,e);Ge(e,e+256|0);ce(e,2);Kd(e,e+224|0);Ld(e,1120);Kd(e+224|0,e);ee(e,2);Kd(e+256|0,e);Ge(e,e+208|0);ce(e,4);Kd(e,e+144|0);Ld(e,1136);Kd(e+144|0,e);ee(e,4);Kd(e+208|0,e);Ge(e,e+224|0);ce(e,4);Kd(e,e+160|0);Ld(e,1136);Kd(e+160|0,e);ee(e,4);Kd(e+224|0,e);Ge(e,e+240|0);ce(e,4);Kd(e,e+176|0);Ld(e,1136);Kd(e+176|0,e);ee(e,4);Kd(e+240|0,e);Ge(e,e+256|0);ce(e,4);Kd(e,e+192|0);Ld(e,1136);Kd(e+192|0,e);ee(e,4);Kd(e+256|0,e);c[a>>2]=c[e+256>>2];c[a+4>>2]=c[e+256+4>>2];c[a+8>>2]=c[e+256+8>>2];c[a+12>>2]=c[e+256+12>>2];c[a+16>>2]=c[e+240>>2];c[a+16+4>>2]=c[e+240+4>>2];c[a+16+8>>2]=c[e+240+8>>2];c[a+16+12>>2]=c[e+240+12>>2];c[a+32>>2]=c[e+224>>2];c[a+32+4>>2]=c[e+224+4>>2];c[a+32+8>>2]=c[e+224+8>>2];c[a+32+12>>2]=c[e+224+12>>2];c[a+48>>2]=c[e+208>>2];c[a+48+4>>2]=c[e+208+4>>2];c[a+48+8>>2]=c[e+208+8>>2];c[a+48+12>>2]=c[e+208+12>>2];c[a+64>>2]=c[e+192>>2];c[a+64+4>>2]=c[e+192+4>>2];c[a+64+8>>2]=c[e+192+8>>2];c[a+64+12>>2]=c[e+192+12>>2];c[a+80>>2]=c[e+176>>2];c[a+80+4>>2]=c[e+176+4>>2];c[a+80+8>>2]=c[e+176+8>>2];c[a+80+12>>2]=c[e+176+12>>2];c[a+96>>2]=c[e+160>>2];c[a+96+4>>2]=c[e+160+4>>2];c[a+96+8>>2]=c[e+160+8>>2];c[a+96+12>>2]=c[e+160+12>>2];c[a+112>>2]=c[e+144>>2];c[a+112+4>>2]=c[e+144+4>>2];c[a+112+8>>2]=c[e+144+8>>2];c[a+112+12>>2]=c[e+144+12>>2];vb(e+256|0,35206);vb(e+240|0,35206);vb(e+224|0,35206);vb(e+208|0,35206);vb(e+192|0,35206);vb(e+176|0,35206);vb(e+160|0,35206);vb(e+144|0,35206);Kd(e+176|0,e+160|0);Kd(e+224|0,e+240|0);Kd(e+176|0,e+256|0);Kd(e+160|0,e+224|0);Kd(e+208|0,e+256|0);Kd(e+160|0,e+208|0);Kd(e+208|0,e+144|0);Kd(e+208|0,e+192|0);Kd(e+144|0,e+176|0);Kd(e+208|0,e+240|0);Kd(e+192|0,e+176|0);Kd(e+224|0,e+144|0);Kd(e+240|0,e+176|0);Ge(e+80|0,e+144|0);Ge(e+96|0,e+240|0);Ge(e+112|0,e+176|0);Ge(e+48|0,e+224|0);Ge(e+64|0,e+160|0);Kd(e+80|0,e+192|0);Kd(e+96|0,e+224|0);Kd(e+112|0,e+208|0);Kd(e+48|0,e+192|0);Kd(e+64|0,e+256|0);Ge(e+32|0,e+80|0);Ge(e+128|0,e+96|0);Ge(e+16|0,e+80|0);Nd(e+96|0,e+112|0);Nd(e+80|0,e+64|0);Kd(e+16|0,e+128|0);Ld(e+32|0,e+64|0);Ld(e+128|0,e+112|0);Kd(e+64|0,e+112|0);Ld(e+16|0,e+64|0);Ge(e+64|0,e+208|0);Kd(e+64|0,e+256|0);Ld(e+48|0,e+64|0);Kd(e+80|0,e+48|0);Kd(e+96|0,e+48|0);Ge(e+48|0,e+144|0);Kd(e+48|0,e+240|0);Ge(e+64|0,e+176|0);Ge(e+112|0,e+48|0);Kd(e+64|0,e+160|0);Nd(e+112|0,e+64|0);Ld(e+48|0,e+64|0);Kd(e+128|0,e+48|0);Kd(e+80|0,e+16|0);Kd(e+96|0,e+32|0);Kd(e+112|0,e+16|0);Kd(e+128|0,e+32|0);Kd(e+112|0,e+32|0);Ge(e+64|0,e+224|0);Ge(e+48|0,e+192|0);Ge(e+32|0,e+240|0);Ge(e+16|0,e+144|0);Ld(e+64|0,e+208|0);Ld(e+48|0,e+256|0);Ld(e+32|0,e+176|0);Nd(e+16|0,e+160|0);Kd(e+80|0,e+64|0);Kd(e+96|0,e+48|0);Kd(e+112|0,e+32|0);Kd(e+128|0,e+16|0);Ge(e+64|0,e+80|0);Kd(e+64|0,e+96|0);Ld(e+80|0,e+112|0);Ge(e+32|0,e+128|0);Kd(e+32|0,e+80|0);Ge(e+16|0,e+64|0);Ld(e+16|0,e+32|0);Kd(e+16|0,e+96|0);Ge(e+48|0,e+112|0);Kd(e+48|0,e+128|0);Kd(e+80|0,e+96|0);Ld(e+48|0,e+80|0);Kd(e+48|0,e+128|0);Kd(e+112|0,e+48|0);Ge(e+96|0,e+32|0);Kd(e+96|0,e+48|0);Ld(e+96|0,e+128|0);Kd(e+112|0,e+96|0);Kd(e+32|0,e+96|0);Ld(e+32|0,e+16|0);Kd(e+32|0,e+64|0);Ge(e+64|0,e+160|0);Ge(e+128|0,e+176|0);Ge(e+96|0,e+16|0);Kd(e+96|0,e+32|0);Ld(e+96|0,e+160|0);Kd(e+160|0,e+176|0);Ld(e+160|0,e+32|0);Ld(e+176|0,e+16|0);Kd(e+160|0,e+176|0);Kd(e+176|0,e+96|0);Kd(e+64|0,e+256|0);Kd(e+128|0,e+208|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+256|0);Kd(e+256|0,e+208|0);Ld(e+256|0,e+112|0);Ld(e+208|0,e+48|0);Kd(e+256|0,e+208|0);Kd(e+208|0,e+96|0);Kd(e+160|0,e+64|0);Kd(e+256|0,e+64|0);Kd(e+176|0,e+128|0);Kd(e+208|0,e+128|0);Ge(e+64|0,e+144|0);Ge(e+128|0,e+240|0);Kd(e+64|0,e+192|0);Kd(e+128|0,e+224|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+192|0);Kd(e+192|0,e+224|0);Ld(e+192|0,e+112|0);Ld(e+224|0,e+48|0);Kd(e+192|0,e+224|0);Kd(e+224|0,e+96|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+144|0);Kd(e+144|0,e+240|0);Ld(e+144|0,e+32|0);Ld(e+240|0,e+16|0);Kd(e+144|0,e+240|0);Kd(e+240|0,e+80|0);Kd(e+144|0,e+64|0);Kd(e+192|0,e+64|0);Kd(e+240|0,e+128|0);Kd(e+224|0,e+128|0);Kd(e+144|0,e+256|0);Kd(e+240|0,e+160|0);Kd(e+192|0,e+144|0);Kd(e+160|0,e+256|0);Kd(e+256|0,e+240|0);Kd(e+240|0,e+176|0);Kd(e+176|0,e+224|0);Kd(e+192|0,e+176|0);Kd(e+224|0,e+208|0);Kd(e+208|0,e+176|0);Kd(e+160|0,e+208|0);hh(e+256|0);vb(e+256|0,35238);vb(e+240|0,35238);vb(e+192|0,35238);vb(e+160|0,35238);vb(e+208|0,35238);vb(e+144|0,35238);vb(e+224|0,35238);vb(e+176|0,35238);vb(e+256|0,35238);c[e+128>>2]=c[a>>2];c[e+128+4>>2]=c[a+4>>2];c[e+128+8>>2]=c[a+8>>2];c[e+128+12>>2]=c[a+12>>2];c[e+112>>2]=c[a+16>>2];c[e+112+4>>2]=c[a+16+4>>2];c[e+112+8>>2]=c[a+16+8>>2];c[e+112+12>>2]=c[a+16+12>>2];c[e+96>>2]=c[a+32>>2];c[e+96+4>>2]=c[a+32+4>>2];c[e+96+8>>2]=c[a+32+8>>2];c[e+96+12>>2]=c[a+32+12>>2];c[e+80>>2]=c[a+48>>2];c[e+80+4>>2]=c[a+48+4>>2];c[e+80+8>>2]=c[a+48+8>>2];c[e+80+12>>2]=c[a+48+12>>2];c[e+64>>2]=c[a+64>>2];c[e+64+4>>2]=c[a+64+4>>2];c[e+64+8>>2]=c[a+64+8>>2];c[e+64+12>>2]=c[a+64+12>>2];c[e+48>>2]=c[a+80>>2];c[e+48+4>>2]=c[a+80+4>>2];c[e+48+8>>2]=c[a+80+8>>2];c[e+48+12>>2]=c[a+80+12>>2];c[e+32>>2]=c[a+96>>2];c[e+32+4>>2]=c[a+96+4>>2];c[e+32+8>>2]=c[a+96+8>>2];c[e+32+12>>2]=c[a+96+12>>2];c[e+16>>2]=c[a+112>>2];c[e+16+4>>2]=c[a+112+4>>2];c[e+16+8>>2]=c[a+112+8>>2];c[e+16+12>>2]=c[a+112+12>>2];Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+192|0,e+96|0);Kd(e+160|0,e+80|0);Kd(e+208|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+224|0,e+32|0);Kd(e+176|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+192|0,e+96|0);Kd(e+160|0,e+80|0);Kd(e+208|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+224|0,e+32|0);Kd(e+176|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+192|0,e+96|0);Kd(e+160|0,e+80|0);Kd(e+208|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+224|0,e+32|0);Kd(e+176|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+192|0,e+96|0);Kd(e+160|0,e+80|0);Kd(e+208|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+224|0,e+32|0);Kd(e+176|0,e+16|0);c[a+128>>2]=c[e+256>>2];c[a+128+4>>2]=c[e+256+4>>2];c[a+128+8>>2]=c[e+256+8>>2];c[a+128+12>>2]=c[e+256+12>>2];c[a+144>>2]=c[e+240>>2];c[a+144+4>>2]=c[e+240+4>>2];c[a+144+8>>2]=c[e+240+8>>2];c[a+144+12>>2]=c[e+240+12>>2];c[a+160>>2]=c[e+192>>2];c[a+160+4>>2]=c[e+192+4>>2];c[a+160+8>>2]=c[e+192+8>>2];c[a+160+12>>2]=c[e+192+12>>2];c[a+176>>2]=c[e+160>>2];c[a+176+4>>2]=c[e+160+4>>2];c[a+176+8>>2]=c[e+160+8>>2];c[a+176+12>>2]=c[e+160+12>>2];c[a+192>>2]=c[e+208>>2];c[a+192+4>>2]=c[e+208+4>>2];c[a+192+8>>2]=c[e+208+8>>2];c[a+192+12>>2]=c[e+208+12>>2];c[a+208>>2]=c[e+144>>2];c[a+208+4>>2]=c[e+144+4>>2];c[a+208+8>>2]=c[e+144+8>>2];c[a+208+12>>2]=c[e+144+12>>2];c[a+224>>2]=c[e+224>>2];c[a+224+4>>2]=c[e+224+4>>2];c[a+224+8>>2]=c[e+224+8>>2];c[a+224+12>>2]=c[e+224+12>>2];c[a+240>>2]=c[e+176>>2];c[a+240+4>>2]=c[e+176+4>>2];c[a+240+8>>2]=c[e+176+8>>2];c[a+240+12>>2]=c[e+176+12>>2];Pe(e+256|0);Pe(e+240|0);Pe(e+144|0);Pe(e+224|0);vb(e+256|0,35206);vb(e+240|0,35206);vb(e+192|0,35206);vb(e+160|0,35206);vb(e+208|0,35206);vb(e+144|0,35206);vb(e+224|0,35206);vb(e+176|0,35206);Kd(e+144|0,e+224|0);Kd(e+192|0,e+240|0);Kd(e+144|0,e+256|0);Kd(e+224|0,e+192|0);Kd(e+160|0,e+256|0);Kd(e+224|0,e+160|0);Kd(e+160|0,e+176|0);Kd(e+160|0,e+208|0);Kd(e+176|0,e+144|0);Kd(e+160|0,e+240|0);Kd(e+208|0,e+144|0);Kd(e+192|0,e+176|0);Kd(e+240|0,e+144|0);Ge(e+80|0,e+176|0);Ge(e+96|0,e+240|0);Ge(e+112|0,e+144|0);Ge(e+48|0,e+192|0);Ge(e+64|0,e+224|0);Kd(e+80|0,e+208|0);Kd(e+96|0,e+192|0);Kd(e+112|0,e+160|0);Kd(e+48|0,e+208|0);Kd(e+64|0,e+256|0);Ge(e+32|0,e+80|0);Ge(e+128|0,e+96|0);Ge(e+16|0,e+80|0);Nd(e+96|0,e+112|0);Nd(e+80|0,e+64|0);Kd(e+16|0,e+128|0);Ld(e+32|0,e+64|0);Ld(e+128|0,e+112|0);Kd(e+64|0,e+112|0);Ld(e+16|0,e+64|0);Ge(e+64|0,e+160|0);Kd(e+64|0,e+256|0);Ld(e+48|0,e+64|0);Kd(e+80|0,e+48|0);Kd(e+96|0,e+48|0);Ge(e+48|0,e+176|0);Kd(e+48|0,e+240|0);Ge(e+64|0,e+144|0);Ge(e+112|0,e+48|0);Kd(e+64|0,e+224|0);Nd(e+112|0,e+64|0);Ld(e+48|0,e+64|0);Kd(e+128|0,e+48|0);Kd(e+80|0,e+16|0);Kd(e+96|0,e+32|0);Kd(e+112|0,e+16|0);Kd(e+128|0,e+32|0);Kd(e+112|0,e+32|0);Ge(e+64|0,e+192|0);Ge(e+48|0,e+208|0);Ge(e+32|0,e+240|0);Ge(e+16|0,e+176|0);Ld(e+64|0,e+160|0);Ld(e+48|0,e+256|0);Ld(e+32|0,e+144|0);Nd(e+16|0,e+224|0);Kd(e+80|0,e+64|0);Kd(e+96|0,e+48|0);Kd(e+112|0,e+32|0);Kd(e+128|0,e+16|0);Ge(e+64|0,e+80|0);Kd(e+64|0,e+96|0);Ld(e+80|0,e+112|0);Ge(e+32|0,e+128|0);Kd(e+32|0,e+80|0);Ge(e+16|0,e+64|0);Ld(e+16|0,e+32|0);Kd(e+16|0,e+96|0);Ge(e+48|0,e+112|0);Kd(e+48|0,e+128|0);Kd(e+80|0,e+96|0);Ld(e+48|0,e+80|0);Kd(e+48|0,e+128|0);Kd(e+112|0,e+48|0);Ge(e+96|0,e+32|0);Kd(e+96|0,e+48|0);Ld(e+96|0,e+128|0);Kd(e+112|0,e+96|0);Kd(e+32|0,e+96|0);Ld(e+32|0,e+16|0);Kd(e+32|0,e+64|0);Ge(e+64|0,e+224|0);Ge(e+128|0,e+144|0);Ge(e+96|0,e+16|0);Kd(e+96|0,e+32|0);Ld(e+96|0,e+224|0);Kd(e+224|0,e+144|0);Ld(e+224|0,e+32|0);Ld(e+144|0,e+16|0);Kd(e+224|0,e+144|0);Kd(e+144|0,e+96|0);Kd(e+64|0,e+256|0);Kd(e+128|0,e+160|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+256|0);Kd(e+256|0,e+160|0);Ld(e+256|0,e+112|0);Ld(e+160|0,e+48|0);Kd(e+256|0,e+160|0);Kd(e+160|0,e+96|0);Kd(e+224|0,e+64|0);Kd(e+256|0,e+64|0);Kd(e+144|0,e+128|0);Kd(e+160|0,e+128|0);Ge(e+64|0,e+176|0);Ge(e+128|0,e+240|0);Kd(e+64|0,e+208|0);Kd(e+128|0,e+192|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+208|0);Kd(e+208|0,e+192|0);Ld(e+208|0,e+112|0);Ld(e+192|0,e+48|0);Kd(e+208|0,e+192|0);Kd(e+192|0,e+96|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+176|0);Kd(e+176|0,e+240|0);Ld(e+176|0,e+32|0);Ld(e+240|0,e+16|0);Kd(e+176|0,e+240|0);Kd(e+240|0,e+80|0);Kd(e+176|0,e+64|0);Kd(e+208|0,e+64|0);Kd(e+240|0,e+128|0);Kd(e+192|0,e+128|0);Kd(e+176|0,e+256|0);Kd(e+240|0,e+224|0);Kd(e+208|0,e+176|0);Kd(e+224|0,e+256|0);Kd(e+256|0,e+240|0);Kd(e+240|0,e+144|0);Kd(e+144|0,e+192|0);Kd(e+208|0,e+144|0);Kd(e+192|0,e+160|0);Kd(e+160|0,e+144|0);Kd(e+224|0,e+160|0);hh(e+240|0);vb(e+256|0,35238);vb(e+240|0,35238);vb(e+208|0,35238);vb(e+224|0,35238);vb(e+160|0,35238);vb(e+176|0,35238);vb(e+192|0,35238);vb(e+144|0,35238);c[e+128>>2]=c[a+128>>2];c[e+128+4>>2]=c[a+128+4>>2];c[e+128+8>>2]=c[a+128+8>>2];c[e+128+12>>2]=c[a+128+12>>2];c[e+112>>2]=c[a+144>>2];c[e+112+4>>2]=c[a+144+4>>2];c[e+112+8>>2]=c[a+144+8>>2];c[e+112+12>>2]=c[a+144+12>>2];c[e+96>>2]=c[a+160>>2];c[e+96+4>>2]=c[a+160+4>>2];c[e+96+8>>2]=c[a+160+8>>2];c[e+96+12>>2]=c[a+160+12>>2];c[e+80>>2]=c[a+176>>2];c[e+80+4>>2]=c[a+176+4>>2];c[e+80+8>>2]=c[a+176+8>>2];c[e+80+12>>2]=c[a+176+12>>2];c[e+64>>2]=c[a+192>>2];c[e+64+4>>2]=c[a+192+4>>2];c[e+64+8>>2]=c[a+192+8>>2];c[e+64+12>>2]=c[a+192+12>>2];c[e+48>>2]=c[a+208>>2];c[e+48+4>>2]=c[a+208+4>>2];c[e+48+8>>2]=c[a+208+8>>2];c[e+48+12>>2]=c[a+208+12>>2];c[e+32>>2]=c[a+224>>2];c[e+32+4>>2]=c[a+224+4>>2];c[e+32+8>>2]=c[a+224+8>>2];c[e+32+12>>2]=c[a+224+12>>2];c[e+16>>2]=c[a+240>>2];c[e+16+4>>2]=c[a+240+4>>2];c[e+16+8>>2]=c[a+240+8>>2];c[e+16+12>>2]=c[a+240+12>>2];Pe(e+128|0);Pe(e+112|0);Pe(e+48|0);Pe(e+32|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+208|0,e+96|0);Kd(e+224|0,e+80|0);Kd(e+160|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+192|0,e+32|0);Kd(e+144|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+208|0,e+96|0);Kd(e+224|0,e+80|0);Kd(e+160|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+192|0,e+32|0);Kd(e+144|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+208|0,e+96|0);Kd(e+224|0,e+80|0);Kd(e+160|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+192|0,e+32|0);Kd(e+144|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+208|0,e+96|0);Kd(e+224|0,e+80|0);Kd(e+160|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+192|0,e+32|0);Kd(e+144|0,e+16|0);c[a+256>>2]=c[e+256>>2];c[a+256+4>>2]=c[e+256+4>>2];c[a+256+8>>2]=c[e+256+8>>2];c[a+256+12>>2]=c[e+256+12>>2];c[a+272>>2]=c[e+240>>2];c[a+272+4>>2]=c[e+240+4>>2];c[a+272+8>>2]=c[e+240+8>>2];c[a+272+12>>2]=c[e+240+12>>2];c[a+288>>2]=c[e+208>>2];c[a+288+4>>2]=c[e+208+4>>2];c[a+288+8>>2]=c[e+208+8>>2];c[a+288+12>>2]=c[e+208+12>>2];c[a+304>>2]=c[e+224>>2];c[a+304+4>>2]=c[e+224+4>>2];c[a+304+8>>2]=c[e+224+8>>2];c[a+304+12>>2]=c[e+224+12>>2];c[a+320>>2]=c[e+160>>2];c[a+320+4>>2]=c[e+160+4>>2];c[a+320+8>>2]=c[e+160+8>>2];c[a+320+12>>2]=c[e+160+12>>2];c[a+336>>2]=c[e+176>>2];c[a+336+4>>2]=c[e+176+4>>2];c[a+336+8>>2]=c[e+176+8>>2];c[a+336+12>>2]=c[e+176+12>>2];c[a+352>>2]=c[e+192>>2];c[a+352+4>>2]=c[e+192+4>>2];c[a+352+8>>2]=c[e+192+8>>2];c[a+352+12>>2]=c[e+192+12>>2];c[a+368>>2]=c[e+144>>2];c[a+368+4>>2]=c[e+144+4>>2];c[a+368+8>>2]=c[e+144+8>>2];c[a+368+12>>2]=c[e+144+12>>2];Pe(e+256|0);Pe(e+240|0);Pe(e+176|0);Pe(e+192|0);vb(e+256|0,35206);vb(e+240|0,35206);vb(e+208|0,35206);vb(e+224|0,35206);vb(e+160|0,35206);vb(e+176|0,35206);vb(e+192|0,35206);vb(e+144|0,35206);Kd(e+176|0,e+192|0);Kd(e+208|0,e+240|0);Kd(e+176|0,e+256|0);Kd(e+192|0,e+208|0);Kd(e+224|0,e+256|0);Kd(e+192|0,e+224|0);Kd(e+224|0,e+144|0);Kd(e+224|0,e+160|0);Kd(e+144|0,e+176|0);Kd(e+224|0,e+240|0);Kd(e+160|0,e+176|0);Kd(e+208|0,e+144|0);Kd(e+240|0,e+176|0);Ge(e+80|0,e+144|0);Ge(e+96|0,e+240|0);Ge(e+112|0,e+176|0);Ge(e+48|0,e+208|0);Ge(e+64|0,e+192|0);Kd(e+80|0,e+160|0);Kd(e+96|0,e+208|0);Kd(e+112|0,e+224|0);Kd(e+48|0,e+160|0);Kd(e+64|0,e+256|0);Ge(e+32|0,e+80|0);Ge(e+128|0,e+96|0);Ge(e+16|0,e+80|0);Nd(e+96|0,e+112|0);Nd(e+80|0,e+64|0);Kd(e+16|0,e+128|0);Ld(e+32|0,e+64|0);Ld(e+128|0,e+112|0);Kd(e+64|0,e+112|0);Ld(e+16|0,e+64|0);Ge(e+64|0,e+224|0);Kd(e+64|0,e+256|0);Ld(e+48|0,e+64|0);Kd(e+80|0,e+48|0);Kd(e+96|0,e+48|0);Ge(e+48|0,e+144|0);Kd(e+48|0,e+240|0);Ge(e+64|0,e+176|0);Ge(e+112|0,e+48|0);Kd(e+64|0,e+192|0);Nd(e+112|0,e+64|0);Ld(e+48|0,e+64|0);Kd(e+128|0,e+48|0);Kd(e+80|0,e+16|0);Kd(e+96|0,e+32|0);Kd(e+112|0,e+16|0);Kd(e+128|0,e+32|0);Kd(e+112|0,e+32|0);Ge(e+64|0,e+208|0);Ge(e+48|0,e+160|0);Ge(e+32|0,e+240|0);Ge(e+16|0,e+144|0);Ld(e+64|0,e+224|0);Ld(e+48|0,e+256|0);Ld(e+32|0,e+176|0);Nd(e+16|0,e+192|0);Kd(e+80|0,e+64|0);Kd(e+96|0,e+48|0);Kd(e+112|0,e+32|0);Kd(e+128|0,e+16|0);Ge(e+64|0,e+80|0);Kd(e+64|0,e+96|0);Ld(e+80|0,e+112|0);Ge(e+32|0,e+128|0);Kd(e+32|0,e+80|0);Ge(e+16|0,e+64|0);Ld(e+16|0,e+32|0);Kd(e+16|0,e+96|0);Ge(e+48|0,e+112|0);Kd(e+48|0,e+128|0);Kd(e+80|0,e+96|0);Ld(e+48|0,e+80|0);Kd(e+48|0,e+128|0);Kd(e+112|0,e+48|0);Ge(e+96|0,e+32|0);Kd(e+96|0,e+48|0);Ld(e+96|0,e+128|0);Kd(e+112|0,e+96|0);Kd(e+32|0,e+96|0);Ld(e+32|0,e+16|0);Kd(e+32|0,e+64|0);Ge(e+64|0,e+192|0);Ge(e+128|0,e+176|0);Ge(e+96|0,e+16|0);Kd(e+96|0,e+32|0);Ld(e+96|0,e+192|0);Kd(e+192|0,e+176|0);Ld(e+192|0,e+32|0);Ld(e+176|0,e+16|0);Kd(e+192|0,e+176|0);Kd(e+176|0,e+96|0);Kd(e+64|0,e+256|0);Kd(e+128|0,e+224|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+256|0);Kd(e+256|0,e+224|0);Ld(e+256|0,e+112|0);Ld(e+224|0,e+48|0);Kd(e+256|0,e+224|0);Kd(e+224|0,e+96|0);Kd(e+192|0,e+64|0);Kd(e+256|0,e+64|0);Kd(e+176|0,e+128|0);Kd(e+224|0,e+128|0);Ge(e+64|0,e+144|0);Ge(e+128|0,e+240|0);Kd(e+64|0,e+160|0);Kd(e+128|0,e+208|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+160|0);Kd(e+160|0,e+208|0);Ld(e+160|0,e+112|0);Ld(e+208|0,e+48|0);Kd(e+160|0,e+208|0);Kd(e+208|0,e+96|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+144|0);Kd(e+144|0,e+240|0);Ld(e+144|0,e+32|0);Ld(e+240|0,e+16|0);Kd(e+144|0,e+240|0);Kd(e+240|0,e+80|0);Kd(e+144|0,e+64|0);Kd(e+160|0,e+64|0);Kd(e+240|0,e+128|0);Kd(e+208|0,e+128|0);Kd(e+144|0,e+256|0);Kd(e+240|0,e+192|0);Kd(e+160|0,e+144|0);Kd(e+192|0,e+256|0);Kd(e+256|0,e+240|0);Kd(e+240|0,e+176|0);Kd(e+176|0,e+208|0);Kd(e+160|0,e+176|0);Kd(e+208|0,e+224|0);Kd(e+224|0,e+176|0);Kd(e+192|0,e+224|0);hh(e+160|0);vb(e+256|0,35238);vb(e+240|0,35238);vb(e+160|0,35238);vb(e+192|0,35238);vb(e+224|0,35238);vb(e+144|0,35238);vb(e+208|0,35238);vb(e+176|0,35238);c[e+128>>2]=c[a+256>>2];c[e+128+4>>2]=c[a+256+4>>2];c[e+128+8>>2]=c[a+256+8>>2];c[e+128+12>>2]=c[a+256+12>>2];c[e+112>>2]=c[a+272>>2];c[e+112+4>>2]=c[a+272+4>>2];c[e+112+8>>2]=c[a+272+8>>2];c[e+112+12>>2]=c[a+272+12>>2];c[e+96>>2]=c[a+288>>2];c[e+96+4>>2]=c[a+288+4>>2];c[e+96+8>>2]=c[a+288+8>>2];c[e+96+12>>2]=c[a+288+12>>2];c[e+80>>2]=c[a+304>>2];c[e+80+4>>2]=c[a+304+4>>2];c[e+80+8>>2]=c[a+304+8>>2];c[e+80+12>>2]=c[a+304+12>>2];c[e+64>>2]=c[a+320>>2];c[e+64+4>>2]=c[a+320+4>>2];c[e+64+8>>2]=c[a+320+8>>2];c[e+64+12>>2]=c[a+320+12>>2];c[e+48>>2]=c[a+336>>2];c[e+48+4>>2]=c[a+336+4>>2];c[e+48+8>>2]=c[a+336+8>>2];c[e+48+12>>2]=c[a+336+12>>2];c[e+32>>2]=c[a+352>>2];c[e+32+4>>2]=c[a+352+4>>2];c[e+32+8>>2]=c[a+352+8>>2];c[e+32+12>>2]=c[a+352+12>>2];c[e+16>>2]=c[a+368>>2];c[e+16+4>>2]=c[a+368+4>>2];c[e+16+8>>2]=c[a+368+8>>2];c[e+16+12>>2]=c[a+368+12>>2];Pe(e+128|0);Pe(e+112|0);Pe(e+48|0);Pe(e+32|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+160|0,e+96|0);Kd(e+192|0,e+80|0);Kd(e+224|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+208|0,e+32|0);Kd(e+176|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+160|0,e+96|0);Kd(e+192|0,e+80|0);Kd(e+224|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+208|0,e+32|0);Kd(e+176|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+160|0,e+96|0);Kd(e+192|0,e+80|0);Kd(e+224|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+208|0,e+32|0);Kd(e+176|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+160|0,e+96|0);Kd(e+192|0,e+80|0);Kd(e+224|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+208|0,e+32|0);Kd(e+176|0,e+16|0);c[a+384>>2]=c[e+256>>2];c[a+384+4>>2]=c[e+256+4>>2];c[a+384+8>>2]=c[e+256+8>>2];c[a+384+12>>2]=c[e+256+12>>2];c[a+400>>2]=c[e+240>>2];c[a+400+4>>2]=c[e+240+4>>2];c[a+400+8>>2]=c[e+240+8>>2];c[a+400+12>>2]=c[e+240+12>>2];c[a+416>>2]=c[e+160>>2];c[a+416+4>>2]=c[e+160+4>>2];c[a+416+8>>2]=c[e+160+8>>2];c[a+416+12>>2]=c[e+160+12>>2];c[a+432>>2]=c[e+192>>2];c[a+432+4>>2]=c[e+192+4>>2];c[a+432+8>>2]=c[e+192+8>>2];c[a+432+12>>2]=c[e+192+12>>2];c[a+448>>2]=c[e+224>>2];c[a+448+4>>2]=c[e+224+4>>2];c[a+448+8>>2]=c[e+224+8>>2];c[a+448+12>>2]=c[e+224+12>>2];c[a+464>>2]=c[e+144>>2];c[a+464+4>>2]=c[e+144+4>>2];c[a+464+8>>2]=c[e+144+8>>2];c[a+464+12>>2]=c[e+144+12>>2];c[a+480>>2]=c[e+208>>2];c[a+480+4>>2]=c[e+208+4>>2];c[a+480+8>>2]=c[e+208+8>>2];c[a+480+12>>2]=c[e+208+12>>2];c[a+496>>2]=c[e+176>>2];c[a+496+4>>2]=c[e+176+4>>2];c[a+496+8>>2]=c[e+176+8>>2];c[a+496+12>>2]=c[e+176+12>>2];Pe(e+256|0);Pe(e+240|0);Pe(e+144|0);Pe(e+208|0);vb(e+256|0,35206);vb(e+240|0,35206);vb(e+160|0,35206);vb(e+192|0,35206);vb(e+224|0,35206);vb(e+144|0,35206);vb(e+208|0,35206);vb(e+176|0,35206);Kd(e+144|0,e+208|0);Kd(e+160|0,e+240|0);Kd(e+144|0,e+256|0);Kd(e+208|0,e+160|0);Kd(e+192|0,e+256|0);Kd(e+208|0,e+192|0);Kd(e+192|0,e+176|0);Kd(e+192|0,e+224|0);Kd(e+176|0,e+144|0);Kd(e+192|0,e+240|0);Kd(e+224|0,e+144|0);Kd(e+160|0,e+176|0);Kd(e+240|0,e+144|0);Ge(e+80|0,e+176|0);Ge(e+96|0,e+240|0);Ge(e+112|0,e+144|0);Ge(e+48|0,e+160|0);Ge(e+64|0,e+208|0);Kd(e+80|0,e+224|0);Kd(e+96|0,e+160|0);Kd(e+112|0,e+192|0);Kd(e+48|0,e+224|0);Kd(e+64|0,e+256|0);Ge(e+32|0,e+80|0);Ge(e+128|0,e+96|0);Ge(e+16|0,e+80|0);Nd(e+96|0,e+112|0);Nd(e+80|0,e+64|0);Kd(e+16|0,e+128|0);Ld(e+32|0,e+64|0);Ld(e+128|0,e+112|0);Kd(e+64|0,e+112|0);Ld(e+16|0,e+64|0);Ge(e+64|0,e+192|0);Kd(e+64|0,e+256|0);Ld(e+48|0,e+64|0);Kd(e+80|0,e+48|0);Kd(e+96|0,e+48|0);Ge(e+48|0,e+176|0);Kd(e+48|0,e+240|0);Ge(e+64|0,e+144|0);Ge(e+112|0,e+48|0);Kd(e+64|0,e+208|0);Nd(e+112|0,e+64|0);Ld(e+48|0,e+64|0);Kd(e+128|0,e+48|0);Kd(e+80|0,e+16|0);Kd(e+96|0,e+32|0);Kd(e+112|0,e+16|0);Kd(e+128|0,e+32|0);Kd(e+112|0,e+32|0);Ge(e+64|0,e+160|0);Ge(e+48|0,e+224|0);Ge(e+32|0,e+240|0);Ge(e+16|0,e+176|0);Ld(e+64|0,e+192|0);Ld(e+48|0,e+256|0);Ld(e+32|0,e+144|0);Nd(e+16|0,e+208|0);Kd(e+80|0,e+64|0);Kd(e+96|0,e+48|0);Kd(e+112|0,e+32|0);Kd(e+128|0,e+16|0);Ge(e+64|0,e+80|0);Kd(e+64|0,e+96|0);Ld(e+80|0,e+112|0);Ge(e+32|0,e+128|0);Kd(e+32|0,e+80|0);Ge(e+16|0,e+64|0);Ld(e+16|0,e+32|0);Kd(e+16|0,e+96|0);Ge(e+48|0,e+112|0);Kd(e+48|0,e+128|0);Kd(e+80|0,e+96|0);Ld(e+48|0,e+80|0);Kd(e+48|0,e+128|0);Kd(e+112|0,e+48|0);Ge(e+96|0,e+32|0);Kd(e+96|0,e+48|0);Ld(e+96|0,e+128|0);Kd(e+112|0,e+96|0);Kd(e+32|0,e+96|0);Ld(e+32|0,e+16|0);Kd(e+32|0,e+64|0);Ge(e+64|0,e+208|0);Ge(e+128|0,e+144|0);Ge(e+96|0,e+16|0);Kd(e+96|0,e+32|0);Ld(e+96|0,e+208|0);Kd(e+208|0,e+144|0);Ld(e+208|0,e+32|0);Ld(e+144|0,e+16|0);Kd(e+208|0,e+144|0);Kd(e+144|0,e+96|0);Kd(e+64|0,e+256|0);Kd(e+128|0,e+192|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+256|0);Kd(e+256|0,e+192|0);Ld(e+256|0,e+112|0);Ld(e+192|0,e+48|0);Kd(e+256|0,e+192|0);Kd(e+192|0,e+96|0);Kd(e+208|0,e+64|0);Kd(e+256|0,e+64|0);Kd(e+144|0,e+128|0);Kd(e+192|0,e+128|0);Ge(e+64|0,e+176|0);Ge(e+128|0,e+240|0);Kd(e+64|0,e+224|0);Kd(e+128|0,e+160|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+224|0);Kd(e+224|0,e+160|0);Ld(e+224|0,e+112|0);Ld(e+160|0,e+48|0);Kd(e+224|0,e+160|0);Kd(e+160|0,e+96|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+176|0);Kd(e+176|0,e+240|0);Ld(e+176|0,e+32|0);Ld(e+240|0,e+16|0);Kd(e+176|0,e+240|0);Kd(e+240|0,e+80|0);Kd(e+176|0,e+64|0);Kd(e+224|0,e+64|0);Kd(e+240|0,e+128|0);Kd(e+160|0,e+128|0);Kd(e+176|0,e+256|0);Kd(e+240|0,e+208|0);Kd(e+224|0,e+176|0);Kd(e+208|0,e+256|0);Kd(e+256|0,e+240|0);Kd(e+240|0,e+144|0);Kd(e+144|0,e+160|0);Kd(e+224|0,e+144|0);Kd(e+160|0,e+192|0);Kd(e+192|0,e+144|0);Kd(e+208|0,e+192|0);hh(e+208|0);vb(e+256|0,35238);vb(e+240|0,35238);vb(e+224|0,35238);vb(e+208|0,35238);vb(e+192|0,35238);vb(e+176|0,35238);vb(e+160|0,35238);vb(e+144|0,35238);c[e+128>>2]=c[a+384>>2];c[e+128+4>>2]=c[a+384+4>>2];c[e+128+8>>2]=c[a+384+8>>2];c[e+128+12>>2]=c[a+384+12>>2];c[e+112>>2]=c[a+400>>2];c[e+112+4>>2]=c[a+400+4>>2];c[e+112+8>>2]=c[a+400+8>>2];c[e+112+12>>2]=c[a+400+12>>2];c[e+96>>2]=c[a+416>>2];c[e+96+4>>2]=c[a+416+4>>2];c[e+96+8>>2]=c[a+416+8>>2];c[e+96+12>>2]=c[a+416+12>>2];c[e+80>>2]=c[a+432>>2];c[e+80+4>>2]=c[a+432+4>>2];c[e+80+8>>2]=c[a+432+8>>2];c[e+80+12>>2]=c[a+432+12>>2];c[e+64>>2]=c[a+448>>2];c[e+64+4>>2]=c[a+448+4>>2];c[e+64+8>>2]=c[a+448+8>>2];c[e+64+12>>2]=c[a+448+12>>2];c[e+48>>2]=c[a+464>>2];c[e+48+4>>2]=c[a+464+4>>2];c[e+48+8>>2]=c[a+464+8>>2];c[e+48+12>>2]=c[a+464+12>>2];c[e+32>>2]=c[a+480>>2];c[e+32+4>>2]=c[a+480+4>>2];c[e+32+8>>2]=c[a+480+8>>2];c[e+32+12>>2]=c[a+480+12>>2];c[e+16>>2]=c[a+496>>2];c[e+16+4>>2]=c[a+496+4>>2];c[e+16+8>>2]=c[a+496+8>>2];c[e+16+12>>2]=c[a+496+12>>2];Pe(e+128|0);Pe(e+112|0);Pe(e+48|0);Pe(e+32|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+224|0,e+96|0);Kd(e+208|0,e+80|0);Kd(e+192|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+160|0,e+32|0);Kd(e+144|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+224|0,e+96|0);Kd(e+208|0,e+80|0);Kd(e+192|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+160|0,e+32|0);Kd(e+144|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+224|0,e+96|0);Kd(e+208|0,e+80|0);Kd(e+192|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+160|0,e+32|0);Kd(e+144|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+224|0,e+96|0);Kd(e+208|0,e+80|0);Kd(e+192|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+160|0,e+32|0);Kd(e+144|0,e+16|0);c[a+512>>2]=c[e+256>>2];c[a+512+4>>2]=c[e+256+4>>2];c[a+512+8>>2]=c[e+256+8>>2];c[a+512+12>>2]=c[e+256+12>>2];c[a+528>>2]=c[e+240>>2];c[a+528+4>>2]=c[e+240+4>>2];c[a+528+8>>2]=c[e+240+8>>2];c[a+528+12>>2]=c[e+240+12>>2];c[a+544>>2]=c[e+224>>2];c[a+544+4>>2]=c[e+224+4>>2];c[a+544+8>>2]=c[e+224+8>>2];c[a+544+12>>2]=c[e+224+12>>2];c[a+560>>2]=c[e+208>>2];c[a+560+4>>2]=c[e+208+4>>2];c[a+560+8>>2]=c[e+208+8>>2];c[a+560+12>>2]=c[e+208+12>>2];c[a+576>>2]=c[e+192>>2];c[a+576+4>>2]=c[e+192+4>>2];c[a+576+8>>2]=c[e+192+8>>2];c[a+576+12>>2]=c[e+192+12>>2];c[a+592>>2]=c[e+176>>2];c[a+592+4>>2]=c[e+176+4>>2];c[a+592+8>>2]=c[e+176+8>>2];c[a+592+12>>2]=c[e+176+12>>2];c[a+608>>2]=c[e+160>>2];c[a+608+4>>2]=c[e+160+4>>2];c[a+608+8>>2]=c[e+160+8>>2];c[a+608+12>>2]=c[e+160+12>>2];c[a+624>>2]=c[e+144>>2];c[a+624+4>>2]=c[e+144+4>>2];c[a+624+8>>2]=c[e+144+8>>2];c[a+624+12>>2]=c[e+144+12>>2];Pe(e+256|0);Pe(e+240|0);Pe(e+176|0);Pe(e+160|0);vb(e+256|0,35206);vb(e+240|0,35206);vb(e+224|0,35206);vb(e+208|0,35206);vb(e+192|0,35206);vb(e+176|0,35206);vb(e+160|0,35206);vb(e+144|0,35206);Kd(e+176|0,e+160|0);Kd(e+224|0,e+240|0);Kd(e+176|0,e+256|0);Kd(e+160|0,e+224|0);Kd(e+208|0,e+256|0);Kd(e+160|0,e+208|0);Kd(e+208|0,e+144|0);Kd(e+208|0,e+192|0);Kd(e+144|0,e+176|0);Kd(e+208|0,e+240|0);Kd(e+192|0,e+176|0);Kd(e+224|0,e+144|0);Kd(e+240|0,e+176|0);Ge(e+80|0,e+144|0);Ge(e+96|0,e+240|0);Ge(e+112|0,e+176|0);Ge(e+48|0,e+224|0);Ge(e+64|0,e+160|0);Kd(e+80|0,e+192|0);Kd(e+96|0,e+224|0);Kd(e+112|0,e+208|0);Kd(e+48|0,e+192|0);Kd(e+64|0,e+256|0);Ge(e+32|0,e+80|0);Ge(e+128|0,e+96|0);Ge(e+16|0,e+80|0);Nd(e+96|0,e+112|0);Nd(e+80|0,e+64|0);Kd(e+16|0,e+128|0);Ld(e+32|0,e+64|0);Ld(e+128|0,e+112|0);Kd(e+64|0,e+112|0);Ld(e+16|0,e+64|0);Ge(e+64|0,e+208|0);Kd(e+64|0,e+256|0);Ld(e+48|0,e+64|0);Kd(e+80|0,e+48|0);Kd(e+96|0,e+48|0);Ge(e+48|0,e+144|0);Kd(e+48|0,e+240|0);Ge(e+64|0,e+176|0);Ge(e+112|0,e+48|0);Kd(e+64|0,e+160|0);Nd(e+112|0,e+64|0);Ld(e+48|0,e+64|0);Kd(e+128|0,e+48|0);Kd(e+80|0,e+16|0);Kd(e+96|0,e+32|0);Kd(e+112|0,e+16|0);Kd(e+128|0,e+32|0);Kd(e+112|0,e+32|0);Ge(e+64|0,e+224|0);Ge(e+48|0,e+192|0);Ge(e+32|0,e+240|0);Ge(e+16|0,e+144|0);Ld(e+64|0,e+208|0);Ld(e+48|0,e+256|0);Ld(e+32|0,e+176|0);Nd(e+16|0,e+160|0);Kd(e+80|0,e+64|0);Kd(e+96|0,e+48|0);Kd(e+112|0,e+32|0);Kd(e+128|0,e+16|0);Ge(e+64|0,e+80|0);Kd(e+64|0,e+96|0);Ld(e+80|0,e+112|0);Ge(e+32|0,e+128|0);Kd(e+32|0,e+80|0);Ge(e+16|0,e+64|0);Ld(e+16|0,e+32|0);Kd(e+16|0,e+96|0);Ge(e+48|0,e+112|0);Kd(e+48|0,e+128|0);Kd(e+80|0,e+96|0);Ld(e+48|0,e+80|0);Kd(e+48|0,e+128|0);Kd(e+112|0,e+48|0);Ge(e+96|0,e+32|0);Kd(e+96|0,e+48|0);Ld(e+96|0,e+128|0);Kd(e+112|0,e+96|0);Kd(e+32|0,e+96|0);Ld(e+32|0,e+16|0);Kd(e+32|0,e+64|0);Ge(e+64|0,e+160|0);Ge(e+128|0,e+176|0);Ge(e+96|0,e+16|0);Kd(e+96|0,e+32|0);Ld(e+96|0,e+160|0);Kd(e+160|0,e+176|0);Ld(e+160|0,e+32|0);Ld(e+176|0,e+16|0);Kd(e+160|0,e+176|0);Kd(e+176|0,e+96|0);Kd(e+64|0,e+256|0);Kd(e+128|0,e+208|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+256|0);Kd(e+256|0,e+208|0);Ld(e+256|0,e+112|0);Ld(e+208|0,e+48|0);Kd(e+256|0,e+208|0);Kd(e+208|0,e+96|0);Kd(e+160|0,e+64|0);Kd(e+256|0,e+64|0);Kd(e+176|0,e+128|0);Kd(e+208|0,e+128|0);Ge(e+64|0,e+144|0);Ge(e+128|0,e+240|0);Kd(e+64|0,e+192|0);Kd(e+128|0,e+224|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+192|0);Kd(e+192|0,e+224|0);Ld(e+192|0,e+112|0);Ld(e+224|0,e+48|0);Kd(e+192|0,e+224|0);Kd(e+224|0,e+96|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+144|0);Kd(e+144|0,e+240|0);Ld(e+144|0,e+32|0);Ld(e+240|0,e+16|0);Kd(e+144|0,e+240|0);Kd(e+240|0,e+80|0);Kd(e+144|0,e+64|0);Kd(e+192|0,e+64|0);Kd(e+240|0,e+128|0);Kd(e+224|0,e+128|0);Kd(e+144|0,e+256|0);Kd(e+240|0,e+160|0);Kd(e+192|0,e+144|0);Kd(e+160|0,e+256|0);Kd(e+256|0,e+240|0);Kd(e+240|0,e+176|0);Kd(e+176|0,e+224|0);Kd(e+192|0,e+176|0);Kd(e+224|0,e+208|0);Kd(e+208|0,e+176|0);Kd(e+160|0,e+208|0);hh(e+208|0);vb(e+256|0,35238);vb(e+240|0,35238);vb(e+192|0,35238);vb(e+160|0,35238);vb(e+208|0,35238);vb(e+144|0,35238);vb(e+224|0,35238);vb(e+176|0,35238);c[e+128>>2]=c[a+512>>2];c[e+128+4>>2]=c[a+512+4>>2];c[e+128+8>>2]=c[a+512+8>>2];c[e+128+12>>2]=c[a+512+12>>2];c[e+112>>2]=c[a+528>>2];c[e+112+4>>2]=c[a+528+4>>2];c[e+112+8>>2]=c[a+528+8>>2];c[e+112+12>>2]=c[a+528+12>>2];c[e+96>>2]=c[a+544>>2];c[e+96+4>>2]=c[a+544+4>>2];c[e+96+8>>2]=c[a+544+8>>2];c[e+96+12>>2]=c[a+544+12>>2];c[e+80>>2]=c[a+560>>2];c[e+80+4>>2]=c[a+560+4>>2];c[e+80+8>>2]=c[a+560+8>>2];c[e+80+12>>2]=c[a+560+12>>2];c[e+64>>2]=c[a+576>>2];c[e+64+4>>2]=c[a+576+4>>2];c[e+64+8>>2]=c[a+576+8>>2];c[e+64+12>>2]=c[a+576+12>>2];c[e+48>>2]=c[a+592>>2];c[e+48+4>>2]=c[a+592+4>>2];c[e+48+8>>2]=c[a+592+8>>2];c[e+48+12>>2]=c[a+592+12>>2];c[e+32>>2]=c[a+608>>2];c[e+32+4>>2]=c[a+608+4>>2];c[e+32+8>>2]=c[a+608+8>>2];c[e+32+12>>2]=c[a+608+12>>2];c[e+16>>2]=c[a+624>>2];c[e+16+4>>2]=c[a+624+4>>2];c[e+16+8>>2]=c[a+624+8>>2];c[e+16+12>>2]=c[a+624+12>>2];Pe(e+128|0);Pe(e+112|0);Pe(e+48|0);Pe(e+32|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+192|0,e+96|0);Kd(e+160|0,e+80|0);Kd(e+208|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+224|0,e+32|0);Kd(e+176|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+192|0,e+96|0);Kd(e+160|0,e+80|0);Kd(e+208|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+224|0,e+32|0);Kd(e+176|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+192|0,e+96|0);Kd(e+160|0,e+80|0);Kd(e+208|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+224|0,e+32|0);Kd(e+176|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+192|0,e+96|0);Kd(e+160|0,e+80|0);Kd(e+208|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+224|0,e+32|0);Kd(e+176|0,e+16|0);c[a+640>>2]=c[e+256>>2];c[a+640+4>>2]=c[e+256+4>>2];c[a+640+8>>2]=c[e+256+8>>2];c[a+640+12>>2]=c[e+256+12>>2];c[a+656>>2]=c[e+240>>2];c[a+656+4>>2]=c[e+240+4>>2];c[a+656+8>>2]=c[e+240+8>>2];c[a+656+12>>2]=c[e+240+12>>2];c[a+672>>2]=c[e+192>>2];c[a+672+4>>2]=c[e+192+4>>2];c[a+672+8>>2]=c[e+192+8>>2];c[a+672+12>>2]=c[e+192+12>>2];c[a+688>>2]=c[e+160>>2];c[a+688+4>>2]=c[e+160+4>>2];c[a+688+8>>2]=c[e+160+8>>2];c[a+688+12>>2]=c[e+160+12>>2];c[a+704>>2]=c[e+208>>2];c[a+704+4>>2]=c[e+208+4>>2];c[a+704+8>>2]=c[e+208+8>>2];c[a+704+12>>2]=c[e+208+12>>2];c[a+720>>2]=c[e+144>>2];c[a+720+4>>2]=c[e+144+4>>2];c[a+720+8>>2]=c[e+144+8>>2];c[a+720+12>>2]=c[e+144+12>>2];c[a+736>>2]=c[e+224>>2];c[a+736+4>>2]=c[e+224+4>>2];c[a+736+8>>2]=c[e+224+8>>2];c[a+736+12>>2]=c[e+224+12>>2];c[a+752>>2]=c[e+176>>2];c[a+752+4>>2]=c[e+176+4>>2];c[a+752+8>>2]=c[e+176+8>>2];c[a+752+12>>2]=c[e+176+12>>2];Pe(e+256|0);Pe(e+240|0);Pe(e+144|0);Pe(e+224|0);vb(e+256|0,35206);vb(e+240|0,35206);vb(e+192|0,35206);vb(e+160|0,35206);vb(e+208|0,35206);vb(e+144|0,35206);vb(e+224|0,35206);vb(e+176|0,35206);Kd(e+144|0,e+224|0);Kd(e+192|0,e+240|0);Kd(e+144|0,e+256|0);Kd(e+224|0,e+192|0);Kd(e+160|0,e+256|0);Kd(e+224|0,e+160|0);Kd(e+160|0,e+176|0);Kd(e+160|0,e+208|0);Kd(e+176|0,e+144|0);Kd(e+160|0,e+240|0);Kd(e+208|0,e+144|0);Kd(e+192|0,e+176|0);Kd(e+240|0,e+144|0);Ge(e+80|0,e+176|0);Ge(e+96|0,e+240|0);Ge(e+112|0,e+144|0);Ge(e+48|0,e+192|0);Ge(e+64|0,e+224|0);Kd(e+80|0,e+208|0);Kd(e+96|0,e+192|0);Kd(e+112|0,e+160|0);Kd(e+48|0,e+208|0);Kd(e+64|0,e+256|0);Ge(e+32|0,e+80|0);Ge(e+128|0,e+96|0);Ge(e+16|0,e+80|0);Nd(e+96|0,e+112|0);Nd(e+80|0,e+64|0);Kd(e+16|0,e+128|0);Ld(e+32|0,e+64|0);Ld(e+128|0,e+112|0);Kd(e+64|0,e+112|0);Ld(e+16|0,e+64|0);Ge(e+64|0,e+160|0);Kd(e+64|0,e+256|0);Ld(e+48|0,e+64|0);Kd(e+80|0,e+48|0);Kd(e+96|0,e+48|0);Ge(e+48|0,e+176|0);Kd(e+48|0,e+240|0);Ge(e+64|0,e+144|0);Ge(e+112|0,e+48|0);Kd(e+64|0,e+224|0);Nd(e+112|0,e+64|0);Ld(e+48|0,e+64|0);Kd(e+128|0,e+48|0);Kd(e+80|0,e+16|0);Kd(e+96|0,e+32|0);Kd(e+112|0,e+16|0);Kd(e+128|0,e+32|0);Kd(e+112|0,e+32|0);Ge(e+64|0,e+192|0);Ge(e+48|0,e+208|0);Ge(e+32|0,e+240|0);Ge(e+16|0,e+176|0);Ld(e+64|0,e+160|0);Ld(e+48|0,e+256|0);Ld(e+32|0,e+144|0);Nd(e+16|0,e+224|0);Kd(e+80|0,e+64|0);Kd(e+96|0,e+48|0);Kd(e+112|0,e+32|0);Kd(e+128|0,e+16|0);Ge(e+64|0,e+80|0);Kd(e+64|0,e+96|0);Ld(e+80|0,e+112|0);Ge(e+32|0,e+128|0);Kd(e+32|0,e+80|0);Ge(e+16|0,e+64|0);Ld(e+16|0,e+32|0);Kd(e+16|0,e+96|0);Ge(e+48|0,e+112|0);Kd(e+48|0,e+128|0);Kd(e+80|0,e+96|0);Ld(e+48|0,e+80|0);Kd(e+48|0,e+128|0);Kd(e+112|0,e+48|0);Ge(e+96|0,e+32|0);Kd(e+96|0,e+48|0);Ld(e+96|0,e+128|0);Kd(e+112|0,e+96|0);Kd(e+32|0,e+96|0);Ld(e+32|0,e+16|0);Kd(e+32|0,e+64|0);Ge(e+64|0,e+224|0);Ge(e+128|0,e+144|0);Ge(e+96|0,e+16|0);Kd(e+96|0,e+32|0);Ld(e+96|0,e+224|0);Kd(e+224|0,e+144|0);Ld(e+224|0,e+32|0);Ld(e+144|0,e+16|0);Kd(e+224|0,e+144|0);Kd(e+144|0,e+96|0);Kd(e+64|0,e+256|0);Kd(e+128|0,e+160|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+256|0);Kd(e+256|0,e+160|0);Ld(e+256|0,e+112|0);Ld(e+160|0,e+48|0);Kd(e+256|0,e+160|0);Kd(e+160|0,e+96|0);Kd(e+224|0,e+64|0);Kd(e+256|0,e+64|0);Kd(e+144|0,e+128|0);Kd(e+160|0,e+128|0);Ge(e+64|0,e+176|0);Ge(e+128|0,e+240|0);Kd(e+64|0,e+208|0);Kd(e+128|0,e+192|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+208|0);Kd(e+208|0,e+192|0);Ld(e+208|0,e+112|0);Ld(e+192|0,e+48|0);Kd(e+208|0,e+192|0);Kd(e+192|0,e+96|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+176|0);Kd(e+176|0,e+240|0);Ld(e+176|0,e+32|0);Ld(e+240|0,e+16|0);Kd(e+176|0,e+240|0);Kd(e+240|0,e+80|0);Kd(e+176|0,e+64|0);Kd(e+208|0,e+64|0);Kd(e+240|0,e+128|0);Kd(e+192|0,e+128|0);Kd(e+176|0,e+256|0);Kd(e+240|0,e+224|0);Kd(e+208|0,e+176|0);Kd(e+224|0,e+256|0);Kd(e+256|0,e+240|0);Kd(e+240|0,e+144|0);Kd(e+144|0,e+192|0);Kd(e+208|0,e+144|0);Kd(e+192|0,e+160|0);Kd(e+160|0,e+144|0);Kd(e+224|0,e+160|0);hh(e+176|0);vb(e+256|0,35238);vb(e+240|0,35238);vb(e+208|0,35238);vb(e+224|0,35238);vb(e+160|0,35238);vb(e+176|0,35238);vb(e+192|0,35238);vb(e+144|0,35238);c[e+128>>2]=c[a+640>>2];c[e+128+4>>2]=c[a+640+4>>2];c[e+128+8>>2]=c[a+640+8>>2];c[e+128+12>>2]=c[a+640+12>>2];c[e+112>>2]=c[a+656>>2];c[e+112+4>>2]=c[a+656+4>>2];c[e+112+8>>2]=c[a+656+8>>2];c[e+112+12>>2]=c[a+656+12>>2];c[e+96>>2]=c[a+672>>2];c[e+96+4>>2]=c[a+672+4>>2];c[e+96+8>>2]=c[a+672+8>>2];c[e+96+12>>2]=c[a+672+12>>2];c[e+80>>2]=c[a+688>>2];c[e+80+4>>2]=c[a+688+4>>2];c[e+80+8>>2]=c[a+688+8>>2];c[e+80+12>>2]=c[a+688+12>>2];c[e+64>>2]=c[a+704>>2];c[e+64+4>>2]=c[a+704+4>>2];c[e+64+8>>2]=c[a+704+8>>2];c[e+64+12>>2]=c[a+704+12>>2];c[e+48>>2]=c[a+720>>2];c[e+48+4>>2]=c[a+720+4>>2];c[e+48+8>>2]=c[a+720+8>>2];c[e+48+12>>2]=c[a+720+12>>2];c[e+32>>2]=c[a+736>>2];c[e+32+4>>2]=c[a+736+4>>2];c[e+32+8>>2]=c[a+736+8>>2];c[e+32+12>>2]=c[a+736+12>>2];c[e+16>>2]=c[a+752>>2];c[e+16+4>>2]=c[a+752+4>>2];c[e+16+8>>2]=c[a+752+8>>2];c[e+16+12>>2]=c[a+752+12>>2];Pe(e+128|0);Pe(e+112|0);Pe(e+48|0);Pe(e+32|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+208|0,e+96|0);Kd(e+224|0,e+80|0);Kd(e+160|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+192|0,e+32|0);Kd(e+144|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+208|0,e+96|0);Kd(e+224|0,e+80|0);Kd(e+160|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+192|0,e+32|0);Kd(e+144|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+208|0,e+96|0);Kd(e+224|0,e+80|0);Kd(e+160|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+192|0,e+32|0);Kd(e+144|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+208|0,e+96|0);Kd(e+224|0,e+80|0);Kd(e+160|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+192|0,e+32|0);Kd(e+144|0,e+16|0);c[a+768>>2]=c[e+256>>2];c[a+768+4>>2]=c[e+256+4>>2];c[a+768+8>>2]=c[e+256+8>>2];c[a+768+12>>2]=c[e+256+12>>2];c[a+784>>2]=c[e+240>>2];c[a+784+4>>2]=c[e+240+4>>2];c[a+784+8>>2]=c[e+240+8>>2];c[a+784+12>>2]=c[e+240+12>>2];c[a+800>>2]=c[e+208>>2];c[a+800+4>>2]=c[e+208+4>>2];c[a+800+8>>2]=c[e+208+8>>2];c[a+800+12>>2]=c[e+208+12>>2];c[a+816>>2]=c[e+224>>2];c[a+816+4>>2]=c[e+224+4>>2];c[a+816+8>>2]=c[e+224+8>>2];c[a+816+12>>2]=c[e+224+12>>2];c[a+832>>2]=c[e+160>>2];c[a+832+4>>2]=c[e+160+4>>2];c[a+832+8>>2]=c[e+160+8>>2];c[a+832+12>>2]=c[e+160+12>>2];c[a+848>>2]=c[e+176>>2];c[a+848+4>>2]=c[e+176+4>>2];c[a+848+8>>2]=c[e+176+8>>2];c[a+848+12>>2]=c[e+176+12>>2];c[a+864>>2]=c[e+192>>2];c[a+864+4>>2]=c[e+192+4>>2];c[a+864+8>>2]=c[e+192+8>>2];c[a+864+12>>2]=c[e+192+12>>2];c[a+880>>2]=c[e+144>>2];c[a+880+4>>2]=c[e+144+4>>2];c[a+880+8>>2]=c[e+144+8>>2];c[a+880+12>>2]=c[e+144+12>>2];Pe(e+256|0);Pe(e+240|0);Pe(e+176|0);Pe(e+192|0);vb(e+256|0,35206);vb(e+240|0,35206);vb(e+208|0,35206);vb(e+224|0,35206);vb(e+160|0,35206);vb(e+176|0,35206);vb(e+192|0,35206);vb(e+144|0,35206);Kd(e+176|0,e+192|0);Kd(e+208|0,e+240|0);Kd(e+176|0,e+256|0);Kd(e+192|0,e+208|0);Kd(e+224|0,e+256|0);Kd(e+192|0,e+224|0);Kd(e+224|0,e+144|0);Kd(e+224|0,e+160|0);Kd(e+144|0,e+176|0);Kd(e+224|0,e+240|0);Kd(e+160|0,e+176|0);Kd(e+208|0,e+144|0);Kd(e+240|0,e+176|0);Ge(e+80|0,e+144|0);Ge(e+96|0,e+240|0);Ge(e+112|0,e+176|0);Ge(e+48|0,e+208|0);Ge(e+64|0,e+192|0);Kd(e+80|0,e+160|0);Kd(e+96|0,e+208|0);Kd(e+112|0,e+224|0);Kd(e+48|0,e+160|0);Kd(e+64|0,e+256|0);Ge(e+32|0,e+80|0);Ge(e+128|0,e+96|0);Ge(e+16|0,e+80|0);Nd(e+96|0,e+112|0);Nd(e+80|0,e+64|0);Kd(e+16|0,e+128|0);Ld(e+32|0,e+64|0);Ld(e+128|0,e+112|0);Kd(e+64|0,e+112|0);Ld(e+16|0,e+64|0);Ge(e+64|0,e+224|0);Kd(e+64|0,e+256|0);Ld(e+48|0,e+64|0);Kd(e+80|0,e+48|0);Kd(e+96|0,e+48|0);Ge(e+48|0,e+144|0);Kd(e+48|0,e+240|0);Ge(e+64|0,e+176|0);Ge(e+112|0,e+48|0);Kd(e+64|0,e+192|0);Nd(e+112|0,e+64|0);Ld(e+48|0,e+64|0);Kd(e+128|0,e+48|0);Kd(e+80|0,e+16|0);Kd(e+96|0,e+32|0);Kd(e+112|0,e+16|0);Kd(e+128|0,e+32|0);Kd(e+112|0,e+32|0);Ge(e+64|0,e+208|0);Ge(e+48|0,e+160|0);Ge(e+32|0,e+240|0);Ge(e+16|0,e+144|0);Ld(e+64|0,e+224|0);Ld(e+48|0,e+256|0);Ld(e+32|0,e+176|0);Nd(e+16|0,e+192|0);Kd(e+80|0,e+64|0);Kd(e+96|0,e+48|0);Kd(e+112|0,e+32|0);Kd(e+128|0,e+16|0);Ge(e+64|0,e+80|0);Kd(e+64|0,e+96|0);Ld(e+80|0,e+112|0);Ge(e+32|0,e+128|0);Kd(e+32|0,e+80|0);Ge(e+16|0,e+64|0);Ld(e+16|0,e+32|0);Kd(e+16|0,e+96|0);Ge(e+48|0,e+112|0);Kd(e+48|0,e+128|0);Kd(e+80|0,e+96|0);Ld(e+48|0,e+80|0);Kd(e+48|0,e+128|0);Kd(e+112|0,e+48|0);Ge(e+96|0,e+32|0);Kd(e+96|0,e+48|0);Ld(e+96|0,e+128|0);Kd(e+112|0,e+96|0);Kd(e+32|0,e+96|0);Ld(e+32|0,e+16|0);Kd(e+32|0,e+64|0);Ge(e+64|0,e+192|0);Ge(e+128|0,e+176|0);Ge(e+96|0,e+16|0);Kd(e+96|0,e+32|0);Ld(e+96|0,e+192|0);Kd(e+192|0,e+176|0);Ld(e+192|0,e+32|0);Ld(e+176|0,e+16|0);Kd(e+192|0,e+176|0);Kd(e+176|0,e+96|0);Kd(e+64|0,e+256|0);Kd(e+128|0,e+224|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+256|0);Kd(e+256|0,e+224|0);Ld(e+256|0,e+112|0);Ld(e+224|0,e+48|0);Kd(e+256|0,e+224|0);Kd(e+224|0,e+96|0);Kd(e+192|0,e+64|0);Kd(e+256|0,e+64|0);Kd(e+176|0,e+128|0);Kd(e+224|0,e+128|0);Ge(e+64|0,e+144|0);Ge(e+128|0,e+240|0);Kd(e+64|0,e+160|0);Kd(e+128|0,e+208|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+160|0);Kd(e+160|0,e+208|0);Ld(e+160|0,e+112|0);Ld(e+208|0,e+48|0);Kd(e+160|0,e+208|0);Kd(e+208|0,e+96|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+144|0);Kd(e+144|0,e+240|0);Ld(e+144|0,e+32|0);Ld(e+240|0,e+16|0);Kd(e+144|0,e+240|0);Kd(e+240|0,e+80|0);Kd(e+144|0,e+64|0);Kd(e+160|0,e+64|0);Kd(e+240|0,e+128|0);Kd(e+208|0,e+128|0);Kd(e+144|0,e+256|0);Kd(e+240|0,e+192|0);Kd(e+160|0,e+144|0);Kd(e+192|0,e+256|0);Kd(e+256|0,e+240|0);Kd(e+240|0,e+176|0);Kd(e+176|0,e+208|0);Kd(e+160|0,e+176|0);Kd(e+208|0,e+224|0);Kd(e+224|0,e+176|0);Kd(e+192|0,e+224|0);hh(e+208|0);vb(e+256|0,35238);vb(e+240|0,35238);vb(e+160|0,35238);vb(e+192|0,35238);vb(e+224|0,35238);vb(e+144|0,35238);vb(e+208|0,35238);vb(e+176|0,35238);c[e+128>>2]=c[a+768>>2];c[e+128+4>>2]=c[a+768+4>>2];c[e+128+8>>2]=c[a+768+8>>2];c[e+128+12>>2]=c[a+768+12>>2];c[e+112>>2]=c[a+784>>2];c[e+112+4>>2]=c[a+784+4>>2];c[e+112+8>>2]=c[a+784+8>>2];c[e+112+12>>2]=c[a+784+12>>2];c[e+96>>2]=c[a+800>>2];c[e+96+4>>2]=c[a+800+4>>2];c[e+96+8>>2]=c[a+800+8>>2];c[e+96+12>>2]=c[a+800+12>>2];c[e+80>>2]=c[a+816>>2];c[e+80+4>>2]=c[a+816+4>>2];c[e+80+8>>2]=c[a+816+8>>2];c[e+80+12>>2]=c[a+816+12>>2];c[e+64>>2]=c[a+832>>2];c[e+64+4>>2]=c[a+832+4>>2];c[e+64+8>>2]=c[a+832+8>>2];c[e+64+12>>2]=c[a+832+12>>2];c[e+48>>2]=c[a+848>>2];c[e+48+4>>2]=c[a+848+4>>2];c[e+48+8>>2]=c[a+848+8>>2];c[e+48+12>>2]=c[a+848+12>>2];c[e+32>>2]=c[a+864>>2];c[e+32+4>>2]=c[a+864+4>>2];c[e+32+8>>2]=c[a+864+8>>2];c[e+32+12>>2]=c[a+864+12>>2];c[e+16>>2]=c[a+880>>2];c[e+16+4>>2]=c[a+880+4>>2];c[e+16+8>>2]=c[a+880+8>>2];c[e+16+12>>2]=c[a+880+12>>2];Pe(e+128|0);Pe(e+112|0);Pe(e+48|0);Pe(e+32|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+160|0,e+96|0);Kd(e+192|0,e+80|0);Kd(e+224|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+208|0,e+32|0);Kd(e+176|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+160|0,e+96|0);Kd(e+192|0,e+80|0);Kd(e+224|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+208|0,e+32|0);Kd(e+176|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+160|0,e+96|0);Kd(e+192|0,e+80|0);Kd(e+224|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+208|0,e+32|0);Kd(e+176|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+160|0,e+96|0);Kd(e+192|0,e+80|0);Kd(e+224|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+208|0,e+32|0);Kd(e+176|0,e+16|0);c[a+896>>2]=c[e+256>>2];c[a+896+4>>2]=c[e+256+4>>2];c[a+896+8>>2]=c[e+256+8>>2];c[a+896+12>>2]=c[e+256+12>>2];c[a+912>>2]=c[e+240>>2];c[a+912+4>>2]=c[e+240+4>>2];c[a+912+8>>2]=c[e+240+8>>2];c[a+912+12>>2]=c[e+240+12>>2];c[a+928>>2]=c[e+160>>2];c[a+928+4>>2]=c[e+160+4>>2];c[a+928+8>>2]=c[e+160+8>>2];c[a+928+12>>2]=c[e+160+12>>2];c[a+944>>2]=c[e+192>>2];c[a+944+4>>2]=c[e+192+4>>2];c[a+944+8>>2]=c[e+192+8>>2];c[a+944+12>>2]=c[e+192+12>>2];c[a+960>>2]=c[e+224>>2];c[a+960+4>>2]=c[e+224+4>>2];c[a+960+8>>2]=c[e+224+8>>2];c[a+960+12>>2]=c[e+224+12>>2];c[a+976>>2]=c[e+144>>2];c[a+976+4>>2]=c[e+144+4>>2];c[a+976+8>>2]=c[e+144+8>>2];c[a+976+12>>2]=c[e+144+12>>2];c[a+992>>2]=c[e+208>>2];c[a+992+4>>2]=c[e+208+4>>2];c[a+992+8>>2]=c[e+208+8>>2];c[a+992+12>>2]=c[e+208+12>>2];c[a+1008>>2]=c[e+176>>2];c[a+1008+4>>2]=c[e+176+4>>2];c[a+1008+8>>2]=c[e+176+8>>2];c[a+1008+12>>2]=c[e+176+12>>2];Pe(e+256|0);Pe(e+240|0);Pe(e+144|0);Pe(e+208|0);vb(e+256|0,35206);vb(e+240|0,35206);vb(e+160|0,35206);vb(e+192|0,35206);vb(e+224|0,35206);vb(e+144|0,35206);vb(e+208|0,35206);vb(e+176|0,35206);Kd(e+144|0,e+208|0);Kd(e+160|0,e+240|0);Kd(e+144|0,e+256|0);Kd(e+208|0,e+160|0);Kd(e+192|0,e+256|0);Kd(e+208|0,e+192|0);Kd(e+192|0,e+176|0);Kd(e+192|0,e+224|0);Kd(e+176|0,e+144|0);Kd(e+192|0,e+240|0);Kd(e+224|0,e+144|0);Kd(e+160|0,e+176|0);Kd(e+240|0,e+144|0);Ge(e+80|0,e+176|0);Ge(e+96|0,e+240|0);Ge(e+112|0,e+144|0);Ge(e+48|0,e+160|0);Ge(e+64|0,e+208|0);Kd(e+80|0,e+224|0);Kd(e+96|0,e+160|0);Kd(e+112|0,e+192|0);Kd(e+48|0,e+224|0);Kd(e+64|0,e+256|0);Ge(e+32|0,e+80|0);Ge(e+128|0,e+96|0);Ge(e+16|0,e+80|0);Nd(e+96|0,e+112|0);Nd(e+80|0,e+64|0);Kd(e+16|0,e+128|0);Ld(e+32|0,e+64|0);Ld(e+128|0,e+112|0);Kd(e+64|0,e+112|0);Ld(e+16|0,e+64|0);Ge(e+64|0,e+192|0);Kd(e+64|0,e+256|0);Ld(e+48|0,e+64|0);Kd(e+80|0,e+48|0);Kd(e+96|0,e+48|0);Ge(e+48|0,e+176|0);Kd(e+48|0,e+240|0);Ge(e+64|0,e+144|0);Ge(e+112|0,e+48|0);Kd(e+64|0,e+208|0);Nd(e+112|0,e+64|0);Ld(e+48|0,e+64|0);Kd(e+128|0,e+48|0);Kd(e+80|0,e+16|0);Kd(e+96|0,e+32|0);Kd(e+112|0,e+16|0);Kd(e+128|0,e+32|0);Kd(e+112|0,e+32|0);Ge(e+64|0,e+160|0);Ge(e+48|0,e+224|0);Ge(e+32|0,e+240|0);Ge(e+16|0,e+176|0);Ld(e+64|0,e+192|0);Ld(e+48|0,e+256|0);Ld(e+32|0,e+144|0);Nd(e+16|0,e+208|0);Kd(e+80|0,e+64|0);Kd(e+96|0,e+48|0);Kd(e+112|0,e+32|0);Kd(e+128|0,e+16|0);Ge(e+64|0,e+80|0);Kd(e+64|0,e+96|0);Ld(e+80|0,e+112|0);Ge(e+32|0,e+128|0);Kd(e+32|0,e+80|0);Ge(e+16|0,e+64|0);Ld(e+16|0,e+32|0);Kd(e+16|0,e+96|0);Ge(e+48|0,e+112|0);Kd(e+48|0,e+128|0);Kd(e+80|0,e+96|0);Ld(e+48|0,e+80|0);Kd(e+48|0,e+128|0);Kd(e+112|0,e+48|0);Ge(e+96|0,e+32|0);Kd(e+96|0,e+48|0);Ld(e+96|0,e+128|0);Kd(e+112|0,e+96|0);Kd(e+32|0,e+96|0);Ld(e+32|0,e+16|0);Kd(e+32|0,e+64|0);Ge(e+64|0,e+208|0);Ge(e+128|0,e+144|0);Ge(e+96|0,e+16|0);Kd(e+96|0,e+32|0);Ld(e+96|0,e+208|0);Kd(e+208|0,e+144|0);Ld(e+208|0,e+32|0);Ld(e+144|0,e+16|0);Kd(e+208|0,e+144|0);Kd(e+144|0,e+96|0);Kd(e+64|0,e+256|0);Kd(e+128|0,e+192|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+256|0);Kd(e+256|0,e+192|0);Ld(e+256|0,e+112|0);Ld(e+192|0,e+48|0);Kd(e+256|0,e+192|0);Kd(e+192|0,e+96|0);Kd(e+208|0,e+64|0);Kd(e+256|0,e+64|0);Kd(e+144|0,e+128|0);Kd(e+192|0,e+128|0);Ge(e+64|0,e+176|0);Ge(e+128|0,e+240|0);Kd(e+64|0,e+224|0);Kd(e+128|0,e+160|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+224|0);Kd(e+224|0,e+160|0);Ld(e+224|0,e+112|0);Ld(e+160|0,e+48|0);Kd(e+224|0,e+160|0);Kd(e+160|0,e+96|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+176|0);Kd(e+176|0,e+240|0);Ld(e+176|0,e+32|0);Ld(e+240|0,e+16|0);Kd(e+176|0,e+240|0);Kd(e+240|0,e+80|0);Kd(e+176|0,e+64|0);Kd(e+224|0,e+64|0);Kd(e+240|0,e+128|0);Kd(e+160|0,e+128|0);Kd(e+176|0,e+256|0);Kd(e+240|0,e+208|0);Kd(e+224|0,e+176|0);Kd(e+208|0,e+256|0);Kd(e+256|0,e+240|0);Kd(e+240|0,e+144|0);Kd(e+144|0,e+160|0);Kd(e+224|0,e+144|0);Kd(e+160|0,e+192|0);Kd(e+192|0,e+144|0);Kd(e+208|0,e+192|0);hh(e+144|0);vb(e+256|0,35238);vb(e+240|0,35238);vb(e+224|0,35238);vb(e+208|0,35238);vb(e+192|0,35238);vb(e+176|0,35238);vb(e+160|0,35238);vb(e+144|0,35238);c[e+128>>2]=c[a+896>>2];c[e+128+4>>2]=c[a+896+4>>2];c[e+128+8>>2]=c[a+896+8>>2];c[e+128+12>>2]=c[a+896+12>>2];c[e+112>>2]=c[a+912>>2];c[e+112+4>>2]=c[a+912+4>>2];c[e+112+8>>2]=c[a+912+8>>2];c[e+112+12>>2]=c[a+912+12>>2];c[e+96>>2]=c[a+928>>2];c[e+96+4>>2]=c[a+928+4>>2];c[e+96+8>>2]=c[a+928+8>>2];c[e+96+12>>2]=c[a+928+12>>2];c[e+80>>2]=c[a+944>>2];c[e+80+4>>2]=c[a+944+4>>2];c[e+80+8>>2]=c[a+944+8>>2];c[e+80+12>>2]=c[a+944+12>>2];c[e+64>>2]=c[a+960>>2];c[e+64+4>>2]=c[a+960+4>>2];c[e+64+8>>2]=c[a+960+8>>2];c[e+64+12>>2]=c[a+960+12>>2];c[e+48>>2]=c[a+976>>2];c[e+48+4>>2]=c[a+976+4>>2];c[e+48+8>>2]=c[a+976+8>>2];c[e+48+12>>2]=c[a+976+12>>2];c[e+32>>2]=c[a+992>>2];c[e+32+4>>2]=c[a+992+4>>2];c[e+32+8>>2]=c[a+992+8>>2];c[e+32+12>>2]=c[a+992+12>>2];c[e+16>>2]=c[a+1008>>2];c[e+16+4>>2]=c[a+1008+4>>2];c[e+16+8>>2]=c[a+1008+8>>2];c[e+16+12>>2]=c[a+1008+12>>2];Pe(e+128|0);Pe(e+112|0);Pe(e+48|0);Pe(e+32|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+224|0,e+96|0);Kd(e+208|0,e+80|0);Kd(e+192|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+160|0,e+32|0);Kd(e+144|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+224|0,e+96|0);Kd(e+208|0,e+80|0);Kd(e+192|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+160|0,e+32|0);Kd(e+144|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+224|0,e+96|0);Kd(e+208|0,e+80|0);Kd(e+192|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+160|0,e+32|0);Kd(e+144|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+224|0,e+96|0);Kd(e+208|0,e+80|0);Kd(e+192|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+160|0,e+32|0);Kd(e+144|0,e+16|0);c[a+1024>>2]=c[e+256>>2];c[a+1024+4>>2]=c[e+256+4>>2];c[a+1024+8>>2]=c[e+256+8>>2];c[a+1024+12>>2]=c[e+256+12>>2];c[a+1040>>2]=c[e+240>>2];c[a+1040+4>>2]=c[e+240+4>>2];c[a+1040+8>>2]=c[e+240+8>>2];c[a+1040+12>>2]=c[e+240+12>>2];c[a+1056>>2]=c[e+224>>2];c[a+1056+4>>2]=c[e+224+4>>2];c[a+1056+8>>2]=c[e+224+8>>2];c[a+1056+12>>2]=c[e+224+12>>2];c[a+1072>>2]=c[e+208>>2];c[a+1072+4>>2]=c[e+208+4>>2];c[a+1072+8>>2]=c[e+208+8>>2];c[a+1072+12>>2]=c[e+208+12>>2];c[a+1088>>2]=c[e+192>>2];c[a+1088+4>>2]=c[e+192+4>>2];c[a+1088+8>>2]=c[e+192+8>>2];c[a+1088+12>>2]=c[e+192+12>>2];c[a+1104>>2]=c[e+176>>2];c[a+1104+4>>2]=c[e+176+4>>2];c[a+1104+8>>2]=c[e+176+8>>2];c[a+1104+12>>2]=c[e+176+12>>2];c[a+1120>>2]=c[e+160>>2];c[a+1120+4>>2]=c[e+160+4>>2];c[a+1120+8>>2]=c[e+160+8>>2];c[a+1120+12>>2]=c[e+160+12>>2];c[a+1136>>2]=c[e+144>>2];c[a+1136+4>>2]=c[e+144+4>>2];c[a+1136+8>>2]=c[e+144+8>>2];c[a+1136+12>>2]=c[e+144+12>>2];Pe(e+256|0);Pe(e+240|0);Pe(e+176|0);Pe(e+160|0);vb(e+256|0,35206);vb(e+240|0,35206);vb(e+224|0,35206);vb(e+208|0,35206);vb(e+192|0,35206);vb(e+176|0,35206);vb(e+160|0,35206);vb(e+144|0,35206);Kd(e+176|0,e+160|0);Kd(e+224|0,e+240|0);Kd(e+176|0,e+256|0);Kd(e+160|0,e+224|0);Kd(e+208|0,e+256|0);Kd(e+160|0,e+208|0);Kd(e+208|0,e+144|0);Kd(e+208|0,e+192|0);Kd(e+144|0,e+176|0);Kd(e+208|0,e+240|0);Kd(e+192|0,e+176|0);Kd(e+224|0,e+144|0);Kd(e+240|0,e+176|0);Ge(e+80|0,e+144|0);Ge(e+96|0,e+240|0);Ge(e+112|0,e+176|0);Ge(e+48|0,e+224|0);Ge(e+64|0,e+160|0);Kd(e+80|0,e+192|0);Kd(e+96|0,e+224|0);Kd(e+112|0,e+208|0);Kd(e+48|0,e+192|0);Kd(e+64|0,e+256|0);Ge(e+32|0,e+80|0);Ge(e+128|0,e+96|0);Ge(e+16|0,e+80|0);Nd(e+96|0,e+112|0);Nd(e+80|0,e+64|0);Kd(e+16|0,e+128|0);Ld(e+32|0,e+64|0);Ld(e+128|0,e+112|0);Kd(e+64|0,e+112|0);Ld(e+16|0,e+64|0);Ge(e+64|0,e+208|0);Kd(e+64|0,e+256|0);Ld(e+48|0,e+64|0);Kd(e+80|0,e+48|0);Kd(e+96|0,e+48|0);Ge(e+48|0,e+144|0);Kd(e+48|0,e+240|0);Ge(e+64|0,e+176|0);Ge(e+112|0,e+48|0);Kd(e+64|0,e+160|0);Nd(e+112|0,e+64|0);Ld(e+48|0,e+64|0);Kd(e+128|0,e+48|0);Kd(e+80|0,e+16|0);Kd(e+96|0,e+32|0);Kd(e+112|0,e+16|0);Kd(e+128|0,e+32|0);Kd(e+112|0,e+32|0);Ge(e+64|0,e+224|0);Ge(e+48|0,e+192|0);Ge(e+32|0,e+240|0);Ge(e+16|0,e+144|0);Ld(e+64|0,e+208|0);Ld(e+48|0,e+256|0);Ld(e+32|0,e+176|0);Nd(e+16|0,e+160|0);Kd(e+80|0,e+64|0);Kd(e+96|0,e+48|0);Kd(e+112|0,e+32|0);Kd(e+128|0,e+16|0);Ge(e+64|0,e+80|0);Kd(e+64|0,e+96|0);Ld(e+80|0,e+112|0);Ge(e+32|0,e+128|0);Kd(e+32|0,e+80|0);Ge(e+16|0,e+64|0);Ld(e+16|0,e+32|0);Kd(e+16|0,e+96|0);Ge(e+48|0,e+112|0);Kd(e+48|0,e+128|0);Kd(e+80|0,e+96|0);Ld(e+48|0,e+80|0);Kd(e+48|0,e+128|0);Kd(e+112|0,e+48|0);Ge(e+96|0,e+32|0);Kd(e+96|0,e+48|0);Ld(e+96|0,e+128|0);Kd(e+112|0,e+96|0);Kd(e+32|0,e+96|0);Ld(e+32|0,e+16|0);Kd(e+32|0,e+64|0);Ge(e+64|0,e+160|0);Ge(e+128|0,e+176|0);Ge(e+96|0,e+16|0);Kd(e+96|0,e+32|0);Ld(e+96|0,e+160|0);Kd(e+160|0,e+176|0);Ld(e+160|0,e+32|0);Ld(e+176|0,e+16|0);Kd(e+160|0,e+176|0);Kd(e+176|0,e+96|0);Kd(e+64|0,e+256|0);Kd(e+128|0,e+208|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+256|0);Kd(e+256|0,e+208|0);Ld(e+256|0,e+112|0);Ld(e+208|0,e+48|0);Kd(e+256|0,e+208|0);Kd(e+208|0,e+96|0);Kd(e+160|0,e+64|0);Kd(e+256|0,e+64|0);Kd(e+176|0,e+128|0);Kd(e+208|0,e+128|0);Ge(e+64|0,e+144|0);Ge(e+128|0,e+240|0);Kd(e+64|0,e+192|0);Kd(e+128|0,e+224|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+192|0);Kd(e+192|0,e+224|0);Ld(e+192|0,e+112|0);Ld(e+224|0,e+48|0);Kd(e+192|0,e+224|0);Kd(e+224|0,e+96|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+144|0);Kd(e+144|0,e+240|0);Ld(e+144|0,e+32|0);Ld(e+240|0,e+16|0);Kd(e+144|0,e+240|0);Kd(e+240|0,e+80|0);Kd(e+144|0,e+64|0);Kd(e+192|0,e+64|0);Kd(e+240|0,e+128|0);Kd(e+224|0,e+128|0);Kd(e+144|0,e+256|0);Kd(e+240|0,e+160|0);Kd(e+192|0,e+144|0);Kd(e+160|0,e+256|0);Kd(e+256|0,e+240|0);Kd(e+240|0,e+176|0);Kd(e+176|0,e+224|0);Kd(e+192|0,e+176|0);Kd(e+224|0,e+208|0);Kd(e+208|0,e+176|0);Kd(e+160|0,e+208|0);hh(e+256|0);hh(e+240|0);hh(e+160|0);hh(e+208|0);vb(e+256|0,35238);vb(e+240|0,35238);vb(e+192|0,35238);vb(e+160|0,35238);vb(e+208|0,35238);vb(e+144|0,35238);vb(e+224|0,35238);vb(e+176|0,35238);c[e+128>>2]=c[a+1024>>2];c[e+128+4>>2]=c[a+1024+4>>2];c[e+128+8>>2]=c[a+1024+8>>2];c[e+128+12>>2]=c[a+1024+12>>2];c[e+112>>2]=c[a+1040>>2];c[e+112+4>>2]=c[a+1040+4>>2];c[e+112+8>>2]=c[a+1040+8>>2];c[e+112+12>>2]=c[a+1040+12>>2];c[e+96>>2]=c[a+1056>>2];c[e+96+4>>2]=c[a+1056+4>>2];c[e+96+8>>2]=c[a+1056+8>>2];c[e+96+12>>2]=c[a+1056+12>>2];c[e+80>>2]=c[a+1072>>2];c[e+80+4>>2]=c[a+1072+4>>2];c[e+80+8>>2]=c[a+1072+8>>2];c[e+80+12>>2]=c[a+1072+12>>2];c[e+64>>2]=c[a+1088>>2];c[e+64+4>>2]=c[a+1088+4>>2];c[e+64+8>>2]=c[a+1088+8>>2];c[e+64+12>>2]=c[a+1088+12>>2];c[e+48>>2]=c[a+1104>>2];c[e+48+4>>2]=c[a+1104+4>>2];c[e+48+8>>2]=c[a+1104+8>>2];c[e+48+12>>2]=c[a+1104+12>>2];c[e+32>>2]=c[a+1120>>2];c[e+32+4>>2]=c[a+1120+4>>2];c[e+32+8>>2]=c[a+1120+8>>2];c[e+32+12>>2]=c[a+1120+12>>2];c[e+16>>2]=c[a+1136>>2];c[e+16+4>>2]=c[a+1136+4>>2];c[e+16+8>>2]=c[a+1136+8>>2];c[e+16+12>>2]=c[a+1136+12>>2];Pe(e+128|0);Pe(e+112|0);Pe(e+48|0);Pe(e+32|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+192|0,e+96|0);Kd(e+160|0,e+80|0);Kd(e+208|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+224|0,e+32|0);Kd(e+176|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+192|0,e+96|0);Kd(e+160|0,e+80|0);Kd(e+208|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+224|0,e+32|0);Kd(e+176|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+192|0,e+96|0);Kd(e+160|0,e+80|0);Kd(e+208|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+224|0,e+32|0);Kd(e+176|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+192|0,e+96|0);Kd(e+160|0,e+80|0);Kd(e+208|0,e+64|0);Kd(e+144|0,e+48|0);Kd(e+224|0,e+32|0);Kd(e+176|0,e+16|0);c[a+1152>>2]=c[e+256>>2];c[a+1152+4>>2]=c[e+256+4>>2];c[a+1152+8>>2]=c[e+256+8>>2];c[a+1152+12>>2]=c[e+256+12>>2];c[a+1168>>2]=c[e+240>>2];c[a+1168+4>>2]=c[e+240+4>>2];c[a+1168+8>>2]=c[e+240+8>>2];c[a+1168+12>>2]=c[e+240+12>>2];c[a+1184>>2]=c[e+192>>2];c[a+1184+4>>2]=c[e+192+4>>2];c[a+1184+8>>2]=c[e+192+8>>2];c[a+1184+12>>2]=c[e+192+12>>2];c[a+1200>>2]=c[e+160>>2];c[a+1200+4>>2]=c[e+160+4>>2];c[a+1200+8>>2]=c[e+160+8>>2];c[a+1200+12>>2]=c[e+160+12>>2];c[a+1216>>2]=c[e+208>>2];c[a+1216+4>>2]=c[e+208+4>>2];c[a+1216+8>>2]=c[e+208+8>>2];c[a+1216+12>>2]=c[e+208+12>>2];c[a+1232>>2]=c[e+144>>2];c[a+1232+4>>2]=c[e+144+4>>2];c[a+1232+8>>2]=c[e+144+8>>2];c[a+1232+12>>2]=c[e+144+12>>2];c[a+1248>>2]=c[e+224>>2];c[a+1248+4>>2]=c[e+224+4>>2];c[a+1248+8>>2]=c[e+224+8>>2];c[a+1248+12>>2]=c[e+224+12>>2];c[a+1264>>2]=c[e+176>>2];c[a+1264+4>>2]=c[e+176+4>>2];c[a+1264+8>>2]=c[e+176+8>>2];c[a+1264+12>>2]=c[e+176+12>>2];Pe(e+256|0);Pe(e+240|0);Pe(e+144|0);Pe(e+224|0);vb(e+256|0,35206);vb(e+240|0,35206);vb(e+192|0,35206);vb(e+160|0,35206);vb(e+208|0,35206);vb(e+144|0,35206);vb(e+224|0,35206);vb(e+176|0,35206);Kd(e+144|0,e+224|0);Kd(e+192|0,e+240|0);Kd(e+144|0,e+256|0);Kd(e+224|0,e+192|0);Kd(e+160|0,e+256|0);Kd(e+224|0,e+160|0);Kd(e+160|0,e+176|0);Kd(e+160|0,e+208|0);Kd(e+176|0,e+144|0);Kd(e+160|0,e+240|0);Kd(e+208|0,e+144|0);Kd(e+192|0,e+176|0);Kd(e+240|0,e+144|0);Ge(e+80|0,e+176|0);Ge(e+96|0,e+240|0);Ge(e+112|0,e+144|0);Ge(e+48|0,e+192|0);Ge(e+64|0,e+224|0);Kd(e+80|0,e+208|0);Kd(e+96|0,e+192|0);Kd(e+112|0,e+160|0);Kd(e+48|0,e+208|0);Kd(e+64|0,e+256|0);Ge(e+32|0,e+80|0);Ge(e+128|0,e+96|0);Ge(e+16|0,e+80|0);Nd(e+96|0,e+112|0);Nd(e+80|0,e+64|0);Kd(e+16|0,e+128|0);Ld(e+32|0,e+64|0);Ld(e+128|0,e+112|0);Kd(e+64|0,e+112|0);Ld(e+16|0,e+64|0);Ge(e+64|0,e+160|0);Kd(e+64|0,e+256|0);Ld(e+48|0,e+64|0);Kd(e+80|0,e+48|0);Kd(e+96|0,e+48|0);Ge(e+48|0,e+176|0);Kd(e+48|0,e+240|0);Ge(e+64|0,e+144|0);Ge(e+112|0,e+48|0);Kd(e+64|0,e+224|0);Nd(e+112|0,e+64|0);Ld(e+48|0,e+64|0);Kd(e+128|0,e+48|0);Kd(e+80|0,e+16|0);Kd(e+96|0,e+32|0);Kd(e+112|0,e+16|0);Kd(e+128|0,e+32|0);Kd(e+112|0,e+32|0);Ge(e+64|0,e+192|0);Ge(e+48|0,e+208|0);Ge(e+32|0,e+240|0);Ge(e+16|0,e+176|0);Ld(e+64|0,e+160|0);Ld(e+48|0,e+256|0);Ld(e+32|0,e+144|0);Nd(e+16|0,e+224|0);Kd(e+80|0,e+64|0);Kd(e+96|0,e+48|0);Kd(e+112|0,e+32|0);Kd(e+128|0,e+16|0);Ge(e+64|0,e+80|0);Kd(e+64|0,e+96|0);Ld(e+80|0,e+112|0);Ge(e+32|0,e+128|0);Kd(e+32|0,e+80|0);Ge(e+16|0,e+64|0);Ld(e+16|0,e+32|0);Kd(e+16|0,e+96|0);Ge(e+48|0,e+112|0);Kd(e+48|0,e+128|0);Kd(e+80|0,e+96|0);Ld(e+48|0,e+80|0);Kd(e+48|0,e+128|0);Kd(e+112|0,e+48|0);Ge(e+96|0,e+32|0);Kd(e+96|0,e+48|0);Ld(e+96|0,e+128|0);Kd(e+112|0,e+96|0);Kd(e+32|0,e+96|0);Ld(e+32|0,e+16|0);Kd(e+32|0,e+64|0);Ge(e+64|0,e+224|0);Ge(e+128|0,e+144|0);Ge(e+96|0,e+16|0);Kd(e+96|0,e+32|0);Ld(e+96|0,e+224|0);Kd(e+224|0,e+144|0);Ld(e+224|0,e+32|0);Ld(e+144|0,e+16|0);Kd(e+224|0,e+144|0);Kd(e+144|0,e+96|0);Kd(e+64|0,e+256|0);Kd(e+128|0,e+160|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+256|0);Kd(e+256|0,e+160|0);Ld(e+256|0,e+112|0);Ld(e+160|0,e+48|0);Kd(e+256|0,e+160|0);Kd(e+160|0,e+96|0);Kd(e+224|0,e+64|0);Kd(e+256|0,e+64|0);Kd(e+144|0,e+128|0);Kd(e+160|0,e+128|0);Ge(e+64|0,e+176|0);Ge(e+128|0,e+240|0);Kd(e+64|0,e+208|0);Kd(e+128|0,e+192|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+64|0);Kd(e+64|0,e+128|0);Ld(e+64|0,e+32|0);Ld(e+128|0,e+16|0);Kd(e+128|0,e+64|0);Kd(e+64|0,e+80|0);Ge(e+96|0,e+48|0);Kd(e+96|0,e+112|0);Ld(e+96|0,e+208|0);Kd(e+208|0,e+192|0);Ld(e+208|0,e+112|0);Ld(e+192|0,e+48|0);Kd(e+208|0,e+192|0);Kd(e+192|0,e+96|0);Kd(e+16|0,e+48|0);Kd(e+32|0,e+112|0);Ge(e+80|0,e+16|0);Kd(e+80|0,e+32|0);Ld(e+80|0,e+176|0);Kd(e+176|0,e+240|0);Ld(e+176|0,e+32|0);Ld(e+240|0,e+16|0);Kd(e+176|0,e+240|0);Kd(e+240|0,e+80|0);Kd(e+176|0,e+64|0);Kd(e+208|0,e+64|0);Kd(e+240|0,e+128|0);Kd(e+192|0,e+128|0);Kd(e+176|0,e+256|0);Kd(e+240|0,e+224|0);Kd(e+208|0,e+176|0);Kd(e+224|0,e+256|0);Kd(e+256|0,e+240|0);Kd(e+240|0,e+144|0);Kd(e+144|0,e+192|0);Kd(e+208|0,e+144|0);Kd(e+192|0,e+160|0);Kd(e+160|0,e+144|0);Kd(e+224|0,e+160|0);hh(e+240|0);hh(e+208|0);hh(e+160|0);hh(e+176|0);vb(e+256|0,35238);vb(e+240|0,35238);vb(e+208|0,35238);vb(e+224|0,35238);vb(e+160|0,35238);vb(e+176|0,35238);vb(e+192|0,35238);vb(e+144|0,35238);c[e+128>>2]=c[a+1152>>2];c[e+128+4>>2]=c[a+1152+4>>2];c[e+128+8>>2]=c[a+1152+8>>2];c[e+128+12>>2]=c[a+1152+12>>2];c[e+112>>2]=c[a+1168>>2];c[e+112+4>>2]=c[a+1168+4>>2];c[e+112+8>>2]=c[a+1168+8>>2];c[e+112+12>>2]=c[a+1168+12>>2];c[e+96>>2]=c[a+1184>>2];c[e+96+4>>2]=c[a+1184+4>>2];c[e+96+8>>2]=c[a+1184+8>>2];c[e+96+12>>2]=c[a+1184+12>>2];c[e+80>>2]=c[a+1200>>2];c[e+80+4>>2]=c[a+1200+4>>2];c[e+80+8>>2]=c[a+1200+8>>2];c[e+80+12>>2]=c[a+1200+12>>2];c[e+64>>2]=c[a+1216>>2];c[e+64+4>>2]=c[a+1216+4>>2];c[e+64+8>>2]=c[a+1216+8>>2];c[e+64+12>>2]=c[a+1216+12>>2];c[e+48>>2]=c[a+1232>>2];c[e+48+4>>2]=c[a+1232+4>>2];c[e+48+8>>2]=c[a+1232+8>>2];c[e+48+12>>2]=c[a+1232+12>>2];c[e+32>>2]=c[a+1248>>2];c[e+32+4>>2]=c[a+1248+4>>2];c[e+32+8>>2]=c[a+1248+8>>2];c[e+32+12>>2]=c[a+1248+12>>2];c[e+16>>2]=c[a+1264>>2];c[e+16+4>>2]=c[a+1264+4>>2];c[e+16+8>>2]=c[a+1264+8>>2];c[e+16+12>>2]=c[a+1264+12>>2];Pe(e+128|0);Pe(e+112|0);Pe(e+48|0);Pe(e+32|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+208|0,e+96|0);Kd(e+224|0,e+80|0);Kd(e+160|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+192|0,e+32|0);Kd(e+144|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+208|0,e+96|0);Kd(e+224|0,e+80|0);Kd(e+160|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+192|0,e+32|0);Kd(e+144|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+208|0,e+96|0);Kd(e+224|0,e+80|0);Kd(e+160|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+192|0,e+32|0);Kd(e+144|0,e+16|0);ye(e+128|0);ye(e+112|0);ye(e+96|0);ye(e+80|0);ye(e+64|0);ye(e+48|0);ye(e+32|0);ye(e+16|0);Kd(e+256|0,e+128|0);Kd(e+240|0,e+112|0);Kd(e+208|0,e+96|0);Kd(e+224|0,e+80|0);Kd(e+160|0,e+64|0);Kd(e+176|0,e+48|0);Kd(e+192|0,e+32|0);Kd(e+144|0,e+16|0);vb(e+256|0,35222);vb(e+240|0,35222);vb(e+192|0,35222);vb(e+160|0,35222);vb(e+208|0,35222);vb(e+144|0,35222);vb(e+224|0,35222);vb(e+176|0,35222);c[a+1280>>2]=c[e+256>>2];c[a+1280+4>>2]=c[e+256+4>>2];c[a+1280+8>>2]=c[e+256+8>>2];c[a+1280+12>>2]=c[e+256+12>>2];c[a+1296>>2]=c[e+240>>2];c[a+1296+4>>2]=c[e+240+4>>2];c[a+1296+8>>2]=c[e+240+8>>2];c[a+1296+12>>2]=c[e+240+12>>2];c[a+1312>>2]=c[e+208>>2];c[a+1312+4>>2]=c[e+208+4>>2];c[a+1312+8>>2]=c[e+208+8>>2];c[a+1312+12>>2]=c[e+208+12>>2];c[a+1328>>2]=c[e+224>>2];c[a+1328+4>>2]=c[e+224+4>>2];c[a+1328+8>>2]=c[e+224+8>>2];c[a+1328+12>>2]=c[e+224+12>>2];c[a+1344>>2]=c[e+160>>2];c[a+1344+4>>2]=c[e+160+4>>2];c[a+1344+8>>2]=c[e+160+8>>2];c[a+1344+12>>2]=c[e+160+12>>2];c[a+1360>>2]=c[e+176>>2];c[a+1360+4>>2]=c[e+176+4>>2];c[a+1360+8>>2]=c[e+176+8>>2];c[a+1360+12>>2]=c[e+176+12>>2];c[a+1376>>2]=c[e+192>>2];c[a+1376+4>>2]=c[e+192+4>>2];c[a+1376+8>>2]=c[e+192+8>>2];c[a+1376+12>>2]=c[e+192+12>>2];c[a+1392>>2]=c[e+144>>2];c[a+1392+4>>2]=c[e+144+4>>2];c[a+1392+8>>2]=c[e+144+8>>2];c[a+1392+12>>2]=c[e+144+12>>2];l=d;return 0}function ia(b,d,e,f,g,h){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0;k=l;j=l=l+63&-64;l=l+400|0;Ge(j,g);while(1){c[j+256>>2]=c[j>>2];c[j+256+4>>2]=c[j+4>>2];c[j+256+8>>2]=c[j+8>>2];c[j+256+12>>2]=c[j+12>>2];Ge(j+240|0,j+256|0);vb(j+240|0,35254);Ge(j+224|0,j+240|0);Ge(j+208|0,j+240|0);Ge(j+192|0,j+240|0);Ge(j+176|0,j+240|0);Ge(j+160|0,j+240|0);Ge(j+144|0,j+240|0);Ig(j+240|0,1);Ig(j+224|0,2);Ig(j+208|0,3);Ig(j+192|0,4);Ig(j+176|0,5);Ig(j+160|0,6);Ig(j+144|0,7);vb(j+256|0,35222);vb(j+240|0,35270);vb(j+224|0,35270);vb(j+208|0,35270);vb(j+192|0,35270);vb(j+176|0,35270);vb(j+160|0,35270);vb(j+144|0,35270);Ge(j+128|0,j+160|0);ce(j+128|0,1);Kd(j+128|0,j+144|0);Ld(j+128|0,1104);Kd(j+144|0,j+128|0);ee(j+128|0,1);Kd(j+160|0,j+128|0);Ge(j+128|0,j+192|0);ce(j+128|0,1);Kd(j+128|0,j+176|0);Ld(j+128|0,1104);Kd(j+176|0,j+128|0);ee(j+128|0,1);Kd(j+192|0,j+128|0);Ge(j+128|0,j+224|0);ce(j+128|0,1);Kd(j+128|0,j+208|0);Ld(j+128|0,1104);Kd(j+208|0,j+128|0);ee(j+128|0,1);Kd(j+224|0,j+128|0);Ge(j+128|0,j+256|0);ce(j+128|0,1);Kd(j+128|0,j+240|0);Ld(j+128|0,1104);Kd(j+240|0,j+128|0);ee(j+128|0,1);Kd(j+256|0,j+128|0);Ge(j+128|0,j+176|0);ce(j+128|0,2);Kd(j+128|0,j+144|0);Ld(j+128|0,1120);Kd(j+144|0,j+128|0);ee(j+128|0,2);Kd(j+176|0,j+128|0);Ge(j+128|0,j+192|0);ce(j+128|0,2);Kd(j+128|0,j+160|0);Ld(j+128|0,1120);Kd(j+160|0,j+128|0);ee(j+128|0,2);Kd(j+192|0,j+128|0);Ge(j+128|0,j+240|0);ce(j+128|0,2);Kd(j+128|0,j+208|0);Ld(j+128|0,1120);Kd(j+208|0,j+128|0);ee(j+128|0,2);Kd(j+240|0,j+128|0);Ge(j+128|0,j+256|0);ce(j+128|0,2);Kd(j+128|0,j+224|0);Ld(j+128|0,1120);Kd(j+224|0,j+128|0);ee(j+128|0,2);Kd(j+256|0,j+128|0);Ge(j+128|0,j+208|0);ce(j+128|0,4);Kd(j+128|0,j+144|0);Ld(j+128|0,1136);Kd(j+144|0,j+128|0);ee(j+128|0,4);Kd(j+208|0,j+128|0);Ge(j+128|0,j+224|0);ce(j+128|0,4);Kd(j+128|0,j+160|0);Ld(j+128|0,1136);Kd(j+160|0,j+128|0);ee(j+128|0,4);Kd(j+224|0,j+128|0);Ge(j+128|0,j+240|0);ce(j+128|0,4);Kd(j+128|0,j+176|0);Ld(j+128|0,1136);Kd(j+176|0,j+128|0);ee(j+128|0,4);Kd(j+240|0,j+128|0);Ge(j+128|0,j+256|0);ce(j+128|0,4);Kd(j+128|0,j+192|0);Ld(j+128|0,1136);Kd(j+192|0,j+128|0);ee(j+128|0,4);Kd(j+256|0,j+128|0);Kd(j+256|0,h);vb(j+256|0,35286);Kd(j+240|0,h+16|0);vb(j+240|0,35286);Kd(j+224|0,h+32|0);vb(j+224|0,35286);Kd(j+208|0,h+48|0);vb(j+208|0,35286);Kd(j+192|0,h+64|0);vb(j+192|0,35286);Kd(j+176|0,h+80|0);vb(j+176|0,35286);Kd(j+160|0,h+96|0);vb(j+160|0,35286);Kd(j+144|0,h+112|0);vb(j+144|0,35286);Kd(j+176|0,j+160|0);Kd(j+224|0,j+240|0);Kd(j+176|0,j+256|0);Kd(j+160|0,j+224|0);Kd(j+208|0,j+256|0);Kd(j+160|0,j+208|0);Kd(j+208|0,j+144|0);Kd(j+208|0,j+192|0);Kd(j+144|0,j+176|0);Kd(j+208|0,j+240|0);Kd(j+192|0,j+176|0);Kd(j+224|0,j+144|0);Kd(j+240|0,j+176|0);Ge(j+80|0,j+144|0);Ge(j+96|0,j+240|0);Ge(j+112|0,j+176|0);Ge(j+48|0,j+224|0);Ge(j+64|0,j+160|0);Kd(j+80|0,j+192|0);Kd(j+96|0,j+224|0);Kd(j+112|0,j+208|0);Kd(j+48|0,j+192|0);Kd(j+64|0,j+256|0);Ge(j+32|0,j+80|0);Ge(j+128|0,j+96|0);Ge(j+16|0,j+80|0);Nd(j+96|0,j+112|0);Nd(j+80|0,j+64|0);Kd(j+16|0,j+128|0);Ld(j+32|0,j+64|0);Ld(j+128|0,j+112|0);Kd(j+64|0,j+112|0);Ld(j+16|0,j+64|0);Ge(j+64|0,j+208|0);Kd(j+64|0,j+256|0);Ld(j+48|0,j+64|0);Kd(j+80|0,j+48|0);Kd(j+96|0,j+48|0);Ge(j+48|0,j+144|0);Kd(j+48|0,j+240|0);Ge(j+64|0,j+176|0);Ge(j+112|0,j+48|0);Kd(j+64|0,j+160|0);Nd(j+112|0,j+64|0);Ld(j+48|0,j+64|0);Kd(j+128|0,j+48|0);Kd(j+80|0,j+16|0);Kd(j+96|0,j+32|0);Kd(j+112|0,j+16|0);Kd(j+128|0,j+32|0);Kd(j+112|0,j+32|0);Ge(j+64|0,j+224|0);Ge(j+48|0,j+192|0);Ge(j+32|0,j+240|0);Ge(j+16|0,j+144|0);Ld(j+64|0,j+208|0);Ld(j+48|0,j+256|0);Ld(j+32|0,j+176|0);Nd(j+16|0,j+160|0);Kd(j+80|0,j+64|0);Kd(j+96|0,j+48|0);Kd(j+112|0,j+32|0);Kd(j+128|0,j+16|0);Ge(j+64|0,j+80|0);Kd(j+64|0,j+96|0);Ld(j+80|0,j+112|0);Ge(j+32|0,j+128|0);Kd(j+32|0,j+80|0);Ge(j+16|0,j+64|0);Ld(j+16|0,j+32|0);Kd(j+16|0,j+96|0);Ge(j+48|0,j+112|0);Kd(j+48|0,j+128|0);Kd(j+80|0,j+96|0);Ld(j+48|0,j+80|0);Kd(j+48|0,j+128|0);Kd(j+112|0,j+48|0);Ge(j+96|0,j+32|0);Kd(j+96|0,j+48|0);Ld(j+96|0,j+128|0);Kd(j+112|0,j+96|0);Kd(j+32|0,j+96|0);Ld(j+32|0,j+16|0);Kd(j+32|0,j+64|0);Ge(j+64|0,j+160|0);Ge(j+128|0,j+176|0);Ge(j+96|0,j+16|0);Kd(j+96|0,j+32|0);Ld(j+96|0,j+160|0);Kd(j+160|0,j+176|0);Ld(j+160|0,j+32|0);Ld(j+176|0,j+16|0);Kd(j+160|0,j+176|0);Kd(j+176|0,j+96|0);Kd(j+64|0,j+256|0);Kd(j+128|0,j+208|0);Kd(j+16|0,j+48|0);Kd(j+32|0,j+112|0);Ge(j+80|0,j+16|0);Kd(j+80|0,j+32|0);Ld(j+80|0,j+64|0);Kd(j+64|0,j+128|0);Ld(j+64|0,j+32|0);Ld(j+128|0,j+16|0);Kd(j+128|0,j+64|0);Kd(j+64|0,j+80|0);Ge(j+96|0,j+48|0);Kd(j+96|0,j+112|0);Ld(j+96|0,j+256|0);Kd(j+256|0,j+208|0);Ld(j+256|0,j+112|0);Ld(j+208|0,j+48|0);Kd(j+256|0,j+208|0);Kd(j+208|0,j+96|0);Kd(j+160|0,j+64|0);Kd(j+256|0,j+64|0);Kd(j+176|0,j+128|0);Kd(j+208|0,j+128|0);Ge(j+64|0,j+144|0);Ge(j+128|0,j+240|0);Kd(j+64|0,j+192|0);Kd(j+128|0,j+224|0);Ge(j+80|0,j+16|0);Kd(j+80|0,j+32|0);Ld(j+80|0,j+64|0);Kd(j+64|0,j+128|0);Ld(j+64|0,j+32|0);Ld(j+128|0,j+16|0);Kd(j+128|0,j+64|0);Kd(j+64|0,j+80|0);Ge(j+96|0,j+48|0);Kd(j+96|0,j+112|0);Ld(j+96|0,j+192|0);Kd(j+192|0,j+224|0);Ld(j+192|0,j+112|0);Ld(j+224|0,j+48|0);Kd(j+192|0,j+224|0);Kd(j+224|0,j+96|0);Kd(j+16|0,j+48|0);Kd(j+32|0,j+112|0);Ge(j+80|0,j+16|0);Kd(j+80|0,j+32|0);Ld(j+80|0,j+144|0);Kd(j+144|0,j+240|0);Ld(j+144|0,j+32|0);Ld(j+240|0,j+16|0);Kd(j+144|0,j+240|0);Kd(j+240|0,j+80|0);Kd(j+144|0,j+64|0);Kd(j+192|0,j+64|0);Kd(j+240|0,j+128|0);Kd(j+224|0,j+128|0);Kd(j+144|0,j+256|0);Kd(j+240|0,j+160|0);Kd(j+192|0,j+144|0);Kd(j+160|0,j+256|0);Kd(j+256|0,j+240|0);Kd(j+240|0,j+176|0);Kd(j+176|0,j+224|0);Kd(j+192|0,j+176|0);Kd(j+224|0,j+208|0);Kd(j+208|0,j+176|0);Kd(j+160|0,j+208|0);cd(j+128|0,j+256|0,147);cd(j+112|0,j+240|0,147);cd(j+96|0,j+192|0,147);cd(j+80|0,j+160|0,147);cd(j+64|0,j+208|0,147);cd(j+48|0,j+144|0,147);cd(j+32|0,j+224|0,147);cd(j+16|0,j+176|0,147);Kd(j+256|0,j+128|0);Kd(j+240|0,j+112|0);Kd(j+192|0,j+96|0);Kd(j+160|0,j+80|0);Kd(j+208|0,j+64|0);Kd(j+144|0,j+48|0);Kd(j+224|0,j+32|0);Kd(j+176|0,j+16|0);Kd(j+128|0,j+176|0);Kd(j+112|0,j+256|0);Kd(j+96|0,j+240|0);Kd(j+112|0,j+176|0);Kd(j+80|0,j+192|0);Kd(j+64|0,j+160|0);Kd(j+48|0,j+208|0);Kd(j+80|0,j+176|0);Kd(j+32|0,j+144|0);Kd(j+16|0,j+224|0);Kd(j+64|0,j+176|0);cd(j+256|0,j+256|0,78);cd(j+240|0,j+240|0,78);cd(j+192|0,j+192|0,78);cd(j+160|0,j+160|0,78);cd(j+208|0,j+208|0,78);cd(j+144|0,j+144|0,78);cd(j+224|0,j+224|0,78);cd(j+176|0,j+176|0,78);Kd(j+128|0,j+256|0);Kd(j+112|0,j+240|0);Kd(j+96|0,j+192|0);Kd(j+80|0,j+160|0);Kd(j+64|0,j+208|0);Kd(j+48|0,j+144|0);Kd(j+32|0,j+224|0);Kd(j+16|0,j+176|0);Kd(j+128|0,h+128|0);vb(j+128|0,35286);Kd(j+112|0,h+144|0);vb(j+112|0,35286);Kd(j+96|0,h+160|0);vb(j+96|0,35286);Kd(j+80|0,h+176|0);vb(j+80|0,35286);Kd(j+64|0,h+192|0);vb(j+64|0,35286);Kd(j+48|0,h+208|0);vb(j+48|0,35286);Kd(j+32|0,h+224|0);vb(j+32|0,35286);Kd(j+16|0,h+240|0);vb(j+16|0,35286);Kd(j+48|0,j+32|0);Kd(j+96|0,j+112|0);Kd(j+48|0,j+128|0);Kd(j+32|0,j+96|0);Kd(j+80|0,j+128|0);Kd(j+32|0,j+80|0);Kd(j+80|0,j+16|0);Kd(j+80|0,j+64|0);Kd(j+16|0,j+48|0);Kd(j+80|0,j+112|0);Kd(j+64|0,j+48|0);Kd(j+96|0,j+16|0);Kd(j+112|0,j+48|0);Ge(j+208|0,j+16|0);Ge(j+224|0,j+112|0);Ge(j+240|0,j+48|0);Ge(j+176|0,j+96|0);Ge(j+192|0,j+32|0);Kd(j+208|0,j+64|0);Kd(j+224|0,j+96|0);Kd(j+240|0,j+80|0);Kd(j+176|0,j+64|0);Kd(j+192|0,j+128|0);Ge(j+160|0,j+208|0);Ge(j+256|0,j+224|0);Ge(j+144|0,j+208|0);Nd(j+224|0,j+240|0);Nd(j+208|0,j+192|0);Kd(j+144|0,j+256|0);Ld(j+160|0,j+192|0);Ld(j+256|0,j+240|0);Kd(j+192|0,j+240|0);Ld(j+144|0,j+192|0);Ge(j+192|0,j+80|0);Kd(j+192|0,j+128|0);Ld(j+176|0,j+192|0);Kd(j+208|0,j+176|0);Kd(j+224|0,j+176|0);Ge(j+176|0,j+16|0);Kd(j+176|0,j+112|0);Ge(j+192|0,j+48|0);Ge(j+240|0,j+176|0);Kd(j+192|0,j+32|0);Nd(j+240|0,j+192|0);Ld(j+176|0,j+192|0);Kd(j+256|0,j+176|0);Kd(j+208|0,j+144|0);Kd(j+224|0,j+160|0);Kd(j+240|0,j+144|0);Kd(j+256|0,j+160|0);Kd(j+240|0,j+160|0);Ge(j+192|0,j+96|0);Ge(j+176|0,j+64|0);Ge(j+160|0,j+112|0);Ge(j+144|0,j+16|0);Ld(j+192|0,j+80|0);Ld(j+176|0,j+128|0);Ld(j+160|0,j+48|0);Nd(j+144|0,j+32|0);Kd(j+208|0,j+192|0);Kd(j+224|0,j+176|0);Kd(j+240|0,j+160|0);Kd(j+256|0,j+144|0);Ge(j+192|0,j+208|0);Kd(j+192|0,j+224|0);Ld(j+208|0,j+240|0);Ge(j+160|0,j+256|0);Kd(j+160|0,j+208|0);Ge(j+144|0,j+192|0);Ld(j+144|0,j+160|0);Kd(j+144|0,j+224|0);Ge(j+176|0,j+240|0);Kd(j+176|0,j+256|0);Kd(j+208|0,j+224|0);Ld(j+176|0,j+208|0);Kd(j+176|0,j+256|0);Kd(j+240|0,j+176|0);Ge(j+224|0,j+160|0);Kd(j+224|0,j+176|0);Ld(j+224|0,j+256|0);Kd(j+240|0,j+224|0);Kd(j+160|0,j+224|0);Ld(j+160|0,j+144|0);Kd(j+160|0,j+192|0);Ge(j+192|0,j+32|0);Ge(j+256|0,j+48|0);Ge(j+224|0,j+144|0);Kd(j+224|0,j+160|0);Ld(j+224|0,j+32|0);Kd(j+32|0,j+48|0);Ld(j+32|0,j+160|0);Ld(j+48|0,j+144|0);Kd(j+32|0,j+48|0);Kd(j+48|0,j+224|0);Kd(j+192|0,j+128|0);Kd(j+256|0,j+80|0);Kd(j+144|0,j+176|0);Kd(j+160|0,j+240|0);Ge(j+208|0,j+144|0);Kd(j+208|0,j+160|0);Ld(j+208|0,j+192|0);Kd(j+192|0,j+256|0);Ld(j+192|0,j+160|0);Ld(j+256|0,j+144|0);Kd(j+256|0,j+192|0);Kd(j+192|0,j+208|0);Ge(j+224|0,j+176|0);Kd(j+224|0,j+240|0);Ld(j+224|0,j+128|0);Kd(j+128|0,j+80|0);Ld(j+128|0,j+240|0);Ld(j+80|0,j+176|0);Kd(j+128|0,j+80|0);Kd(j+80|0,j+224|0);Kd(j+32|0,j+192|0);Kd(j+128|0,j+192|0);Kd(j+48|0,j+256|0);Kd(j+80|0,j+256|0);Ge(j+192|0,j+16|0);Ge(j+256|0,j+112|0);Kd(j+192|0,j+64|0);Kd(j+256|0,j+96|0);Ge(j+208|0,j+144|0);Kd(j+208|0,j+160|0);Ld(j+208|0,j+192|0);Kd(j+192|0,j+256|0);Ld(j+192|0,j+160|0);Ld(j+256|0,j+144|0);Kd(j+256|0,j+192|0);Kd(j+192|0,j+208|0);Ge(j+224|0,j+176|0);Kd(j+224|0,j+240|0);Ld(j+224|0,j+64|0);Kd(j+64|0,j+96|0);Ld(j+64|0,j+240|0);Ld(j+96|0,j+176|0);Kd(j+64|0,j+96|0);Kd(j+96|0,j+224|0);Kd(j+144|0,j+176|0);Kd(j+160|0,j+240|0);Ge(j+208|0,j+144|0);Kd(j+208|0,j+160|0);Ld(j+208|0,j+16|0);Kd(j+16|0,j+112|0);Ld(j+16|0,j+160|0);Ld(j+112|0,j+144|0);Kd(j+16|0,j+112|0);Kd(j+112|0,j+208|0);Kd(j+16|0,j+192|0);Kd(j+64|0,j+192|0);Kd(j+112|0,j+256|0);Kd(j+96|0,j+256|0);Kd(j+16|0,j+128|0);Kd(j+112|0,j+32|0);Kd(j+64|0,j+16|0);Kd(j+32|0,j+128|0);Kd(j+128|0,j+112|0);Kd(j+112|0,j+48|0);Kd(j+48|0,j+96|0);Kd(j+64|0,j+48|0);Kd(j+96|0,j+80|0);Kd(j+80|0,j+48|0);Kd(j+32|0,j+80|0);cd(j+256|0,j+128|0,147);cd(j+240|0,j+112|0,147);cd(j+224|0,j+64|0,147);cd(j+208|0,j+32|0,147);cd(j+192|0,j+80|0,147);cd(j+176|0,j+16|0,147);cd(j+160|0,j+96|0,147);cd(j+144|0,j+48|0,147);Kd(j+128|0,j+256|0);Kd(j+112|0,j+240|0);Kd(j+64|0,j+224|0);Kd(j+32|0,j+208|0);Kd(j+80|0,j+192|0);Kd(j+16|0,j+176|0);Kd(j+96|0,j+160|0);Kd(j+48|0,j+144|0);Kd(j+256|0,j+48|0);Kd(j+240|0,j+128|0);Kd(j+224|0,j+112|0);Kd(j+240|0,j+48|0);Kd(j+208|0,j+64|0);Kd(j+192|0,j+32|0);Kd(j+176|0,j+80|0);Kd(j+208|0,j+48|0);Kd(j+160|0,j+16|0);Kd(j+144|0,j+96|0);Kd(j+192|0,j+48|0);cd(j+128|0,j+128|0,78);cd(j+112|0,j+112|0,78);cd(j+64|0,j+64|0,78);cd(j+32|0,j+32|0,78);cd(j+80|0,j+80|0,78);cd(j+16|0,j+16|0,78);cd(j+96|0,j+96|0,78);cd(j+48|0,j+48|0,78);Kd(j+256|0,j+128|0);Kd(j+240|0,j+112|0);Kd(j+224|0,j+64|0);Kd(j+208|0,j+32|0);Kd(j+192|0,j+80|0);Kd(j+176|0,j+16|0);Kd(j+160|0,j+96|0);Kd(j+144|0,j+48|0);Kd(j+256|0,h+256|0);vb(j+256|0,35286);Kd(j+240|0,h+272|0);vb(j+240|0,35286);Kd(j+224|0,h+288|0);vb(j+224|0,35286);Kd(j+208|0,h+304|0);vb(j+208|0,35286);Kd(j+192|0,h+320|0);vb(j+192|0,35286);Kd(j+176|0,h+336|0);vb(j+176|0,35286);Kd(j+160|0,h+352|0);vb(j+160|0,35286);Kd(j+144|0,h+368|0);vb(j+144|0,35286);Kd(j+176|0,j+160|0);Kd(j+224|0,j+240|0);Kd(j+176|0,j+256|0);Kd(j+160|0,j+224|0);Kd(j+208|0,j+256|0);Kd(j+160|0,j+208|0);Kd(j+208|0,j+144|0);Kd(j+208|0,j+192|0);Kd(j+144|0,j+176|0);Kd(j+208|0,j+240|0);Kd(j+192|0,j+176|0);Kd(j+224|0,j+144|0);Kd(j+240|0,j+176|0);Ge(j+80|0,j+144|0);Ge(j+96|0,j+240|0);Ge(j+112|0,j+176|0);Ge(j+48|0,j+224|0);Ge(j+64|0,j+160|0);Kd(j+80|0,j+192|0);Kd(j+96|0,j+224|0);Kd(j+112|0,j+208|0);Kd(j+48|0,j+192|0);Kd(j+64|0,j+256|0);Ge(j+32|0,j+80|0);Ge(j+128|0,j+96|0);Ge(j+16|0,j+80|0);Nd(j+96|0,j+112|0);Nd(j+80|0,j+64|0);Kd(j+16|0,j+128|0);Ld(j+32|0,j+64|0);Ld(j+128|0,j+112|0);Kd(j+64|0,j+112|0);Ld(j+16|0,j+64|0);Ge(j+64|0,j+208|0);Kd(j+64|0,j+256|0);Ld(j+48|0,j+64|0);Kd(j+80|0,j+48|0);Kd(j+96|0,j+48|0);Ge(j+48|0,j+144|0);Kd(j+48|0,j+240|0);Ge(j+64|0,j+176|0);Ge(j+112|0,j+48|0);Kd(j+64|0,j+160|0);Nd(j+112|0,j+64|0);Ld(j+48|0,j+64|0);Kd(j+128|0,j+48|0);Kd(j+80|0,j+16|0);Kd(j+96|0,j+32|0);Kd(j+112|0,j+16|0);Kd(j+128|0,j+32|0);Kd(j+112|0,j+32|0);Ge(j+64|0,j+224|0);Ge(j+48|0,j+192|0);Ge(j+32|0,j+240|0);Ge(j+16|0,j+144|0);Ld(j+64|0,j+208|0);Ld(j+48|0,j+256|0);Ld(j+32|0,j+176|0);Nd(j+16|0,j+160|0);Kd(j+80|0,j+64|0);Kd(j+96|0,j+48|0);Kd(j+112|0,j+32|0);Kd(j+128|0,j+16|0);Ge(j+64|0,j+80|0);Kd(j+64|0,j+96|0);Ld(j+80|0,j+112|0);Ge(j+32|0,j+128|0);Kd(j+32|0,j+80|0);Ge(j+16|0,j+64|0);Ld(j+16|0,j+32|0);Kd(j+16|0,j+96|0);Ge(j+48|0,j+112|0);Kd(j+48|0,j+128|0);Kd(j+80|0,j+96|0);Ld(j+48|0,j+80|0);Kd(j+48|0,j+128|0);Kd(j+112|0,j+48|0);Ge(j+96|0,j+32|0);Kd(j+96|0,j+48|0);Ld(j+96|0,j+128|0);Kd(j+112|0,j+96|0);Kd(j+32|0,j+96|0);Ld(j+32|0,j+16|0);Kd(j+32|0,j+64|0);Ge(j+64|0,j+160|0);Ge(j+128|0,j+176|0);Ge(j+96|0,j+16|0);Kd(j+96|0,j+32|0);Ld(j+96|0,j+160|0);Kd(j+160|0,j+176|0);Ld(j+160|0,j+32|0);Ld(j+176|0,j+16|0);Kd(j+160|0,j+176|0);Kd(j+176|0,j+96|0);Kd(j+64|0,j+256|0);Kd(j+128|0,j+208|0);Kd(j+16|0,j+48|0);Kd(j+32|0,j+112|0);Ge(j+80|0,j+16|0);Kd(j+80|0,j+32|0);Ld(j+80|0,j+64|0);Kd(j+64|0,j+128|0);Ld(j+64|0,j+32|0);Ld(j+128|0,j+16|0);Kd(j+128|0,j+64|0);Kd(j+64|0,j+80|0);Ge(j+96|0,j+48|0);Kd(j+96|0,j+112|0);Ld(j+96|0,j+256|0);Kd(j+256|0,j+208|0);Ld(j+256|0,j+112|0);Ld(j+208|0,j+48|0);Kd(j+256|0,j+208|0);Kd(j+208|0,j+96|0);Kd(j+160|0,j+64|0);Kd(j+256|0,j+64|0);Kd(j+176|0,j+128|0);Kd(j+208|0,j+128|0);Ge(j+64|0,j+144|0);Ge(j+128|0,j+240|0);Kd(j+64|0,j+192|0);Kd(j+128|0,j+224|0);Ge(j+80|0,j+16|0);Kd(j+80|0,j+32|0);Ld(j+80|0,j+64|0);Kd(j+64|0,j+128|0);Ld(j+64|0,j+32|0);Ld(j+128|0,j+16|0);Kd(j+128|0,j+64|0);Kd(j+64|0,j+80|0);Ge(j+96|0,j+48|0);Kd(j+96|0,j+112|0);Ld(j+96|0,j+192|0);Kd(j+192|0,j+224|0);Ld(j+192|0,j+112|0);Ld(j+224|0,j+48|0);Kd(j+192|0,j+224|0);Kd(j+224|0,j+96|0);Kd(j+16|0,j+48|0);Kd(j+32|0,j+112|0);Ge(j+80|0,j+16|0);Kd(j+80|0,j+32|0);Ld(j+80|0,j+144|0);Kd(j+144|0,j+240|0);Ld(j+144|0,j+32|0);Ld(j+240|0,j+16|0);Kd(j+144|0,j+240|0);Kd(j+240|0,j+80|0);Kd(j+144|0,j+64|0);Kd(j+192|0,j+64|0);Kd(j+240|0,j+128|0);Kd(j+224|0,j+128|0);Kd(j+144|0,j+256|0);Kd(j+240|0,j+160|0);Kd(j+192|0,j+144|0);Kd(j+160|0,j+256|0);Kd(j+256|0,j+240|0);Kd(j+240|0,j+176|0);Kd(j+176|0,j+224|0);Kd(j+192|0,j+176|0);Kd(j+224|0,j+208|0);Kd(j+208|0,j+176|0);Kd(j+160|0,j+208|0);cd(j+128|0,j+256|0,147);cd(j+112|0,j+240|0,147);cd(j+96|0,j+192|0,147);cd(j+80|0,j+160|0,147);cd(j+64|0,j+208|0,147);cd(j+48|0,j+144|0,147);cd(j+32|0,j+224|0,147);cd(j+16|0,j+176|0,147);Kd(j+256|0,j+128|0);Kd(j+240|0,j+112|0);Kd(j+192|0,j+96|0);Kd(j+160|0,j+80|0);Kd(j+208|0,j+64|0);Kd(j+144|0,j+48|0);Kd(j+224|0,j+32|0);Kd(j+176|0,j+16|0);Kd(j+128|0,j+176|0);Kd(j+112|0,j+256|0);Kd(j+96|0,j+240|0);Kd(j+112|0,j+176|0);Kd(j+80|0,j+192|0);Kd(j+64|0,j+160|0);Kd(j+48|0,j+208|0);Kd(j+80|0,j+176|0);Kd(j+32|0,j+144|0);Kd(j+16|0,j+224|0);Kd(j+64|0,j+176|0);cd(j+256|0,j+256|0,78);cd(j+240|0,j+240|0,78);cd(j+192|0,j+192|0,78);cd(j+160|0,j+160|0,78);cd(j+208|0,j+208|0,78);cd(j+144|0,j+144|0,78);cd(j+224|0,j+224|0,78);cd(j+176|0,j+176|0,78);Kd(j+128|0,j+256|0);Kd(j+112|0,j+240|0);Kd(j+96|0,j+192|0);Kd(j+80|0,j+160|0);Kd(j+64|0,j+208|0);Kd(j+48|0,j+144|0);Kd(j+32|0,j+224|0);Kd(j+16|0,j+176|0);Kd(j+128|0,h+384|0);vb(j+128|0,35286);Kd(j+112|0,h+400|0);vb(j+112|0,35286);Kd(j+96|0,h+416|0);vb(j+96|0,35286);Kd(j+80|0,h+432|0);vb(j+80|0,35286);Kd(j+64|0,h+448|0);vb(j+64|0,35286);Kd(j+48|0,h+464|0);vb(j+48|0,35286);Kd(j+32|0,h+480|0);vb(j+32|0,35286);Kd(j+16|0,h+496|0);vb(j+16|0,35286);Kd(j+48|0,j+32|0);Kd(j+96|0,j+112|0);Kd(j+48|0,j+128|0);Kd(j+32|0,j+96|0);Kd(j+80|0,j+128|0);Kd(j+32|0,j+80|0);Kd(j+80|0,j+16|0);Kd(j+80|0,j+64|0);Kd(j+16|0,j+48|0);Kd(j+80|0,j+112|0);Kd(j+64|0,j+48|0);Kd(j+96|0,j+16|0);Kd(j+112|0,j+48|0);Ge(j+208|0,j+16|0);Ge(j+224|0,j+112|0);Ge(j+240|0,j+48|0);Ge(j+176|0,j+96|0);Ge(j+192|0,j+32|0);Kd(j+208|0,j+64|0);Kd(j+224|0,j+96|0);Kd(j+240|0,j+80|0);Kd(j+176|0,j+64|0);Kd(j+192|0,j+128|0);Ge(j+160|0,j+208|0);Ge(j+256|0,j+224|0);Ge(j+144|0,j+208|0);Nd(j+224|0,j+240|0);Nd(j+208|0,j+192|0);Kd(j+144|0,j+256|0);Ld(j+160|0,j+192|0);Ld(j+256|0,j+240|0);Kd(j+192|0,j+240|0);Ld(j+144|0,j+192|0);Ge(j+192|0,j+80|0);Kd(j+192|0,j+128|0);Ld(j+176|0,j+192|0);Kd(j+208|0,j+176|0);Kd(j+224|0,j+176|0);Ge(j+176|0,j+16|0);Kd(j+176|0,j+112|0);Ge(j+192|0,j+48|0);Ge(j+240|0,j+176|0);Kd(j+192|0,j+32|0);Nd(j+240|0,j+192|0);Ld(j+176|0,j+192|0);Kd(j+256|0,j+176|0);Kd(j+208|0,j+144|0);Kd(j+224|0,j+160|0);Kd(j+240|0,j+144|0);Kd(j+256|0,j+160|0);Kd(j+240|0,j+160|0);Ge(j+192|0,j+96|0);Ge(j+176|0,j+64|0);Ge(j+160|0,j+112|0);Ge(j+144|0,j+16|0);Ld(j+192|0,j+80|0);Ld(j+176|0,j+128|0);Ld(j+160|0,j+48|0);Nd(j+144|0,j+32|0);Kd(j+208|0,j+192|0);Kd(j+224|0,j+176|0);Kd(j+240|0,j+160|0);Kd(j+256|0,j+144|0);Ge(j+192|0,j+208|0);Kd(j+192|0,j+224|0);Ld(j+208|0,j+240|0);Ge(j+160|0,j+256|0);Kd(j+160|0,j+208|0);Ge(j+144|0,j+192|0);Ld(j+144|0,j+160|0);Kd(j+144|0,j+224|0);Ge(j+176|0,j+240|0);Kd(j+176|0,j+256|0);Kd(j+208|0,j+224|0);Ld(j+176|0,j+208|0);Kd(j+176|0,j+256|0);Kd(j+240|0,j+176|0);Ge(j+224|0,j+160|0);Kd(j+224|0,j+176|0);Ld(j+224|0,j+256|0);Kd(j+240|0,j+224|0);Kd(j+160|0,j+224|0);Ld(j+160|0,j+144|0);Kd(j+160|0,j+192|0);Ge(j+192|0,j+32|0);Ge(j+256|0,j+48|0);Ge(j+224|0,j+144|0);Kd(j+224|0,j+160|0);Ld(j+224|0,j+32|0);Kd(j+32|0,j+48|0);Ld(j+32|0,j+160|0);Ld(j+48|0,j+144|0);Kd(j+32|0,j+48|0);Kd(j+48|0,j+224|0);Kd(j+192|0,j+128|0);Kd(j+256|0,j+80|0);Kd(j+144|0,j+176|0);Kd(j+160|0,j+240|0);Ge(j+208|0,j+144|0);Kd(j+208|0,j+160|0);Ld(j+208|0,j+192|0);Kd(j+192|0,j+256|0);Ld(j+192|0,j+160|0);Ld(j+256|0,j+144|0);Kd(j+256|0,j+192|0);Kd(j+192|0,j+208|0);Ge(j+224|0,j+176|0);Kd(j+224|0,j+240|0);Ld(j+224|0,j+128|0);Kd(j+128|0,j+80|0);Ld(j+128|0,j+240|0);Ld(j+80|0,j+176|0);Kd(j+128|0,j+80|0);Kd(j+80|0,j+224|0);Kd(j+32|0,j+192|0);Kd(j+128|0,j+192|0);Kd(j+48|0,j+256|0);Kd(j+80|0,j+256|0);Ge(j+192|0,j+16|0);Ge(j+256|0,j+112|0);Kd(j+192|0,j+64|0);Kd(j+256|0,j+96|0);Ge(j+208|0,j+144|0);Kd(j+208|0,j+160|0);Ld(j+208|0,j+192|0);Kd(j+192|0,j+256|0);Ld(j+192|0,j+160|0);Ld(j+256|0,j+144|0);Kd(j+256|0,j+192|0);Kd(j+192|0,j+208|0);Ge(j+224|0,j+176|0);Kd(j+224|0,j+240|0);Ld(j+224|0,j+64|0);Kd(j+64|0,j+96|0);Ld(j+64|0,j+240|0);Ld(j+96|0,j+176|0);Kd(j+64|0,j+96|0);Kd(j+96|0,j+224|0);Kd(j+144|0,j+176|0);Kd(j+160|0,j+240|0);Ge(j+208|0,j+144|0);Kd(j+208|0,j+160|0);Ld(j+208|0,j+16|0);Kd(j+16|0,j+112|0);Ld(j+16|0,j+160|0);Ld(j+112|0,j+144|0);Kd(j+16|0,j+112|0);Kd(j+112|0,j+208|0);Kd(j+16|0,j+192|0);Kd(j+64|0,j+192|0);Kd(j+112|0,j+256|0);Kd(j+96|0,j+256|0);Kd(j+16|0,j+128|0);Kd(j+112|0,j+32|0);Kd(j+64|0,j+16|0);Kd(j+32|0,j+128|0);Kd(j+128|0,j+112|0);Kd(j+112|0,j+48|0);Kd(j+48|0,j+96|0);Kd(j+64|0,j+48|0);Kd(j+96|0,j+80|0);Kd(j+80|0,j+48|0);Kd(j+32|0,j+80|0);cd(j+256|0,j+128|0,147);cd(j+240|0,j+112|0,147);cd(j+224|0,j+64|0,147);cd(j+208|0,j+32|0,147);cd(j+192|0,j+80|0,147);cd(j+176|0,j+16|0,147);cd(j+160|0,j+96|0,147);cd(j+144|0,j+48|0,147);Kd(j+128|0,j+256|0);Kd(j+112|0,j+240|0);Kd(j+64|0,j+224|0);Kd(j+32|0,j+208|0);Kd(j+80|0,j+192|0);Kd(j+16|0,j+176|0);Kd(j+96|0,j+160|0);Kd(j+48|0,j+144|0);Kd(j+256|0,j+48|0);Kd(j+240|0,j+128|0);Kd(j+224|0,j+112|0);Kd(j+240|0,j+48|0);Kd(j+208|0,j+64|0);Kd(j+192|0,j+32|0);Kd(j+176|0,j+80|0);Kd(j+208|0,j+48|0);Kd(j+160|0,j+16|0);Kd(j+144|0,j+96|0);Kd(j+192|0,j+48|0);cd(j+128|0,j+128|0,78);cd(j+112|0,j+112|0,78);cd(j+64|0,j+64|0,78);cd(j+32|0,j+32|0,78);cd(j+80|0,j+80|0,78);cd(j+16|0,j+16|0,78);cd(j+96|0,j+96|0,78);cd(j+48|0,j+48|0,78);Kd(j+256|0,j+128|0);Kd(j+240|0,j+112|0);Kd(j+224|0,j+64|0);Kd(j+208|0,j+32|0);Kd(j+192|0,j+80|0);Kd(j+176|0,j+16|0);Kd(j+160|0,j+96|0);Kd(j+144|0,j+48|0);Kd(j+256|0,h+512|0);vb(j+256|0,35286);Kd(j+240|0,h+528|0);vb(j+240|0,35286);Kd(j+224|0,h+544|0);vb(j+224|0,35286);Kd(j+208|0,h+560|0);vb(j+208|0,35286);Kd(j+192|0,h+576|0);vb(j+192|0,35286);Kd(j+176|0,h+592|0);vb(j+176|0,35286);Kd(j+160|0,h+608|0);vb(j+160|0,35286);Kd(j+144|0,h+624|0);vb(j+144|0,35286);Kd(j+176|0,j+160|0);Kd(j+224|0,j+240|0);Kd(j+176|0,j+256|0);Kd(j+160|0,j+224|0);Kd(j+208|0,j+256|0);Kd(j+160|0,j+208|0);Kd(j+208|0,j+144|0);Kd(j+208|0,j+192|0);Kd(j+144|0,j+176|0);Kd(j+208|0,j+240|0);Kd(j+192|0,j+176|0);Kd(j+224|0,j+144|0);Kd(j+240|0,j+176|0);Ge(j+80|0,j+144|0);Ge(j+96|0,j+240|0);Ge(j+112|0,j+176|0);Ge(j+48|0,j+224|0);Ge(j+64|0,j+160|0);Kd(j+80|0,j+192|0);Kd(j+96|0,j+224|0);Kd(j+112|0,j+208|0);Kd(j+48|0,j+192|0);Kd(j+64|0,j+256|0);Ge(j+32|0,j+80|0);Ge(j+128|0,j+96|0);Ge(j+16|0,j+80|0);Nd(j+96|0,j+112|0);Nd(j+80|0,j+64|0);Kd(j+16|0,j+128|0);Ld(j+32|0,j+64|0);Ld(j+128|0,j+112|0);Kd(j+64|0,j+112|0);Ld(j+16|0,j+64|0);Ge(j+64|0,j+208|0);Kd(j+64|0,j+256|0);Ld(j+48|0,j+64|0);Kd(j+80|0,j+48|0);Kd(j+96|0,j+48|0);Ge(j+48|0,j+144|0);Kd(j+48|0,j+240|0);Ge(j+64|0,j+176|0);Ge(j+112|0,j+48|0);Kd(j+64|0,j+160|0);Nd(j+112|0,j+64|0);Ld(j+48|0,j+64|0);Kd(j+128|0,j+48|0);Kd(j+80|0,j+16|0);Kd(j+96|0,j+32|0);Kd(j+112|0,j+16|0);Kd(j+128|0,j+32|0);Kd(j+112|0,j+32|0);Ge(j+64|0,j+224|0);Ge(j+48|0,j+192|0);Ge(j+32|0,j+240|0);Ge(j+16|0,j+144|0);Ld(j+64|0,j+208|0);Ld(j+48|0,j+256|0);Ld(j+32|0,j+176|0);Nd(j+16|0,j+160|0);Kd(j+80|0,j+64|0);Kd(j+96|0,j+48|0);Kd(j+112|0,j+32|0);Kd(j+128|0,j+16|0);Ge(j+64|0,j+80|0);Kd(j+64|0,j+96|0);Ld(j+80|0,j+112|0);Ge(j+32|0,j+128|0);Kd(j+32|0,j+80|0);Ge(j+16|0,j+64|0);Ld(j+16|0,j+32|0);Kd(j+16|0,j+96|0);Ge(j+48|0,j+112|0);Kd(j+48|0,j+128|0);Kd(j+80|0,j+96|0);Ld(j+48|0,j+80|0);Kd(j+48|0,j+128|0);Kd(j+112|0,j+48|0);Ge(j+96|0,j+32|0);Kd(j+96|0,j+48|0);Ld(j+96|0,j+128|0);Kd(j+112|0,j+96|0);Kd(j+32|0,j+96|0);Ld(j+32|0,j+16|0);Kd(j+32|0,j+64|0);Ge(j+64|0,j+160|0);Ge(j+128|0,j+176|0);Ge(j+96|0,j+16|0);Kd(j+96|0,j+32|0);Ld(j+96|0,j+160|0);Kd(j+160|0,j+176|0);Ld(j+160|0,j+32|0);Ld(j+176|0,j+16|0);Kd(j+160|0,j+176|0);Kd(j+176|0,j+96|0);Kd(j+64|0,j+256|0);Kd(j+128|0,j+208|0);Kd(j+16|0,j+48|0);Kd(j+32|0,j+112|0);Ge(j+80|0,j+16|0);Kd(j+80|0,j+32|0);Ld(j+80|0,j+64|0);Kd(j+64|0,j+128|0);Ld(j+64|0,j+32|0);Ld(j+128|0,j+16|0);Kd(j+128|0,j+64|0);Kd(j+64|0,j+80|0);Ge(j+96|0,j+48|0);Kd(j+96|0,j+112|0);Ld(j+96|0,j+256|0);Kd(j+256|0,j+208|0);Ld(j+256|0,j+112|0);Ld(j+208|0,j+48|0);Kd(j+256|0,j+208|0);Kd(j+208|0,j+96|0);Kd(j+160|0,j+64|0);Kd(j+256|0,j+64|0);Kd(j+176|0,j+128|0);Kd(j+208|0,j+128|0);Ge(j+64|0,j+144|0);Ge(j+128|0,j+240|0);Kd(j+64|0,j+192|0);Kd(j+128|0,j+224|0);Ge(j+80|0,j+16|0);Kd(j+80|0,j+32|0);Ld(j+80|0,j+64|0);Kd(j+64|0,j+128|0);Ld(j+64|0,j+32|0);Ld(j+128|0,j+16|0);Kd(j+128|0,j+64|0);Kd(j+64|0,j+80|0);Ge(j+96|0,j+48|0);Kd(j+96|0,j+112|0);Ld(j+96|0,j+192|0);Kd(j+192|0,j+224|0);Ld(j+192|0,j+112|0);Ld(j+224|0,j+48|0);Kd(j+192|0,j+224|0);Kd(j+224|0,j+96|0);Kd(j+16|0,j+48|0);Kd(j+32|0,j+112|0);Ge(j+80|0,j+16|0);Kd(j+80|0,j+32|0);Ld(j+80|0,j+144|0);Kd(j+144|0,j+240|0);Ld(j+144|0,j+32|0);Ld(j+240|0,j+16|0);Kd(j+144|0,j+240|0);Kd(j+240|0,j+80|0);Kd(j+144|0,j+64|0);Kd(j+192|0,j+64|0);Kd(j+240|0,j+128|0);Kd(j+224|0,j+128|0);Kd(j+144|0,j+256|0);Kd(j+240|0,j+160|0);Kd(j+192|0,j+144|0);Kd(j+160|0,j+256|0);Kd(j+256|0,j+240|0);Kd(j+240|0,j+176|0);Kd(j+176|0,j+224|0);Kd(j+192|0,j+176|0);Kd(j+224|0,j+208|0);Kd(j+208|0,j+176|0);Kd(j+160|0,j+208|0);cd(j+128|0,j+256|0,147);cd(j+112|0,j+240|0,147);cd(j+96|0,j+192|0,147);cd(j+80|0,j+160|0,147);cd(j+64|0,j+208|0,147);cd(j+48|0,j+144|0,147);cd(j+32|0,j+224|0,147);cd(j+16|0,j+176|0,147);Kd(j+256|0,j+128|0);Kd(j+240|0,j+112|0);Kd(j+192|0,j+96|0);Kd(j+160|0,j+80|0);Kd(j+208|0,j+64|0);Kd(j+144|0,j+48|0);Kd(j+224|0,j+32|0);Kd(j+176|0,j+16|0);Kd(j+128|0,j+176|0);Kd(j+112|0,j+256|0);Kd(j+96|0,j+240|0);Kd(j+112|0,j+176|0);Kd(j+80|0,j+192|0);Kd(j+64|0,j+160|0);Kd(j+48|0,j+208|0);Kd(j+80|0,j+176|0);Kd(j+32|0,j+144|0);Kd(j+16|0,j+224|0);Kd(j+64|0,j+176|0);cd(j+256|0,j+256|0,78);cd(j+240|0,j+240|0,78);cd(j+192|0,j+192|0,78);cd(j+160|0,j+160|0,78);cd(j+208|0,j+208|0,78);cd(j+144|0,j+144|0,78);cd(j+224|0,j+224|0,78);cd(j+176|0,j+176|0,78);Kd(j+128|0,j+256|0);Kd(j+112|0,j+240|0);Kd(j+96|0,j+192|0);Kd(j+80|0,j+160|0);Kd(j+64|0,j+208|0);Kd(j+48|0,j+144|0);Kd(j+32|0,j+224|0);Kd(j+16|0,j+176|0);Kd(j+128|0,h+640|0);vb(j+128|0,35286);Kd(j+112|0,h+656|0);vb(j+112|0,35286);Kd(j+96|0,h+672|0);vb(j+96|0,35286);Kd(j+80|0,h+688|0);vb(j+80|0,35286);Kd(j+64|0,h+704|0);vb(j+64|0,35286);Kd(j+48|0,h+720|0);vb(j+48|0,35286);Kd(j+32|0,h+736|0);vb(j+32|0,35286);Kd(j+16|0,h+752|0);vb(j+16|0,35286);Kd(j+48|0,j+32|0);Kd(j+96|0,j+112|0);Kd(j+48|0,j+128|0);Kd(j+32|0,j+96|0);Kd(j+80|0,j+128|0);Kd(j+32|0,j+80|0);Kd(j+80|0,j+16|0);Kd(j+80|0,j+64|0);Kd(j+16|0,j+48|0);Kd(j+80|0,j+112|0);Kd(j+64|0,j+48|0);Kd(j+96|0,j+16|0);Kd(j+112|0,j+48|0);Ge(j+208|0,j+16|0);Ge(j+224|0,j+112|0);Ge(j+240|0,j+48|0);Ge(j+176|0,j+96|0);Ge(j+192|0,j+32|0);Kd(j+208|0,j+64|0);Kd(j+224|0,j+96|0);Kd(j+240|0,j+80|0);Kd(j+176|0,j+64|0);Kd(j+192|0,j+128|0);Ge(j+160|0,j+208|0);Ge(j+256|0,j+224|0);Ge(j+144|0,j+208|0);Nd(j+224|0,j+240|0);Nd(j+208|0,j+192|0);Kd(j+144|0,j+256|0);Ld(j+160|0,j+192|0);Ld(j+256|0,j+240|0);Kd(j+192|0,j+240|0);Ld(j+144|0,j+192|0);Ge(j+192|0,j+80|0);Kd(j+192|0,j+128|0);Ld(j+176|0,j+192|0);Kd(j+208|0,j+176|0);Kd(j+224|0,j+176|0);Ge(j+176|0,j+16|0);Kd(j+176|0,j+112|0);Ge(j+192|0,j+48|0);Ge(j+240|0,j+176|0);Kd(j+192|0,j+32|0);Nd(j+240|0,j+192|0);Ld(j+176|0,j+192|0);Kd(j+256|0,j+176|0);Kd(j+208|0,j+144|0);Kd(j+224|0,j+160|0);Kd(j+240|0,j+144|0);Kd(j+256|0,j+160|0);Kd(j+240|0,j+160|0);Ge(j+192|0,j+96|0);Ge(j+176|0,j+64|0);Ge(j+160|0,j+112|0);Ge(j+144|0,j+16|0);Ld(j+192|0,j+80|0);Ld(j+176|0,j+128|0);Ld(j+160|0,j+48|0);Nd(j+144|0,j+32|0);Kd(j+208|0,j+192|0);Kd(j+224|0,j+176|0);Kd(j+240|0,j+160|0);Kd(j+256|0,j+144|0);Ge(j+192|0,j+208|0);Kd(j+192|0,j+224|0);Ld(j+208|0,j+240|0);Ge(j+160|0,j+256|0);Kd(j+160|0,j+208|0);Ge(j+144|0,j+192|0);Ld(j+144|0,j+160|0);Kd(j+144|0,j+224|0);Ge(j+176|0,j+240|0);Kd(j+176|0,j+256|0);Kd(j+208|0,j+224|0);Ld(j+176|0,j+208|0);Kd(j+176|0,j+256|0);Kd(j+240|0,j+176|0);Ge(j+224|0,j+160|0);Kd(j+224|0,j+176|0);Ld(j+224|0,j+256|0);Kd(j+240|0,j+224|0);Kd(j+160|0,j+224|0);Ld(j+160|0,j+144|0);Kd(j+160|0,j+192|0);Ge(j+192|0,j+32|0);Ge(j+256|0,j+48|0);Ge(j+224|0,j+144|0);Kd(j+224|0,j+160|0);Ld(j+224|0,j+32|0);Kd(j+32|0,j+48|0);Ld(j+32|0,j+160|0);Ld(j+48|0,j+144|0);Kd(j+32|0,j+48|0);Kd(j+48|0,j+224|0);Kd(j+192|0,j+128|0);Kd(j+256|0,j+80|0);Kd(j+144|0,j+176|0);Kd(j+160|0,j+240|0);Ge(j+208|0,j+144|0);Kd(j+208|0,j+160|0);Ld(j+208|0,j+192|0);Kd(j+192|0,j+256|0);Ld(j+192|0,j+160|0);Ld(j+256|0,j+144|0);Kd(j+256|0,j+192|0);Kd(j+192|0,j+208|0);Ge(j+224|0,j+176|0);Kd(j+224|0,j+240|0);Ld(j+224|0,j+128|0);Kd(j+128|0,j+80|0);Ld(j+128|0,j+240|0);Ld(j+80|0,j+176|0);Kd(j+128|0,j+80|0);Kd(j+80|0,j+224|0);Kd(j+32|0,j+192|0);Kd(j+128|0,j+192|0);Kd(j+48|0,j+256|0);Kd(j+80|0,j+256|0);Ge(j+192|0,j+16|0);Ge(j+256|0,j+112|0);Kd(j+192|0,j+64|0);Kd(j+256|0,j+96|0);Ge(j+208|0,j+144|0);Kd(j+208|0,j+160|0);Ld(j+208|0,j+192|0);Kd(j+192|0,j+256|0);Ld(j+192|0,j+160|0);Ld(j+256|0,j+144|0);Kd(j+256|0,j+192|0);Kd(j+192|0,j+208|0);Ge(j+224|0,j+176|0);Kd(j+224|0,j+240|0);Ld(j+224|0,j+64|0);Kd(j+64|0,j+96|0);Ld(j+64|0,j+240|0);Ld(j+96|0,j+176|0);Kd(j+64|0,j+96|0);Kd(j+96|0,j+224|0);Kd(j+144|0,j+176|0);Kd(j+160|0,j+240|0);Ge(j+208|0,j+144|0);Kd(j+208|0,j+160|0);Ld(j+208|0,j+16|0);Kd(j+16|0,j+112|0);Ld(j+16|0,j+160|0);Ld(j+112|0,j+144|0);Kd(j+16|0,j+112|0);Kd(j+112|0,j+208|0);Kd(j+16|0,j+192|0);Kd(j+64|0,j+192|0);Kd(j+112|0,j+256|0);Kd(j+96|0,j+256|0);Kd(j+16|0,j+128|0);Kd(j+112|0,j+32|0);Kd(j+64|0,j+16|0);Kd(j+32|0,j+128|0);Kd(j+128|0,j+112|0);Kd(j+112|0,j+48|0);Kd(j+48|0,j+96|0);Kd(j+64|0,j+48|0);Kd(j+96|0,j+80|0);Kd(j+80|0,j+48|0);Kd(j+32|0,j+80|0);cd(j+256|0,j+128|0,147);cd(j+240|0,j+112|0,147);cd(j+224|0,j+64|0,147);cd(j+208|0,j+32|0,147);cd(j+192|0,j+80|0,147);cd(j+176|0,j+16|0,147);cd(j+160|0,j+96|0,147);cd(j+144|0,j+48|0,147);Kd(j+128|0,j+256|0);Kd(j+112|0,j+240|0);Kd(j+64|0,j+224|0);Kd(j+32|0,j+208|0);Kd(j+80|0,j+192|0);Kd(j+16|0,j+176|0);Kd(j+96|0,j+160|0);Kd(j+48|0,j+144|0);Kd(j+256|0,j+48|0);Kd(j+240|0,j+128|0);Kd(j+224|0,j+112|0);Kd(j+240|0,j+48|0);Kd(j+208|0,j+64|0);Kd(j+192|0,j+32|0);Kd(j+176|0,j+80|0);Kd(j+208|0,j+48|0);Kd(j+160|0,j+16|0);Kd(j+144|0,j+96|0);Kd(j+192|0,j+48|0);cd(j+128|0,j+128|0,78);cd(j+112|0,j+112|0,78);cd(j+64|0,j+64|0,78);cd(j+32|0,j+32|0,78);cd(j+80|0,j+80|0,78);cd(j+16|0,j+16|0,78);cd(j+96|0,j+96|0,78);cd(j+48|0,j+48|0,78);Kd(j+256|0,j+128|0);Kd(j+240|0,j+112|0);Kd(j+224|0,j+64|0);Kd(j+208|0,j+32|0);Kd(j+192|0,j+80|0);Kd(j+176|0,j+16|0);Kd(j+160|0,j+96|0);Kd(j+144|0,j+48|0);Kd(j+256|0,h+768|0);vb(j+256|0,35286);Kd(j+240|0,h+784|0);vb(j+240|0,35286);Kd(j+224|0,h+800|0);vb(j+224|0,35286);Kd(j+208|0,h+816|0);vb(j+208|0,35286);Kd(j+192|0,h+832|0);vb(j+192|0,35286);Kd(j+176|0,h+848|0);vb(j+176|0,35286);Kd(j+160|0,h+864|0);vb(j+160|0,35286);Kd(j+144|0,h+880|0);vb(j+144|0,35286);Kd(j+176|0,j+160|0);Kd(j+224|0,j+240|0);Kd(j+176|0,j+256|0);Kd(j+160|0,j+224|0);Kd(j+208|0,j+256|0);Kd(j+160|0,j+208|0);Kd(j+208|0,j+144|0);Kd(j+208|0,j+192|0);Kd(j+144|0,j+176|0);Kd(j+208|0,j+240|0);Kd(j+192|0,j+176|0);Kd(j+224|0,j+144|0);Kd(j+240|0,j+176|0);Ge(j+80|0,j+144|0);Ge(j+96|0,j+240|0);Ge(j+112|0,j+176|0);Ge(j+48|0,j+224|0);Ge(j+64|0,j+160|0);Kd(j+80|0,j+192|0);Kd(j+96|0,j+224|0);Kd(j+112|0,j+208|0);Kd(j+48|0,j+192|0);Kd(j+64|0,j+256|0);Ge(j+32|0,j+80|0);Ge(j+128|0,j+96|0);Ge(j+16|0,j+80|0);Nd(j+96|0,j+112|0);Nd(j+80|0,j+64|0);Kd(j+16|0,j+128|0);Ld(j+32|0,j+64|0);Ld(j+128|0,j+112|0);Kd(j+64|0,j+112|0);Ld(j+16|0,j+64|0);Ge(j+64|0,j+208|0);Kd(j+64|0,j+256|0);Ld(j+48|0,j+64|0);Kd(j+80|0,j+48|0);Kd(j+96|0,j+48|0);Ge(j+48|0,j+144|0);Kd(j+48|0,j+240|0);Ge(j+64|0,j+176|0);Ge(j+112|0,j+48|0);Kd(j+64|0,j+160|0);Nd(j+112|0,j+64|0);Ld(j+48|0,j+64|0);Kd(j+128|0,j+48|0);Kd(j+80|0,j+16|0);Kd(j+96|0,j+32|0);Kd(j+112|0,j+16|0);Kd(j+128|0,j+32|0);Kd(j+112|0,j+32|0);Ge(j+64|0,j+224|0);Ge(j+48|0,j+192|0);Ge(j+32|0,j+240|0);Ge(j+16|0,j+144|0);Ld(j+64|0,j+208|0);Ld(j+48|0,j+256|0);Ld(j+32|0,j+176|0);Nd(j+16|0,j+160|0);Kd(j+80|0,j+64|0);Kd(j+96|0,j+48|0);Kd(j+112|0,j+32|0);Kd(j+128|0,j+16|0);Ge(j+64|0,j+80|0);Kd(j+64|0,j+96|0);Ld(j+80|0,j+112|0);Ge(j+32|0,j+128|0);Kd(j+32|0,j+80|0);Ge(j+16|0,j+64|0);Ld(j+16|0,j+32|0);Kd(j+16|0,j+96|0);Ge(j+48|0,j+112|0);Kd(j+48|0,j+128|0);Kd(j+80|0,j+96|0);Ld(j+48|0,j+80|0);Kd(j+48|0,j+128|0);Kd(j+112|0,j+48|0);Ge(j+96|0,j+32|0);Kd(j+96|0,j+48|0);Ld(j+96|0,j+128|0);Kd(j+112|0,j+96|0);Kd(j+32|0,j+96|0);Ld(j+32|0,j+16|0);Kd(j+32|0,j+64|0);Ge(j+64|0,j+160|0);Ge(j+128|0,j+176|0);Ge(j+96|0,j+16|0);Kd(j+96|0,j+32|0);Ld(j+96|0,j+160|0);Kd(j+160|0,j+176|0);Ld(j+160|0,j+32|0);Ld(j+176|0,j+16|0);Kd(j+160|0,j+176|0);Kd(j+176|0,j+96|0);Kd(j+64|0,j+256|0);Kd(j+128|0,j+208|0);Kd(j+16|0,j+48|0);Kd(j+32|0,j+112|0);Ge(j+80|0,j+16|0);Kd(j+80|0,j+32|0);Ld(j+80|0,j+64|0);Kd(j+64|0,j+128|0);Ld(j+64|0,j+32|0);Ld(j+128|0,j+16|0);Kd(j+128|0,j+64|0);Kd(j+64|0,j+80|0);Ge(j+96|0,j+48|0);Kd(j+96|0,j+112|0);Ld(j+96|0,j+256|0);Kd(j+256|0,j+208|0);Ld(j+256|0,j+112|0);Ld(j+208|0,j+48|0);Kd(j+256|0,j+208|0);Kd(j+208|0,j+96|0);Kd(j+160|0,j+64|0);Kd(j+256|0,j+64|0);Kd(j+176|0,j+128|0);Kd(j+208|0,j+128|0);Ge(j+64|0,j+144|0);Ge(j+128|0,j+240|0);Kd(j+64|0,j+192|0);Kd(j+128|0,j+224|0);Ge(j+80|0,j+16|0);Kd(j+80|0,j+32|0);Ld(j+80|0,j+64|0);Kd(j+64|0,j+128|0);Ld(j+64|0,j+32|0);Ld(j+128|0,j+16|0);Kd(j+128|0,j+64|0);Kd(j+64|0,j+80|0);Ge(j+96|0,j+48|0);Kd(j+96|0,j+112|0);Ld(j+96|0,j+192|0);Kd(j+192|0,j+224|0);Ld(j+192|0,j+112|0);Ld(j+224|0,j+48|0);Kd(j+192|0,j+224|0);Kd(j+224|0,j+96|0);Kd(j+16|0,j+48|0);Kd(j+32|0,j+112|0);Ge(j+80|0,j+16|0);Kd(j+80|0,j+32|0);Ld(j+80|0,j+144|0);Kd(j+144|0,j+240|0);Ld(j+144|0,j+32|0);Ld(j+240|0,j+16|0);Kd(j+144|0,j+240|0);Kd(j+240|0,j+80|0);Kd(j+144|0,j+64|0);Kd(j+192|0,j+64|0);Kd(j+240|0,j+128|0);Kd(j+224|0,j+128|0);Kd(j+144|0,j+256|0);Kd(j+240|0,j+160|0);Kd(j+192|0,j+144|0);Kd(j+160|0,j+256|0);Kd(j+256|0,j+240|0);Kd(j+240|0,j+176|0);Kd(j+176|0,j+224|0);Kd(j+192|0,j+176|0);Kd(j+224|0,j+208|0);Kd(j+208|0,j+176|0);Kd(j+160|0,j+208|0);cd(j+128|0,j+256|0,147);cd(j+112|0,j+240|0,147);cd(j+96|0,j+192|0,147);cd(j+80|0,j+160|0,147);cd(j+64|0,j+208|0,147);cd(j+48|0,j+144|0,147);cd(j+32|0,j+224|0,147);cd(j+16|0,j+176|0,147);Kd(j+256|0,j+128|0);Kd(j+240|0,j+112|0);Kd(j+192|0,j+96|0);Kd(j+160|0,j+80|0);Kd(j+208|0,j+64|0);Kd(j+144|0,j+48|0);Kd(j+224|0,j+32|0);Kd(j+176|0,j+16|0);Kd(j+128|0,j+176|0);Kd(j+112|0,j+256|0);Kd(j+96|0,j+240|0);Kd(j+112|0,j+176|0);Kd(j+80|0,j+192|0);Kd(j+64|0,j+160|0);Kd(j+48|0,j+208|0);Kd(j+80|0,j+176|0);Kd(j+32|0,j+144|0);Kd(j+16|0,j+224|0);Kd(j+64|0,j+176|0);cd(j+256|0,j+256|0,78);cd(j+240|0,j+240|0,78);cd(j+192|0,j+192|0,78);cd(j+160|0,j+160|0,78);cd(j+208|0,j+208|0,78);cd(j+144|0,j+144|0,78);cd(j+224|0,j+224|0,78);cd(j+176|0,j+176|0,78);Kd(j+128|0,j+256|0);Kd(j+112|0,j+240|0);Kd(j+96|0,j+192|0);Kd(j+80|0,j+160|0);Kd(j+64|0,j+208|0);Kd(j+48|0,j+144|0);Kd(j+32|0,j+224|0);Kd(j+16|0,j+176|0);Kd(j+128|0,h+896|0);vb(j+128|0,35286);Kd(j+112|0,h+912|0);vb(j+112|0,35286);Kd(j+96|0,h+928|0);vb(j+96|0,35286);Kd(j+80|0,h+944|0);vb(j+80|0,35286);Kd(j+64|0,h+960|0);vb(j+64|0,35286);Kd(j+48|0,h+976|0);vb(j+48|0,35286);Kd(j+32|0,h+992|0);vb(j+32|0,35286);Kd(j+16|0,h+1008|0);vb(j+16|0,35286);Kd(j+48|0,j+32|0);Kd(j+96|0,j+112|0);Kd(j+48|0,j+128|0);Kd(j+32|0,j+96|0);Kd(j+80|0,j+128|0);Kd(j+32|0,j+80|0);Kd(j+80|0,j+16|0);Kd(j+80|0,j+64|0);Kd(j+16|0,j+48|0);Kd(j+80|0,j+112|0);Kd(j+64|0,j+48|0);Kd(j+96|0,j+16|0);Kd(j+112|0,j+48|0);Ge(j+208|0,j+16|0);Ge(j+224|0,j+112|0);Ge(j+240|0,j+48|0);Ge(j+176|0,j+96|0);Ge(j+192|0,j+32|0);Kd(j+208|0,j+64|0);Kd(j+224|0,j+96|0);Kd(j+240|0,j+80|0);Kd(j+176|0,j+64|0);Kd(j+192|0,j+128|0);Ge(j+160|0,j+208|0);Ge(j+256|0,j+224|0);Ge(j+144|0,j+208|0);Nd(j+224|0,j+240|0);Nd(j+208|0,j+192|0);Kd(j+144|0,j+256|0);Ld(j+160|0,j+192|0);Ld(j+256|0,j+240|0);Kd(j+192|0,j+240|0);Ld(j+144|0,j+192|0);Ge(j+192|0,j+80|0);Kd(j+192|0,j+128|0);Ld(j+176|0,j+192|0);Kd(j+208|0,j+176|0);Kd(j+224|0,j+176|0);Ge(j+176|0,j+16|0);Kd(j+176|0,j+112|0);Ge(j+192|0,j+48|0);Ge(j+240|0,j+176|0);Kd(j+192|0,j+32|0);Nd(j+240|0,j+192|0);Ld(j+176|0,j+192|0);Kd(j+256|0,j+176|0);Kd(j+208|0,j+144|0);Kd(j+224|0,j+160|0);Kd(j+240|0,j+144|0);Kd(j+256|0,j+160|0);Kd(j+240|0,j+160|0);Ge(j+192|0,j+96|0);Ge(j+176|0,j+64|0);Ge(j+160|0,j+112|0);Ge(j+144|0,j+16|0);Ld(j+192|0,j+80|0);Ld(j+176|0,j+128|0);Ld(j+160|0,j+48|0);Nd(j+144|0,j+32|0);Kd(j+208|0,j+192|0);Kd(j+224|0,j+176|0);Kd(j+240|0,j+160|0);Kd(j+256|0,j+144|0);Ge(j+192|0,j+208|0);Kd(j+192|0,j+224|0);Ld(j+208|0,j+240|0);Ge(j+160|0,j+256|0);Kd(j+160|0,j+208|0);Ge(j+144|0,j+192|0);Ld(j+144|0,j+160|0);Kd(j+144|0,j+224|0);Ge(j+176|0,j+240|0);Kd(j+176|0,j+256|0);Kd(j+208|0,j+224|0);Ld(j+176|0,j+208|0);Kd(j+176|0,j+256|0);Kd(j+240|0,j+176|0);Ge(j+224|0,j+160|0);Kd(j+224|0,j+176|0);Ld(j+224|0,j+256|0);Kd(j+240|0,j+224|0);Kd(j+160|0,j+224|0);Ld(j+160|0,j+144|0);Kd(j+160|0,j+192|0);Ge(j+192|0,j+32|0);Ge(j+256|0,j+48|0);Ge(j+224|0,j+144|0);Kd(j+224|0,j+160|0);Ld(j+224|0,j+32|0);Kd(j+32|0,j+48|0);Ld(j+32|0,j+160|0);Ld(j+48|0,j+144|0);Kd(j+32|0,j+48|0);Kd(j+48|0,j+224|0);Kd(j+192|0,j+128|0);Kd(j+256|0,j+80|0);Kd(j+144|0,j+176|0);Kd(j+160|0,j+240|0);Ge(j+208|0,j+144|0);Kd(j+208|0,j+160|0);Ld(j+208|0,j+192|0);Kd(j+192|0,j+256|0);Ld(j+192|0,j+160|0);Ld(j+256|0,j+144|0);Kd(j+256|0,j+192|0);Kd(j+192|0,j+208|0);Ge(j+224|0,j+176|0);Kd(j+224|0,j+240|0);Ld(j+224|0,j+128|0);Kd(j+128|0,j+80|0);Ld(j+128|0,j+240|0);Ld(j+80|0,j+176|0);Kd(j+128|0,j+80|0);Kd(j+80|0,j+224|0);Kd(j+32|0,j+192|0);Kd(j+128|0,j+192|0);Kd(j+48|0,j+256|0);Kd(j+80|0,j+256|0);Ge(j+192|0,j+16|0);Ge(j+256|0,j+112|0);Kd(j+192|0,j+64|0);Kd(j+256|0,j+96|0);Ge(j+208|0,j+144|0);Kd(j+208|0,j+160|0);Ld(j+208|0,j+192|0);Kd(j+192|0,j+256|0);Ld(j+192|0,j+160|0);Ld(j+256|0,j+144|0);Kd(j+256|0,j+192|0);Kd(j+192|0,j+208|0);Ge(j+224|0,j+176|0);Kd(j+224|0,j+240|0);Ld(j+224|0,j+64|0);Kd(j+64|0,j+96|0);Ld(j+64|0,j+240|0);Ld(j+96|0,j+176|0);Kd(j+64|0,j+96|0);Kd(j+96|0,j+224|0);Kd(j+144|0,j+176|0);Kd(j+160|0,j+240|0);Ge(j+208|0,j+144|0);Kd(j+208|0,j+160|0);Ld(j+208|0,j+16|0);Kd(j+16|0,j+112|0);Ld(j+16|0,j+160|0);Ld(j+112|0,j+144|0);Kd(j+16|0,j+112|0);Kd(j+112|0,j+208|0);Kd(j+16|0,j+192|0);Kd(j+64|0,j+192|0);Kd(j+112|0,j+256|0);Kd(j+96|0,j+256|0);Kd(j+16|0,j+128|0);Kd(j+112|0,j+32|0);Kd(j+64|0,j+16|0);Kd(j+32|0,j+128|0);Kd(j+128|0,j+112|0);Kd(j+112|0,j+48|0);Kd(j+48|0,j+96|0);Kd(j+64|0,j+48|0);Kd(j+96|0,j+80|0);Kd(j+80|0,j+48|0);Kd(j+32|0,j+80|0);cd(j+256|0,j+128|0,147);cd(j+240|0,j+112|0,147);cd(j+224|0,j+64|0,147);cd(j+208|0,j+32|0,147);cd(j+192|0,j+80|0,147);cd(j+176|0,j+16|0,147);cd(j+160|0,j+96|0,147);cd(j+144|0,j+48|0,147);Kd(j+128|0,j+256|0);Kd(j+112|0,j+240|0);Kd(j+64|0,j+224|0);Kd(j+32|0,j+208|0);Kd(j+80|0,j+192|0);Kd(j+16|0,j+176|0);Kd(j+96|0,j+160|0);Kd(j+48|0,j+144|0);Kd(j+256|0,j+48|0);Kd(j+240|0,j+128|0);Kd(j+224|0,j+112|0);Kd(j+240|0,j+48|0);Kd(j+208|0,j+64|0);Kd(j+192|0,j+32|0);Kd(j+176|0,j+80|0);Kd(j+208|0,j+48|0);Kd(j+160|0,j+16|0);Kd(j+144|0,j+96|0);Kd(j+192|0,j+48|0);cd(j+128|0,j+128|0,78);cd(j+112|0,j+112|0,78);cd(j+64|0,j+64|0,78);cd(j+32|0,j+32|0,78);cd(j+80|0,j+80|0,78);cd(j+16|0,j+16|0,78);cd(j+96|0,j+96|0,78);cd(j+48|0,j+48|0,78);Kd(j+256|0,j+128|0);Kd(j+240|0,j+112|0);Kd(j+224|0,j+64|0);Kd(j+208|0,j+32|0);Kd(j+192|0,j+80|0);Kd(j+176|0,j+16|0);Kd(j+160|0,j+96|0);Kd(j+144|0,j+48|0);Kd(j+256|0,h+1024|0);vb(j+256|0,35286);Kd(j+240|0,h+1040|0);vb(j+240|0,35286);Kd(j+224|0,h+1056|0);vb(j+224|0,35286);Kd(j+208|0,h+1072|0);vb(j+208|0,35286);Kd(j+192|0,h+1088|0);vb(j+192|0,35286);Kd(j+176|0,h+1104|0);vb(j+176|0,35286);Kd(j+160|0,h+1120|0);vb(j+160|0,35286);Kd(j+144|0,h+1136|0);vb(j+144|0,35286);Kd(j+176|0,j+160|0);Kd(j+224|0,j+240|0);Kd(j+176|0,j+256|0);Kd(j+160|0,j+224|0);Kd(j+208|0,j+256|0);Kd(j+160|0,j+208|0);Kd(j+208|0,j+144|0);Kd(j+208|0,j+192|0);Kd(j+144|0,j+176|0);Kd(j+208|0,j+240|0);Kd(j+192|0,j+176|0);Kd(j+224|0,j+144|0);Kd(j+240|0,j+176|0);Ge(j+80|0,j+144|0);Ge(j+96|0,j+240|0);Ge(j+112|0,j+176|0);Ge(j+48|0,j+224|0);Ge(j+64|0,j+160|0);Kd(j+80|0,j+192|0);Kd(j+96|0,j+224|0);Kd(j+112|0,j+208|0);Kd(j+48|0,j+192|0);Kd(j+64|0,j+256|0);Ge(j+32|0,j+80|0);Ge(j+128|0,j+96|0);Ge(j+16|0,j+80|0);Nd(j+96|0,j+112|0);Nd(j+80|0,j+64|0);Kd(j+16|0,j+128|0);Ld(j+32|0,j+64|0);Ld(j+128|0,j+112|0);Kd(j+64|0,j+112|0);Ld(j+16|0,j+64|0);Ge(j+64|0,j+208|0);Kd(j+64|0,j+256|0);Ld(j+48|0,j+64|0);Kd(j+80|0,j+48|0);Kd(j+96|0,j+48|0);Ge(j+48|0,j+144|0);Kd(j+48|0,j+240|0);Ge(j+64|0,j+176|0);Ge(j+112|0,j+48|0);Kd(j+64|0,j+160|0);Nd(j+112|0,j+64|0);Ld(j+48|0,j+64|0);Kd(j+128|0,j+48|0);Kd(j+80|0,j+16|0);Kd(j+96|0,j+32|0);Kd(j+112|0,j+16|0);Kd(j+128|0,j+32|0);Kd(j+112|0,j+32|0);Ge(j+64|0,j+224|0);Ge(j+48|0,j+192|0);Ge(j+32|0,j+240|0);Ge(j+16|0,j+144|0);Ld(j+64|0,j+208|0);Ld(j+48|0,j+256|0);Ld(j+32|0,j+176|0);Nd(j+16|0,j+160|0);Kd(j+80|0,j+64|0);Kd(j+96|0,j+48|0);Kd(j+112|0,j+32|0);Kd(j+128|0,j+16|0);Ge(j+64|0,j+80|0);Kd(j+64|0,j+96|0);Ld(j+80|0,j+112|0);Ge(j+32|0,j+128|0);Kd(j+32|0,j+80|0);Ge(j+16|0,j+64|0);Ld(j+16|0,j+32|0);Kd(j+16|0,j+96|0);Ge(j+48|0,j+112|0);Kd(j+48|0,j+128|0);Kd(j+80|0,j+96|0);Ld(j+48|0,j+80|0);Kd(j+48|0,j+128|0);Kd(j+112|0,j+48|0);Ge(j+96|0,j+32|0);Kd(j+96|0,j+48|0);Ld(j+96|0,j+128|0);Kd(j+112|0,j+96|0);Kd(j+32|0,j+96|0);Ld(j+32|0,j+16|0);Kd(j+32|0,j+64|0);Ge(j+64|0,j+160|0);Ge(j+128|0,j+176|0);Ge(j+96|0,j+16|0);Kd(j+96|0,j+32|0);Ld(j+96|0,j+160|0);Kd(j+160|0,j+176|0);Ld(j+160|0,j+32|0);Ld(j+176|0,j+16|0);Kd(j+160|0,j+176|0);Kd(j+176|0,j+96|0);Kd(j+64|0,j+256|0);Kd(j+128|0,j+208|0);Kd(j+16|0,j+48|0);Kd(j+32|0,j+112|0);Ge(j+80|0,j+16|0);Kd(j+80|0,j+32|0);Ld(j+80|0,j+64|0);Kd(j+64|0,j+128|0);Ld(j+64|0,j+32|0);Ld(j+128|0,j+16|0);Kd(j+128|0,j+64|0);Kd(j+64|0,j+80|0);Ge(j+96|0,j+48|0);Kd(j+96|0,j+112|0);Ld(j+96|0,j+256|0);Kd(j+256|0,j+208|0);Ld(j+256|0,j+112|0);Ld(j+208|0,j+48|0);Kd(j+256|0,j+208|0);Kd(j+208|0,j+96|0);Kd(j+160|0,j+64|0);Kd(j+256|0,j+64|0);Kd(j+176|0,j+128|0);Kd(j+208|0,j+128|0);Ge(j+64|0,j+144|0);Ge(j+128|0,j+240|0);Kd(j+64|0,j+192|0);Kd(j+128|0,j+224|0);Ge(j+80|0,j+16|0);Kd(j+80|0,j+32|0);Ld(j+80|0,j+64|0);Kd(j+64|0,j+128|0);Ld(j+64|0,j+32|0);Ld(j+128|0,j+16|0);Kd(j+128|0,j+64|0);Kd(j+64|0,j+80|0);Ge(j+96|0,j+48|0);Kd(j+96|0,j+112|0);Ld(j+96|0,j+192|0);Kd(j+192|0,j+224|0);Ld(j+192|0,j+112|0);Ld(j+224|0,j+48|0);Kd(j+192|0,j+224|0);Kd(j+224|0,j+96|0);Kd(j+16|0,j+48|0);Kd(j+32|0,j+112|0);Ge(j+80|0,j+16|0);Kd(j+80|0,j+32|0);Ld(j+80|0,j+144|0);Kd(j+144|0,j+240|0);Ld(j+144|0,j+32|0);Ld(j+240|0,j+16|0);Kd(j+144|0,j+240|0);Kd(j+240|0,j+80|0);Kd(j+144|0,j+64|0);Kd(j+192|0,j+64|0);Kd(j+240|0,j+128|0);Kd(j+224|0,j+128|0);Kd(j+144|0,j+256|0);Kd(j+240|0,j+160|0);Kd(j+192|0,j+144|0);Kd(j+160|0,j+256|0);Kd(j+256|0,j+240|0);Kd(j+240|0,j+176|0);Kd(j+176|0,j+224|0);Kd(j+192|0,j+176|0);Kd(j+224|0,j+208|0);Kd(j+208|0,j+176|0);Kd(j+160|0,j+208|0);cd(j+128|0,j+256|0,147);cd(j+112|0,j+240|0,147);cd(j+96|0,j+192|0,147);cd(j+80|0,j+160|0,147);cd(j+64|0,j+208|0,147);cd(j+48|0,j+144|0,147);cd(j+32|0,j+224|0,147);cd(j+16|0,j+176|0,147);Kd(j+256|0,j+128|0);Kd(j+240|0,j+112|0);Kd(j+192|0,j+96|0);Kd(j+160|0,j+80|0);Kd(j+208|0,j+64|0);Kd(j+144|0,j+48|0);Kd(j+224|0,j+32|0);Kd(j+176|0,j+16|0);Kd(j+128|0,j+176|0);Kd(j+112|0,j+256|0);Kd(j+96|0,j+240|0);Kd(j+112|0,j+176|0);Kd(j+80|0,j+192|0);Kd(j+64|0,j+160|0);Kd(j+48|0,j+208|0);Kd(j+80|0,j+176|0);Kd(j+32|0,j+144|0);Kd(j+16|0,j+224|0);Kd(j+64|0,j+176|0);cd(j+256|0,j+256|0,78);cd(j+240|0,j+240|0,78);cd(j+192|0,j+192|0,78);cd(j+160|0,j+160|0,78);cd(j+208|0,j+208|0,78);cd(j+144|0,j+144|0,78);cd(j+224|0,j+224|0,78);cd(j+176|0,j+176|0,78);Kd(j+128|0,j+256|0);Kd(j+112|0,j+240|0);Kd(j+96|0,j+192|0);Kd(j+80|0,j+160|0);Kd(j+64|0,j+208|0);Kd(j+48|0,j+144|0);Kd(j+32|0,j+224|0);Kd(j+16|0,j+176|0);Kd(j+128|0,h+1152|0);vb(j+128|0,35302);Kd(j+112|0,h+1168|0);vb(j+112|0,35302);Kd(j+96|0,h+1184|0);vb(j+96|0,35302);Kd(j+80|0,h+1200|0);vb(j+80|0,35302);Kd(j+64|0,h+1216|0);vb(j+64|0,35302);Kd(j+48|0,h+1232|0);vb(j+48|0,35302);Kd(j+32|0,h+1248|0);vb(j+32|0,35302);Kd(j+16|0,h+1264|0);vb(j+16|0,35302);Kd(j+48|0,j+32|0);Kd(j+96|0,j+112|0);Kd(j+48|0,j+128|0);Kd(j+32|0,j+96|0);Kd(j+80|0,j+128|0);Kd(j+32|0,j+80|0);Kd(j+80|0,j+16|0);Kd(j+80|0,j+64|0);Kd(j+16|0,j+48|0);Kd(j+80|0,j+112|0);Kd(j+64|0,j+48|0);Kd(j+96|0,j+16|0);Kd(j+112|0,j+48|0);Ge(j+208|0,j+16|0);Ge(j+224|0,j+112|0);Ge(j+240|0,j+48|0);Ge(j+176|0,j+96|0);Ge(j+192|0,j+32|0);Kd(j+208|0,j+64|0);Kd(j+224|0,j+96|0);Kd(j+240|0,j+80|0);Kd(j+176|0,j+64|0);Kd(j+192|0,j+128|0);Ge(j+160|0,j+208|0);Ge(j+256|0,j+224|0);Ge(j+144|0,j+208|0);Nd(j+224|0,j+240|0);Nd(j+208|0,j+192|0);Kd(j+144|0,j+256|0);Ld(j+160|0,j+192|0);Ld(j+256|0,j+240|0);Kd(j+192|0,j+240|0);Ld(j+144|0,j+192|0);Ge(j+192|0,j+80|0);Kd(j+192|0,j+128|0);Ld(j+176|0,j+192|0);Kd(j+208|0,j+176|0);Kd(j+224|0,j+176|0);Ge(j+176|0,j+16|0);Kd(j+176|0,j+112|0);Ge(j+192|0,j+48|0);Ge(j+240|0,j+176|0);Kd(j+192|0,j+32|0);Nd(j+240|0,j+192|0);Ld(j+176|0,j+192|0);Kd(j+256|0,j+176|0);Kd(j+208|0,j+144|0);Kd(j+224|0,j+160|0);Kd(j+240|0,j+144|0);Kd(j+256|0,j+160|0);Kd(j+240|0,j+160|0);Ge(j+192|0,j+96|0);Ge(j+176|0,j+64|0);Ge(j+160|0,j+112|0);Ge(j+144|0,j+16|0);Ld(j+192|0,j+80|0);Ld(j+176|0,j+128|0);Ld(j+160|0,j+48|0);Nd(j+144|0,j+32|0);Kd(j+208|0,j+192|0);Kd(j+224|0,j+176|0);Kd(j+240|0,j+160|0);Kd(j+256|0,j+144|0);Ge(j+192|0,j+208|0);Kd(j+192|0,j+224|0);Ld(j+208|0,j+240|0);Ge(j+160|0,j+256|0);Kd(j+160|0,j+208|0);Ge(j+144|0,j+192|0);Ld(j+144|0,j+160|0);Kd(j+144|0,j+224|0);Ge(j+176|0,j+240|0);Kd(j+176|0,j+256|0);Kd(j+208|0,j+224|0);Ld(j+176|0,j+208|0);Kd(j+176|0,j+256|0);Kd(j+240|0,j+176|0);Ge(j+224|0,j+160|0);Kd(j+224|0,j+176|0);Ld(j+224|0,j+256|0);Kd(j+240|0,j+224|0);Kd(j+160|0,j+224|0);Ld(j+160|0,j+144|0);Kd(j+160|0,j+192|0);Ge(j+192|0,j+32|0);Ge(j+256|0,j+48|0);Ge(j+224|0,j+144|0);Kd(j+224|0,j+160|0);Ld(j+224|0,j+32|0);Kd(j+32|0,j+48|0);Ld(j+32|0,j+160|0);Ld(j+48|0,j+144|0);Kd(j+32|0,j+48|0);Kd(j+48|0,j+224|0);Kd(j+192|0,j+128|0);Kd(j+256|0,j+80|0);Kd(j+144|0,j+176|0);Kd(j+160|0,j+240|0);Ge(j+208|0,j+144|0);Kd(j+208|0,j+160|0);Ld(j+208|0,j+192|0);Kd(j+192|0,j+256|0);Ld(j+192|0,j+160|0);Ld(j+256|0,j+144|0);Kd(j+256|0,j+192|0);Kd(j+192|0,j+208|0);Ge(j+224|0,j+176|0);Kd(j+224|0,j+240|0);Ld(j+224|0,j+128|0);Kd(j+128|0,j+80|0);Ld(j+128|0,j+240|0);Ld(j+80|0,j+176|0);Kd(j+128|0,j+80|0);Kd(j+80|0,j+224|0);Kd(j+32|0,j+192|0);Kd(j+128|0,j+192|0);Kd(j+48|0,j+256|0);Kd(j+80|0,j+256|0);Ge(j+192|0,j+16|0);Ge(j+256|0,j+112|0);Kd(j+192|0,j+64|0);Kd(j+256|0,j+96|0);Ge(j+208|0,j+144|0);Kd(j+208|0,j+160|0);Ld(j+208|0,j+192|0);Kd(j+192|0,j+256|0);Ld(j+192|0,j+160|0);Ld(j+256|0,j+144|0);Kd(j+256|0,j+192|0);Kd(j+192|0,j+208|0);Ge(j+224|0,j+176|0);Kd(j+224|0,j+240|0);Ld(j+224|0,j+64|0);Kd(j+64|0,j+96|0);Ld(j+64|0,j+240|0);Ld(j+96|0,j+176|0);Kd(j+64|0,j+96|0);Kd(j+96|0,j+224|0);Kd(j+144|0,j+176|0);Kd(j+160|0,j+240|0);Ge(j+208|0,j+144|0);Kd(j+208|0,j+160|0);Ld(j+208|0,j+16|0);Kd(j+16|0,j+112|0);Ld(j+16|0,j+160|0);Ld(j+112|0,j+144|0);Kd(j+16|0,j+112|0);Kd(j+112|0,j+208|0);Kd(j+16|0,j+192|0);Kd(j+64|0,j+192|0);Kd(j+112|0,j+256|0);Kd(j+96|0,j+256|0);Kd(j+16|0,j+128|0);Kd(j+112|0,j+32|0);Kd(j+64|0,j+16|0);Kd(j+32|0,j+128|0);Kd(j+128|0,j+112|0);Kd(j+112|0,j+48|0);Kd(j+48|0,j+96|0);Kd(j+64|0,j+48|0);Kd(j+96|0,j+80|0);Kd(j+80|0,j+48|0);Kd(j+32|0,j+80|0);Kd(j+128|0,h+1280|0);Kd(j+112|0,h+1296|0);Kd(j+64|0,h+1312|0);Kd(j+32|0,h+1328|0);Kd(j+80|0,h+1344|0);Kd(j+16|0,h+1360|0);Kd(j+96|0,h+1376|0);Kd(j+48|0,h+1392|0);Ge(j+256|0,j+96|0);ce(j+256|0,1);Kd(j+256|0,j+48|0);Ld(j+256|0,1104);Kd(j+48|0,j+256|0);ee(j+256|0,1);Kd(j+96|0,j+256|0);Ge(j+256|0,j+80|0);ce(j+256|0,1);Kd(j+256|0,j+16|0);Ld(j+256|0,1104);Kd(j+16|0,j+256|0);ee(j+256|0,1);Kd(j+80|0,j+256|0);Ge(j+256|0,j+64|0);ce(j+256|0,1);Kd(j+256|0,j+32|0);Ld(j+256|0,1104);Kd(j+32|0,j+256|0);ee(j+256|0,1);Kd(j+64|0,j+256|0);Ge(j+256|0,j+128|0);ce(j+256|0,1);Kd(j+256|0,j+112|0);Ld(j+256|0,1104);Kd(j+112|0,j+256|0);ee(j+256|0,1);Kd(j+128|0,j+256|0);Ge(j+256|0,j+16|0);ce(j+256|0,2);Kd(j+256|0,j+48|0);Ld(j+256|0,1120);Kd(j+48|0,j+256|0);ee(j+256|0,2);Kd(j+16|0,j+256|0);Ge(j+256|0,j+80|0);ce(j+256|0,2);Kd(j+256|0,j+96|0);Ld(j+256|0,1120);Kd(j+96|0,j+256|0);ee(j+256|0,2);Kd(j+80|0,j+256|0);Ge(j+256|0,j+112|0);ce(j+256|0,2);Kd(j+256|0,j+32|0);Ld(j+256|0,1120);Kd(j+32|0,j+256|0);ee(j+256|0,2);Kd(j+112|0,j+256|0);Ge(j+256|0,j+128|0);ce(j+256|0,2);Kd(j+256|0,j+64|0);Ld(j+256|0,1120);Kd(j+64|0,j+256|0);ee(j+256|0,2);Kd(j+128|0,j+256|0);Ge(j+256|0,j+32|0);ce(j+256|0,4);Kd(j+256|0,j+48|0);Ld(j+256|0,1136);Kd(j+48|0,j+256|0);ee(j+256|0,4);Kd(j+32|0,j+256|0);Ge(j+256|0,j+64|0);ce(j+256|0,4);Kd(j+256|0,j+96|0);Ld(j+256|0,1136);Kd(j+96|0,j+256|0);ee(j+256|0,4);Kd(j+64|0,j+256|0);Ge(j+256|0,j+112|0);ce(j+256|0,4);Kd(j+256|0,j+16|0);Ld(j+256|0,1136);Kd(j+16|0,j+256|0);ee(j+256|0,4);Kd(j+112|0,j+256|0);Ge(j+256|0,j+128|0);ce(j+256|0,4);Kd(j+256|0,j+80|0);Ld(j+256|0,1136);Kd(j+80|0,j+256|0);ee(j+256|0,4);Kd(j+128|0,j+256|0);if(f>>>0<0|(f|0)==0&e>>>0<128){i=5;break}kg(j+12|0,(yg(j+12|0)|0)+8|0);Kd(j+128|0,d);Kd(j+112|0,d+16|0);Kd(j+64|0,d+32|0);Kd(j+32|0,d+48|0);Kd(j+80|0,d+64|0);Kd(j+16|0,d+80|0);Kd(j+96|0,d+96|0);Kd(j+48|0,d+112|0);c[b>>2]=c[j+128>>2];c[b+4>>2]=c[j+128+4>>2];c[b+8>>2]=c[j+128+8>>2];c[b+12>>2]=c[j+128+12>>2];g=b+16|0;c[g>>2]=c[j+112>>2];c[g+4>>2]=c[j+112+4>>2];c[g+8>>2]=c[j+112+8>>2];c[g+12>>2]=c[j+112+12>>2];g=b+32|0;c[g>>2]=c[j+64>>2];c[g+4>>2]=c[j+64+4>>2];c[g+8>>2]=c[j+64+8>>2];c[g+12>>2]=c[j+64+12>>2];g=b+48|0;c[g>>2]=c[j+32>>2];c[g+4>>2]=c[j+32+4>>2];c[g+8>>2]=c[j+32+8>>2];c[g+12>>2]=c[j+32+12>>2];g=b+64|0;c[g>>2]=c[j+80>>2];c[g+4>>2]=c[j+80+4>>2];c[g+8>>2]=c[j+80+8>>2];c[g+12>>2]=c[j+80+12>>2];g=b+80|0;c[g>>2]=c[j+16>>2];c[g+4>>2]=c[j+16+4>>2];c[g+8>>2]=c[j+16+8>>2];c[g+12>>2]=c[j+16+12>>2];g=b+96|0;c[g>>2]=c[j+96>>2];c[g+4>>2]=c[j+96+4>>2];c[g+8>>2]=c[j+96+8>>2];c[g+12>>2]=c[j+96+12>>2];g=b+112|0;c[g>>2]=c[j+48>>2];c[g+4>>2]=c[j+48+4>>2];c[g+8>>2]=c[j+48+8>>2];c[g+12>>2]=c[j+48+12>>2];if((e|0)==128&(f|0)==0)break;g=jg(e|0,f|0,-128,-1)|0;b=b+128|0;d=d+128|0;f=D;e=g}if((i|0)==5?(h=Cf(e|0,f|0,4)|0,i=D,i=jg(yg(j+12|0)|0,0,h|0,i|0)|0,kg(j+12|0,i),c[j+272>>2]=c[j+128>>2],c[j+272+4>>2]=c[j+128+4>>2],c[j+272+8>>2]=c[j+128+8>>2],c[j+272+12>>2]=c[j+128+12>>2],c[j+272+16>>2]=c[j+112>>2],c[j+272+16+4>>2]=c[j+112+4>>2],c[j+272+16+8>>2]=c[j+112+8>>2],c[j+272+16+12>>2]=c[j+112+12>>2],c[j+272+32>>2]=c[j+64>>2],c[j+272+32+4>>2]=c[j+64+4>>2],c[j+272+32+8>>2]=c[j+64+8>>2],c[j+272+32+12>>2]=c[j+64+12>>2],c[j+272+48>>2]=c[j+32>>2],c[j+272+48+4>>2]=c[j+32+4>>2],c[j+272+48+8>>2]=c[j+32+8>>2],c[j+272+48+12>>2]=c[j+32+12>>2],c[j+272+64>>2]=c[j+80>>2],c[j+272+64+4>>2]=c[j+80+4>>2],c[j+272+64+8>>2]=c[j+80+8>>2],c[j+272+64+12>>2]=c[j+80+12>>2],c[j+272+80>>2]=c[j+16>>2],c[j+272+80+4>>2]=c[j+16+4>>2],c[j+272+80+8>>2]=c[j+16+8>>2],c[j+272+80+12>>2]=c[j+16+12>>2],c[j+272+96>>2]=c[j+96>>2],c[j+272+96+4>>2]=c[j+96+4>>2],c[j+272+96+8>>2]=c[j+96+8>>2],c[j+272+96+12>>2]=c[j+96+12>>2],c[j+272+112>>2]=c[j+48>>2],c[j+272+112+4>>2]=c[j+48+4>>2],c[j+272+112+8>>2]=c[j+48+8>>2],c[j+272+112+12>>2]=c[j+48+12>>2],!((e|0)==0&(f|0)==0)):0){g=j+272|0;while(1){a[b>>0]=a[d>>0]^a[g>>0];e=jg(e|0,f|0,-1,-1)|0;f=D;if((e|0)==0&(f|0)==0)break;else{g=g+1|0;d=d+1|0;b=b+1|0}}}l=k;return 0}function ja(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0;j=l;i=l=l+63&-64;l=l+400|0;Ge(i,f);while(1){c[i+256>>2]=c[i>>2];c[i+256+4>>2]=c[i+4>>2];c[i+256+8>>2]=c[i+8>>2];c[i+256+12>>2]=c[i+12>>2];Ge(i+240|0,i+256|0);vb(i+240|0,35254);Ge(i+224|0,i+240|0);Ge(i+208|0,i+240|0);Ge(i+192|0,i+240|0);Ge(i+176|0,i+240|0);Ge(i+160|0,i+240|0);Ge(i+144|0,i+240|0);Ig(i+240|0,1);Ig(i+224|0,2);Ig(i+208|0,3);Ig(i+192|0,4);Ig(i+176|0,5);Ig(i+160|0,6);Ig(i+144|0,7);vb(i+256|0,35222);vb(i+240|0,35270);vb(i+224|0,35270);vb(i+208|0,35270);vb(i+192|0,35270);vb(i+176|0,35270);vb(i+160|0,35270);vb(i+144|0,35270);Ge(i+128|0,i+160|0);ce(i+128|0,1);Kd(i+128|0,i+144|0);Ld(i+128|0,1104);Kd(i+144|0,i+128|0);ee(i+128|0,1);Kd(i+160|0,i+128|0);Ge(i+128|0,i+192|0);ce(i+128|0,1);Kd(i+128|0,i+176|0);Ld(i+128|0,1104);Kd(i+176|0,i+128|0);ee(i+128|0,1);Kd(i+192|0,i+128|0);Ge(i+128|0,i+224|0);ce(i+128|0,1);Kd(i+128|0,i+208|0);Ld(i+128|0,1104);Kd(i+208|0,i+128|0);ee(i+128|0,1);Kd(i+224|0,i+128|0);Ge(i+128|0,i+256|0);ce(i+128|0,1);Kd(i+128|0,i+240|0);Ld(i+128|0,1104);Kd(i+240|0,i+128|0);ee(i+128|0,1);Kd(i+256|0,i+128|0);Ge(i+128|0,i+176|0);ce(i+128|0,2);Kd(i+128|0,i+144|0);Ld(i+128|0,1120);Kd(i+144|0,i+128|0);ee(i+128|0,2);Kd(i+176|0,i+128|0);Ge(i+128|0,i+192|0);ce(i+128|0,2);Kd(i+128|0,i+160|0);Ld(i+128|0,1120);Kd(i+160|0,i+128|0);ee(i+128|0,2);Kd(i+192|0,i+128|0);Ge(i+128|0,i+240|0);ce(i+128|0,2);Kd(i+128|0,i+208|0);Ld(i+128|0,1120);Kd(i+208|0,i+128|0);ee(i+128|0,2);Kd(i+240|0,i+128|0);Ge(i+128|0,i+256|0);ce(i+128|0,2);Kd(i+128|0,i+224|0);Ld(i+128|0,1120);Kd(i+224|0,i+128|0);ee(i+128|0,2);Kd(i+256|0,i+128|0);Ge(i+128|0,i+208|0);ce(i+128|0,4);Kd(i+128|0,i+144|0);Ld(i+128|0,1136);Kd(i+144|0,i+128|0);ee(i+128|0,4);Kd(i+208|0,i+128|0);Ge(i+128|0,i+224|0);ce(i+128|0,4);Kd(i+128|0,i+160|0);Ld(i+128|0,1136);Kd(i+160|0,i+128|0);ee(i+128|0,4);Kd(i+224|0,i+128|0);Ge(i+128|0,i+240|0);ce(i+128|0,4);Kd(i+128|0,i+176|0);Ld(i+128|0,1136);Kd(i+176|0,i+128|0);ee(i+128|0,4);Kd(i+240|0,i+128|0);Ge(i+128|0,i+256|0);ce(i+128|0,4);Kd(i+128|0,i+192|0);Ld(i+128|0,1136);Kd(i+192|0,i+128|0);ee(i+128|0,4);Kd(i+256|0,i+128|0);Kd(i+256|0,g);vb(i+256|0,35286);Kd(i+240|0,g+16|0);vb(i+240|0,35286);Kd(i+224|0,g+32|0);vb(i+224|0,35286);Kd(i+208|0,g+48|0);vb(i+208|0,35286);Kd(i+192|0,g+64|0);vb(i+192|0,35286);Kd(i+176|0,g+80|0);vb(i+176|0,35286);Kd(i+160|0,g+96|0);vb(i+160|0,35286);Kd(i+144|0,g+112|0);vb(i+144|0,35286);Kd(i+176|0,i+160|0);Kd(i+224|0,i+240|0);Kd(i+176|0,i+256|0);Kd(i+160|0,i+224|0);Kd(i+208|0,i+256|0);Kd(i+160|0,i+208|0);Kd(i+208|0,i+144|0);Kd(i+208|0,i+192|0);Kd(i+144|0,i+176|0);Kd(i+208|0,i+240|0);Kd(i+192|0,i+176|0);Kd(i+224|0,i+144|0);Kd(i+240|0,i+176|0);Ge(i+80|0,i+144|0);Ge(i+96|0,i+240|0);Ge(i+112|0,i+176|0);Ge(i+48|0,i+224|0);Ge(i+64|0,i+160|0);Kd(i+80|0,i+192|0);Kd(i+96|0,i+224|0);Kd(i+112|0,i+208|0);Kd(i+48|0,i+192|0);Kd(i+64|0,i+256|0);Ge(i+32|0,i+80|0);Ge(i+128|0,i+96|0);Ge(i+16|0,i+80|0);Nd(i+96|0,i+112|0);Nd(i+80|0,i+64|0);Kd(i+16|0,i+128|0);Ld(i+32|0,i+64|0);Ld(i+128|0,i+112|0);Kd(i+64|0,i+112|0);Ld(i+16|0,i+64|0);Ge(i+64|0,i+208|0);Kd(i+64|0,i+256|0);Ld(i+48|0,i+64|0);Kd(i+80|0,i+48|0);Kd(i+96|0,i+48|0);Ge(i+48|0,i+144|0);Kd(i+48|0,i+240|0);Ge(i+64|0,i+176|0);Ge(i+112|0,i+48|0);Kd(i+64|0,i+160|0);Nd(i+112|0,i+64|0);Ld(i+48|0,i+64|0);Kd(i+128|0,i+48|0);Kd(i+80|0,i+16|0);Kd(i+96|0,i+32|0);Kd(i+112|0,i+16|0);Kd(i+128|0,i+32|0);Kd(i+112|0,i+32|0);Ge(i+64|0,i+224|0);Ge(i+48|0,i+192|0);Ge(i+32|0,i+240|0);Ge(i+16|0,i+144|0);Ld(i+64|0,i+208|0);Ld(i+48|0,i+256|0);Ld(i+32|0,i+176|0);Nd(i+16|0,i+160|0);Kd(i+80|0,i+64|0);Kd(i+96|0,i+48|0);Kd(i+112|0,i+32|0);Kd(i+128|0,i+16|0);Ge(i+64|0,i+80|0);Kd(i+64|0,i+96|0);Ld(i+80|0,i+112|0);Ge(i+32|0,i+128|0);Kd(i+32|0,i+80|0);Ge(i+16|0,i+64|0);Ld(i+16|0,i+32|0);Kd(i+16|0,i+96|0);Ge(i+48|0,i+112|0);Kd(i+48|0,i+128|0);Kd(i+80|0,i+96|0);Ld(i+48|0,i+80|0);Kd(i+48|0,i+128|0);Kd(i+112|0,i+48|0);Ge(i+96|0,i+32|0);Kd(i+96|0,i+48|0);Ld(i+96|0,i+128|0);Kd(i+112|0,i+96|0);Kd(i+32|0,i+96|0);Ld(i+32|0,i+16|0);Kd(i+32|0,i+64|0);Ge(i+64|0,i+160|0);Ge(i+128|0,i+176|0);Ge(i+96|0,i+16|0);Kd(i+96|0,i+32|0);Ld(i+96|0,i+160|0);Kd(i+160|0,i+176|0);Ld(i+160|0,i+32|0);Ld(i+176|0,i+16|0);Kd(i+160|0,i+176|0);Kd(i+176|0,i+96|0);Kd(i+64|0,i+256|0);Kd(i+128|0,i+208|0);Kd(i+16|0,i+48|0);Kd(i+32|0,i+112|0);Ge(i+80|0,i+16|0);Kd(i+80|0,i+32|0);Ld(i+80|0,i+64|0);Kd(i+64|0,i+128|0);Ld(i+64|0,i+32|0);Ld(i+128|0,i+16|0);Kd(i+128|0,i+64|0);Kd(i+64|0,i+80|0);Ge(i+96|0,i+48|0);Kd(i+96|0,i+112|0);Ld(i+96|0,i+256|0);Kd(i+256|0,i+208|0);Ld(i+256|0,i+112|0);Ld(i+208|0,i+48|0);Kd(i+256|0,i+208|0);Kd(i+208|0,i+96|0);Kd(i+160|0,i+64|0);Kd(i+256|0,i+64|0);Kd(i+176|0,i+128|0);Kd(i+208|0,i+128|0);Ge(i+64|0,i+144|0);Ge(i+128|0,i+240|0);Kd(i+64|0,i+192|0);Kd(i+128|0,i+224|0);Ge(i+80|0,i+16|0);Kd(i+80|0,i+32|0);Ld(i+80|0,i+64|0);Kd(i+64|0,i+128|0);Ld(i+64|0,i+32|0);Ld(i+128|0,i+16|0);Kd(i+128|0,i+64|0);Kd(i+64|0,i+80|0);Ge(i+96|0,i+48|0);Kd(i+96|0,i+112|0);Ld(i+96|0,i+192|0);Kd(i+192|0,i+224|0);Ld(i+192|0,i+112|0);Ld(i+224|0,i+48|0);Kd(i+192|0,i+224|0);Kd(i+224|0,i+96|0);Kd(i+16|0,i+48|0);Kd(i+32|0,i+112|0);Ge(i+80|0,i+16|0);Kd(i+80|0,i+32|0);Ld(i+80|0,i+144|0);Kd(i+144|0,i+240|0);Ld(i+144|0,i+32|0);Ld(i+240|0,i+16|0);Kd(i+144|0,i+240|0);Kd(i+240|0,i+80|0);Kd(i+144|0,i+64|0);Kd(i+192|0,i+64|0);Kd(i+240|0,i+128|0);Kd(i+224|0,i+128|0);Kd(i+144|0,i+256|0);Kd(i+240|0,i+160|0);Kd(i+192|0,i+144|0);Kd(i+160|0,i+256|0);Kd(i+256|0,i+240|0);Kd(i+240|0,i+176|0);Kd(i+176|0,i+224|0);Kd(i+192|0,i+176|0);Kd(i+224|0,i+208|0);Kd(i+208|0,i+176|0);Kd(i+160|0,i+208|0);cd(i+128|0,i+256|0,147);cd(i+112|0,i+240|0,147);cd(i+96|0,i+192|0,147);cd(i+80|0,i+160|0,147);cd(i+64|0,i+208|0,147);cd(i+48|0,i+144|0,147);cd(i+32|0,i+224|0,147);cd(i+16|0,i+176|0,147);Kd(i+256|0,i+128|0);Kd(i+240|0,i+112|0);Kd(i+192|0,i+96|0);Kd(i+160|0,i+80|0);Kd(i+208|0,i+64|0);Kd(i+144|0,i+48|0);Kd(i+224|0,i+32|0);Kd(i+176|0,i+16|0);Kd(i+128|0,i+176|0);Kd(i+112|0,i+256|0);Kd(i+96|0,i+240|0);Kd(i+112|0,i+176|0);Kd(i+80|0,i+192|0);Kd(i+64|0,i+160|0);Kd(i+48|0,i+208|0);Kd(i+80|0,i+176|0);Kd(i+32|0,i+144|0);Kd(i+16|0,i+224|0);Kd(i+64|0,i+176|0);cd(i+256|0,i+256|0,78);cd(i+240|0,i+240|0,78);cd(i+192|0,i+192|0,78);cd(i+160|0,i+160|0,78);cd(i+208|0,i+208|0,78);cd(i+144|0,i+144|0,78);cd(i+224|0,i+224|0,78);cd(i+176|0,i+176|0,78);Kd(i+128|0,i+256|0);Kd(i+112|0,i+240|0);Kd(i+96|0,i+192|0);Kd(i+80|0,i+160|0);Kd(i+64|0,i+208|0);Kd(i+48|0,i+144|0);Kd(i+32|0,i+224|0);Kd(i+16|0,i+176|0);Kd(i+128|0,g+128|0);vb(i+128|0,35286);Kd(i+112|0,g+144|0);vb(i+112|0,35286);Kd(i+96|0,g+160|0);vb(i+96|0,35286);Kd(i+80|0,g+176|0);vb(i+80|0,35286);Kd(i+64|0,g+192|0);vb(i+64|0,35286);Kd(i+48|0,g+208|0);vb(i+48|0,35286);Kd(i+32|0,g+224|0);vb(i+32|0,35286);Kd(i+16|0,g+240|0);vb(i+16|0,35286);Kd(i+48|0,i+32|0);Kd(i+96|0,i+112|0);Kd(i+48|0,i+128|0);Kd(i+32|0,i+96|0);Kd(i+80|0,i+128|0);Kd(i+32|0,i+80|0);Kd(i+80|0,i+16|0);Kd(i+80|0,i+64|0);Kd(i+16|0,i+48|0);Kd(i+80|0,i+112|0);Kd(i+64|0,i+48|0);Kd(i+96|0,i+16|0);Kd(i+112|0,i+48|0);Ge(i+208|0,i+16|0);Ge(i+224|0,i+112|0);Ge(i+240|0,i+48|0);Ge(i+176|0,i+96|0);Ge(i+192|0,i+32|0);Kd(i+208|0,i+64|0);Kd(i+224|0,i+96|0);Kd(i+240|0,i+80|0);Kd(i+176|0,i+64|0);Kd(i+192|0,i+128|0);Ge(i+160|0,i+208|0);Ge(i+256|0,i+224|0);Ge(i+144|0,i+208|0);Nd(i+224|0,i+240|0);Nd(i+208|0,i+192|0);Kd(i+144|0,i+256|0);Ld(i+160|0,i+192|0);Ld(i+256|0,i+240|0);Kd(i+192|0,i+240|0);Ld(i+144|0,i+192|0);Ge(i+192|0,i+80|0);Kd(i+192|0,i+128|0);Ld(i+176|0,i+192|0);Kd(i+208|0,i+176|0);Kd(i+224|0,i+176|0);Ge(i+176|0,i+16|0);Kd(i+176|0,i+112|0);Ge(i+192|0,i+48|0);Ge(i+240|0,i+176|0);Kd(i+192|0,i+32|0);Nd(i+240|0,i+192|0);Ld(i+176|0,i+192|0);Kd(i+256|0,i+176|0);Kd(i+208|0,i+144|0);Kd(i+224|0,i+160|0);Kd(i+240|0,i+144|0);Kd(i+256|0,i+160|0);Kd(i+240|0,i+160|0);Ge(i+192|0,i+96|0);Ge(i+176|0,i+64|0);Ge(i+160|0,i+112|0);Ge(i+144|0,i+16|0);Ld(i+192|0,i+80|0);Ld(i+176|0,i+128|0);Ld(i+160|0,i+48|0);Nd(i+144|0,i+32|0);Kd(i+208|0,i+192|0);Kd(i+224|0,i+176|0);Kd(i+240|0,i+160|0);Kd(i+256|0,i+144|0);Ge(i+192|0,i+208|0);Kd(i+192|0,i+224|0);Ld(i+208|0,i+240|0);Ge(i+160|0,i+256|0);Kd(i+160|0,i+208|0);Ge(i+144|0,i+192|0);Ld(i+144|0,i+160|0);Kd(i+144|0,i+224|0);Ge(i+176|0,i+240|0);Kd(i+176|0,i+256|0);Kd(i+208|0,i+224|0);Ld(i+176|0,i+208|0);Kd(i+176|0,i+256|0);Kd(i+240|0,i+176|0);Ge(i+224|0,i+160|0);Kd(i+224|0,i+176|0);Ld(i+224|0,i+256|0);Kd(i+240|0,i+224|0);Kd(i+160|0,i+224|0);Ld(i+160|0,i+144|0);Kd(i+160|0,i+192|0);Ge(i+192|0,i+32|0);Ge(i+256|0,i+48|0);Ge(i+224|0,i+144|0);Kd(i+224|0,i+160|0);Ld(i+224|0,i+32|0);Kd(i+32|0,i+48|0);Ld(i+32|0,i+160|0);Ld(i+48|0,i+144|0);Kd(i+32|0,i+48|0);Kd(i+48|0,i+224|0);Kd(i+192|0,i+128|0);Kd(i+256|0,i+80|0);Kd(i+144|0,i+176|0);Kd(i+160|0,i+240|0);Ge(i+208|0,i+144|0);Kd(i+208|0,i+160|0);Ld(i+208|0,i+192|0);Kd(i+192|0,i+256|0);Ld(i+192|0,i+160|0);Ld(i+256|0,i+144|0);Kd(i+256|0,i+192|0);Kd(i+192|0,i+208|0);Ge(i+224|0,i+176|0);Kd(i+224|0,i+240|0);Ld(i+224|0,i+128|0);Kd(i+128|0,i+80|0);Ld(i+128|0,i+240|0);Ld(i+80|0,i+176|0);Kd(i+128|0,i+80|0);Kd(i+80|0,i+224|0);Kd(i+32|0,i+192|0);Kd(i+128|0,i+192|0);Kd(i+48|0,i+256|0);Kd(i+80|0,i+256|0);Ge(i+192|0,i+16|0);Ge(i+256|0,i+112|0);Kd(i+192|0,i+64|0);Kd(i+256|0,i+96|0);Ge(i+208|0,i+144|0);Kd(i+208|0,i+160|0);Ld(i+208|0,i+192|0);Kd(i+192|0,i+256|0);Ld(i+192|0,i+160|0);Ld(i+256|0,i+144|0);Kd(i+256|0,i+192|0);Kd(i+192|0,i+208|0);Ge(i+224|0,i+176|0);Kd(i+224|0,i+240|0);Ld(i+224|0,i+64|0);Kd(i+64|0,i+96|0);Ld(i+64|0,i+240|0);Ld(i+96|0,i+176|0);Kd(i+64|0,i+96|0);Kd(i+96|0,i+224|0);Kd(i+144|0,i+176|0);Kd(i+160|0,i+240|0);Ge(i+208|0,i+144|0);Kd(i+208|0,i+160|0);Ld(i+208|0,i+16|0);Kd(i+16|0,i+112|0);Ld(i+16|0,i+160|0);Ld(i+112|0,i+144|0);Kd(i+16|0,i+112|0);Kd(i+112|0,i+208|0);Kd(i+16|0,i+192|0);Kd(i+64|0,i+192|0);Kd(i+112|0,i+256|0);Kd(i+96|0,i+256|0);Kd(i+16|0,i+128|0);Kd(i+112|0,i+32|0);Kd(i+64|0,i+16|0);Kd(i+32|0,i+128|0);Kd(i+128|0,i+112|0);Kd(i+112|0,i+48|0);Kd(i+48|0,i+96|0);Kd(i+64|0,i+48|0);Kd(i+96|0,i+80|0);Kd(i+80|0,i+48|0);Kd(i+32|0,i+80|0);cd(i+256|0,i+128|0,147);cd(i+240|0,i+112|0,147);cd(i+224|0,i+64|0,147);cd(i+208|0,i+32|0,147);cd(i+192|0,i+80|0,147);cd(i+176|0,i+16|0,147);cd(i+160|0,i+96|0,147);cd(i+144|0,i+48|0,147);Kd(i+128|0,i+256|0);Kd(i+112|0,i+240|0);Kd(i+64|0,i+224|0);Kd(i+32|0,i+208|0);Kd(i+80|0,i+192|0);Kd(i+16|0,i+176|0);Kd(i+96|0,i+160|0);Kd(i+48|0,i+144|0);Kd(i+256|0,i+48|0);Kd(i+240|0,i+128|0);Kd(i+224|0,i+112|0);Kd(i+240|0,i+48|0);Kd(i+208|0,i+64|0);Kd(i+192|0,i+32|0);Kd(i+176|0,i+80|0);Kd(i+208|0,i+48|0);Kd(i+160|0,i+16|0);Kd(i+144|0,i+96|0);Kd(i+192|0,i+48|0);cd(i+128|0,i+128|0,78);cd(i+112|0,i+112|0,78);cd(i+64|0,i+64|0,78);cd(i+32|0,i+32|0,78);cd(i+80|0,i+80|0,78);cd(i+16|0,i+16|0,78);cd(i+96|0,i+96|0,78);cd(i+48|0,i+48|0,78);Kd(i+256|0,i+128|0);Kd(i+240|0,i+112|0);Kd(i+224|0,i+64|0);Kd(i+208|0,i+32|0);Kd(i+192|0,i+80|0);Kd(i+176|0,i+16|0);Kd(i+160|0,i+96|0);Kd(i+144|0,i+48|0);Kd(i+256|0,g+256|0);vb(i+256|0,35286);Kd(i+240|0,g+272|0);vb(i+240|0,35286);Kd(i+224|0,g+288|0);vb(i+224|0,35286);Kd(i+208|0,g+304|0);vb(i+208|0,35286);Kd(i+192|0,g+320|0);vb(i+192|0,35286);Kd(i+176|0,g+336|0);vb(i+176|0,35286);Kd(i+160|0,g+352|0);vb(i+160|0,35286);Kd(i+144|0,g+368|0);vb(i+144|0,35286);Kd(i+176|0,i+160|0);Kd(i+224|0,i+240|0);Kd(i+176|0,i+256|0);Kd(i+160|0,i+224|0);Kd(i+208|0,i+256|0);Kd(i+160|0,i+208|0);Kd(i+208|0,i+144|0);Kd(i+208|0,i+192|0);Kd(i+144|0,i+176|0);Kd(i+208|0,i+240|0);Kd(i+192|0,i+176|0);Kd(i+224|0,i+144|0);Kd(i+240|0,i+176|0);Ge(i+80|0,i+144|0);Ge(i+96|0,i+240|0);Ge(i+112|0,i+176|0);Ge(i+48|0,i+224|0);Ge(i+64|0,i+160|0);Kd(i+80|0,i+192|0);Kd(i+96|0,i+224|0);Kd(i+112|0,i+208|0);Kd(i+48|0,i+192|0);Kd(i+64|0,i+256|0);Ge(i+32|0,i+80|0);Ge(i+128|0,i+96|0);Ge(i+16|0,i+80|0);Nd(i+96|0,i+112|0);Nd(i+80|0,i+64|0);Kd(i+16|0,i+128|0);Ld(i+32|0,i+64|0);Ld(i+128|0,i+112|0);Kd(i+64|0,i+112|0);Ld(i+16|0,i+64|0);Ge(i+64|0,i+208|0);Kd(i+64|0,i+256|0);Ld(i+48|0,i+64|0);Kd(i+80|0,i+48|0);Kd(i+96|0,i+48|0);Ge(i+48|0,i+144|0);Kd(i+48|0,i+240|0);Ge(i+64|0,i+176|0);Ge(i+112|0,i+48|0);Kd(i+64|0,i+160|0);Nd(i+112|0,i+64|0);Ld(i+48|0,i+64|0);Kd(i+128|0,i+48|0);Kd(i+80|0,i+16|0);Kd(i+96|0,i+32|0);Kd(i+112|0,i+16|0);Kd(i+128|0,i+32|0);Kd(i+112|0,i+32|0);Ge(i+64|0,i+224|0);Ge(i+48|0,i+192|0);Ge(i+32|0,i+240|0);Ge(i+16|0,i+144|0);Ld(i+64|0,i+208|0);Ld(i+48|0,i+256|0);Ld(i+32|0,i+176|0);Nd(i+16|0,i+160|0);Kd(i+80|0,i+64|0);Kd(i+96|0,i+48|0);Kd(i+112|0,i+32|0);Kd(i+128|0,i+16|0);Ge(i+64|0,i+80|0);Kd(i+64|0,i+96|0);Ld(i+80|0,i+112|0);Ge(i+32|0,i+128|0);Kd(i+32|0,i+80|0);Ge(i+16|0,i+64|0);Ld(i+16|0,i+32|0);Kd(i+16|0,i+96|0);Ge(i+48|0,i+112|0);Kd(i+48|0,i+128|0);Kd(i+80|0,i+96|0);Ld(i+48|0,i+80|0);Kd(i+48|0,i+128|0);Kd(i+112|0,i+48|0);Ge(i+96|0,i+32|0);Kd(i+96|0,i+48|0);Ld(i+96|0,i+128|0);Kd(i+112|0,i+96|0);Kd(i+32|0,i+96|0);Ld(i+32|0,i+16|0);Kd(i+32|0,i+64|0);Ge(i+64|0,i+160|0);Ge(i+128|0,i+176|0);Ge(i+96|0,i+16|0);Kd(i+96|0,i+32|0);Ld(i+96|0,i+160|0);Kd(i+160|0,i+176|0);Ld(i+160|0,i+32|0);Ld(i+176|0,i+16|0);Kd(i+160|0,i+176|0);Kd(i+176|0,i+96|0);Kd(i+64|0,i+256|0);Kd(i+128|0,i+208|0);Kd(i+16|0,i+48|0);Kd(i+32|0,i+112|0);Ge(i+80|0,i+16|0);Kd(i+80|0,i+32|0);Ld(i+80|0,i+64|0);Kd(i+64|0,i+128|0);Ld(i+64|0,i+32|0);Ld(i+128|0,i+16|0);Kd(i+128|0,i+64|0);Kd(i+64|0,i+80|0);Ge(i+96|0,i+48|0);Kd(i+96|0,i+112|0);Ld(i+96|0,i+256|0);Kd(i+256|0,i+208|0);Ld(i+256|0,i+112|0);Ld(i+208|0,i+48|0);Kd(i+256|0,i+208|0);Kd(i+208|0,i+96|0);Kd(i+160|0,i+64|0);Kd(i+256|0,i+64|0);Kd(i+176|0,i+128|0);Kd(i+208|0,i+128|0);Ge(i+64|0,i+144|0);Ge(i+128|0,i+240|0);Kd(i+64|0,i+192|0);Kd(i+128|0,i+224|0);Ge(i+80|0,i+16|0);Kd(i+80|0,i+32|0);Ld(i+80|0,i+64|0);Kd(i+64|0,i+128|0);Ld(i+64|0,i+32|0);Ld(i+128|0,i+16|0);Kd(i+128|0,i+64|0);Kd(i+64|0,i+80|0);Ge(i+96|0,i+48|0);Kd(i+96|0,i+112|0);Ld(i+96|0,i+192|0);Kd(i+192|0,i+224|0);Ld(i+192|0,i+112|0);Ld(i+224|0,i+48|0);Kd(i+192|0,i+224|0);Kd(i+224|0,i+96|0);Kd(i+16|0,i+48|0);Kd(i+32|0,i+112|0);Ge(i+80|0,i+16|0);Kd(i+80|0,i+32|0);Ld(i+80|0,i+144|0);Kd(i+144|0,i+240|0);Ld(i+144|0,i+32|0);Ld(i+240|0,i+16|0);Kd(i+144|0,i+240|0);Kd(i+240|0,i+80|0);Kd(i+144|0,i+64|0);Kd(i+192|0,i+64|0);Kd(i+240|0,i+128|0);Kd(i+224|0,i+128|0);Kd(i+144|0,i+256|0);Kd(i+240|0,i+160|0);Kd(i+192|0,i+144|0);Kd(i+160|0,i+256|0);Kd(i+256|0,i+240|0);Kd(i+240|0,i+176|0);Kd(i+176|0,i+224|0);Kd(i+192|0,i+176|0);Kd(i+224|0,i+208|0);Kd(i+208|0,i+176|0);Kd(i+160|0,i+208|0);cd(i+128|0,i+256|0,147);cd(i+112|0,i+240|0,147);cd(i+96|0,i+192|0,147);cd(i+80|0,i+160|0,147);cd(i+64|0,i+208|0,147);cd(i+48|0,i+144|0,147);cd(i+32|0,i+224|0,147);cd(i+16|0,i+176|0,147);Kd(i+256|0,i+128|0);Kd(i+240|0,i+112|0);Kd(i+192|0,i+96|0);Kd(i+160|0,i+80|0);Kd(i+208|0,i+64|0);Kd(i+144|0,i+48|0);Kd(i+224|0,i+32|0);Kd(i+176|0,i+16|0);Kd(i+128|0,i+176|0);Kd(i+112|0,i+256|0);Kd(i+96|0,i+240|0);Kd(i+112|0,i+176|0);Kd(i+80|0,i+192|0);Kd(i+64|0,i+160|0);Kd(i+48|0,i+208|0);Kd(i+80|0,i+176|0);Kd(i+32|0,i+144|0);Kd(i+16|0,i+224|0);Kd(i+64|0,i+176|0);cd(i+256|0,i+256|0,78);cd(i+240|0,i+240|0,78);cd(i+192|0,i+192|0,78);cd(i+160|0,i+160|0,78);cd(i+208|0,i+208|0,78);cd(i+144|0,i+144|0,78);cd(i+224|0,i+224|0,78);cd(i+176|0,i+176|0,78);Kd(i+128|0,i+256|0);Kd(i+112|0,i+240|0);Kd(i+96|0,i+192|0);Kd(i+80|0,i+160|0);Kd(i+64|0,i+208|0);Kd(i+48|0,i+144|0);Kd(i+32|0,i+224|0);Kd(i+16|0,i+176|0);Kd(i+128|0,g+384|0);vb(i+128|0,35286);Kd(i+112|0,g+400|0);vb(i+112|0,35286);Kd(i+96|0,g+416|0);vb(i+96|0,35286);Kd(i+80|0,g+432|0);vb(i+80|0,35286);Kd(i+64|0,g+448|0);vb(i+64|0,35286);Kd(i+48|0,g+464|0);vb(i+48|0,35286);Kd(i+32|0,g+480|0);vb(i+32|0,35286);Kd(i+16|0,g+496|0);vb(i+16|0,35286);Kd(i+48|0,i+32|0);Kd(i+96|0,i+112|0);Kd(i+48|0,i+128|0);Kd(i+32|0,i+96|0);Kd(i+80|0,i+128|0);Kd(i+32|0,i+80|0);Kd(i+80|0,i+16|0);Kd(i+80|0,i+64|0);Kd(i+16|0,i+48|0);Kd(i+80|0,i+112|0);Kd(i+64|0,i+48|0);Kd(i+96|0,i+16|0);Kd(i+112|0,i+48|0);Ge(i+208|0,i+16|0);Ge(i+224|0,i+112|0);Ge(i+240|0,i+48|0);Ge(i+176|0,i+96|0);Ge(i+192|0,i+32|0);Kd(i+208|0,i+64|0);Kd(i+224|0,i+96|0);Kd(i+240|0,i+80|0);Kd(i+176|0,i+64|0);Kd(i+192|0,i+128|0);Ge(i+160|0,i+208|0);Ge(i+256|0,i+224|0);Ge(i+144|0,i+208|0);Nd(i+224|0,i+240|0);Nd(i+208|0,i+192|0);Kd(i+144|0,i+256|0);Ld(i+160|0,i+192|0);Ld(i+256|0,i+240|0);Kd(i+192|0,i+240|0);Ld(i+144|0,i+192|0);Ge(i+192|0,i+80|0);Kd(i+192|0,i+128|0);Ld(i+176|0,i+192|0);Kd(i+208|0,i+176|0);Kd(i+224|0,i+176|0);Ge(i+176|0,i+16|0);Kd(i+176|0,i+112|0);Ge(i+192|0,i+48|0);Ge(i+240|0,i+176|0);Kd(i+192|0,i+32|0);Nd(i+240|0,i+192|0);Ld(i+176|0,i+192|0);Kd(i+256|0,i+176|0);Kd(i+208|0,i+144|0);Kd(i+224|0,i+160|0);Kd(i+240|0,i+144|0);Kd(i+256|0,i+160|0);Kd(i+240|0,i+160|0);Ge(i+192|0,i+96|0);Ge(i+176|0,i+64|0);Ge(i+160|0,i+112|0);Ge(i+144|0,i+16|0);Ld(i+192|0,i+80|0);Ld(i+176|0,i+128|0);Ld(i+160|0,i+48|0);Nd(i+144|0,i+32|0);Kd(i+208|0,i+192|0);Kd(i+224|0,i+176|0);Kd(i+240|0,i+160|0);Kd(i+256|0,i+144|0);Ge(i+192|0,i+208|0);Kd(i+192|0,i+224|0);Ld(i+208|0,i+240|0);Ge(i+160|0,i+256|0);Kd(i+160|0,i+208|0);Ge(i+144|0,i+192|0);Ld(i+144|0,i+160|0);Kd(i+144|0,i+224|0);Ge(i+176|0,i+240|0);Kd(i+176|0,i+256|0);Kd(i+208|0,i+224|0);Ld(i+176|0,i+208|0);Kd(i+176|0,i+256|0);Kd(i+240|0,i+176|0);Ge(i+224|0,i+160|0);Kd(i+224|0,i+176|0);Ld(i+224|0,i+256|0);Kd(i+240|0,i+224|0);Kd(i+160|0,i+224|0);Ld(i+160|0,i+144|0);Kd(i+160|0,i+192|0);Ge(i+192|0,i+32|0);Ge(i+256|0,i+48|0);Ge(i+224|0,i+144|0);Kd(i+224|0,i+160|0);Ld(i+224|0,i+32|0);Kd(i+32|0,i+48|0);Ld(i+32|0,i+160|0);Ld(i+48|0,i+144|0);Kd(i+32|0,i+48|0);Kd(i+48|0,i+224|0);Kd(i+192|0,i+128|0);Kd(i+256|0,i+80|0);Kd(i+144|0,i+176|0);Kd(i+160|0,i+240|0);Ge(i+208|0,i+144|0);Kd(i+208|0,i+160|0);Ld(i+208|0,i+192|0);Kd(i+192|0,i+256|0);Ld(i+192|0,i+160|0);Ld(i+256|0,i+144|0);Kd(i+256|0,i+192|0);Kd(i+192|0,i+208|0);Ge(i+224|0,i+176|0);Kd(i+224|0,i+240|0);Ld(i+224|0,i+128|0);Kd(i+128|0,i+80|0);Ld(i+128|0,i+240|0);Ld(i+80|0,i+176|0);Kd(i+128|0,i+80|0);Kd(i+80|0,i+224|0);Kd(i+32|0,i+192|0);Kd(i+128|0,i+192|0);Kd(i+48|0,i+256|0);Kd(i+80|0,i+256|0);Ge(i+192|0,i+16|0);Ge(i+256|0,i+112|0);Kd(i+192|0,i+64|0);Kd(i+256|0,i+96|0);Ge(i+208|0,i+144|0);Kd(i+208|0,i+160|0);Ld(i+208|0,i+192|0);Kd(i+192|0,i+256|0);Ld(i+192|0,i+160|0);Ld(i+256|0,i+144|0);Kd(i+256|0,i+192|0);Kd(i+192|0,i+208|0);Ge(i+224|0,i+176|0);Kd(i+224|0,i+240|0);Ld(i+224|0,i+64|0);Kd(i+64|0,i+96|0);Ld(i+64|0,i+240|0);Ld(i+96|0,i+176|0);Kd(i+64|0,i+96|0);Kd(i+96|0,i+224|0);Kd(i+144|0,i+176|0);Kd(i+160|0,i+240|0);Ge(i+208|0,i+144|0);Kd(i+208|0,i+160|0);Ld(i+208|0,i+16|0);Kd(i+16|0,i+112|0);Ld(i+16|0,i+160|0);Ld(i+112|0,i+144|0);Kd(i+16|0,i+112|0);Kd(i+112|0,i+208|0);Kd(i+16|0,i+192|0);Kd(i+64|0,i+192|0);Kd(i+112|0,i+256|0);Kd(i+96|0,i+256|0);Kd(i+16|0,i+128|0);Kd(i+112|0,i+32|0);Kd(i+64|0,i+16|0);Kd(i+32|0,i+128|0);Kd(i+128|0,i+112|0);Kd(i+112|0,i+48|0);Kd(i+48|0,i+96|0);Kd(i+64|0,i+48|0);Kd(i+96|0,i+80|0);Kd(i+80|0,i+48|0);Kd(i+32|0,i+80|0);cd(i+256|0,i+128|0,147);cd(i+240|0,i+112|0,147);cd(i+224|0,i+64|0,147);cd(i+208|0,i+32|0,147);cd(i+192|0,i+80|0,147);cd(i+176|0,i+16|0,147);cd(i+160|0,i+96|0,147);cd(i+144|0,i+48|0,147);Kd(i+128|0,i+256|0);Kd(i+112|0,i+240|0);Kd(i+64|0,i+224|0);Kd(i+32|0,i+208|0);Kd(i+80|0,i+192|0);Kd(i+16|0,i+176|0);Kd(i+96|0,i+160|0);Kd(i+48|0,i+144|0);Kd(i+256|0,i+48|0);Kd(i+240|0,i+128|0);Kd(i+224|0,i+112|0);Kd(i+240|0,i+48|0);Kd(i+208|0,i+64|0);Kd(i+192|0,i+32|0);Kd(i+176|0,i+80|0);Kd(i+208|0,i+48|0);Kd(i+160|0,i+16|0);Kd(i+144|0,i+96|0);Kd(i+192|0,i+48|0);cd(i+128|0,i+128|0,78);cd(i+112|0,i+112|0,78);cd(i+64|0,i+64|0,78);cd(i+32|0,i+32|0,78);cd(i+80|0,i+80|0,78);cd(i+16|0,i+16|0,78);cd(i+96|0,i+96|0,78);cd(i+48|0,i+48|0,78);Kd(i+256|0,i+128|0);Kd(i+240|0,i+112|0);Kd(i+224|0,i+64|0);Kd(i+208|0,i+32|0);Kd(i+192|0,i+80|0);Kd(i+176|0,i+16|0);Kd(i+160|0,i+96|0);Kd(i+144|0,i+48|0);Kd(i+256|0,g+512|0);vb(i+256|0,35286);Kd(i+240|0,g+528|0);vb(i+240|0,35286);Kd(i+224|0,g+544|0);vb(i+224|0,35286);Kd(i+208|0,g+560|0);vb(i+208|0,35286);Kd(i+192|0,g+576|0);vb(i+192|0,35286);Kd(i+176|0,g+592|0);vb(i+176|0,35286);Kd(i+160|0,g+608|0);vb(i+160|0,35286);Kd(i+144|0,g+624|0);vb(i+144|0,35286);Kd(i+176|0,i+160|0);Kd(i+224|0,i+240|0);Kd(i+176|0,i+256|0);Kd(i+160|0,i+224|0);Kd(i+208|0,i+256|0);Kd(i+160|0,i+208|0);Kd(i+208|0,i+144|0);Kd(i+208|0,i+192|0);Kd(i+144|0,i+176|0);Kd(i+208|0,i+240|0);Kd(i+192|0,i+176|0);Kd(i+224|0,i+144|0);Kd(i+240|0,i+176|0);Ge(i+80|0,i+144|0);Ge(i+96|0,i+240|0);Ge(i+112|0,i+176|0);Ge(i+48|0,i+224|0);Ge(i+64|0,i+160|0);Kd(i+80|0,i+192|0);Kd(i+96|0,i+224|0);Kd(i+112|0,i+208|0);Kd(i+48|0,i+192|0);Kd(i+64|0,i+256|0);Ge(i+32|0,i+80|0);Ge(i+128|0,i+96|0);Ge(i+16|0,i+80|0);Nd(i+96|0,i+112|0);Nd(i+80|0,i+64|0);Kd(i+16|0,i+128|0);Ld(i+32|0,i+64|0);Ld(i+128|0,i+112|0);Kd(i+64|0,i+112|0);Ld(i+16|0,i+64|0);Ge(i+64|0,i+208|0);Kd(i+64|0,i+256|0);Ld(i+48|0,i+64|0);Kd(i+80|0,i+48|0);Kd(i+96|0,i+48|0);Ge(i+48|0,i+144|0);Kd(i+48|0,i+240|0);Ge(i+64|0,i+176|0);Ge(i+112|0,i+48|0);Kd(i+64|0,i+160|0);Nd(i+112|0,i+64|0);Ld(i+48|0,i+64|0);Kd(i+128|0,i+48|0);Kd(i+80|0,i+16|0);Kd(i+96|0,i+32|0);Kd(i+112|0,i+16|0);Kd(i+128|0,i+32|0);Kd(i+112|0,i+32|0);Ge(i+64|0,i+224|0);Ge(i+48|0,i+192|0);Ge(i+32|0,i+240|0);Ge(i+16|0,i+144|0);Ld(i+64|0,i+208|0);Ld(i+48|0,i+256|0);Ld(i+32|0,i+176|0);Nd(i+16|0,i+160|0);Kd(i+80|0,i+64|0);Kd(i+96|0,i+48|0);Kd(i+112|0,i+32|0);Kd(i+128|0,i+16|0);Ge(i+64|0,i+80|0);Kd(i+64|0,i+96|0);Ld(i+80|0,i+112|0);Ge(i+32|0,i+128|0);Kd(i+32|0,i+80|0);Ge(i+16|0,i+64|0);Ld(i+16|0,i+32|0);Kd(i+16|0,i+96|0);Ge(i+48|0,i+112|0);Kd(i+48|0,i+128|0);Kd(i+80|0,i+96|0);Ld(i+48|0,i+80|0);Kd(i+48|0,i+128|0);Kd(i+112|0,i+48|0);Ge(i+96|0,i+32|0);Kd(i+96|0,i+48|0);Ld(i+96|0,i+128|0);Kd(i+112|0,i+96|0);Kd(i+32|0,i+96|0);Ld(i+32|0,i+16|0);Kd(i+32|0,i+64|0);Ge(i+64|0,i+160|0);Ge(i+128|0,i+176|0);Ge(i+96|0,i+16|0);Kd(i+96|0,i+32|0);Ld(i+96|0,i+160|0);Kd(i+160|0,i+176|0);Ld(i+160|0,i+32|0);Ld(i+176|0,i+16|0);Kd(i+160|0,i+176|0);Kd(i+176|0,i+96|0);Kd(i+64|0,i+256|0);Kd(i+128|0,i+208|0);Kd(i+16|0,i+48|0);Kd(i+32|0,i+112|0);Ge(i+80|0,i+16|0);Kd(i+80|0,i+32|0);Ld(i+80|0,i+64|0);Kd(i+64|0,i+128|0);Ld(i+64|0,i+32|0);Ld(i+128|0,i+16|0);Kd(i+128|0,i+64|0);Kd(i+64|0,i+80|0);Ge(i+96|0,i+48|0);Kd(i+96|0,i+112|0);Ld(i+96|0,i+256|0);Kd(i+256|0,i+208|0);Ld(i+256|0,i+112|0);Ld(i+208|0,i+48|0);Kd(i+256|0,i+208|0);Kd(i+208|0,i+96|0);Kd(i+160|0,i+64|0);Kd(i+256|0,i+64|0);Kd(i+176|0,i+128|0);Kd(i+208|0,i+128|0);Ge(i+64|0,i+144|0);Ge(i+128|0,i+240|0);Kd(i+64|0,i+192|0);Kd(i+128|0,i+224|0);Ge(i+80|0,i+16|0);Kd(i+80|0,i+32|0);Ld(i+80|0,i+64|0);Kd(i+64|0,i+128|0);Ld(i+64|0,i+32|0);Ld(i+128|0,i+16|0);Kd(i+128|0,i+64|0);Kd(i+64|0,i+80|0);Ge(i+96|0,i+48|0);Kd(i+96|0,i+112|0);Ld(i+96|0,i+192|0);Kd(i+192|0,i+224|0);Ld(i+192|0,i+112|0);Ld(i+224|0,i+48|0);Kd(i+192|0,i+224|0);Kd(i+224|0,i+96|0);Kd(i+16|0,i+48|0);Kd(i+32|0,i+112|0);Ge(i+80|0,i+16|0);Kd(i+80|0,i+32|0);Ld(i+80|0,i+144|0);Kd(i+144|0,i+240|0);Ld(i+144|0,i+32|0);Ld(i+240|0,i+16|0);Kd(i+144|0,i+240|0);Kd(i+240|0,i+80|0);Kd(i+144|0,i+64|0);Kd(i+192|0,i+64|0);Kd(i+240|0,i+128|0);Kd(i+224|0,i+128|0);Kd(i+144|0,i+256|0);Kd(i+240|0,i+160|0);Kd(i+192|0,i+144|0);Kd(i+160|0,i+256|0);Kd(i+256|0,i+240|0);Kd(i+240|0,i+176|0);Kd(i+176|0,i+224|0);Kd(i+192|0,i+176|0);Kd(i+224|0,i+208|0);Kd(i+208|0,i+176|0);Kd(i+160|0,i+208|0);cd(i+128|0,i+256|0,147);cd(i+112|0,i+240|0,147);cd(i+96|0,i+192|0,147);cd(i+80|0,i+160|0,147);cd(i+64|0,i+208|0,147);cd(i+48|0,i+144|0,147);cd(i+32|0,i+224|0,147);cd(i+16|0,i+176|0,147);Kd(i+256|0,i+128|0);Kd(i+240|0,i+112|0);Kd(i+192|0,i+96|0);Kd(i+160|0,i+80|0);Kd(i+208|0,i+64|0);Kd(i+144|0,i+48|0);Kd(i+224|0,i+32|0);Kd(i+176|0,i+16|0);Kd(i+128|0,i+176|0);Kd(i+112|0,i+256|0);Kd(i+96|0,i+240|0);Kd(i+112|0,i+176|0);Kd(i+80|0,i+192|0);Kd(i+64|0,i+160|0);Kd(i+48|0,i+208|0);Kd(i+80|0,i+176|0);Kd(i+32|0,i+144|0);Kd(i+16|0,i+224|0);Kd(i+64|0,i+176|0);cd(i+256|0,i+256|0,78);cd(i+240|0,i+240|0,78);cd(i+192|0,i+192|0,78);cd(i+160|0,i+160|0,78);cd(i+208|0,i+208|0,78);cd(i+144|0,i+144|0,78);cd(i+224|0,i+224|0,78);cd(i+176|0,i+176|0,78);Kd(i+128|0,i+256|0);Kd(i+112|0,i+240|0);Kd(i+96|0,i+192|0);Kd(i+80|0,i+160|0);Kd(i+64|0,i+208|0);Kd(i+48|0,i+144|0);Kd(i+32|0,i+224|0);Kd(i+16|0,i+176|0);Kd(i+128|0,g+640|0);vb(i+128|0,35286);Kd(i+112|0,g+656|0);vb(i+112|0,35286);Kd(i+96|0,g+672|0);vb(i+96|0,35286);Kd(i+80|0,g+688|0);vb(i+80|0,35286);Kd(i+64|0,g+704|0);vb(i+64|0,35286);Kd(i+48|0,g+720|0);vb(i+48|0,35286);Kd(i+32|0,g+736|0);vb(i+32|0,35286);Kd(i+16|0,g+752|0);vb(i+16|0,35286);Kd(i+48|0,i+32|0);Kd(i+96|0,i+112|0);Kd(i+48|0,i+128|0);Kd(i+32|0,i+96|0);Kd(i+80|0,i+128|0);Kd(i+32|0,i+80|0);Kd(i+80|0,i+16|0);Kd(i+80|0,i+64|0);Kd(i+16|0,i+48|0);Kd(i+80|0,i+112|0);Kd(i+64|0,i+48|0);Kd(i+96|0,i+16|0);Kd(i+112|0,i+48|0);Ge(i+208|0,i+16|0);Ge(i+224|0,i+112|0);Ge(i+240|0,i+48|0);Ge(i+176|0,i+96|0);Ge(i+192|0,i+32|0);Kd(i+208|0,i+64|0);Kd(i+224|0,i+96|0);Kd(i+240|0,i+80|0);Kd(i+176|0,i+64|0);Kd(i+192|0,i+128|0);Ge(i+160|0,i+208|0);Ge(i+256|0,i+224|0);Ge(i+144|0,i+208|0);Nd(i+224|0,i+240|0);Nd(i+208|0,i+192|0);Kd(i+144|0,i+256|0);Ld(i+160|0,i+192|0);Ld(i+256|0,i+240|0);Kd(i+192|0,i+240|0);Ld(i+144|0,i+192|0);Ge(i+192|0,i+80|0);Kd(i+192|0,i+128|0);Ld(i+176|0,i+192|0);Kd(i+208|0,i+176|0);Kd(i+224|0,i+176|0);Ge(i+176|0,i+16|0);Kd(i+176|0,i+112|0);Ge(i+192|0,i+48|0);Ge(i+240|0,i+176|0);Kd(i+192|0,i+32|0);Nd(i+240|0,i+192|0);Ld(i+176|0,i+192|0);Kd(i+256|0,i+176|0);Kd(i+208|0,i+144|0);Kd(i+224|0,i+160|0);Kd(i+240|0,i+144|0);Kd(i+256|0,i+160|0);Kd(i+240|0,i+160|0);Ge(i+192|0,i+96|0);Ge(i+176|0,i+64|0);Ge(i+160|0,i+112|0);Ge(i+144|0,i+16|0);Ld(i+192|0,i+80|0);Ld(i+176|0,i+128|0);Ld(i+160|0,i+48|0);Nd(i+144|0,i+32|0);Kd(i+208|0,i+192|0);Kd(i+224|0,i+176|0);Kd(i+240|0,i+160|0);Kd(i+256|0,i+144|0);Ge(i+192|0,i+208|0);Kd(i+192|0,i+224|0);Ld(i+208|0,i+240|0);Ge(i+160|0,i+256|0);Kd(i+160|0,i+208|0);Ge(i+144|0,i+192|0);Ld(i+144|0,i+160|0);Kd(i+144|0,i+224|0);Ge(i+176|0,i+240|0);Kd(i+176|0,i+256|0);Kd(i+208|0,i+224|0);Ld(i+176|0,i+208|0);Kd(i+176|0,i+256|0);Kd(i+240|0,i+176|0);Ge(i+224|0,i+160|0);Kd(i+224|0,i+176|0);Ld(i+224|0,i+256|0);Kd(i+240|0,i+224|0);Kd(i+160|0,i+224|0);Ld(i+160|0,i+144|0);Kd(i+160|0,i+192|0);Ge(i+192|0,i+32|0);Ge(i+256|0,i+48|0);Ge(i+224|0,i+144|0);Kd(i+224|0,i+160|0);Ld(i+224|0,i+32|0);Kd(i+32|0,i+48|0);Ld(i+32|0,i+160|0);Ld(i+48|0,i+144|0);Kd(i+32|0,i+48|0);Kd(i+48|0,i+224|0);Kd(i+192|0,i+128|0);Kd(i+256|0,i+80|0);Kd(i+144|0,i+176|0);Kd(i+160|0,i+240|0);Ge(i+208|0,i+144|0);Kd(i+208|0,i+160|0);Ld(i+208|0,i+192|0);Kd(i+192|0,i+256|0);Ld(i+192|0,i+160|0);Ld(i+256|0,i+144|0);Kd(i+256|0,i+192|0);Kd(i+192|0,i+208|0);Ge(i+224|0,i+176|0);Kd(i+224|0,i+240|0);Ld(i+224|0,i+128|0);Kd(i+128|0,i+80|0);Ld(i+128|0,i+240|0);Ld(i+80|0,i+176|0);Kd(i+128|0,i+80|0);Kd(i+80|0,i+224|0);Kd(i+32|0,i+192|0);Kd(i+128|0,i+192|0);Kd(i+48|0,i+256|0);Kd(i+80|0,i+256|0);Ge(i+192|0,i+16|0);Ge(i+256|0,i+112|0);Kd(i+192|0,i+64|0);Kd(i+256|0,i+96|0);Ge(i+208|0,i+144|0);Kd(i+208|0,i+160|0);Ld(i+208|0,i+192|0);Kd(i+192|0,i+256|0);Ld(i+192|0,i+160|0);Ld(i+256|0,i+144|0);Kd(i+256|0,i+192|0);Kd(i+192|0,i+208|0);Ge(i+224|0,i+176|0);Kd(i+224|0,i+240|0);Ld(i+224|0,i+64|0);Kd(i+64|0,i+96|0);Ld(i+64|0,i+240|0);Ld(i+96|0,i+176|0);Kd(i+64|0,i+96|0);Kd(i+96|0,i+224|0);Kd(i+144|0,i+176|0);Kd(i+160|0,i+240|0);Ge(i+208|0,i+144|0);Kd(i+208|0,i+160|0);Ld(i+208|0,i+16|0);Kd(i+16|0,i+112|0);Ld(i+16|0,i+160|0);Ld(i+112|0,i+144|0);Kd(i+16|0,i+112|0);Kd(i+112|0,i+208|0);Kd(i+16|0,i+192|0);Kd(i+64|0,i+192|0);Kd(i+112|0,i+256|0);Kd(i+96|0,i+256|0);Kd(i+16|0,i+128|0);Kd(i+112|0,i+32|0);Kd(i+64|0,i+16|0);Kd(i+32|0,i+128|0);Kd(i+128|0,i+112|0);Kd(i+112|0,i+48|0);Kd(i+48|0,i+96|0);Kd(i+64|0,i+48|0);Kd(i+96|0,i+80|0);Kd(i+80|0,i+48|0);Kd(i+32|0,i+80|0);cd(i+256|0,i+128|0,147);cd(i+240|0,i+112|0,147);cd(i+224|0,i+64|0,147);cd(i+208|0,i+32|0,147);cd(i+192|0,i+80|0,147);cd(i+176|0,i+16|0,147);cd(i+160|0,i+96|0,147);cd(i+144|0,i+48|0,147);Kd(i+128|0,i+256|0);Kd(i+112|0,i+240|0);Kd(i+64|0,i+224|0);Kd(i+32|0,i+208|0);Kd(i+80|0,i+192|0);Kd(i+16|0,i+176|0);Kd(i+96|0,i+160|0);Kd(i+48|0,i+144|0);Kd(i+256|0,i+48|0);Kd(i+240|0,i+128|0);Kd(i+224|0,i+112|0);Kd(i+240|0,i+48|0);Kd(i+208|0,i+64|0);Kd(i+192|0,i+32|0);Kd(i+176|0,i+80|0);Kd(i+208|0,i+48|0);Kd(i+160|0,i+16|0);Kd(i+144|0,i+96|0);Kd(i+192|0,i+48|0);cd(i+128|0,i+128|0,78);cd(i+112|0,i+112|0,78);cd(i+64|0,i+64|0,78);cd(i+32|0,i+32|0,78);cd(i+80|0,i+80|0,78);cd(i+16|0,i+16|0,78);cd(i+96|0,i+96|0,78);cd(i+48|0,i+48|0,78);Kd(i+256|0,i+128|0);Kd(i+240|0,i+112|0);Kd(i+224|0,i+64|0);Kd(i+208|0,i+32|0);Kd(i+192|0,i+80|0);Kd(i+176|0,i+16|0);Kd(i+160|0,i+96|0);Kd(i+144|0,i+48|0);Kd(i+256|0,g+768|0);vb(i+256|0,35286);Kd(i+240|0,g+784|0);vb(i+240|0,35286);Kd(i+224|0,g+800|0);vb(i+224|0,35286);Kd(i+208|0,g+816|0);vb(i+208|0,35286);Kd(i+192|0,g+832|0);vb(i+192|0,35286);Kd(i+176|0,g+848|0);vb(i+176|0,35286);Kd(i+160|0,g+864|0);vb(i+160|0,35286);Kd(i+144|0,g+880|0);vb(i+144|0,35286);Kd(i+176|0,i+160|0);Kd(i+224|0,i+240|0);Kd(i+176|0,i+256|0);Kd(i+160|0,i+224|0);Kd(i+208|0,i+256|0);Kd(i+160|0,i+208|0);Kd(i+208|0,i+144|0);Kd(i+208|0,i+192|0);Kd(i+144|0,i+176|0);Kd(i+208|0,i+240|0);Kd(i+192|0,i+176|0);Kd(i+224|0,i+144|0);Kd(i+240|0,i+176|0);Ge(i+80|0,i+144|0);Ge(i+96|0,i+240|0);Ge(i+112|0,i+176|0);Ge(i+48|0,i+224|0);Ge(i+64|0,i+160|0);Kd(i+80|0,i+192|0);Kd(i+96|0,i+224|0);Kd(i+112|0,i+208|0);Kd(i+48|0,i+192|0);Kd(i+64|0,i+256|0);Ge(i+32|0,i+80|0);Ge(i+128|0,i+96|0);Ge(i+16|0,i+80|0);Nd(i+96|0,i+112|0);Nd(i+80|0,i+64|0);Kd(i+16|0,i+128|0);Ld(i+32|0,i+64|0);Ld(i+128|0,i+112|0);Kd(i+64|0,i+112|0);Ld(i+16|0,i+64|0);Ge(i+64|0,i+208|0);Kd(i+64|0,i+256|0);Ld(i+48|0,i+64|0);Kd(i+80|0,i+48|0);Kd(i+96|0,i+48|0);Ge(i+48|0,i+144|0);Kd(i+48|0,i+240|0);Ge(i+64|0,i+176|0);Ge(i+112|0,i+48|0);Kd(i+64|0,i+160|0);Nd(i+112|0,i+64|0);Ld(i+48|0,i+64|0);Kd(i+128|0,i+48|0);Kd(i+80|0,i+16|0);Kd(i+96|0,i+32|0);Kd(i+112|0,i+16|0);Kd(i+128|0,i+32|0);Kd(i+112|0,i+32|0);Ge(i+64|0,i+224|0);Ge(i+48|0,i+192|0);Ge(i+32|0,i+240|0);Ge(i+16|0,i+144|0);Ld(i+64|0,i+208|0);Ld(i+48|0,i+256|0);Ld(i+32|0,i+176|0);Nd(i+16|0,i+160|0);Kd(i+80|0,i+64|0);Kd(i+96|0,i+48|0);Kd(i+112|0,i+32|0);Kd(i+128|0,i+16|0);Ge(i+64|0,i+80|0);Kd(i+64|0,i+96|0);Ld(i+80|0,i+112|0);Ge(i+32|0,i+128|0);Kd(i+32|0,i+80|0);Ge(i+16|0,i+64|0);Ld(i+16|0,i+32|0);Kd(i+16|0,i+96|0);Ge(i+48|0,i+112|0);Kd(i+48|0,i+128|0);Kd(i+80|0,i+96|0);Ld(i+48|0,i+80|0);Kd(i+48|0,i+128|0);Kd(i+112|0,i+48|0);Ge(i+96|0,i+32|0);Kd(i+96|0,i+48|0);Ld(i+96|0,i+128|0);Kd(i+112|0,i+96|0);Kd(i+32|0,i+96|0);Ld(i+32|0,i+16|0);Kd(i+32|0,i+64|0);Ge(i+64|0,i+160|0);Ge(i+128|0,i+176|0);Ge(i+96|0,i+16|0);Kd(i+96|0,i+32|0);Ld(i+96|0,i+160|0);Kd(i+160|0,i+176|0);Ld(i+160|0,i+32|0);Ld(i+176|0,i+16|0);Kd(i+160|0,i+176|0);Kd(i+176|0,i+96|0);Kd(i+64|0,i+256|0);Kd(i+128|0,i+208|0);Kd(i+16|0,i+48|0);Kd(i+32|0,i+112|0);Ge(i+80|0,i+16|0);Kd(i+80|0,i+32|0);Ld(i+80|0,i+64|0);Kd(i+64|0,i+128|0);Ld(i+64|0,i+32|0);Ld(i+128|0,i+16|0);Kd(i+128|0,i+64|0);Kd(i+64|0,i+80|0);Ge(i+96|0,i+48|0);Kd(i+96|0,i+112|0);Ld(i+96|0,i+256|0);Kd(i+256|0,i+208|0);Ld(i+256|0,i+112|0);Ld(i+208|0,i+48|0);Kd(i+256|0,i+208|0);Kd(i+208|0,i+96|0);Kd(i+160|0,i+64|0);Kd(i+256|0,i+64|0);Kd(i+176|0,i+128|0);Kd(i+208|0,i+128|0);Ge(i+64|0,i+144|0);Ge(i+128|0,i+240|0);Kd(i+64|0,i+192|0);Kd(i+128|0,i+224|0);Ge(i+80|0,i+16|0);Kd(i+80|0,i+32|0);Ld(i+80|0,i+64|0);Kd(i+64|0,i+128|0);Ld(i+64|0,i+32|0);Ld(i+128|0,i+16|0);Kd(i+128|0,i+64|0);Kd(i+64|0,i+80|0);Ge(i+96|0,i+48|0);Kd(i+96|0,i+112|0);Ld(i+96|0,i+192|0);Kd(i+192|0,i+224|0);Ld(i+192|0,i+112|0);Ld(i+224|0,i+48|0);Kd(i+192|0,i+224|0);Kd(i+224|0,i+96|0);Kd(i+16|0,i+48|0);Kd(i+32|0,i+112|0);Ge(i+80|0,i+16|0);Kd(i+80|0,i+32|0);Ld(i+80|0,i+144|0);Kd(i+144|0,i+240|0);Ld(i+144|0,i+32|0);Ld(i+240|0,i+16|0);Kd(i+144|0,i+240|0);Kd(i+240|0,i+80|0);Kd(i+144|0,i+64|0);Kd(i+192|0,i+64|0);Kd(i+240|0,i+128|0);Kd(i+224|0,i+128|0);Kd(i+144|0,i+256|0);Kd(i+240|0,i+160|0);Kd(i+192|0,i+144|0);Kd(i+160|0,i+256|0);Kd(i+256|0,i+240|0);Kd(i+240|0,i+176|0);Kd(i+176|0,i+224|0);Kd(i+192|0,i+176|0);Kd(i+224|0,i+208|0);Kd(i+208|0,i+176|0);Kd(i+160|0,i+208|0);cd(i+128|0,i+256|0,147);cd(i+112|0,i+240|0,147);cd(i+96|0,i+192|0,147);cd(i+80|0,i+160|0,147);cd(i+64|0,i+208|0,147);cd(i+48|0,i+144|0,147);cd(i+32|0,i+224|0,147);cd(i+16|0,i+176|0,147);Kd(i+256|0,i+128|0);Kd(i+240|0,i+112|0);Kd(i+192|0,i+96|0);Kd(i+160|0,i+80|0);Kd(i+208|0,i+64|0);Kd(i+144|0,i+48|0);Kd(i+224|0,i+32|0);Kd(i+176|0,i+16|0);Kd(i+128|0,i+176|0);Kd(i+112|0,i+256|0);Kd(i+96|0,i+240|0);Kd(i+112|0,i+176|0);Kd(i+80|0,i+192|0);Kd(i+64|0,i+160|0);Kd(i+48|0,i+208|0);Kd(i+80|0,i+176|0);Kd(i+32|0,i+144|0);Kd(i+16|0,i+224|0);Kd(i+64|0,i+176|0);cd(i+256|0,i+256|0,78);cd(i+240|0,i+240|0,78);cd(i+192|0,i+192|0,78);cd(i+160|0,i+160|0,78);cd(i+208|0,i+208|0,78);cd(i+144|0,i+144|0,78);cd(i+224|0,i+224|0,78);cd(i+176|0,i+176|0,78);Kd(i+128|0,i+256|0);Kd(i+112|0,i+240|0);Kd(i+96|0,i+192|0);Kd(i+80|0,i+160|0);Kd(i+64|0,i+208|0);Kd(i+48|0,i+144|0);Kd(i+32|0,i+224|0);Kd(i+16|0,i+176|0);Kd(i+128|0,g+896|0);vb(i+128|0,35286);Kd(i+112|0,g+912|0);vb(i+112|0,35286);Kd(i+96|0,g+928|0);vb(i+96|0,35286);Kd(i+80|0,g+944|0);vb(i+80|0,35286);Kd(i+64|0,g+960|0);vb(i+64|0,35286);Kd(i+48|0,g+976|0);vb(i+48|0,35286);Kd(i+32|0,g+992|0);vb(i+32|0,35286);Kd(i+16|0,g+1008|0);vb(i+16|0,35286);Kd(i+48|0,i+32|0);Kd(i+96|0,i+112|0);Kd(i+48|0,i+128|0);Kd(i+32|0,i+96|0);Kd(i+80|0,i+128|0);Kd(i+32|0,i+80|0);Kd(i+80|0,i+16|0);Kd(i+80|0,i+64|0);Kd(i+16|0,i+48|0);Kd(i+80|0,i+112|0);Kd(i+64|0,i+48|0);Kd(i+96|0,i+16|0);Kd(i+112|0,i+48|0);Ge(i+208|0,i+16|0);Ge(i+224|0,i+112|0);Ge(i+240|0,i+48|0);Ge(i+176|0,i+96|0);Ge(i+192|0,i+32|0);Kd(i+208|0,i+64|0);Kd(i+224|0,i+96|0);Kd(i+240|0,i+80|0);Kd(i+176|0,i+64|0);Kd(i+192|0,i+128|0);Ge(i+160|0,i+208|0);Ge(i+256|0,i+224|0);Ge(i+144|0,i+208|0);Nd(i+224|0,i+240|0);Nd(i+208|0,i+192|0);Kd(i+144|0,i+256|0);Ld(i+160|0,i+192|0);Ld(i+256|0,i+240|0);Kd(i+192|0,i+240|0);Ld(i+144|0,i+192|0);Ge(i+192|0,i+80|0);Kd(i+192|0,i+128|0);Ld(i+176|0,i+192|0);Kd(i+208|0,i+176|0);Kd(i+224|0,i+176|0);Ge(i+176|0,i+16|0);Kd(i+176|0,i+112|0);Ge(i+192|0,i+48|0);Ge(i+240|0,i+176|0);Kd(i+192|0,i+32|0);Nd(i+240|0,i+192|0);Ld(i+176|0,i+192|0);Kd(i+256|0,i+176|0);Kd(i+208|0,i+144|0);Kd(i+224|0,i+160|0);Kd(i+240|0,i+144|0);Kd(i+256|0,i+160|0);Kd(i+240|0,i+160|0);Ge(i+192|0,i+96|0);Ge(i+176|0,i+64|0);Ge(i+160|0,i+112|0);Ge(i+144|0,i+16|0);Ld(i+192|0,i+80|0);Ld(i+176|0,i+128|0);Ld(i+160|0,i+48|0);Nd(i+144|0,i+32|0);Kd(i+208|0,i+192|0);Kd(i+224|0,i+176|0);Kd(i+240|0,i+160|0);Kd(i+256|0,i+144|0);Ge(i+192|0,i+208|0);Kd(i+192|0,i+224|0);Ld(i+208|0,i+240|0);Ge(i+160|0,i+256|0);Kd(i+160|0,i+208|0);Ge(i+144|0,i+192|0);Ld(i+144|0,i+160|0);Kd(i+144|0,i+224|0);Ge(i+176|0,i+240|0);Kd(i+176|0,i+256|0);Kd(i+208|0,i+224|0);Ld(i+176|0,i+208|0);Kd(i+176|0,i+256|0);Kd(i+240|0,i+176|0);Ge(i+224|0,i+160|0);Kd(i+224|0,i+176|0);Ld(i+224|0,i+256|0);Kd(i+240|0,i+224|0);Kd(i+160|0,i+224|0);Ld(i+160|0,i+144|0);Kd(i+160|0,i+192|0);Ge(i+192|0,i+32|0);Ge(i+256|0,i+48|0);Ge(i+224|0,i+144|0);Kd(i+224|0,i+160|0);Ld(i+224|0,i+32|0);Kd(i+32|0,i+48|0);Ld(i+32|0,i+160|0);Ld(i+48|0,i+144|0);Kd(i+32|0,i+48|0);Kd(i+48|0,i+224|0);Kd(i+192|0,i+128|0);Kd(i+256|0,i+80|0);Kd(i+144|0,i+176|0);Kd(i+160|0,i+240|0);Ge(i+208|0,i+144|0);Kd(i+208|0,i+160|0);Ld(i+208|0,i+192|0);Kd(i+192|0,i+256|0);Ld(i+192|0,i+160|0);Ld(i+256|0,i+144|0);Kd(i+256|0,i+192|0);Kd(i+192|0,i+208|0);Ge(i+224|0,i+176|0);Kd(i+224|0,i+240|0);Ld(i+224|0,i+128|0);Kd(i+128|0,i+80|0);Ld(i+128|0,i+240|0);Ld(i+80|0,i+176|0);Kd(i+128|0,i+80|0);Kd(i+80|0,i+224|0);Kd(i+32|0,i+192|0);Kd(i+128|0,i+192|0);Kd(i+48|0,i+256|0);Kd(i+80|0,i+256|0);Ge(i+192|0,i+16|0);Ge(i+256|0,i+112|0);Kd(i+192|0,i+64|0);Kd(i+256|0,i+96|0);Ge(i+208|0,i+144|0);Kd(i+208|0,i+160|0);Ld(i+208|0,i+192|0);Kd(i+192|0,i+256|0);Ld(i+192|0,i+160|0);Ld(i+256|0,i+144|0);Kd(i+256|0,i+192|0);Kd(i+192|0,i+208|0);Ge(i+224|0,i+176|0);Kd(i+224|0,i+240|0);Ld(i+224|0,i+64|0);Kd(i+64|0,i+96|0);Ld(i+64|0,i+240|0);Ld(i+96|0,i+176|0);Kd(i+64|0,i+96|0);Kd(i+96|0,i+224|0);Kd(i+144|0,i+176|0);Kd(i+160|0,i+240|0);Ge(i+208|0,i+144|0);Kd(i+208|0,i+160|0);Ld(i+208|0,i+16|0);Kd(i+16|0,i+112|0);Ld(i+16|0,i+160|0);Ld(i+112|0,i+144|0);Kd(i+16|0,i+112|0);Kd(i+112|0,i+208|0);Kd(i+16|0,i+192|0);Kd(i+64|0,i+192|0);Kd(i+112|0,i+256|0);Kd(i+96|0,i+256|0);Kd(i+16|0,i+128|0);Kd(i+112|0,i+32|0);Kd(i+64|0,i+16|0);Kd(i+32|0,i+128|0);Kd(i+128|0,i+112|0);Kd(i+112|0,i+48|0);Kd(i+48|0,i+96|0);Kd(i+64|0,i+48|0);Kd(i+96|0,i+80|0);Kd(i+80|0,i+48|0);Kd(i+32|0,i+80|0);cd(i+256|0,i+128|0,147);cd(i+240|0,i+112|0,147);cd(i+224|0,i+64|0,147);cd(i+208|0,i+32|0,147);cd(i+192|0,i+80|0,147);cd(i+176|0,i+16|0,147);cd(i+160|0,i+96|0,147);cd(i+144|0,i+48|0,147);Kd(i+128|0,i+256|0);Kd(i+112|0,i+240|0);Kd(i+64|0,i+224|0);Kd(i+32|0,i+208|0);Kd(i+80|0,i+192|0);Kd(i+16|0,i+176|0);Kd(i+96|0,i+160|0);Kd(i+48|0,i+144|0);Kd(i+256|0,i+48|0);Kd(i+240|0,i+128|0);Kd(i+224|0,i+112|0);Kd(i+240|0,i+48|0);Kd(i+208|0,i+64|0);Kd(i+192|0,i+32|0);Kd(i+176|0,i+80|0);Kd(i+208|0,i+48|0);Kd(i+160|0,i+16|0);Kd(i+144|0,i+96|0);Kd(i+192|0,i+48|0);cd(i+128|0,i+128|0,78);cd(i+112|0,i+112|0,78);cd(i+64|0,i+64|0,78);cd(i+32|0,i+32|0,78);cd(i+80|0,i+80|0,78);cd(i+16|0,i+16|0,78);cd(i+96|0,i+96|0,78);cd(i+48|0,i+48|0,78);Kd(i+256|0,i+128|0);Kd(i+240|0,i+112|0);Kd(i+224|0,i+64|0);Kd(i+208|0,i+32|0);Kd(i+192|0,i+80|0);Kd(i+176|0,i+16|0);Kd(i+160|0,i+96|0);Kd(i+144|0,i+48|0);Kd(i+256|0,g+1024|0);vb(i+256|0,35286);Kd(i+240|0,g+1040|0);vb(i+240|0,35286);Kd(i+224|0,g+1056|0);vb(i+224|0,35286);Kd(i+208|0,g+1072|0);vb(i+208|0,35286);Kd(i+192|0,g+1088|0);vb(i+192|0,35286);Kd(i+176|0,g+1104|0);vb(i+176|0,35286);Kd(i+160|0,g+1120|0);vb(i+160|0,35286);Kd(i+144|0,g+1136|0);vb(i+144|0,35286);Kd(i+176|0,i+160|0);Kd(i+224|0,i+240|0);Kd(i+176|0,i+256|0);Kd(i+160|0,i+224|0);Kd(i+208|0,i+256|0);Kd(i+160|0,i+208|0);Kd(i+208|0,i+144|0);Kd(i+208|0,i+192|0);Kd(i+144|0,i+176|0);Kd(i+208|0,i+240|0);Kd(i+192|0,i+176|0);Kd(i+224|0,i+144|0);Kd(i+240|0,i+176|0);Ge(i+80|0,i+144|0);Ge(i+96|0,i+240|0);Ge(i+112|0,i+176|0);Ge(i+48|0,i+224|0);Ge(i+64|0,i+160|0);Kd(i+80|0,i+192|0);Kd(i+96|0,i+224|0);Kd(i+112|0,i+208|0);Kd(i+48|0,i+192|0);Kd(i+64|0,i+256|0);Ge(i+32|0,i+80|0);Ge(i+128|0,i+96|0);Ge(i+16|0,i+80|0);Nd(i+96|0,i+112|0);Nd(i+80|0,i+64|0);Kd(i+16|0,i+128|0);Ld(i+32|0,i+64|0);Ld(i+128|0,i+112|0);Kd(i+64|0,i+112|0);Ld(i+16|0,i+64|0);Ge(i+64|0,i+208|0);Kd(i+64|0,i+256|0);Ld(i+48|0,i+64|0);Kd(i+80|0,i+48|0);Kd(i+96|0,i+48|0);Ge(i+48|0,i+144|0);Kd(i+48|0,i+240|0);Ge(i+64|0,i+176|0);Ge(i+112|0,i+48|0);Kd(i+64|0,i+160|0);Nd(i+112|0,i+64|0);Ld(i+48|0,i+64|0);Kd(i+128|0,i+48|0);Kd(i+80|0,i+16|0);Kd(i+96|0,i+32|0);Kd(i+112|0,i+16|0);Kd(i+128|0,i+32|0);Kd(i+112|0,i+32|0);Ge(i+64|0,i+224|0);Ge(i+48|0,i+192|0);Ge(i+32|0,i+240|0);Ge(i+16|0,i+144|0);Ld(i+64|0,i+208|0);Ld(i+48|0,i+256|0);Ld(i+32|0,i+176|0);Nd(i+16|0,i+160|0);Kd(i+80|0,i+64|0);Kd(i+96|0,i+48|0);Kd(i+112|0,i+32|0);Kd(i+128|0,i+16|0);Ge(i+64|0,i+80|0);Kd(i+64|0,i+96|0);Ld(i+80|0,i+112|0);Ge(i+32|0,i+128|0);Kd(i+32|0,i+80|0);Ge(i+16|0,i+64|0);Ld(i+16|0,i+32|0);Kd(i+16|0,i+96|0);Ge(i+48|0,i+112|0);Kd(i+48|0,i+128|0);Kd(i+80|0,i+96|0);Ld(i+48|0,i+80|0);Kd(i+48|0,i+128|0);Kd(i+112|0,i+48|0);Ge(i+96|0,i+32|0);Kd(i+96|0,i+48|0);Ld(i+96|0,i+128|0);Kd(i+112|0,i+96|0);Kd(i+32|0,i+96|0);Ld(i+32|0,i+16|0);Kd(i+32|0,i+64|0);Ge(i+64|0,i+160|0);Ge(i+128|0,i+176|0);Ge(i+96|0,i+16|0);Kd(i+96|0,i+32|0);Ld(i+96|0,i+160|0);Kd(i+160|0,i+176|0);Ld(i+160|0,i+32|0);Ld(i+176|0,i+16|0);Kd(i+160|0,i+176|0);Kd(i+176|0,i+96|0);Kd(i+64|0,i+256|0);Kd(i+128|0,i+208|0);Kd(i+16|0,i+48|0);Kd(i+32|0,i+112|0);Ge(i+80|0,i+16|0);Kd(i+80|0,i+32|0);Ld(i+80|0,i+64|0);Kd(i+64|0,i+128|0);Ld(i+64|0,i+32|0);Ld(i+128|0,i+16|0);Kd(i+128|0,i+64|0);Kd(i+64|0,i+80|0);Ge(i+96|0,i+48|0);Kd(i+96|0,i+112|0);Ld(i+96|0,i+256|0);Kd(i+256|0,i+208|0);Ld(i+256|0,i+112|0);Ld(i+208|0,i+48|0);Kd(i+256|0,i+208|0);Kd(i+208|0,i+96|0);Kd(i+160|0,i+64|0);Kd(i+256|0,i+64|0);Kd(i+176|0,i+128|0);Kd(i+208|0,i+128|0);Ge(i+64|0,i+144|0);Ge(i+128|0,i+240|0);Kd(i+64|0,i+192|0);Kd(i+128|0,i+224|0);Ge(i+80|0,i+16|0);Kd(i+80|0,i+32|0);Ld(i+80|0,i+64|0);Kd(i+64|0,i+128|0);Ld(i+64|0,i+32|0);Ld(i+128|0,i+16|0);Kd(i+128|0,i+64|0);Kd(i+64|0,i+80|0);Ge(i+96|0,i+48|0);Kd(i+96|0,i+112|0);Ld(i+96|0,i+192|0);Kd(i+192|0,i+224|0);Ld(i+192|0,i+112|0);Ld(i+224|0,i+48|0);Kd(i+192|0,i+224|0);Kd(i+224|0,i+96|0);Kd(i+16|0,i+48|0);Kd(i+32|0,i+112|0);Ge(i+80|0,i+16|0);Kd(i+80|0,i+32|0);Ld(i+80|0,i+144|0);Kd(i+144|0,i+240|0);Ld(i+144|0,i+32|0);Ld(i+240|0,i+16|0);Kd(i+144|0,i+240|0);Kd(i+240|0,i+80|0);Kd(i+144|0,i+64|0);Kd(i+192|0,i+64|0);Kd(i+240|0,i+128|0);Kd(i+224|0,i+128|0);Kd(i+144|0,i+256|0);Kd(i+240|0,i+160|0);Kd(i+192|0,i+144|0);Kd(i+160|0,i+256|0);Kd(i+256|0,i+240|0);Kd(i+240|0,i+176|0);Kd(i+176|0,i+224|0);Kd(i+192|0,i+176|0);Kd(i+224|0,i+208|0);Kd(i+208|0,i+176|0);Kd(i+160|0,i+208|0);cd(i+128|0,i+256|0,147);cd(i+112|0,i+240|0,147);cd(i+96|0,i+192|0,147);cd(i+80|0,i+160|0,147);cd(i+64|0,i+208|0,147);cd(i+48|0,i+144|0,147);cd(i+32|0,i+224|0,147);cd(i+16|0,i+176|0,147);Kd(i+256|0,i+128|0);Kd(i+240|0,i+112|0);Kd(i+192|0,i+96|0);Kd(i+160|0,i+80|0);Kd(i+208|0,i+64|0);Kd(i+144|0,i+48|0);Kd(i+224|0,i+32|0);Kd(i+176|0,i+16|0);Kd(i+128|0,i+176|0);Kd(i+112|0,i+256|0);Kd(i+96|0,i+240|0);Kd(i+112|0,i+176|0);Kd(i+80|0,i+192|0);Kd(i+64|0,i+160|0);Kd(i+48|0,i+208|0);Kd(i+80|0,i+176|0);Kd(i+32|0,i+144|0);Kd(i+16|0,i+224|0);Kd(i+64|0,i+176|0);cd(i+256|0,i+256|0,78);cd(i+240|0,i+240|0,78);cd(i+192|0,i+192|0,78);cd(i+160|0,i+160|0,78);cd(i+208|0,i+208|0,78);cd(i+144|0,i+144|0,78);cd(i+224|0,i+224|0,78);cd(i+176|0,i+176|0,78);Kd(i+128|0,i+256|0);Kd(i+112|0,i+240|0);Kd(i+96|0,i+192|0);Kd(i+80|0,i+160|0);Kd(i+64|0,i+208|0);Kd(i+48|0,i+144|0);Kd(i+32|0,i+224|0);Kd(i+16|0,i+176|0);Kd(i+128|0,g+1152|0);vb(i+128|0,35302);Kd(i+112|0,g+1168|0);vb(i+112|0,35302);Kd(i+96|0,g+1184|0);vb(i+96|0,35302);Kd(i+80|0,g+1200|0);vb(i+80|0,35302);Kd(i+64|0,g+1216|0);vb(i+64|0,35302);Kd(i+48|0,g+1232|0);vb(i+48|0,35302);Kd(i+32|0,g+1248|0);vb(i+32|0,35302);Kd(i+16|0,g+1264|0);vb(i+16|0,35302);Kd(i+48|0,i+32|0);Kd(i+96|0,i+112|0);Kd(i+48|0,i+128|0);Kd(i+32|0,i+96|0);Kd(i+80|0,i+128|0);Kd(i+32|0,i+80|0);Kd(i+80|0,i+16|0);Kd(i+80|0,i+64|0);Kd(i+16|0,i+48|0);Kd(i+80|0,i+112|0);Kd(i+64|0,i+48|0);Kd(i+96|0,i+16|0);Kd(i+112|0,i+48|0);Ge(i+208|0,i+16|0);Ge(i+224|0,i+112|0);Ge(i+240|0,i+48|0);Ge(i+176|0,i+96|0);Ge(i+192|0,i+32|0);Kd(i+208|0,i+64|0);Kd(i+224|0,i+96|0);Kd(i+240|0,i+80|0);Kd(i+176|0,i+64|0);Kd(i+192|0,i+128|0);Ge(i+160|0,i+208|0);Ge(i+256|0,i+224|0);Ge(i+144|0,i+208|0);Nd(i+224|0,i+240|0);Nd(i+208|0,i+192|0);Kd(i+144|0,i+256|0);Ld(i+160|0,i+192|0);Ld(i+256|0,i+240|0);Kd(i+192|0,i+240|0);Ld(i+144|0,i+192|0);Ge(i+192|0,i+80|0);Kd(i+192|0,i+128|0);Ld(i+176|0,i+192|0);Kd(i+208|0,i+176|0);Kd(i+224|0,i+176|0);Ge(i+176|0,i+16|0);Kd(i+176|0,i+112|0);Ge(i+192|0,i+48|0);Ge(i+240|0,i+176|0);Kd(i+192|0,i+32|0);Nd(i+240|0,i+192|0);Ld(i+176|0,i+192|0);Kd(i+256|0,i+176|0);Kd(i+208|0,i+144|0);Kd(i+224|0,i+160|0);Kd(i+240|0,i+144|0);Kd(i+256|0,i+160|0);Kd(i+240|0,i+160|0);Ge(i+192|0,i+96|0);Ge(i+176|0,i+64|0);Ge(i+160|0,i+112|0);Ge(i+144|0,i+16|0);Ld(i+192|0,i+80|0);Ld(i+176|0,i+128|0);Ld(i+160|0,i+48|0);Nd(i+144|0,i+32|0);Kd(i+208|0,i+192|0);Kd(i+224|0,i+176|0);Kd(i+240|0,i+160|0);Kd(i+256|0,i+144|0);Ge(i+192|0,i+208|0);Kd(i+192|0,i+224|0);Ld(i+208|0,i+240|0);Ge(i+160|0,i+256|0);Kd(i+160|0,i+208|0);Ge(i+144|0,i+192|0);Ld(i+144|0,i+160|0);Kd(i+144|0,i+224|0);Ge(i+176|0,i+240|0);Kd(i+176|0,i+256|0);Kd(i+208|0,i+224|0);Ld(i+176|0,i+208|0);Kd(i+176|0,i+256|0);Kd(i+240|0,i+176|0);Ge(i+224|0,i+160|0);Kd(i+224|0,i+176|0);Ld(i+224|0,i+256|0);Kd(i+240|0,i+224|0);Kd(i+160|0,i+224|0);Ld(i+160|0,i+144|0);Kd(i+160|0,i+192|0);Ge(i+192|0,i+32|0);Ge(i+256|0,i+48|0);Ge(i+224|0,i+144|0);Kd(i+224|0,i+160|0);Ld(i+224|0,i+32|0);Kd(i+32|0,i+48|0);Ld(i+32|0,i+160|0);Ld(i+48|0,i+144|0);Kd(i+32|0,i+48|0);Kd(i+48|0,i+224|0);Kd(i+192|0,i+128|0);Kd(i+256|0,i+80|0);Kd(i+144|0,i+176|0);Kd(i+160|0,i+240|0);Ge(i+208|0,i+144|0);Kd(i+208|0,i+160|0);Ld(i+208|0,i+192|0);Kd(i+192|0,i+256|0);Ld(i+192|0,i+160|0);Ld(i+256|0,i+144|0);Kd(i+256|0,i+192|0);Kd(i+192|0,i+208|0);Ge(i+224|0,i+176|0);Kd(i+224|0,i+240|0);Ld(i+224|0,i+128|0);Kd(i+128|0,i+80|0);Ld(i+128|0,i+240|0);Ld(i+80|0,i+176|0);Kd(i+128|0,i+80|0);Kd(i+80|0,i+224|0);Kd(i+32|0,i+192|0);Kd(i+128|0,i+192|0);Kd(i+48|0,i+256|0);Kd(i+80|0,i+256|0);Ge(i+192|0,i+16|0);Ge(i+256|0,i+112|0);Kd(i+192|0,i+64|0);Kd(i+256|0,i+96|0);Ge(i+208|0,i+144|0);Kd(i+208|0,i+160|0);Ld(i+208|0,i+192|0);Kd(i+192|0,i+256|0);Ld(i+192|0,i+160|0);Ld(i+256|0,i+144|0);Kd(i+256|0,i+192|0);Kd(i+192|0,i+208|0);Ge(i+224|0,i+176|0);Kd(i+224|0,i+240|0);Ld(i+224|0,i+64|0);Kd(i+64|0,i+96|0);Ld(i+64|0,i+240|0);Ld(i+96|0,i+176|0);Kd(i+64|0,i+96|0);Kd(i+96|0,i+224|0);Kd(i+144|0,i+176|0);Kd(i+160|0,i+240|0);Ge(i+208|0,i+144|0);Kd(i+208|0,i+160|0);Ld(i+208|0,i+16|0);Kd(i+16|0,i+112|0);Ld(i+16|0,i+160|0);Ld(i+112|0,i+144|0);Kd(i+16|0,i+112|0);Kd(i+112|0,i+208|0);Kd(i+16|0,i+192|0);Kd(i+64|0,i+192|0);Kd(i+112|0,i+256|0);Kd(i+96|0,i+256|0);Kd(i+16|0,i+128|0);Kd(i+112|0,i+32|0);Kd(i+64|0,i+16|0);Kd(i+32|0,i+128|0);Kd(i+128|0,i+112|0);Kd(i+112|0,i+48|0);Kd(i+48|0,i+96|0);Kd(i+64|0,i+48|0);Kd(i+96|0,i+80|0);Kd(i+80|0,i+48|0);Kd(i+32|0,i+80|0);Kd(i+128|0,g+1280|0);Kd(i+112|0,g+1296|0);Kd(i+64|0,g+1312|0);Kd(i+32|0,g+1328|0);Kd(i+80|0,g+1344|0);Kd(i+16|0,g+1360|0);Kd(i+96|0,g+1376|0);Kd(i+48|0,g+1392|0);Ge(i+256|0,i+96|0);ce(i+256|0,1);Kd(i+256|0,i+48|0);Ld(i+256|0,1104);Kd(i+48|0,i+256|0);ee(i+256|0,1);Kd(i+96|0,i+256|0);Ge(i+256|0,i+80|0);ce(i+256|0,1);Kd(i+256|0,i+16|0);Ld(i+256|0,1104);Kd(i+16|0,i+256|0);ee(i+256|0,1);Kd(i+80|0,i+256|0);Ge(i+256|0,i+64|0);ce(i+256|0,1);Kd(i+256|0,i+32|0);Ld(i+256|0,1104);Kd(i+32|0,i+256|0);ee(i+256|0,1);Kd(i+64|0,i+256|0);Ge(i+256|0,i+128|0);ce(i+256|0,1);Kd(i+256|0,i+112|0);Ld(i+256|0,1104);Kd(i+112|0,i+256|0);ee(i+256|0,1);Kd(i+128|0,i+256|0);Ge(i+256|0,i+16|0);ce(i+256|0,2);Kd(i+256|0,i+48|0);Ld(i+256|0,1120);Kd(i+48|0,i+256|0);ee(i+256|0,2);Kd(i+16|0,i+256|0);Ge(i+256|0,i+80|0);ce(i+256|0,2);Kd(i+256|0,i+96|0);Ld(i+256|0,1120);Kd(i+96|0,i+256|0);ee(i+256|0,2);Kd(i+80|0,i+256|0);Ge(i+256|0,i+112|0);ce(i+256|0,2);Kd(i+256|0,i+32|0);Ld(i+256|0,1120);Kd(i+32|0,i+256|0);ee(i+256|0,2);Kd(i+112|0,i+256|0);Ge(i+256|0,i+128|0);ce(i+256|0,2);Kd(i+256|0,i+64|0);Ld(i+256|0,1120);Kd(i+64|0,i+256|0);ee(i+256|0,2);Kd(i+128|0,i+256|0);Ge(i+256|0,i+32|0);ce(i+256|0,4);Kd(i+256|0,i+48|0);Ld(i+256|0,1136);Kd(i+48|0,i+256|0);ee(i+256|0,4);Kd(i+32|0,i+256|0);Ge(i+256|0,i+64|0);ce(i+256|0,4);Kd(i+256|0,i+96|0);Ld(i+256|0,1136);Kd(i+96|0,i+256|0);ee(i+256|0,4);Kd(i+64|0,i+256|0);Ge(i+256|0,i+112|0);ce(i+256|0,4);Kd(i+256|0,i+16|0);Ld(i+256|0,1136);Kd(i+16|0,i+256|0);ee(i+256|0,4);Kd(i+112|0,i+256|0);Ge(i+256|0,i+128|0);ce(i+256|0,4);Kd(i+256|0,i+80|0);Ld(i+256|0,1136);Kd(i+80|0,i+256|0);ee(i+256|0,4);Kd(i+128|0,i+256|0);if(e>>>0<0|(e|0)==0&d>>>0<128){h=5;break}kg(i+12|0,(yg(i+12|0)|0)+8|0);c[b>>2]=c[i+128>>2];c[b+4>>2]=c[i+128+4>>2];c[b+8>>2]=c[i+128+8>>2];c[b+12>>2]=c[i+128+12>>2];f=b+16|0;c[f>>2]=c[i+112>>2];c[f+4>>2]=c[i+112+4>>2];c[f+8>>2]=c[i+112+8>>2];c[f+12>>2]=c[i+112+12>>2];f=b+32|0;c[f>>2]=c[i+64>>2];c[f+4>>2]=c[i+64+4>>2];c[f+8>>2]=c[i+64+8>>2];c[f+12>>2]=c[i+64+12>>2];f=b+48|0;c[f>>2]=c[i+32>>2];c[f+4>>2]=c[i+32+4>>2];c[f+8>>2]=c[i+32+8>>2];c[f+12>>2]=c[i+32+12>>2];f=b+64|0;c[f>>2]=c[i+80>>2];c[f+4>>2]=c[i+80+4>>2];c[f+8>>2]=c[i+80+8>>2];c[f+12>>2]=c[i+80+12>>2];f=b+80|0;c[f>>2]=c[i+16>>2];c[f+4>>2]=c[i+16+4>>2];c[f+8>>2]=c[i+16+8>>2];c[f+12>>2]=c[i+16+12>>2];f=b+96|0;c[f>>2]=c[i+96>>2];c[f+4>>2]=c[i+96+4>>2];c[f+8>>2]=c[i+96+8>>2];c[f+12>>2]=c[i+96+12>>2];f=b+112|0;c[f>>2]=c[i+48>>2];c[f+4>>2]=c[i+48+4>>2];c[f+8>>2]=c[i+48+8>>2];c[f+12>>2]=c[i+48+12>>2];if((d|0)==128&(e|0)==0)break;f=jg(d|0,e|0,-128,-1)|0;b=b+128|0;e=D;d=f}if((h|0)==5?(g=Cf(d|0,e|0,4)|0,h=D,h=jg(yg(i+12|0)|0,0,g|0,h|0)|0,kg(i+12|0,h),c[i+272>>2]=c[i+128>>2],c[i+272+4>>2]=c[i+128+4>>2],c[i+272+8>>2]=c[i+128+8>>2],c[i+272+12>>2]=c[i+128+12>>2],c[i+272+16>>2]=c[i+112>>2],c[i+272+16+4>>2]=c[i+112+4>>2],c[i+272+16+8>>2]=c[i+112+8>>2],c[i+272+16+12>>2]=c[i+112+12>>2],c[i+272+32>>2]=c[i+64>>2],c[i+272+32+4>>2]=c[i+64+4>>2],c[i+272+32+8>>2]=c[i+64+8>>2],c[i+272+32+12>>2]=c[i+64+12>>2],c[i+272+48>>2]=c[i+32>>2],c[i+272+48+4>>2]=c[i+32+4>>2],c[i+272+48+8>>2]=c[i+32+8>>2],c[i+272+48+12>>2]=c[i+32+12>>2],c[i+272+64>>2]=c[i+80>>2],c[i+272+64+4>>2]=c[i+80+4>>2],c[i+272+64+8>>2]=c[i+80+8>>2],c[i+272+64+12>>2]=c[i+80+12>>2],c[i+272+80>>2]=c[i+16>>2],c[i+272+80+4>>2]=c[i+16+4>>2],c[i+272+80+8>>2]=c[i+16+8>>2],c[i+272+80+12>>2]=c[i+16+12>>2],c[i+272+96>>2]=c[i+96>>2],c[i+272+96+4>>2]=c[i+96+4>>2],c[i+272+96+8>>2]=c[i+96+8>>2],c[i+272+96+12>>2]=c[i+96+12>>2],c[i+272+112>>2]=c[i+48>>2],c[i+272+112+4>>2]=c[i+48+4>>2],c[i+272+112+8>>2]=c[i+48+8>>2],c[i+272+112+12>>2]=c[i+48+12>>2],!((d|0)==0&(e|0)==0)):0){f=i+272|0;while(1){a[b>>0]=a[f>>0]|0;d=jg(d|0,e|0,-1,-1)|0;e=D;if((d|0)==0&(e|0)==0)break;else{f=f+1|0;b=b+1|0}}}l=j;return 0}
function Db(a,b,c,d,e,f,g,h,i,j,k){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;var m=0;m=l;l=l+352|0;Gg(m+280|0,64,0,j,k)|0;ch(m,m+280|0)|0;Wd(m+280|0,64);ig(m,g,h,i)|0;ve(m+272|0,h,i);ig(m,m+272|0,8,0)|0;ig(m,c,d,e)|0;ve(m+272|0,d,e);ig(m,m+272|0,8,0)|0;bh(m,m+256|0)|0;Wd(m,256);b=Se(m+256|0,f)|0;Wd(m+256|0,16);do if(a)if(!b){nf(a,c,d,e,j,1,0,k)|0;b=0;break}else{Tb(a|0,0,d|0)|0;b=-1;break}while(0);l=m;return b|0}function Eb(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,i=0;e=0;do{a[b+e>>0]=(d[c+(e>>3)>>0]|0)>>>(e&7)&1;e=e+1|0}while((e|0)!=256);h=0;do{i=b+h|0;a:do if(a[i>>0]|0){g=1;do{e=g+h|0;if((e|0)>=256)break a;c=a[b+e>>0]|0;b:do if(c<<24>>24){c=c<<24>>24<<g;f=a[i>>0]|0;if((f+c|0)<16){a[i>>0]=f+c;a[b+e>>0]=0;break}if((f-c|0)<=-16)break a;a[i>>0]=f-c;while(1){c=b+e|0;if(!(a[c>>0]|0))break;a[c>>0]=0;e=e+1|0;if((e|0)>=256)break b}a[c>>0]=1}while(0);g=g+1|0}while((g|0)<7)}while(0);h=h+1|0}while((h|0)!=256);return}function Fb(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0;a:do if(!((e|0)==0&(f|0)==0)){g=c[b+352>>2]|0;j=f;while(1){i=256-g|0;f=b+96+g|0;if(!(j>>>0>0|(j|0)==0&e>>>0>i>>>0))break;jb(f|0,d|0,i|0)|0;c[b+352>>2]=(c[b+352>>2]|0)+i;gd(b,128,0);ka(b,b+96|0);f=b+96|0;g=b+224|0;h=f+128|0;do{a[f>>0]=a[g>>0]|0;f=f+1|0;g=g+1|0}while((f|0)<(h|0));g=(c[b+352>>2]|0)+-128|0;c[b+352>>2]=g;e=gg(e|0,j|0,i|0,0)|0;f=D;if((e|0)==0&(f|0)==0)break a;else{d=d+i|0;j=f}}jb(f|0,d|0,e|0)|0;j=jg(c[b+352>>2]|0,0,e|0,j|0)|0;c[b+352>>2]=j}while(0);return}function Gb(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0;j=(c[d>>2]|0)==0;h=c[d+12>>2]|0;do if(j){g=a[d+8>>0]|0;if(!(g<<24>>24)){g=h+-1|0;break}g=S(c[b+12>>2]|0,g&255)|0;if(!f){g=g+(((h|0)==0)<<31>>31)|0;break}else{g=h+-1+g|0;break}}else{g=(c[b+16>>2]|0)-(c[b+12>>2]|0)|0;if(!f){g=g+(((h|0)==0)<<31>>31)|0;break}else{g=h+-1+g|0;break}}while(0);ef(e|0,0,e|0,0)|0;ef(g|0,0,D|0,0)|0;h=gg(g+-1|0,0,D|0,0)|0;e=D;if(!j?(i=a[d+8>>0]|0,i<<24>>24!=3):0){g=S(c[b+12>>2]|0,(i&255)+1|0)|0;f=0}else{g=0;f=0}j=jg(h|0,e|0,g|0,f|0)|0;b=Te(j|0,D|0,c[b+16>>2]|0,0)|0;return b|0}function Hb(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;if(d<<24>>24?(d&255)<=64:0){if(!(wh(c[a+80>>2]|0,c[a+80+4>>2]|0)|0)){e=c[a+352>>2]|0;do if(e>>>0>128){gd(a,128,0);ka(a,a+96|0);e=(c[a+352>>2]|0)+-128|0;c[a+352>>2]=e;if(e>>>0<129){jb(a+96|0,a+224|0,e|0)|0;f=a+96|0;g=c[a+352>>2]|0;break}else fa(33525,33557,367,33602)}else{f=a+96|0;g=e}while(0);gd(a,g,0);mg(a);e=c[a+352>>2]|0;Tb(a+96+e|0,0,256-e|0)|0;ka(a,f);jb(b|0,a|0,d&255|0)|0;e=0}else e=-1;return e|0}ba();return 0}function Ib(b,c,e,f){b=b|0;c=c|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0;switch(((f>>>0)%3|0)&3){case 2:{g=((f>>>0)/3|0)<<2|1;h=3;break}case 1:{g=((f>>>0)/3|0)<<2;h=3;break}default:g=((f>>>0)/3|0)<<2}if((h|0)==3)g=g+2|0;if(g>>>0<c>>>0){if(f){i=0;c=0;while(1){i=d[e>>0]|0|i<<8;c=c+8|0;while(1){j=c+-6|0;h=b+1|0;a[b>>0]=Be(i>>>j&63)|0;if(j>>>0>5){b=h;c=j}else break}f=f+-1|0;if(!f)break;else{e=e+1|0;b=h;c=j}}if(!j)b=h;else{a[h>>0]=Be(i<<12-c&63)|0;b=b+2|0}}a[b>>0]=0}else g=-1;return g|0}function Jb(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;m=(c[b+4>>2]|0)-(c[d+4>>2]|0)|0;l=(c[b+8>>2]|0)-(c[d+8>>2]|0)|0;k=(c[b+12>>2]|0)-(c[d+12>>2]|0)|0;j=(c[b+16>>2]|0)-(c[d+16>>2]|0)|0;i=(c[b+20>>2]|0)-(c[d+20>>2]|0)|0;h=(c[b+24>>2]|0)-(c[d+24>>2]|0)|0;g=(c[b+28>>2]|0)-(c[d+28>>2]|0)|0;f=(c[b+32>>2]|0)-(c[d+32>>2]|0)|0;e=(c[b+36>>2]|0)-(c[d+36>>2]|0)|0;c[a>>2]=(c[b>>2]|0)-(c[d>>2]|0);c[a+4>>2]=m;c[a+8>>2]=l;c[a+12>>2]=k;c[a+16>>2]=j;c[a+20>>2]=i;c[a+24>>2]=h;c[a+28>>2]=g;c[a+32>>2]=f;c[a+36>>2]=e;return}function Kb(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;m=(c[d+4>>2]|0)+(c[b+4>>2]|0)|0;l=(c[d+8>>2]|0)+(c[b+8>>2]|0)|0;k=(c[d+12>>2]|0)+(c[b+12>>2]|0)|0;j=(c[d+16>>2]|0)+(c[b+16>>2]|0)|0;i=(c[d+20>>2]|0)+(c[b+20>>2]|0)|0;h=(c[d+24>>2]|0)+(c[b+24>>2]|0)|0;g=(c[d+28>>2]|0)+(c[b+28>>2]|0)|0;f=(c[d+32>>2]|0)+(c[b+32>>2]|0)|0;e=(c[d+36>>2]|0)+(c[b+36>>2]|0)|0;c[a>>2]=(c[d>>2]|0)+(c[b>>2]|0);c[a+4>>2]=m;c[a+8>>2]=l;c[a+12>>2]=k;c[a+16>>2]=j;c[a+20>>2]=i;c[a+24>>2]=h;c[a+28>>2]=g;c[a+32>>2]=f;c[a+36>>2]=e;return}function Lb(b,d){b=b|0;d=d|0;var e=0,f=0;a:do if(!(d&255))b=b+(yc(b)|0)|0;else{if(b&3)do{f=a[b>>0]|0;if(f<<24>>24==0?1:f<<24>>24==(d&255)<<24>>24)break a;b=b+1|0}while((b&3|0)!=0);f=S(d&255,16843009)|0;e=c[b>>2]|0;b:do if(!((e&-2139062144^-2139062144)&e+-16843009))do{e=e^f;if((e&-2139062144^-2139062144)&e+-16843009|0)break b;b=b+4|0;e=c[b>>2]|0}while(!((e&-2139062144^-2139062144)&e+-16843009|0));while(0);while(1){f=a[b>>0]|0;if(f<<24>>24==0?1:f<<24>>24==(d&255)<<24>>24)break;else b=b+1|0}}while(0);return b|0}function Mb(b,e,f,g,h,i){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;var j=0,k=0,m=0;k=l;j=l=l+63&-64;l=l+32|0;m=d[h+4>>0]|d[h+4+1>>0]<<8|d[h+4+2>>0]<<16|d[h+4+3>>0]<<24;c[j>>2]=d[h>>0]|d[h+1>>0]<<8|d[h+2>>0]<<16|d[h+3>>0]<<24;c[j+4>>2]=m;c[j+8>>2]=0;c[j+8+4>>2]=0;ve(j+16|0,f,g);h=j+16+8|0;a[h>>0]=0;a[h+1>>0]=0;a[h+2>>0]=0;a[h+3>>0]=0;h=j+16+8+4|0;a[h>>0]=0;a[h+1>>0]=0;a[h+2>>0]=0;a[h+3>>0]=0;if((e+-16|0)>>>0>48){c[8326]=22;b=-1}else b=Ic(b,e,0,0,0,i,32,j+16|0,j)|0;l=k;return b|0}function Nb(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0;d=l;f=l=l+63&-64;l=l+128|0;e=Qg(c)|0;c=(c<<24>>24)-((c<<24>>24&0-(e&255))<<1)&255;Jf(a);Oe(a,2232+(b*960|0)|0,xh(c,1)|0);Oe(a,2232+(b*960|0)+120|0,xh(c,2)|0);Oe(a,2232+(b*960|0)+240|0,xh(c,3)|0);Oe(a,2232+(b*960|0)+360|0,xh(c,4)|0);Oe(a,2232+(b*960|0)+480|0,xh(c,5)|0);Oe(a,2232+(b*960|0)+600|0,xh(c,6)|0);Oe(a,2232+(b*960|0)+720|0,xh(c,7)|0);Oe(a,2232+(b*960|0)+840|0,xh(c,8)|0);uc(f,a+40|0);uc(f+40|0,a);hc(f+80|0,a+80|0);Oe(a,f,e);l=d;return}function Ob(a,b,d,e,f,g,h,i,j,k,m,n){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;m=m|0;n=n|0;k=l;l=l+336|0;Gg(k+264|0,64,0,m,n)|0;ch(k,k+264|0)|0;Wd(k+264|0,64);ig(k,h,i,j)|0;ve(k+256|0,i,j);ig(k,k+256|0,8,0)|0;nf(a,e,f,g,m,1,0,n)|0;ig(k,a,f,g)|0;ve(k+256|0,f,g);ig(k,k+256|0,8,0)|0;bh(k,b)|0;Wd(k,256);if(d|0){c[d>>2]=16;c[d+4>>2]=0}l=k;return 0}function Pb(b,d,e,f,g,h,i){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;var j=0,k=0,m=0,n=0,o=0;o=l;k=l=l+63&-64;l=l+128|0;j=b;m=j+102|0;do{a[j>>0]=0;j=j+1|0}while((j|0)<(m|0));if(!(f>>>0>0|(f|0)==0&e>>>0>4294967295)){nb(g,h,i,k+8|0,k+4|0,k);lf(k+88|0,32);if((sc(c[k+8>>2]|0,c[k>>2]|0,c[k+4>>2]|0,k+88|0,k+24|0)|0)!=0?(Mh(k+12|0),m=(Ab(k+12|0,d,e,k+24|0,b)|0)==0,Nh(k+12|0),!m):0)b=0;else{b=22;n=4}}else{b=27;n=4}if((n|0)==4){c[8326]=b;b=-1}l=o;return b|0}function Qb(b,c,d,e){b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0;g=l;h=l=l+63&-64;l=l+64|0;if((c+-1&255)>63)ba();a[h>>0]=c;a[h+1>>0]=0;a[h+2>>0]=1;a[h+3>>0]=1;Zg(h+4|0);ff(h+8|0);c=h+16|0;f=c+16|0;do{a[c>>0]=0;c=c+1|0}while((c|0)<(f|0));if(!d){c=h+32|0;f=c+16|0;do{a[c>>0]=0;c=c+1|0}while((c|0)<(f|0))}else pf(h,d);if(!e){c=h+48|0;f=c+16|0;do{a[c>>0]=0;c=c+1|0}while((c|0)<(f|0))}else of(h,e);yd(b,h);l=g;return}function Rb(b,c,d,e,f){b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0;i=l;h=l=l+63&-64;l=l+464|0;g=(b|0)==0?c:b;c=(c|0)==0?g:c;if(!(fh(h+424|0,e,f)|0)){Hg(h,0,0,64)|0;vg(h,h+424|0,32,0)|0;Wd(h+424|0,32);vg(h,f,32,0)|0;vg(h,d,32,0)|0;Xg(h,h+360|0,64)|0;Wd(h,357);b=0;do{a[c+b>>0]=a[h+360+b>>0]|0;a[g+b>>0]=a[h+360+(b+32)>>0]|0;b=b+1|0}while((b|0)!=32);Wd(h+360|0,64);b=0}else b=-1;l=i;return b|0}function Sb(b,c,d,e,f){b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0;i=l;h=l=l+63&-64;l=l+464|0;g=(b|0)==0?c:b;c=(c|0)==0?g:c;if(!(fh(h+424|0,e,f)|0)){Hg(h,0,0,64)|0;vg(h,h+424|0,32,0)|0;Wd(h+424|0,32);vg(h,d,32,0)|0;vg(h,f,32,0)|0;Xg(h,h+360|0,64)|0;Wd(h,357);b=0;do{a[g+b>>0]=a[h+360+b>>0]|0;a[c+b>>0]=a[h+360+(b+32)>>0]|0;b=b+1|0}while((b|0)!=32);Wd(h+360|0,64);b=0}else b=-1;l=i;return b|0}function Tb(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0;f=b+e|0;d=d&255;if((e|0)>=67){while(b&3){a[b>>0]=d;b=b+1|0}g=d|d<<8|d<<16|d<<24;while((b|0)<=((f&-4)-64|0)){c[b>>2]=g;c[b+4>>2]=g;c[b+8>>2]=g;c[b+12>>2]=g;c[b+16>>2]=g;c[b+20>>2]=g;c[b+24>>2]=g;c[b+28>>2]=g;c[b+32>>2]=g;c[b+36>>2]=g;c[b+40>>2]=g;c[b+44>>2]=g;c[b+48>>2]=g;c[b+52>>2]=g;c[b+56>>2]=g;c[b+60>>2]=g;b=b+64|0}while((b|0)<(f&-4|0)){c[b>>2]=g;b=b+4|0}}while((b|0)<(f|0)){a[b>>0]=d;b=b+1|0}return f-e|0}function Ub(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=l;e=l=l+63&-64;l=l+48|0;Kb(a,b+40|0,b);Jb(a+40|0,b+40|0,b);pa(a+80|0,a,c+40|0);pa(a+40|0,a+40|0,c);pa(a+120|0,c+120|0,b+120|0);pa(a,b+80|0,c+80|0);Kb(e,a,a);Jb(a,a+80|0,a+40|0);Kb(a+40|0,a+80|0,a+40|0);Jb(a+80|0,e,a+120|0);Kb(a+120|0,e,a+120|0);l=d;return}function Vb(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=l;e=l=l+63&-64;l=l+48|0;Kb(a,b+40|0,b);Jb(a+40|0,b+40|0,b);pa(a+80|0,a,c);pa(a+40|0,a+40|0,c+40|0);pa(a+120|0,c+120|0,b+120|0);pa(a,b+80|0,c+80|0);Kb(e,a,a);Jb(a,a+80|0,a+40|0);Kb(a+40|0,a+80|0,a+40|0);Kb(a+80|0,e,a+120|0);Jb(a+120|0,e,a+120|0);l=d;return}function Wb(b,c,d,e){b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0;g=l;h=l=l+63&-64;l=l+192|0;if((c+-1&255)>63)ba();if((e+-1&255)>63|(d|0)==0)ba();else{a[h+128>>0]=c;a[h+128+1>>0]=e;a[h+128+2>>0]=1;a[h+128+3>>0]=1;Zg(h+128+4|0);ff(h+128+8|0);c=h+128+16|0;f=c+48|0;do{a[c>>0]=0;c=c+1|0}while((c|0)<(f|0));yd(b,h+128|0);Tb(h+(e&255)|0,0,(e<<24>>24<0?0:128-(e&255)|0)|0)|0;jb(h|0,d|0,e&255|0)|0;Fb(b,h,128,0);Wd(h,128);l=g;return}}function Xb(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;e=l;f=l=l+63&-64;l=l+2048|0;if((a|0)!=0&(b|0)!=0){yh(f,(c[(c[b>>2]|0)+4>>2]|0)+(c[b+16>>2]<<10)+-1024|0);if((c[b+20>>2]|0)>>>0>1){d=1;do{g=c[b+16>>2]|0;g=g+-1+(S(g,d)|0)|0;Yd(f,(c[(c[b>>2]|0)+4>>2]|0)+(g<<10)|0);d=d+1|0}while(d>>>0<(c[b+20>>2]|0)>>>0)}We(f+1024|0,f);Sa(c[a>>2]|0,c[a+4>>2]|0,f+1024|0,1024);Wd(f,1024);Wd(f+1024|0,1024);Kf(b,c[a+56>>2]&1);jh(c[b>>2]|0)}l=e;return}function Yb(a,b,d,e,f,g,h,i,j,k){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;var m=0,n=0;n=l;m=l=l+63&-64;l=l+16|0;Tb(a|0,0,b|0)|0;do if(!((g|d)>>>0>0|(g|d|0)==0&(f|b)>>>0>4294967295))if(d>>>0<0|(d|0)==0&b>>>0<16){c[8326]=22;a=-1;break}else{nb(i,j,k,m+8|0,m+4|0,m);k=zf(1,0,c[m+8>>2]|0)|0;a=hd(e,f,h,32,k,D,c[m>>2]|0,c[m+4>>2]|0,a,b)|0;break}else{c[8326]=27;a=-1}while(0);l=n;return a|0}function Zb(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=l;e=l=l+63&-64;l=l+48|0;Kb(a,b+40|0,b);Jb(a+40|0,b+40|0,b);pa(a+80|0,a,c+40|0);pa(a+40|0,a+40|0,c);pa(a+120|0,c+80|0,b+120|0);Kb(e,b+80|0,b+80|0);Jb(a,a+80|0,a+40|0);Kb(a+40|0,a+80|0,a+40|0);Jb(a+80|0,e,a+120|0);Kb(a+120|0,e,a+120|0);l=d;return}function _b(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=l;e=l=l+63&-64;l=l+48|0;Kb(a,b+40|0,b);Jb(a+40|0,b+40|0,b);pa(a+80|0,a,c);pa(a+40|0,a+40|0,c+40|0);pa(a+120|0,c+80|0,b+120|0);Kb(e,b+80|0,b+80|0);Jb(a,a+80|0,a+40|0);Kb(a+40|0,a+80|0,a+40|0);Kb(a+80|0,e,a+120|0);Jb(a+120|0,e,a+120|0);l=d;return}function $b(a,b,e,f,g,h,i,j,k,m,n,o){a=a|0;b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;m=m|0;n=n|0;o=o|0;m=l;l=l+48|0;c[m>>2]=0;Ha(m+16|0,n,o,0)|0;o=d[n+16+4>>0]|d[n+16+4+1>>0]<<8|d[n+16+4+2>>0]<<16|d[n+16+4+3>>0]<<24;c[m+4>>2]=d[n+16>>0]|d[n+16+1>>0]<<8|d[n+16+2>>0]<<16|d[n+16+3>>0]<<24;c[m+4+4>>2]=o;Cb(a,b,e,f,g,h,i,j,k,0,m,m+16|0)|0;Wd(m+16|0,32);l=m;return 0}function ac(a,b,c,d,e,f,g,h,i){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;var j=0,k=0;j=l;k=l=l+63&-64;l=l+368|0;if((b|0)==0&((e|0)!=0|(f|0)!=0))ba();if(!a)ba();if((d+-1&255)>63)ba();if(!((c|0)!=0|g<<24>>24!=0^1))ba();if((g&255)>64)ba();if(g<<24>>24)rb(k,d,c,g,h,i);else Qb(k,d,h,i);Fb(k,b,e,f);Hb(k,a,d)|0;l=j;return}function bc(a,b,e,f,g,h,i,j,k,m,n){a=a|0;b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;m=m|0;n=n|0;b=l;l=l+48|0;c[b>>2]=0;Ha(b+16|0,m,n,0)|0;n=d[m+16+4>>0]|d[m+16+4+1>>0]<<8|d[m+16+4+2>>0]<<16|d[m+16+4+3>>0]<<24;c[b+4>>2]=d[m+16>>0]|d[m+16+1>>0]<<8|d[m+16+2>>0]<<16|d[m+16+3>>0]<<24;c[b+4+4>>2]=n;m=pb(a,0,e,f,g,h,i,j,k,b,b+16|0)|0;Wd(b+16|0,32);l=b;return m|0}function cc(b,d,e,f,g,h,i){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;var j=0,k=0,m=0,n=0;n=l;k=l=l+63&-64;l=l+16|0;j=b;m=j+128|0;do{a[j>>0]=0;j=j+1|0}while((j|0)<(m|0));do if(!((h|f)>>>0>0|(h|f|0)==0&(g|e)>>>0>4294967295|i>>>0>2147484671))if(h>>>0<0|(h|0)==0&g>>>0<3|i>>>0<8192){c[8326]=22;b=-1;break}else{lf(k,16);b=((Wf(g,i>>>10,d,e,k,b)|0)!=0)<<31>>31;break}else{c[8326]=27;b=-1}while(0);l=n;return b|0}function dc(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;e=l;d=l=l+63&-64;l=l+48|0;b=lb(a)|0;if(!b){f=c[a+44>>2]|0;b=c[a+48>>2]|0;f=((f>>>0<b<<3>>>0?b<<3:f)>>>0)/(b<<2>>>0)|0;g=S(f,b<<2)|0;c[d>>2]=0;c[d+4>>2]=c[a+40>>2];c[d+8>>2]=g;c[d+12>>2]=f;c[d+16>>2]=f<<2;c[d+20>>2]=b;c[d+24>>2]=c[a+52>>2];c[d+28>>2]=1;b=ed(d,a)|0;if(!b){b=Bb(d)|0;if(!b){Xb(a,d);b=0}}}l=e;return b|0}function ec(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;e=c[a+32>>2]|0;i=c[a+32+4>>2]|0;d=Cf(e|0,i|0,3)|0;if(0<0|0==0&(d&56)>>>0<56){jb(a+40+(d&63)|0,33915,56-(d&63)|0)|0;f=a+40|0;g=b+256|0;h=a;d=i}else{jb(a+40+(d&63)|0,33915,64-(d&63)|0)|0;ta(a,a+40|0,b,b+256|0);d=a+40|0;e=d+56|0;do{c[d>>2]=0;d=d+4|0}while((d|0)<(e|0));f=a+40|0;g=b+256|0;h=a;e=c[a+32>>2]|0;d=c[a+32+4>>2]|0}Pc(a+96|0,e,d);ta(h,f,b,g);return}function fc(b,d){b=b|0;d=d|0;c[b>>2]=(Vg(d)|0)&67108863;c[b+4>>2]=(Vg(d+3|0)|0)>>>2&67108611;c[b+8>>2]=(Vg(d+6|0)|0)>>>4&67092735;c[b+12>>2]=(Vg(d+9|0)|0)>>>6&66076671;c[b+16>>2]=(Vg(d+12|0)|0)>>>8&1048575;c[b+20>>2]=0;c[b+20+4>>2]=0;c[b+20+8>>2]=0;c[b+20+12>>2]=0;c[b+20+16>>2]=0;c[b+40>>2]=Vg(d+16|0)|0;c[b+44>>2]=Vg(d+20|0)|0;c[b+48>>2]=Vg(d+24|0)|0;c[b+52>>2]=Vg(d+28|0)|0;c[b+56>>2]=0;c[b+56+4>>2]=0;a[b+80>>0]=0;return}function gc(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;var g=0,h=0;g=l;h=l=l+63&-64;l=l+464|0;ub(h+208|0,a,b)|0;Ag(h+208|0,c,d,0)|0;if(f|0){a=0;b=0;do{a=a+1|0;kg(h+448|0,a);jb(h|0,h+208|0,208)|0;Ag(h,h+448|0,4,0)|0;ue(h,h+416|0)|0;d=f-b|0;jb(e+b|0,h+416|0,(d>>>0<32?d:32)|0)|0;b=a<<5}while(b>>>0<f>>>0)}Wd(h+208|0,208);l=g;return}function hc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;l=0-(c[b+4>>2]|0)|0;k=0-(c[b+8>>2]|0)|0;j=0-(c[b+12>>2]|0)|0;i=0-(c[b+16>>2]|0)|0;h=0-(c[b+20>>2]|0)|0;g=0-(c[b+24>>2]|0)|0;f=0-(c[b+28>>2]|0)|0;e=0-(c[b+32>>2]|0)|0;d=0-(c[b+36>>2]|0)|0;c[a>>2]=0-(c[b>>2]|0);c[a+4>>2]=l;c[a+8>>2]=k;c[a+12>>2]=j;c[a+16>>2]=i;c[a+20>>2]=h;c[a+24>>2]=g;c[a+28>>2]=f;c[a+32>>2]=e;c[a+36>>2]=d;return}function ic(a,b,d,e,f,g,h,i,j,k,l){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;l=l|0;Tb(a|0,0,b|0)|0;do if((l|0)==1){if((g|d|j)>>>0>0|(g|d|j|0)==0&(f|b|i)>>>0>4294967295|k>>>0>2147484671){c[8326]=27;a=-1;break}if(d>>>0<0|(d|0)==0&b>>>0<16|(j>>>0<0|(j|0)==0&i>>>0<3)|k>>>0<8192){c[8326]=22;a=-1;break}else{a=((Lf(i,k>>>10,e,f,h,a,b)|0)!=0)<<31>>31;break}}else a=-1;while(0);return a|0}function jc(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;if(!d)b=0;else{i=a[b>>0]|0;e=a[c>>0]|0;a:do if(!(i<<24>>24)){d=e&255;b=i&255}else{j=b;h=d;f=e;g=i;d=e&255;b=i&255;do{h=h+-1|0;if(!(g<<24>>24==f<<24>>24&((h|0)!=0&f<<24>>24!=0)))break a;j=j+1|0;c=c+1|0;g=a[j>>0]|0;b=g&255;f=a[c>>0]|0;d=f&255}while(g<<24>>24!=0)}while(0);b=b-d|0}return b|0}function kc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;e=l;f=l=l+63&-64;l=l+1024|0;if(c[b+20>>2]|0){d=0;do{ng(a+64|0,0);ng(a+68|0,d);Sa(f,1024,a,72);Ie((c[(c[b>>2]|0)+4>>2]|0)+((S(c[b+16>>2]|0,d)|0)<<10)|0,f);ng(a+64|0,1);Sa(f,1024,a,72);Ie((c[(c[b>>2]|0)+4>>2]|0)+((S(c[b+16>>2]|0,d)|0)+1<<10)|0,f);d=d+1|0}while(d>>>0<(c[b+20>>2]|0)>>>0)}Wd(f,1024);l=e;return}function lc(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0;h=l;i=l=l+63&-64;l=l+368|0;if((b|0)==0&((e|0)!=0|(f|0)!=0))ba();if(!a)ba();if((d+-1&255)>63)ba();if(!((c|0)!=0|g<<24>>24!=0^1))ba();if((g&255)>64)ba();if(g<<24>>24)Wb(i,d,c,g);else Lc(i,d);Fb(i,b,e,f);Hb(i,a,d)|0;l=h;return}function mc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;e=l;d=l=l+63&-64;l=l+16|0;do if((((a|0)!=0?(b|0)!=0:0)?((b<<10>>>0)/(b>>>0)|0|0)==1024:0)?(f=ma(12)|0,c[a>>2]=f,(f|0)!=0):0){f=wf(d,b<<10)|0;c[8326]=f;if(f|0){c[d>>2]=0;d=-22;break}d=c[d>>2]|0;if(d){c[c[a>>2]>>2]=d;c[(c[a>>2]|0)+4>>2]=d;c[(c[a>>2]|0)+8>>2]=b<<10;d=0}else d=-22}else d=-22;while(0);l=e;return d|0}function nc(a,b){a=a|0;b=b|0;var c=0,d=0;c=l;d=l=l+63&-64;l=l+48|0;ua(a,b);ua(a+80|0,b+40|0);sa(a+120|0,b+80|0);Kb(a+40|0,b,b+40|0);ua(d,a+40|0);Kb(a+40|0,a+80|0,a);Jb(a+80|0,a+80|0,a);Jb(a,d,a+40|0);Jb(a+120|0,a+120|0,a+80|0);l=c;return}function oc(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0;h=l;i=l=l+63&-64;l=l+16|0;Id(a+64|0,d|0,e|0)|0;Nf(a,i,a+64|0,e,f,g)|0;if((c[i>>2]|0)==64&(c[i+4>>2]|0)==0)if(b|0){a=jg(e|0,f|0,64,0)|0;c[b>>2]=a;c[b+4>>2]=D;a=0}else a=0;else{if(b|0){c[b>>2]=0;c[b+4>>2]=0}i=jg(e|0,f|0,64,0)|0;Tb(a|0,0,i|0)|0;a=-1}l=h;return a|0}function pc(a,b){a=a|0;b=b|0;var c=0,d=0;d=l;c=l=l+63&-64;l=l+240|0;if(!(bb(c+80|0,b)|0)){Ff(c);Jb(c,c,c+80+40|0);Ja(c,c);Ff(c+40|0);Kb(c+40|0,c+40|0,c+80+40|0);pa(c+40|0,c+40|0,c);Na(a,c+40|0);a=0}else a=-1;l=d;return a|0}function qc(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0;e=jg(e|0,f|0,-64,-1)|0;f=D;do if(f>>>0>0|(f|0)==0&e>>>0>4294967231)h=7;else{if(Tf(d,d+64|0,e,f,g)|0){Tb(a|0,0,e|0)|0;h=7;break}if(b|0){c[b>>2]=e;c[b+4>>2]=f}Id(a|0,d+64|0,e|0)|0;e=0}while(0);if((h|0)==7)if(!b)e=-1;else{c[b>>2]=0;c[b+4>>2]=0;e=-1}return e|0}function rc(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;i=a[b>>0]|0;a:do if((i+-48&255)<=9){g=0;h=b;f=i;while(1){e=(f<<24>>24)+-48|0;f=g*10|0;if(!(g>>>0<429496730&(e>>>0>~f>>>0^1))){e=0;break a}g=(e>>>0>~f>>>0?0:e)+f|0;e=h+1|0;f=a[e>>0]|0;if((f+-48&255)>9)break;else h=e}if((e|0)!=(b|0)?(h|0)==(b|0)|i<<24>>24!=48:0)c[d>>2]=g;else e=0}else e=0;while(0);return e|0}function sc(b,c,d,e,f){b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0;if((((b>>>0<=63?(j=ef(d|0,0,c|0,0)|0,k=D,!(k>>>0>0|(k|0)==0&j>>>0>1073741823)):0)?(a[f>>0]=36,a[f+1>>0]=55,a[f+2>>0]=36,a[f+3>>0]=a[34193+b>>0]|0,g=fd(f+4|0,54,c,30)|0,(g|0)!=0):0)?(h=fd(g,f+58-g|0,d,30)|0,(h|0)!=0):0)?(i=Vc(h,f+58-h|0,e)|0,(i|0)!=0&i>>>0<(f+58|0)>>>0):0)a[i>>0]=0;else f=0;return f|0}function tc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=Cf(c[a+72>>2]|0,c[a+72+4>>2]|0,3)|0;if(0<0|0==0&(d&112)>>>0<112){jb(a+80+(d&127)|0,33979,112-(d&127)|0)|0;d=a+80|0;e=b+640|0;f=a}else{jb(a+80+(d&127)|0,33979,128-(d&127)|0)|0;na(a,a+80|0,b,b+640|0);d=a+80|0;e=d+112|0;do{c[d>>2]=0;d=d+4|0}while((d|0)<(e|0));d=a+80|0;e=b+640|0;f=a}re(a+192|0,a+64|0,16);na(f,d,b,e);return}function uc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;l=c[b+4>>2]|0;k=c[b+8>>2]|0;j=c[b+12>>2]|0;i=c[b+16>>2]|0;h=c[b+20>>2]|0;g=c[b+24>>2]|0;f=c[b+28>>2]|0;e=c[b+32>>2]|0;d=c[b+36>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=l;c[a+8>>2]=k;c[a+12>>2]=j;c[a+16>>2]=i;c[a+20>>2]=h;c[a+24>>2]=g;c[a+28>>2]=f;c[a+32>>2]=e;c[a+36>>2]=d;return}function vc(b,c,d,e,f,g){b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0;i=l;h=l=l+63&-64;l=l+32|0;if(!(e>>>0<0|(e|0)==0&d>>>0<32)?(Dd(h,32,0,f,g)|0,j=jg(d|0,e|0,-32,-1)|0,(Vf(c+16|0,c+32|0,j,D,h)|0)==0):0){Mf(b,c,d,e,f,g)|0;c=b+32|0;do{a[b>>0]=0;b=b+1|0}while((b|0)<(c|0));b=0}else b=-1;l=i;return b|0}function wc(a){a=a|0;return ((0-((0-(a^47)|0)>>>8&63^63|(0-(a^43)|0)>>>8&62^62|((a+65439|0)>>>8^255)&a+185&((122-a|0)>>>8&255^255)|((a+-65|0)>>>8^255)&a+-65&((90-a|0)>>>8&255^255)|((a+65488|0)>>>8^255)&a+4&((57-a|0)>>>8&255^255))|0)>>>8&255^255)&(0-(a^65)|0)>>>8|((0-(a^47)|0)>>>8&63^63|(0-(a^43)|0)>>>8&62^62|((a+65439|0)>>>8^255)&a+185&((122-a|0)>>>8&255^255)|((a+-65|0)>>>8^255)&a+-65&((90-a|0)>>>8&255^255)|((a+65488|0)>>>8^255)&a+4&((57-a|0)>>>8&255^255))|0}function xc(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0;f=0;h=0;i=0;a:while(1){while(1){g=wc(a[e>>0]|0)|0;if((g|0)==255){j=7;break a}e=e+1|0;h=g+(h<<6)|0;g=f+6|0;if(g>>>0>7)break;else f=g}f=f+-2|0;if(i>>>0>=(c[d>>2]|0)>>>0){e=0;break}a[b>>0]=h>>>f;b=b+1|0;i=i+1|0}if((j|0)==7)if(f>>>0<=4?((1<<f)+-1&h|0)==0:0)c[d>>2]=i;else e=0;return e|0}function yc(b){b=b|0;var d=0,e=0,f=0;a:do if(!(b&3)){d=b;f=4}else{d=b;e=b;while(1){if(!(a[d>>0]|0)){d=e;break a}d=d+1|0;e=d;if(!(e&3)){f=4;break}}}while(0);if((f|0)==4){while(1){e=c[d>>2]|0;if(!((e&-2139062144^-2139062144)&e+-16843009))d=d+4|0;else break}if((e&255)<<24>>24)do d=d+1|0;while((a[d>>0]|0)!=0)}return d-b|0}function zc(b,c,d,e){b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0;h=l;f=l=l+63&-64;l=l+128|0;if((qb(b,0,102)|0)==(b+101|0)){Mh(f);e=f+12|0;g=e+102|0;do{a[e>>0]=0;e=e+1|0}while((e|0)<(g|0));d=(Ab(f,c,d,b,f+12|0)|0)==0;Nh(f);if(!d){e=Uc(f+12|0,b,102)|0;Wd(f+12|0,102)}else e=-1}else e=-1;l=h;return e|0}function Ac(b,c,d,e,f){b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0;j=l;l=l+96|0;if(!(ih(j+32|0,j)|0)){g=b;h=j+32|0;i=g+32|0;do{a[g>>0]=a[h>>0]|0;g=g+1|0;h=h+1|0}while((g|0)<(i|0));Ad(j+64|0,j+32|0,f);b=we(b+32|0,c,d,e,j+64|0,f,j)|0;Wd(j,32);Wd(j+32|0,32);Wd(j+64|0,24)}else b=-1;l=j;return b|0}function Bc(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;do if(!(c>>>0>64|(d+-1|0)>>>0>63)){if(d>>>0>=256)fa(33636,33656,75,33829);if(c>>>0>=256)fa(33736,33656,76,33829);if((b|0)==0|(c|0)==0){Qb(a,d&255,e,f);a=0;break}else{rb(a,d&255,b,c&255,e,f);a=0;break}}else a=-1;while(0);return a|0}function Cc(b,c){b=b|0;c=c|0;var d=0,e=0,f=0,g=0;f=l;g=l=l+63&-64;l=l+240|0;e=g+200|0;d=e+32|0;do{a[e>>0]=a[c>>0]|0;e=e+1|0;c=c+1|0}while((e|0)<(d|0));a[g+200>>0]=a[g+200>>0]&-8;a[g+200+31>>0]=a[g+200+31>>0]&63|64;eb(g+40|0,g+200|0);ud(g,g+40+40|0,g+40+80|0);Na(b,g);l=f;return 0}function Dc(a){a=a|0;var b=0,c=0,e=0,f=0,g=0,h=0,i=0;g=d[a+7>>0]|0;h=zf(d[a+6>>0]|0|0,0,8)|0;i=D;f=zf(d[a+5>>0]|0|0,0,16)|0;i=i|D;e=zf(d[a+4>>0]|0|0,0,24)|0;i=i|D|(d[a+3>>0]|0);c=zf(d[a+2>>0]|0|0,0,40)|0;i=i|D;b=zf(d[a+1>>0]|0|0,0,48)|0;i=i|D;a=zf(d[a>>0]|0|0,0,56)|0;D=i|D;return h|g|f|e|c|b|a|0}function Ec(a,b,d,e,f,g,h,i,j,k,l){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;l=l|0;if(g>>>0>0|(g|0)==0&f>>>0>15){d=jg(f|0,g|0,-16,-1)|0;a=bc(a,0,e,d,D,e+f+-16|0,h,i,j,k,l)|0}else a=-1;if(b|0){k=(a|0)==0;g=jg(f|0,g|0,-16,-1)|0;c[b>>2]=k?g:0;c[b+4>>2]=k?D:0}return a|0}function Fc(a,b,d,e,f,g,h,i,j,k,l){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;l=l|0;if(g>>>0>0|(g|0)==0&f>>>0>15){d=jg(f|0,g|0,-16,-1)|0;a=pb(a,0,e,d,D,e+f+-16|0,h,i,j,k,l)|0}else a=-1;if(b|0){k=(a|0)==0;g=jg(f|0,g|0,-16,-1)|0;c[b>>2]=k?g:0;c[b+4>>2]=k?D:0}return a|0}function Gc(a,b,d,e,f,g,h,i,j,k,l){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;l=l|0;if(g>>>0>0|(g|0)==0&f>>>0>15){d=jg(f|0,g|0,-16,-1)|0;a=Db(a,0,e,d,D,e+f+-16|0,h,i,j,k,l)|0}else a=-1;if(b|0){k=(a|0)==0;g=jg(f|0,g|0,-16,-1)|0;c[b>>2]=k?g:0;c[b+4>>2]=k?D:0}return a|0}function Hc(b,c,e,f){b=b|0;c=c|0;e=e|0;f=f|0;var g=0,h=0;if(!(f>>>0<2147483647&f<<1>>>0<c>>>0))ba();if(!f)c=0;else{g=0;c=0;while(1){h=d[e+g>>0]|0;a[b+c>>0]=(h>>>4)+87+(((h>>>4)+65526|0)>>>8&217);a[b+(c|1)>>0]=(((h&15)<<8)+22272+((h&15)+65526&55552)|0)>>>8;c=g+1|0;if((c|0)==(f|0)){c=f<<1;break}else{g=c;c=c<<1}}}a[b+c>>0]=0;return b|0}function Ic(a,b,c,d,e,f,g,h,i){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;var j=0;do if(!((b+-1|0)>>>0>63|g>>>0>64)){if(b>>>0>=256)fa(33636,33656,35,33756);if(g>>>0<256){ac(a,c,f,b&255,d,e,g&255,h,i);j=0;break}else fa(33736,33656,36,33756)}else j=-1;while(0);return j|0}function Jc(a,b){a=a|0;b=b|0;c[a>>2]=1634760805;c[a+4>>2]=857760878;c[a+8>>2]=2036477234;c[a+12>>2]=1797285236;c[a+16>>2]=Vg(b)|0;c[a+20>>2]=Vg(b+4|0)|0;c[a+24>>2]=Vg(b+8|0)|0;c[a+28>>2]=Vg(b+12|0)|0;c[a+32>>2]=Vg(b+16|0)|0;c[a+36>>2]=Vg(b+20|0)|0;c[a+40>>2]=Vg(b+24|0)|0;c[a+44>>2]=Vg(b+28|0)|0;return}function Kc(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;do if(!(c>>>0>64|(d+-1|0)>>>0>63)){if(d>>>0>=256)fa(33636,33656,52,33797);if(c>>>0>=256)fa(33736,33656,53,33797);if((b|0)==0|(c|0)==0){Lc(a,d&255);a=0;break}else{Wb(a,d&255,b,c&255);a=0;break}}else a=-1;while(0);return a|0}function Lc(b,c){b=b|0;c=c|0;var d=0,e=0,f=0;e=l;f=l=l+63&-64;l=l+64|0;if((c+-1&255)>63)ba();else{a[f>>0]=c;a[f+1>>0]=0;a[f+2>>0]=1;a[f+3>>0]=1;Zg(f+4|0);ff(f+8|0);c=f+16|0;d=c+48|0;do{a[c>>0]=0;c=c+1|0}while((c|0)<(d|0));yd(b,f);l=e;return}}function Mc(b,c){b=b|0;c=c|0;var e=0,f=0;e=l;f=l=l+63&-64;l=l+128|0;Ja(f+80|0,c+80|0);pa(f+40|0,c,f+80|0);pa(f,c+40|0,f+80|0);Na(b,f);c=(Ze(f+40|0)|0)<<7;a[b+31>>0]=(d[b+31>>0]|0)^c;l=e;return}function Nc(a,b,d,e,f,g,h,i,j,k,l){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;l=l|0;if(f>>>0>4294967295|(f|0)==-1&e>>>0>4294967279)ba();$b(a,a+e|0,0,d,e,f,g,h,i,0,k,l)|0;if(b|0){k=jg(e|0,f|0,16,0)|0;c[b>>2]=k;c[b+4>>2]=D}return 0}function Oc(a,b,d,e,f,g,h,i,j,k,l){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;l=l|0;if(f>>>0>4294967295|(f|0)==-1&e>>>0>4294967279)ba();Cb(a,a+e|0,0,d,e,f,g,h,i,0,k,l)|0;if(b|0){k=jg(e|0,f|0,16,0)|0;c[b>>2]=k;c[b+4>>2]=D}return 0}function Pc(b,c,d){b=b|0;c=c|0;d=d|0;var e=0;a[b+7>>0]=c;e=Cf(c|0,d|0,8)|0;a[b+6>>0]=e;e=Cf(c|0,d|0,16)|0;a[b+5>>0]=e;e=Cf(c|0,d|0,24)|0;a[b+4>>0]=e;a[b+3>>0]=d;e=Cf(c|0,d|0,40)|0;a[b+2>>0]=e;e=Cf(c|0,d|0,48)|0;a[b+1>>0]=e;d=Cf(c|0,d|0,56)|0;a[b>>0]=d;return}function Qc(a,b,c,d,e,f,g,h){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0;j=l;i=l=l+63&-64;l=l+32|0;if(!(Ed(i,g,h)|0)){a=Ne(a,b,c,d,e,f,i)|0;Wd(i,32)}else a=-1;l=j;return a|0}function Rc(a,b,d,e,f,g,h,i,j,k,l){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;l=l|0;if(f>>>0>4294967295|(f|0)==-1&e>>>0>4294967279)ba();Ob(a,a+e|0,0,d,e,f,g,h,i,0,k,l)|0;if(b|0){k=jg(e|0,f|0,16,0)|0;c[b>>2]=k;c[b+4>>2]=D}return 0}function Sc(a,b,c,d,e,f,g,h){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0;j=l;i=l=l+63&-64;l=l+32|0;if(!(Ed(i,g,h)|0)){Ue(a,b,c,d,e,f,i)|0;Wd(i,32);a=0}else a=-1;l=j;return a|0}function Tc(a,b,c,d,e,f,g,h){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0;i=l;j=l=l+63&-64;l=l+80|0;if(!((c|0)==0&(d|0)==0)){ng(j+64|0,f);ng(j+64+4|0,g);Jc(j,h);de(j,e,j+64|0);za(j,b,a,c,d);Wd(j,64)}l=i;return 0}function Uc(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0;g=l;f=l=l+63&-64;l=l+16|0;c[f+4>>2]=b;c[f>>2]=d;if(!e)b=0;else{b=0;d=0;do{d=(a[(c[f>>2]|0)+b>>0]^a[(c[f+4>>2]|0)+b>>0])&255|d;b=b+1|0}while((b|0)!=(e|0));b=((d+511|0)>>>8&1)+-1|0}l=g;return b|0}function Vc(a,b,c){a=a|0;b=b|0;c=c|0;var e=0,f=0,g=0,h=0,i=0;e=0;while(1){if(e>>>0<32){f=0;g=0}else break;do{h=e;e=e+1|0;g=(d[c+h>>0]|0)<<f|g;f=f+8|0}while(e>>>0<32&f>>>0<24);i=a;a=fd(a,b,g,f)|0;h=(a|0)==0;b=(h?0:i-a|0)+b|0;if(h){a=0;break}}return a|0}function Wc(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0;do if(!((b+-1|0)>>>0>63|g>>>0>64)){if(b>>>0>=256)fa(33636,33656,18,33709);if(g>>>0<256){lc(a,c,f,b&255,d,e,g&255);h=0;break}else fa(33736,33656,19,33709)}else h=-1;while(0);return h|0}function Xc(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0;h=l;f=l=l+63&-64;l=l+16|0;g=0;e=0;while(1){if(cg(f,a[d>>0]|0)|0){e=3;break}d=d+1|0;g=c[f>>2]<<e|g;e=e+6|0;if(e>>>0>=30){e=5;break}}if((e|0)==3){c[b>>2]=0;d=0}else if((e|0)==5)c[b>>2]=g;l=h;return d|0}function Yc(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0;If(c,a+((d<<5)+-16<<2)|0);if(d<<1|0){e=0;do{g=e<<4;df(c,a+(g<<2)|0);Ga(c);f=e<<3;If(b+(f<<2)|0,c);df(c,a+((g|16)<<2)|0);Ga(c);If(b+(f+(d<<4)<<2)|0,c);e=e+2|0}while(e>>>0<d<<1>>>0)}return}function Zc(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0;e=l;f=l=l+63&-64;l=l+160|0;he(c,d,32,0)|0;a[c>>0]=a[c>>0]&-8;a[c+31>>0]=a[c+31>>0]&63|64;eb(f,c);Mc(b,f);Id(c|0,d|0,32)|0;Id(c+32|0,b|0,32)|0;l=e;return 0}function _c(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0;g=l;h=l=l+63&-64;l=l+64|0;he(h,d,32,0)|0;d=c;e=h;f=d+32|0;do{a[d>>0]=a[e>>0]|0;d=d+1|0;e=e+1|0}while((d|0)<(f|0));Wd(h,64);h=ah(b,c)|0;l=g;return h|0}function $c(b,c,d,e,f,g){b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;if(e>>>0<0|(e|0)==0&d>>>0<32)b=-1;else{Mf(b,c,d,e,f,g)|0;c=jg(d|0,e|0,-32,-1)|0;bg(b+16|0,b+32|0,c,D,b)|0;c=b+16|0;do{a[b>>0]=0;b=b+1|0}while((b|0)<(c|0));b=0}return b|0}function ad(b,c){b=b|0;c=c|0;var d=0,e=0,f=0;e=l;f=l=l+63&-64;l=l+64|0;he(f,c,32,0)|0;a[f>>0]=a[f>>0]&-8;a[f+31>>0]=a[f+31>>0]&63|64;c=f;d=b+32|0;do{a[b>>0]=a[c>>0]|0;b=b+1|0;c=c+1|0}while((b|0)<(d|0));Wd(f,64);l=e;return 0}function bd(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;var g=0,h=0;h=l;g=l=l+63&-64;l=l+32|0;if(d>>>0<0|(d|0)==0&c>>>0<48)a=-1;else{c=jg(c|0,d|0,-32,-1)|0;d=D;Ad(g,b,e);a=Td(a,b+32|0,c,d,g,b,f)|0}l=h;return a|0}function cd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=l;f=l=l+63&-64;l=l+16|0;c[f>>2]=c[b+((d&3)<<2)>>2];c[f+4>>2]=c[b+((d>>>2&3)<<2)>>2];c[f+8>>2]=c[b+((d>>>4&3)<<2)>>2];c[f+12>>2]=c[b+((d>>>6&3)<<2)>>2];Ge(a,f);l=e;return}function dd(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0;h=l;i=l=l+63&-64;l=l+80|0;if(!((c|0)==0&(d|0)==0)){ng(i+64|0,f);Jc(i,g);se(i,e,i+64|0);za(i,b,a,c,d);Wd(i,64)}l=h;return 0}function ed(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;f=l;e=l=l+63&-64;l=l+80|0;if(!((a|0)==0|(b|0)==0)){d=mc(a,c[a+8>>2]|0)|0;if(!d){Ra(e,b,c[a+28>>2]|0);Wd(e+64|0,8);kc(e,a);Wd(e,72);d=0}}else d=-25;l=f;return d|0}function fd(b,c,d,e){b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0;a:do if(e){f=0;while(1){if(!c){b=0;break a}g=b+1|0;a[b>>0]=a[34193+(d&63)>>0]|0;f=f+6|0;if(f>>>0>=e>>>0){b=g;break}else{d=d>>>6;c=c+-1|0;b=g}}}while(0);return b|0}function gd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=jg(c[a+64>>2]|0,c[a+64+4>>2]|0,b|0,d|0)|0;f=D;c[a+64>>2]=e;c[a+64+4>>2]=f;d=jg((f>>>0<d>>>0|(f|0)==(d|0)&e>>>0<b>>>0)&1|0,0,c[a+72>>2]|0,c[a+72+4>>2]|0)|0;c[a+72>>2]=d;c[a+72+4>>2]=D;return}function hd(a,b,c,d,e,f,g,h,i,j){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;var k=0,m=0;k=l;m=l=l+63&-64;l=l+16|0;Mh(m);j=cb(m,a,b,c,d,e,f,g,h,i,j)|0;Nh(m);l=k;return j|0}function id(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0;i=l;h=l=l+63&-64;l=l+32|0;if(!(Gd(h,f,g)|0)){a=Pf(a,b,c,d,e,h)|0;Wd(h,32)}else a=-1;l=i;return a|0}function jd(b,c){b=b|0;c=c|0;var d=0,e=0,f=0,g=0;f=l;g=l=l+63&-64;l=l+16|0;e=10;while(1){d=e+-1|0;a[g+d>>0]=(c>>>0)%10|0|48;if(c>>>0>9&(d|0)!=0){e=d;c=(c>>>0)/10|0}else break}e=11-e|0;jb(b|0,g+d|0,e|0)|0;a[b+e>>0]=0;l=f;return}function kd(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0;i=l;h=l=l+63&-64;l=l+32|0;if(!(Gd(h,f,g)|0)){a=Yf(a,b,c,d,e,h)|0;Wd(h,32)}else a=-1;l=i;return a|0}function ld(a,b,c,d,e,f,g,h){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0;i=l;j=l=l+63&-64;l=l+32|0;Ka(j,e,h,0)|0;h=jf(a,b,c,d,e+16|0,f,g,j)|0;Wd(j,32);l=i;return h|0}function md(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0;f=l;g=l=l+63&-64;l=l+64|0;if(!((b|0)==0&(c|0)==0)){Jc(g,e);se(g,d,0);Tb(a|0,0,b|0)|0;za(g,a,a,b,c);Wd(g,64)}l=f;return 0}function nd(a){a=a|0;var b=0,d=0;d=a+15&-16|0;b=c[i>>2]|0;a=b+d|0;if((d|0)>0&(a|0)<(b|0)|(a|0)<0){_()|0;ca(12);return -1}c[i>>2]=a;if((a|0)>(Z()|0)?(Y()|0)==0:0){ca(12);c[i>>2]=b;return -1}return b|0}function od(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0;f=l;g=l=l+63&-64;l=l+64|0;if(!((b|0)==0&(c|0)==0)){Jc(g,e);de(g,d,0);Tb(a|0,0,b|0)|0;za(g,a,a,b,c);Wd(g,64)}l=f;return 0}function pd(a,b,c,d,e,f,g,h){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0;i=l;j=l=l+63&-64;l=l+32|0;Ha(j,e,h,0)|0;h=nf(a,b,c,d,e+16|0,f,g,j)|0;l=i;return h|0}function qd(a,b,c,d,e,f,g,h){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0;i=l;l=l+32|0;if(!(Ng(i,g,h)|0)){a=qf(a,b,c,d,e,f,i)|0;Wd(i,32)}else a=-1;l=i;return a|0}function rd(b){b=b|0;var c=0,d=0,e=0,f=0,g=0;d=32;c=1;e=0;while(1){d=d+-1|0;f=a[b+d>>0]|0;g=a[34308+d>>0]|0;c=c&255;e=((f&255)-(g&255)|0)>>>8&c|e&255;if(!d)break;else c=(((g^f)&255)+65535|0)>>>8&c}return ((e|0)==0)<<31>>31|0}function sd(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;e=l;d=l=l+63&-64;l=l+16|0;f=wf(d,b)|0;c[8326]=f;if(!f)d=c[d>>2]|0;else{c[d>>2]=0;d=0}c[a>>2]=d;c[a+4>>2]=d;c[a+8>>2]=d|0?b:0;l=e;return d|0}function td(a,b,c,d,e,f,g,h){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0;i=l;l=l+32|0;if(!(Ng(i,g,h)|0)){uf(a,b,c,d,e,f,i)|0;Wd(i,32);a=0}else a=-1;l=i;return a|0}function ud(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=l;e=l=l+63&-64;l=l+80|0;Kb(e+40|0,c,b);Jb(e,c,b);Ja(e,e);pa(a,e+40|0,e);l=d;return}function vd(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;if(d>>>0<0|(d|0)==0&c>>>0<16)a=-1;else{d=jg(c|0,d|0,-16,-1)|0;a=Qc(a,b+16|0,b,d,D,e,f,g)|0}return a|0}function wd(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;if(d>>>0<0|(d|0)==0&c>>>0<16)a=-1;else{d=jg(c|0,d|0,-16,-1)|0;a=Ne(a,b+16|0,b,d,D,e,f)|0}return a|0}function xd(a){a=a|0;c[a+32>>2]=0;c[a+32+4>>2]=0;c[a>>2]=c[8238];c[a+4>>2]=c[8239];c[a+8>>2]=c[8240];c[a+12>>2]=c[8241];c[a+16>>2]=c[8242];c[a+20>>2]=c[8243];c[a+24>>2]=c[8244];c[a+28>>2]=c[8245];return 0}function yd(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;kf(a);d=0;do{g=Xe(b+(d<<3)|0)|0;e=a+(d<<3)|0;f=c[e+4>>2]^D;c[e>>2]=c[e>>2]^g;c[e+4>>2]=f;d=d+1|0}while((d|0)!=8);return}function zd(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;if(d>>>0<0|(d|0)==0&c>>>0<16)a=-1;else{d=jg(c|0,d|0,-16,-1)|0;a=ab(a,b+16|0,b,d,D,e,f)|0}return a|0}function Ad(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=l;e=l=l+63&-64;l=l+368|0;Hg(e,0,0,24)|0;vg(e,b,32,0)|0;vg(e,c,32,0)|0;Xg(e,a,24)|0;l=d;return}function Bd(b){b=b|0;var c=0,d=0,e=0;d=0;while(1){c=0;e=0;do{e=(a[16+(d<<5)+c>>0]^a[b+c>>0])&255|e;c=c+1|0}while((c|0)!=32);d=d+1|0;if(!e){c=1;break}if(d>>>0>=12){c=0;break}}return c|0}function Cd(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;var g=0,h=0;g=l;h=l=l+63&-64;l=l+1408|0;ha(h,f)|0;ia(a,b,c,d,e,h)|0;l=g;return 0}function Dd(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0;f=l;g=l=l+63&-64;l=l+32|0;Ka(g,d,e,0)|0;e=Bg(a,b,c,d+16|0,g)|0;Wd(g,32);l=f;return e|0}function Ed(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;e=l;d=l=l+63&-64;l=l+32|0;if(!(Sd(d,c,b)|0)){Ha(a,35976,d,0)|0;a=0}else a=-1;l=e;return a|0}function Fd(a,b,d,e,f,g,h,i,j,k,l){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;k=k|0;l=l|0;if((l|0)==1)a=ic(a,b,d,e,f,g,h,i,j,k,1)|0;else{c[8326]=22;a=-1}return a|0}function Gd(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;e=l;d=l=l+63&-64;l=l+32|0;if(!(Sd(d,c,b)|0)){Ka(a,35912,d,0)|0;a=0}else a=-1;l=e;return a|0}function Hd(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0;f=l;l=l+32|0;ne(f,b,c,d,e)|0;e=Re(a,f)|0;e=((f|0)==(a|0)?-1:e)|(Uc(f,a,32)|0);l=f;return e|0}function Id(b,c,d){b=b|0;c=c|0;d=d|0;var e=0;if((c|0)<(b|0)&(b|0)<(c+d|0)){e=b;c=c+d|0;b=b+d|0;while((d|0)>0){b=b-1|0;c=c-1|0;d=d-1|0;a[b>>0]=a[c>>0]|0}b=e}else jb(b,c,d)|0;return b|0}function Jd(a,b){a=a|0;b=b|0;var c=0,d=0,e=0;c=S(b&65535,a&65535)|0;e=(c>>>16)+(S(b&65535,a>>>16)|0)|0;d=S(b>>>16,a&65535)|0;return (D=(e>>>16)+(S(b>>>16,a>>>16)|0)+(((e&65535)+d|0)>>>16)|0,e+d<<16|c&65535|0)|0}function Kd(a,b){a=a|0;b=b|0;var d=0;d=c[a+4>>2]^c[b+4>>2];c[a>>2]=c[a>>2]^c[b>>2];c[a+4>>2]=d;d=c[a+8+4>>2]^c[b+8+4>>2];c[a+8>>2]=c[a+8>>2]^c[b+8>>2];c[a+8+4>>2]=d;return}function Ld(a,b){a=a|0;b=b|0;var d=0;d=c[a+4>>2]&c[b+4>>2];c[a>>2]=c[a>>2]&c[b>>2];c[a+4>>2]=d;d=c[a+8+4>>2]&c[b+8+4>>2];c[a+8>>2]=c[a+8>>2]&c[b+8>>2];c[a+8+4>>2]=d;return}function Md(a,b){a=a|0;b=b|0;pa(a,b,b+120|0);pa(a+40|0,b+40|0,b+80|0);pa(a+80|0,b+80|0,b+120|0);pa(a+120|0,b,b+40|0);return}function Nd(a,b){a=a|0;b=b|0;var d=0;d=c[a+4>>2]|c[b+4>>2];c[a>>2]=c[a>>2]|c[b>>2];c[a+4>>2]=d;d=c[a+8+4>>2]|c[b+8+4>>2];c[a+8>>2]=c[a+8>>2]|c[b+8>>2];c[a+8+4>>2]=d;return}function Od(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0;f=l;l=l+64|0;me(f,b,c,d,e)|0;e=Qe(a,f)|0;e=((f|0)==(a|0)?-1:e)|(Uc(f,a,64)|0);l=f;return e|0}function Pd(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0;f=l;l=l+32|0;ke(f,b,c,d,e)|0;e=Re(a,f)|0;e=((f|0)==(a|0)?-1:e)|(Uc(f,a,32)|0);l=f;return e|0}function Qd(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;if(d>>>0>0|(d|0)==0&c>>>0>4294967279)a=-1;else a=Sc(a+16|0,a,b,c,d,e,f,g)|0;return a|0}function Rd(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;if(d>>>0>0|(d|0)==0&c>>>0>4294967279)a=-1;else{Ue(a+16|0,a,b,c,d,e,f)|0;a=0}return a|0}function Sd(a,b,c){a=a|0;b=b|0;c=c|0;if(!(Oa(a,b,c)|0)){b=0;c=0;do{c=d[a+b>>0]|0|c;b=b+1|0}while((b|0)!=32);b=0-((c+511|0)>>>8&1)|0}else b=-1;return b|0}function Td(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;if(d>>>0<0|(d|0)==0&c>>>0<16)a=-1;else{d=jg(c|0,d|0,-16,-1)|0;a=qd(a,b+16|0,b,d,D,e,f,g)|0}return a|0}function Ud(a){a=a|0;var b=0,c=0,e=0,f=0;c=d[a>>0]|0;e=zf(d[a+1>>0]|0|0,0,8)|0;f=D;b=zf(d[a+2>>0]|0|0,0,16)|0;f=f|D;a=zf(d[a+3>>0]|0|0,0,24)|0;D=f|D;return e|c|b|a|0}function Vd(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0;f=l;g=l=l+63&-64;l=l+16|0;le(g,b,c,d,e)|0;e=Se(a,g)|0;l=f;return e|0}function Wd(b,d){b=b|0;d=d|0;var e=0,f=0;e=l;f=l=l+63&-64;l=l+16|0;c[f>>2]=b;if(d|0){b=0;do{a[(c[f>>2]|0)+b>>0]=0;b=b+1|0}while((b|0)!=(d|0))}l=e;return}function Xd(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;if(d>>>0<0|(d|0)==0&c>>>0<16)a=-1;else{d=jg(c|0,d|0,-16,-1)|0;a=qf(a,b+16|0,b,d,D,e,f)|0}return a|0}function Yd(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=0;do{g=b+(d<<3)|0;e=a+(d<<3)|0;f=c[e+4>>2]^c[g+4>>2];c[e>>2]=c[e>>2]^c[g>>2];c[e+4>>2]=f;d=d+1|0}while((d|0)!=128);return}function Zd(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0;f=l;g=l=l+63&-64;l=l+32|0;Ha(g,d,e,0)|0;e=Gg(a,b,c,d+16|0,g)|0;l=f;return e|0}function _d(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;if(d>>>0<0|(d|0)==0&c>>>0<16)a=-1;else{d=jg(c|0,d|0,-16,-1)|0;a=db(a,b+16|0,b,d,D,e,f)|0}return a|0}function $d(a,b){a=a|0;b=b|0;Kb(a,b+40|0,b);Jb(a+40|0,b+40|0,b);uc(a+80|0,b+80|0);pa(a+120|0,b+120|0,1232);return}function ae(b){b=b|0;var c=0;c=a[n+(b&255)>>0]|0;if((c|0)<8)return c|0;c=a[n+(b>>8&255)>>0]|0;if((c|0)<8)return c+8|0;c=a[n+(b>>16&255)>>0]|0;if((c|0)<8)return c+16|0;return (a[n+(b>>>24)>>0]|0)+24|0}function be(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0;f=l;g=l=l+63&-64;l=l+1408|0;ha(g,e)|0;ja(a,b,c,d,g)|0;l=f;return 0}function ce(a,b){a=a|0;b=b|0;var c=0;c=Xe(a)|0;c=Cf(c|0,D|0,b|0)|0;ve(a,c,D);c=Xe(a+8|0)|0;b=Cf(c|0,D|0,b|0)|0;ve(a+8|0,b,D);return}function de(a,b,d){a=a|0;b=b|0;d=d|0;if(!d){c[a+48>>2]=0;d=0}else{c[a+48>>2]=Vg(d)|0;d=Vg(d+4|0)|0}c[a+52>>2]=d;c[a+56>>2]=Vg(b)|0;c[a+60>>2]=Vg(b+4|0)|0;return}function ee(a,b){a=a|0;b=b|0;var c=0;c=Xe(a)|0;c=zf(c|0,D|0,b|0)|0;ve(a,c,D);c=Xe(a+8|0)|0;b=zf(c|0,D|0,b|0)|0;ve(a+8|0,b,D);return}function fe(b,c){b=b|0;c=c|0;var d=0,e=0;e=l;l=l+64|0;te(b,e)|0;b=e;d=c+32|0;do{a[c>>0]=a[b>>0]|0;c=c+1|0;b=b+1|0}while((c|0)<(d|0));l=e;return 0}function ge(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0;f=jg(c|0,d|0,a|0,b|0)|0;e=D;d=zf(a|0,b|0,1)|0;d=ef(d&-2|0,D&1|0,c|0,0)|0;d=jg(f|0,e|0,d|0,D|0)|0;return d|0}function he(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0;e=l;f=l=l+63&-64;l=l+208|0;qe(f)|0;Ia(f,b,c,d)|0;Fe(f,a)|0;l=e;return 0}function ie(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0;e=l;f=l=l+63&-64;l=l+112|0;xd(f)|0;Pa(f,b,c,d)|0;Je(f,a)|0;l=e;return 0}function je(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;if(d>>>0>0|(d|0)==0&c>>>0>4294967279)a=-1;else{Ua(a+16|0,a,b,c,d,e,f)|0;a=0}return a|0}function ke(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0;f=l;l=l+208|0;ub(f,e,32)|0;Ag(f,b,c,d)|0;ue(f,a)|0;l=f;return 0}function le(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0;f=l;g=l=l+63&-64;l=l+96|0;fc(g,e);Qa(g,b,c,d);Za(g,a);l=f;return 0}function me(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0;f=l;l=l+416|0;tb(f,e,32)|0;Dg(f,b,c,d)|0;te(f,a)|0;l=f;return 0}function ne(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0;f=l;l=l+416|0;Tg(f,e,32)|0;Kg(f,b,c,d)|0;fe(f,a)|0;l=f;return 0}function oe(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0;e=l;f=l=l+63&-64;l=l+64|0;Fe(a,f)|0;xb(b,c,f,64,0,d,1);l=e;return 0}function pe(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=l;e=l=l+63&-64;l=l+64|0;Fe(a,e)|0;c=zb(b,e,64,0,c,1)|0;l=d;return c|0}function qe(a){a=a|0;var b=0,d=0;c[a+64>>2]=0;c[a+64+4>>2]=0;c[a+64+8>>2]=0;c[a+64+12>>2]=0;b=400;d=a+64|0;do{c[a>>2]=c[b>>2];a=a+4|0;b=b+4|0}while((a|0)<(d|0));return 0}function re(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;if(d>>>3|0){e=0;do{f=b+(e<<3)|0;Pc(a+(e<<3)|0,c[f>>2]|0,c[f+4>>2]|0);e=e+1|0}while((e|0)!=(d>>>3|0))}return}function se(a,b,d){a=a|0;b=b|0;d=d|0;if(!d)d=0;else d=Vg(d)|0;c[a+48>>2]=d;c[a+52>>2]=Vg(b)|0;c[a+56>>2]=Vg(b+4|0)|0;c[a+60>>2]=Vg(b+8|0)|0;return}function te(a,b){a=a|0;b=b|0;var c=0;c=l;l=l+64|0;Fe(a,c)|0;Ia(a+208|0,c,64,0)|0;Fe(a+208|0,b)|0;Wd(c,64);l=c;return 0}function ue(a,b){a=a|0;b=b|0;var c=0;c=l;l=l+32|0;Je(a,c)|0;Pa(a+104|0,c,32,0)|0;Je(a+104|0,b)|0;Wd(c,32);l=c;return 0}function ve(b,c,d){b=b|0;c=c|0;d=d|0;a[b>>0]=c;a[b+1>>0]=c>>8;a[b+2>>0]=c>>16;a[b+3>>0]=c>>24;a[b+4>>0]=d;a[b+4+1>>0]=d>>8;a[b+4+2>>0]=d>>16;a[b+4+3>>0]=d>>24;return}function we(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;if(d>>>0>0|(d|0)==0&c>>>0>4294967279)a=-1;else a=td(a+16|0,a,b,c,d,e,f,g)|0;return a|0}function xe(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;if(d>>>0>0|(d|0)==0&c>>>0>4294967279)a=-1;else{uf(a+16|0,a,b,c,d,e,f)|0;a=0}return a|0}function ye(a){a=a|0;ng(a,(Vg(a)|0)>>>8);ng(a+4|0,(Vg(a+4|0)|0)>>>8);ng(a+8|0,(Vg(a+8|0)|0)>>>8);ng(a+12|0,(Vg(a+12|0)|0)>>>8);return}function ze(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;if(d>>>0>0|(d|0)==0&c>>>0>4294967279)a=-1;else{Ya(a+16|0,a,b,c,d,e,f)|0;a=0}return a|0}function Ae(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;if(d>>>2|0){e=0;do{f=a+(e<<2)|0;c[f>>2]=c[f>>2]^c[b+(e<<2)>>2];e=e+1|0}while((e|0)!=(d>>>2|0))}return}function Be(a){a=a|0;return (0-(a^62)|0)>>>8&43^43|(a+65510|0)>>>8&255&a+65|(0-(a^63)|0)>>>8&47^47|(a+65484|0)>>>8&a+71&((a+65510|0)>>>8&255^255)|(a+65474|0)>>>8&a+252&((a+65484|0)>>>8&255^255)|0}function Ce(a,b){a=a|0;b=b|0;var c=0,d=0;c=l;d=l=l+63&-64;l=l+128|0;Ye(d,b);nc(a,d);l=c;return}function De(a,b){a=a|0;b=b|0;pa(a,b,b+120|0);pa(a+40|0,b+40|0,b+80|0);pa(a+80|0,b+80|0,b+120|0);return}function Ee(a,b){a=a|0;b=b|0;var c=0,d=0;c=l;d=l=l+63&-64;l=l+32|0;lf(d,32);Zc(a,b,d)|0;Wd(d,32);l=c;return 0}function Fe(a,b){a=a|0;b=b|0;var c=0,d=0;c=l;d=l=l+63&-64;l=l+704|0;tc(a,d);re(b,a,64);Wd(d,704);Wd(a,208);l=c;return 0}function Ge(a,b){a=a|0;b=b|0;var d=0;d=c[b+4>>2]|0;c[a>>2]=c[b>>2];c[a+4>>2]=d;d=c[b+8+4>>2]|0;c[a+8>>2]=c[b+8>>2];c[a+8+4>>2]=d;return}function He(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=0;do{f=Dc(b+(d<<3)|0)|0;e=a+(d<<3)|0;c[e>>2]=f;c[e+4>>2]=D;d=d+1|0}while((d|0)!=16);return}function Ie(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=0;do{f=Xe(b+(d<<3)|0)|0;e=a+(d<<3)|0;c[e>>2]=f;c[e+4>>2]=D;d=d+1|0}while((d|0)!=128);return}function Je(a,b){a=a|0;b=b|0;var c=0,d=0;c=l;d=l=l+63&-64;l=l+288|0;ec(a,d);yf(b,a);Wd(d,288);Wd(a,104);l=c;return 0}function Ke(a){a=a|0;var b=0,c=0;b=l;c=l=l+63&-64;l=l+32|0;Na(c,a);a=Re(c,35928)|0;l=b;return a|0}function Le(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;if(e>>>0>0|(e|0)==0&d>>>0>4294967295){c[8326]=27;a=-1}else a=((uh(a,b,d)|0)!=0)<<31>>31;return a|0}function Me(a){a=a|0;var b=0;if(a>>>0<2)a=0;else{do b=Qh()|0;while(b>>>0<(((0-a|0)>>>0)%(a>>>0)|0)>>>0);a=(b>>>0)%(a>>>0)|0}return a|0}function Ne(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;return ab(a,b,c,d,e,f,g)|0}function Oe(a,b,c){a=a|0;b=b|0;c=c|0;wb(a,b,c&255);wb(a+40|0,b+40|0,c&255);wb(a+80|0,b+80|0,c&255);return}function Pe(a){a=a|0;var b=0;b=~c[a+4>>2];c[a>>2]=~c[a>>2];c[a+4>>2]=b;b=~c[a+8+4>>2];c[a+8>>2]=~c[a+8>>2];c[a+8+4>>2]=b;return}function Qe(b,c){b=b|0;c=c|0;var d=0,e=0;d=0;e=0;do{d=(a[c+e>>0]^a[b+e>>0])&255|d;e=e+1|0}while((e|0)!=64);return ((d+511|0)>>>8&1)+-1|0}function Re(b,c){b=b|0;c=c|0;var d=0,e=0;d=0;e=0;do{d=(a[c+e>>0]^a[b+e>>0])&255|d;e=e+1|0}while((e|0)!=32);return ((d+511|0)>>>8&1)+-1|0}function Se(b,c){b=b|0;c=c|0;var d=0,e=0;d=0;e=0;do{d=(a[c+e>>0]^a[b+e>>0])&255|d;e=e+1|0}while((e|0)!=16);return ((d+511|0)>>>8&1)+-1|0}function Te(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;f=l;l=l+16|0;Da(a,b,d,e,f|0)|0;l=f;return (D=c[f+4>>2]|0,c[f>>2]|0)|0}function Ue(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;Ua(a,b,c,d,e,f,g)|0;return 0}function Ve(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;if(d>>>2|0){e=0;do{c[a+(e<<2)>>2]=c[b+(e<<2)>>2];e=e+1|0}while((e|0)!=(d>>>2|0))}return}function We(a,b){a=a|0;b=b|0;var d=0,e=0;d=0;do{e=b+(d<<3)|0;ve(a+(d<<3)|0,c[e>>2]|0,c[e+4>>2]|0);d=d+1|0}while((d|0)!=128);return}function Xe(a){a=a|0;D=d[a+4>>0]|d[a+4+1>>0]<<8|d[a+4+2>>0]<<16|d[a+4+3>>0]<<24;return d[a>>0]|d[a+1>>0]<<8|d[a+2>>0]<<16|d[a+3>>0]<<24|0}function Ye(a,b){a=a|0;b=b|0;uc(a,b);uc(a+40|0,b+40|0);uc(a+80|0,b+80|0);return}function Ze(b){b=b|0;var c=0,d=0;d=l;c=l=l+63&-64;l=l+32|0;Na(c,b);l=d;return a[c>>0]&1|0}function _e(){}function $e(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){D=b>>c;return a>>>c|(b&(1<<c)-1)<<32-c}D=(b|0)<0?-1:0;return b>>c-32|0}function af(a){a=a|0;pg(a);Ff(a+40|0);Ff(a+80|0);pg(a+120|0);return}function bf(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=Cf(a|0,b|0,c|0)|0;e=D;c=zf(a|0,b|0,64-c|0)|0;D=D|e;return c|d|0}function cf(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=zf(a|0,b|0,c|0)|0;e=D;c=Cf(a|0,b|0,64-c|0)|0;D=D|e;return c|d|0}function df(a,b){a=a|0;b=b|0;var d=0,e=0;d=0;do{e=a+(d<<2)|0;c[e>>2]=c[e>>2]^c[b+(d<<2)>>2];d=d+1|0}while((d|0)!=16);return}function ef(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0;e=Jd(a,c)|0;f=D;return (D=(S(b,c)|0)+(S(d,a)|0)+f|f&0,e|0|0)|0}function ff(b){b=b|0;a[b>>0]=0;a[b+1>>0]=0;a[b+2>>0]=0;a[b+3>>0]=0;a[b+4>>0]=0;a[b+4+1>>0]=0;a[b+4+2>>0]=0;a[b+4+3>>0]=0;return}function gf(a,b,c){a=a|0;b=b|0;c=c|0;if(c>>>0<256)return Hb(a,b,c&255)|0;else fa(33636,33656,102,33875);return 0}function hf(a,b,c){a=a|0;b=b|0;c=c|0;var d=0;b=zf(b&255|0,0,8)|0;d=D;c=zf(c&255|0,0,16)|0;D=d|D;return b|a&255|c|0}function jf(a,b,c,d,e,f,g,h){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;return Ta(a,b,c,d,e,f,g,h)|0}function kf(a){a=a|0;var b=0,d=0;Tb(a+64|0,0,293)|0;b=400;d=a+64|0;do{c[a>>2]=c[b>>2];a=a+4|0;b=b+4|0}while((a|0)<(d|0));return}function lf(b,c){b=b|0;c=c|0;var d=0;if(c|0){d=0;do{a[b+d>>0]=Qh()|0;d=d+1|0}while((d|0)!=(c|0))}return}function mf(b,c){b=b|0;c=c|0;var d=0;d=c;do{if(!d){c=0;break}d=d+-1|0;c=b+d|0}while((a[c>>0]|0)!=36);return c|0}function nf(a,b,c,d,e,f,g,h){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;return Tc(a,b,c,d,e,f,g,h)|0}function of(b,c){b=b|0;c=c|0;var d=0;d=b+48|0;b=d+16|0;do{a[d>>0]=a[c>>0]|0;d=d+1|0;c=c+1|0}while((d|0)<(b|0));return}function pf(b,c){b=b|0;c=c|0;var d=0;d=b+32|0;b=d+16|0;do{a[d>>0]=a[c>>0]|0;d=d+1|0;c=c+1|0}while((d|0)<(b|0));return}function qf(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;return db(a,b,c,d,e,f,g)|0}function rf(){var a=0,b=0;a=l;b=l=l+63&-64;l=l+16|0;$g(b);if(c[b>>2]|0)$g(b);l=a;return}function sf(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;return id(a,b,c,d,e,f,g)|0}function tf(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;return dd(a,b,c,d,e,f,g)|0}function uf(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;Ya(a,b,c,d,e,f,g)|0;return 0}function vf(){var a=0;a=aa(30)|0;if((a|0)>0)c[8833]=a;else a=c[8833]|0;if(a>>>0<16)ba();else{lf(35960,16);return}}function wf(a,b){a=a|0;b=b|0;var d=0;if(b>>>0<=4294967168?(d=sb(b)|0,(d|0)!=0):0){c[a>>2]=d;a=0}else a=12;return a|0}function xf(a,b){a=a|0;b=b|0;var d=0;d=0;do{c[a+(d<<2)>>2]=yg(b+(d<<2)|0)|0;d=d+1|0}while((d|0)!=16);return}function yf(a,b){a=a|0;b=b|0;var d=0;d=0;do{kg(a+(d<<2)|0,c[b+(d<<2)>>2]|0);d=d+1|0}while((d|0)!=8);return}function zf(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){D=b<<c|(a&(1<<c)-1<<32-c)>>>32-c;return a<<c}D=a<<c-32;return 0}function Af(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;return kd(a,b,c,d,e,f,g)|0}function Bf(){var a=0;if(!(c[8832]|0)){Dh();Sh();vf();c[8832]=1;a=0}else a=1;return a|0}function Cf(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){D=b>>>c;return a>>>c|(b&(1<<c)-1)<<32-c}D=0;return b>>>c-32|0}function Df(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;return Wc(a,b,c,d,e,f,g)|0}function Ef(a,b,c){a=a|0;b=b|0;c=c|0;if(c>>>0<1|(c|0)==1&b>>>0<0){lf(a,b);return}else fa(35141,35161,200,35187)}function Ff(a){a=a|0;var b=0;c[a>>2]=1;a=a+4|0;b=a+36|0;do{c[a>>2]=0;a=a+4|0}while((a|0)<(b|0));return}function Gf(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;return cc(a,b,c,d,e,f,g)|0}function Hf(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return pd(a,b,c,d,e,0,0,f)|0}function If(a,b){a=a|0;b=b|0;var d=0;d=0;do{c[a+(d<<2)>>2]=c[b+(d<<2)>>2];d=d+1|0}while((d|0)!=16);return}function Jf(a){a=a|0;Ff(a);Ff(a+40|0);pg(a+80|0);return}function Kf(a,b){a=a|0;b=b|0;var d=0;d=c[a>>2]|0;if((b|0)!=0&(d|0)!=0)Wd(c[d+4>>2]|0,c[a+8>>2]<<10);return}function Lf(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;return yb(a,b,1,c,d,e,16,f,g,0,0)|0}function Mf(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return ld(a,b,c,d,e,0,0,f)|0}function Nf(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;xb(a,b,c,d,e,f,0);return 0}function Of(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return Mb(a,b,c,d,e,f)|0}function Pf(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return vc(a,b,c,d,e,f)|0}function Qf(a){a=a|0;pg(a);Ff(a+40|0);Ff(a+80|0);return}function Rf(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return dd(a,b,c,d,e,0,f)|0}function Sf(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return Ta(a,b,c,d,e,0,0,f)|0}function Tf(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return zb(a,b,c,d,e,0)|0}function Uf(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;Nf(a,b,c,d,e,f)|0;return 0}function Vf(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return Vd(a,b,c,d,e)|0}function Wf(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return yb(a,b,1,c,d,e,16,0,32,f,128)|0}function Xf(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return Tc(a,b,c,d,e,0,0,f)|0}function Yf(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return $c(a,b,c,d,e,f)|0}function Zf(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return Pf(a,b,c,d,e,f)|0}function _f(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return Mf(a,b,c,d,e,f)|0}function $f(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return Tf(a,b,c,d,e)|0}function ag(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return qc(a,b,c,d,e,f)|0}function bg(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return le(a,b,c,d,e)|0}function cg(a,b){a=a|0;b=b|0;b=qb(34193,b&255,65)|0;c[a>>2]=(b|0)==0?0:b-34193|0;return ((b|0)==0)<<31>>31|0}function dg(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return Vf(a,b,c,d,e)|0}function eg(a,b){a=a|0;b=b|0;qe(a)|0;if(b|0)Ia(a,34340,34,0)|0;return}function fg(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return Yf(a,b,c,d,e,f)|0}function gg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;d=b-d-(c>>>0>a>>>0|0)>>>0;return (D=d,a-c>>>0|0)|0}function hg(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;return oc(a,b,c,d,e,f)|0}function ig(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Fg(a,b,c,d)|0}function jg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return (D=b+d+(a+c>>>0>>>0<a>>>0|0)>>>0,a+c>>>0|0)|0}function kg(b,c){b=b|0;c=c|0;a[b+3>>0]=c;a[b+2>>0]=c>>>8;a[b+1>>0]=c>>>16;a[b>>0]=c>>>24;return}function lg(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return Hd(a,b,c,d,e)|0}function mg(b){b=b|0;if(a[b+356>>0]|0)vh(b);c[b+80>>2]=-1;c[b+80+4>>2]=-1;return}function ng(b,c){b=b|0;c=c|0;a[b>>0]=c;a[b+1>>0]=c>>8;a[b+2>>0]=c>>16;a[b+3>>0]=c>>24;return}function og(a,b,c){a=a|0;b=b|0;c=c|0;Df(b,32,c,32,0,0,0)|0;return mh(a,b)|0}function pg(a){a=a|0;var b=0;b=a+40|0;do{c[a>>2]=0;a=a+4|0}while((a|0)<(b|0));return}function qg(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;ya(a,b,c,d,e)|0;return 0}function rg(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return bg(a,b,c,d,e)|0}function sg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;Fb(a,b,c,d);return 0}function tg(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return md(a,b,c,d,e)|0}function ug(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;oe(a,b,c,d)|0;return 0}function vg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;sg(a,b,c,d)|0;return 0}function wg(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;ne(a,b,c,d,e)|0;return 0}function xg(a,b){a=a|0;b=b|0;lf(b,32);return ah(a,b)|0}function yg(a){a=a|0;return (d[a+2>>0]|0)<<8|(d[a+3>>0]|0)|(d[a+1>>0]|0)<<16|(d[a>>0]|0)<<24|0}function zg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return ig(a,b,c,d)|0}function Ag(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;Pa(a,b,c,d)|0;return 0}function Bg(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return ib(a,b,c,d,e)|0}function Cg(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return Dd(a,b,c,d,e)|0}function Dg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;Ia(a,b,c,d)|0;return 0}function Eg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Le(a,b,c,d)|0}function Fg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;Qa(a,b,c,d);return 0}function Gg(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return od(a,b,c,d,e)|0}function Hg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Kc(a,b,c,d)|0}function Ig(a,b){a=a|0;b=b|0;ng(a+12|0,(Vg(a+12|0)|0)+b|0);return}function Jg(a,b,c){a=a|0;b=b|0;c=c|0;return _c(a,b,c)|0}function Kg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;Dg(a,b,c,d)|0;return 0}function Lg(a,b,c){a=a|0;b=b|0;c=c|0;tg(a,b,0,35129,c)|0;return}function Mg(a,b){a=a|0;b=b|0;D=c[a+-64+(b<<7)+4>>2]|0;return c[a+-64+(b<<7)>>2]|0}function Ng(a,b,c){a=a|0;b=b|0;c=c|0;return Gd(a,b,c)|0}function Og(b,c){b=b|0;c=c|0;b=Lb(b,c)|0;return ((a[b>>0]|0)==(c&255)<<24>>24?b:0)|0}function Pg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;Ea(a,b,c,d,12);return 0}function Qg(a){a=a|0;a=Cf(a<<24>>24|0,((a<<24>>24|0)<0)<<31>>31|0,63)|0;return a&255|0}function Rg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;Ea(a,b,c,d,8);return 0}function Sg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;Ea(a,b,c,d,20);return 0}function Tg(a,b,c){a=a|0;b=b|0;c=c|0;tb(a,b,c)|0;return 0}function Ug(a,b,c){a=a|0;b=b|0;c=c|0;Zc(a,b,c)|0;return 0}function Vg(a){a=a|0;return d[a>>0]|d[a+1>>0]<<8|d[a+2>>0]<<16|d[a+3>>0]<<24|0}function Wg(a,b,c){a=a|0;b=b|0;c=c|0;return pe(a,b,c)|0}function Xg(a,b,c){a=a|0;b=b|0;c=c|0;return gf(a,b,c)|0}function Yg(a){a=a|0;var b=0;b=l;l=l+a|0;l=l+15&-16;return b|0}function Zg(b){b=b|0;a[b>>0]=0;a[b+1>>0]=0;a[b+2>>0]=0;a[b+3>>0]=0;return}function _g(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;he(a,b,c,d)|0;return 0}function $g(a){a=a|0;c[a>>2]=0;c[a+4>>2]=0;c[a+8>>2]=0;c[a+12>>2]=0;return}function ah(a,b){a=a|0;b=b|0;return Cc(a,b)|0}function bh(a,b){a=a|0;b=b|0;return oh(a,b)|0}function ch(a,b){a=a|0;b=b|0;return sh(a,b)|0}function dh(a){a=a|0;var b=0;b=c[a>>2]|0;if(b|0)va(b);qh(a);return}function eh(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Da(a,b,c,d,0)|0}function fh(a,b,c){a=a|0;b=b|0;c=c|0;return Sd(a,b,c)|0}function gh(a,b){a=a|0;b=b|0;lf(b,32);return mh(a,b)|0}function hh(a){a=a|0;ng(a+12|0,~(Vg(a+12|0)|0));return}function ih(a,b){a=a|0;b=b|0;return xg(a,b)|0}function jh(a){a=a|0;var b=0;b=c[a>>2]|0;if(b|0)va(b);va(a);return}function kh(a,b){a=a|0;b=b|0;return bh(a,b)|0}function lh(a,b){a=a|0;b=b|0;Id(a|0,b+32|0,32)|0;return 0}function mh(a,b){a=a|0;b=b|0;return ah(a,b)|0}function nh(a,b){a=a|0;b=b|0;return ch(a,b)|0}function oh(a,b){a=a|0;b=b|0;Za(a,b);return 0}function ph(a,b){a=a|0;b=b|0;if(!o){o=a;p=b}}function qh(a){a=a|0;c[a+4>>2]=0;c[a>>2]=0;c[a+8>>2]=0;return}function rh(a,b){a=a|0;b=b|0;Id(a|0,b|0,32)|0;return 0}function sh(a,b){a=a|0;b=b|0;fc(a,b);return 0}function th(a,b){a=a|0;b=b|0;Ee(a,b)|0;return 0}function uh(a,b,c){a=a|0;b=b|0;c=c|0;return mb(a,b,c)|0}function vh(a){a=a|0;c[a+88>>2]=-1;c[a+88+4>>2]=-1;return}function wh(a,b){a=a|0;b=b|0;return ((a|0)!=0|(b|0)!=0)&1|0}function xh(a,b){a=a|0;b=b|0;return (((b^a)&255)+-1|0)>>>31&255|0}function yh(a,b){a=a|0;b=b|0;jb(a|0,b|0,1024)|0;return}function zh(a){a=a|0;qe(a)|0;return 0}function Ah(a,b){a=a|0;b=b|0;l=a;m=b}function Bh(a,b){a=a|0;b=b|0;return a>>>(32-b|0)|a<<b|0}function Ch(a){a=a|0;zh(a)|0;return 0}function Dh(){rf();return}function Eh(a,b){a=a|0;b=b|0;return a<<32-b|a>>>b|0}function Fh(a){a=a|0;return mf(a,(yc(a)|0)+1|0)|0}function Gh(a){a=a|0;lf(a,16);return}function Hh(){return 1073741824}function Ih(a){a=a|0;Tb(a|0,0,1024)|0;return}function Jh(){return 524288}function Kh(a){a=a|0;lf(a,32);return}function Lh(){return 16777216}function Mh(a){a=a|0;qh(a);return}function Nh(a){a=a|0;dh(a);return}function Oh(){return 32768}function Ph(){return 34258}function Qh(){return $(0)|0}function Rh(){return 102}function Sh(){ea(1);return}function Th(){return 33554432}function Uh(){return 1408}function Vh(){return 536870912}function Wh(){return 12}function Xh(){return 134217728}function Yh(){return -2147483648}function Zh(){return 34383}function _h(){return 416}function $h(a){a=a|0;l=a}function ai(){return 34129}function bi(a){a=a|0;D=a}function ci(){return 34262}function di(){return 6}function ei(){return 256}function fi(){return 104}function gi(){return 384}function hi(){return 35336}function ii(){return 34290}function ji(){return 34273}function ki(){return 8192}function li(){return 4}function mi(){return 9}function ni(){return 34374}function oi(){return 34175}function pi(){return 34185}function qi(){return 3}function ri(){return 35199}function si(){return 34300}function ti(){return 1}function ui(){return 33908}function vi(){return 33484}function wi(){return 208}function xi(){return 128}function yi(){return -1}function zi(){return 34107}function Ai(){return 33498}function Bi(){return 34115}function Ci(){return 8}function Di(){return 24}function Ei(){return D|0}function Fi(){return 48}function Gi(){return 16}function Hi(){return l|0}function Ii(){return 64}function Ji(){return 32}function Ki(){return 0}

// EMSCRIPTEN_END_FUNCS
return{_crypto_onetimeauth_poly1305_init:ch,_crypto_hash_sha512_init:qe,_crypto_pwhash_scryptsalsa208sha256:Yb,_crypto_scalarmult_primitive:ci,_crypto_scalarmult_base:mh,_crypto_auth_bytes:Ji,_crypto_stream_chacha20_keybytes:Ji,_crypto_aead_chacha20poly1305_decrypt_detached:Db,_crypto_kdf_blake2b_bytes_min:Gi,_crypto_box_curve25519xchacha20poly1305_open_easy_afternm:wd,_crypto_generichash_blake2b_keybytes_max:Ii,_crypto_box_beforenmbytes:Ji,_crypto_stream_salsa208:hb,___udivmoddi4:Da,_crypto_sign_ed25519_sk_to_curve25519:ad,_crypto_stream_chacha20_ietf_xor_ic:tf,_crypto_secretbox_xsalsa20poly1305_open:vc,_crypto_box_zerobytes:Ji,_crypto_secretbox_xchacha20poly1305_open_detached:ab,_crypto_stream_salsa208_keybytes:Ji,_crypto_hash_sha512_bytes:Ii,_crypto_verify_32:Re,_crypto_pwhash_scryptsalsa208sha256_bytes_max:yi,_crypto_kx_client_session_keys:Sb,_crypto_sign_primitive:si,_crypto_scalarmult_curve25519_bytes:Ji,_crypto_pwhash_scryptsalsa208sha256_saltbytes:Ji,_crypto_pwhash_argon2i_str_verify:Le,_crypto_box_curve25519xchacha20poly1305_secretkeybytes:Ji,_crypto_scalarmult_curve25519_base:ah,_crypto_box_detached_afternm:uf,_crypto_stream_salsa20_xor_ic:jf,_crypto_auth_hmacsha256_init:ub,_crypto_stream_chacha20_ietf_xor:Rf,_crypto_auth_hmacsha512256_final:fe,_crypto_stream_aes128ctr_xor_afternm:ia,_sodium_library_version_major:mi,_crypto_kdf_blake2b_derive_from_key:Mb,_crypto_box_curve25519xsalsa20poly1305_keypair:xg,_crypto_hash_sha256_init:xd,_crypto_stream_xsalsa20_noncebytes:Di,_crypto_scalarmult_curve25519_scalarbytes:Ji,_crypto_verify_64:Qe,_crypto_secretbox_xchacha20poly1305_keybytes:Ji,_crypto_box_curve25519xchacha20poly1305_keypair:xg,_crypto_box_curve25519xsalsa20poly1305_open:id,_crypto_pwhash_memlimit_sensitive:Vh,_crypto_box_boxzerobytes:Gi,_crypto_kdf_blake2b_keybytes:Ji,_crypto_hash_sha512_update:Ia,_crypto_core_hchacha20:Ha,_crypto_pwhash_bytes_min:Gi,_crypto_secretbox_open:Pf,_crypto_auth_hmacsha256_final:ue,_crypto_verify_16:Se,_crypto_stream_aes128ctr_xor:Cd,_crypto_pwhash_scryptsalsa208sha256_memlimit_max:yi,_crypto_pwhash_scryptsalsa208sha256_ll:hd,_crypto_stream_salsa208_xor:Xa,_crypto_secretbox_xsalsa20poly1305_keygen:Kh,_crypto_pwhash_argon2i_bytes_max:yi,_crypto_box_curve25519xchacha20poly1305_easy_afternm:Rd,_crypto_onetimeauth_poly1305_update:ig,_crypto_pwhash_memlimit_max:Yh,_crypto_verify_64_bytes:Ii,_crypto_onetimeauth_poly1305_keygen:Kh,_crypto_generichash_blake2b_keygen:Kh,_crypto_pwhash_argon2i_strprefix:oi,_crypto_auth_hmacsha256_update:Ag,_crypto_aead_xchacha20poly1305_ietf_encrypt:Nc,_crypto_pwhash_scryptsalsa208sha256_strbytes:Rh,_crypto_stream_xsalsa20_keybytes:Ji,_crypto_generichash_keygen:Kh,_crypto_pwhash_argon2i_str:cc,_crypto_box_sealbytes:Fi,_crypto_core_hchacha20_constbytes:Gi,_crypto_secretbox_boxzerobytes:Gi,_crypto_aead_chacha20poly1305_ietf_keygen:Kh,_crypto_stream_chacha20:Gg,_crypto_box_open_afternm:Zf,_crypto_pwhash_opslimit_moderate:di,_crypto_box_macbytes:Gi,_randombytes_seedbytes:Ji,_crypto_generichash_primitive:zi,_crypto_sign_ed25519_keypair:Ee,_crypto_sign_ed25519ph_statebytes:wi,_crypto_aead_xchacha20poly1305_ietf_keybytes:Ji,_crypto_sign_ed25519_verify_detached:Tf,_crypto_auth_primitive:vi,_crypto_core_salsa2012_keybytes:Ji,_malloc:ma,_crypto_stream_noncebytes:Di,_crypto_generichash_keybytes_max:Ii,_crypto_secretbox_xsalsa20poly1305_keybytes:Ji,_crypto_pwhash_saltbytes:Gi,_crypto_secretbox_noncebytes:Di,_crypto_secretbox_xsalsa20poly1305_macbytes:Gi,_crypto_pwhash_argon2i_opslimit_max:yi,_crypto_auth_hmacsha512_bytes:Ii,_crypto_generichash_keybytes:Ji,_crypto_sign_publickeybytes:Ji,_crypto_pwhash_argon2i_memlimit_moderate:Xh,_crypto_generichash_blake2b:Wc,_crypto_core_hchacha20_keybytes:Ji,___uremdi3:Te,_crypto_pwhash_argon2i_opslimit_moderate:di,_randombytes_implementation_name:Zh,_crypto_stream:Cg,_crypto_stream_xchacha20_noncebytes:Di,_crypto_aead_chacha20poly1305_ietf_abytes:Gi,_crypto_hash_sha512_statebytes:wi,_crypto_secretbox_primitive:ji,_crypto_verify_32_bytes:Ji,_crypto_kdf_keygen:Kh,_randombytes_buf:lf,_crypto_stream_chacha20_ietf_keygen:Kh,_crypto_stream_chacha20_keygen:Kh,_crypto_box_easy:we,_crypto_hash_sha256:ie,_crypto_sign_ed25519_seedbytes:Ji,_crypto_pwhash_alg_argon2i13:ti,_crypto_pwhash_scryptsalsa208sha256_memlimit_min:Lh,_crypto_pwhash_opslimit_min:qi,_crypto_pwhash_argon2i_memlimit_max:Yh,_crypto_kdf_blake2b_bytes_max:Ii,_crypto_generichash_bytes_max:Ii,_crypto_stream_chacha20_ietf_noncebytes:Wh,_crypto_pwhash_scryptsalsa208sha256_memlimit_sensitive:Hh,_crypto_box_curve25519xchacha20poly1305_open_easy:vd,_crypto_box_beforenm:Ng,_crypto_box_curve25519xsalsa20poly1305_afternm:Yf,_crypto_sign_statebytes:wi,_crypto_sign_open:ag,_crypto_box_seed_keypair:Jg,_crypto_auth_hmacsha512_init:tb,_crypto_sign_ed25519_sk_to_pk:lh,_crypto_scalarmult_curve25519:Sd,_crypto_box_open_easy:Td,_crypto_auth_hmacsha512:me,_crypto_stream_keygen:Kh,_crypto_stream_aes128ctr_keybytes:Gi,_crypto_auth_hmacsha512256_keybytes:Ji,_crypto_aead_chacha20poly1305_keybytes:Ji,_free:va,_crypto_core_hsalsa20_keybytes:Ji,_crypto_box_curve25519xchacha20poly1305_seedbytes:Ji,_crypto_onetimeauth_poly1305_keybytes:Ji,_crypto_sign_ed25519_secretkeybytes:Ii,_crypto_kdf_blake2b_contextbytes:Ci,_crypto_stream_salsa2012:gb,_crypto_sign_seedbytes:Ji,_crypto_box_curve25519xchacha20poly1305_beforenmbytes:Ji,_randombytes_random:Qh,_crypto_sign_ed25519ph_update:Dg,_crypto_auth_hmacsha256_keygen:Kh,_crypto_auth_hmacsha256_statebytes:wi,_randombytes_buf_deterministic:Lg,_crypto_aead_chacha20poly1305_encrypt_detached:Ob,_crypto_stream_xsalsa20_keygen:Kh,_crypto_hash_primitive:ui,_crypto_sign_ed25519_pk_to_curve25519:pc,_crypto_shorthash_siphash24:ya,_crypto_box_curve25519xsalsa20poly1305_macbytes:Gi,_crypto_sign_ed25519_bytes:Ii,_crypto_sign_ed25519:oc,_crypto_core_salsa20_constbytes:Gi,_crypto_pwhash_argon2i_opslimit_interactive:li,_crypto_pwhash_argon2i_saltbytes:Gi,_crypto_box_curve25519xchacha20poly1305_open_detached_afternm:Ne,_crypto_box_curve25519xsalsa20poly1305_beforenmbytes:Ji,_crypto_stream_xchacha20_keygen:Kh,_crypto_onetimeauth:rg,_crypto_stream_xchacha20_xor:Hf,_crypto_shorthash_bytes:Ci,_crypto_sign_final_create:ug,_crypto_kx_secretkeybytes:Ji,_crypto_secretbox_zerobytes:Ji,_crypto_stream_xsalsa20_xor:Mf,_crypto_generichash_blake2b_saltbytes:Gi,_crypto_box_open_detached:qd,_crypto_kx_seedbytes:Ji,_crypto_stream_chacha20_noncebytes:Ci,_crypto_secretbox_xsalsa20poly1305_zerobytes:Ji,_crypto_box_curve25519xchacha20poly1305_open_detached:Qc,_crypto_generichash_blake2b_keybytes:Ji,_crypto_box_curve25519xchacha20poly1305_easy:Qd,_crypto_pwhash_argon2i_bytes_min:Gi,_crypto_pwhash_scryptsalsa208sha256_str:Pb,_crypto_hash:_g,_i64Subtract:gg,_crypto_box_seedbytes:Ji,_crypto_generichash_blake2b_bytes_min:Gi,_crypto_box_open_detached_afternm:qf,_crypto_generichash_blake2b_statebytes:gi,_crypto_sign_ed25519ph_final_create:oe,_crypto_aead_chacha20poly1305_ietf_decrypt_detached:pb,_crypto_auth_hmacsha512256_bytes:Ji,_crypto_auth_hmacsha512_update:Dg,_crypto_auth_hmacsha256:ke,_crypto_box_keypair:ih,_crypto_hash_sha256_bytes:Ji,___udivdi3:eh,_crypto_pwhash_argon2i_passwd_max:yi,_sodium_init:Bf,_crypto_secretbox_macbytes:Gi,_crypto_aead_xchacha20poly1305_ietf_npubbytes:Di,_bitshift64Shl:zf,_crypto_pwhash_argon2i_opslimit_min:qi,_crypto_shorthash_siphash24_keybytes:Gi,_crypto_core_salsa20_outputbytes:Ii,___muldi3:ef,_crypto_core_salsa2012_constbytes:Gi,_crypto_kx_seed_keypair:og,_crypto_box_curve25519xchacha20poly1305_detached_afternm:Ue,_crypto_box_curve25519xsalsa20poly1305:kd,_crypto_aead_chacha20poly1305_nsecbytes:Ki,_sodium_library_minimal:Ki,_crypto_aead_xchacha20poly1305_ietf_nsecbytes:Ki,_crypto_pwhash_argon2i_strbytes:xi,_crypto_box_curve25519xsalsa20poly1305_publickeybytes:Ji,_crypto_generichash_blake2b_salt_personal:Ic,_crypto_stream_aes128ctr_beforenmbytes:Uh,_crypto_kdf_derive_from_key:Of,_crypto_secretbox_xsalsa20poly1305_noncebytes:Di,_crypto_pwhash_scryptsalsa208sha256_opslimit_interactive:Jh,_crypto_pwhash_argon2i_memlimit_interactive:Th,_crypto_hash_sha256_final:Je,_crypto_stream_keybytes:Ji,_crypto_pwhash_memlimit_min:ki,_crypto_aead_chacha20poly1305_ietf_npubbytes:Wh,_crypto_stream_salsa208_noncebytes:Ci,_sodium_library_version_minor:li,_crypto_onetimeauth_bytes:Gi,_sodium_version_string:ri,_crypto_box_open:sf,_crypto_secretbox_xchacha20poly1305_open_easy:zd,_crypto_auth_hmacsha512_keygen:Kh,_crypto_sign_ed25519_open:qc,_crypto_stream_chacha20_ietf_keybytes:Ji,_crypto_box_noncebytes:Di,_crypto_core_hchacha20_outputbytes:Ji,_crypto_stream_salsa2012_xor:Wa,_crypto_onetimeauth_keygen:Kh,_crypto_pwhash_strbytes:xi,_crypto_auth_hmacsha512256_update:Kg,_crypto_core_salsa208_outputbytes:Ii,_crypto_onetimeauth_poly1305:bg,_crypto_secretbox_xchacha20poly1305_macbytes:Gi,_crypto_kdf_bytes_min:Gi,_crypto_sign_ed25519_sk_to_seed:rh,_crypto_pwhash_scryptsalsa208sha256_memlimit_interactive:Lh,_crypto_stream_xsalsa20:Dd,_crypto_box_open_easy_afternm:Xd,_crypto_box_curve25519xsalsa20poly1305_seedbytes:Ji,_crypto_stream_salsa20_keybytes:Ji,_crypto_kdf_primitive:zi,_crypto_sign_ed25519ph_final_verify:pe,_crypto_stream_aes128ctr:be,_crypto_shorthash:qg,_crypto_auth_keybytes:Ji,_crypto_box_curve25519xsalsa20poly1305_open_afternm:Pf,_crypto_aead_chacha20poly1305_npubbytes:Ci,_crypto_aead_xchacha20poly1305_ietf_abytes:Gi,_crypto_onetimeauth_poly1305_final:bh,_crypto_onetimeauth_poly1305_bytes:Gi,_crypto_box_curve25519xsalsa20poly1305_seed_keypair:_c,_crypto_box_primitive:Ai,_crypto_pwhash_str:Gf,_crypto_auth_hmacsha512_keybytes:Ji,_crypto_auth:wg,_crypto_box_detached:td,_crypto_pwhash_scryptsalsa208sha256_bytes_min:Gi,_crypto_core_salsa20_keybytes:Ji,_crypto_box_afternm:fg,_crypto_core_salsa208_constbytes:Gi,_crypto_onetimeauth_primitive:ai,_crypto_pwhash_scryptsalsa208sha256_str_verify:zc,_randombytes_stir:Sh,_crypto_stream_xchacha20_xor_ic:pd,_crypto_pwhash_scryptsalsa208sha256_passwd_min:Ki,_crypto_stream_chacha20_ietf:tg,_crypto_generichash:Df,_crypto_core_hsalsa20_outputbytes:Ji,_crypto_pwhash_opslimit_interactive:li,_crypto_stream_aes128ctr_beforenm:ha,_crypto_box_curve25519xsalsa20poly1305_noncebytes:Di,_crypto_stream_salsa2012_noncebytes:Ci,_crypto_core_salsa208_keybytes:Ji,_crypto_aead_chacha20poly1305_ietf_decrypt:Fc,_crypto_auth_hmacsha512256_init:Tg,_crypto_kx_server_session_keys:Rb,_crypto_onetimeauth_poly1305_verify:Vf,_crypto_auth_hmacsha512_final:te,_crypto_auth_hmacsha512256_verify:Hd,_crypto_box_secretkeybytes:Ji,_crypto_stream_salsa2012_keygen:Kh,_crypto_onetimeauth_update:zg,_crypto_core_salsa20:Sg,_crypto_pwhash_memlimit_interactive:Th,_crypto_scalarmult_bytes:Ji,_crypto_secretbox_detached:Ya,_crypto_stream_xor:_f,_crypto_secretbox_xchacha20poly1305_easy:je,_crypto_secretbox_easy:ze,_crypto_aead_xchacha20poly1305_ietf_decrypt_detached:bc,_crypto_stream_salsa20:Bg,_sodium_bin2hex:Hc,_crypto_auth_hmacsha512_statebytes:_h,_crypto_pwhash_argon2i_opslimit_sensitive:Ci,_crypto_generichash_blake2b_bytes_max:Ii,_crypto_hash_sha256_update:Pa,_crypto_core_hsalsa20_constbytes:Gi,_crypto_box_easy_afternm:xe,_crypto_stream_aes128ctr_noncebytes:Gi,_crypto_pwhash_memlimit_moderate:Xh,_crypto_core_salsa20_inputbytes:Gi,_crypto_box_publickeybytes:Ji,_crypto_sign_secretkeybytes:Ii,___muldsi3:Jd,_crypto_scalarmult_scalarbytes:Ji,_crypto_stream_xsalsa20_xor_ic:ld,_crypto_kx_sessionkeybytes:Ji,_crypto_aead_chacha20poly1305_decrypt:Gc,_crypto_sign:hg,_crypto_pwhash_passwd_max:yi,_crypto_pwhash_scryptsalsa208sha256_opslimit_min:Oh,_sodium_hex2bin:ob,_crypto_pwhash_argon2i_alg_argon2i13:ti,_crypto_secretbox_keybytes:Ji,_randombytes:Ef,_crypto_hash_bytes:Ii,_crypto_stream_salsa20_keygen:Kh,_crypto_hash_sha256_statebytes:fi,_crypto_pwhash_argon2i_passwd_min:Ki,_crypto_pwhash_opslimit_sensitive:Ci,_crypto_sign_init:Ch,_crypto_generichash_blake2b_personalbytes:Gi,_crypto_stream_chacha20_xor_ic:nf,_crypto_sign_verify_detached:$f,_crypto_onetimeauth_verify:dg,_crypto_sign_ed25519_detached:Nf,_crypto_generichash_init:Hg,_i64Add:jg,_crypto_sign_bytes:Ii,_crypto_generichash_update:vg,_crypto_scalarmult:fh,_crypto_sign_detached:Uf,_crypto_generichash_blake2b_update:sg,_crypto_box_curve25519xsalsa20poly1305_beforenm:Gd,_crypto_generichash_blake2b_bytes:Ji,_crypto_generichash_final:Xg,_crypto_box_curve25519xchacha20poly1305_noncebytes:Di,_randombytes_uniform:Me,_crypto_sign_seed_keypair:Ug,_crypto_shorthash_keygen:Gh,_crypto_onetimeauth_init:nh,_crypto_generichash_bytes:Ji,_crypto_stream_salsa20_xor:Sf,_crypto_auth_hmacsha512_verify:Od,_crypto_generichash_blake2b_keybytes_min:Gi,_bitshift64Lshr:Cf,_crypto_kx_publickeybytes:Ji,_crypto_pwhash_bytes_max:yi,_crypto_aead_chacha20poly1305_ietf_keybytes:Ji,_crypto_aead_chacha20poly1305_ietf_encrypt_detached:Cb,_crypto_aead_chacha20poly1305_abytes:Gi,_sbrk:nd,_crypto_box_curve25519xchacha20poly1305_beforenm:Ed,_memcpy:jb,_crypto_pwhash:Fd,_crypto_auth_hmacsha512256:ne,_crypto_secretbox_xsalsa20poly1305:$c,_crypto_verify_16_bytes:Gi,_crypto_stream_salsa208_keygen:Kh,_emscripten_get_global_libc:hi,_crypto_shorthash_siphashx24_bytes:Gi,_crypto_generichash_blake2b_final:gf,_crypto_generichash_blake2b_init_salt_personal:Bc,_crypto_box_seal:Ac,_crypto_aead_xchacha20poly1305_ietf_keygen:Kh,_crypto_kx_keypair:gh,_crypto_pwhash_alg_default:ti,_crypto_box:Af,_crypto_stream_primitive:ni,_crypto_secretbox_xsalsa20poly1305_boxzerobytes:Gi,_crypto_pwhash_str_verify:Eg,_crypto_generichash_keybytes_min:Gi,_crypto_generichash_statebytes:gi,_crypto_onetimeauth_poly1305_statebytes:ei,_crypto_sign_final_verify:Wg,_crypto_pwhash_strprefix:oi,_crypto_secretbox_keygen:Kh,_crypto_secretbox_xchacha20poly1305_noncebytes:Di,_crypto_hash_sha512:he,_llvm_cttz_i32:ae,_crypto_sign_ed25519_publickeybytes:Ji,_crypto_box_curve25519xchacha20poly1305_detached:Sc,_crypto_aead_chacha20poly1305_ietf_nsecbytes:Ki,_crypto_aead_chacha20poly1305_ietf_encrypt:Oc,_crypto_generichash_blake2b_init:Kc,_randombytes_close:Ki,_crypto_pwhash_primitive:pi,_crypto_onetimeauth_keybytes:Ji,_crypto_pwhash_argon2i:ic,_crypto_stream_aes128ctr_afternm:ja,_crypto_kdf_keybytes:Ji,_crypto_aead_chacha20poly1305_encrypt:Rc,_crypto_shorthash_siphash24_bytes:Ci,_crypto_core_salsa208:Rg,_crypto_pwhash_opslimit_max:yi,_crypto_auth_verify:lg,_crypto_auth_hmacsha512256_keygen:Kh,_memset:Tb,_crypto_core_salsa2012_inputbytes:Gi,_crypto_pwhash_argon2i_memlimit_sensitive:Vh,_crypto_kx_primitive:Bi,_crypto_stream_salsa2012_keybytes:Ji,_crypto_aead_xchacha20poly1305_ietf_decrypt:Ec,_crypto_pwhash_scryptsalsa208sha256_strprefix:Ph,_crypto_core_hchacha20_inputbytes:Gi,_crypto_auth_keygen:Kh,_crypto_secretbox:Yf,_crypto_aead_xchacha20poly1305_ietf_encrypt_detached:$b,_crypto_pwhash_scryptsalsa208sha256_passwd_max:yi,_crypto_auth_hmacsha256_bytes:Ji,_crypto_auth_hmacsha256_verify:Pd,_crypto_sign_keypair:th,_crypto_stream_xchacha20:Zd,_crypto_onetimeauth_statebytes:ei,_crypto_sign_ed25519ph_init:zh,_crypto_stream_salsa20_noncebytes:Ci,_crypto_shorthash_keybytes:Gi,_crypto_aead_chacha20poly1305_keygen:Kh,_crypto_shorthash_siphashx24:xa,_memmove:Id,_crypto_hash_sha512_final:Fe,_crypto_box_curve25519xsalsa20poly1305_zerobytes:Ji,_crypto_shorthash_siphashx24_keybytes:Gi,_crypto_pwhash_passwd_min:Ki,_crypto_kdf_bytes_max:Ii,_crypto_box_curve25519xsalsa20poly1305_boxzerobytes:Gi,_crypto_generichash_bytes_min:Gi,_crypto_core_salsa2012_outputbytes:Ii,_crypto_auth_hmacsha256_keybytes:Ji,_crypto_core_salsa208_inputbytes:Gi,_crypto_pwhash_scryptsalsa208sha256_opslimit_max:yi,_crypto_sign_update:Kg,_crypto_secretbox_xchacha20poly1305_detached:Ua,_crypto_sign_ed25519_seed_keypair:Zc,_crypto_secretbox_open_detached:db,_crypto_box_curve25519xchacha20poly1305_seed_keypair:_c,_crypto_pwhash_argon2i_memlimit_min:ki,_crypto_pwhash_scryptsalsa208sha256_opslimit_sensitive:Th,_crypto_box_curve25519xsalsa20poly1305_secretkeybytes:Ji,_crypto_kdf_contextbytes:Ci,_crypto_stream_xchacha20_keybytes:Ji,_crypto_box_seal_open:bd,_crypto_shorthash_primitive:ii,_crypto_core_hsalsa20_inputbytes:Gi,_crypto_onetimeauth_final:kh,_crypto_secretbox_open_easy:_d,_crypto_core_salsa2012:Pg,_crypto_box_curve25519xchacha20poly1305_macbytes:Gi,_crypto_auth_hmacsha512256_statebytes:_h,_bitshift64Ashr:$e,_crypto_box_curve25519xchacha20poly1305_publickeybytes:Ji,_crypto_stream_chacha20_xor:Xf,_crypto_core_hsalsa20:Ka,runPostSets:_e,stackAlloc:Yg,stackSave:Hi,stackRestore:$h,establishStackSpace:Ah,setTempRet0:bi,getTempRet0:Ei,setThrew:ph,stackAlloc:Yg,stackSave:Hi,stackRestore:$h,establishStackSpace:Ah,setThrew:ph,setTempRet0:bi,getTempRet0:Ei}})


// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg,Module.asmLibraryArg,buffer);var _crypto_onetimeauth_poly1305_init=Module["_crypto_onetimeauth_poly1305_init"]=asm["_crypto_onetimeauth_poly1305_init"];var _crypto_hash_sha512_init=Module["_crypto_hash_sha512_init"]=asm["_crypto_hash_sha512_init"];var _crypto_pwhash_scryptsalsa208sha256=Module["_crypto_pwhash_scryptsalsa208sha256"]=asm["_crypto_pwhash_scryptsalsa208sha256"];var _crypto_scalarmult_primitive=Module["_crypto_scalarmult_primitive"]=asm["_crypto_scalarmult_primitive"];var _crypto_scalarmult_base=Module["_crypto_scalarmult_base"]=asm["_crypto_scalarmult_base"];var _crypto_auth_bytes=Module["_crypto_auth_bytes"]=asm["_crypto_auth_bytes"];var _crypto_stream_chacha20_keybytes=Module["_crypto_stream_chacha20_keybytes"]=asm["_crypto_stream_chacha20_keybytes"];var _crypto_aead_chacha20poly1305_decrypt_detached=Module["_crypto_aead_chacha20poly1305_decrypt_detached"]=asm["_crypto_aead_chacha20poly1305_decrypt_detached"];var _crypto_kdf_blake2b_bytes_min=Module["_crypto_kdf_blake2b_bytes_min"]=asm["_crypto_kdf_blake2b_bytes_min"];var _crypto_box_curve25519xchacha20poly1305_open_easy_afternm=Module["_crypto_box_curve25519xchacha20poly1305_open_easy_afternm"]=asm["_crypto_box_curve25519xchacha20poly1305_open_easy_afternm"];var _crypto_generichash_blake2b_keybytes_max=Module["_crypto_generichash_blake2b_keybytes_max"]=asm["_crypto_generichash_blake2b_keybytes_max"];var _crypto_box_beforenmbytes=Module["_crypto_box_beforenmbytes"]=asm["_crypto_box_beforenmbytes"];var _crypto_stream_salsa208=Module["_crypto_stream_salsa208"]=asm["_crypto_stream_salsa208"];var ___udivmoddi4=Module["___udivmoddi4"]=asm["___udivmoddi4"];var _crypto_sign_ed25519_sk_to_curve25519=Module["_crypto_sign_ed25519_sk_to_curve25519"]=asm["_crypto_sign_ed25519_sk_to_curve25519"];var _crypto_stream_chacha20_ietf_xor_ic=Module["_crypto_stream_chacha20_ietf_xor_ic"]=asm["_crypto_stream_chacha20_ietf_xor_ic"];var _crypto_secretbox_xsalsa20poly1305_open=Module["_crypto_secretbox_xsalsa20poly1305_open"]=asm["_crypto_secretbox_xsalsa20poly1305_open"];var _crypto_box_zerobytes=Module["_crypto_box_zerobytes"]=asm["_crypto_box_zerobytes"];var _crypto_secretbox_xchacha20poly1305_open_detached=Module["_crypto_secretbox_xchacha20poly1305_open_detached"]=asm["_crypto_secretbox_xchacha20poly1305_open_detached"];var _crypto_stream_salsa208_keybytes=Module["_crypto_stream_salsa208_keybytes"]=asm["_crypto_stream_salsa208_keybytes"];var _crypto_hash_sha512_bytes=Module["_crypto_hash_sha512_bytes"]=asm["_crypto_hash_sha512_bytes"];var stackSave=Module["stackSave"]=asm["stackSave"];var _crypto_stream_xsalsa20_xor_ic=Module["_crypto_stream_xsalsa20_xor_ic"]=asm["_crypto_stream_xsalsa20_xor_ic"];var _crypto_core_hsalsa20_keybytes=Module["_crypto_core_hsalsa20_keybytes"]=asm["_crypto_core_hsalsa20_keybytes"];var _crypto_sign_primitive=Module["_crypto_sign_primitive"]=asm["_crypto_sign_primitive"];var _crypto_scalarmult_curve25519_bytes=Module["_crypto_scalarmult_curve25519_bytes"]=asm["_crypto_scalarmult_curve25519_bytes"];var _crypto_scalarmult_curve25519_scalarbytes=Module["_crypto_scalarmult_curve25519_scalarbytes"]=asm["_crypto_scalarmult_curve25519_scalarbytes"];var _crypto_pwhash_scryptsalsa208sha256_saltbytes=Module["_crypto_pwhash_scryptsalsa208sha256_saltbytes"]=asm["_crypto_pwhash_scryptsalsa208sha256_saltbytes"];var _crypto_pwhash_argon2i_str_verify=Module["_crypto_pwhash_argon2i_str_verify"]=asm["_crypto_pwhash_argon2i_str_verify"];var _crypto_box_curve25519xchacha20poly1305_secretkeybytes=Module["_crypto_box_curve25519xchacha20poly1305_secretkeybytes"]=asm["_crypto_box_curve25519xchacha20poly1305_secretkeybytes"];var _crypto_auth_hmacsha512_keygen=Module["_crypto_auth_hmacsha512_keygen"]=asm["_crypto_auth_hmacsha512_keygen"];var _crypto_box_detached_afternm=Module["_crypto_box_detached_afternm"]=asm["_crypto_box_detached_afternm"];var _crypto_stream_salsa20_xor_ic=Module["_crypto_stream_salsa20_xor_ic"]=asm["_crypto_stream_salsa20_xor_ic"];var _crypto_auth_hmacsha256_init=Module["_crypto_auth_hmacsha256_init"]=asm["_crypto_auth_hmacsha256_init"];var _crypto_stream_chacha20_ietf_xor=Module["_crypto_stream_chacha20_ietf_xor"]=asm["_crypto_stream_chacha20_ietf_xor"];var _crypto_auth_hmacsha512256_final=Module["_crypto_auth_hmacsha512256_final"]=asm["_crypto_auth_hmacsha512256_final"];var _crypto_stream_aes128ctr_xor_afternm=Module["_crypto_stream_aes128ctr_xor_afternm"]=asm["_crypto_stream_aes128ctr_xor_afternm"];var setThrew=Module["setThrew"]=asm["setThrew"];var _crypto_aead_chacha20poly1305_ietf_nsecbytes=Module["_crypto_aead_chacha20poly1305_ietf_nsecbytes"]=asm["_crypto_aead_chacha20poly1305_ietf_nsecbytes"];var _crypto_kdf_blake2b_derive_from_key=Module["_crypto_kdf_blake2b_derive_from_key"]=asm["_crypto_kdf_blake2b_derive_from_key"];var _crypto_box_curve25519xsalsa20poly1305_keypair=Module["_crypto_box_curve25519xsalsa20poly1305_keypair"]=asm["_crypto_box_curve25519xsalsa20poly1305_keypair"];var _crypto_hash_sha256_init=Module["_crypto_hash_sha256_init"]=asm["_crypto_hash_sha256_init"];var _crypto_stream_xsalsa20_noncebytes=Module["_crypto_stream_xsalsa20_noncebytes"]=asm["_crypto_stream_xsalsa20_noncebytes"];var _crypto_generichash_keybytes_max=Module["_crypto_generichash_keybytes_max"]=asm["_crypto_generichash_keybytes_max"];var _crypto_verify_64=Module["_crypto_verify_64"]=asm["_crypto_verify_64"];var stackAlloc=Module["stackAlloc"]=asm["stackAlloc"];var _crypto_box_curve25519xchacha20poly1305_keypair=Module["_crypto_box_curve25519xchacha20poly1305_keypair"]=asm["_crypto_box_curve25519xchacha20poly1305_keypair"];var _crypto_box_curve25519xsalsa20poly1305_open=Module["_crypto_box_curve25519xsalsa20poly1305_open"]=asm["_crypto_box_curve25519xsalsa20poly1305_open"];var _crypto_pwhash_memlimit_sensitive=Module["_crypto_pwhash_memlimit_sensitive"]=asm["_crypto_pwhash_memlimit_sensitive"];var _crypto_box_boxzerobytes=Module["_crypto_box_boxzerobytes"]=asm["_crypto_box_boxzerobytes"];var _crypto_kdf_blake2b_keybytes=Module["_crypto_kdf_blake2b_keybytes"]=asm["_crypto_kdf_blake2b_keybytes"];var _crypto_hash_sha512_update=Module["_crypto_hash_sha512_update"]=asm["_crypto_hash_sha512_update"];var _crypto_core_hchacha20=Module["_crypto_core_hchacha20"]=asm["_crypto_core_hchacha20"];var _crypto_pwhash_bytes_min=Module["_crypto_pwhash_bytes_min"]=asm["_crypto_pwhash_bytes_min"];var _crypto_secretbox_open=Module["_crypto_secretbox_open"]=asm["_crypto_secretbox_open"];var _crypto_auth_hmacsha256_final=Module["_crypto_auth_hmacsha256_final"]=asm["_crypto_auth_hmacsha256_final"];var _crypto_verify_16=Module["_crypto_verify_16"]=asm["_crypto_verify_16"];var _crypto_stream_aes128ctr_xor=Module["_crypto_stream_aes128ctr_xor"]=asm["_crypto_stream_aes128ctr_xor"];var _crypto_pwhash_scryptsalsa208sha256_memlimit_max=Module["_crypto_pwhash_scryptsalsa208sha256_memlimit_max"]=asm["_crypto_pwhash_scryptsalsa208sha256_memlimit_max"];var _crypto_pwhash_scryptsalsa208sha256_ll=Module["_crypto_pwhash_scryptsalsa208sha256_ll"]=asm["_crypto_pwhash_scryptsalsa208sha256_ll"];var _crypto_stream_salsa208_xor=Module["_crypto_stream_salsa208_xor"]=asm["_crypto_stream_salsa208_xor"];var _crypto_secretbox_xsalsa20poly1305_keygen=Module["_crypto_secretbox_xsalsa20poly1305_keygen"]=asm["_crypto_secretbox_xsalsa20poly1305_keygen"];var _crypto_aead_chacha20poly1305_abytes=Module["_crypto_aead_chacha20poly1305_abytes"]=asm["_crypto_aead_chacha20poly1305_abytes"];var _crypto_pwhash_argon2i_bytes_max=Module["_crypto_pwhash_argon2i_bytes_max"]=asm["_crypto_pwhash_argon2i_bytes_max"];var _crypto_box_curve25519xchacha20poly1305_easy_afternm=Module["_crypto_box_curve25519xchacha20poly1305_easy_afternm"]=asm["_crypto_box_curve25519xchacha20poly1305_easy_afternm"];var _crypto_onetimeauth_poly1305_update=Module["_crypto_onetimeauth_poly1305_update"]=asm["_crypto_onetimeauth_poly1305_update"];var _crypto_pwhash_memlimit_max=Module["_crypto_pwhash_memlimit_max"]=asm["_crypto_pwhash_memlimit_max"];var _crypto_verify_64_bytes=Module["_crypto_verify_64_bytes"]=asm["_crypto_verify_64_bytes"];var _crypto_onetimeauth_poly1305_keygen=Module["_crypto_onetimeauth_poly1305_keygen"]=asm["_crypto_onetimeauth_poly1305_keygen"];var _crypto_generichash_blake2b_keygen=Module["_crypto_generichash_blake2b_keygen"]=asm["_crypto_generichash_blake2b_keygen"];var _crypto_pwhash_argon2i_strprefix=Module["_crypto_pwhash_argon2i_strprefix"]=asm["_crypto_pwhash_argon2i_strprefix"];var _crypto_auth_hmacsha256_update=Module["_crypto_auth_hmacsha256_update"]=asm["_crypto_auth_hmacsha256_update"];var _crypto_aead_xchacha20poly1305_ietf_encrypt=Module["_crypto_aead_xchacha20poly1305_ietf_encrypt"]=asm["_crypto_aead_xchacha20poly1305_ietf_encrypt"];var _crypto_pwhash_scryptsalsa208sha256_strbytes=Module["_crypto_pwhash_scryptsalsa208sha256_strbytes"]=asm["_crypto_pwhash_scryptsalsa208sha256_strbytes"];var _crypto_stream_xsalsa20_keybytes=Module["_crypto_stream_xsalsa20_keybytes"]=asm["_crypto_stream_xsalsa20_keybytes"];var _crypto_generichash_keygen=Module["_crypto_generichash_keygen"]=asm["_crypto_generichash_keygen"];var _crypto_pwhash_argon2i_str=Module["_crypto_pwhash_argon2i_str"]=asm["_crypto_pwhash_argon2i_str"];var _crypto_box_sealbytes=Module["_crypto_box_sealbytes"]=asm["_crypto_box_sealbytes"];var _crypto_onetimeauth=Module["_crypto_onetimeauth"]=asm["_crypto_onetimeauth"];var _crypto_secretbox_boxzerobytes=Module["_crypto_secretbox_boxzerobytes"]=asm["_crypto_secretbox_boxzerobytes"];var _crypto_aead_chacha20poly1305_ietf_keygen=Module["_crypto_aead_chacha20poly1305_ietf_keygen"]=asm["_crypto_aead_chacha20poly1305_ietf_keygen"];var _crypto_stream_chacha20=Module["_crypto_stream_chacha20"]=asm["_crypto_stream_chacha20"];var _crypto_box_open_afternm=Module["_crypto_box_open_afternm"]=asm["_crypto_box_open_afternm"];var _crypto_pwhash_opslimit_moderate=Module["_crypto_pwhash_opslimit_moderate"]=asm["_crypto_pwhash_opslimit_moderate"];var _crypto_box_macbytes=Module["_crypto_box_macbytes"]=asm["_crypto_box_macbytes"];var _crypto_shorthash_bytes=Module["_crypto_shorthash_bytes"]=asm["_crypto_shorthash_bytes"];var _crypto_generichash_primitive=Module["_crypto_generichash_primitive"]=asm["_crypto_generichash_primitive"];var _crypto_sign_ed25519_keypair=Module["_crypto_sign_ed25519_keypair"]=asm["_crypto_sign_ed25519_keypair"];var _crypto_sign_ed25519ph_statebytes=Module["_crypto_sign_ed25519ph_statebytes"]=asm["_crypto_sign_ed25519ph_statebytes"];var _crypto_aead_xchacha20poly1305_ietf_keybytes=Module["_crypto_aead_xchacha20poly1305_ietf_keybytes"]=asm["_crypto_aead_xchacha20poly1305_ietf_keybytes"];var _crypto_auth_primitive=Module["_crypto_auth_primitive"]=asm["_crypto_auth_primitive"];var _crypto_core_salsa2012_keybytes=Module["_crypto_core_salsa2012_keybytes"]=asm["_crypto_core_salsa2012_keybytes"];var _malloc=Module["_malloc"]=asm["_malloc"];var _crypto_stream_noncebytes=Module["_crypto_stream_noncebytes"]=asm["_crypto_stream_noncebytes"];var _crypto_secretbox_xchacha20poly1305_keybytes=Module["_crypto_secretbox_xchacha20poly1305_keybytes"]=asm["_crypto_secretbox_xchacha20poly1305_keybytes"];var _crypto_secretbox_xsalsa20poly1305_keybytes=Module["_crypto_secretbox_xsalsa20poly1305_keybytes"]=asm["_crypto_secretbox_xsalsa20poly1305_keybytes"];var _crypto_pwhash_saltbytes=Module["_crypto_pwhash_saltbytes"]=asm["_crypto_pwhash_saltbytes"];var _crypto_secretbox_noncebytes=Module["_crypto_secretbox_noncebytes"]=asm["_crypto_secretbox_noncebytes"];var _crypto_secretbox_xsalsa20poly1305_macbytes=Module["_crypto_secretbox_xsalsa20poly1305_macbytes"]=asm["_crypto_secretbox_xsalsa20poly1305_macbytes"];var _crypto_pwhash_argon2i_opslimit_max=Module["_crypto_pwhash_argon2i_opslimit_max"]=asm["_crypto_pwhash_argon2i_opslimit_max"];var _crypto_auth_hmacsha512_bytes=Module["_crypto_auth_hmacsha512_bytes"]=asm["_crypto_auth_hmacsha512_bytes"];var _crypto_generichash_keybytes=Module["_crypto_generichash_keybytes"]=asm["_crypto_generichash_keybytes"];var _crypto_sign_publickeybytes=Module["_crypto_sign_publickeybytes"]=asm["_crypto_sign_publickeybytes"];var _crypto_pwhash_argon2i_memlimit_moderate=Module["_crypto_pwhash_argon2i_memlimit_moderate"]=asm["_crypto_pwhash_argon2i_memlimit_moderate"];var _crypto_generichash_blake2b=Module["_crypto_generichash_blake2b"]=asm["_crypto_generichash_blake2b"];var _crypto_core_hchacha20_keybytes=Module["_crypto_core_hchacha20_keybytes"]=asm["_crypto_core_hchacha20_keybytes"];var ___uremdi3=Module["___uremdi3"]=asm["___uremdi3"];var _crypto_pwhash_argon2i_opslimit_moderate=Module["_crypto_pwhash_argon2i_opslimit_moderate"]=asm["_crypto_pwhash_argon2i_opslimit_moderate"];var _randombytes_implementation_name=Module["_randombytes_implementation_name"]=asm["_randombytes_implementation_name"];var _crypto_stream_xchacha20_noncebytes=Module["_crypto_stream_xchacha20_noncebytes"]=asm["_crypto_stream_xchacha20_noncebytes"];var _crypto_sign_ed25519_verify_detached=Module["_crypto_sign_ed25519_verify_detached"]=asm["_crypto_sign_ed25519_verify_detached"];var _crypto_hash_sha512_statebytes=Module["_crypto_hash_sha512_statebytes"]=asm["_crypto_hash_sha512_statebytes"];var _crypto_secretbox_zerobytes=Module["_crypto_secretbox_zerobytes"]=asm["_crypto_secretbox_zerobytes"];var _crypto_verify_32_bytes=Module["_crypto_verify_32_bytes"]=asm["_crypto_verify_32_bytes"];var stackRestore=Module["stackRestore"]=asm["stackRestore"];var _crypto_kdf_keygen=Module["_crypto_kdf_keygen"]=asm["_crypto_kdf_keygen"];var _crypto_stream_xsalsa20_xor=Module["_crypto_stream_xsalsa20_xor"]=asm["_crypto_stream_xsalsa20_xor"];var _crypto_stream_chacha20_ietf_keygen=Module["_crypto_stream_chacha20_ietf_keygen"]=asm["_crypto_stream_chacha20_ietf_keygen"];var _crypto_stream_chacha20_keygen=Module["_crypto_stream_chacha20_keygen"]=asm["_crypto_stream_chacha20_keygen"];var _crypto_box_easy=Module["_crypto_box_easy"]=asm["_crypto_box_easy"];var _crypto_hash_sha256=Module["_crypto_hash_sha256"]=asm["_crypto_hash_sha256"];var _crypto_sign_ed25519_seedbytes=Module["_crypto_sign_ed25519_seedbytes"]=asm["_crypto_sign_ed25519_seedbytes"];var _crypto_pwhash_alg_argon2i13=Module["_crypto_pwhash_alg_argon2i13"]=asm["_crypto_pwhash_alg_argon2i13"];var _crypto_shorthash_siphash24_bytes=Module["_crypto_shorthash_siphash24_bytes"]=asm["_crypto_shorthash_siphash24_bytes"];var _crypto_pwhash_opslimit_min=Module["_crypto_pwhash_opslimit_min"]=asm["_crypto_pwhash_opslimit_min"];var _crypto_box_curve25519xsalsa20poly1305_publickeybytes=Module["_crypto_box_curve25519xsalsa20poly1305_publickeybytes"]=asm["_crypto_box_curve25519xsalsa20poly1305_publickeybytes"];var _crypto_kdf_blake2b_bytes_max=Module["_crypto_kdf_blake2b_bytes_max"]=asm["_crypto_kdf_blake2b_bytes_max"];var _crypto_generichash_bytes_max=Module["_crypto_generichash_bytes_max"]=asm["_crypto_generichash_bytes_max"];var _crypto_stream_chacha20_ietf_noncebytes=Module["_crypto_stream_chacha20_ietf_noncebytes"]=asm["_crypto_stream_chacha20_ietf_noncebytes"];var _crypto_pwhash_scryptsalsa208sha256_memlimit_sensitive=Module["_crypto_pwhash_scryptsalsa208sha256_memlimit_sensitive"]=asm["_crypto_pwhash_scryptsalsa208sha256_memlimit_sensitive"];var _crypto_box_curve25519xchacha20poly1305_open_easy=Module["_crypto_box_curve25519xchacha20poly1305_open_easy"]=asm["_crypto_box_curve25519xchacha20poly1305_open_easy"];var _crypto_box_beforenm=Module["_crypto_box_beforenm"]=asm["_crypto_box_beforenm"];var _crypto_box_curve25519xsalsa20poly1305_afternm=Module["_crypto_box_curve25519xsalsa20poly1305_afternm"]=asm["_crypto_box_curve25519xsalsa20poly1305_afternm"];var _crypto_sign_statebytes=Module["_crypto_sign_statebytes"]=asm["_crypto_sign_statebytes"];var _crypto_sign_open=Module["_crypto_sign_open"]=asm["_crypto_sign_open"];var _crypto_box_seed_keypair=Module["_crypto_box_seed_keypair"]=asm["_crypto_box_seed_keypair"];var _crypto_auth_hmacsha512_init=Module["_crypto_auth_hmacsha512_init"]=asm["_crypto_auth_hmacsha512_init"];var _crypto_sign_ed25519_sk_to_pk=Module["_crypto_sign_ed25519_sk_to_pk"]=asm["_crypto_sign_ed25519_sk_to_pk"];var _crypto_scalarmult_curve25519=Module["_crypto_scalarmult_curve25519"]=asm["_crypto_scalarmult_curve25519"];var _crypto_box_open_easy=Module["_crypto_box_open_easy"]=asm["_crypto_box_open_easy"];var _crypto_auth_hmacsha512=Module["_crypto_auth_hmacsha512"]=asm["_crypto_auth_hmacsha512"];var _crypto_stream_keygen=Module["_crypto_stream_keygen"]=asm["_crypto_stream_keygen"];var _crypto_stream_aes128ctr_keybytes=Module["_crypto_stream_aes128ctr_keybytes"]=asm["_crypto_stream_aes128ctr_keybytes"];var _crypto_auth_hmacsha512256_keybytes=Module["_crypto_auth_hmacsha512256_keybytes"]=asm["_crypto_auth_hmacsha512256_keybytes"];var _crypto_aead_chacha20poly1305_keybytes=Module["_crypto_aead_chacha20poly1305_keybytes"]=asm["_crypto_aead_chacha20poly1305_keybytes"];var _free=Module["_free"]=asm["_free"];var _crypto_kx_client_session_keys=Module["_crypto_kx_client_session_keys"]=asm["_crypto_kx_client_session_keys"];var _crypto_box_curve25519xchacha20poly1305_seedbytes=Module["_crypto_box_curve25519xchacha20poly1305_seedbytes"]=asm["_crypto_box_curve25519xchacha20poly1305_seedbytes"];var _crypto_onetimeauth_poly1305_keybytes=Module["_crypto_onetimeauth_poly1305_keybytes"]=asm["_crypto_onetimeauth_poly1305_keybytes"];var _crypto_sign_ed25519_secretkeybytes=Module["_crypto_sign_ed25519_secretkeybytes"]=asm["_crypto_sign_ed25519_secretkeybytes"];var _crypto_kdf_blake2b_contextbytes=Module["_crypto_kdf_blake2b_contextbytes"]=asm["_crypto_kdf_blake2b_contextbytes"];var _crypto_stream_salsa2012=Module["_crypto_stream_salsa2012"]=asm["_crypto_stream_salsa2012"];var _crypto_sign_seedbytes=Module["_crypto_sign_seedbytes"]=asm["_crypto_sign_seedbytes"];var _crypto_box_curve25519xchacha20poly1305_beforenmbytes=Module["_crypto_box_curve25519xchacha20poly1305_beforenmbytes"]=asm["_crypto_box_curve25519xchacha20poly1305_beforenmbytes"];var _randombytes_random=Module["_randombytes_random"]=asm["_randombytes_random"];var _crypto_sign_ed25519ph_update=Module["_crypto_sign_ed25519ph_update"]=asm["_crypto_sign_ed25519ph_update"];var _crypto_auth_hmacsha256_keygen=Module["_crypto_auth_hmacsha256_keygen"]=asm["_crypto_auth_hmacsha256_keygen"];var _crypto_auth_hmacsha256_statebytes=Module["_crypto_auth_hmacsha256_statebytes"]=asm["_crypto_auth_hmacsha256_statebytes"];var _randombytes_buf_deterministic=Module["_randombytes_buf_deterministic"]=asm["_randombytes_buf_deterministic"];var _crypto_aead_chacha20poly1305_encrypt_detached=Module["_crypto_aead_chacha20poly1305_encrypt_detached"]=asm["_crypto_aead_chacha20poly1305_encrypt_detached"];var _crypto_stream_xsalsa20_keygen=Module["_crypto_stream_xsalsa20_keygen"]=asm["_crypto_stream_xsalsa20_keygen"];var _crypto_hash_primitive=Module["_crypto_hash_primitive"]=asm["_crypto_hash_primitive"];var _crypto_sign_ed25519_pk_to_curve25519=Module["_crypto_sign_ed25519_pk_to_curve25519"]=asm["_crypto_sign_ed25519_pk_to_curve25519"];var _crypto_shorthash_siphash24=Module["_crypto_shorthash_siphash24"]=asm["_crypto_shorthash_siphash24"];var _crypto_box_curve25519xsalsa20poly1305_macbytes=Module["_crypto_box_curve25519xsalsa20poly1305_macbytes"]=asm["_crypto_box_curve25519xsalsa20poly1305_macbytes"];var _crypto_sign_ed25519_bytes=Module["_crypto_sign_ed25519_bytes"]=asm["_crypto_sign_ed25519_bytes"];var _crypto_sign_ed25519=Module["_crypto_sign_ed25519"]=asm["_crypto_sign_ed25519"];var _crypto_core_salsa20_constbytes=Module["_crypto_core_salsa20_constbytes"]=asm["_crypto_core_salsa20_constbytes"];var _crypto_secretbox_primitive=Module["_crypto_secretbox_primitive"]=asm["_crypto_secretbox_primitive"];var _crypto_pwhash_argon2i_opslimit_interactive=Module["_crypto_pwhash_argon2i_opslimit_interactive"]=asm["_crypto_pwhash_argon2i_opslimit_interactive"];var _crypto_pwhash_argon2i_saltbytes=Module["_crypto_pwhash_argon2i_saltbytes"]=asm["_crypto_pwhash_argon2i_saltbytes"];var _crypto_box_curve25519xchacha20poly1305_open_detached_afternm=Module["_crypto_box_curve25519xchacha20poly1305_open_detached_afternm"]=asm["_crypto_box_curve25519xchacha20poly1305_open_detached_afternm"];var _crypto_box_curve25519xsalsa20poly1305_beforenmbytes=Module["_crypto_box_curve25519xsalsa20poly1305_beforenmbytes"]=asm["_crypto_box_curve25519xsalsa20poly1305_beforenmbytes"];var _crypto_stream_xchacha20_keygen=Module["_crypto_stream_xchacha20_keygen"]=asm["_crypto_stream_xchacha20_keygen"];var _crypto_core_hchacha20_constbytes=Module["_crypto_core_hchacha20_constbytes"]=asm["_crypto_core_hchacha20_constbytes"];var _crypto_stream_xchacha20_xor=Module["_crypto_stream_xchacha20_xor"]=asm["_crypto_stream_xchacha20_xor"];var _randombytes_seedbytes=Module["_randombytes_seedbytes"]=asm["_randombytes_seedbytes"];var _crypto_sign_final_create=Module["_crypto_sign_final_create"]=asm["_crypto_sign_final_create"];var _crypto_kx_secretkeybytes=Module["_crypto_kx_secretkeybytes"]=asm["_crypto_kx_secretkeybytes"];var _crypto_box_detached=Module["_crypto_box_detached"]=asm["_crypto_box_detached"];var _randombytes_buf=Module["_randombytes_buf"]=asm["_randombytes_buf"];var _crypto_generichash_blake2b_saltbytes=Module["_crypto_generichash_blake2b_saltbytes"]=asm["_crypto_generichash_blake2b_saltbytes"];var _crypto_box_open_detached=Module["_crypto_box_open_detached"]=asm["_crypto_box_open_detached"];var _crypto_kx_seedbytes=Module["_crypto_kx_seedbytes"]=asm["_crypto_kx_seedbytes"];var _crypto_secretbox_xsalsa20poly1305_zerobytes=Module["_crypto_secretbox_xsalsa20poly1305_zerobytes"]=asm["_crypto_secretbox_xsalsa20poly1305_zerobytes"];var _crypto_box_curve25519xchacha20poly1305_open_detached=Module["_crypto_box_curve25519xchacha20poly1305_open_detached"]=asm["_crypto_box_curve25519xchacha20poly1305_open_detached"];var _crypto_generichash_blake2b_keybytes=Module["_crypto_generichash_blake2b_keybytes"]=asm["_crypto_generichash_blake2b_keybytes"];var _crypto_box_curve25519xchacha20poly1305_easy=Module["_crypto_box_curve25519xchacha20poly1305_easy"]=asm["_crypto_box_curve25519xchacha20poly1305_easy"];var _crypto_pwhash_argon2i_bytes_min=Module["_crypto_pwhash_argon2i_bytes_min"]=asm["_crypto_pwhash_argon2i_bytes_min"];var _crypto_pwhash_scryptsalsa208sha256_str=Module["_crypto_pwhash_scryptsalsa208sha256_str"]=asm["_crypto_pwhash_scryptsalsa208sha256_str"];var _crypto_hash=Module["_crypto_hash"]=asm["_crypto_hash"];var _i64Subtract=Module["_i64Subtract"]=asm["_i64Subtract"];var _crypto_box_seedbytes=Module["_crypto_box_seedbytes"]=asm["_crypto_box_seedbytes"];var _crypto_generichash_blake2b_bytes_min=Module["_crypto_generichash_blake2b_bytes_min"]=asm["_crypto_generichash_blake2b_bytes_min"];var _crypto_box_curve25519xsalsa20poly1305=Module["_crypto_box_curve25519xsalsa20poly1305"]=asm["_crypto_box_curve25519xsalsa20poly1305"];var _crypto_generichash_blake2b_statebytes=Module["_crypto_generichash_blake2b_statebytes"]=asm["_crypto_generichash_blake2b_statebytes"];var _crypto_sign_ed25519ph_final_create=Module["_crypto_sign_ed25519ph_final_create"]=asm["_crypto_sign_ed25519ph_final_create"];var _crypto_aead_chacha20poly1305_ietf_decrypt_detached=Module["_crypto_aead_chacha20poly1305_ietf_decrypt_detached"]=asm["_crypto_aead_chacha20poly1305_ietf_decrypt_detached"];var _crypto_generichash_final=Module["_crypto_generichash_final"]=asm["_crypto_generichash_final"];var _crypto_auth_hmacsha512_update=Module["_crypto_auth_hmacsha512_update"]=asm["_crypto_auth_hmacsha512_update"];var _crypto_auth_hmacsha256=Module["_crypto_auth_hmacsha256"]=asm["_crypto_auth_hmacsha256"];var _crypto_box_keypair=Module["_crypto_box_keypair"]=asm["_crypto_box_keypair"];var _crypto_hash_sha256_bytes=Module["_crypto_hash_sha256_bytes"]=asm["_crypto_hash_sha256_bytes"];var ___udivdi3=Module["___udivdi3"]=asm["___udivdi3"];var _crypto_pwhash_argon2i_passwd_max=Module["_crypto_pwhash_argon2i_passwd_max"]=asm["_crypto_pwhash_argon2i_passwd_max"];var _sodium_init=Module["_sodium_init"]=asm["_sodium_init"];var _crypto_secretbox_macbytes=Module["_crypto_secretbox_macbytes"]=asm["_crypto_secretbox_macbytes"];var _crypto_aead_xchacha20poly1305_ietf_npubbytes=Module["_crypto_aead_xchacha20poly1305_ietf_npubbytes"]=asm["_crypto_aead_xchacha20poly1305_ietf_npubbytes"];var _bitshift64Shl=Module["_bitshift64Shl"]=asm["_bitshift64Shl"];var _crypto_pwhash_argon2i_opslimit_min=Module["_crypto_pwhash_argon2i_opslimit_min"]=asm["_crypto_pwhash_argon2i_opslimit_min"];var setTempRet0=Module["setTempRet0"]=asm["setTempRet0"];var _crypto_sign_seed_keypair=Module["_crypto_sign_seed_keypair"]=asm["_crypto_sign_seed_keypair"];var _crypto_core_hchacha20_inputbytes=Module["_crypto_core_hchacha20_inputbytes"]=asm["_crypto_core_hchacha20_inputbytes"];var ___muldi3=Module["___muldi3"]=asm["___muldi3"];var _crypto_core_salsa2012_constbytes=Module["_crypto_core_salsa2012_constbytes"]=asm["_crypto_core_salsa2012_constbytes"];var _crypto_kx_seed_keypair=Module["_crypto_kx_seed_keypair"]=asm["_crypto_kx_seed_keypair"];var _crypto_box_curve25519xchacha20poly1305_detached_afternm=Module["_crypto_box_curve25519xchacha20poly1305_detached_afternm"]=asm["_crypto_box_curve25519xchacha20poly1305_detached_afternm"];var _crypto_aead_chacha20poly1305_nsecbytes=Module["_crypto_aead_chacha20poly1305_nsecbytes"]=asm["_crypto_aead_chacha20poly1305_nsecbytes"];var _sodium_library_minimal=Module["_sodium_library_minimal"]=asm["_sodium_library_minimal"];var _crypto_aead_xchacha20poly1305_ietf_nsecbytes=Module["_crypto_aead_xchacha20poly1305_ietf_nsecbytes"]=asm["_crypto_aead_xchacha20poly1305_ietf_nsecbytes"];var _crypto_pwhash_argon2i_strbytes=Module["_crypto_pwhash_argon2i_strbytes"]=asm["_crypto_pwhash_argon2i_strbytes"];var _crypto_pwhash_argon2i_memlimit_max=Module["_crypto_pwhash_argon2i_memlimit_max"]=asm["_crypto_pwhash_argon2i_memlimit_max"];var _crypto_generichash_blake2b_salt_personal=Module["_crypto_generichash_blake2b_salt_personal"]=asm["_crypto_generichash_blake2b_salt_personal"];var _crypto_stream_aes128ctr_beforenmbytes=Module["_crypto_stream_aes128ctr_beforenmbytes"]=asm["_crypto_stream_aes128ctr_beforenmbytes"];var _crypto_kdf_derive_from_key=Module["_crypto_kdf_derive_from_key"]=asm["_crypto_kdf_derive_from_key"];var _crypto_secretbox_xsalsa20poly1305_noncebytes=Module["_crypto_secretbox_xsalsa20poly1305_noncebytes"]=asm["_crypto_secretbox_xsalsa20poly1305_noncebytes"];var _crypto_pwhash_scryptsalsa208sha256_opslimit_interactive=Module["_crypto_pwhash_scryptsalsa208sha256_opslimit_interactive"]=asm["_crypto_pwhash_scryptsalsa208sha256_opslimit_interactive"];var _crypto_pwhash_argon2i_memlimit_interactive=Module["_crypto_pwhash_argon2i_memlimit_interactive"]=asm["_crypto_pwhash_argon2i_memlimit_interactive"];var _crypto_hash_sha256_final=Module["_crypto_hash_sha256_final"]=asm["_crypto_hash_sha256_final"];var _crypto_stream_keybytes=Module["_crypto_stream_keybytes"]=asm["_crypto_stream_keybytes"];var _crypto_pwhash_memlimit_min=Module["_crypto_pwhash_memlimit_min"]=asm["_crypto_pwhash_memlimit_min"];var _crypto_aead_chacha20poly1305_ietf_npubbytes=Module["_crypto_aead_chacha20poly1305_ietf_npubbytes"]=asm["_crypto_aead_chacha20poly1305_ietf_npubbytes"];var _crypto_stream_salsa208_noncebytes=Module["_crypto_stream_salsa208_noncebytes"]=asm["_crypto_stream_salsa208_noncebytes"];var _sodium_library_version_minor=Module["_sodium_library_version_minor"]=asm["_sodium_library_version_minor"];var _crypto_onetimeauth_bytes=Module["_crypto_onetimeauth_bytes"]=asm["_crypto_onetimeauth_bytes"];var _crypto_box_open=Module["_crypto_box_open"]=asm["_crypto_box_open"];var _crypto_secretbox_xchacha20poly1305_open_easy=Module["_crypto_secretbox_xchacha20poly1305_open_easy"]=asm["_crypto_secretbox_xchacha20poly1305_open_easy"];var _crypto_scalarmult_curve25519_base=Module["_crypto_scalarmult_curve25519_base"]=asm["_crypto_scalarmult_curve25519_base"];var _crypto_sign_ed25519_open=Module["_crypto_sign_ed25519_open"]=asm["_crypto_sign_ed25519_open"];var _crypto_stream_chacha20_ietf_keybytes=Module["_crypto_stream_chacha20_ietf_keybytes"]=asm["_crypto_stream_chacha20_ietf_keybytes"];var _crypto_box_noncebytes=Module["_crypto_box_noncebytes"]=asm["_crypto_box_noncebytes"];var _crypto_core_hchacha20_outputbytes=Module["_crypto_core_hchacha20_outputbytes"]=asm["_crypto_core_hchacha20_outputbytes"];var _crypto_stream_salsa2012_xor=Module["_crypto_stream_salsa2012_xor"]=asm["_crypto_stream_salsa2012_xor"];var _crypto_onetimeauth_keygen=Module["_crypto_onetimeauth_keygen"]=asm["_crypto_onetimeauth_keygen"];var _crypto_pwhash_strbytes=Module["_crypto_pwhash_strbytes"]=asm["_crypto_pwhash_strbytes"];var _crypto_auth_hmacsha512256_update=Module["_crypto_auth_hmacsha512256_update"]=asm["_crypto_auth_hmacsha512256_update"];var _crypto_core_salsa208_outputbytes=Module["_crypto_core_salsa208_outputbytes"]=asm["_crypto_core_salsa208_outputbytes"];var _crypto_onetimeauth_poly1305=Module["_crypto_onetimeauth_poly1305"]=asm["_crypto_onetimeauth_poly1305"];var _crypto_secretbox_xchacha20poly1305_macbytes=Module["_crypto_secretbox_xchacha20poly1305_macbytes"]=asm["_crypto_secretbox_xchacha20poly1305_macbytes"];var _crypto_kdf_bytes_min=Module["_crypto_kdf_bytes_min"]=asm["_crypto_kdf_bytes_min"];var _crypto_sign_ed25519_sk_to_seed=Module["_crypto_sign_ed25519_sk_to_seed"]=asm["_crypto_sign_ed25519_sk_to_seed"];var _crypto_pwhash_scryptsalsa208sha256_memlimit_interactive=Module["_crypto_pwhash_scryptsalsa208sha256_memlimit_interactive"]=asm["_crypto_pwhash_scryptsalsa208sha256_memlimit_interactive"];var _crypto_stream_xsalsa20=Module["_crypto_stream_xsalsa20"]=asm["_crypto_stream_xsalsa20"];var _crypto_box_open_easy_afternm=Module["_crypto_box_open_easy_afternm"]=asm["_crypto_box_open_easy_afternm"];var _crypto_box_curve25519xsalsa20poly1305_seedbytes=Module["_crypto_box_curve25519xsalsa20poly1305_seedbytes"]=asm["_crypto_box_curve25519xsalsa20poly1305_seedbytes"];var _crypto_stream_salsa20_keybytes=Module["_crypto_stream_salsa20_keybytes"]=asm["_crypto_stream_salsa20_keybytes"];var _crypto_kdf_primitive=Module["_crypto_kdf_primitive"]=asm["_crypto_kdf_primitive"];var _crypto_sign_ed25519ph_final_verify=Module["_crypto_sign_ed25519ph_final_verify"]=asm["_crypto_sign_ed25519ph_final_verify"];var _crypto_sign_ed25519_publickeybytes=Module["_crypto_sign_ed25519_publickeybytes"]=asm["_crypto_sign_ed25519_publickeybytes"];var _crypto_stream_aes128ctr=Module["_crypto_stream_aes128ctr"]=asm["_crypto_stream_aes128ctr"];var _crypto_shorthash=Module["_crypto_shorthash"]=asm["_crypto_shorthash"];var _crypto_auth_keybytes=Module["_crypto_auth_keybytes"]=asm["_crypto_auth_keybytes"];var _crypto_box_curve25519xsalsa20poly1305_open_afternm=Module["_crypto_box_curve25519xsalsa20poly1305_open_afternm"]=asm["_crypto_box_curve25519xsalsa20poly1305_open_afternm"];var _crypto_aead_chacha20poly1305_npubbytes=Module["_crypto_aead_chacha20poly1305_npubbytes"]=asm["_crypto_aead_chacha20poly1305_npubbytes"];var _crypto_aead_xchacha20poly1305_ietf_abytes=Module["_crypto_aead_xchacha20poly1305_ietf_abytes"]=asm["_crypto_aead_xchacha20poly1305_ietf_abytes"];var _crypto_onetimeauth_poly1305_final=Module["_crypto_onetimeauth_poly1305_final"]=asm["_crypto_onetimeauth_poly1305_final"];var _crypto_onetimeauth_poly1305_bytes=Module["_crypto_onetimeauth_poly1305_bytes"]=asm["_crypto_onetimeauth_poly1305_bytes"];var _crypto_box_curve25519xsalsa20poly1305_seed_keypair=Module["_crypto_box_curve25519xsalsa20poly1305_seed_keypair"]=asm["_crypto_box_curve25519xsalsa20poly1305_seed_keypair"];var _crypto_box_primitive=Module["_crypto_box_primitive"]=asm["_crypto_box_primitive"];var _crypto_pwhash_str=Module["_crypto_pwhash_str"]=asm["_crypto_pwhash_str"];var _crypto_auth_hmacsha512_keybytes=Module["_crypto_auth_hmacsha512_keybytes"]=asm["_crypto_auth_hmacsha512_keybytes"];var _crypto_auth=Module["_crypto_auth"]=asm["_crypto_auth"];var _crypto_pwhash_scryptsalsa208sha256_bytes_min=Module["_crypto_pwhash_scryptsalsa208sha256_bytes_min"]=asm["_crypto_pwhash_scryptsalsa208sha256_bytes_min"];var _crypto_core_salsa20_keybytes=Module["_crypto_core_salsa20_keybytes"]=asm["_crypto_core_salsa20_keybytes"];var _crypto_box_afternm=Module["_crypto_box_afternm"]=asm["_crypto_box_afternm"];var _crypto_core_salsa208_constbytes=Module["_crypto_core_salsa208_constbytes"]=asm["_crypto_core_salsa208_constbytes"];var _crypto_onetimeauth_primitive=Module["_crypto_onetimeauth_primitive"]=asm["_crypto_onetimeauth_primitive"];var _crypto_pwhash_scryptsalsa208sha256_str_verify=Module["_crypto_pwhash_scryptsalsa208sha256_str_verify"]=asm["_crypto_pwhash_scryptsalsa208sha256_str_verify"];var _sodium_version_string=Module["_sodium_version_string"]=asm["_sodium_version_string"];var _crypto_stream_xchacha20_xor_ic=Module["_crypto_stream_xchacha20_xor_ic"]=asm["_crypto_stream_xchacha20_xor_ic"];var _crypto_pwhash_scryptsalsa208sha256_passwd_min=Module["_crypto_pwhash_scryptsalsa208sha256_passwd_min"]=asm["_crypto_pwhash_scryptsalsa208sha256_passwd_min"];var _crypto_stream_chacha20_ietf=Module["_crypto_stream_chacha20_ietf"]=asm["_crypto_stream_chacha20_ietf"];var _crypto_generichash=Module["_crypto_generichash"]=asm["_crypto_generichash"];var _crypto_core_hsalsa20_outputbytes=Module["_crypto_core_hsalsa20_outputbytes"]=asm["_crypto_core_hsalsa20_outputbytes"];var _crypto_pwhash_opslimit_interactive=Module["_crypto_pwhash_opslimit_interactive"]=asm["_crypto_pwhash_opslimit_interactive"];var _crypto_stream_aes128ctr_beforenm=Module["_crypto_stream_aes128ctr_beforenm"]=asm["_crypto_stream_aes128ctr_beforenm"];var getTempRet0=Module["getTempRet0"]=asm["getTempRet0"];var _crypto_box_curve25519xsalsa20poly1305_noncebytes=Module["_crypto_box_curve25519xsalsa20poly1305_noncebytes"]=asm["_crypto_box_curve25519xsalsa20poly1305_noncebytes"];var _crypto_stream_salsa2012_noncebytes=Module["_crypto_stream_salsa2012_noncebytes"]=asm["_crypto_stream_salsa2012_noncebytes"];var _crypto_core_salsa208_keybytes=Module["_crypto_core_salsa208_keybytes"]=asm["_crypto_core_salsa208_keybytes"];var _crypto_aead_chacha20poly1305_ietf_decrypt=Module["_crypto_aead_chacha20poly1305_ietf_decrypt"]=asm["_crypto_aead_chacha20poly1305_ietf_decrypt"];var _crypto_auth_hmacsha512256_init=Module["_crypto_auth_hmacsha512256_init"]=asm["_crypto_auth_hmacsha512256_init"];var _crypto_kx_server_session_keys=Module["_crypto_kx_server_session_keys"]=asm["_crypto_kx_server_session_keys"];var _crypto_onetimeauth_poly1305_verify=Module["_crypto_onetimeauth_poly1305_verify"]=asm["_crypto_onetimeauth_poly1305_verify"];var _crypto_auth_hmacsha512_final=Module["_crypto_auth_hmacsha512_final"]=asm["_crypto_auth_hmacsha512_final"];var _crypto_stream_aes128ctr_noncebytes=Module["_crypto_stream_aes128ctr_noncebytes"]=asm["_crypto_stream_aes128ctr_noncebytes"];var _crypto_box_secretkeybytes=Module["_crypto_box_secretkeybytes"]=asm["_crypto_box_secretkeybytes"];var _crypto_stream_salsa2012_keygen=Module["_crypto_stream_salsa2012_keygen"]=asm["_crypto_stream_salsa2012_keygen"];var _crypto_onetimeauth_update=Module["_crypto_onetimeauth_update"]=asm["_crypto_onetimeauth_update"];var _crypto_core_salsa20=Module["_crypto_core_salsa20"]=asm["_crypto_core_salsa20"];var _crypto_pwhash_memlimit_interactive=Module["_crypto_pwhash_memlimit_interactive"]=asm["_crypto_pwhash_memlimit_interactive"];var _crypto_scalarmult_bytes=Module["_crypto_scalarmult_bytes"]=asm["_crypto_scalarmult_bytes"];var _crypto_secretbox_detached=Module["_crypto_secretbox_detached"]=asm["_crypto_secretbox_detached"];var _crypto_stream_xor=Module["_crypto_stream_xor"]=asm["_crypto_stream_xor"];var _crypto_secretbox_xchacha20poly1305_easy=Module["_crypto_secretbox_xchacha20poly1305_easy"]=asm["_crypto_secretbox_xchacha20poly1305_easy"];var _crypto_secretbox_easy=Module["_crypto_secretbox_easy"]=asm["_crypto_secretbox_easy"];var _crypto_aead_xchacha20poly1305_ietf_decrypt_detached=Module["_crypto_aead_xchacha20poly1305_ietf_decrypt_detached"]=asm["_crypto_aead_xchacha20poly1305_ietf_decrypt_detached"];var _crypto_stream_salsa20=Module["_crypto_stream_salsa20"]=asm["_crypto_stream_salsa20"];var _sodium_bin2hex=Module["_sodium_bin2hex"]=asm["_sodium_bin2hex"];var _crypto_auth_hmacsha512_statebytes=Module["_crypto_auth_hmacsha512_statebytes"]=asm["_crypto_auth_hmacsha512_statebytes"];var _crypto_pwhash_argon2i_opslimit_sensitive=Module["_crypto_pwhash_argon2i_opslimit_sensitive"]=asm["_crypto_pwhash_argon2i_opslimit_sensitive"];var _crypto_generichash_blake2b_bytes_max=Module["_crypto_generichash_blake2b_bytes_max"]=asm["_crypto_generichash_blake2b_bytes_max"];var _crypto_hash_sha256_update=Module["_crypto_hash_sha256_update"]=asm["_crypto_hash_sha256_update"];var _crypto_core_hsalsa20_constbytes=Module["_crypto_core_hsalsa20_constbytes"]=asm["_crypto_core_hsalsa20_constbytes"];var _crypto_box_easy_afternm=Module["_crypto_box_easy_afternm"]=asm["_crypto_box_easy_afternm"];var _crypto_auth_hmacsha512256_verify=Module["_crypto_auth_hmacsha512256_verify"]=asm["_crypto_auth_hmacsha512256_verify"];var _crypto_pwhash_memlimit_moderate=Module["_crypto_pwhash_memlimit_moderate"]=asm["_crypto_pwhash_memlimit_moderate"];var _crypto_core_salsa20_inputbytes=Module["_crypto_core_salsa20_inputbytes"]=asm["_crypto_core_salsa20_inputbytes"];var _crypto_box_publickeybytes=Module["_crypto_box_publickeybytes"]=asm["_crypto_box_publickeybytes"];var _crypto_sign_secretkeybytes=Module["_crypto_sign_secretkeybytes"]=asm["_crypto_sign_secretkeybytes"];var ___muldsi3=Module["___muldsi3"]=asm["___muldsi3"];var _crypto_scalarmult_scalarbytes=Module["_crypto_scalarmult_scalarbytes"]=asm["_crypto_scalarmult_scalarbytes"];var _crypto_verify_32=Module["_crypto_verify_32"]=asm["_crypto_verify_32"];var _crypto_kx_sessionkeybytes=Module["_crypto_kx_sessionkeybytes"]=asm["_crypto_kx_sessionkeybytes"];var _crypto_aead_chacha20poly1305_decrypt=Module["_crypto_aead_chacha20poly1305_decrypt"]=asm["_crypto_aead_chacha20poly1305_decrypt"];var _crypto_sign=Module["_crypto_sign"]=asm["_crypto_sign"];var _crypto_pwhash_passwd_max=Module["_crypto_pwhash_passwd_max"]=asm["_crypto_pwhash_passwd_max"];var _crypto_pwhash_scryptsalsa208sha256_opslimit_min=Module["_crypto_pwhash_scryptsalsa208sha256_opslimit_min"]=asm["_crypto_pwhash_scryptsalsa208sha256_opslimit_min"];var _sodium_hex2bin=Module["_sodium_hex2bin"]=asm["_sodium_hex2bin"];var _crypto_pwhash_argon2i_alg_argon2i13=Module["_crypto_pwhash_argon2i_alg_argon2i13"]=asm["_crypto_pwhash_argon2i_alg_argon2i13"];var _crypto_secretbox_keybytes=Module["_crypto_secretbox_keybytes"]=asm["_crypto_secretbox_keybytes"];var _randombytes=Module["_randombytes"]=asm["_randombytes"];var _crypto_hash_bytes=Module["_crypto_hash_bytes"]=asm["_crypto_hash_bytes"];var _crypto_stream_salsa20_keygen=Module["_crypto_stream_salsa20_keygen"]=asm["_crypto_stream_salsa20_keygen"];var _crypto_hash_sha256_statebytes=Module["_crypto_hash_sha256_statebytes"]=asm["_crypto_hash_sha256_statebytes"];var _crypto_pwhash_argon2i_passwd_min=Module["_crypto_pwhash_argon2i_passwd_min"]=asm["_crypto_pwhash_argon2i_passwd_min"];var _crypto_pwhash_opslimit_sensitive=Module["_crypto_pwhash_opslimit_sensitive"]=asm["_crypto_pwhash_opslimit_sensitive"];var _crypto_sign_init=Module["_crypto_sign_init"]=asm["_crypto_sign_init"];var _crypto_generichash_blake2b_personalbytes=Module["_crypto_generichash_blake2b_personalbytes"]=asm["_crypto_generichash_blake2b_personalbytes"];var _crypto_stream_chacha20_xor_ic=Module["_crypto_stream_chacha20_xor_ic"]=asm["_crypto_stream_chacha20_xor_ic"];var _crypto_sign_verify_detached=Module["_crypto_sign_verify_detached"]=asm["_crypto_sign_verify_detached"];var _crypto_onetimeauth_verify=Module["_crypto_onetimeauth_verify"]=asm["_crypto_onetimeauth_verify"];var _crypto_sign_ed25519_detached=Module["_crypto_sign_ed25519_detached"]=asm["_crypto_sign_ed25519_detached"];var _crypto_generichash_init=Module["_crypto_generichash_init"]=asm["_crypto_generichash_init"];var _i64Add=Module["_i64Add"]=asm["_i64Add"];var _crypto_sign_bytes=Module["_crypto_sign_bytes"]=asm["_crypto_sign_bytes"];var _crypto_generichash_update=Module["_crypto_generichash_update"]=asm["_crypto_generichash_update"];var _crypto_scalarmult=Module["_crypto_scalarmult"]=asm["_crypto_scalarmult"];var _crypto_aead_chacha20poly1305_ietf_abytes=Module["_crypto_aead_chacha20poly1305_ietf_abytes"]=asm["_crypto_aead_chacha20poly1305_ietf_abytes"];var _crypto_sign_detached=Module["_crypto_sign_detached"]=asm["_crypto_sign_detached"];var _crypto_generichash_blake2b_update=Module["_crypto_generichash_blake2b_update"]=asm["_crypto_generichash_blake2b_update"];var _crypto_box_curve25519xsalsa20poly1305_beforenm=Module["_crypto_box_curve25519xsalsa20poly1305_beforenm"]=asm["_crypto_box_curve25519xsalsa20poly1305_beforenm"];var _crypto_generichash_blake2b_bytes=Module["_crypto_generichash_blake2b_bytes"]=asm["_crypto_generichash_blake2b_bytes"];var _crypto_auth_hmacsha512256_bytes=Module["_crypto_auth_hmacsha512256_bytes"]=asm["_crypto_auth_hmacsha512256_bytes"];var _crypto_box_curve25519xchacha20poly1305_noncebytes=Module["_crypto_box_curve25519xchacha20poly1305_noncebytes"]=asm["_crypto_box_curve25519xchacha20poly1305_noncebytes"];var _randombytes_uniform=Module["_randombytes_uniform"]=asm["_randombytes_uniform"];var _crypto_shorthash_siphash24_keybytes=Module["_crypto_shorthash_siphash24_keybytes"]=asm["_crypto_shorthash_siphash24_keybytes"];var _crypto_shorthash_keygen=Module["_crypto_shorthash_keygen"]=asm["_crypto_shorthash_keygen"];var _crypto_onetimeauth_init=Module["_crypto_onetimeauth_init"]=asm["_crypto_onetimeauth_init"];var _crypto_generichash_bytes=Module["_crypto_generichash_bytes"]=asm["_crypto_generichash_bytes"];var _crypto_stream_salsa20_xor=Module["_crypto_stream_salsa20_xor"]=asm["_crypto_stream_salsa20_xor"];var _crypto_auth_hmacsha512_verify=Module["_crypto_auth_hmacsha512_verify"]=asm["_crypto_auth_hmacsha512_verify"];var _crypto_generichash_blake2b_keybytes_min=Module["_crypto_generichash_blake2b_keybytes_min"]=asm["_crypto_generichash_blake2b_keybytes_min"];var _bitshift64Lshr=Module["_bitshift64Lshr"]=asm["_bitshift64Lshr"];var _crypto_kx_publickeybytes=Module["_crypto_kx_publickeybytes"]=asm["_crypto_kx_publickeybytes"];var _crypto_pwhash_bytes_max=Module["_crypto_pwhash_bytes_max"]=asm["_crypto_pwhash_bytes_max"];var _crypto_aead_chacha20poly1305_ietf_keybytes=Module["_crypto_aead_chacha20poly1305_ietf_keybytes"]=asm["_crypto_aead_chacha20poly1305_ietf_keybytes"];var _crypto_aead_chacha20poly1305_ietf_encrypt_detached=Module["_crypto_aead_chacha20poly1305_ietf_encrypt_detached"]=asm["_crypto_aead_chacha20poly1305_ietf_encrypt_detached"];var _crypto_stream=Module["_crypto_stream"]=asm["_crypto_stream"];var _sbrk=Module["_sbrk"]=asm["_sbrk"];var _crypto_box_curve25519xchacha20poly1305_beforenm=Module["_crypto_box_curve25519xchacha20poly1305_beforenm"]=asm["_crypto_box_curve25519xchacha20poly1305_beforenm"];var _memcpy=Module["_memcpy"]=asm["_memcpy"];var _crypto_pwhash=Module["_crypto_pwhash"]=asm["_crypto_pwhash"];var _crypto_auth_hmacsha512256=Module["_crypto_auth_hmacsha512256"]=asm["_crypto_auth_hmacsha512256"];var _crypto_secretbox_xsalsa20poly1305=Module["_crypto_secretbox_xsalsa20poly1305"]=asm["_crypto_secretbox_xsalsa20poly1305"];var _crypto_verify_16_bytes=Module["_crypto_verify_16_bytes"]=asm["_crypto_verify_16_bytes"];var _crypto_stream_salsa208_keygen=Module["_crypto_stream_salsa208_keygen"]=asm["_crypto_stream_salsa208_keygen"];var _emscripten_get_global_libc=Module["_emscripten_get_global_libc"]=asm["_emscripten_get_global_libc"];var _crypto_shorthash_siphashx24_bytes=Module["_crypto_shorthash_siphashx24_bytes"]=asm["_crypto_shorthash_siphashx24_bytes"];var _crypto_generichash_blake2b_final=Module["_crypto_generichash_blake2b_final"]=asm["_crypto_generichash_blake2b_final"];var _crypto_generichash_blake2b_init_salt_personal=Module["_crypto_generichash_blake2b_init_salt_personal"]=asm["_crypto_generichash_blake2b_init_salt_personal"];var _crypto_box_seal=Module["_crypto_box_seal"]=asm["_crypto_box_seal"];var _crypto_aead_xchacha20poly1305_ietf_keygen=Module["_crypto_aead_xchacha20poly1305_ietf_keygen"]=asm["_crypto_aead_xchacha20poly1305_ietf_keygen"];var _crypto_kx_keypair=Module["_crypto_kx_keypair"]=asm["_crypto_kx_keypair"];var runPostSets=Module["runPostSets"]=asm["runPostSets"];var _crypto_pwhash_alg_default=Module["_crypto_pwhash_alg_default"]=asm["_crypto_pwhash_alg_default"];var _crypto_box=Module["_crypto_box"]=asm["_crypto_box"];var _crypto_stream_primitive=Module["_crypto_stream_primitive"]=asm["_crypto_stream_primitive"];var _crypto_secretbox_xsalsa20poly1305_boxzerobytes=Module["_crypto_secretbox_xsalsa20poly1305_boxzerobytes"]=asm["_crypto_secretbox_xsalsa20poly1305_boxzerobytes"];var _crypto_pwhash_str_verify=Module["_crypto_pwhash_str_verify"]=asm["_crypto_pwhash_str_verify"];var _crypto_generichash_keybytes_min=Module["_crypto_generichash_keybytes_min"]=asm["_crypto_generichash_keybytes_min"];var _crypto_generichash_statebytes=Module["_crypto_generichash_statebytes"]=asm["_crypto_generichash_statebytes"];var _crypto_onetimeauth_poly1305_statebytes=Module["_crypto_onetimeauth_poly1305_statebytes"]=asm["_crypto_onetimeauth_poly1305_statebytes"];var _crypto_sign_final_verify=Module["_crypto_sign_final_verify"]=asm["_crypto_sign_final_verify"];var _crypto_pwhash_strprefix=Module["_crypto_pwhash_strprefix"]=asm["_crypto_pwhash_strprefix"];var _crypto_secretbox_keygen=Module["_crypto_secretbox_keygen"]=asm["_crypto_secretbox_keygen"];var _crypto_secretbox_xchacha20poly1305_noncebytes=Module["_crypto_secretbox_xchacha20poly1305_noncebytes"]=asm["_crypto_secretbox_xchacha20poly1305_noncebytes"];var _crypto_hash_sha512=Module["_crypto_hash_sha512"]=asm["_crypto_hash_sha512"];var _llvm_cttz_i32=Module["_llvm_cttz_i32"]=asm["_llvm_cttz_i32"];var _crypto_pwhash_scryptsalsa208sha256_bytes_max=Module["_crypto_pwhash_scryptsalsa208sha256_bytes_max"]=asm["_crypto_pwhash_scryptsalsa208sha256_bytes_max"];var _crypto_box_curve25519xchacha20poly1305_detached=Module["_crypto_box_curve25519xchacha20poly1305_detached"]=asm["_crypto_box_curve25519xchacha20poly1305_detached"];var _sodium_library_version_major=Module["_sodium_library_version_major"]=asm["_sodium_library_version_major"];var _crypto_aead_chacha20poly1305_ietf_encrypt=Module["_crypto_aead_chacha20poly1305_ietf_encrypt"]=asm["_crypto_aead_chacha20poly1305_ietf_encrypt"];var _crypto_generichash_blake2b_init=Module["_crypto_generichash_blake2b_init"]=asm["_crypto_generichash_blake2b_init"];var _randombytes_close=Module["_randombytes_close"]=asm["_randombytes_close"];var _crypto_pwhash_primitive=Module["_crypto_pwhash_primitive"]=asm["_crypto_pwhash_primitive"];var _crypto_onetimeauth_keybytes=Module["_crypto_onetimeauth_keybytes"]=asm["_crypto_onetimeauth_keybytes"];var _crypto_pwhash_argon2i=Module["_crypto_pwhash_argon2i"]=asm["_crypto_pwhash_argon2i"];var _crypto_stream_aes128ctr_afternm=Module["_crypto_stream_aes128ctr_afternm"]=asm["_crypto_stream_aes128ctr_afternm"];var _crypto_kdf_keybytes=Module["_crypto_kdf_keybytes"]=asm["_crypto_kdf_keybytes"];var establishStackSpace=Module["establishStackSpace"]=asm["establishStackSpace"];var _crypto_aead_chacha20poly1305_encrypt=Module["_crypto_aead_chacha20poly1305_encrypt"]=asm["_crypto_aead_chacha20poly1305_encrypt"];var _crypto_core_salsa2012_inputbytes=Module["_crypto_core_salsa2012_inputbytes"]=asm["_crypto_core_salsa2012_inputbytes"];var _crypto_pwhash_scryptsalsa208sha256_memlimit_min=Module["_crypto_pwhash_scryptsalsa208sha256_memlimit_min"]=asm["_crypto_pwhash_scryptsalsa208sha256_memlimit_min"];var _crypto_core_salsa208=Module["_crypto_core_salsa208"]=asm["_crypto_core_salsa208"];var _crypto_pwhash_opslimit_max=Module["_crypto_pwhash_opslimit_max"]=asm["_crypto_pwhash_opslimit_max"];var _crypto_auth_verify=Module["_crypto_auth_verify"]=asm["_crypto_auth_verify"];var _crypto_sign_ed25519_seed_keypair=Module["_crypto_sign_ed25519_seed_keypair"]=asm["_crypto_sign_ed25519_seed_keypair"];var _crypto_auth_hmacsha512256_keygen=Module["_crypto_auth_hmacsha512256_keygen"]=asm["_crypto_auth_hmacsha512256_keygen"];var _randombytes_stir=Module["_randombytes_stir"]=asm["_randombytes_stir"];var _memset=Module["_memset"]=asm["_memset"];var _crypto_box_open_detached_afternm=Module["_crypto_box_open_detached_afternm"]=asm["_crypto_box_open_detached_afternm"];var _crypto_pwhash_argon2i_memlimit_sensitive=Module["_crypto_pwhash_argon2i_memlimit_sensitive"]=asm["_crypto_pwhash_argon2i_memlimit_sensitive"];var _crypto_kx_primitive=Module["_crypto_kx_primitive"]=asm["_crypto_kx_primitive"];var _crypto_stream_salsa2012_keybytes=Module["_crypto_stream_salsa2012_keybytes"]=asm["_crypto_stream_salsa2012_keybytes"];var _crypto_aead_xchacha20poly1305_ietf_decrypt=Module["_crypto_aead_xchacha20poly1305_ietf_decrypt"]=asm["_crypto_aead_xchacha20poly1305_ietf_decrypt"];var _crypto_pwhash_scryptsalsa208sha256_strprefix=Module["_crypto_pwhash_scryptsalsa208sha256_strprefix"]=asm["_crypto_pwhash_scryptsalsa208sha256_strprefix"];var _crypto_core_salsa20_outputbytes=Module["_crypto_core_salsa20_outputbytes"]=asm["_crypto_core_salsa20_outputbytes"];var _crypto_auth_keygen=Module["_crypto_auth_keygen"]=asm["_crypto_auth_keygen"];var _crypto_secretbox=Module["_crypto_secretbox"]=asm["_crypto_secretbox"];var _crypto_aead_xchacha20poly1305_ietf_encrypt_detached=Module["_crypto_aead_xchacha20poly1305_ietf_encrypt_detached"]=asm["_crypto_aead_xchacha20poly1305_ietf_encrypt_detached"];var _crypto_pwhash_scryptsalsa208sha256_passwd_max=Module["_crypto_pwhash_scryptsalsa208sha256_passwd_max"]=asm["_crypto_pwhash_scryptsalsa208sha256_passwd_max"];var _crypto_auth_hmacsha256_bytes=Module["_crypto_auth_hmacsha256_bytes"]=asm["_crypto_auth_hmacsha256_bytes"];var _crypto_auth_hmacsha256_verify=Module["_crypto_auth_hmacsha256_verify"]=asm["_crypto_auth_hmacsha256_verify"];var _crypto_sign_keypair=Module["_crypto_sign_keypair"]=asm["_crypto_sign_keypair"];var _crypto_stream_xchacha20=Module["_crypto_stream_xchacha20"]=asm["_crypto_stream_xchacha20"];var _crypto_onetimeauth_statebytes=Module["_crypto_onetimeauth_statebytes"]=asm["_crypto_onetimeauth_statebytes"];var _crypto_sign_ed25519ph_init=Module["_crypto_sign_ed25519ph_init"]=asm["_crypto_sign_ed25519ph_init"];var _crypto_stream_salsa20_noncebytes=Module["_crypto_stream_salsa20_noncebytes"]=asm["_crypto_stream_salsa20_noncebytes"];var _crypto_shorthash_keybytes=Module["_crypto_shorthash_keybytes"]=asm["_crypto_shorthash_keybytes"];var _crypto_aead_chacha20poly1305_keygen=Module["_crypto_aead_chacha20poly1305_keygen"]=asm["_crypto_aead_chacha20poly1305_keygen"];var _crypto_shorthash_siphashx24=Module["_crypto_shorthash_siphashx24"]=asm["_crypto_shorthash_siphashx24"];var _memmove=Module["_memmove"]=asm["_memmove"];var _crypto_hash_sha512_final=Module["_crypto_hash_sha512_final"]=asm["_crypto_hash_sha512_final"];var _crypto_box_curve25519xsalsa20poly1305_zerobytes=Module["_crypto_box_curve25519xsalsa20poly1305_zerobytes"]=asm["_crypto_box_curve25519xsalsa20poly1305_zerobytes"];var _crypto_shorthash_siphashx24_keybytes=Module["_crypto_shorthash_siphashx24_keybytes"]=asm["_crypto_shorthash_siphashx24_keybytes"];var _crypto_pwhash_passwd_min=Module["_crypto_pwhash_passwd_min"]=asm["_crypto_pwhash_passwd_min"];var _crypto_kdf_bytes_max=Module["_crypto_kdf_bytes_max"]=asm["_crypto_kdf_bytes_max"];var _crypto_box_curve25519xsalsa20poly1305_boxzerobytes=Module["_crypto_box_curve25519xsalsa20poly1305_boxzerobytes"]=asm["_crypto_box_curve25519xsalsa20poly1305_boxzerobytes"];var _crypto_generichash_bytes_min=Module["_crypto_generichash_bytes_min"]=asm["_crypto_generichash_bytes_min"];var _crypto_core_salsa2012_outputbytes=Module["_crypto_core_salsa2012_outputbytes"]=asm["_crypto_core_salsa2012_outputbytes"];var _crypto_auth_hmacsha256_keybytes=Module["_crypto_auth_hmacsha256_keybytes"]=asm["_crypto_auth_hmacsha256_keybytes"];var _crypto_core_salsa208_inputbytes=Module["_crypto_core_salsa208_inputbytes"]=asm["_crypto_core_salsa208_inputbytes"];var _crypto_pwhash_scryptsalsa208sha256_opslimit_max=Module["_crypto_pwhash_scryptsalsa208sha256_opslimit_max"]=asm["_crypto_pwhash_scryptsalsa208sha256_opslimit_max"];var _crypto_sign_update=Module["_crypto_sign_update"]=asm["_crypto_sign_update"];var _crypto_secretbox_xchacha20poly1305_detached=Module["_crypto_secretbox_xchacha20poly1305_detached"]=asm["_crypto_secretbox_xchacha20poly1305_detached"];var _crypto_stream_chacha20_noncebytes=Module["_crypto_stream_chacha20_noncebytes"]=asm["_crypto_stream_chacha20_noncebytes"];var _crypto_secretbox_open_detached=Module["_crypto_secretbox_open_detached"]=asm["_crypto_secretbox_open_detached"];var _crypto_box_curve25519xchacha20poly1305_seed_keypair=Module["_crypto_box_curve25519xchacha20poly1305_seed_keypair"]=asm["_crypto_box_curve25519xchacha20poly1305_seed_keypair"];var _crypto_pwhash_argon2i_memlimit_min=Module["_crypto_pwhash_argon2i_memlimit_min"]=asm["_crypto_pwhash_argon2i_memlimit_min"];var _crypto_pwhash_scryptsalsa208sha256_opslimit_sensitive=Module["_crypto_pwhash_scryptsalsa208sha256_opslimit_sensitive"]=asm["_crypto_pwhash_scryptsalsa208sha256_opslimit_sensitive"];var _crypto_box_curve25519xsalsa20poly1305_secretkeybytes=Module["_crypto_box_curve25519xsalsa20poly1305_secretkeybytes"]=asm["_crypto_box_curve25519xsalsa20poly1305_secretkeybytes"];var _crypto_kdf_contextbytes=Module["_crypto_kdf_contextbytes"]=asm["_crypto_kdf_contextbytes"];var _crypto_stream_xchacha20_keybytes=Module["_crypto_stream_xchacha20_keybytes"]=asm["_crypto_stream_xchacha20_keybytes"];var _crypto_box_seal_open=Module["_crypto_box_seal_open"]=asm["_crypto_box_seal_open"];var _crypto_shorthash_primitive=Module["_crypto_shorthash_primitive"]=asm["_crypto_shorthash_primitive"];var _crypto_core_hsalsa20_inputbytes=Module["_crypto_core_hsalsa20_inputbytes"]=asm["_crypto_core_hsalsa20_inputbytes"];var _crypto_onetimeauth_final=Module["_crypto_onetimeauth_final"]=asm["_crypto_onetimeauth_final"];var _crypto_secretbox_open_easy=Module["_crypto_secretbox_open_easy"]=asm["_crypto_secretbox_open_easy"];var _crypto_core_salsa2012=Module["_crypto_core_salsa2012"]=asm["_crypto_core_salsa2012"];var _crypto_box_curve25519xchacha20poly1305_macbytes=Module["_crypto_box_curve25519xchacha20poly1305_macbytes"]=asm["_crypto_box_curve25519xchacha20poly1305_macbytes"];var _crypto_auth_hmacsha512256_statebytes=Module["_crypto_auth_hmacsha512256_statebytes"]=asm["_crypto_auth_hmacsha512256_statebytes"];var _bitshift64Ashr=Module["_bitshift64Ashr"]=asm["_bitshift64Ashr"];var _crypto_box_curve25519xchacha20poly1305_publickeybytes=Module["_crypto_box_curve25519xchacha20poly1305_publickeybytes"]=asm["_crypto_box_curve25519xchacha20poly1305_publickeybytes"];var _crypto_stream_chacha20_xor=Module["_crypto_stream_chacha20_xor"]=asm["_crypto_stream_chacha20_xor"];var _crypto_core_hsalsa20=Module["_crypto_core_hsalsa20"]=asm["_crypto_core_hsalsa20"];Runtime.stackAlloc=Module["stackAlloc"];Runtime.stackSave=Module["stackSave"];Runtime.stackRestore=Module["stackRestore"];Runtime.establishStackSpace=Module["establishStackSpace"];Runtime.setTempRet0=Module["setTempRet0"];Runtime.getTempRet0=Module["getTempRet0"];Module["asm"]=asm;function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}ExitStatus.prototype=new Error;ExitStatus.prototype.constructor=ExitStatus;var initialStackTop;var preloadStartTime=null;var calledMain=false;dependenciesFulfilled=function runCaller(){if(!Module["calledRun"])run();if(!Module["calledRun"])dependenciesFulfilled=runCaller};Module["callMain"]=Module.callMain=function callMain(args){args=args||[];ensureInitRuntime();var argc=args.length+1;function pad(){for(var i=0;i<4-1;i++){argv.push(0)}}var argv=[allocate(intArrayFromString(Module["thisProgram"]),"i8",ALLOC_NORMAL)];pad();for(var i=0;i<argc-1;i=i+1){argv.push(allocate(intArrayFromString(args[i]),"i8",ALLOC_NORMAL));pad()}argv.push(0);argv=allocate(argv,"i32",ALLOC_NORMAL);try{var ret=Module["_main"](argc,argv,0);exit(ret,true)}catch(e){if(e instanceof ExitStatus){return}else if(e=="SimulateInfiniteLoop"){Module["noExitRuntime"]=true;return}else{var toLog=e;if(e&&typeof e==="object"&&e.stack){toLog=[e,e.stack]}Module.printErr("exception thrown: "+toLog);Module["quit"](1,e)}}finally{calledMain=true}};function run(args){args=args||Module["arguments"];if(preloadStartTime===null)preloadStartTime=Date.now();if(runDependencies>0){return}preRun();if(runDependencies>0)return;if(Module["calledRun"])return;function doRun(){if(Module["calledRun"])return;Module["calledRun"]=true;if(ABORT)return;ensureInitRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();if(Module["_main"]&&shouldRunNow)Module["callMain"](args);postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout((function(){setTimeout((function(){Module["setStatus"]("")}),1);doRun()}),1)}else{doRun()}}Module["run"]=Module.run=run;function exit(status,implicit){if(implicit&&Module["noExitRuntime"]){return}if(Module["noExitRuntime"]){}else{ABORT=true;EXITSTATUS=status;STACKTOP=initialStackTop;exitRuntime();if(Module["onExit"])Module["onExit"](status)}if(ENVIRONMENT_IS_NODE){process["exit"](status)}Module["quit"](status,new ExitStatus(status))}Module["exit"]=Module.exit=exit;var abortDecorators=[];function abort(what){if(what!==undefined){Module.print(what);Module.printErr(what);what=JSON.stringify(what)}else{what=""}ABORT=true;EXITSTATUS=1;var extra="\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";var output="abort("+what+") at "+stackTrace()+extra;if(abortDecorators){abortDecorators.forEach((function(decorator){output=decorator(output,what)}))}throw output}Module["abort"]=Module.abort=abort;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}var shouldRunNow=true;if(Module["noInitialRun"]){shouldRunNow=false}run()




    ENVIRONMENT_IS_NODE && !process.removeAllListeners("uncaughtException");
    return Module;
}));
(function (root, factory) {
    if (typeof process === "object" && typeof process.stdout === "undefined") {
        process.stderr = process.stdout = { write: function() { } };
    }
    if (typeof define === "function" && define.amd) {
        define(["exports", "libsodium-sumo"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("libsodium-sumo"));
    } else {
        var cb = root.sodium && root.sodium.onload;
        factory((root.sodium = {}), root.libsodium);
        if (typeof cb === "function") {
            cb(root.sodium);
        }
    }
}(this, (function (exports, libsodium) {
    "use strict";

    var output_format = "uint8array";

    if (libsodium._sodium_init() !== 0) {
        throw new Error("libsodium was not correctly initialized.");
    }

    // List of functions and constants defined in the wrapped libsodium
    function symbols() {
        return Object.keys(exports).sort();
    }

    function increment(bytes) {
        if (! bytes instanceof Uint8Array) {
            throw new TypeError("Only Uint8Array instances can be incremented");
        }
        var c = 1 << 8;
        for (var i = 0 | 0, j = bytes.length; i < j; i++) {
            c >>= 8;
            c += bytes[i];
            bytes[i] = c & 0xff;
        }
    }

    function add(a, b) {
        if (! a instanceof Uint8Array || ! b instanceof Uint8Array) {
            throw new TypeError("Only Uint8Array instances can added");
        }
        var j = a.length, c = 0 | 0, i = 0 | 0;
        if (b.length != a.length) {
            throw new TypeError("Arguments must have the same length");
        }
        for (i = 0; i < j; i++) {
            c >>= 8;
            c += (a[i] + b[j]);
            a[i] = c & 0xff;
        }
    }

    function is_zero(bytes) {
        if (! bytes instanceof Uint8Array) {
            throw new TypeError("Only Uint8Array instances can be checked");
        }
        var d = 0 | 0;
        for (var i = 0 | 0, j = bytes.length; i < j; i++) {
            d |= bytes[i];
        }
        return d === 0;
    }

    function memzero(bytes) {
        if (! bytes instanceof Uint8Array) {
            throw new TypeError("Only Uint8Array instances can be wiped");
        }
        for (var i = 0 | 0, j = bytes.length; i < j; i++) {
            bytes[i] = 0;
        }
    }

    function memcmp(b1, b2) {
        if (!(b1 instanceof Uint8Array && b2 instanceof Uint8Array)) {
            throw new TypeError("Only Uint8Array instances can be compared");
        }
        if (b1.length !== b2.length) {
            throw new TypeError("Only instances of identical length can be compared");
        }
        for (var d = 0 | 0, i = 0 | 0, j = b1.length; i < j; i++) {
            d |= b1[i] ^ b2[i];
        }
        return d === 0;
    }

    function compare(b1, b2) {
        if (!(b1 instanceof Uint8Array && b2 instanceof Uint8Array)) {
            throw new TypeError("Only Uint8Array instances can be compared");
        }
        if (b1.length !== b2.length) {
            throw new TypeError("Only instances of identical length can be compared");
        }
        for (var gt = 0 | 0, eq = 1 | 1, i = b1.length; i-- > 0;) {
            gt |= ((b2[i] - b1[i]) >> 8) & eq;
            eq &= ((b2[i] ^ b1[i]) - 1) >> 8;
        }
        return (gt + gt + eq) - 1;
    }

    //---------------------------------------------------------------------------
    // Codecs
    //
    function from_string(str) {
        if (typeof TextEncoder === "function") {
            return new TextEncoder("utf-8").encode(str);
        }
        str = unescape(encodeURIComponent(str));
        var bytes = new Uint8Array(str.length);
        for (var i = 0; i < str.length; i++) {
            bytes[i] = str.charCodeAt(i);
        }
        return bytes;
    }

    function to_string(bytes) {
        if (typeof TextDecoder === "function") {
            return new TextDecoder("utf-8", {fatal: true}).decode(bytes);
        }

        var toStringChunkSize = 8192,
            numChunks = Math.ceil(bytes.length / toStringChunkSize);
        if (numChunks <= 1) {
            try {
                return decodeURIComponent(escape(String.fromCharCode.apply(null, bytes)));
            }
            catch (_) {
                throw new TypeError("The encoded data was not valid.");
            }
        }
        var totalString = '';
        var sequenceReadOffset = 0;
        for (var i = 0; i < numChunks; i++) {
            var currentChunk =
                Array.prototype.slice.call(bytes,
                                           i * toStringChunkSize + sequenceReadOffset,
                                           (i + 1) * toStringChunkSize + sequenceReadOffset);
            //Depending on how much we have shifted
            if (currentChunk.length == 0) {
                continue;
            }

            //Checking that we didn't cut the buffer in the middle of a UTF8 sequence.
            //If we did, remove the bytes of the "cut" sequence and
            //decrement sequenceReadOffset for each removed byte
            var sequenceDetectionComplete,
                sequenceIndex = currentChunk.length,
                sequenceLength = 0;

            //This loop will read the chunk from its end, looking for sequence start bytes
            do {
                sequenceIndex--;
                var currentByte = currentChunk[sequenceIndex];

                if (currentByte >= 240) { //Beginning of a 4-byte UTF-8 sequence
                    sequenceLength = 4;
                    sequenceDetectionComplete = true;
                } else if (currentByte >= 224) { //Beginning of a 3-byte UTF-8 sequence
                    sequenceLength = 3;
                    sequenceDetectionComplete = true;
                } else if (currentByte >= 192) { //Beginning of a 2-byte UTF-8 sequence
                    sequenceLength = 2;
                    sequenceDetectionComplete = true;
                } else if (currentByte < 128) { //A one byte UTF-8 char
                    sequenceLength = 1;
                    sequenceDetectionComplete = true;
                }
                //The values between [128, 192[ are part of a UTF-8 sequence.
                //The loop will not exit in that case, and will iterate one byte backwards instead
            } while (!sequenceDetectionComplete);

            var extraBytes = sequenceLength - (currentChunk.length - sequenceIndex);
            for (var j = 0; j < extraBytes; j++) {
                sequenceReadOffset--;
                currentChunk.pop();
            }

            totalString += to_string(currentChunk);
        }
        return totalString;
    }

    /* not constant-time */
    function from_hex(str) {
        if (!is_hex(str)) {
            throw new TypeError("The provided string doesn't look like hex data");
        }
        var result = new Uint8Array(str.length / 2);
        for (var i = 0; i < str.length; i += 2) {
            result[i >>> 1] = parseInt(str.substr(i, 2), 16);
        }
        return result;
    }

    function to_hex(bytes) {
        var str = "", b, c, x;
        for (var i = 0; i < bytes.length; i++) {
            c = bytes[i] & 0xf;
            b = bytes[i] >>> 4;
            x = (87 + c + (((c - 10) >> 8) & ~38)) << 8 |
                (87 + b + (((b - 10) >> 8) & ~38));
            str += String.fromCharCode(x & 0xff) + String.fromCharCode(x >>> 8);
        }
        return str;
    }

    function is_hex(str) {
        return (typeof str === "string" && /^[0-9a-f]+$/i.test(str) && str.length % 2 === 0);
    }

    function from_base64(sBase64, nBlocksSize) {
        function _b64ToUint6(nChr) {
            return nChr > 64 && nChr < 91 ?
                nChr - 65 : nChr > 96 && nChr < 123 ?
                nChr - 71 : nChr > 47 && nChr < 58 ?
                nChr + 4 : nChr === 43 ?
                62 : nChr === 47 ?
                63 :
                0;
        }

        var sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, ""),
            nInLen = sB64Enc.length,
            nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2,
            taBytes = new Uint8Array(nOutLen);

        for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
            nMod4 = nInIdx & 3;
            nUint24 |= _b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
            if (nMod4 === 3 || nInLen - nInIdx === 1) {
                for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                    taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                }
                nUint24 = 0;
            }
        }
        return taBytes;
    }

    function to_base64(aBytes, noNewLine) {
        if (typeof noNewLine === "undefined") {
            noNewLine = true;
        }
        function _uint6ToB64(nUint6) {
            return nUint6 < 26 ?
                nUint6 + 65 : nUint6 < 52 ?
                nUint6 + 71 : nUint6 < 62 ?
                nUint6 - 4 : nUint6 === 62 ?
                43 : nUint6 === 63 ?
                47 :
                65;
        }
        if (typeof aBytes === "string") {
            throw new Error("input has to be an array");
        }
        var nMod3 = 2,
            sB64Enc = "";
        for (var nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
            nMod3 = nIdx % 3;
            if (nIdx > 0 && (nIdx * 4 / 3) % 76 === 0 && !noNewLine) {
                sB64Enc += "\r\n";
            }
            nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
            if (nMod3 === 2 || aBytes.length - nIdx === 1) {
                sB64Enc += String.fromCharCode(_uint6ToB64(nUint24 >>> 18 & 63),
                                               _uint6ToB64(nUint24 >>> 12 & 63),
                                               _uint6ToB64(nUint24 >>> 6 & 63),
                                               _uint6ToB64(nUint24 & 63));
                nUint24 = 0;
            }
        }
        return sB64Enc.substr(0, sB64Enc.length - 2 + nMod3) +
            (nMod3 === 2 ? "" : nMod3 === 1 ? "=" : "==");
    }

    function output_formats() {
        return ["uint8array", "text", "hex", "base64"];
    }

    function _format_output(output, optionalOutputFormat) {
        var selectedOutputFormat = optionalOutputFormat || output_format;
        if (!_is_output_format(selectedOutputFormat)) {
            throw new Error(selectedOutputFormat + " output format is not available");
        }
        if (output instanceof AllocatedBuf) {
            if (selectedOutputFormat === "uint8array") {
                return output.to_Uint8Array();
            } else if (selectedOutputFormat === "text") {
                return to_string(output.to_Uint8Array());
            } else if (selectedOutputFormat === "hex") {
                return to_hex(output.to_Uint8Array());
            } else if (selectedOutputFormat === "base64") {
                return to_base64(output.to_Uint8Array());
            } else {
                throw new Error("What is output format \"" + selectedOutputFormat + "\"?");
            }
        } else if (typeof output === "object") { //Composed output. Example : key pairs
            var props = Object.keys(output);
            var formattedOutput = {};
            for (var i = 0; i < props.length; i++) {
                formattedOutput[props[i]] = _format_output(output[props[i]], selectedOutputFormat);
            }
            return formattedOutput;
        } else if (typeof output === "string") {
            return output;
        } else {
            throw new TypeError("Cannot format output");
        }
    }

    function _is_output_format(format) {
        var formats = output_formats();
        for (var i = 0; i < formats.length; i++) {
            if (formats[i] === format) {
                return true;
            }
        }
        return false;
    }

    function _check_output_format(format) {
        if (!format) {
            return;
        } else if (typeof format !== "string") {
            throw new TypeError("When defined, the output format must be a string");
        } else if (!_is_output_format(format)) {
            throw new Error(format + " is not a supported output format");
        }
    }

    //---------------------------------------------------------------------------
    // Memory management
    //
    // AllocatedBuf: address allocated using _malloc() + length
    function AllocatedBuf(length) {
        this.length = length;
        this.address = _malloc(length);
    }

    // Copy the content of a AllocatedBuf (_malloc()'d memory) into a Uint8Array
    AllocatedBuf.prototype.to_Uint8Array = function () {
        var result = new Uint8Array(this.length);
        result.set(libsodium.HEAPU8.subarray(this.address, this.address + this.length));
        return result;
    };

    // _malloc() a region and initialize it with the content of a Uint8Array
    function _to_allocated_buf_address(bytes) {
        var address = _malloc(bytes.length);
        libsodium.HEAPU8.set(bytes, address);
        return address;
    }

    function _malloc(length) {
        var result = libsodium._malloc(length);
        if (result === 0) {
            throw {
                message: "_malloc() failed",
                length: length
            };
        }
        return result;
    }

    function _free(address) {
        libsodium._free(address);
    }

    function _free_all(addresses) {
        for (var i = 0; i < addresses.length; i++) {
            _free(addresses[i]);
        }
    }

    function _free_and_throw_error(address_pool, err) {
        _free_all(address_pool);
        throw new Error(err);
    }

    function _free_and_throw_type_error(address_pool, err) {
        _free_all(address_pool);
        throw new TypeError(err);
    }

    function _require_defined(address_pool, varValue, varName) {
        if (varValue == undefined) {
            _free_and_throw_type_error(address_pool, varName + " cannot be null or undefined");
        }
    }

    function _any_to_Uint8Array(address_pool, varValue, varName) {
        _require_defined(address_pool, varValue, varName);
        if (varValue instanceof Uint8Array) {
            return varValue;
        } else if (typeof varValue === "string") {
            return from_string(varValue);
        }
        _free_and_throw_type_error(address_pool, "unsupported input type for " + varName);
    }

    
	function crypto_aead_chacha20poly1305_decrypt(secret_nonce, ciphertext, additional_data, public_nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: secret_nonce (unsized_buf_optional)
		
		var secret_nonce_address = null, secret_nonce_length = 0;
		if (secret_nonce != undefined) {
		        secret_nonce = _any_to_Uint8Array(address_pool, secret_nonce, "secret_nonce");
		        secret_nonce_address = _to_allocated_buf_address(secret_nonce);
		        secret_nonce_length = secret_nonce.length;
		        address_pool.push(secret_nonce_address);
		}
		
		// ---------- input: ciphertext (unsized_buf)
		
		ciphertext = _any_to_Uint8Array(address_pool, ciphertext, "ciphertext");
		var ciphertext_address = _to_allocated_buf_address(ciphertext),
		    ciphertext_length = ciphertext.length;
		address_pool.push(ciphertext_address);
		
		// ---------- input: additional_data (unsized_buf_optional)
		
		var additional_data_address = null, additional_data_length = 0;
		if (additional_data != undefined) {
		        additional_data = _any_to_Uint8Array(address_pool, additional_data, "additional_data");
		        additional_data_address = _to_allocated_buf_address(additional_data);
		        additional_data_length = additional_data.length;
		        address_pool.push(additional_data_address);
		}
		
		// ---------- input: public_nonce (buf)
		
		public_nonce = _any_to_Uint8Array(address_pool, public_nonce, "public_nonce");
		var public_nonce_address, public_nonce_length = (libsodium._crypto_aead_chacha20poly1305_npubbytes()) | 0;
		if (public_nonce.length !== public_nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid public_nonce length");
		}
		public_nonce_address = _to_allocated_buf_address(public_nonce);
		address_pool.push(public_nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_aead_chacha20poly1305_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output message (buf)
		
		var message_length = (ciphertext_length - libsodium._crypto_aead_chacha20poly1305_abytes()) | 0,
		    message = new AllocatedBuf(message_length),
		    message_address = message.address;
		
		address_pool.push(message_address);
		
		if ((libsodium._crypto_aead_chacha20poly1305_decrypt(message_address, null, secret_nonce_address, ciphertext_address, ciphertext_length, 0, additional_data_address, additional_data_length, 0, public_nonce_address, key_address)) === 0) {
			var ret = _format_output(message, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_aead_chacha20poly1305_decrypt_detached(secret_nonce, ciphertext, mac, additional_data, public_nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: secret_nonce (unsized_buf_optional)
		
		var secret_nonce_address = null, secret_nonce_length = 0;
		if (secret_nonce != undefined) {
		        secret_nonce = _any_to_Uint8Array(address_pool, secret_nonce, "secret_nonce");
		        secret_nonce_address = _to_allocated_buf_address(secret_nonce);
		        secret_nonce_length = secret_nonce.length;
		        address_pool.push(secret_nonce_address);
		}
		
		// ---------- input: ciphertext (unsized_buf)
		
		ciphertext = _any_to_Uint8Array(address_pool, ciphertext, "ciphertext");
		var ciphertext_address = _to_allocated_buf_address(ciphertext),
		    ciphertext_length = ciphertext.length;
		address_pool.push(ciphertext_address);
		
		// ---------- input: mac (buf)
		
		mac = _any_to_Uint8Array(address_pool, mac, "mac");
		var mac_address, mac_length = (libsodium._crypto_box_macbytes()) | 0;
		if (mac.length !== mac_length) {
		        _free_and_throw_type_error(address_pool, "invalid mac length");
		}
		mac_address = _to_allocated_buf_address(mac);
		address_pool.push(mac_address);
		
		// ---------- input: additional_data (unsized_buf_optional)
		
		var additional_data_address = null, additional_data_length = 0;
		if (additional_data != undefined) {
		        additional_data = _any_to_Uint8Array(address_pool, additional_data, "additional_data");
		        additional_data_address = _to_allocated_buf_address(additional_data);
		        additional_data_length = additional_data.length;
		        address_pool.push(additional_data_address);
		}
		
		// ---------- input: public_nonce (buf)
		
		public_nonce = _any_to_Uint8Array(address_pool, public_nonce, "public_nonce");
		var public_nonce_address, public_nonce_length = (libsodium._crypto_aead_chacha20poly1305_npubbytes()) | 0;
		if (public_nonce.length !== public_nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid public_nonce length");
		}
		public_nonce_address = _to_allocated_buf_address(public_nonce);
		address_pool.push(public_nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_aead_chacha20poly1305_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output message (buf)
		
		var message_length = (ciphertext_length) | 0,
		    message = new AllocatedBuf(message_length),
		    message_address = message.address;
		
		address_pool.push(message_address);
		
		if ((libsodium._crypto_aead_chacha20poly1305_decrypt_detached(message_address, secret_nonce_address, ciphertext_address, ciphertext_length, 0, mac_address, additional_data_address, additional_data_length, 0, public_nonce_address, key_address)) === 0) {
			var ret = _format_output(message, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_aead_chacha20poly1305_encrypt(message, additional_data, secret_nonce, public_nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: additional_data (unsized_buf_optional)
		
		var additional_data_address = null, additional_data_length = 0;
		if (additional_data != undefined) {
		        additional_data = _any_to_Uint8Array(address_pool, additional_data, "additional_data");
		        additional_data_address = _to_allocated_buf_address(additional_data);
		        additional_data_length = additional_data.length;
		        address_pool.push(additional_data_address);
		}
		
		// ---------- input: secret_nonce (unsized_buf_optional)
		
		var secret_nonce_address = null, secret_nonce_length = 0;
		if (secret_nonce != undefined) {
		        secret_nonce = _any_to_Uint8Array(address_pool, secret_nonce, "secret_nonce");
		        secret_nonce_address = _to_allocated_buf_address(secret_nonce);
		        secret_nonce_length = secret_nonce.length;
		        address_pool.push(secret_nonce_address);
		}
		
		// ---------- input: public_nonce (buf)
		
		public_nonce = _any_to_Uint8Array(address_pool, public_nonce, "public_nonce");
		var public_nonce_address, public_nonce_length = (libsodium._crypto_aead_chacha20poly1305_npubbytes()) | 0;
		if (public_nonce.length !== public_nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid public_nonce length");
		}
		public_nonce_address = _to_allocated_buf_address(public_nonce);
		address_pool.push(public_nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_aead_chacha20poly1305_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output ciphertext (buf)
		
		var ciphertext_length = (message_length + libsodium._crypto_aead_chacha20poly1305_abytes()) | 0,
		    ciphertext = new AllocatedBuf(ciphertext_length),
		    ciphertext_address = ciphertext.address;
		
		address_pool.push(ciphertext_address);
		
		if ((libsodium._crypto_aead_chacha20poly1305_encrypt(ciphertext_address, null, message_address, message_length, 0, additional_data_address, additional_data_length, 0, secret_nonce_address, public_nonce_address, key_address)) === 0) {
			var ret = _format_output(ciphertext, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_aead_chacha20poly1305_encrypt_detached(message, additional_data, secret_nonce, public_nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: additional_data (unsized_buf_optional)
		
		var additional_data_address = null, additional_data_length = 0;
		if (additional_data != undefined) {
		        additional_data = _any_to_Uint8Array(address_pool, additional_data, "additional_data");
		        additional_data_address = _to_allocated_buf_address(additional_data);
		        additional_data_length = additional_data.length;
		        address_pool.push(additional_data_address);
		}
		
		// ---------- input: secret_nonce (unsized_buf_optional)
		
		var secret_nonce_address = null, secret_nonce_length = 0;
		if (secret_nonce != undefined) {
		        secret_nonce = _any_to_Uint8Array(address_pool, secret_nonce, "secret_nonce");
		        secret_nonce_address = _to_allocated_buf_address(secret_nonce);
		        secret_nonce_length = secret_nonce.length;
		        address_pool.push(secret_nonce_address);
		}
		
		// ---------- input: public_nonce (buf)
		
		public_nonce = _any_to_Uint8Array(address_pool, public_nonce, "public_nonce");
		var public_nonce_address, public_nonce_length = (libsodium._crypto_aead_chacha20poly1305_npubbytes()) | 0;
		if (public_nonce.length !== public_nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid public_nonce length");
		}
		public_nonce_address = _to_allocated_buf_address(public_nonce);
		address_pool.push(public_nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_aead_chacha20poly1305_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output ciphertext (buf)
		
		var ciphertext_length = (message_length) | 0,
		    ciphertext = new AllocatedBuf(ciphertext_length),
		    ciphertext_address = ciphertext.address;
		
		address_pool.push(ciphertext_address);
		
		// ---------- output mac (buf)
		
		var mac_length = (libsodium._crypto_aead_chacha20poly1305_abytes()) | 0,
		    mac = new AllocatedBuf(mac_length),
		    mac_address = mac.address;
		
		address_pool.push(mac_address);
		
		if ((libsodium._crypto_aead_chacha20poly1305_encrypt_detached(ciphertext_address, mac_address, null, message_address, message_length, 0, additional_data_address, additional_data_length, 0, secret_nonce_address, public_nonce_address, key_address)) === 0) {
			var ret = _format_output({ciphertext: ciphertext, mac: mac}, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_aead_chacha20poly1305_ietf_decrypt(secret_nonce, ciphertext, additional_data, public_nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: secret_nonce (unsized_buf_optional)
		
		var secret_nonce_address = null, secret_nonce_length = 0;
		if (secret_nonce != undefined) {
		        secret_nonce = _any_to_Uint8Array(address_pool, secret_nonce, "secret_nonce");
		        secret_nonce_address = _to_allocated_buf_address(secret_nonce);
		        secret_nonce_length = secret_nonce.length;
		        address_pool.push(secret_nonce_address);
		}
		
		// ---------- input: ciphertext (unsized_buf)
		
		ciphertext = _any_to_Uint8Array(address_pool, ciphertext, "ciphertext");
		var ciphertext_address = _to_allocated_buf_address(ciphertext),
		    ciphertext_length = ciphertext.length;
		address_pool.push(ciphertext_address);
		
		// ---------- input: additional_data (unsized_buf_optional)
		
		var additional_data_address = null, additional_data_length = 0;
		if (additional_data != undefined) {
		        additional_data = _any_to_Uint8Array(address_pool, additional_data, "additional_data");
		        additional_data_address = _to_allocated_buf_address(additional_data);
		        additional_data_length = additional_data.length;
		        address_pool.push(additional_data_address);
		}
		
		// ---------- input: public_nonce (buf)
		
		public_nonce = _any_to_Uint8Array(address_pool, public_nonce, "public_nonce");
		var public_nonce_address, public_nonce_length = (libsodium._crypto_aead_chacha20poly1305_ietf_npubbytes()) | 0;
		if (public_nonce.length !== public_nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid public_nonce length");
		}
		public_nonce_address = _to_allocated_buf_address(public_nonce);
		address_pool.push(public_nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_aead_chacha20poly1305_ietf_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output message (buf)
		
		var message_length = (ciphertext_length - libsodium._crypto_aead_chacha20poly1305_ietf_abytes()) | 0,
		    message = new AllocatedBuf(message_length),
		    message_address = message.address;
		
		address_pool.push(message_address);
		
		if ((libsodium._crypto_aead_chacha20poly1305_ietf_decrypt(message_address, null, secret_nonce_address, ciphertext_address, ciphertext_length, 0, additional_data_address, additional_data_length, 0, public_nonce_address, key_address)) === 0) {
			var ret = _format_output(message, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_aead_chacha20poly1305_ietf_decrypt_detached(secret_nonce, ciphertext, mac, additional_data, public_nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: secret_nonce (unsized_buf_optional)
		
		var secret_nonce_address = null, secret_nonce_length = 0;
		if (secret_nonce != undefined) {
		        secret_nonce = _any_to_Uint8Array(address_pool, secret_nonce, "secret_nonce");
		        secret_nonce_address = _to_allocated_buf_address(secret_nonce);
		        secret_nonce_length = secret_nonce.length;
		        address_pool.push(secret_nonce_address);
		}
		
		// ---------- input: ciphertext (unsized_buf)
		
		ciphertext = _any_to_Uint8Array(address_pool, ciphertext, "ciphertext");
		var ciphertext_address = _to_allocated_buf_address(ciphertext),
		    ciphertext_length = ciphertext.length;
		address_pool.push(ciphertext_address);
		
		// ---------- input: mac (buf)
		
		mac = _any_to_Uint8Array(address_pool, mac, "mac");
		var mac_address, mac_length = (libsodium._crypto_box_macbytes()) | 0;
		if (mac.length !== mac_length) {
		        _free_and_throw_type_error(address_pool, "invalid mac length");
		}
		mac_address = _to_allocated_buf_address(mac);
		address_pool.push(mac_address);
		
		// ---------- input: additional_data (unsized_buf_optional)
		
		var additional_data_address = null, additional_data_length = 0;
		if (additional_data != undefined) {
		        additional_data = _any_to_Uint8Array(address_pool, additional_data, "additional_data");
		        additional_data_address = _to_allocated_buf_address(additional_data);
		        additional_data_length = additional_data.length;
		        address_pool.push(additional_data_address);
		}
		
		// ---------- input: public_nonce (buf)
		
		public_nonce = _any_to_Uint8Array(address_pool, public_nonce, "public_nonce");
		var public_nonce_address, public_nonce_length = (libsodium._crypto_aead_chacha20poly1305_ietf_npubbytes()) | 0;
		if (public_nonce.length !== public_nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid public_nonce length");
		}
		public_nonce_address = _to_allocated_buf_address(public_nonce);
		address_pool.push(public_nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_aead_chacha20poly1305_ietf_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output message (buf)
		
		var message_length = (ciphertext_length) | 0,
		    message = new AllocatedBuf(message_length),
		    message_address = message.address;
		
		address_pool.push(message_address);
		
		if ((libsodium._crypto_aead_chacha20poly1305_ietf_decrypt_detached(message_address, secret_nonce_address, ciphertext_address, ciphertext_length, 0, mac_address, additional_data_address, additional_data_length, 0, public_nonce_address, key_address)) === 0) {
			var ret = _format_output(message, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_aead_chacha20poly1305_ietf_encrypt(message, additional_data, secret_nonce, public_nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: additional_data (unsized_buf_optional)
		
		var additional_data_address = null, additional_data_length = 0;
		if (additional_data != undefined) {
		        additional_data = _any_to_Uint8Array(address_pool, additional_data, "additional_data");
		        additional_data_address = _to_allocated_buf_address(additional_data);
		        additional_data_length = additional_data.length;
		        address_pool.push(additional_data_address);
		}
		
		// ---------- input: secret_nonce (unsized_buf_optional)
		
		var secret_nonce_address = null, secret_nonce_length = 0;
		if (secret_nonce != undefined) {
		        secret_nonce = _any_to_Uint8Array(address_pool, secret_nonce, "secret_nonce");
		        secret_nonce_address = _to_allocated_buf_address(secret_nonce);
		        secret_nonce_length = secret_nonce.length;
		        address_pool.push(secret_nonce_address);
		}
		
		// ---------- input: public_nonce (buf)
		
		public_nonce = _any_to_Uint8Array(address_pool, public_nonce, "public_nonce");
		var public_nonce_address, public_nonce_length = (libsodium._crypto_aead_chacha20poly1305_ietf_npubbytes()) | 0;
		if (public_nonce.length !== public_nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid public_nonce length");
		}
		public_nonce_address = _to_allocated_buf_address(public_nonce);
		address_pool.push(public_nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_aead_chacha20poly1305_ietf_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output ciphertext (buf)
		
		var ciphertext_length = (message_length + libsodium._crypto_aead_chacha20poly1305_ietf_abytes()) | 0,
		    ciphertext = new AllocatedBuf(ciphertext_length),
		    ciphertext_address = ciphertext.address;
		
		address_pool.push(ciphertext_address);
		
		if ((libsodium._crypto_aead_chacha20poly1305_ietf_encrypt(ciphertext_address, null, message_address, message_length, 0, additional_data_address, additional_data_length, 0, secret_nonce_address, public_nonce_address, key_address)) === 0) {
			var ret = _format_output(ciphertext, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_aead_chacha20poly1305_ietf_encrypt_detached(message, additional_data, secret_nonce, public_nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: additional_data (unsized_buf_optional)
		
		var additional_data_address = null, additional_data_length = 0;
		if (additional_data != undefined) {
		        additional_data = _any_to_Uint8Array(address_pool, additional_data, "additional_data");
		        additional_data_address = _to_allocated_buf_address(additional_data);
		        additional_data_length = additional_data.length;
		        address_pool.push(additional_data_address);
		}
		
		// ---------- input: secret_nonce (unsized_buf_optional)
		
		var secret_nonce_address = null, secret_nonce_length = 0;
		if (secret_nonce != undefined) {
		        secret_nonce = _any_to_Uint8Array(address_pool, secret_nonce, "secret_nonce");
		        secret_nonce_address = _to_allocated_buf_address(secret_nonce);
		        secret_nonce_length = secret_nonce.length;
		        address_pool.push(secret_nonce_address);
		}
		
		// ---------- input: public_nonce (buf)
		
		public_nonce = _any_to_Uint8Array(address_pool, public_nonce, "public_nonce");
		var public_nonce_address, public_nonce_length = (libsodium._crypto_aead_chacha20poly1305_ietf_npubbytes()) | 0;
		if (public_nonce.length !== public_nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid public_nonce length");
		}
		public_nonce_address = _to_allocated_buf_address(public_nonce);
		address_pool.push(public_nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_aead_chacha20poly1305_ietf_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output ciphertext (buf)
		
		var ciphertext_length = (message_length) | 0,
		    ciphertext = new AllocatedBuf(ciphertext_length),
		    ciphertext_address = ciphertext.address;
		
		address_pool.push(ciphertext_address);
		
		// ---------- output mac (buf)
		
		var mac_length = (libsodium._crypto_aead_chacha20poly1305_ietf_abytes()) | 0,
		    mac = new AllocatedBuf(mac_length),
		    mac_address = mac.address;
		
		address_pool.push(mac_address);
		
		if ((libsodium._crypto_aead_chacha20poly1305_ietf_encrypt_detached(ciphertext_address, mac_address, null, message_address, message_length, 0, additional_data_address, additional_data_length, 0, secret_nonce_address, public_nonce_address, key_address)) === 0) {
			var ret = _format_output({ciphertext: ciphertext, mac: mac}, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_aead_chacha20poly1305_ietf_keygen(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- output output (buf)
		
		var output_length = (libsodium._crypto_aead_chacha20poly1305_ietf_keybytes()) | 0,
		    output = new AllocatedBuf(output_length),
		    output_address = output.address;
		
		address_pool.push(output_address);
		
		libsodium._crypto_aead_chacha20poly1305_ietf_keygen(output_address);
		var ret = (_format_output(output, outputFormat));
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_aead_chacha20poly1305_keygen(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- output output (buf)
		
		var output_length = (libsodium._crypto_aead_chacha20poly1305_keybytes()) | 0,
		    output = new AllocatedBuf(output_length),
		    output_address = output.address;
		
		address_pool.push(output_address);
		
		libsodium._crypto_aead_chacha20poly1305_keygen(output_address);
		var ret = (_format_output(output, outputFormat));
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_aead_xchacha20poly1305_ietf_decrypt(secret_nonce, ciphertext, additional_data, public_nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: secret_nonce (unsized_buf_optional)
		
		var secret_nonce_address = null, secret_nonce_length = 0;
		if (secret_nonce != undefined) {
		        secret_nonce = _any_to_Uint8Array(address_pool, secret_nonce, "secret_nonce");
		        secret_nonce_address = _to_allocated_buf_address(secret_nonce);
		        secret_nonce_length = secret_nonce.length;
		        address_pool.push(secret_nonce_address);
		}
		
		// ---------- input: ciphertext (unsized_buf)
		
		ciphertext = _any_to_Uint8Array(address_pool, ciphertext, "ciphertext");
		var ciphertext_address = _to_allocated_buf_address(ciphertext),
		    ciphertext_length = ciphertext.length;
		address_pool.push(ciphertext_address);
		
		// ---------- input: additional_data (unsized_buf_optional)
		
		var additional_data_address = null, additional_data_length = 0;
		if (additional_data != undefined) {
		        additional_data = _any_to_Uint8Array(address_pool, additional_data, "additional_data");
		        additional_data_address = _to_allocated_buf_address(additional_data);
		        additional_data_length = additional_data.length;
		        address_pool.push(additional_data_address);
		}
		
		// ---------- input: public_nonce (buf)
		
		public_nonce = _any_to_Uint8Array(address_pool, public_nonce, "public_nonce");
		var public_nonce_address, public_nonce_length = (libsodium._crypto_aead_xchacha20poly1305_ietf_npubbytes()) | 0;
		if (public_nonce.length !== public_nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid public_nonce length");
		}
		public_nonce_address = _to_allocated_buf_address(public_nonce);
		address_pool.push(public_nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_aead_xchacha20poly1305_ietf_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output message (buf)
		
		var message_length = (ciphertext_length - libsodium._crypto_aead_xchacha20poly1305_ietf_abytes()) | 0,
		    message = new AllocatedBuf(message_length),
		    message_address = message.address;
		
		address_pool.push(message_address);
		
		if ((libsodium._crypto_aead_xchacha20poly1305_ietf_decrypt(message_address, null, secret_nonce_address, ciphertext_address, ciphertext_length, 0, additional_data_address, additional_data_length, 0, public_nonce_address, key_address)) === 0) {
			var ret = _format_output(message, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_aead_xchacha20poly1305_ietf_decrypt_detached(secret_nonce, ciphertext, mac, additional_data, public_nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: secret_nonce (unsized_buf_optional)
		
		var secret_nonce_address = null, secret_nonce_length = 0;
		if (secret_nonce != undefined) {
		        secret_nonce = _any_to_Uint8Array(address_pool, secret_nonce, "secret_nonce");
		        secret_nonce_address = _to_allocated_buf_address(secret_nonce);
		        secret_nonce_length = secret_nonce.length;
		        address_pool.push(secret_nonce_address);
		}
		
		// ---------- input: ciphertext (unsized_buf)
		
		ciphertext = _any_to_Uint8Array(address_pool, ciphertext, "ciphertext");
		var ciphertext_address = _to_allocated_buf_address(ciphertext),
		    ciphertext_length = ciphertext.length;
		address_pool.push(ciphertext_address);
		
		// ---------- input: mac (buf)
		
		mac = _any_to_Uint8Array(address_pool, mac, "mac");
		var mac_address, mac_length = (libsodium._crypto_box_macbytes()) | 0;
		if (mac.length !== mac_length) {
		        _free_and_throw_type_error(address_pool, "invalid mac length");
		}
		mac_address = _to_allocated_buf_address(mac);
		address_pool.push(mac_address);
		
		// ---------- input: additional_data (unsized_buf_optional)
		
		var additional_data_address = null, additional_data_length = 0;
		if (additional_data != undefined) {
		        additional_data = _any_to_Uint8Array(address_pool, additional_data, "additional_data");
		        additional_data_address = _to_allocated_buf_address(additional_data);
		        additional_data_length = additional_data.length;
		        address_pool.push(additional_data_address);
		}
		
		// ---------- input: public_nonce (buf)
		
		public_nonce = _any_to_Uint8Array(address_pool, public_nonce, "public_nonce");
		var public_nonce_address, public_nonce_length = (libsodium._crypto_aead_xchacha20poly1305_ietf_npubbytes()) | 0;
		if (public_nonce.length !== public_nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid public_nonce length");
		}
		public_nonce_address = _to_allocated_buf_address(public_nonce);
		address_pool.push(public_nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_aead_xchacha20poly1305_ietf_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output message (buf)
		
		var message_length = (ciphertext_length) | 0,
		    message = new AllocatedBuf(message_length),
		    message_address = message.address;
		
		address_pool.push(message_address);
		
		if ((libsodium._crypto_aead_xchacha20poly1305_ietf_decrypt_detached(message_address, secret_nonce_address, ciphertext_address, ciphertext_length, 0, mac_address, additional_data_address, additional_data_length, 0, public_nonce_address, key_address)) === 0) {
			var ret = _format_output(message, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_aead_xchacha20poly1305_ietf_encrypt(message, additional_data, secret_nonce, public_nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: additional_data (unsized_buf_optional)
		
		var additional_data_address = null, additional_data_length = 0;
		if (additional_data != undefined) {
		        additional_data = _any_to_Uint8Array(address_pool, additional_data, "additional_data");
		        additional_data_address = _to_allocated_buf_address(additional_data);
		        additional_data_length = additional_data.length;
		        address_pool.push(additional_data_address);
		}
		
		// ---------- input: secret_nonce (unsized_buf_optional)
		
		var secret_nonce_address = null, secret_nonce_length = 0;
		if (secret_nonce != undefined) {
		        secret_nonce = _any_to_Uint8Array(address_pool, secret_nonce, "secret_nonce");
		        secret_nonce_address = _to_allocated_buf_address(secret_nonce);
		        secret_nonce_length = secret_nonce.length;
		        address_pool.push(secret_nonce_address);
		}
		
		// ---------- input: public_nonce (buf)
		
		public_nonce = _any_to_Uint8Array(address_pool, public_nonce, "public_nonce");
		var public_nonce_address, public_nonce_length = (libsodium._crypto_aead_xchacha20poly1305_ietf_npubbytes()) | 0;
		if (public_nonce.length !== public_nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid public_nonce length");
		}
		public_nonce_address = _to_allocated_buf_address(public_nonce);
		address_pool.push(public_nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_aead_xchacha20poly1305_ietf_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output ciphertext (buf)
		
		var ciphertext_length = (message_length + libsodium._crypto_aead_xchacha20poly1305_ietf_abytes()) | 0,
		    ciphertext = new AllocatedBuf(ciphertext_length),
		    ciphertext_address = ciphertext.address;
		
		address_pool.push(ciphertext_address);
		
		if ((libsodium._crypto_aead_xchacha20poly1305_ietf_encrypt(ciphertext_address, null, message_address, message_length, 0, additional_data_address, additional_data_length, 0, secret_nonce_address, public_nonce_address, key_address)) === 0) {
			var ret = _format_output(ciphertext, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_aead_xchacha20poly1305_ietf_encrypt_detached(message, additional_data, secret_nonce, public_nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: additional_data (unsized_buf_optional)
		
		var additional_data_address = null, additional_data_length = 0;
		if (additional_data != undefined) {
		        additional_data = _any_to_Uint8Array(address_pool, additional_data, "additional_data");
		        additional_data_address = _to_allocated_buf_address(additional_data);
		        additional_data_length = additional_data.length;
		        address_pool.push(additional_data_address);
		}
		
		// ---------- input: secret_nonce (unsized_buf_optional)
		
		var secret_nonce_address = null, secret_nonce_length = 0;
		if (secret_nonce != undefined) {
		        secret_nonce = _any_to_Uint8Array(address_pool, secret_nonce, "secret_nonce");
		        secret_nonce_address = _to_allocated_buf_address(secret_nonce);
		        secret_nonce_length = secret_nonce.length;
		        address_pool.push(secret_nonce_address);
		}
		
		// ---------- input: public_nonce (buf)
		
		public_nonce = _any_to_Uint8Array(address_pool, public_nonce, "public_nonce");
		var public_nonce_address, public_nonce_length = (libsodium._crypto_aead_xchacha20poly1305_ietf_npubbytes()) | 0;
		if (public_nonce.length !== public_nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid public_nonce length");
		}
		public_nonce_address = _to_allocated_buf_address(public_nonce);
		address_pool.push(public_nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_aead_xchacha20poly1305_ietf_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output ciphertext (buf)
		
		var ciphertext_length = (message_length) | 0,
		    ciphertext = new AllocatedBuf(ciphertext_length),
		    ciphertext_address = ciphertext.address;
		
		address_pool.push(ciphertext_address);
		
		// ---------- output mac (buf)
		
		var mac_length = (libsodium._crypto_aead_xchacha20poly1305_ietf_abytes()) | 0,
		    mac = new AllocatedBuf(mac_length),
		    mac_address = mac.address;
		
		address_pool.push(mac_address);
		
		if ((libsodium._crypto_aead_xchacha20poly1305_ietf_encrypt_detached(ciphertext_address, mac_address, null, message_address, message_length, 0, additional_data_address, additional_data_length, 0, secret_nonce_address, public_nonce_address, key_address)) === 0) {
			var ret = _format_output({ciphertext: ciphertext, mac: mac}, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_aead_xchacha20poly1305_ietf_keygen(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- output output (buf)
		
		var output_length = (libsodium._crypto_aead_xchacha20poly1305_ietf_keybytes()) | 0,
		    output = new AllocatedBuf(output_length),
		    output_address = output.address;
		
		address_pool.push(output_address);
		
		libsodium._crypto_aead_xchacha20poly1305_ietf_keygen(output_address);
		var ret = (_format_output(output, outputFormat));
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_auth(message, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_auth_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output tag (buf)
		
		var tag_length = (libsodium._crypto_auth_bytes()) | 0,
		    tag = new AllocatedBuf(tag_length),
		    tag_address = tag.address;
		
		address_pool.push(tag_address);
		
		if ((libsodium._crypto_auth(tag_address, message_address, message_length, 0, key_address) | 0) === 0) {
			var ret = _format_output(tag, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_auth_hmacsha256(message, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_auth_hmacsha256_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output hash (buf)
		
		var hash_length = (libsodium._crypto_auth_hmacsha256_bytes()) | 0,
		    hash = new AllocatedBuf(hash_length),
		    hash_address = hash.address;
		
		address_pool.push(hash_address);
		
		if ((libsodium._crypto_auth_hmacsha256(hash_address, message_address, message_length, 0, key_address) | 0) === 0) {
			var ret = _format_output(hash, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_auth_hmacsha256_keygen(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- output output (buf)
		
		var output_length = (libsodium._crypto_auth_hmacsha256_keybytes()) | 0,
		    output = new AllocatedBuf(output_length),
		    output_address = output.address;
		
		address_pool.push(output_address);
		
		libsodium._crypto_auth_hmacsha256_keygen(output_address);
		var ret = (_format_output(output, outputFormat));
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_auth_hmacsha256_verify(tag, message, key) {
		var address_pool = [];

		// ---------- input: tag (buf)
		
		tag = _any_to_Uint8Array(address_pool, tag, "tag");
		var tag_address, tag_length = (libsodium._crypto_auth_hmacsha256_bytes()) | 0;
		if (tag.length !== tag_length) {
		        _free_and_throw_type_error(address_pool, "invalid tag length");
		}
		tag_address = _to_allocated_buf_address(tag);
		address_pool.push(tag_address);
		
		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_auth_hmacsha256_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		var result = libsodium._crypto_auth_hmacsha256_verify(tag_address, message_address, message_length, 0, key_address) | 0;
		var ret = (result === 0);
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_auth_hmacsha512(message, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_auth_hmacsha512_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output hash (buf)
		
		var hash_length = (libsodium._crypto_auth_hmacsha512_bytes()) | 0,
		    hash = new AllocatedBuf(hash_length),
		    hash_address = hash.address;
		
		address_pool.push(hash_address);
		
		if ((libsodium._crypto_auth_hmacsha512(hash_address, message_address, message_length, 0, key_address) | 0) === 0) {
			var ret = _format_output(hash, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_auth_hmacsha512_keygen(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- output output (buf)
		
		var output_length = (libsodium._crypto_auth_hmacsha512_keybytes()) | 0,
		    output = new AllocatedBuf(output_length),
		    output_address = output.address;
		
		address_pool.push(output_address);
		
		libsodium._crypto_auth_hmacsha512_keygen(output_address);
		var ret = (_format_output(output, outputFormat));
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_auth_hmacsha512_verify(tag, message, key) {
		var address_pool = [];

		// ---------- input: tag (buf)
		
		tag = _any_to_Uint8Array(address_pool, tag, "tag");
		var tag_address, tag_length = (libsodium._crypto_auth_hmacsha512_bytes()) | 0;
		if (tag.length !== tag_length) {
		        _free_and_throw_type_error(address_pool, "invalid tag length");
		}
		tag_address = _to_allocated_buf_address(tag);
		address_pool.push(tag_address);
		
		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_auth_hmacsha512_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		var result = libsodium._crypto_auth_hmacsha512_verify(tag_address, message_address, message_length, 0, key_address) | 0;
		var ret = (result === 0);
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_auth_keygen(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- output output (buf)
		
		var output_length = (libsodium._crypto_auth_keybytes()) | 0,
		    output = new AllocatedBuf(output_length),
		    output_address = output.address;
		
		address_pool.push(output_address);
		
		libsodium._crypto_auth_keygen(output_address);
		var ret = (_format_output(output, outputFormat));
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_auth_verify(tag, message, key) {
		var address_pool = [];

		// ---------- input: tag (buf)
		
		tag = _any_to_Uint8Array(address_pool, tag, "tag");
		var tag_address, tag_length = (libsodium._crypto_auth_bytes()) | 0;
		if (tag.length !== tag_length) {
		        _free_and_throw_type_error(address_pool, "invalid tag length");
		}
		tag_address = _to_allocated_buf_address(tag);
		address_pool.push(tag_address);
		
		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_auth_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		var result = libsodium._crypto_auth_verify(tag_address, message_address, message_length, 0, key_address) | 0;
		var ret = (result === 0);
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_box_beforenm(publicKey, secretKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: publicKey (buf)
		
		publicKey = _any_to_Uint8Array(address_pool, publicKey, "publicKey");
		var publicKey_address, publicKey_length = (libsodium._crypto_box_publickeybytes()) | 0;
		if (publicKey.length !== publicKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid publicKey length");
		}
		publicKey_address = _to_allocated_buf_address(publicKey);
		address_pool.push(publicKey_address);
		
		// ---------- input: secretKey (buf)
		
		secretKey = _any_to_Uint8Array(address_pool, secretKey, "secretKey");
		var secretKey_address, secretKey_length = (libsodium._crypto_box_secretkeybytes()) | 0;
		if (secretKey.length !== secretKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid secretKey length");
		}
		secretKey_address = _to_allocated_buf_address(secretKey);
		address_pool.push(secretKey_address);
		
		// ---------- output sharedKey (buf)
		
		var sharedKey_length = (libsodium._crypto_box_beforenmbytes()) | 0,
		    sharedKey = new AllocatedBuf(sharedKey_length),
		    sharedKey_address = sharedKey.address;
		
		address_pool.push(sharedKey_address);
		
		if ((libsodium._crypto_box_beforenm(sharedKey_address, publicKey_address, secretKey_address) | 0) === 0) {
			var ret = _format_output(sharedKey, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_box_detached(message, nonce, publicKey, secretKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: nonce (buf)
		
		nonce = _any_to_Uint8Array(address_pool, nonce, "nonce");
		var nonce_address, nonce_length = (libsodium._crypto_box_noncebytes()) | 0;
		if (nonce.length !== nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid nonce length");
		}
		nonce_address = _to_allocated_buf_address(nonce);
		address_pool.push(nonce_address);
		
		// ---------- input: publicKey (buf)
		
		publicKey = _any_to_Uint8Array(address_pool, publicKey, "publicKey");
		var publicKey_address, publicKey_length = (libsodium._crypto_box_publickeybytes()) | 0;
		if (publicKey.length !== publicKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid publicKey length");
		}
		publicKey_address = _to_allocated_buf_address(publicKey);
		address_pool.push(publicKey_address);
		
		// ---------- input: secretKey (buf)
		
		secretKey = _any_to_Uint8Array(address_pool, secretKey, "secretKey");
		var secretKey_address, secretKey_length = (libsodium._crypto_box_secretkeybytes()) | 0;
		if (secretKey.length !== secretKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid secretKey length");
		}
		secretKey_address = _to_allocated_buf_address(secretKey);
		address_pool.push(secretKey_address);
		
		// ---------- output ciphertext (buf)
		
		var ciphertext_length = (message_length) | 0,
		    ciphertext = new AllocatedBuf(ciphertext_length),
		    ciphertext_address = ciphertext.address;
		
		address_pool.push(ciphertext_address);
		
		// ---------- output mac (buf)
		
		var mac_length = (libsodium._crypto_box_macbytes()) | 0,
		    mac = new AllocatedBuf(mac_length),
		    mac_address = mac.address;
		
		address_pool.push(mac_address);
		
		if ((libsodium._crypto_box_detached(ciphertext_address, mac_address, message_address, message_length, 0, nonce_address, publicKey_address, secretKey_address) | 0) === 0) {
			var ret = _format_output({ciphertext: ciphertext, mac: mac}, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_box_easy(message, nonce, publicKey, secretKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: nonce (buf)
		
		nonce = _any_to_Uint8Array(address_pool, nonce, "nonce");
		var nonce_address, nonce_length = (libsodium._crypto_box_noncebytes()) | 0;
		if (nonce.length !== nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid nonce length");
		}
		nonce_address = _to_allocated_buf_address(nonce);
		address_pool.push(nonce_address);
		
		// ---------- input: publicKey (buf)
		
		publicKey = _any_to_Uint8Array(address_pool, publicKey, "publicKey");
		var publicKey_address, publicKey_length = (libsodium._crypto_box_publickeybytes()) | 0;
		if (publicKey.length !== publicKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid publicKey length");
		}
		publicKey_address = _to_allocated_buf_address(publicKey);
		address_pool.push(publicKey_address);
		
		// ---------- input: secretKey (buf)
		
		secretKey = _any_to_Uint8Array(address_pool, secretKey, "secretKey");
		var secretKey_address, secretKey_length = (libsodium._crypto_box_secretkeybytes()) | 0;
		if (secretKey.length !== secretKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid secretKey length");
		}
		secretKey_address = _to_allocated_buf_address(secretKey);
		address_pool.push(secretKey_address);
		
		// ---------- output ciphertext (buf)
		
		var ciphertext_length = (message_length + libsodium._crypto_box_macbytes()) | 0,
		    ciphertext = new AllocatedBuf(ciphertext_length),
		    ciphertext_address = ciphertext.address;
		
		address_pool.push(ciphertext_address);
		
		if ((libsodium._crypto_box_easy(ciphertext_address, message_address, message_length, 0, nonce_address, publicKey_address, secretKey_address) | 0) === 0) {
			var ret = _format_output(ciphertext, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_box_easy_afternm(message, nonce, sharedKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: nonce (buf)
		
		nonce = _any_to_Uint8Array(address_pool, nonce, "nonce");
		var nonce_address, nonce_length = (libsodium._crypto_box_noncebytes()) | 0;
		if (nonce.length !== nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid nonce length");
		}
		nonce_address = _to_allocated_buf_address(nonce);
		address_pool.push(nonce_address);
		
		// ---------- input: sharedKey (buf)
		
		sharedKey = _any_to_Uint8Array(address_pool, sharedKey, "sharedKey");
		var sharedKey_address, sharedKey_length = (libsodium._crypto_box_beforenmbytes()) | 0;
		if (sharedKey.length !== sharedKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid sharedKey length");
		}
		sharedKey_address = _to_allocated_buf_address(sharedKey);
		address_pool.push(sharedKey_address);
		
		// ---------- output ciphertext (buf)
		
		var ciphertext_length = (message_length + libsodium._crypto_box_macbytes()) | 0,
		    ciphertext = new AllocatedBuf(ciphertext_length),
		    ciphertext_address = ciphertext.address;
		
		address_pool.push(ciphertext_address);
		
		if ((libsodium._crypto_box_easy_afternm(ciphertext_address, message_address, message_length, 0, nonce_address, sharedKey_address) | 0) === 0) {
			var ret = _format_output(ciphertext, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_box_keypair(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- output publicKey (buf)
		
		var publicKey_length = (libsodium._crypto_box_publickeybytes()) | 0,
		    publicKey = new AllocatedBuf(publicKey_length),
		    publicKey_address = publicKey.address;
		
		address_pool.push(publicKey_address);
		
		// ---------- output secretKey (buf)
		
		var secretKey_length = (libsodium._crypto_box_secretkeybytes()) | 0,
		    secretKey = new AllocatedBuf(secretKey_length),
		    secretKey_address = secretKey.address;
		
		address_pool.push(secretKey_address);
		
		if ((libsodium._crypto_box_keypair(publicKey_address, secretKey_address) | 0) === 0) {
			var ret = _format_output({publicKey: publicKey, privateKey: secretKey, keyType: "curve25519"}, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_box_open_detached(ciphertext, mac, nonce, publicKey, secretKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: ciphertext (unsized_buf)
		
		ciphertext = _any_to_Uint8Array(address_pool, ciphertext, "ciphertext");
		var ciphertext_address = _to_allocated_buf_address(ciphertext),
		    ciphertext_length = ciphertext.length;
		address_pool.push(ciphertext_address);
		
		// ---------- input: mac (buf)
		
		mac = _any_to_Uint8Array(address_pool, mac, "mac");
		var mac_address, mac_length = (libsodium._crypto_box_macbytes()) | 0;
		if (mac.length !== mac_length) {
		        _free_and_throw_type_error(address_pool, "invalid mac length");
		}
		mac_address = _to_allocated_buf_address(mac);
		address_pool.push(mac_address);
		
		// ---------- input: nonce (buf)
		
		nonce = _any_to_Uint8Array(address_pool, nonce, "nonce");
		var nonce_address, nonce_length = (libsodium._crypto_box_noncebytes()) | 0;
		if (nonce.length !== nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid nonce length");
		}
		nonce_address = _to_allocated_buf_address(nonce);
		address_pool.push(nonce_address);
		
		// ---------- input: publicKey (buf)
		
		publicKey = _any_to_Uint8Array(address_pool, publicKey, "publicKey");
		var publicKey_address, publicKey_length = (libsodium._crypto_box_publickeybytes()) | 0;
		if (publicKey.length !== publicKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid publicKey length");
		}
		publicKey_address = _to_allocated_buf_address(publicKey);
		address_pool.push(publicKey_address);
		
		// ---------- input: secretKey (buf)
		
		secretKey = _any_to_Uint8Array(address_pool, secretKey, "secretKey");
		var secretKey_address, secretKey_length = (libsodium._crypto_box_secretkeybytes()) | 0;
		if (secretKey.length !== secretKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid secretKey length");
		}
		secretKey_address = _to_allocated_buf_address(secretKey);
		address_pool.push(secretKey_address);
		
		// ---------- output plaintext (buf)
		
		var plaintext_length = (ciphertext_length) | 0,
		    plaintext = new AllocatedBuf(plaintext_length),
		    plaintext_address = plaintext.address;
		
		address_pool.push(plaintext_address);
		
		if ((libsodium._crypto_box_open_detached(plaintext_address, ciphertext_address, mac_address, ciphertext_length, 0, nonce_address, publicKey_address, secretKey_address) | 0) === 0) {
			var ret = _format_output(plaintext, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_box_open_easy(ciphertext, nonce, publicKey, secretKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: ciphertext (unsized_buf)
		
		ciphertext = _any_to_Uint8Array(address_pool, ciphertext, "ciphertext");
		var ciphertext_address = _to_allocated_buf_address(ciphertext),
		    ciphertext_length = ciphertext.length;
		address_pool.push(ciphertext_address);
		
		// ---------- input: nonce (buf)
		
		nonce = _any_to_Uint8Array(address_pool, nonce, "nonce");
		var nonce_address, nonce_length = (libsodium._crypto_box_noncebytes()) | 0;
		if (nonce.length !== nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid nonce length");
		}
		nonce_address = _to_allocated_buf_address(nonce);
		address_pool.push(nonce_address);
		
		// ---------- input: publicKey (buf)
		
		publicKey = _any_to_Uint8Array(address_pool, publicKey, "publicKey");
		var publicKey_address, publicKey_length = (libsodium._crypto_box_publickeybytes()) | 0;
		if (publicKey.length !== publicKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid publicKey length");
		}
		publicKey_address = _to_allocated_buf_address(publicKey);
		address_pool.push(publicKey_address);
		
		// ---------- input: secretKey (buf)
		
		secretKey = _any_to_Uint8Array(address_pool, secretKey, "secretKey");
		var secretKey_address, secretKey_length = (libsodium._crypto_box_secretkeybytes()) | 0;
		if (secretKey.length !== secretKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid secretKey length");
		}
		secretKey_address = _to_allocated_buf_address(secretKey);
		address_pool.push(secretKey_address);
		
		// ---------- output plaintext (buf)
		
		var plaintext_length = (ciphertext_length - libsodium._crypto_box_macbytes()) | 0,
		    plaintext = new AllocatedBuf(plaintext_length),
		    plaintext_address = plaintext.address;
		
		address_pool.push(plaintext_address);
		
		if ((libsodium._crypto_box_open_easy(plaintext_address, ciphertext_address, ciphertext_length, 0, nonce_address, publicKey_address, secretKey_address) | 0) === 0) {
			var ret = _format_output(plaintext, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_box_open_easy_afternm(ciphertext, nonce, sharedKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: ciphertext (unsized_buf)
		
		ciphertext = _any_to_Uint8Array(address_pool, ciphertext, "ciphertext");
		var ciphertext_address = _to_allocated_buf_address(ciphertext),
		    ciphertext_length = ciphertext.length;
		address_pool.push(ciphertext_address);
		
		// ---------- input: nonce (buf)
		
		nonce = _any_to_Uint8Array(address_pool, nonce, "nonce");
		var nonce_address, nonce_length = (libsodium._crypto_box_noncebytes()) | 0;
		if (nonce.length !== nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid nonce length");
		}
		nonce_address = _to_allocated_buf_address(nonce);
		address_pool.push(nonce_address);
		
		// ---------- input: sharedKey (buf)
		
		sharedKey = _any_to_Uint8Array(address_pool, sharedKey, "sharedKey");
		var sharedKey_address, sharedKey_length = (libsodium._crypto_box_beforenmbytes()) | 0;
		if (sharedKey.length !== sharedKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid sharedKey length");
		}
		sharedKey_address = _to_allocated_buf_address(sharedKey);
		address_pool.push(sharedKey_address);
		
		// ---------- output plaintext (buf)
		
		var plaintext_length = (ciphertext_length - libsodium._crypto_box_macbytes()) | 0,
		    plaintext = new AllocatedBuf(plaintext_length),
		    plaintext_address = plaintext.address;
		
		address_pool.push(plaintext_address);
		
		if ((libsodium._crypto_box_open_easy_afternm(plaintext_address, ciphertext_address, ciphertext_length, 0, nonce_address, sharedKey_address) | 0) === 0) {
			var ret = _format_output(plaintext, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_box_seal(message, publicKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: publicKey (buf)
		
		publicKey = _any_to_Uint8Array(address_pool, publicKey, "publicKey");
		var publicKey_address, publicKey_length = (libsodium._crypto_box_publickeybytes()) | 0;
		if (publicKey.length !== publicKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid publicKey length");
		}
		publicKey_address = _to_allocated_buf_address(publicKey);
		address_pool.push(publicKey_address);
		
		// ---------- output ciphertext (buf)
		
		var ciphertext_length = (message_length + libsodium._crypto_box_sealbytes()) | 0,
		    ciphertext = new AllocatedBuf(ciphertext_length),
		    ciphertext_address = ciphertext.address;
		
		address_pool.push(ciphertext_address);
		
		if ((libsodium._crypto_box_seal(ciphertext_address, message_address, message_length, 0, publicKey_address) | 0) === 0) {
			var ret = _format_output(ciphertext, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_box_seal_open(ciphertext, publicKey, secretKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: ciphertext (unsized_buf)
		
		ciphertext = _any_to_Uint8Array(address_pool, ciphertext, "ciphertext");
		var ciphertext_address = _to_allocated_buf_address(ciphertext),
		    ciphertext_length = ciphertext.length;
		address_pool.push(ciphertext_address);
		
		// ---------- input: publicKey (buf)
		
		publicKey = _any_to_Uint8Array(address_pool, publicKey, "publicKey");
		var publicKey_address, publicKey_length = (libsodium._crypto_box_publickeybytes()) | 0;
		if (publicKey.length !== publicKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid publicKey length");
		}
		publicKey_address = _to_allocated_buf_address(publicKey);
		address_pool.push(publicKey_address);
		
		// ---------- input: secretKey (buf)
		
		secretKey = _any_to_Uint8Array(address_pool, secretKey, "secretKey");
		var secretKey_address, secretKey_length = (libsodium._crypto_box_secretkeybytes()) | 0;
		if (secretKey.length !== secretKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid secretKey length");
		}
		secretKey_address = _to_allocated_buf_address(secretKey);
		address_pool.push(secretKey_address);
		
		// ---------- output plaintext (buf)
		
		var plaintext_length = (ciphertext_length - libsodium._crypto_box_sealbytes()) | 0,
		    plaintext = new AllocatedBuf(plaintext_length),
		    plaintext_address = plaintext.address;
		
		address_pool.push(plaintext_address);
		
		if ((libsodium._crypto_box_seal_open(plaintext_address, ciphertext_address, ciphertext_length, 0, publicKey_address, secretKey_address) | 0) === 0) {
			var ret = _format_output(plaintext, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_box_seed_keypair(seed, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: seed (buf)
		
		seed = _any_to_Uint8Array(address_pool, seed, "seed");
		var seed_address, seed_length = (libsodium._crypto_box_seedbytes()) | 0;
		if (seed.length !== seed_length) {
		        _free_and_throw_type_error(address_pool, "invalid seed length");
		}
		seed_address = _to_allocated_buf_address(seed);
		address_pool.push(seed_address);
		
		// ---------- output publicKey (buf)
		
		var publicKey_length = (libsodium._crypto_box_publickeybytes()) | 0,
		    publicKey = new AllocatedBuf(publicKey_length),
		    publicKey_address = publicKey.address;
		
		address_pool.push(publicKey_address);
		
		// ---------- output privateKey (buf)
		
		var privateKey_length = (libsodium._crypto_box_secretkeybytes()) | 0,
		    privateKey = new AllocatedBuf(privateKey_length),
		    privateKey_address = privateKey.address;
		
		address_pool.push(privateKey_address);
		
		if ((libsodium._crypto_box_seed_keypair(publicKey_address, privateKey_address, seed_address) | 0) === 0) {
			var ret = _format_output({publicKey: publicKey, privateKey: privateKey}, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_generichash(hash_length, message, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: hash_length (uint)
		
		_require_defined(address_pool, hash_length, "hash_length");
		
		if (!(typeof hash_length === "number" && (hash_length | 0) === hash_length) && (hash_length | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "hash_length must be an unsigned integer");
		}
		
		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: key (unsized_buf_optional)
		
		var key_address = null, key_length = 0;
		if (key != undefined) {
		        key = _any_to_Uint8Array(address_pool, key, "key");
		        key_address = _to_allocated_buf_address(key);
		        key_length = key.length;
		        address_pool.push(key_address);
		}
		
		// ---------- output hash (buf)
		
		var hash_length = (hash_length) | 0,
		    hash = new AllocatedBuf(hash_length),
		    hash_address = hash.address;
		
		address_pool.push(hash_address);
		
		if ((libsodium._crypto_generichash(hash_address, hash_length, message_address, message_length, 0, key_address, key_length) | 0) === 0) {
			var ret = _format_output(hash, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_generichash_final(state_address, hash_length, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: state_address (generichash_state_address)
		
		_require_defined(address_pool, state_address, "state_address");
		
		// ---------- input: hash_length (uint)
		
		_require_defined(address_pool, hash_length, "hash_length");
		
		if (!(typeof hash_length === "number" && (hash_length | 0) === hash_length) && (hash_length | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "hash_length must be an unsigned integer");
		}
		
		// ---------- output hash (buf)
		
		var hash_length = (hash_length) | 0,
		    hash = new AllocatedBuf(hash_length),
		    hash_address = hash.address;
		
		address_pool.push(hash_address);
		
		if ((libsodium._crypto_generichash_final(state_address, hash_address, hash_length) | 0) === 0) {
			var ret = (libsodium._free(state_address), _format_output(hash, outputFormat));
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_generichash_init(key, hash_length, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: key (unsized_buf_optional)
		
		var key_address = null, key_length = 0;
		if (key != undefined) {
		        key = _any_to_Uint8Array(address_pool, key, "key");
		        key_address = _to_allocated_buf_address(key);
		        key_length = key.length;
		        address_pool.push(key_address);
		}
		
		// ---------- input: hash_length (uint)
		
		_require_defined(address_pool, hash_length, "hash_length");
		
		if (!(typeof hash_length === "number" && (hash_length | 0) === hash_length) && (hash_length | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "hash_length must be an unsigned integer");
		}
		
		// ---------- output state (generichash_state)
		
		var state_address = new AllocatedBuf(357).address;
		
		if ((libsodium._crypto_generichash_init(state_address, key_address, key_length, hash_length) | 0) === 0) {
			var ret = state_address;
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_generichash_keygen(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- output output (buf)
		
		var output_length = (libsodium._crypto_generichash_keybytes()) | 0,
		    output = new AllocatedBuf(output_length),
		    output_address = output.address;
		
		address_pool.push(output_address);
		
		libsodium._crypto_generichash_keygen(output_address);
		var ret = (_format_output(output, outputFormat));
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_generichash_update(state_address, message_chunk, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: state_address (generichash_state_address)
		
		_require_defined(address_pool, state_address, "state_address");
		
		// ---------- input: message_chunk (unsized_buf)
		
		message_chunk = _any_to_Uint8Array(address_pool, message_chunk, "message_chunk");
		var message_chunk_address = _to_allocated_buf_address(message_chunk),
		    message_chunk_length = message_chunk.length;
		address_pool.push(message_chunk_address);
		
		if ((libsodium._crypto_generichash_update(state_address, message_chunk_address, message_chunk_length) | 0) === 0) {
			_free_all(address_pool);
			return;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_hash(message, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- output hash (buf)
		
		var hash_length = (libsodium._crypto_hash_bytes()) | 0,
		    hash = new AllocatedBuf(hash_length),
		    hash_address = hash.address;
		
		address_pool.push(hash_address);
		
		if ((libsodium._crypto_hash(hash_address, message_address, message_length, 0) | 0) === 0) {
			var ret = _format_output(hash, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_hash_sha256(message, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- output hash (buf)
		
		var hash_length = (libsodium._crypto_hash_sha256_bytes()) | 0,
		    hash = new AllocatedBuf(hash_length),
		    hash_address = hash.address;
		
		address_pool.push(hash_address);
		
		if ((libsodium._crypto_hash_sha256(hash_address, message_address, message_length, 0) | 0) === 0) {
			var ret = _format_output(hash, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_hash_sha512(message, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- output hash (buf)
		
		var hash_length = (libsodium._crypto_hash_sha512_bytes()) | 0,
		    hash = new AllocatedBuf(hash_length),
		    hash_address = hash.address;
		
		address_pool.push(hash_address);
		
		if ((libsodium._crypto_hash_sha512(hash_address, message_address, message_length, 0) | 0) === 0) {
			var ret = _format_output(hash, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_kdf_derive_from_key(subkey_len, subkey_id, ctx, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: subkey_len (uint)
		
		_require_defined(address_pool, subkey_len, "subkey_len");
		
		if (!(typeof subkey_len === "number" && (subkey_len | 0) === subkey_len) && (subkey_len | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "subkey_len must be an unsigned integer");
		}
		
		// ---------- input: subkey_id (uint)
		
		_require_defined(address_pool, subkey_id, "subkey_id");
		
		if (!(typeof subkey_id === "number" && (subkey_id | 0) === subkey_id) && (subkey_id | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "subkey_id must be an unsigned integer");
		}
		
		// ---------- input: ctx (string)
		
		ctx = from_string(ctx + "\0");
		var ctx_address = _to_allocated_buf_address(ctx),
		    ctx_length = ctx.length - 1;
		address_pool.push(ctx_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_kdf_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output subkey (buf)
		
		var subkey_length = (subkey_len) | 0,
		    subkey = new AllocatedBuf(subkey_length),
		    subkey_address = subkey.address;
		
		address_pool.push(subkey_address);
		
		libsodium._crypto_kdf_derive_from_key(subkey_address, subkey_len, 0, subkey_id, 0, ctx_address, key_address);
		var ret = (_format_output(subkey, outputFormat));
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_kdf_keygen(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- output output (buf)
		
		var output_length = (libsodium._crypto_kdf_keybytes()) | 0,
		    output = new AllocatedBuf(output_length),
		    output_address = output.address;
		
		address_pool.push(output_address);
		
		libsodium._crypto_kdf_keygen(output_address);
		var ret = (_format_output(output, outputFormat));
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_kx_client_session_keys(clientPublicKey, clientSecretKey, serverPublicKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: clientPublicKey (buf)
		
		clientPublicKey = _any_to_Uint8Array(address_pool, clientPublicKey, "clientPublicKey");
		var clientPublicKey_address, clientPublicKey_length = (libsodium._crypto_kx_publickeybytes()) | 0;
		if (clientPublicKey.length !== clientPublicKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid clientPublicKey length");
		}
		clientPublicKey_address = _to_allocated_buf_address(clientPublicKey);
		address_pool.push(clientPublicKey_address);
		
		// ---------- input: clientSecretKey (buf)
		
		clientSecretKey = _any_to_Uint8Array(address_pool, clientSecretKey, "clientSecretKey");
		var clientSecretKey_address, clientSecretKey_length = (libsodium._crypto_kx_secretkeybytes()) | 0;
		if (clientSecretKey.length !== clientSecretKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid clientSecretKey length");
		}
		clientSecretKey_address = _to_allocated_buf_address(clientSecretKey);
		address_pool.push(clientSecretKey_address);
		
		// ---------- input: serverPublicKey (buf)
		
		serverPublicKey = _any_to_Uint8Array(address_pool, serverPublicKey, "serverPublicKey");
		var serverPublicKey_address, serverPublicKey_length = (libsodium._crypto_kx_publickeybytes()) | 0;
		if (serverPublicKey.length !== serverPublicKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid serverPublicKey length");
		}
		serverPublicKey_address = _to_allocated_buf_address(serverPublicKey);
		address_pool.push(serverPublicKey_address);
		
		// ---------- output sharedRx (buf)
		
		var sharedRx_length = (libsodium._crypto_kx_sessionkeybytes()) | 0,
		    sharedRx = new AllocatedBuf(sharedRx_length),
		    sharedRx_address = sharedRx.address;
		
		address_pool.push(sharedRx_address);
		
		// ---------- output sharedTx (buf)
		
		var sharedTx_length = (libsodium._crypto_kx_sessionkeybytes()) | 0,
		    sharedTx = new AllocatedBuf(sharedTx_length),
		    sharedTx_address = sharedTx.address;
		
		address_pool.push(sharedTx_address);
		
		if ((libsodium._crypto_kx_client_session_keys(sharedRx_address, sharedTx_address, clientPublicKey_address, clientSecretKey_address, serverPublicKey_address) | 0) === 0) {
			var ret = _format_output({sharedRx: sharedRx, sharedTx: sharedTx}, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_kx_keypair(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- output publicKey (buf)
		
		var publicKey_length = (libsodium._crypto_kx_publickeybytes()) | 0,
		    publicKey = new AllocatedBuf(publicKey_length),
		    publicKey_address = publicKey.address;
		
		address_pool.push(publicKey_address);
		
		// ---------- output privateKey (buf)
		
		var privateKey_length = (libsodium._crypto_kx_secretkeybytes()) | 0,
		    privateKey = new AllocatedBuf(privateKey_length),
		    privateKey_address = privateKey.address;
		
		address_pool.push(privateKey_address);
		
		if ((libsodium._crypto_kx_keypair(publicKey_address, privateKey_address) | 0) === 0) {
			var ret = _format_output({publicKey: publicKey, privateKey: privateKey}, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_kx_seed_keypair(seed, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: seed (buf)
		
		seed = _any_to_Uint8Array(address_pool, seed, "seed");
		var seed_address, seed_length = (libsodium._crypto_kx_seedbytes()) | 0;
		if (seed.length !== seed_length) {
		        _free_and_throw_type_error(address_pool, "invalid seed length");
		}
		seed_address = _to_allocated_buf_address(seed);
		address_pool.push(seed_address);
		
		// ---------- output publicKey (buf)
		
		var publicKey_length = (libsodium._crypto_kx_publickeybytes()) | 0,
		    publicKey = new AllocatedBuf(publicKey_length),
		    publicKey_address = publicKey.address;
		
		address_pool.push(publicKey_address);
		
		// ---------- output privateKey (buf)
		
		var privateKey_length = (libsodium._crypto_kx_secretkeybytes()) | 0,
		    privateKey = new AllocatedBuf(privateKey_length),
		    privateKey_address = privateKey.address;
		
		address_pool.push(privateKey_address);
		
		if ((libsodium._crypto_kx_seed_keypair(publicKey_address, privateKey_address, seed_address) | 0) === 0) {
			var ret = _format_output({publicKey: publicKey, privateKey: privateKey}, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_kx_server_session_keys(serverPublicKey, serverSecretKey, clientPublicKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: serverPublicKey (buf)
		
		serverPublicKey = _any_to_Uint8Array(address_pool, serverPublicKey, "serverPublicKey");
		var serverPublicKey_address, serverPublicKey_length = (libsodium._crypto_kx_publickeybytes()) | 0;
		if (serverPublicKey.length !== serverPublicKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid serverPublicKey length");
		}
		serverPublicKey_address = _to_allocated_buf_address(serverPublicKey);
		address_pool.push(serverPublicKey_address);
		
		// ---------- input: serverSecretKey (buf)
		
		serverSecretKey = _any_to_Uint8Array(address_pool, serverSecretKey, "serverSecretKey");
		var serverSecretKey_address, serverSecretKey_length = (libsodium._crypto_kx_secretkeybytes()) | 0;
		if (serverSecretKey.length !== serverSecretKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid serverSecretKey length");
		}
		serverSecretKey_address = _to_allocated_buf_address(serverSecretKey);
		address_pool.push(serverSecretKey_address);
		
		// ---------- input: clientPublicKey (buf)
		
		clientPublicKey = _any_to_Uint8Array(address_pool, clientPublicKey, "clientPublicKey");
		var clientPublicKey_address, clientPublicKey_length = (libsodium._crypto_kx_publickeybytes()) | 0;
		if (clientPublicKey.length !== clientPublicKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid clientPublicKey length");
		}
		clientPublicKey_address = _to_allocated_buf_address(clientPublicKey);
		address_pool.push(clientPublicKey_address);
		
		// ---------- output sharedRx (buf)
		
		var sharedRx_length = (libsodium._crypto_kx_sessionkeybytes()) | 0,
		    sharedRx = new AllocatedBuf(sharedRx_length),
		    sharedRx_address = sharedRx.address;
		
		address_pool.push(sharedRx_address);
		
		// ---------- output sharedTx (buf)
		
		var sharedTx_length = (libsodium._crypto_kx_sessionkeybytes()) | 0,
		    sharedTx = new AllocatedBuf(sharedTx_length),
		    sharedTx_address = sharedTx.address;
		
		address_pool.push(sharedTx_address);
		
		if ((libsodium._crypto_kx_server_session_keys(sharedRx_address, sharedTx_address, serverPublicKey_address, serverSecretKey_address, clientPublicKey_address) | 0) === 0) {
			var ret = _format_output({sharedRx: sharedRx, sharedTx: sharedTx}, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_onetimeauth(message, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_onetimeauth_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output hash (buf)
		
		var hash_length = (libsodium._crypto_onetimeauth_bytes()) | 0,
		    hash = new AllocatedBuf(hash_length),
		    hash_address = hash.address;
		
		address_pool.push(hash_address);
		
		if ((libsodium._crypto_onetimeauth(hash_address, message_address, message_length, 0, key_address) | 0) === 0) {
			var ret = _format_output(hash, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_onetimeauth_final(state_address, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: state_address (onetimeauth_state_address)
		
		_require_defined(address_pool, state_address, "state_address");
		
		// ---------- output hash (buf)
		
		var hash_length = (libsodium._crypto_onetimeauth_bytes()) | 0,
		    hash = new AllocatedBuf(hash_length),
		    hash_address = hash.address;
		
		address_pool.push(hash_address);
		
		if ((libsodium._crypto_onetimeauth_final(state_address, hash_address) | 0) === 0) {
			var ret = (libsodium._free(state_address), _format_output(hash, outputFormat));
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_onetimeauth_init(key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: key (unsized_buf_optional)
		
		var key_address = null, key_length = 0;
		if (key != undefined) {
		        key = _any_to_Uint8Array(address_pool, key, "key");
		        key_address = _to_allocated_buf_address(key);
		        key_length = key.length;
		        address_pool.push(key_address);
		}
		
		// ---------- output state (onetimeauth_state)
		
		var state_address = new AllocatedBuf(144).address;
		
		if ((libsodium._crypto_onetimeauth_init(state_address, key_address) | 0) === 0) {
			var ret = state_address;
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_onetimeauth_keygen(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- output output (buf)
		
		var output_length = (libsodium._crypto_onetimeauth_keybytes()) | 0,
		    output = new AllocatedBuf(output_length),
		    output_address = output.address;
		
		address_pool.push(output_address);
		
		libsodium._crypto_onetimeauth_keygen(output_address);
		var ret = (_format_output(output, outputFormat));
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_onetimeauth_update(state_address, message_chunk, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: state_address (onetimeauth_state_address)
		
		_require_defined(address_pool, state_address, "state_address");
		
		// ---------- input: message_chunk (unsized_buf)
		
		message_chunk = _any_to_Uint8Array(address_pool, message_chunk, "message_chunk");
		var message_chunk_address = _to_allocated_buf_address(message_chunk),
		    message_chunk_length = message_chunk.length;
		address_pool.push(message_chunk_address);
		
		if ((libsodium._crypto_onetimeauth_update(state_address, message_chunk_address, message_chunk_length) | 0) === 0) {
			_free_all(address_pool);
			return;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_onetimeauth_verify(hash, message, key) {
		var address_pool = [];

		// ---------- input: hash (buf)
		
		hash = _any_to_Uint8Array(address_pool, hash, "hash");
		var hash_address, hash_length = (libsodium._crypto_onetimeauth_bytes()) | 0;
		if (hash.length !== hash_length) {
		        _free_and_throw_type_error(address_pool, "invalid hash length");
		}
		hash_address = _to_allocated_buf_address(hash);
		address_pool.push(hash_address);
		
		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_onetimeauth_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		var result = libsodium._crypto_onetimeauth_verify(hash_address, message_address, message_length, 0, key_address) | 0;
		var ret = (result === 0);
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_pwhash(keyLength, password, salt, opsLimit, memLimit, algorithm, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: keyLength (uint)
		
		_require_defined(address_pool, keyLength, "keyLength");
		
		if (!(typeof keyLength === "number" && (keyLength | 0) === keyLength) && (keyLength | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "keyLength must be an unsigned integer");
		}
		
		// ---------- input: password (unsized_buf)
		
		password = _any_to_Uint8Array(address_pool, password, "password");
		var password_address = _to_allocated_buf_address(password),
		    password_length = password.length;
		address_pool.push(password_address);
		
		// ---------- input: salt (buf)
		
		salt = _any_to_Uint8Array(address_pool, salt, "salt");
		var salt_address, salt_length = (libsodium._crypto_pwhash_saltbytes()) | 0;
		if (salt.length !== salt_length) {
		        _free_and_throw_type_error(address_pool, "invalid salt length");
		}
		salt_address = _to_allocated_buf_address(salt);
		address_pool.push(salt_address);
		
		// ---------- input: opsLimit (uint)
		
		_require_defined(address_pool, opsLimit, "opsLimit");
		
		if (!(typeof opsLimit === "number" && (opsLimit | 0) === opsLimit) && (opsLimit | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "opsLimit must be an unsigned integer");
		}
		
		// ---------- input: memLimit (uint)
		
		_require_defined(address_pool, memLimit, "memLimit");
		
		if (!(typeof memLimit === "number" && (memLimit | 0) === memLimit) && (memLimit | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "memLimit must be an unsigned integer");
		}
		
		// ---------- input: algorithm (uint)
		
		_require_defined(address_pool, algorithm, "algorithm");
		
		if (!(typeof algorithm === "number" && (algorithm | 0) === algorithm) && (algorithm | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "algorithm must be an unsigned integer");
		}
		
		// ---------- output derivedKey (buf)
		
		var derivedKey_length = (keyLength) | 0,
		    derivedKey = new AllocatedBuf(derivedKey_length),
		    derivedKey_address = derivedKey.address;
		
		address_pool.push(derivedKey_address);
		
		if ((libsodium._crypto_pwhash(derivedKey_address, keyLength, 0, password_address, password_length, 0, salt_address, opsLimit, 0, memLimit, algorithm) | 0) === 0) {
			var ret = _format_output(derivedKey, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_pwhash_scryptsalsa208sha256(keyLength, password, salt, opsLimit, memLimit, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: keyLength (uint)
		
		_require_defined(address_pool, keyLength, "keyLength");
		
		if (!(typeof keyLength === "number" && (keyLength | 0) === keyLength) && (keyLength | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "keyLength must be an unsigned integer");
		}
		
		// ---------- input: password (unsized_buf)
		
		password = _any_to_Uint8Array(address_pool, password, "password");
		var password_address = _to_allocated_buf_address(password),
		    password_length = password.length;
		address_pool.push(password_address);
		
		// ---------- input: salt (buf)
		
		salt = _any_to_Uint8Array(address_pool, salt, "salt");
		var salt_address, salt_length = (libsodium._crypto_pwhash_scryptsalsa208sha256_saltbytes()) | 0;
		if (salt.length !== salt_length) {
		        _free_and_throw_type_error(address_pool, "invalid salt length");
		}
		salt_address = _to_allocated_buf_address(salt);
		address_pool.push(salt_address);
		
		// ---------- input: opsLimit (uint)
		
		_require_defined(address_pool, opsLimit, "opsLimit");
		
		if (!(typeof opsLimit === "number" && (opsLimit | 0) === opsLimit) && (opsLimit | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "opsLimit must be an unsigned integer");
		}
		
		// ---------- input: memLimit (uint)
		
		_require_defined(address_pool, memLimit, "memLimit");
		
		if (!(typeof memLimit === "number" && (memLimit | 0) === memLimit) && (memLimit | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "memLimit must be an unsigned integer");
		}
		
		// ---------- output derivedKey (buf)
		
		var derivedKey_length = (keyLength) | 0,
		    derivedKey = new AllocatedBuf(derivedKey_length),
		    derivedKey_address = derivedKey.address;
		
		address_pool.push(derivedKey_address);
		
		if ((libsodium._crypto_pwhash_scryptsalsa208sha256(derivedKey_address, keyLength, 0, password_address, password_length, 0, salt_address, opsLimit, 0, memLimit) | 0) === 0) {
			var ret = _format_output(derivedKey, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_pwhash_scryptsalsa208sha256_ll(password, salt, opsLimit, r, p, keyLength, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: password (unsized_buf)
		
		password = _any_to_Uint8Array(address_pool, password, "password");
		var password_address = _to_allocated_buf_address(password),
		    password_length = password.length;
		address_pool.push(password_address);
		
		// ---------- input: salt (unsized_buf)
		
		salt = _any_to_Uint8Array(address_pool, salt, "salt");
		var salt_address = _to_allocated_buf_address(salt),
		    salt_length = salt.length;
		address_pool.push(salt_address);
		
		// ---------- input: opsLimit (uint)
		
		_require_defined(address_pool, opsLimit, "opsLimit");
		
		if (!(typeof opsLimit === "number" && (opsLimit | 0) === opsLimit) && (opsLimit | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "opsLimit must be an unsigned integer");
		}
		
		// ---------- input: r (uint)
		
		_require_defined(address_pool, r, "r");
		
		if (!(typeof r === "number" && (r | 0) === r) && (r | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "r must be an unsigned integer");
		}
		
		// ---------- input: p (uint)
		
		_require_defined(address_pool, p, "p");
		
		if (!(typeof p === "number" && (p | 0) === p) && (p | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "p must be an unsigned integer");
		}
		
		// ---------- input: keyLength (uint)
		
		_require_defined(address_pool, keyLength, "keyLength");
		
		if (!(typeof keyLength === "number" && (keyLength | 0) === keyLength) && (keyLength | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "keyLength must be an unsigned integer");
		}
		
		// ---------- output derivedKey (buf)
		
		var derivedKey_length = (keyLength) | 0,
		    derivedKey = new AllocatedBuf(derivedKey_length),
		    derivedKey_address = derivedKey.address;
		
		address_pool.push(derivedKey_address);
		
		if ((libsodium._crypto_pwhash_scryptsalsa208sha256_ll(password_address, password_length, salt_address, salt_length, opsLimit, 0, r, p, derivedKey_address, keyLength) | 0) === 0) {
			var ret = _format_output(derivedKey, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_pwhash_scryptsalsa208sha256_str(password, opsLimit, memLimit, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: password (unsized_buf)
		
		password = _any_to_Uint8Array(address_pool, password, "password");
		var password_address = _to_allocated_buf_address(password),
		    password_length = password.length;
		address_pool.push(password_address);
		
		// ---------- input: opsLimit (uint)
		
		_require_defined(address_pool, opsLimit, "opsLimit");
		
		if (!(typeof opsLimit === "number" && (opsLimit | 0) === opsLimit) && (opsLimit | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "opsLimit must be an unsigned integer");
		}
		
		// ---------- input: memLimit (uint)
		
		_require_defined(address_pool, memLimit, "memLimit");
		
		if (!(typeof memLimit === "number" && (memLimit | 0) === memLimit) && (memLimit | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "memLimit must be an unsigned integer");
		}
		
		// ---------- output hashed_password (buf)
		
		var hashed_password_length = (libsodium._crypto_pwhash_scryptsalsa208sha256_strbytes()) | 0,
		    hashed_password = new AllocatedBuf(hashed_password_length),
		    hashed_password_address = hashed_password.address;
		
		address_pool.push(hashed_password_address);
		
		if ((libsodium._crypto_pwhash_scryptsalsa208sha256_str(hashed_password_address, password_address, password_length, 0, opsLimit, 0, memLimit) | 0) === 0) {
			var ret = libsodium.Pointer_stringify(hashed_password_address);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_pwhash_scryptsalsa208sha256_str_verify(hashed_password, password, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: hashed_password (string)
		
		hashed_password = from_string(hashed_password + "\0");
		var hashed_password_address = _to_allocated_buf_address(hashed_password),
		    hashed_password_length = hashed_password.length - 1;
		address_pool.push(hashed_password_address);
		
		// ---------- input: password (unsized_buf)
		
		password = _any_to_Uint8Array(address_pool, password, "password");
		var password_address = _to_allocated_buf_address(password),
		    password_length = password.length;
		address_pool.push(password_address);
		
		var result = libsodium._crypto_pwhash_scryptsalsa208sha256_str_verify(hashed_password_address, password_address, password_length, 0) | 0;
		var ret = (result === 0);
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_pwhash_str(password, opsLimit, memLimit, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: password (unsized_buf)
		
		password = _any_to_Uint8Array(address_pool, password, "password");
		var password_address = _to_allocated_buf_address(password),
		    password_length = password.length;
		address_pool.push(password_address);
		
		// ---------- input: opsLimit (uint)
		
		_require_defined(address_pool, opsLimit, "opsLimit");
		
		if (!(typeof opsLimit === "number" && (opsLimit | 0) === opsLimit) && (opsLimit | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "opsLimit must be an unsigned integer");
		}
		
		// ---------- input: memLimit (uint)
		
		_require_defined(address_pool, memLimit, "memLimit");
		
		if (!(typeof memLimit === "number" && (memLimit | 0) === memLimit) && (memLimit | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "memLimit must be an unsigned integer");
		}
		
		// ---------- output hashed_password (buf)
		
		var hashed_password_length = (libsodium._crypto_pwhash_strbytes()) | 0,
		    hashed_password = new AllocatedBuf(hashed_password_length),
		    hashed_password_address = hashed_password.address;
		
		address_pool.push(hashed_password_address);
		
		if ((libsodium._crypto_pwhash_str(hashed_password_address, password_address, password_length, 0, opsLimit, 0, memLimit) | 0) === 0) {
			var ret = libsodium.Pointer_stringify(hashed_password_address);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_pwhash_str_verify(hashed_password, password, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: hashed_password (string)
		
		hashed_password = from_string(hashed_password + "\0");
		var hashed_password_address = _to_allocated_buf_address(hashed_password),
		    hashed_password_length = hashed_password.length - 1;
		address_pool.push(hashed_password_address);
		
		// ---------- input: password (unsized_buf)
		
		password = _any_to_Uint8Array(address_pool, password, "password");
		var password_address = _to_allocated_buf_address(password),
		    password_length = password.length;
		address_pool.push(password_address);
		
		var result = libsodium._crypto_pwhash_str_verify(hashed_password_address, password_address, password_length, 0) | 0;
		var ret = (result === 0);
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_scalarmult(privateKey, publicKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: privateKey (buf)
		
		privateKey = _any_to_Uint8Array(address_pool, privateKey, "privateKey");
		var privateKey_address, privateKey_length = (libsodium._crypto_scalarmult_scalarbytes()) | 0;
		if (privateKey.length !== privateKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid privateKey length");
		}
		privateKey_address = _to_allocated_buf_address(privateKey);
		address_pool.push(privateKey_address);
		
		// ---------- input: publicKey (buf)
		
		publicKey = _any_to_Uint8Array(address_pool, publicKey, "publicKey");
		var publicKey_address, publicKey_length = (libsodium._crypto_scalarmult_scalarbytes()) | 0;
		if (publicKey.length !== publicKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid publicKey length");
		}
		publicKey_address = _to_allocated_buf_address(publicKey);
		address_pool.push(publicKey_address);
		
		// ---------- output sharedSecret (buf)
		
		var sharedSecret_length = (libsodium._crypto_scalarmult_bytes()) | 0,
		    sharedSecret = new AllocatedBuf(sharedSecret_length),
		    sharedSecret_address = sharedSecret.address;
		
		address_pool.push(sharedSecret_address);
		
		if ((libsodium._crypto_scalarmult(sharedSecret_address, privateKey_address, publicKey_address) | 0) === 0) {
			var ret = _format_output(sharedSecret, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_scalarmult_base(privateKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: privateKey (buf)
		
		privateKey = _any_to_Uint8Array(address_pool, privateKey, "privateKey");
		var privateKey_address, privateKey_length = (libsodium._crypto_scalarmult_scalarbytes()) | 0;
		if (privateKey.length !== privateKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid privateKey length");
		}
		privateKey_address = _to_allocated_buf_address(privateKey);
		address_pool.push(privateKey_address);
		
		// ---------- output publicKey (buf)
		
		var publicKey_length = (libsodium._crypto_scalarmult_scalarbytes()) | 0,
		    publicKey = new AllocatedBuf(publicKey_length),
		    publicKey_address = publicKey.address;
		
		address_pool.push(publicKey_address);
		
		if ((libsodium._crypto_scalarmult_base(publicKey_address, privateKey_address) | 0) === 0) {
			var ret = _format_output(publicKey, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_secretbox_detached(message, nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: nonce (buf)
		
		nonce = _any_to_Uint8Array(address_pool, nonce, "nonce");
		var nonce_address, nonce_length = (libsodium._crypto_secretbox_noncebytes()) | 0;
		if (nonce.length !== nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid nonce length");
		}
		nonce_address = _to_allocated_buf_address(nonce);
		address_pool.push(nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_secretbox_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output cipher (buf)
		
		var cipher_length = (message_length) | 0,
		    cipher = new AllocatedBuf(cipher_length),
		    cipher_address = cipher.address;
		
		address_pool.push(cipher_address);
		
		// ---------- output mac (buf)
		
		var mac_length = (libsodium._crypto_secretbox_macbytes()) | 0,
		    mac = new AllocatedBuf(mac_length),
		    mac_address = mac.address;
		
		address_pool.push(mac_address);
		
		if ((libsodium._crypto_secretbox_detached(cipher_address, mac_address, message_address, message_length, 0, nonce_address, key_address) | 0) === 0) {
			var ret = _format_output({mac: mac, cipher: cipher}, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_secretbox_easy(message, nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: nonce (buf)
		
		nonce = _any_to_Uint8Array(address_pool, nonce, "nonce");
		var nonce_address, nonce_length = (libsodium._crypto_secretbox_noncebytes()) | 0;
		if (nonce.length !== nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid nonce length");
		}
		nonce_address = _to_allocated_buf_address(nonce);
		address_pool.push(nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_secretbox_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output cipher (buf)
		
		var cipher_length = (message_length + libsodium._crypto_secretbox_macbytes()) | 0,
		    cipher = new AllocatedBuf(cipher_length),
		    cipher_address = cipher.address;
		
		address_pool.push(cipher_address);
		
		if ((libsodium._crypto_secretbox_easy(cipher_address, message_address, message_length, 0, nonce_address, key_address) | 0) === 0) {
			var ret = _format_output(cipher, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_secretbox_keygen(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- output output (buf)
		
		var output_length = (libsodium._crypto_secretbox_keybytes()) | 0,
		    output = new AllocatedBuf(output_length),
		    output_address = output.address;
		
		address_pool.push(output_address);
		
		libsodium._crypto_secretbox_keygen(output_address);
		var ret = (_format_output(output, outputFormat));
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_secretbox_open_detached(ciphertext, mac, nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: ciphertext (unsized_buf)
		
		ciphertext = _any_to_Uint8Array(address_pool, ciphertext, "ciphertext");
		var ciphertext_address = _to_allocated_buf_address(ciphertext),
		    ciphertext_length = ciphertext.length;
		address_pool.push(ciphertext_address);
		
		// ---------- input: mac (buf)
		
		mac = _any_to_Uint8Array(address_pool, mac, "mac");
		var mac_address, mac_length = (libsodium._crypto_secretbox_macbytes()) | 0;
		if (mac.length !== mac_length) {
		        _free_and_throw_type_error(address_pool, "invalid mac length");
		}
		mac_address = _to_allocated_buf_address(mac);
		address_pool.push(mac_address);
		
		// ---------- input: nonce (buf)
		
		nonce = _any_to_Uint8Array(address_pool, nonce, "nonce");
		var nonce_address, nonce_length = (libsodium._crypto_secretbox_noncebytes()) | 0;
		if (nonce.length !== nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid nonce length");
		}
		nonce_address = _to_allocated_buf_address(nonce);
		address_pool.push(nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_secretbox_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output message (buf)
		
		var message_length = (ciphertext_length) | 0,
		    message = new AllocatedBuf(message_length),
		    message_address = message.address;
		
		address_pool.push(message_address);
		
		if ((libsodium._crypto_secretbox_open_detached(message_address, ciphertext_address, mac_address, ciphertext_length, 0, nonce_address, key_address) | 0) === 0) {
			var ret = _format_output(message, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_secretbox_open_easy(ciphertext, nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: ciphertext (unsized_buf)
		
		ciphertext = _any_to_Uint8Array(address_pool, ciphertext, "ciphertext");
		var ciphertext_address = _to_allocated_buf_address(ciphertext),
		    ciphertext_length = ciphertext.length;
		address_pool.push(ciphertext_address);
		
		// ---------- input: nonce (buf)
		
		nonce = _any_to_Uint8Array(address_pool, nonce, "nonce");
		var nonce_address, nonce_length = (libsodium._crypto_secretbox_noncebytes()) | 0;
		if (nonce.length !== nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid nonce length");
		}
		nonce_address = _to_allocated_buf_address(nonce);
		address_pool.push(nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_secretbox_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output message (buf)
		
		var message_length = (ciphertext_length - libsodium._crypto_secretbox_macbytes()) | 0,
		    message = new AllocatedBuf(message_length),
		    message_address = message.address;
		
		address_pool.push(message_address);
		
		if ((libsodium._crypto_secretbox_open_easy(message_address, ciphertext_address, ciphertext_length, 0, nonce_address, key_address) | 0) === 0) {
			var ret = _format_output(message, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_shorthash(message, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_shorthash_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output hash (buf)
		
		var hash_length = (libsodium._crypto_shorthash_bytes()) | 0,
		    hash = new AllocatedBuf(hash_length),
		    hash_address = hash.address;
		
		address_pool.push(hash_address);
		
		if ((libsodium._crypto_shorthash(hash_address, message_address, message_length, 0, key_address) | 0) === 0) {
			var ret = _format_output(hash, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_shorthash_keygen(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- output output (buf)
		
		var output_length = (libsodium._crypto_shorthash_keybytes()) | 0,
		    output = new AllocatedBuf(output_length),
		    output_address = output.address;
		
		address_pool.push(output_address);
		
		libsodium._crypto_shorthash_keygen(output_address);
		var ret = (_format_output(output, outputFormat));
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_shorthash_siphashx24(message, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_shorthash_siphashx24_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output hash (buf)
		
		var hash_length = (libsodium._crypto_shorthash_siphashx24_bytes()) | 0,
		    hash = new AllocatedBuf(hash_length),
		    hash_address = hash.address;
		
		address_pool.push(hash_address);
		
		if ((libsodium._crypto_shorthash_siphashx24(hash_address, message_address, message_length, 0, key_address) | 0) === 0) {
			var ret = _format_output(hash, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_sign(message, privateKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: privateKey (buf)
		
		privateKey = _any_to_Uint8Array(address_pool, privateKey, "privateKey");
		var privateKey_address, privateKey_length = (libsodium._crypto_sign_secretkeybytes()) | 0;
		if (privateKey.length !== privateKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid privateKey length");
		}
		privateKey_address = _to_allocated_buf_address(privateKey);
		address_pool.push(privateKey_address);
		
		// ---------- output signature (buf)
		
		var signature_length = (message.length + libsodium._crypto_sign_bytes()) | 0,
		    signature = new AllocatedBuf(signature_length),
		    signature_address = signature.address;
		
		address_pool.push(signature_address);
		
		if ((libsodium._crypto_sign(signature_address, null, message_address, message_length, 0, privateKey_address) | 0) === 0) {
			var ret = _format_output(signature, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_sign_detached(message, privateKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: privateKey (buf)
		
		privateKey = _any_to_Uint8Array(address_pool, privateKey, "privateKey");
		var privateKey_address, privateKey_length = (libsodium._crypto_sign_secretkeybytes()) | 0;
		if (privateKey.length !== privateKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid privateKey length");
		}
		privateKey_address = _to_allocated_buf_address(privateKey);
		address_pool.push(privateKey_address);
		
		// ---------- output signature (buf)
		
		var signature_length = (libsodium._crypto_sign_bytes()) | 0,
		    signature = new AllocatedBuf(signature_length),
		    signature_address = signature.address;
		
		address_pool.push(signature_address);
		
		if ((libsodium._crypto_sign_detached(signature_address, null, message_address, message_length, 0, privateKey_address) | 0) === 0) {
			var ret = _format_output(signature, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_sign_ed25519_pk_to_curve25519(edPk, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: edPk (buf)
		
		edPk = _any_to_Uint8Array(address_pool, edPk, "edPk");
		var edPk_address, edPk_length = (libsodium._crypto_sign_publickeybytes()) | 0;
		if (edPk.length !== edPk_length) {
		        _free_and_throw_type_error(address_pool, "invalid edPk length");
		}
		edPk_address = _to_allocated_buf_address(edPk);
		address_pool.push(edPk_address);
		
		// ---------- output cPk (buf)
		
		var cPk_length = (libsodium._crypto_scalarmult_scalarbytes()) | 0,
		    cPk = new AllocatedBuf(cPk_length),
		    cPk_address = cPk.address;
		
		address_pool.push(cPk_address);
		
		if ((libsodium._crypto_sign_ed25519_pk_to_curve25519(cPk_address, edPk_address) | 0) === 0) {
			var ret = _format_output(cPk, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_sign_ed25519_sk_to_curve25519(edSk, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: edSk (buf)
		
		edSk = _any_to_Uint8Array(address_pool, edSk, "edSk");
		var edSk_address, edSk_length = (libsodium._crypto_sign_secretkeybytes()) | 0;
		if (edSk.length !== edSk_length) {
		        _free_and_throw_type_error(address_pool, "invalid edSk length");
		}
		edSk_address = _to_allocated_buf_address(edSk);
		address_pool.push(edSk_address);
		
		// ---------- output cSk (buf)
		
		var cSk_length = (libsodium._crypto_scalarmult_scalarbytes()) | 0,
		    cSk = new AllocatedBuf(cSk_length),
		    cSk_address = cSk.address;
		
		address_pool.push(cSk_address);
		
		if ((libsodium._crypto_sign_ed25519_sk_to_curve25519(cSk_address, edSk_address) | 0) === 0) {
			var ret = _format_output(cSk, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_sign_ed25519_sk_to_pk(privateKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: privateKey (buf)
		
		privateKey = _any_to_Uint8Array(address_pool, privateKey, "privateKey");
		var privateKey_address, privateKey_length = (libsodium._crypto_sign_secretkeybytes()) | 0;
		if (privateKey.length !== privateKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid privateKey length");
		}
		privateKey_address = _to_allocated_buf_address(privateKey);
		address_pool.push(privateKey_address);
		
		// ---------- output publicKey (buf)
		
		var publicKey_length = (libsodium._crypto_sign_publickeybytes()) | 0,
		    publicKey = new AllocatedBuf(publicKey_length),
		    publicKey_address = publicKey.address;
		
		address_pool.push(publicKey_address);
		
		if ((libsodium._crypto_sign_ed25519_sk_to_pk(publicKey_address, privateKey_address) | 0) === 0) {
			var ret = _format_output(publicKey, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_sign_ed25519_sk_to_seed(privateKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: privateKey (buf)
		
		privateKey = _any_to_Uint8Array(address_pool, privateKey, "privateKey");
		var privateKey_address, privateKey_length = (libsodium._crypto_sign_secretkeybytes()) | 0;
		if (privateKey.length !== privateKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid privateKey length");
		}
		privateKey_address = _to_allocated_buf_address(privateKey);
		address_pool.push(privateKey_address);
		
		// ---------- output seed (buf)
		
		var seed_length = (libsodium._crypto_sign_seedbytes()) | 0,
		    seed = new AllocatedBuf(seed_length),
		    seed_address = seed.address;
		
		address_pool.push(seed_address);
		
		if ((libsodium._crypto_sign_ed25519_sk_to_seed(seed_address, privateKey_address) | 0) === 0) {
			var ret = _format_output(seed, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_sign_final_create(state_address, privateKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: state_address (sign_state_address)
		
		_require_defined(address_pool, state_address, "state_address");
		
		// ---------- input: privateKey (buf)
		
		privateKey = _any_to_Uint8Array(address_pool, privateKey, "privateKey");
		var privateKey_address, privateKey_length = (libsodium._crypto_sign_secretkeybytes()) | 0;
		if (privateKey.length !== privateKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid privateKey length");
		}
		privateKey_address = _to_allocated_buf_address(privateKey);
		address_pool.push(privateKey_address);
		
		// ---------- output signature (buf)
		
		var signature_length = (libsodium._crypto_sign_bytes()) | 0,
		    signature = new AllocatedBuf(signature_length),
		    signature_address = signature.address;
		
		address_pool.push(signature_address);
		
		if ((libsodium._crypto_sign_final_create(state_address, signature_address, null, privateKey_address) | 0) === 0) {
			var ret = (libsodium._free(state_address), _format_output(signature, outputFormat));
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_sign_final_verify(state_address, signature, publicKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: state_address (sign_state_address)
		
		_require_defined(address_pool, state_address, "state_address");
		
		// ---------- input: signature (buf)
		
		signature = _any_to_Uint8Array(address_pool, signature, "signature");
		var signature_address, signature_length = (libsodium._crypto_sign_bytes()) | 0;
		if (signature.length !== signature_length) {
		        _free_and_throw_type_error(address_pool, "invalid signature length");
		}
		signature_address = _to_allocated_buf_address(signature);
		address_pool.push(signature_address);
		
		// ---------- input: publicKey (buf)
		
		publicKey = _any_to_Uint8Array(address_pool, publicKey, "publicKey");
		var publicKey_address, publicKey_length = (libsodium._crypto_sign_publickeybytes()) | 0;
		if (publicKey.length !== publicKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid publicKey length");
		}
		publicKey_address = _to_allocated_buf_address(publicKey);
		address_pool.push(publicKey_address);
		
		var verificationResult = libsodium._crypto_sign_final_verify(state_address, signature_address, publicKey_address) | 0;
		var ret = (verificationResult === 0);
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_sign_init(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- output state (sign_state)
		
		var state_address = new AllocatedBuf(208).address;
		
		if ((libsodium._crypto_sign_init(state_address) | 0) === 0) {
			var ret = state_address;
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_sign_keypair(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- output publicKey (buf)
		
		var publicKey_length = (libsodium._crypto_sign_publickeybytes()) | 0,
		    publicKey = new AllocatedBuf(publicKey_length),
		    publicKey_address = publicKey.address;
		
		address_pool.push(publicKey_address);
		
		// ---------- output privateKey (buf)
		
		var privateKey_length = (libsodium._crypto_sign_secretkeybytes()) | 0,
		    privateKey = new AllocatedBuf(privateKey_length),
		    privateKey_address = privateKey.address;
		
		address_pool.push(privateKey_address);
		
		if ((libsodium._crypto_sign_keypair(publicKey_address, privateKey_address) | 0) === 0) {
			var ret = _format_output({publicKey: publicKey, privateKey: privateKey, keyType: 'ed25519'}, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_sign_open(signedMessage, publicKey, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: signedMessage (unsized_buf)
		
		signedMessage = _any_to_Uint8Array(address_pool, signedMessage, "signedMessage");
		var signedMessage_address = _to_allocated_buf_address(signedMessage),
		    signedMessage_length = signedMessage.length;
		address_pool.push(signedMessage_address);
		
		// ---------- input: publicKey (buf)
		
		publicKey = _any_to_Uint8Array(address_pool, publicKey, "publicKey");
		var publicKey_address, publicKey_length = (libsodium._crypto_sign_publickeybytes()) | 0;
		if (publicKey.length !== publicKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid publicKey length");
		}
		publicKey_address = _to_allocated_buf_address(publicKey);
		address_pool.push(publicKey_address);
		
		// ---------- output message (buf)
		
		var message_length = (signedMessage_length - libsodium._crypto_sign_bytes()) | 0,
		    message = new AllocatedBuf(message_length),
		    message_address = message.address;
		
		address_pool.push(message_address);
		
		if ((libsodium._crypto_sign_open(message_address, null, signedMessage_address, signedMessage_length, 0, publicKey_address) | 0) === 0) {
			var ret = _format_output(message, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_sign_seed_keypair(seed, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: seed (buf)
		
		seed = _any_to_Uint8Array(address_pool, seed, "seed");
		var seed_address, seed_length = (libsodium._crypto_sign_seedbytes()) | 0;
		if (seed.length !== seed_length) {
		        _free_and_throw_type_error(address_pool, "invalid seed length");
		}
		seed_address = _to_allocated_buf_address(seed);
		address_pool.push(seed_address);
		
		// ---------- output publicKey (buf)
		
		var publicKey_length = (libsodium._crypto_sign_publickeybytes()) | 0,
		    publicKey = new AllocatedBuf(publicKey_length),
		    publicKey_address = publicKey.address;
		
		address_pool.push(publicKey_address);
		
		// ---------- output privateKey (buf)
		
		var privateKey_length = (libsodium._crypto_sign_secretkeybytes()) | 0,
		    privateKey = new AllocatedBuf(privateKey_length),
		    privateKey_address = privateKey.address;
		
		address_pool.push(privateKey_address);
		
		if ((libsodium._crypto_sign_seed_keypair(publicKey_address, privateKey_address, seed_address) | 0) === 0) {
			var ret = _format_output({publicKey: publicKey, privateKey: privateKey, keyType: "ed25519"}, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_sign_update(state_address, message_chunk, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: state_address (sign_state_address)
		
		_require_defined(address_pool, state_address, "state_address");
		
		// ---------- input: message_chunk (unsized_buf)
		
		message_chunk = _any_to_Uint8Array(address_pool, message_chunk, "message_chunk");
		var message_chunk_address = _to_allocated_buf_address(message_chunk),
		    message_chunk_length = message_chunk.length;
		address_pool.push(message_chunk_address);
		
		if ((libsodium._crypto_sign_update(state_address, message_chunk_address, message_chunk_length) | 0) === 0) {
			_free_all(address_pool);
			return;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_sign_verify_detached(signature, message, publicKey) {
		var address_pool = [];

		// ---------- input: signature (buf)
		
		signature = _any_to_Uint8Array(address_pool, signature, "signature");
		var signature_address, signature_length = (libsodium._crypto_sign_bytes()) | 0;
		if (signature.length !== signature_length) {
		        _free_and_throw_type_error(address_pool, "invalid signature length");
		}
		signature_address = _to_allocated_buf_address(signature);
		address_pool.push(signature_address);
		
		// ---------- input: message (unsized_buf)
		
		message = _any_to_Uint8Array(address_pool, message, "message");
		var message_address = _to_allocated_buf_address(message),
		    message_length = message.length;
		address_pool.push(message_address);
		
		// ---------- input: publicKey (buf)
		
		publicKey = _any_to_Uint8Array(address_pool, publicKey, "publicKey");
		var publicKey_address, publicKey_length = (libsodium._crypto_sign_publickeybytes()) | 0;
		if (publicKey.length !== publicKey_length) {
		        _free_and_throw_type_error(address_pool, "invalid publicKey length");
		}
		publicKey_address = _to_allocated_buf_address(publicKey);
		address_pool.push(publicKey_address);
		
		var verificationResult = libsodium._crypto_sign_verify_detached(signature_address, message_address, message_length, 0, publicKey_address) | 0;
		var ret = (verificationResult === 0);
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_stream_chacha20_ietf_xor(input_message, nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: input_message (unsized_buf)
		
		input_message = _any_to_Uint8Array(address_pool, input_message, "input_message");
		var input_message_address = _to_allocated_buf_address(input_message),
		    input_message_length = input_message.length;
		address_pool.push(input_message_address);
		
		// ---------- input: nonce (buf)
		
		nonce = _any_to_Uint8Array(address_pool, nonce, "nonce");
		var nonce_address, nonce_length = (libsodium._crypto_stream_chacha20_ietf_noncebytes()) | 0;
		if (nonce.length !== nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid nonce length");
		}
		nonce_address = _to_allocated_buf_address(nonce);
		address_pool.push(nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_stream_chacha20_ietf_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output output_message (buf)
		
		var output_message_length = (input_message_length) | 0,
		    output_message = new AllocatedBuf(output_message_length),
		    output_message_address = output_message.address;
		
		address_pool.push(output_message_address);
		
		if ((libsodium._crypto_stream_chacha20_ietf_xor(output_message_address, input_message_address, input_message_length, 0, nonce_address, key_address)) === 0) {
			var ret = _format_output(output_message, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_stream_chacha20_ietf_xor_ic(input_message, nonce, nonce_increment, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: input_message (unsized_buf)
		
		input_message = _any_to_Uint8Array(address_pool, input_message, "input_message");
		var input_message_address = _to_allocated_buf_address(input_message),
		    input_message_length = input_message.length;
		address_pool.push(input_message_address);
		
		// ---------- input: nonce (buf)
		
		nonce = _any_to_Uint8Array(address_pool, nonce, "nonce");
		var nonce_address, nonce_length = (libsodium._crypto_stream_chacha20_ietf_noncebytes()) | 0;
		if (nonce.length !== nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid nonce length");
		}
		nonce_address = _to_allocated_buf_address(nonce);
		address_pool.push(nonce_address);
		
		// ---------- input: nonce_increment (uint)
		
		_require_defined(address_pool, nonce_increment, "nonce_increment");
		
		if (!(typeof nonce_increment === "number" && (nonce_increment | 0) === nonce_increment) && (nonce_increment | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "nonce_increment must be an unsigned integer");
		}
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_stream_chacha20_ietf_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output output_message (buf)
		
		var output_message_length = (input_message_length) | 0,
		    output_message = new AllocatedBuf(output_message_length),
		    output_message_address = output_message.address;
		
		address_pool.push(output_message_address);
		
		if ((libsodium._crypto_stream_chacha20_ietf_xor_ic(output_message_address, input_message_address, input_message_length, 0, nonce_address, nonce_increment, 0, key_address)) === 0) {
			var ret = _format_output(output_message, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_stream_chacha20_keygen(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- output output (buf)
		
		var output_length = (libsodium._crypto_stream_chacha20_keybytes()) | 0,
		    output = new AllocatedBuf(output_length),
		    output_address = output.address;
		
		address_pool.push(output_address);
		
		libsodium._crypto_stream_chacha20_keygen(output_address);
		var ret = (_format_output(output, outputFormat));
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_stream_chacha20_xor(input_message, nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: input_message (unsized_buf)
		
		input_message = _any_to_Uint8Array(address_pool, input_message, "input_message");
		var input_message_address = _to_allocated_buf_address(input_message),
		    input_message_length = input_message.length;
		address_pool.push(input_message_address);
		
		// ---------- input: nonce (buf)
		
		nonce = _any_to_Uint8Array(address_pool, nonce, "nonce");
		var nonce_address, nonce_length = (libsodium._crypto_stream_chacha20_noncebytes()) | 0;
		if (nonce.length !== nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid nonce length");
		}
		nonce_address = _to_allocated_buf_address(nonce);
		address_pool.push(nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_stream_chacha20_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output output_message (buf)
		
		var output_message_length = (input_message_length) | 0,
		    output_message = new AllocatedBuf(output_message_length),
		    output_message_address = output_message.address;
		
		address_pool.push(output_message_address);
		
		if ((libsodium._crypto_stream_chacha20_xor(output_message_address, input_message_address, input_message_length, 0, nonce_address, key_address)) === 0) {
			var ret = _format_output(output_message, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_stream_chacha20_xor_ic(input_message, nonce, nonce_increment, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: input_message (unsized_buf)
		
		input_message = _any_to_Uint8Array(address_pool, input_message, "input_message");
		var input_message_address = _to_allocated_buf_address(input_message),
		    input_message_length = input_message.length;
		address_pool.push(input_message_address);
		
		// ---------- input: nonce (buf)
		
		nonce = _any_to_Uint8Array(address_pool, nonce, "nonce");
		var nonce_address, nonce_length = (libsodium._crypto_stream_chacha20_noncebytes()) | 0;
		if (nonce.length !== nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid nonce length");
		}
		nonce_address = _to_allocated_buf_address(nonce);
		address_pool.push(nonce_address);
		
		// ---------- input: nonce_increment (uint)
		
		_require_defined(address_pool, nonce_increment, "nonce_increment");
		
		if (!(typeof nonce_increment === "number" && (nonce_increment | 0) === nonce_increment) && (nonce_increment | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "nonce_increment must be an unsigned integer");
		}
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_stream_chacha20_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output output_message (buf)
		
		var output_message_length = (input_message_length) | 0,
		    output_message = new AllocatedBuf(output_message_length),
		    output_message_address = output_message.address;
		
		address_pool.push(output_message_address);
		
		if ((libsodium._crypto_stream_chacha20_xor_ic(output_message_address, input_message_address, input_message_length, 0, nonce_address, nonce_increment, 0, key_address)) === 0) {
			var ret = _format_output(output_message, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_stream_keygen(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- output output (buf)
		
		var output_length = (libsodium._crypto_stream_keybytes()) | 0,
		    output = new AllocatedBuf(output_length),
		    output_address = output.address;
		
		address_pool.push(output_address);
		
		libsodium._crypto_stream_keygen(output_address);
		var ret = (_format_output(output, outputFormat));
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_stream_xchacha20_keygen(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- output output (buf)
		
		var output_length = (libsodium._crypto_stream_xchacha20_keybytes()) | 0,
		    output = new AllocatedBuf(output_length),
		    output_address = output.address;
		
		address_pool.push(output_address);
		
		libsodium._crypto_stream_xchacha20_keygen(output_address);
		var ret = (_format_output(output, outputFormat));
		_free_all(address_pool);
		return ret;
		
	}

	function crypto_stream_xchacha20_xor(input_message, nonce, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: input_message (unsized_buf)
		
		input_message = _any_to_Uint8Array(address_pool, input_message, "input_message");
		var input_message_address = _to_allocated_buf_address(input_message),
		    input_message_length = input_message.length;
		address_pool.push(input_message_address);
		
		// ---------- input: nonce (buf)
		
		nonce = _any_to_Uint8Array(address_pool, nonce, "nonce");
		var nonce_address, nonce_length = (libsodium._crypto_stream_xchacha20_noncebytes()) | 0;
		if (nonce.length !== nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid nonce length");
		}
		nonce_address = _to_allocated_buf_address(nonce);
		address_pool.push(nonce_address);
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_stream_xchacha20_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output output_message (buf)
		
		var output_message_length = (input_message_length) | 0,
		    output_message = new AllocatedBuf(output_message_length),
		    output_message_address = output_message.address;
		
		address_pool.push(output_message_address);
		
		if ((libsodium._crypto_stream_xchacha20_xor(output_message_address, input_message_address, input_message_length, 0, nonce_address, key_address)) === 0) {
			var ret = _format_output(output_message, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function crypto_stream_xchacha20_xor_ic(input_message, nonce, nonce_increment, key, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: input_message (unsized_buf)
		
		input_message = _any_to_Uint8Array(address_pool, input_message, "input_message");
		var input_message_address = _to_allocated_buf_address(input_message),
		    input_message_length = input_message.length;
		address_pool.push(input_message_address);
		
		// ---------- input: nonce (buf)
		
		nonce = _any_to_Uint8Array(address_pool, nonce, "nonce");
		var nonce_address, nonce_length = (libsodium._crypto_stream_xchacha20_noncebytes()) | 0;
		if (nonce.length !== nonce_length) {
		        _free_and_throw_type_error(address_pool, "invalid nonce length");
		}
		nonce_address = _to_allocated_buf_address(nonce);
		address_pool.push(nonce_address);
		
		// ---------- input: nonce_increment (uint)
		
		_require_defined(address_pool, nonce_increment, "nonce_increment");
		
		if (!(typeof nonce_increment === "number" && (nonce_increment | 0) === nonce_increment) && (nonce_increment | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "nonce_increment must be an unsigned integer");
		}
		
		// ---------- input: key (buf)
		
		key = _any_to_Uint8Array(address_pool, key, "key");
		var key_address, key_length = (libsodium._crypto_stream_xchacha20_keybytes()) | 0;
		if (key.length !== key_length) {
		        _free_and_throw_type_error(address_pool, "invalid key length");
		}
		key_address = _to_allocated_buf_address(key);
		address_pool.push(key_address);
		
		// ---------- output output_message (buf)
		
		var output_message_length = (input_message_length) | 0,
		    output_message = new AllocatedBuf(output_message_length),
		    output_message_address = output_message.address;
		
		address_pool.push(output_message_address);
		
		if ((libsodium._crypto_stream_xchacha20_xor_ic(output_message_address, input_message_address, input_message_length, 0, nonce_address, nonce_increment, 0, key_address)) === 0) {
			var ret = _format_output(output_message, outputFormat);
			_free_all(address_pool);
			return ret;
		}
		_free_and_throw_error(address_pool);
		
	}

	function randombytes_buf(length, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: length (uint)
		
		_require_defined(address_pool, length, "length");
		
		if (!(typeof length === "number" && (length | 0) === length) && (length | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "length must be an unsigned integer");
		}
		
		// ---------- output output (buf)
		
		var output_length = (length) | 0,
		    output = new AllocatedBuf(output_length),
		    output_address = output.address;
		
		address_pool.push(output_address);
		
		libsodium._randombytes_buf(output_address, length);
		var ret = (_format_output(output, outputFormat));
		_free_all(address_pool);
		return ret;
		
	}

	function randombytes_buf_deterministic(length, seed, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: length (uint)
		
		_require_defined(address_pool, length, "length");
		
		if (!(typeof length === "number" && (length | 0) === length) && (length | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "length must be an unsigned integer");
		}
		
		// ---------- input: seed (buf)
		
		seed = _any_to_Uint8Array(address_pool, seed, "seed");
		var seed_address, seed_length = (libsodium._randombytes_seedbytes()) | 0;
		if (seed.length !== seed_length) {
		        _free_and_throw_type_error(address_pool, "invalid seed length");
		}
		seed_address = _to_allocated_buf_address(seed);
		address_pool.push(seed_address);
		
		// ---------- output output (buf)
		
		var output_length = (length) | 0,
		    output = new AllocatedBuf(output_length),
		    output_address = output.address;
		
		address_pool.push(output_address);
		
		libsodium._randombytes_buf_deterministic(output_address, length, 0, seed);
		var ret = (_format_output(output, outputFormat));
		_free_all(address_pool);
		return ret;
		
	}

	function randombytes_close(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		libsodium._randombytes_close();
		
	}

	function randombytes_random(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		var random_value = libsodium._randombytes_random() >>> 0;
		var ret = (random_value);
		_free_all(address_pool);
		return ret;
		
	}

	function randombytes_set_implementation(implementation, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: implementation (randombytes_implementation)
		
		var implementation_address = libsodium._malloc(6 * 4);
		for (var i = 0; i < 6; i++) {
		        libsodium.setValue(implementation_address + i * 4,
		            libsodium.Runtime.addFunction(implementation
		            [["implementation_name", "random", "stir", "uniform", "buf", "close"][i]]),
		            "i32");
		}
		
		if ((libsodium._randombytes_set_implementation(implementation_address) | 0) === 0) {
			_free_all(address_pool);
			return;
		}
		_free_and_throw_error(address_pool);
		
	}

	function randombytes_stir(outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		libsodium._randombytes_stir();
		
	}

	function randombytes_uniform(upper_bound, outputFormat) {
		var address_pool = [];
		_check_output_format(outputFormat);

		// ---------- input: upper_bound (uint)
		
		_require_defined(address_pool, upper_bound, "upper_bound");
		
		if (!(typeof upper_bound === "number" && (upper_bound | 0) === upper_bound) && (upper_bound | 0) > 0) {
		        _free_and_throw_type_error(address_pool, "upper_bound must be an unsigned integer");
		}
		
		var random_value = libsodium._randombytes_uniform(upper_bound) >>> 0;
		var ret = (random_value);
		_free_all(address_pool);
		return ret;
		
	}

	function sodium_version_string() {
		var address_pool = [];

		var version = libsodium._sodium_version_string();
		var ret = (libsodium.Pointer_stringify(version));
		_free_all(address_pool);
		return ret;
		
	}


    exports.add = add;
    exports.compare = compare;
    exports.from_base64 = from_base64;
    exports.from_hex = from_hex;
    exports.from_string = from_string;
    exports.increment = increment;
    exports.is_zero = is_zero;
    exports.libsodium = libsodium;
    exports.memcmp = memcmp;
    exports.memzero = memzero;
    exports.output_formats = output_formats;
    exports.symbols = symbols;
    exports.to_base64 = to_base64;
    exports.to_hex = to_hex;
    exports.to_string = to_string;

    
	var exported_functions = ["crypto_aead_chacha20poly1305_decrypt", "crypto_aead_chacha20poly1305_decrypt_detached", "crypto_aead_chacha20poly1305_encrypt", "crypto_aead_chacha20poly1305_encrypt_detached", "crypto_aead_chacha20poly1305_ietf_decrypt", "crypto_aead_chacha20poly1305_ietf_decrypt_detached", "crypto_aead_chacha20poly1305_ietf_encrypt", "crypto_aead_chacha20poly1305_ietf_encrypt_detached", "crypto_aead_chacha20poly1305_ietf_keygen", "crypto_aead_chacha20poly1305_keygen", "crypto_aead_xchacha20poly1305_ietf_decrypt", "crypto_aead_xchacha20poly1305_ietf_decrypt_detached", "crypto_aead_xchacha20poly1305_ietf_encrypt", "crypto_aead_xchacha20poly1305_ietf_encrypt_detached", "crypto_aead_xchacha20poly1305_ietf_keygen", "crypto_auth", "crypto_auth_hmacsha256", "crypto_auth_hmacsha256_keygen", "crypto_auth_hmacsha256_verify", "crypto_auth_hmacsha512", "crypto_auth_hmacsha512_keygen", "crypto_auth_hmacsha512_verify", "crypto_auth_keygen", "crypto_auth_verify", "crypto_box_beforenm", "crypto_box_detached", "crypto_box_easy", "crypto_box_easy_afternm", "crypto_box_keypair", "crypto_box_open_detached", "crypto_box_open_easy", "crypto_box_open_easy_afternm", "crypto_box_seal", "crypto_box_seal_open", "crypto_box_seed_keypair", "crypto_generichash", "crypto_generichash_final", "crypto_generichash_init", "crypto_generichash_keygen", "crypto_generichash_update", "crypto_hash", "crypto_hash_sha256", "crypto_hash_sha512", "crypto_kdf_derive_from_key", "crypto_kdf_keygen", "crypto_kx_client_session_keys", "crypto_kx_keypair", "crypto_kx_seed_keypair", "crypto_kx_server_session_keys", "crypto_onetimeauth", "crypto_onetimeauth_final", "crypto_onetimeauth_init", "crypto_onetimeauth_keygen", "crypto_onetimeauth_update", "crypto_onetimeauth_verify", "crypto_pwhash", "crypto_pwhash_scryptsalsa208sha256", "crypto_pwhash_scryptsalsa208sha256_ll", "crypto_pwhash_scryptsalsa208sha256_str", "crypto_pwhash_scryptsalsa208sha256_str_verify", "crypto_pwhash_str", "crypto_pwhash_str_verify", "crypto_scalarmult", "crypto_scalarmult_base", "crypto_secretbox_detached", "crypto_secretbox_easy", "crypto_secretbox_keygen", "crypto_secretbox_open_detached", "crypto_secretbox_open_easy", "crypto_shorthash", "crypto_shorthash_keygen", "crypto_shorthash_siphashx24", "crypto_sign", "crypto_sign_detached", "crypto_sign_ed25519_pk_to_curve25519", "crypto_sign_ed25519_sk_to_curve25519", "crypto_sign_ed25519_sk_to_pk", "crypto_sign_ed25519_sk_to_seed", "crypto_sign_final_create", "crypto_sign_final_verify", "crypto_sign_init", "crypto_sign_keypair", "crypto_sign_open", "crypto_sign_seed_keypair", "crypto_sign_update", "crypto_sign_verify_detached", "crypto_stream_chacha20_ietf_xor", "crypto_stream_chacha20_ietf_xor_ic", "crypto_stream_chacha20_keygen", "crypto_stream_chacha20_xor", "crypto_stream_chacha20_xor_ic", "crypto_stream_keygen", "crypto_stream_xchacha20_keygen", "crypto_stream_xchacha20_xor", "crypto_stream_xchacha20_xor_ic", "randombytes_buf", "randombytes_buf_deterministic", "randombytes_close", "randombytes_random", "randombytes_set_implementation", "randombytes_stir", "randombytes_uniform", "sodium_version_string"],
	      functions = [crypto_aead_chacha20poly1305_decrypt, crypto_aead_chacha20poly1305_decrypt_detached, crypto_aead_chacha20poly1305_encrypt, crypto_aead_chacha20poly1305_encrypt_detached, crypto_aead_chacha20poly1305_ietf_decrypt, crypto_aead_chacha20poly1305_ietf_decrypt_detached, crypto_aead_chacha20poly1305_ietf_encrypt, crypto_aead_chacha20poly1305_ietf_encrypt_detached, crypto_aead_chacha20poly1305_ietf_keygen, crypto_aead_chacha20poly1305_keygen, crypto_aead_xchacha20poly1305_ietf_decrypt, crypto_aead_xchacha20poly1305_ietf_decrypt_detached, crypto_aead_xchacha20poly1305_ietf_encrypt, crypto_aead_xchacha20poly1305_ietf_encrypt_detached, crypto_aead_xchacha20poly1305_ietf_keygen, crypto_auth, crypto_auth_hmacsha256, crypto_auth_hmacsha256_keygen, crypto_auth_hmacsha256_verify, crypto_auth_hmacsha512, crypto_auth_hmacsha512_keygen, crypto_auth_hmacsha512_verify, crypto_auth_keygen, crypto_auth_verify, crypto_box_beforenm, crypto_box_detached, crypto_box_easy, crypto_box_easy_afternm, crypto_box_keypair, crypto_box_open_detached, crypto_box_open_easy, crypto_box_open_easy_afternm, crypto_box_seal, crypto_box_seal_open, crypto_box_seed_keypair, crypto_generichash, crypto_generichash_final, crypto_generichash_init, crypto_generichash_keygen, crypto_generichash_update, crypto_hash, crypto_hash_sha256, crypto_hash_sha512, crypto_kdf_derive_from_key, crypto_kdf_keygen, crypto_kx_client_session_keys, crypto_kx_keypair, crypto_kx_seed_keypair, crypto_kx_server_session_keys, crypto_onetimeauth, crypto_onetimeauth_final, crypto_onetimeauth_init, crypto_onetimeauth_keygen, crypto_onetimeauth_update, crypto_onetimeauth_verify, crypto_pwhash, crypto_pwhash_scryptsalsa208sha256, crypto_pwhash_scryptsalsa208sha256_ll, crypto_pwhash_scryptsalsa208sha256_str, crypto_pwhash_scryptsalsa208sha256_str_verify, crypto_pwhash_str, crypto_pwhash_str_verify, crypto_scalarmult, crypto_scalarmult_base, crypto_secretbox_detached, crypto_secretbox_easy, crypto_secretbox_keygen, crypto_secretbox_open_detached, crypto_secretbox_open_easy, crypto_shorthash, crypto_shorthash_keygen, crypto_shorthash_siphashx24, crypto_sign, crypto_sign_detached, crypto_sign_ed25519_pk_to_curve25519, crypto_sign_ed25519_sk_to_curve25519, crypto_sign_ed25519_sk_to_pk, crypto_sign_ed25519_sk_to_seed, crypto_sign_final_create, crypto_sign_final_verify, crypto_sign_init, crypto_sign_keypair, crypto_sign_open, crypto_sign_seed_keypair, crypto_sign_update, crypto_sign_verify_detached, crypto_stream_chacha20_ietf_xor, crypto_stream_chacha20_ietf_xor_ic, crypto_stream_chacha20_keygen, crypto_stream_chacha20_xor, crypto_stream_chacha20_xor_ic, crypto_stream_keygen, crypto_stream_xchacha20_keygen, crypto_stream_xchacha20_xor, crypto_stream_xchacha20_xor_ic, randombytes_buf, randombytes_buf_deterministic, randombytes_close, randombytes_random, randombytes_set_implementation, randombytes_stir, randombytes_uniform, sodium_version_string];
	for (var i = 0; i < functions.length; i++) {
		if (typeof libsodium["_" + exported_functions[i]] === "function") {
			exports[exported_functions[i]] = functions[i];
		}
	}
	var constants = ["SODIUM_LIBRARY_VERSION_MAJOR", "SODIUM_LIBRARY_VERSION_MINOR", "crypto_aead_chacha20poly1305_ABYTES", "crypto_aead_chacha20poly1305_KEYBYTES", "crypto_aead_chacha20poly1305_NPUBBYTES", "crypto_aead_chacha20poly1305_NSECBYTES", "crypto_aead_chacha20poly1305_ietf_ABYTES", "crypto_aead_chacha20poly1305_ietf_KEYBYTES", "crypto_aead_chacha20poly1305_ietf_NPUBBYTES", "crypto_aead_chacha20poly1305_ietf_NSECBYTES", "crypto_aead_xchacha20poly1305_ietf_ABYTES", "crypto_aead_xchacha20poly1305_ietf_KEYBYTES", "crypto_aead_xchacha20poly1305_ietf_NPUBBYTES", "crypto_aead_xchacha20poly1305_ietf_NSECBYTES", "crypto_auth_BYTES", "crypto_auth_KEYBYTES", "crypto_auth_hmacsha256_BYTES", "crypto_auth_hmacsha256_KEYBYTES", "crypto_auth_hmacsha512_BYTES", "crypto_auth_hmacsha512_KEYBYTES", "crypto_box_BEFORENMBYTES", "crypto_box_MACBYTES", "crypto_box_NONCEBYTES", "crypto_box_PUBLICKEYBYTES", "crypto_box_SEALBYTES", "crypto_box_SECRETKEYBYTES", "crypto_box_SEEDBYTES", "crypto_generichash_BYTES", "crypto_generichash_BYTES_MAX", "crypto_generichash_BYTES_MIN", "crypto_generichash_KEYBYTES", "crypto_generichash_KEYBYTES_MAX", "crypto_generichash_KEYBYTES_MIN", "crypto_hash_BYTES", "crypto_kdf_BYTES_MAX", "crypto_kdf_BYTES_MIN", "crypto_kdf_CONTEXTBYTES", "crypto_kdf_KEYBYTES", "crypto_kx_PUBLICKEYBYTES", "crypto_kx_SECRETKEYBYTES", "crypto_kx_SEEDBYTES", "crypto_kx_SESSSIONKEYBYTES", "crypto_onetimeauth_BYTES", "crypto_onetimeauth_KEYBYTES", "crypto_pwhash_ALG_ARGON2I13", "crypto_pwhash_ALG_DEFAULT", "crypto_pwhash_BYTES_MAX", "crypto_pwhash_BYTES_MIN", "crypto_pwhash_MEMLIMIT_INTERACTIVE", "crypto_pwhash_MEMLIMIT_MAX", "crypto_pwhash_MEMLIMIT_MIN", "crypto_pwhash_MEMLIMIT_MODERATE", "crypto_pwhash_MEMLIMIT_SENSITIVE", "crypto_pwhash_OPSLIMIT_INTERACTIVE", "crypto_pwhash_OPSLIMIT_MAX", "crypto_pwhash_OPSLIMIT_MIN", "crypto_pwhash_OPSLIMIT_MODERATE", "crypto_pwhash_OPSLIMIT_SENSITIVE", "crypto_pwhash_PASSWD_MAX", "crypto_pwhash_PASSWD_MIN", "crypto_pwhash_SALTBYTES", "crypto_pwhash_STRBYTES", "crypto_pwhash_STR_VERIFY", "crypto_pwhash_scryptsalsa208sha256_BYTES_MAX", "crypto_pwhash_scryptsalsa208sha256_BYTES_MIN", "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_INTERACTIVE", "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX", "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN", "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_SENSITIVE", "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_INTERACTIVE", "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX", "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN", "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_SENSITIVE", "crypto_pwhash_scryptsalsa208sha256_SALTBYTES", "crypto_pwhash_scryptsalsa208sha256_STRBYTES", "crypto_pwhash_scryptsalsa208sha256_STR_VERIFY", "crypto_scalarmult_BYTES", "crypto_scalarmult_SCALARBYTES", "crypto_secretbox_KEYBYTES", "crypto_secretbox_MACBYTES", "crypto_secretbox_NONCEBYTES", "crypto_shorthash_BYTES", "crypto_shorthash_KEYBYTES", "crypto_shorthash_siphashx24_BYTES", "crypto_shorthash_siphashx24_KEYBYTES", "crypto_sign_BYTES", "crypto_sign_PUBLICKEYBYTES", "crypto_sign_SECRETKEYBYTES", "crypto_sign_SEEDBYTES", "crypto_stream_chacha20_KEYBYTES", "crypto_stream_chacha20_NONCEBYTES", "crypto_stream_chacha20_ietf_KEYBYTES", "crypto_stream_chacha20_ietf_NONCEBYTES", "crypto_stream_xchacha20_ietf_KEYBYTES", "crypto_stream_xchacha20_ietf_NONCEBYTES", "randombytes_SEEDBYTES"];
	for (var i = 0; i < constants.length; i++) {
		var raw = libsodium["_" + constants[i].toLowerCase()];
		if (typeof raw === "function") exports[constants[i]] = raw()|0;
	}
	var constants_str = ["SODIUM_VERSION_STRING", "crypto_pwhash_STRPREFIX", "crypto_pwhash_scryptsalsa208sha256_STRPREFIX"];
	for (var i = 0; i < constants_str.length; i++) {
		var raw = libsodium["_" + constants_str[i].toLowerCase()];
		if (typeof raw === "function") exports[constants_str[i]] = libsodium.Pointer_stringify(raw());
	}

    return exports;
})));
