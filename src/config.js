System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "traceur",
  traceurOptions: {
    "annotations": true,
    "memberVariables": true,
    "types": true
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "bundle.js": [
      "app/app.js",
      "app/components/gogoshogi/game/game.directive.js",
      "npm:angular2@2.0.0-alpha.44/angular2",
      "app/components/gogoshogi/koma/koma.js",
      "app/components/gogoshogi/mass/mass.js",
      "app/components/gogoshogi/koma/koma.directive.js",
      "npm:socket.io-client@1.3.7",
      "npm:lodash@3.10.1",
      "npm:angular2@2.0.0-alpha.44/core",
      "app/components/gogoshogi/mass/mass.directive.js",
      "npm:angular2@2.0.0-alpha.44/lifecycle_hooks",
      "npm:angular2@2.0.0-alpha.44/profile",
      "npm:angular2@2.0.0-alpha.44/bootstrap",
      "npm:socket.io-client@1.3.7/index",
      "npm:angular2@2.0.0-alpha.44/src/core/metadata",
      "npm:angular2@2.0.0-alpha.44/src/core/util",
      "npm:lodash@3.10.1/index",
      "npm:angular2@2.0.0-alpha.44/src/core/facade",
      "npm:angular2@2.0.0-alpha.44/src/core/linker",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes",
      "npm:angular2@2.0.0-alpha.44/src/core/di",
      "npm:angular2@2.0.0-alpha.44/src/core/application",
      "npm:angular2@2.0.0-alpha.44/src/core/services",
      "npm:angular2@2.0.0-alpha.44/src/core/render",
      "npm:angular2@2.0.0-alpha.44/src/core/lifecycle",
      "npm:angular2@2.0.0-alpha.44/src/core/zone",
      "npm:angular2@2.0.0-alpha.44/src/core/directives",
      "npm:angular2@2.0.0-alpha.44/src/core/forms",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection",
      "npm:angular2@2.0.0-alpha.44/src/core/debug",
      "npm:angular2@2.0.0-alpha.44/src/core/bootstrap",
      "app/components/gogoshogi/game/game.css!github:systemjs/plugin-css@0.1.19",
      "github:twbs/bootstrap@3.3.5/css/bootstrap.css!github:systemjs/plugin-css@0.1.19",
      "npm:angular2@2.0.0-alpha.44/src/core/profile/profile",
      "npm:socket.io-client@1.3.7/lib/index",
      "npm:angular2@2.0.0-alpha.44/src/core/metadata/di",
      "npm:angular2@2.0.0-alpha.44/src/core/metadata/directives",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:angular2@2.0.0-alpha.44/src/core/facade/lang",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/directive_resolver",
      "npm:angular2@2.0.0-alpha.44/src/core/facade/exceptions",
      "npm:angular2@2.0.0-alpha.44/src/core/util/decorators",
      "npm:angular2@2.0.0-alpha.44/src/core/metadata/view",
      "npm:angular2@2.0.0-alpha.44/src/core/facade/async",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/dynamic_component_loader",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/compiler",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/view_manager",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/view_ref",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/query_list",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/view_container_ref",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/element_ref",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/template_ref",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/async_pipe",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/date_pipe",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/lowercase_pipe",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/slice_pipe",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/uppercase_pipe",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/json_pipe",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/number_pipe",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/default_pipes",
      "npm:angular2@2.0.0-alpha.44/src/core/di/metadata",
      "npm:angular2@2.0.0-alpha.44/src/core/di/forward_ref",
      "npm:angular2@2.0.0-alpha.44/src/core/di/injector",
      "npm:angular2@2.0.0-alpha.44/src/core/di/provider",
      "npm:angular2@2.0.0-alpha.44/src/core/di/key",
      "npm:angular2@2.0.0-alpha.44/src/core/di/opaque_token",
      "npm:angular2@2.0.0-alpha.44/src/core/di/decorators",
      "npm:angular2@2.0.0-alpha.44/src/core/di/exceptions",
      "npm:angular2@2.0.0-alpha.44/src/core/application_ref",
      "npm:angular2@2.0.0-alpha.44/src/core/application_common",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/compiler",
      "npm:angular2@2.0.0-alpha.44/src/core/application_tokens",
      "npm:angular2@2.0.0-alpha.44/src/core/services/title",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/url_resolver",
      "npm:angular2@2.0.0-alpha.44/src/core/render/render",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/app_root_url",
      "npm:angular2@2.0.0-alpha.44/src/core/life_cycle/life_cycle",
      "npm:angular2@2.0.0-alpha.44/src/core/directives/ng_for",
      "npm:angular2@2.0.0-alpha.44/src/core/directives/ng_class",
      "npm:angular2@2.0.0-alpha.44/src/core/directives/ng_if",
      "npm:angular2@2.0.0-alpha.44/src/core/directives/observable_list_diff",
      "npm:angular2@2.0.0-alpha.44/src/core/directives/ng_style",
      "npm:angular2@2.0.0-alpha.44/src/core/zone/ng_zone",
      "npm:angular2@2.0.0-alpha.44/src/core/directives/ng_switch",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/abstract_control_directive",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/ng_form_control",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/model",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/ng_control_name",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/ng_control",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/ng_form_model",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/control_container",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/ng_form",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/default_value_accessor",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/ng_control_group",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/select_control_value_accessor",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/ng_control_status",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/checkbox_value_accessor",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/validators",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/validators",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/form_builder",
      "npm:angular2@2.0.0-alpha.44/src/core/debug/debug_element",
      "npm:angular2@2.0.0-alpha.44/src/core/debug/debug_element_view_listener",
      "npm:angular2@2.0.0-alpha.44/src/core/profile/wtf_impl",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/ng_model",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/change_detection",
      "npm:socket.io-parser@2.2.4",
      "npm:debug@0.7.4",
      "npm:socket.io-client@1.3.7/lib/manager",
      "npm:angular2@2.0.0-alpha.44/src/core/reflection/reflection",
      "npm:angular2@2.0.0-alpha.44/src/core/facade/collection",
      "npm:angular2@2.0.0-alpha.44/src/core/facade/promise",
      "npm:socket.io-client@1.3.7/lib/socket",
      "npm:socket.io-client@1.3.7/lib/url",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:angular2@2.0.0-alpha.44/src/core/facade/exception_handler",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/template_commands",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/proto_view_factory",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/view_manager_utils",
      "npm:angular2@2.0.0-alpha.44/src/core/render/api",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/view_pool",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/Subject",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/invalid_pipe_argument_exception",
      "npm:angular2@2.0.0-alpha.44/src/core/facade/intl",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/view_listener",
      "npm:angular2@2.0.0-alpha.44/src/core/di/type_literal",
      "npm:angular2@2.0.0-alpha.44/src/core/testability/testability",
      "npm:angular2@2.0.0-alpha.44/src/core/dom/dom_adapter",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/view_resolver",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/pipe_resolver",
      "npm:angular2@2.0.0-alpha.44/src/core/testability/browser_testability",
      "npm:angular2@2.0.0-alpha.44/src/core/dom/browser_adapter",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/xhr",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/xhr_impl",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/view",
      "npm:angular2@2.0.0-alpha.44/src/core/render/dom/events/key_events",
      "npm:angular2@2.0.0-alpha.44/src/core/render/dom/events/hammer_gestures",
      "npm:angular2@2.0.0-alpha.44/src/core/render/dom/events/event_manager",
      "npm:angular2@2.0.0-alpha.44/src/core/render/dom/shared_styles_host",
      "npm:angular2@2.0.0-alpha.44/src/animate/animation_builder",
      "npm:angular2@2.0.0-alpha.44/src/core/profile/wtf_init",
      "npm:angular2@2.0.0-alpha.44/src/core/platform_bindings",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/runtime_compiler",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/directive_metadata",
      "npm:angular2@2.0.0-alpha.44/src/animate/browser_details",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/template_compiler",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/template_parser",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/source_module",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/template_normalizer",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/runtime_metadata",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/change_detector_compiler",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/html_parser",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/style_compiler",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/schema/element_schema_registry",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/command_compiler",
      "npm:angular2@2.0.0-alpha.44/src/core/render/dom/dom_renderer",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/anchor_based_app_root_url",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/shared",
      "npm:angular2@2.0.0-alpha.44/src/core/render/dom/dom_tokens",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/number_value_accessor",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/schema/dom_element_schema_registry",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/control_value_accessor",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/differs/iterable_differs",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/differs/default_iterable_differ",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/parser/lexer",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/differs/keyvalue_differs",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/parser/ast",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/parser/locals",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/differs/default_keyvalue_differ",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/exceptions",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/interfaces",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/jit_proto_change_detector",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/constants",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/directive_record",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/binding_record",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/proto_change_detector",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/dynamic_change_detector",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/change_detector_ref",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/change_detection_util",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/parser/parser",
      "npm:socket.io-parser@2.2.4/index",
      "npm:engine.io-client@1.5.4",
      "npm:indexof@0.0.1",
      "npm:component-emitter@1.1.2",
      "npm:component-bind@1.0.0",
      "npm:debug@0.7.4/debug",
      "npm:backo2@1.0.2",
      "npm:object-component@0.0.3",
      "npm:angular2@2.0.0-alpha.44/src/core/reflection/reflector",
      "npm:socket.io-client@1.3.7/lib/on",
      "npm:to-array@0.1.3",
      "npm:angular2@2.0.0-alpha.44/src/core/reflection/reflection_capabilities",
      "npm:parseuri@0.0.2",
      "npm:process@0.11.2",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/pipe_provider",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/pipes",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/element_binder",
      "npm:has-binary@0.1.6",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/Observable",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/Subscriber",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/element_injector",
      "npm:angular2@2.0.0-alpha.44/render",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/Subscription",
      "npm:angular2@2.0.0-alpha.44/src/core/dom/generic_browser_adapter",
      "npm:angular2@2.0.0-alpha.44/src/animate/css_animation_builder",
      "npm:angular2@2.0.0-alpha.44/src/core/render/dom/util",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/util",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/subjects/SubjectSubscription",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/selector",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/interfaces",
      "npm:angular2@2.0.0-alpha.44/src/core/facade/math",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/template_preparser",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/template_ast",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/html_ast",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/style_url_resolver",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/directive_lifecycle_reflector",
      "npm:angular2@2.0.0-alpha.44/src/core/render/dom/events/hammer_common",
      "npm:angular2@2.0.0-alpha.44/src/transform/template_compiler/change_detector_codegen",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/change_detection_jit_generator",
      "npm:angular2@2.0.0-alpha.44/src/core/render/view_factory",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/change_definition_factory",
      "npm:angular2@2.0.0-alpha.44/src/core/render/view",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/event_binding",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/proto_record",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/coalesce",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/pipe_lifecycle_reflector",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/abstract_change_detector",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/shadow_css",
      "npm:json3@3.2.6",
      "github:jspm/nodelibs-buffer@0.1.0",
      "npm:isarray@0.0.1",
      "npm:socket.io-parser@2.2.4/binary",
      "npm:socket.io-parser@2.2.4/is-buffer",
      "npm:engine.io-client@1.5.4/index",
      "npm:component-emitter@1.1.2/index",
      "npm:indexof@0.0.1/index",
      "npm:component-bind@1.0.0/index",
      "npm:parseuri@0.0.2/index",
      "npm:backo2@1.0.2/index",
      "npm:object-component@0.0.3/index",
      "npm:has-binary@0.1.6/index",
      "npm:to-array@0.1.3/index",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/pipes",
      "npm:process@0.11.2/browser",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/util/Symbol_observable",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/util/throwError",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/util/root",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/util/tryOrOnError",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/event_config",
      "npm:angular2@2.0.0-alpha.44/src/animate/css_animation_options",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/codegen_name_util",
      "npm:angular2@2.0.0-alpha.44/src/animate/animation",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/codegen_facade",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/observable_facade",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/codegen_logic_util",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/util/noop",
      "github:jspm/nodelibs-buffer@0.1.0/index",
      "npm:engine.io-client@1.5.4/lib/index",
      "npm:isarray@0.0.1/index",
      "npm:json3@3.2.6/lib/json3",
      "npm:engine.io-client@1.5.4/lib/socket",
      "npm:buffer@3.5.1",
      "npm:engine.io-parser@1.2.1",
      "npm:parsejson@0.0.1",
      "npm:parseuri@0.0.4",
      "npm:debug@2.1.3",
      "npm:engine.io-client@1.5.4/lib/transport",
      "npm:engine.io-client@1.5.4/lib/transports/index",
      "npm:parseqs@0.0.2",
      "npm:buffer@3.5.1/index",
      "npm:engine.io-parser@1.2.1/lib/browser",
      "npm:parseuri@0.0.4/index",
      "npm:parsejson@0.0.1/index",
      "npm:debug@2.1.3/browser",
      "npm:engine.io-client@1.5.4/lib/xmlhttprequest",
      "npm:engine.io-client@1.5.4/lib/transports/polling-xhr",
      "npm:engine.io-client@1.5.4/lib/transports/polling-jsonp",
      "npm:engine.io-client@1.5.4/lib/transports/websocket",
      "npm:parseqs@0.0.2/index",
      "npm:ieee754@1.1.6",
      "npm:base64-js@0.0.8",
      "npm:is-array@1.0.1",
      "npm:has-binary@0.1.5",
      "npm:arraybuffer.slice@0.0.6",
      "npm:after@0.8.1",
      "npm:base64-arraybuffer@0.1.2",
      "npm:engine.io-parser@1.2.1/lib/keys",
      "npm:utf8@2.0.0",
      "npm:blob@0.0.2",
      "npm:debug@2.1.3/debug",
      "npm:has-cors@1.0.3",
      "npm:component-inherit@0.0.3",
      "npm:ws@0.7.1",
      "npm:engine.io-client@1.5.4/lib/transports/polling",
      "npm:ieee754@1.1.6/index",
      "npm:has-binary@0.1.5/index",
      "npm:base64-js@0.0.8/lib/b64",
      "npm:is-array@1.0.1/index",
      "npm:arraybuffer.slice@0.0.6/index",
      "npm:base64-arraybuffer@0.1.2/lib/base64-arraybuffer",
      "npm:after@0.8.1/index",
      "npm:utf8@2.0.0/utf8",
      "npm:blob@0.0.2/index",
      "npm:ms@0.7.0",
      "npm:has-cors@1.0.3/index",
      "npm:ws@0.7.1/lib/browser",
      "npm:component-inherit@0.0.3/index",
      "github:component/global@2.0.1",
      "npm:ms@0.7.0/index",
      "github:component/global@2.0.1/index"
    ]
  },

  map: {
    "angular2": "npm:angular2@2.0.0-alpha.44",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "clean-css": "npm:clean-css@3.4.6",
    "css": "github:systemjs/plugin-css@0.1.19",
    "lodash": "npm:lodash@3.10.1",
    "reflect-metadata": "npm:reflect-metadata@0.1.2",
    "socket.io-client": "npm:socket.io-client@1.3.7",
    "systemjs": "npm:systemjs@0.19.5",
    "traceur": "github:jmcriffey/bower-traceur@0.0.92",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.92",
    "typescript": "npm:typescript@1.6.2",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.1"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.10.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.1"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:@reactivex/rxjs@5.0.0-alpha.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angular2@2.0.0-alpha.44": {
      "@reactivex/rxjs": "npm:@reactivex/rxjs@5.0.0-alpha.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "reflect-metadata": "npm:reflect-metadata@0.1.1",
      "zone.js": "npm:zone.js@0.5.8"
    },
    "npm:asn1.js@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:benchmark@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:better-assert@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "callsite": "npm:callsite@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bindings@1.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.8": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:bufferutil@1.0.1": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@1.6.2"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:clean-css@3.4.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.10.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@3.0.8",
      "create-ecdh": "npm:create-ecdh@2.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@3.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:debug@0.7.4": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:debug@2.1.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@3.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@2.0.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@3.1.0": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:engine.io-client@1.5.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "component-inherit": "npm:component-inherit@0.0.3",
      "debug": "npm:debug@2.1.3",
      "engine.io-parser": "npm:engine.io-parser@1.2.1",
      "has-cors": "npm:has-cors@1.0.3",
      "indexof": "npm:indexof@0.0.1",
      "parsejson": "npm:parsejson@0.0.1",
      "parseqs": "npm:parseqs@0.0.2",
      "parseuri": "npm:parseuri@0.0.4",
      "ws": "npm:ws@0.7.1"
    },
    "npm:engine.io-parser@1.2.1": {
      "after": "npm:after@0.8.1",
      "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
      "base64-arraybuffer": "npm:base64-arraybuffer@0.1.2",
      "blob": "npm:blob@0.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "has-binary": "npm:has-binary@0.1.5",
      "utf8": "npm:utf8@2.0.0"
    },
    "npm:es6-module-loader@0.17.8": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "when": "npm:when@3.7.4"
    },
    "npm:es6-promise@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:has-binary@0.1.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:has-binary@0.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:has-cors@1.0.3": {
      "global": "github:component/global@2.0.1"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:miller-rabin@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:nan@1.6.2": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:options@0.0.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@3.0.2": {
      "asn1.js": "npm:asn1.js@2.2.1",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parsejson@0.0.1": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseqs@0.0.2": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseuri@0.0.2": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseuri@0.0.4": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.2",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:reflect-metadata@0.1.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:reflect-metadata@0.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:socket.io-client@1.3.7": {
      "backo2": "npm:backo2@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-bind": "npm:component-bind@1.0.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "debug": "npm:debug@0.7.4",
      "engine.io-client": "npm:engine.io-client@1.5.4",
      "has-binary": "npm:has-binary@0.1.6",
      "indexof": "npm:indexof@0.0.1",
      "object-component": "npm:object-component@0.0.3",
      "parseuri": "npm:parseuri@0.0.2",
      "socket.io-parser": "npm:socket.io-parser@2.2.4",
      "to-array": "npm:to-array@0.1.3"
    },
    "npm:socket.io-parser@2.2.4": {
      "benchmark": "npm:benchmark@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "debug": "npm:debug@0.7.4",
      "isarray": "npm:isarray@0.0.1",
      "json3": "npm:json3@3.2.6"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:systemjs@0.19.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "es6-module-loader": "npm:es6-module-loader@0.17.8",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "when": "npm:when@3.7.4"
    },
    "npm:timers-browserify@1.4.1": {
      "process": "npm:process@0.11.2"
    },
    "npm:ultron@1.0.2": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:utf-8-validate@1.0.1": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@1.6.2"
    },
    "npm:utf8@2.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:when@3.7.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ws@0.7.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bufferutil": "npm:bufferutil@1.0.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "options": "npm:options@0.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "ultron": "npm:ultron@1.0.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "utf-8-validate": "npm:utf-8-validate@1.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:zone.js@0.5.8": {
      "es6-promise": "npm:es6-promise@3.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
