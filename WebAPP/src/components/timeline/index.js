import "src/components/timeline/timeline.css";
import React from 'react';

export default class Timeline extends React.Component{
    render() {
        return (
            <div className="col-md-9">
                <ul className="timeline-v2">
                    <li className="equal-height-columns">
                        <div className="cbp_tmtime equal-height-column"><span>4/1/08</span> <span>January</span></div>
                        <i className="cbp_tmicon rounded-x hidden-xs"></i>
                        <div className="cbp_tmlabel equal-height-column">
                            <h2>Our first step</h2>
                            <div className="row">
                                <div className="col-md-4">
                                    <img className="img-responsive" src="src/img/main/img1.jpg" alt="" />
                                        <div className="md-margin-bottom-20"></div>
                                </div>
                                <div className="col-md-8">
                                    <p>Winter purslane courgette pumpkin quandong komatsuna fennel green bean cucumber watercress. Pea sprouts wattle seed rutabaga okra yarrow cress avocado grape.</p>
                                    <p>Cabbage lentil cucumber chickpea sorrel gram garbanzo plantain lotus root bok choy squash cress potato.</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="equal-height-columns">
                        <div className="cbp_tmtime equal-height-column"><span>7/2/09</span> <span>February</span></div>
                        <i className="cbp_tmicon rounded-x hidden-xs"></i>
                        <div className="cbp_tmlabel equal-height-column">
                            <h2>First achievements</h2>
                            <p>Caulie dandelion maize lentil collard greens radish arugula sweet pepper water spinach kombu courgette lettuce. Celery coriander bitterleaf epazote radicchio shallot winter purslane collard greens spring onion squash lentil. Artichoke salad bamboo shoot black-eyed pea brussels sprout garlic kohlrabi.</p>
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul className="list-unstyled">
                                        <li><i className="fa fa-check color-green"></i> Donec id elit non mi porta gravida</li>
                                        <li><i className="fa fa-check color-green"></i> Corporate and Creative</li>
                                        <li><i className="fa fa-check color-green"></i> Responsive Bootstrap Template</li>
                                        <li><i className="fa fa-check color-green"></i> Corporate and Creative</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul className="list-unstyled">
                                        <li><i className="fa fa-check color-green"></i> Donec id elit non mi porta gravida</li>
                                        <li><i className="fa fa-check color-green"></i> Corporate and Creative</li>
                                        <li><i className="fa fa-check color-green"></i> Responsive Bootstrap Template</li>
                                        <li><i className="fa fa-check color-green"></i> Corporate and Creative</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="equal-height-columns">
                        <div className="cbp_tmtime equal-height-column"><span>28/6/12</span> <span>May</span></div>
                        <i className="cbp_tmicon rounded-x hidden-xs"></i>
                        <div className="cbp_tmlabel equal-height-column">
                            <h2>Difficulties</h2>
                            <p>Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.</p>
                        </div>
                    </li>
                    <li className="equal-height-columns">
                        <div className="cbp_tmtime equal-height-column"><span>11/3/10</span> <span>March</span></div>
                        <i className="cbp_tmicon rounded-x hidden-xs"></i>
                        <div className="cbp_tmlabel equal-height-column">
                            <h2>Our Popularity</h2>
                            <p>Parsnip lotus root celery yarrow seakale tomato collard greens tigernut epazote ricebean melon tomatillo soybean chicory broccoli beet greens peanut salad. Lotus root burdock bell pepper chickweed shallot groundnut pea sprouts welsh onion wattle seed pea salsify turnip scallion peanut arugula bamboo shoot onion swiss chard.</p>

                            <div className="margin-bottom-20"></div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="progress-bar-text">
                                        <p className="text-left">HTML &amp; CSS</p>
                                        <p className="text-right">91%</p>
                                        <div className="progress progress-u progress-xs">
                                            <div className="progress-bar progress-bar-u progress-bar-u-success" role="progressbar" aria-valuenow="91" aria-valuemin="0" aria-valuemax="100" style={{width: '91%'}}>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="progress-bar-text">
                                        <p className="text-left">Web Animation</p>
                                        <p className="text-right">55%</p>
                                        <div className="progress progress-u progress-xs">
                                            <div className="progress-bar progress-bar-u progress-bar-u-info" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{width: '55%'}}>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="progress-bar-text">
                                        <p className="text-left">Web Design</p>
                                        <p className="text-right">67%</p>
                                        <div className="progress progress-u progress-xs">
                                            <div className="progress-bar progress-bar-u progress-bar-u-danger" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style={{width: '67%'}}>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="progress-bar-text">
                                        <p className="text-left">PHP &amp; Javascript</p>
                                        <p className="text-right">73%</p>
                                        <div className="progress progress-u progress-xs">
                                            <div className="progress-bar progress-bar-u progress-bar-u-warning" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style={{width: '73%'}}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="equal-height-columns">
                        <div className="cbp_tmtime equal-height-column"><span>2/4/11</span> <span>April</span></div>
                        <i className="cbp_tmicon rounded-x hidden-xs"></i>
                        <div className="cbp_tmlabel equal-height-column">
                            <h2>Back to the past</h2>
                            <p>Peanut gourd nori welsh onion rock melon mustard jícama. Desert raisin amaranth kombu aubergine kale seakale brussels sprout pea. Black-eyed pea celtuce bamboo shoot salad kohlrabi leek squash prairie turnip catsear rock melon chard taro broccoli turnip greens. Fennel quandong potato watercress ricebean swiss chard garbanzo. Endive daikon brussels sprout lotus root silver beet epazote melon shallot.</p>
                        </div>
                    </li>
                    <li className="equal-height-columns">
                        <div className="cbp_tmtime equal-height-column"><span>18/7/13</span> <span>June</span></div>
                        <i className="cbp_tmicon rounded-x hidden-xs"></i>
                        <div className="cbp_tmlabel equal-height-column">
                            <h2>Unify in recent years</h2>
                            <p>Caulie dandelion maize lentil collard greens radish arugula sweet pepper water spinach kombu courgette lettuce. Celery coriander bitterleaf epazote radicchio shallot winter purslane collard greens spring onion squash lentil. Artichoke salad bamboo shoot black-eyed pea brussels sprout garlic kohlrabi.</p>
                            <p>Bitterleaf celery coriander epazote radicchio shallot winter purslane collard greens spring onion squash lentil. Artichoke salad bamboo shoot black-eyed pea brussels sprout.</p>

                            <div className="margin-bottom-20"></div>

                            <div className="row">
                                <div className="col-md-4 col-xs-6">
                                    <img className="img-responsive md-margin-bottom-10" src="src/img/main/img2.jpg" alt="" />
                                </div>
                                <div className="col-md-4 col-xs-6">
                                    <img className="img-responsive md-margin-bottom-10" src="src/img/main/img4.jpg" alt="" />
                                </div>
                                <div className="col-md-4 col-xs-6">
                                    <img className="img-responsive md-margin-bottom-10" src="src/img/main/img3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}