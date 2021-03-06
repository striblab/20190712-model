import * as d3 from 'd3';
import * as c3 from 'c3';

class Chart {

    constructor(target) {
        this.target = target;
        this.chartCounts = null;
    }

    render() {
        var self = this;

        var padding = {
            top: 20,
            right: 60,
            bottom: 0,
            left: 60,
        };

        self.chartCounts = c3.generate({
            bindto: self.target,
            padding: padding,
            data: {
                columns: [
                    ['Source', 59, 39, 87, 94]
                ],
                type: 'bar',
                labels: {
                    format: {
                        'Source': d3.format(',')
                    }
                },
                line: {
                    connectNull: true
                }
            },
            legend: {
                show: false
            },
            line: {
                connectNull: true
            },
            point: {
                show: true,
                r: function(d) {
                    if (d.x == 2018) {
                        return 6;
                    } else {
                        return 2;
                    }
                }
            },
            color: {
                pattern: ['#7F98AA']
            },
            axis: {
                rotated: true,
                y: {
                    max: 100,
                    min: 0, 
                    padding: {
                        bottom: 0,
                        top: 0
                    },
                    tick: {
                        count: 4,
                        values: [0, 25, 50, 75, 100],
                        format: d3.format(',')
                    }
                },
                x: {
                    padding: {
                        right: 0,
                        left: 0
                    },
                    type: 'category',
                    categories: ['2011-2012','2013-2014','2015-2016','2017-2018'],
                    tick: {
                        multiline: false
                    }
                }
            },
            grid: {
                focus: {
                    show: false
                },
                // y: {
                //     lines: [{
                //         value: 0.5,
                //         text: '',
                //         position: 'start',
                //         class: 'powerline'
                //     }]

                // }
            },
            tooltip: {
                contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
                    return '<div class="chart-tooltip gray5"><span class="tooltip-label">' + d[0].x + ':</span>' +
                        '<span class="tooltip-value">' + defaultValueFormat(d[0].value) + '</span></div>'
                }
            }
        });

    }
}

export {
    Chart as
    default
}