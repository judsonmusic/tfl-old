System.register(['@angular/core', "../assessment/assessment.service"], function(exports_1, context_1) {
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
    var core_1, assessment_service_1;
    var OnCreateView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (assessment_service_1_1) {
                assessment_service_1 = assessment_service_1_1;
            }],
        execute: function() {
            OnCreateView = (function () {
                function OnCreateView(el, assessmentService) {
                    this.el = el;
                    this.assessmentService = assessmentService;
                    this.el = el;
                    this.assessmentService = assessmentService;
                }
                OnCreateView.prototype.ngOnInit = function () {
                    var _this = this;
                    this.assessmentService.getHtmlForDimension(this.onCreateView).subscribe(function (html) {
                        _this.el.nativeElement.innerHTML = html;
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], OnCreateView.prototype, "onCreateView", void 0);
                OnCreateView = __decorate([
                    core_1.Directive({
                        selector: '[onCreateView]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, assessment_service_1.AssessmentService])
                ], OnCreateView);
                return OnCreateView;
            }());
            exports_1("OnCreateView", OnCreateView);
        }
    }
});
//# sourceMappingURL=oncreateview.js.map