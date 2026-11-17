
class Snowflake {
    constructor(scene, x, y, z) {

        this.snowflake = document.createElement("a-entity");
        this.snowflake.setAttribute("position", {x: x, y: y, z: z});

        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.05;

        let branch1 = document.createElement("a-cylinder");
        branch1.setAttribute("height", "3");
        branch1.setAttribute("radius", "0.08");
        branch1.setAttribute("color", "white");
        this.snowflake.append(branch1);

        let branch2 = document.createElement("a-cylinder");
        branch2.setAttribute("height", "3");
        branch2.setAttribute("radius", "0.08");
        branch2.setAttribute("color", "white");
        branch2.setAttribute("rotation", {x: 0, y: 0, z: 60});
        this.snowflake.append(branch2);

        let branch3 = document.createElement("a-cylinder");
        branch3.setAttribute("height", "3");
        branch3.setAttribute("radius", "0.08");
        branch3.setAttribute("color", "white");
        branch3.setAttribute("rotation", {x: 0, y: 0, z: -60});
        this.snowflake.append(branch3);

        scene.append(this.snowflake);
    }

    fall() {
        this.y -= this.dy;

        this.snowflake.setAttribute("position", {
            x: this.x,
            y: this.y,
            z: this.z
        });
    }
}
