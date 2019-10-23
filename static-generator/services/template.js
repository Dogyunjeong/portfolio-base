// This is to get template to generate static webs
import silverTreeTemlate from '~/templates/silverTree.json'

class Template {
    constructor (template) {
        if (template) {
            this.tlemplate = template
        }
    }

    template = silverTreeTemlate
    
    build = () => {
        
    }
}