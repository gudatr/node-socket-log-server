"use strict";
function initializeTranslation(Alpine) {
    Alpine.store('lang', {
        current: 'en',
        en: {
            page_logging: 'Logging',
            page_metrics: 'Metrics',
            page_messages: 'Messages',
            page_triggers: 'Triggers',
            update_speed: 'Update Speed:',
            seconds: ' seconds',
            minutes: ' minutes',
            hours: ' hours',
            all_time: 'All time',
            auto_update_active: 'Auto Update active',
            auto_update_deactivated: 'Auto Update deactivated',
            auth_credentials_incorrect: 'Login failed',
            auth_pending: 'Login pending',
            auth_successful: 'Logged in',
            timeframe_type: 'Timeframe-Type:',
            timeframe_type_timeframe: 'Messages within timeframe',
            timeframe_type_since: 'Messages since',
            search_term: 'Search Term:',
            search: 'Search',
            filter_by_channel: 'Filter by Channel:',
            filter_by_server: 'Filter by Server:',
            time: 'Time:',
            message: 'Message:',
            level: 'Level:',
            server: 'Server:',
            data: 'Data:',
            password: 'Password:',
            close: 'Close',
            authenticate: 'Login',
            metrics_cpu: 'CPU Load',
            metrics_mem_used: 'Memory Used %',
            metrics_disk_used: 'Disk Used %',
            metrics_io_write: 'Write IO /s',
            metrics_io_read: 'Read IO /s',
            metrics_net_in: 'Traffic In MB/s',
            metrics_net_out: 'Traffic Out MB/s',
            metrics_error_rate: 'Error Rate',
            show_trigger_modal: 'Configure triggers',
            trigger_modal_title: 'Triggers',
        },
    });
    return (index) => {
        var _a;
        return (_a = Alpine.store('lang')[Alpine.store('lang').current][index]) !== null && _a !== void 0 ? _a : index;
    };
}
