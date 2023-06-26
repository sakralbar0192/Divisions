import { TemplateResult, html } from 'lit'
import { ISvgParams } from 'shared/types'

export function projectIcon({width, height}: ISvgParams): TemplateResult {
    return html`
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" height=${height} width=${width} viewBox="0 0 32 32">
            <rect height="2" width="12" x="8" y="6"/>
            <rect height="2" width="12" x="8" y="10"/>
            <rect height="2" width="6" x="8" y="14"/>
            <rect height="2" width="4" x="8" y="24"/>
            <path d="M29.707,19.293l-3-3a.9994.9994,0,0,0-1.414,0L16,25.5859V30h4.4141l9.2929-9.293A.9994.9994,0,0,0,29.707,19.293ZM19.5859,28H18V26.4141l5-5L24.5859,23ZM26,21.5859,24.4141,20,26,18.4141,27.5859,20Z"/>
            <path d="M12,30H6a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,6,2H22a2.0021,2.0021,0,0,1,2,2V14H22V4H6V28h6Z"/>
        </svg>
    `
}
