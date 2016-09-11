System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MotivatedFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MotivatedFilterPipe = (function () {
                function MotivatedFilterPipe() {
                }
                MotivatedFilterPipe.prototype.transform = function (items, args) {
                    console.log(items, args);
                    return items.filter(function (item) { return item.subs[3] < 80 && item.subs[5] > 60; });
                };
                MotivatedFilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'motivatedFilter'
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MotivatedFilterPipe);
                return MotivatedFilterPipe;
            }());
            exports_1("MotivatedFilterPipe", MotivatedFilterPipe);
        }
    }
});
//# sourceMappingURL=motivated.pipe.js.map