'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">routing-service documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-62eb6ab2c1f782d4169902f310931e0e1b9a8d7f6c5ddb937070ee8fdd772cbc3d96b0dd3330bddb0e6cd50ea6499fbaab351e31f5d3a337fd1f97b190c20db9"' : 'data-bs-target="#xs-controllers-links-module-AppModule-62eb6ab2c1f782d4169902f310931e0e1b9a8d7f6c5ddb937070ee8fdd772cbc3d96b0dd3330bddb0e6cd50ea6499fbaab351e31f5d3a337fd1f97b190c20db9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-62eb6ab2c1f782d4169902f310931e0e1b9a8d7f6c5ddb937070ee8fdd772cbc3d96b0dd3330bddb0e6cd50ea6499fbaab351e31f5d3a337fd1f97b190c20db9"' :
                                            'id="xs-controllers-links-module-AppModule-62eb6ab2c1f782d4169902f310931e0e1b9a8d7f6c5ddb937070ee8fdd772cbc3d96b0dd3330bddb0e6cd50ea6499fbaab351e31f5d3a337fd1f97b190c20db9"' }>
                                            <li class="link">
                                                <a href="controllers/RoutingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoutingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-62eb6ab2c1f782d4169902f310931e0e1b9a8d7f6c5ddb937070ee8fdd772cbc3d96b0dd3330bddb0e6cd50ea6499fbaab351e31f5d3a337fd1f97b190c20db9"' : 'data-bs-target="#xs-injectables-links-module-AppModule-62eb6ab2c1f782d4169902f310931e0e1b9a8d7f6c5ddb937070ee8fdd772cbc3d96b0dd3330bddb0e6cd50ea6499fbaab351e31f5d3a337fd1f97b190c20db9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-62eb6ab2c1f782d4169902f310931e0e1b9a8d7f6c5ddb937070ee8fdd772cbc3d96b0dd3330bddb0e6cd50ea6499fbaab351e31f5d3a337fd1f97b190c20db9"' :
                                        'id="xs-injectables-links-module-AppModule-62eb6ab2c1f782d4169902f310931e0e1b9a8d7f6c5ddb937070ee8fdd772cbc3d96b0dd3330bddb0e6cd50ea6499fbaab351e31f5d3a337fd1f97b190c20db9"' }>
                                        <li class="link">
                                            <a href="injectables/RoutingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoutingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RedisModule.html" data-type="entity-link" >RedisModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RedisModule-855ac177adabbe3809b8c195d8d0c098add5ad84cdaa3b64a2c81b90ded3688aa1e188dc85a26dce2fe1f0cad9090df3c652d231727aea9250cafebe2bf74581"' : 'data-bs-target="#xs-injectables-links-module-RedisModule-855ac177adabbe3809b8c195d8d0c098add5ad84cdaa3b64a2c81b90ded3688aa1e188dc85a26dce2fe1f0cad9090df3c652d231727aea9250cafebe2bf74581"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RedisModule-855ac177adabbe3809b8c195d8d0c098add5ad84cdaa3b64a2c81b90ded3688aa1e188dc85a26dce2fe1f0cad9090df3c652d231727aea9250cafebe2bf74581"' :
                                        'id="xs-injectables-links-module-RedisModule-855ac177adabbe3809b8c195d8d0c098add5ad84cdaa3b64a2c81b90ded3688aa1e188dc85a26dce2fe1f0cad9090df3c652d231727aea9250cafebe2bf74581"' }>
                                        <li class="link">
                                            <a href="injectables/RedisService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RedisService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RoutingController.html" data-type="entity-link" >RoutingController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CoordinatesDto.html" data-type="entity-link" >CoordinatesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoutingDto.html" data-type="entity-link" >RoutingDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RedisService.html" data-type="entity-link" >RedisService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoutingService.html" data-type="entity-link" >RoutingService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});