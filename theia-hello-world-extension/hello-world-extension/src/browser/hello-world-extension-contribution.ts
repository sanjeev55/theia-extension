import { injectable } from '@theia/core/shared/inversify';
import { CommandRegistry, MenuModelRegistry } from '@theia/core/lib/common';
import { WorkspaceCommands } from '@theia/workspace/lib/browser/workspace-commands';
import { WorkspaceFrontendContribution } from '@theia/workspace/lib/browser/workspace-frontend-contribution';

@injectable()
export class HelloWorldExtensionCommandContribution extends WorkspaceFrontendContribution {


    private blacklist = [
        WorkspaceCommands.OPEN,
        WorkspaceCommands.OPEN_FILE,
        WorkspaceCommands.OPEN_FOLDER,
        WorkspaceCommands.OPEN_WORKSPACE,
        WorkspaceCommands.OPEN_RECENT_WORKSPACE,
        WorkspaceCommands.ADD_FOLDER,
        WorkspaceCommands.SAVE_WORKSPACE_AS,
        WorkspaceCommands.CLOSE,
    ];

    registerCommands(registry: CommandRegistry): void {
        super.registerCommands(registry);
        for (const command of this.blacklist) {
            registry.unregisterCommand(command);
        }
    }
}

@injectable()
export class HelloWorldExtensionMenuContribution extends WorkspaceFrontendContribution {

    private blacklist = [
        WorkspaceCommands.OPEN,
        WorkspaceCommands.OPEN_FILE,
        WorkspaceCommands.OPEN_FOLDER,
        WorkspaceCommands.OPEN_WORKSPACE,
        WorkspaceCommands.OPEN_RECENT_WORKSPACE,
        WorkspaceCommands.ADD_FOLDER,
        WorkspaceCommands.SAVE_WORKSPACE_AS,
        WorkspaceCommands.CLOSE,
    ];

    registerMenus(registry: MenuModelRegistry): void {
        super.registerMenus(registry);
        for (const command of this.blacklist) {
            registry.unregisterMenuAction({ commandId: command.id });
        }
    }
}
